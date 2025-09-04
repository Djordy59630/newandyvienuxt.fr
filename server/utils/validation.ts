/**
 * Utilitaires de validation sécurisée
 */

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

/**
 * Valide la force d'un mot de passe
 */
export function validatePassword(password: string): ValidationResult {
  const errors: string[] = []
  
  if (!password) {
    errors.push('Le mot de passe est requis')
    return { isValid: false, errors }
  }
  
  // Minimum 8 caractères
  if (password.length < 8) {
    errors.push('Le mot de passe doit contenir au moins 8 caractères')
  }
  
  // Maximum 128 caractères pour éviter les attaques DoS
  if (password.length > 128) {
    errors.push('Le mot de passe ne peut pas dépasser 128 caractères')
  }
  
  // Au moins une minuscule
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre minuscule')
  }
  
  // Au moins une majuscule
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une lettre majuscule')
  }
  
  // Au moins un chiffre
  if (!/[0-9]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre')
  }
  
  // Au moins un caractère spécial
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*)')
  }
  
  // Vérifier les patterns courants faibles
  const weakPatterns = [
    /^(.)\1+$/, // Répétition du même caractère
    /^(012|123|234|345|456|567|678|789|890|abc|bcd|cde|def)/i, // Séquences
    /^(azerty|qwerty|password|motdepasse|admin|test)/i, // Mots courants
    /^(.{1,2})\1+$/, // Répétition de patterns courts
  ]
  
  for (const pattern of weakPatterns) {
    if (pattern.test(password)) {
      errors.push('Le mot de passe est trop prévisible. Veuillez choisir un mot de passe plus complexe.')
      break
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Valide un email de façon stricte
 */
export function validateEmail(email: string): ValidationResult {
  const errors: string[] = []
  
  if (!email) {
    errors.push('L\'email est requis')
    return { isValid: false, errors }
  }
  
  // Pattern RFC 5322 simplifié mais strict
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  if (!emailRegex.test(email)) {
    errors.push('Format d\'email invalide')
  }
  
  if (email.length > 254) {
    errors.push('L\'email est trop long')
  }
  
  // Vérifier les domaines jetables courants
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    'throwaway.email'
  ]
  
  const domain = email.split('@')[1]?.toLowerCase()
  if (domain && disposableDomains.includes(domain)) {
    errors.push('Les adresses email temporaires ne sont pas autorisées')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Nettoie et valide une chaîne de caractères
 */
export function sanitizeString(str: string, maxLength: number = 255): string {
  if (!str) return ''
  
  return str
    .trim()
    .slice(0, maxLength)
    // Supprimer les caractères de contrôle dangereux
    .replace(/[\x00-\x1F\x7F]/g, '')
}

/**
 * Valide un numéro de téléphone français
 */
export function validatePhoneNumber(phone: string): ValidationResult {
  const errors: string[] = []
  
  if (!phone) {
    errors.push('Le numéro de téléphone est requis')
    return { isValid: false, errors }
  }
  
  // Pattern pour numéros français
  const phoneRegex = /^(?:(?:\+|00)33[\s.-]?(?:\(0\))?|0)[1-9](?:[\s.-]?\d{2}){4}$/
  const cleanPhone = phone.replace(/[\s.-]/g, '')
  
  if (!phoneRegex.test(phone) || cleanPhone.length < 10 || cleanPhone.length > 12) {
    errors.push('Format de numéro de téléphone invalide (ex: 06 12 34 56 78)')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}