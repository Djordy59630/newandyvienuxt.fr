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
        email: step1.email || `${step1.firstName}.${step1.lastName}@temp.com`,
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
      await prisma.guardians.create({
        data: {
          dancerId: dancer.id,
          email: step2.guardianEmail,
          firstName: 'Non spécifié',
          lastName: 'Non spécifié',
          address: step1.address,
          postalCode: step1.postalCode,
          city: step1.city || 'Non spécifié',
          phone: step1.phone,
          authorized: false
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
            type: 'EMERGENCY_ONLY', // Utiliser l'enum correct
            firstName: contact.name.split(' ')[0] || contact.name,
            lastName: contact.name.split(' ').slice(1).join(' ') || '',
            phone: contact.phone
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
            status: 'DRAFT', // Utiliser l'enum correct
            submittedAt: null,
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