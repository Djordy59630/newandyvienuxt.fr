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

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as { userId: number; email: string }
    
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

    // Récupérer tous les groupes de danse avec le nombre d'inscrits
    const groups = await prisma.danceGroup.findMany({
      include: {
        _count: {
          select: {
            registrations: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })

    return {
      success: true,
      groups: groups.map(group => ({
        id: group.id,
        name: group.name,
        description: group.description,
        schedule: group.schedule,
        ageGroup: group.ageGroup,
        isActive: group.isActive,
        createdAt: group.createdAt,
        updatedAt: group.updatedAt,
        registrationCount: group._count.registrations,
        ageMin: group.ageMin,
        ageMax: group.ageMax
      }))
    }

  } catch (error: any) {
    console.error('Erreur lors de la récupération des groupes:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de la récupération des groupes'
    })
  } finally {
    await prisma.$disconnect()
  }
})