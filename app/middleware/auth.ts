import { defineNuxtRouteMiddleware, navigateTo, useCookie, useState } from 'nuxt/app'

export default defineNuxtRouteMiddleware(() => {
  const token = useCookie<string | null>('auth-token')
  const user = useState<any>('auth.user')

  if (!token.value || !user.value) {
    return navigateTo('/')
  }
})