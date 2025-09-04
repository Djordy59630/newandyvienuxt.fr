import crypto from 'crypto'
import type { H3Event } from 'h3'

const csrfTokens = new Map<string, { token: string; expires: number }>()

/**
 * Génère un token CSRF
 */
export function generateCSRFToken(sessionId: string): string {
  const token = crypto.randomBytes(32).toString('hex')
  const expires = Date.now() + 3600000 // 1 heure
  
  csrfTokens.set(sessionId, { token, expires })
  
  // Nettoyer les tokens expirés
  cleanupExpiredTokens()
  
  return token
}

/**
 * Vérifie un token CSRF
 */
export function verifyCSRFToken(sessionId: string, token: string): boolean {
  const stored = csrfTokens.get(sessionId)
  
  if (!stored || stored.expires < Date.now()) {
    return false
  }
  
  return stored.token === token
}

/**
 * Middleware pour vérifier le CSRF sur les mutations
 */
export function requireCSRFToken(event: H3Event): void {
  const method = event.node.req.method?.toUpperCase()
  
  // Ignorer les méthodes safe
  if (['GET', 'HEAD', 'OPTIONS'].includes(method || '')) {
    return
  }
  
  const sessionId = getCookie(event, 'sessionId')
  const csrfToken = getHeader(event, 'x-csrf-token')
  
  if (!sessionId || !csrfToken) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Token CSRF manquant'
    })
  }
  
  if (!verifyCSRFToken(sessionId, csrfToken)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Token CSRF invalide'
    })
  }
}

/**
 * Nettoie les tokens expirés
 */
function cleanupExpiredTokens(): void {
  const now = Date.now()
  for (const [key, value] of csrfTokens.entries()) {
    if (value.expires < now) {
      csrfTokens.delete(key)
    }
  }
}