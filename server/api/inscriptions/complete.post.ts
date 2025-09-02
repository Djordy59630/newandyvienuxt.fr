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

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
    const userId = decoded.userId
    const userEmail = decoded.email

    // Vérifier si l'utilisateur a déjà une inscription COMPLETE (SUBMITTED, APPROVED, REJECTED)
    // @ts-ignore - Modèle Prisma généré
    const existingCompleteRegistration = await prisma.registration.findFirst({
      where: { 
        dancer: {
          userId: userId
        },
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
    // @ts-ignore - Modèle Prisma généré
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
    const { step1, step2, step3, step4 } = body

    if (!step1 || !step4) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données d\'inscription incomplètes'
      })
    }

    // 1. Créer le danseur
    // @ts-ignore - Modèle Prisma généré
    const dancer = await prisma.dancer.create({
      data: {
        userId: userId,
        email: userEmail,
        firstName: step1.firstName,
        lastName: step1.lastName,
        birthDate: new Date(step1.birthDate),
        address: step1.address,
        postalCode: step1.postalCode,
        city: step1.city || 'Non spécifié',
        phone: step1.phone,
        schoolLevel: 'ADULTE', // Défaut, vous pouvez ajuster selon l'âge
        tShirtSize: 'M',
        otherInfo: null,
      }
    })

    // 2. Créer le responsable légal si mineur
    if (step2 && step2.guardianEmail) {
      // @ts-ignore - Modèle Prisma généré  
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
    if (step3 && step3.emergencyContacts && step3.emergencyContacts.length > 0) {
      for (const contact of step3.emergencyContacts) {
        // @ts-ignore - Modèle Prisma généré
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
        // @ts-ignore - Modèle Prisma généré
        let danceGroup = await prisma.danceGroup.findFirst({
          where: { name: group.name }
        })

        if (!danceGroup) {
          // @ts-ignore - Modèle Prisma généré
          danceGroup = await prisma.danceGroup.create({
            data: {
              name: group.name,
              ageGroup: group.ageRange, // Utiliser ageGroup au lieu de ageRange
              schedule: group.schedule,
              description: group.description || '',
              isActive: true
            }
          })
        }

        // Créer l'inscription
        // @ts-ignore - Modèle Prisma généré
        await prisma.registration.create({
          data: {
            dancerId: dancer.id,
            danceGroupId: danceGroup.id,
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