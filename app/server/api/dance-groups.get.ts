import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Récupérer tous les groupes de danse actifs
    const danceGroups = await prisma.danceGroup.findMany({
      where: {
        isActive: true
      },
      orderBy: [
        { id: 'asc' }
      ]
    })

    return {
      success: true,
      groups: danceGroups
    }

  } catch (error: any) {
    console.error('Erreur lors de la récupération des groupes de danse:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la récupération des groupes de danse'
    })
  } finally {
    await prisma.$disconnect()
  }
})