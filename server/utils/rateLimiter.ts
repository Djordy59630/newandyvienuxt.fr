import { RateLimiterMemory } from 'rate-limiter-flexible'
import type { H3Event } from 'h3'

// Différents limiteurs pour différentes routes
const loginLimiter = new RateLimiterMemory({
  keyPrefix: 'login',
  points: 5, // 5 tentatives
  duration: 900, // par 15 minutes
  blockDuration: 900, // bloquer pour 15 minutes
})

const registerLimiter = new RateLimiterMemory({
  keyPrefix: 'register',
  points: 3, // 3 inscriptions
  duration: 3600, // par heure
  blockDuration: 3600, // bloquer pour 1 heure
})

const generalLimiter = new RateLimiterMemory({
  keyPrefix: 'general',
  points: 100, // 100 requêtes
  duration: 60, // par minute
})

export async function applyRateLimit(event: H3Event, type: 'login' | 'register' | 'general' = 'general') {
  const ip = getClientIP(event) || 'unknown'
  
  let limiter
  switch (type) {
    case 'login':
      limiter = loginLimiter
      break
    case 'register':
      limiter = registerLimiter
      break
    default:
      limiter = generalLimiter
  }
  
  try {
    await limiter.consume(ip)
  } catch (rateLimiterRes: any) {
    const retryAfter = Math.round(rateLimiterRes.msBeforeNext / 1000) || 60
    
    setHeader(event, 'Retry-After', retryAfter)
    setHeader(event, 'X-RateLimit-Limit', limiter.points)
    setHeader(event, 'X-RateLimit-Remaining', rateLimiterRes.remainingPoints || 0)
    setHeader(event, 'X-RateLimit-Reset', new Date(Date.now() + rateLimiterRes.msBeforeNext).toISOString())
    
    throw createError({
      statusCode: 429,
      statusMessage: `Trop de tentatives. Veuillez réessayer dans ${retryAfter} secondes.`
    })
  }
}

// Fonction helper pour obtenir l'IP du client
function getClientIP(event: H3Event): string | null {
  const forwardedFor = getHeader(event, 'x-forwarded-for')
  if (forwardedFor && typeof forwardedFor === 'string') {
    const firstIp = forwardedFor.split(',')[0]?.trim()
    if (firstIp) return firstIp
  }
  
  const realIp = getHeader(event, 'x-real-ip')
  if (realIp && typeof realIp === 'string') {
    return realIp
  }
  
  return event.node.req.socket?.remoteAddress || null
}