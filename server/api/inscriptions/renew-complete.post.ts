import { PrismaClient } from '@prisma/client'
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

    let decoded: any
    let userId: number
    
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
      userId = decoded.userId
    } catch (jwtError) {
      console.error('JWT Error:', jwtError)
      throw createError({
        statusCode: 401,
        statusMessage: 'Token invalide ou expiré'
      })
    }

    const body = await readBody(event)
    const { schoolYear, personalData, guardianData, healthData, selectedGroups } = body

    if (!schoolYear || !personalData || !healthData || !selectedGroups || selectedGroups.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données de renouvellement incomplètes'
      })
    }

    // Vérifier la déclaration santé
    if (!healthData.healthDeclaration) {
      throw createError({
        statusCode: 400,
        statusMessage: 'La déclaration sur le questionnaire santé est obligatoire'
      })
    }

    // Vérifier qu'il n'y a pas déjà une inscription pour l'année demandée
    const existingRegistration = await prisma.registration.findFirst({
      where: {
        dancer: {
          userId: userId
        },
        schoolYear: schoolYear,
        status: {
          in: ['SUBMITTED', 'APPROVED', 'REJECTED']
        }
      }
    })

    if (existingRegistration) {
      throw createError({
        statusCode: 409,
        statusMessage: `Vous avez déjà une inscription pour l'année ${schoolYear}`
      })
    }

    // Récupérer le danseur existant
    const existingDancer = await prisma.dancer.findFirst({
      where: { userId: userId }
    })

    if (!existingDancer) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Aucune inscription précédente trouvée'
      })
    }

    // Fonction pour convertir les niveaux scolaires
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

    // Mettre à jour les informations du danseur si nécessaire
    const updatedDancerData: any = {
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      email: personalData.email,
      phone: personalData.phone,
      address: personalData.address,
      postalCode: personalData.postalCode,
      city: personalData.city,
    }

    // Ajouter des notes sur le certificat médical si nécessaire
    let medicalNotes = existingDancer.otherInfo || ''
    if (healthData.hasHealthProblems || healthData.hasCardiacProblems || healthData.takesMedication) {
      const newMedicalNote = `\n[RENOUVELLEMENT ${schoolYear} - CERTIFICAT MÉDICAL REQUIS - Déclaré le ${new Date().toISOString()}]`
      medicalNotes += newMedicalNote
    }
    updatedDancerData.otherInfo = medicalNotes

    // Mettre à jour le danseur
    const updatedDancer = await prisma.dancer.update({
      where: { id: existingDancer.id },
      data: updatedDancerData
    })

    // Mettre à jour les informations du responsable légal si nécessaire
    if (guardianData) {
      const existingGuardian = await prisma.guardian.findFirst({
        where: { dancerId: existingDancer.id }
      })

      if (existingGuardian) {
        await prisma.guardian.update({
          where: { id: existingGuardian.id },
          data: {
            firstName: guardianData.firstName,
            lastName: guardianData.lastName,
            email: guardianData.email,
            phone: guardianData.phone,
            relationship: guardianData.relationship,
            authorized: guardianData.authorized,
            address: personalData.address,
            postalCode: personalData.postalCode,
            city: personalData.city
          }
        })
      } else {
        // Créer un nouveau responsable légal si il n'en existait pas
        await prisma.guardian.create({
          data: {
            dancerId: existingDancer.id,
            firstName: guardianData.firstName,
            lastName: guardianData.lastName,
            email: guardianData.email,
            phone: guardianData.phone,
            relationship: guardianData.relationship,
            authorized: guardianData.authorized,
            address: personalData.address,
            postalCode: personalData.postalCode,
            city: personalData.city
          }
        })
      }
    }

    // Créer les nouvelles inscriptions pour les groupes sélectionnés
    for (const group of selectedGroups) {
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

      // Créer l'inscription pour la nouvelle année scolaire
      await prisma.registration.create({
        data: {
          dancerId: existingDancer.id,
          danceGroupId: danceGroup.id,
          schoolYear: schoolYear,
          sportCode: null,
          status: 'SUBMITTED',
          submittedAt: new Date(),
          reviewedAt: null,
          reviewedBy: null,
          notes: `Renouvellement depuis année précédente. ${healthData.hasHealthProblems || healthData.hasCardiacProblems || healthData.takesMedication ? 'Certificat médical requis.' : ''}`
        }
      })
    }

    return {
      success: true,
      message: 'Renouvellement effectué avec succès',
      dancerId: existingDancer.id,
      schoolYear: schoolYear,
      selectedGroups: selectedGroups.length
    }

  } catch (error: any) {
    console.error('Erreur lors du renouvellement:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erreur lors du renouvellement'
    })
  } finally {
    await prisma.$disconnect()
  }
})