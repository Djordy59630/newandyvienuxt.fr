export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie('auth-token')
  
  if (!token.value) {
    return navigateTo('/')
  }

  try {
    // Vérifier le rôle de l'utilisateur via l'API
    const response = await $fetch('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token.value}`
      }
    })

    if (!response.user || response.user.role !== 'admin') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Accès refusé - Administrateur uniquement'
      })
    }
  } catch (error) {
    return navigateTo('/dashboard')
  }
})