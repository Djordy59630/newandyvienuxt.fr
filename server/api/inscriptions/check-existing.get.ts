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

    // Vérifier si l'utilisateur a déjà une inscription COMPLETE (SUBMITTED, APPROVED ou REJECTED)
    // @ts-ignore - Modèle Prisma généré
    const existingDancer = await prisma.dancer.findFirst({
      where: { 
        userId: userId,
        registrations: {
          some: {
            status: {
              in: ['SUBMITTED', 'APPROVED', 'REJECTED']
            }
          }
        }
      },
      include: {
        // @ts-ignore
        registrations: {
          where: {
            status: {
              in: ['SUBMITTED', 'APPROVED', 'REJECTED']
            }
          },
          include: {
            // @ts-ignore
            danceGroup: true
          }
        }
      }
    })

    if (existingDancer) {
      return {
        hasExistingRegistration: true,
        dancer: {
          id: existingDancer.id,
          firstName: existingDancer.firstName,
          lastName: existingDancer.lastName,
          email: existingDancer.email,
          // @ts-ignore
          registrations: existingDancer.registrations
        }
      }
    }

    return {
      hasExistingRegistration: false
    }

  } catch (error: any) {
    console.error('Erreur lors de la vérification de l\'inscription:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erreur lors de la vérification'
    })
  } finally {
    await prisma.$disconnect()
  }
})