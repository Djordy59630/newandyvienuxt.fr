export default defineNuxtRouteMiddleware(async () => {
  const { user } = useAuth()
  
  // Si l'utilisateur est admin, le rediriger vers le panel admin
  if (user.value?.role === 'admin') {
    return navigateTo('/admin/panel')
  }
})