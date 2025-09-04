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
          <span class="text-slate-300 text-sm font-medium">Étape 1.6 sur 4 - Code Sport</span>
          <div class="progress-container">
            <div class="progress-bar">
              <div class="progress-fill" style="width: 40%"></div>
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
      <div class="w-full max-w-2xl space-y-4 sm:space-y-6">
        
        <!-- Damien.C Message -->
        <div class="flex items-start space-x-3 sm:space-x-4">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 sm:p-6 shadow-xl border border-white/20 flex-1">
            <h3 class="text-lg font-bold text-gray-900 mb-4">As-tu un code sport ? 🎫</h3>
            
            <div class="mb-6">
              <p class="text-gray-700 mb-4">
                Si tu possèdes un code sport, tu peux l'indiquer maintenant. Cela peut te permettre de bénéficier de réductions ou d'aides financières.
              </p>
              
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <div class="flex">
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div class="text-blue-700 text-sm">
                    <p class="font-semibold mb-1">Types de codes acceptés :</p>
                    <ul class="list-disc list-inside space-y-1 mt-2">
                      <li>Pass'Sport</li>
                      <li>Coupon sport</li>
                      <li>Chèque sport</li>
                      <li>Autres dispositifs d'aide sportive</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Section -->
            <div class="space-y-4">
              <div>
                <label class="block text-gray-700 text-sm font-semibold mb-2">
                  Code Sport (optionnel)
                </label>
                <input
                  v-model="sportCode"
                  type="text"
                  placeholder="Entre ton code sport si tu en as un"
                  class="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                  @keyup.enter="handleContinue"
                />
                <p class="text-xs text-gray-500 mt-2 italic">
                  Ce champ est optionnel. Tu peux le laisser vide si tu n'as pas de code sport.
                </p>
              </div>

              <!-- Info message si code entré -->
              <div v-if="sportCode" class="bg-green-50 border border-green-200 rounded-lg p-3">
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <p class="text-green-700 text-sm">
                    Code sport enregistré : {{ sportCode }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <!-- Continue Button (first on mobile, right on desktop) -->
          <div class="order-1 sm:order-2">
            <button
              @click="handleContinue"
              :disabled="loading"
              class="btn-primary w-full sm:w-auto"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>{{ sportCode ? 'Continuer avec ce code' : 'Passer cette étape' }}</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
          
          <!-- Back Button (second on mobile, left on desktop) -->
          <div class="order-2 sm:order-1">
            <button
              @click="goBack"
              class="btn-secondary w-full sm:w-auto"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {{ error }}
        </div>
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

const loading = ref(false)
const error = ref('')
const sportCode = ref('')

const goBack = () => {
  navigateTo('/inscription/sante')
}

const handleContinue = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder le code sport dans le cookie
    const sportCodeCookie = useCookie('registration-sportcode', {
      default: () => ({})
    })
    
    sportCodeCookie.value = {
      sportCode: sportCode.value || null,
      enteredAt: new Date().toISOString()
    }
    
    console.log('Sport code data:', sportCodeCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Aller à l'étape 2
    await navigateTo('/inscription/step-2')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Vérifier les données de l'étape précédente
  const healthData = useCookie('registration-health').value as any
  
  if (!healthData || !healthData.healthDeclaration) {
    navigateTo('/inscription/sante')
    return
  }
  
  // Récupérer le code sport s'il existe déjà
  const existingSportCode = useCookie('registration-sportcode').value as any
  if (existingSportCode?.sportCode) {
    sportCode.value = existingSportCode.sportCode
  }
})

// Meta
useHead({
  title: 'Code Sport • Square630',
  meta: [
    { name: 'description', content: 'Entrez votre code sport pour bénéficier de réductions' }
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

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  color: #374151;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover:not(:disabled) {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}

.btn-secondary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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