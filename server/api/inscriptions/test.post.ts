export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    return {
      success: true,
      message: 'API d\'inscription fonctionnelle !',
      receivedData: body,
      timestamp: new Date().toISOString()
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur de test: ' + error.message
    })
  }
})