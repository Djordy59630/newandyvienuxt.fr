export default defineEventHandler(() => {
  const cfg = useRuntimeConfig()
  return {
    hasServerSecret: !!cfg.recaptchaSecretKey,
    hasPublicSiteKey: !!cfg.public.recaptchaSiteKey,
    nodeEnv: process.env.NODE_ENV
  }
})