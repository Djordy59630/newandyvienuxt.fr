import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Vérifier l'authentification et les droits admin
    const token = getCookie(event, 'auth-token') || getHeader(event, 'authorization')?.replace('Bearer ', '')
    
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Token manquant'
      })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any
    
    // Vérifier que l'utilisateur est admin
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    })

    if (!user || user.roles !== 'admin') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Accès refusé - Administrateur uniquement'
      })
    }

    // Récupérer toutes les inscriptions avec les détails
    const registrations: any = await (prisma.registration as any).findMany({
      include: {
        dancer: {
          include: {
            user: true,
            emergencyContacts: true,
            guardian: true
          }
        },
        danceGroup: true,
        reviewer: true
      },
      orderBy: [
        { status: 'asc' },
        { createdAt: 'desc' }
      ]
    })

    return {
      success: true,
      registrations: registrations
    }

  } catch (error: any) {
    console.error('Erreur lors de la récupération des inscriptions:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de la récupération des inscriptions'
    })
  } finally {
    await prisma.$disconnect()
  }
})