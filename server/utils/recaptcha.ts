/**
 * Utilitaire pour la vérification reCAPTCHA
 */

export interface RecaptchaResponse {
  success: boolean
  score?: number
  'error-codes'?: string[]
}

/**
 * Vérifie un token reCAPTCHA v3
 */
export async function verifyRecaptcha(token: string, expectedAction?: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  
  if (!secretKey || secretKey === 'your-recaptcha-secret-key-here') {
    // En développement, on peut désactiver reCAPTCHA
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ reCAPTCHA désactivé en développement')
      return true
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration reCAPTCHA manquante'
    })
  }
  
  if (!token) {
    return false
  }
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token
      })
    })
    
    const data: RecaptchaResponse = await response.json()
    
    if (!data.success) {
      console.warn('reCAPTCHA échec:', data['error-codes'])
      return false
    }
    
    // Pour reCAPTCHA v3, vérifier le score (0.0 = bot, 1.0 = humain)
    if (data.score !== undefined) {
      const minScore = 0.5 // Score minimum acceptable
      
      if (data.score < minScore) {
        console.warn(`reCAPTCHA score trop bas: ${data.score} < ${minScore}`)
        return false
      }
    }
    
    return true
    
  } catch (error) {
    console.error('Erreur vérification reCAPTCHA:', error)
    return false
  }
}

/**
 * Middleware pour exiger reCAPTCHA
 */
export async function requireRecaptcha(event: any, expectedAction?: string): Promise<void> {
  // reCAPTCHA désactivé globalement
  console.warn('⚠️ reCAPTCHA middleware désactivé')
  return
}