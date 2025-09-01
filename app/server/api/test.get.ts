export default defineEventHandler(async (event) => {
  return {
    message: 'API Test fonctionnelle !',
    timestamp: new Date().toISOString()
  }
})