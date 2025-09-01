// Types globaux pour Nuxt auto-imports
declare global {
  const definePageMeta: typeof import('nuxt/app')['definePageMeta']
  const useAuth: typeof import('~/app/composables/useAuth')['useAuth']
  const ref: typeof import('vue')['ref']
  const computed: typeof import('vue')['computed']
  const useState: typeof import('nuxt/app')['useState']
  const useCookie: typeof import('nuxt/app')['useCookie']
  const navigateTo: typeof import('nuxt/app')['navigateTo']
  const useHead: typeof import('nuxt/app')['useHead']
}

export {}