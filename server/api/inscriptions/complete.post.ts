import { dancers_schoolLevel, PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Vérifier l'authentification
    const token = getCookie(event, 'auth-token') || getHeader(event, 'authorization')?.replace('Bearer ', '')
    
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Token manquant'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
    const userId = decoded.userId
    const userEmail = decoded.email

    // Obtenir l'année scolaire actuelle
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const currentSchoolYear = month >= 9 ? `${year}-${year + 1}` : `${year - 1}-${year}`

    // Vérifier si l'utilisateur a déjà une inscription COMPLETE pour l'année scolaire actuelle
    const existingCompleteRegistration = await prisma.registration.findFirst({
      where: { 
        dancer: {
          userId: userId
        },
        schoolYear: currentSchoolYear,
        status: {
          in: ['SUBMITTED', 'APPROVED', 'REJECTED']
        }
      }
    })

    if (existingCompleteRegistration) {
      throw createError({
        statusCode: 409,
        statusMessage: 'Vous avez déjà une demande d\'inscription validée. Un seul dossier par utilisateur est autorisé.'
      })
    }

    // Supprimer les inscriptions DRAFT existantes pour ce user (permet de recommencer)
    const existingDraftDancer = await prisma.dancer.findFirst({
      where: { userId: userId }
    })

    if (existingDraftDancer) {
      // Supprimer toutes les données liées en cascade
      await prisma.registration.deleteMany({
        where: { dancerId: existingDraftDancer.id }
      })
      await prisma.emergencyContact.deleteMany({
        where: { dancerId: existingDraftDancer.id }
      })
      await prisma.guardian.deleteMany({
        where: { dancerId: existingDraftDancer.id }
      })
      await prisma.dancer.delete({
        where: { id: existingDraftDancer.id }
      })
    }

    // Récupérer les données du body
    const body = await readBody(event)
    const { step1, health, step2, step3, step4 } = body

    if (!step1 || !health || !step4) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données d\'inscription incomplètes (étape 1, questionnaire santé ou étape 4 manquante)'
      })
    }

    // Vérifier la déclaration santé
    if (!health.healthDeclaration) {
      throw createError({
        statusCode: 400,
        statusMessage: 'La déclaration sur le questionnaire santé est obligatoire'
      })
    }

    // Fonction pour convertir les anciennes valeurs vers les nouvelles
    const convertSchoolLevel = (level: string) => {
      const mapping: Record<string, string> = {
        'CP': 'CP',
        'CE1': 'CE1', 
        'CE2': 'CE2',
        'CM1': 'CM1',
        'CM2': 'CM2',
        '6ème': 'SIXIEME',
        'SIXIEME': 'SIXIEME',
        '5ème': 'CINQUIEME',
        'CINQUIEME': 'CINQUIEME',
        '4ème': 'QUATRIEME',
        'QUATRIEME': 'QUATRIEME',
        '3ème': 'TROISIEME',
        'TROISIEME': 'TROISIEME',
        'Seconde': 'SECONDE',
        'SECONDE': 'SECONDE',
        'Première': 'PREMIERE',
        'PREMIERE': 'PREMIERE',
        'Terminale': 'TERMINALE',
        'TERMINALE': 'TERMINALE',
        'Bac+1': 'POST_BAC',
        'Bac+2': 'POST_BAC',
        'Bac+3': 'POST_BAC',
        'Bac+4': 'POST_BAC',
        'Bac+5 et plus': 'POST_BAC',
        'POST_BAC': 'POST_BAC',
        'Adulte': 'ADULTE',
        'ADULTE': 'ADULTE'
      }
      return mapping[level] || 'ADULTE'
    }

    // 1. Créer le danseur
    const dancer = await prisma.dancer.create({
      data: {
        userId: userId,
        email: step1.email || userEmail,
        firstName: step1.firstName,
        lastName: step1.lastName,
        birthDate: new Date(step1.birthDate),
        address: step1.address,
        postalCode: step1.postalCode,
        city: step1.city || 'Non spécifié',
        phone: step1.phone,
        schoolLevel: convertSchoolLevel(step1.schoolLevel || 'ADULTE') as dancers_schoolLevel,
        tShirtSize: step1.tshirtSize || step1.tShirtSize || 'M',
        otherInfo: step1.otherInfo || null,
      }
    })

    // Stocker le statut de santé dans otherInfo ou une note
    if (health.requiresCertificate) {
      // Mettre à jour le danseur pour noter qu'un certificat médical est requis
      await prisma.dancer.update({
        where: { id: dancer.id },
        data: {
          otherInfo: (dancer.otherInfo || '') + '\n[CERTIFICAT MÉDICAL REQUIS - Déclaré le ' + new Date().toISOString() + ']'
        }
      })
    }

    // 2. Créer le responsable légal si mineur
    if (step2 && step2.guardianEmail) {
      await prisma.guardian.create({
        data: {
          dancerId: dancer.id,
          email: step2.guardianEmail,
          firstName: step2.guardianFirstName || 'Non spécifié',
          lastName: step2.guardianLastName || 'Non spécifié',
          address: step1.address,
          postalCode: step1.postalCode,
          city: step1.city || 'Non spécifié',
          phone: step1.phone,
          authorized: step2.guardianAuthorized || false,
          relationship: step2.guardianRelationship || 'Parent'
        }
      })
    }

    // 3. Créer les contacts d'urgence
    console.log('step3 data:', step3)
    console.log('step3.emergencyContacts:', step3?.emergencyContacts)
    if (step3 && step3.emergencyContacts && step3.emergencyContacts.length > 0) {
      console.log('Creating', step3.emergencyContacts.length, 'emergency contacts')
      for (const contact of step3.emergencyContacts) {
        await prisma.emergencyContact.create({
          data: {
            dancerId: dancer.id,
            type: contact.type || 'EMERGENCY_ONLY', // Utiliser le type fourni
            firstName: contact.firstName || '',
            lastName: contact.lastName || '',
            phone: contact.phone,
            relationship: contact.relationship || 'Proche'
          }
        })
      }
    }

    // 4. Créer les inscriptions aux groupes de danse
    if (step4 && step4.selectedDanceGroups && step4.selectedDanceGroups.length > 0) {
      for (const group of step4.selectedDanceGroups) {
        // Vérifier si le groupe existe, sinon le créer
        let danceGroup = await prisma.danceGroup.findFirst({
          where: { name: group.name }
        })

        if (!danceGroup) {
          danceGroup = await prisma.danceGroup.create({
            data: {
              name: group.name,
              ageGroup: group.ageGroup,
              schedule: group.schedule,
              description: group.description || '',
              isActive: true
            }
          })
        }

        // Créer l'inscription
        await prisma.registration.create({
          data: {
            dancerId: dancer.id,
            danceGroupId: danceGroup.id,
            schoolYear: currentSchoolYear, // Ajouter l'année scolaire
            sportCode: null,
            status: 'SUBMITTED', // Marquer comme SUBMITTED car l'inscription est complète
            submittedAt: new Date(),
            reviewedAt: null,
            reviewedBy: null,
            notes: null
          }
        })
      }
    }

    return {
      success: true,
      message: 'Inscription sauvegardée avec succès',
      dancerId: dancer.id
    }

  } catch (error: any) {
    console.error('Erreur lors de la sauvegarde de l\'inscription:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erreur lors de la sauvegarde de l\'inscription'
    })
  } finally {
    await prisma.$disconnect()
  }
})