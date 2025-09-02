import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const registrationId = parseInt(getRouterParam(event, 'id') || '0')
    const body = await readBody(event)
    const { status, notes } = body

    if (!registrationId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'ID d\'inscription invalide'
      })
    }

    if (!['APPROVED', 'REJECTED'].includes(status)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Statut invalide. Utilisez APPROVED ou REJECTED'
      })
    }

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

    // Mettre à jour l'inscription
    const updatedRegistration: any = await (prisma.registration as any).update({
      where: { id: registrationId },
      data: {
        status: status,
        reviewedAt: new Date(),
        reviewedBy: decoded.userId,
        notes: notes || null
      },
      include: {
        dancer: {
          include: {
            user: true
          }
        },
        danceGroup: true,
        reviewer: true
      }
    })

    return {
      success: true,
      message: `Inscription ${status === 'APPROVED' ? 'approuvée' : 'rejetée'} avec succès`,
      registration: updatedRegistration
    }

  } catch (error: any) {
    console.error('Erreur lors de la mise à jour de l\'inscription:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur lors de la mise à jour de l\'inscription'
    })
  } finally {
    await prisma.$disconnect()
  }
})