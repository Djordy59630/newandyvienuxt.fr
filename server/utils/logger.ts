/**
 * Logger sécurisé qui nettoie les informations sensibles
 */

interface LogContext {
  userId?: number
  endpoint?: string
  method?: string
  ip?: string
}

/**
 * Nettoie les erreurs pour enlever les infos sensibles
 */
function sanitizeError(error: any): string {
  // Liste des mots-clés sensibles à masquer
  const sensitivePatterns = [
    /password["\s:=]+"[^"]+"/gi,
    /token["\s:=]+"[^"]+"/gi,
    /secret["\s:=]+"[^"]+"/gi,
    /api[_-]?key["\s:=]+"[^"]+"/gi,
    /authorization["\s:=]+"[^"]+"/gi,
    /bearer\s+[a-zA-Z0-9._-]+/gi,
    /email["\s:=]+"[^"]+"/gi,
  ]
  
  let message = error?.message || String(error)
  
  // Masquer les patterns sensibles
  for (const pattern of sensitivePatterns) {
    message = message.replace(pattern, '[REDACTED]')
  }
  
  // Ne pas logguer la stack trace en production
  if (process.env.NODE_ENV === 'production') {
    return message
  }
  
  // En dev, on peut garder plus d'infos mais toujours nettoyer
  const stack = error?.stack || ''
  return `${message}\n${stack.split('\n').slice(0, 3).join('\n')}`
}

/**
 * Log une erreur de manière sécurisée
 */
export function logError(message: string, error: any, context?: LogContext): void {
  const sanitized = sanitizeError(error)
  const timestamp = new Date().toISOString()
  
  // En production, on pourrait envoyer à un service de monitoring
  if (process.env.NODE_ENV === 'production') {
    // TODO: Envoyer à Sentry, LogRocket, etc.
    console.error(JSON.stringify({
      timestamp,
      level: 'error',
      message,
      error: sanitized,
      context
    }))
  } else {
    // En dev, format plus lisible
    console.error(`[${timestamp}] ERROR: ${message}`)
    if (context) {
      console.error('Context:', {
        ...context,
        // Masquer les IDs en prod
        userId: context.userId ? `user_${context.userId}` : undefined
      })
    }
    console.error('Details:', sanitized)
  }
}

/**
 * Log une information
 */
export function logInfo(message: string, data?: any): void {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[${new Date().toISOString()}] INFO: ${message}`, data || '')
  }
}

/**
 * Log un warning
 */
export function logWarning(message: string, data?: any): void {
  console.warn(`[${new Date().toISOString()}] WARN: ${message}`, data || '')
}