<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div class="absolute top-32 right-20 w-1 h-1 bg-orange-300/40 rounded-full animate-ping"></div>
      <div class="absolute bottom-20 left-32 w-1.5 h-1.5 bg-red-300/40 rounded-full animate-pulse"></div>
      <div class="absolute top-40 left-1/2 w-1 h-1 bg-orange-300/40 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 right-10 w-2 h-2 bg-red-300/30 rounded-full animate-ping" style="animation-delay: 2s;"></div>
    </div>

    <!-- Navigation Header -->
    <nav class="relative z-20 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="ml-3 lg:ml-4 text-xl lg:text-2xl font-black text-white tracking-tight">
              <span class="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                SQUARE630
              </span>
            </span>
          </div>

          <!-- Back Button -->
          <button
            @click="goBack"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 inline-flex items-center space-x-2 text-sm lg:text-base"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span class="hidden sm:inline">Retour</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Progress Bar -->
    <div class="relative z-10 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div class="flex items-center space-x-3">
          <span class="text-slate-300 text-sm font-medium">Étape 1.5 sur 4 - Questionnaire Santé</span>
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 37.5%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-200px)]">
      
      <!-- Damien.C Avatar -->
      <div class="mb-6 lg:mb-8">
        <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow relative mx-auto">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div class="relative">
            <svg class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
        </div>
        <div class="text-center mt-3 lg:mt-4">
          <h2 class="text-xl lg:text-2xl font-bold text-white mb-2">Damien.C</h2>
          <div class="bg-gradient-to-r from-green-400 to-green-500 text-white text-xs lg:text-sm px-3 py-1 rounded-full inline-block">
            En ligne
          </div>
        </div>
      </div>

      <!-- Conversation Interface -->
      <div class="w-full max-w-4xl space-y-4 sm:space-y-6">
        
        <!-- Damien.C Message -->
        <div class="flex items-start space-x-3 sm:space-x-4">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 sm:p-6 shadow-xl border border-white/20 flex-1">
            <p class="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
              Avant de continuer, nous devons vérifier ton questionnaire santé ! 🏥 C'est obligatoire pour la pratique sportive. Prends quelques minutes pour consulter le formulaire ci-dessous.
            </p>
            
            <!-- Health Form Image -->
            <div class="mb-6 bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
              <img 
                src="/assets/4 CERFA-Questionnaire-Santé-2024-2025.jpg" 
                alt="Questionnaire Santé CERFA 2024-2025"
                class="w-full max-w-2xl mx-auto rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                @click="openImageModal"
              />
              <p class="text-xs text-gray-500 text-center mt-2">Cliquez sur l'image pour l'agrandir</p>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div class="flex">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div class="text-blue-700 text-sm">
                  <p class="font-semibold mb-1">Important :</p>
                  <p>Si vous répondez "OUI" à l'une des questions de ce questionnaire, vous devrez fournir un certificat médical d'aptitude à la pratique sportive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Health Declaration -->
        <div class="space-y-6">
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Déclaration sur l'honneur</h3>
            
            <p class="text-gray-700 mb-4">
              Après avoir pris connaissance du questionnaire santé, veuillez indiquer votre situation :
            </p>

            <!-- Options de réponse -->
            <div class="space-y-3">
              <!-- Option 1: Toutes négatives -->
              <label class="flex items-start space-x-3 cursor-pointer p-4 rounded-xl border-2 transition-all"
                :class="healthStatus === 'negative' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input
                  v-model="healthStatus"
                  type="radio"
                  value="negative"
                  class="mt-1 h-5 w-5 text-green-600 focus:ring-green-500"
                  @change="validationErrors.healthStatus = ''"
                />
                <div class="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p class="font-semibold text-green-700">✅ Toutes mes réponses sont NÉGATIVES</p>
                  <p class="text-sm text-gray-600 mt-1">
                    Je certifie avoir répondu NON à toutes les questions du questionnaire santé.
                  </p>
                </div>
              </label>

              <!-- Option 2: Au moins une positive -->
              <label class="flex items-start space-x-3 cursor-pointer p-4 rounded-xl border-2 transition-all"
                :class="healthStatus === 'positive' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:bg-gray-50'"
              >
                <input
                  v-model="healthStatus"
                  type="radio"
                  value="positive"
                  class="mt-1 h-5 w-5 text-orange-600 focus:ring-orange-500"
                  @change="validationErrors.healthStatus = ''"
                />
                <div class="text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p class="font-semibold text-orange-700">⚠️ Une ou plusieurs réponses sont POSITIVES</p>
                  <p class="text-sm text-gray-600 mt-1">
                    J'ai répondu OUI à au moins une question. Je comprends que je dois fournir un certificat médical d'aptitude à la pratique sportive.
                  </p>
                </div>
              </label>
            </div>

            <!-- Confirmation checkbox -->
            <div v-if="healthStatus" class="mt-6 p-4 rounded-xl"
              :class="healthStatus === 'negative' ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'"
            >
              <label class="flex items-start space-x-3 cursor-pointer">
                <input
                  v-model="healthConfirmation"
                  type="checkbox"
                  class="mt-1 h-5 w-5"
                  :class="healthStatus === 'negative' ? 'text-green-600 focus:ring-green-500' : 'text-orange-600 focus:ring-orange-500'"
                  @change="validationErrors.confirmation = ''"
                />
                <div class="text-sm leading-relaxed"
                  :class="healthStatus === 'negative' ? 'text-green-700' : 'text-orange-700'"
                >
                  <p class="font-semibold">Je confirme :</p>
                  <ul class="list-disc list-inside space-y-1 mt-1">
                    <li>Avoir lu et compris le questionnaire santé</li>
                    <li v-if="healthStatus === 'negative'">
                      Que toutes mes réponses sont négatives et que je peux pratiquer sans certificat médical
                    </li>
                    <li v-else>
                      Que je dois fournir un <strong>certificat médical d'aptitude</strong> à la pratique sportive
                    </li>
                  </ul>
                </div>
              </label>
            </div>

            <!-- Alert si certificat nécessaire -->
            <div v-if="healthStatus === 'positive' && healthConfirmation" class="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div class="flex">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <div class="text-yellow-700 text-sm">
                  <p class="font-semibold">Certificat médical requis</p>
                  <p class="mt-1">Vous devrez transmettre votre certificat médical d'aptitude à la pratique de la danse pour finaliser votre inscription.</p>
                </div>
              </div>
            </div>

            <!-- Validation errors -->
            <div v-if="validationErrors.healthStatus" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-700 text-sm">
                ⚠️ {{ validationErrors.healthStatus }}
              </p>
            </div>
            
            <div v-if="validationErrors.confirmation" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-red-700 text-sm">
                ⚠️ {{ validationErrors.confirmation }}
              </p>
            </div>
          </div>
          
          <!-- Continue Button -->
          <div class="flex justify-center">
            <button
              @click="handleContinue"
              :disabled="loading || !healthStatus || !healthConfirmation"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer vers l'étape 2</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {{ error }}
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="showImageModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" @click="closeImageModal">
      <div class="relative max-w-4xl max-h-full">
        <img 
          src="/assets/4 CERFA-Questionnaire-Santé-2024-2025.jpg" 
          alt="Questionnaire Santé CERFA 2024-2025"
          class="max-w-full max-h-full object-contain rounded-lg"
        />
        <button
          @click="closeImageModal"
          class="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: ['auth', 'no-admin']
})

// Type pour les données de l'étape 1
interface Step1Data {
  firstName: string
  lastName: string
  birthDate: string
}

const loading = ref(false)
const error = ref('')
const healthStatus = ref('') // 'negative' ou 'positive'
const healthConfirmation = ref(false)
const showImageModal = ref(false)
const validationErrors = ref<Record<string, string>>({})

const goBack = () => {
  navigateTo('/inscription/step-1')
}

const openImageModal = () => {
  showImageModal.value = true
}

const closeImageModal = () => {
  showImageModal.value = false
}

const handleContinue = async () => {
  // Clear previous errors
  validationErrors.value = {}
  error.value = ''
  
  // Validate health status selection
  if (!healthStatus.value) {
    validationErrors.value.healthStatus = 'Vous devez sélectionner votre situation de santé'
  }
  
  // Validate confirmation checkbox
  if (!healthConfirmation.value) {
    validationErrors.value.confirmation = 'Vous devez confirmer avoir lu et compris le questionnaire'
  }
  
  // If there are validation errors, don't proceed
  if (Object.keys(validationErrors.value).length > 0) {
    return
  }

  loading.value = true

  try {
    // Sauvegarder la déclaration santé
    const healthDataCookie = useCookie('registration-health', {
      default: () => ({})
    })
    
    healthDataCookie.value = {
      healthDeclaration: true,
      healthStatus: healthStatus.value,
      requiresCertificate: healthStatus.value === 'positive',
      declaredAt: new Date().toISOString()
    }
    
    console.log('Health data:', healthDataCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aller à l'étape 2
    await navigateTo('/inscription/step-2')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Vérifier les données de l'étape 1
  const step1Data = useCookie('registration-step1').value as Step1Data | null
  
  if (!step1Data || !step1Data.firstName) {
    navigateTo('/inscription/step-1')
    return
  }
})

// Meta
useHead({
  title: 'Questionnaire Santé • Square630',
  meta: [
    { name: 'description', content: 'Questionnaire santé obligatoire pour l\'inscription à Square630' }
  ]
})
</script>

<style scoped>
.progress-container {
  position: relative;
  width: 220px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #ea580c, #dc2626, #e11d48);
  border-radius: 4px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 2px 8px rgba(234, 88, 12, 0.3);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #ea580c, #dc2626, #e11d48);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  text-decoration: none;
}

@media (min-width: 640px) {
  .btn-primary {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(to right, #c2410c, #b91c1c, #be123c);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(234, 88, 12, 0.25);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: scale(1);
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>