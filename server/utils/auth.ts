import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

export interface JWTPayload {
  userId: number
  email: string
}

/**
 * Vérifie et décode un token JWT
 * @throws Error si JWT_SECRET n'est pas défini ou si le token est invalide
 */
export function verifyJWT(token: string): JWTPayload {
  const secret = process.env.JWT_SECRET
  
  if (!secret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration serveur manquante'
    })
  }
  
  try {
    return jwt.verify(token, secret) as JWTPayload
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token invalide ou expiré'
    })
  }
}

/**
 * Récupère et vérifie le token depuis les cookies ou headers
 */
export function getAuthenticatedUser(event: H3Event): JWTPayload {
  const token = getCookie(event, 'auth-token') || 
                getHeader(event, 'authorization')?.replace('Bearer ', '')
  
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token manquant'
    })
  }
  
  return verifyJWT(token)
}

/**
 * Vérifie qu'un utilisateur est administrateur
 */
export async function requireAdmin(event: H3Event, prisma: any): Promise<JWTPayload> {
  const decoded = getAuthenticatedUser(event)
  
  const user = await prisma.user.findUnique({
    where: { id: decoded.userId }
  })

  if (!user || user.roles !== 'admin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Accès refusé - Administrateur uniquement'
    })
  }
  
  return decoded
}

/**
 * Génère un token JWT
 * @throws Error si JWT_SECRET n'est pas défini
 */
export function generateJWT(userId: number, email: string): string {
  const secret = process.env.JWT_SECRET
  
  if (!secret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration serveur manquante'
    })
  }
  
  return jwt.sign(
    { userId, email },
    secret,
    { expiresIn: '7d' }
  )
}