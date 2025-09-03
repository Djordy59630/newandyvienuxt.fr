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
        <div class="flex justify-between items-center h-16 sm:h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="ml-3 sm:ml-4 text-lg sm:text-2xl font-black text-white tracking-tight">
              <span class="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                SQUARE630
              </span>
            </span>
          </div>

          <!-- Back Button -->
          <div>
            <button
              @click="goBack"
              class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 inline-flex items-center space-x-2 text-sm sm:text-base"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span class="hidden sm:inline">Retour</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Progress Bar Section -->
    <div class="relative z-20 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <ProgressBar :current-step="4" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      
      <!-- Damien.C Avatar -->
      <div class="mb-6 sm:mb-8">
        <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow relative mx-auto">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div class="relative">
            <svg class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
        </div>
        <div class="text-center mt-3 sm:mt-4">
          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2">Damien.C</h2>
          <div class="bg-gradient-to-r from-green-400 to-green-500 text-white text-sm px-3 py-1 rounded-full inline-block">
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
            <div v-if="currentStep === 'greeting'" class="typewriter">
              {{ displayText }}
              <span v-if="showCursor" class="cursor">|</span>
            </div>
            <div v-else>
              <p v-if="currentStep === 'dance-selection'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Alors, qu'est-ce qui te fait vibrer ? Hip-hop, breakdance, ou peut-être les deux ? Choisis selon tes envies ! 🎵✨
              </p>
              <p v-else-if="currentStep === 'group-details' && selectedGroups.length > 0" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                {{ selectedGroups.length === 1 ? 'Excellent choix' : 'Excellents choix' }} ! Tu as sélectionné {{ selectedGroups.length }} groupe{{ selectedGroups.length > 1 ? 's' : '' }}. Es-tu prêt(e) à finaliser ton inscription ? 🚀
              </p>
            </div>
          </div>
        </div>

        <!-- Dance Group Selection -->
        <div v-if="currentStep === 'dance-selection'" class="space-y-4">
          <!-- Loading indicator -->
          <div v-if="loadingGroups" class="flex justify-center items-center py-8">
            <div class="flex flex-col items-center space-y-4">
              <div class="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              <p class="text-white/70 text-sm">Chargement des groupes de danse...</p>
            </div>
          </div>
          
          <!-- Groups grid -->
          <div v-else-if="danceGroups.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
            <label
              v-for="group in danceGroups"
              :key="group.id"
              class="group-card"
              :class="{ 'selected': selectedGroups.find(g => g.id === group.id) }"
            >
              <input
                type="checkbox"
                :value="group.id"
                v-model="selectedGroupIds"
                @change="updateSelectedGroups(); validationErrors.groups = ''"
                class="hidden"
              />
              
              <!-- Card Header -->
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <div class="custom-checkbox mr-2">
                    <svg v-if="selectedGroups.find(g => g.id === group.id)" class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 class="font-semibold text-gray-900 text-sm">{{ group.name }}</h3>
                </div>
                <span class="category-tag">{{ group.category }}</span>
              </div>
              
              <!-- Card Content -->
              <div class="space-y-2">
                <p class="text-xs text-gray-600 leading-relaxed">{{ group.description }}</p>
                <div class="flex flex-wrap gap-1">
                  <span class="info-badge bg-orange-100 text-orange-700">{{ group.ageGroup }}</span>
                </div>
                <p class="text-xs text-gray-500">{{ group.schedule }}</p>
              </div>
            </label>
          </div>
          
          <!-- Error message -->
          <div v-else-if="error" class="flex justify-center items-center py-8">
            <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center">
              <p>{{ error }}</p>
              <button
                @click="loadDanceGroups"
                class="mt-2 text-red-600 hover:text-red-800 underline text-sm"
              >
                Réessayer
              </button>
            </div>
          </div>
          
          <!-- Continue Button -->
          <div class="flex justify-center pt-4">
            <div class="w-full sm:w-auto">
              <button
                @click="proceedToDetails"
                :disabled="loading"
                class="btn-primary w-full sm:w-auto"
              >
                <span v-if="selectedGroups.length > 0">Continuer avec {{ selectedGroups.length }} groupe{{ selectedGroups.length > 1 ? 's' : '' }}</span>
                <span v-else>Sélectionner des groupes</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
              <div v-if="validationErrors.groups" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg text-center">
                {{ validationErrors.groups }}
              </div>
            </div>
          </div>
        </div>

        <!-- Groups Confirmation -->
        <div v-if="currentStep === 'group-details'" class="space-y-4 sm:space-y-6">
          <!-- Selected Groups List -->
          <div class="space-y-4">
            <div 
              v-for="group in selectedGroups" 
              :key="group.id" 
              class="bg-orange-50 border border-orange-200 rounded-xl p-4"
            >
              <div class="flex items-start">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span class="text-white text-lg font-bold">{{ group.name.substring(0, 2) }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">{{ group.name }}</h3>
                  <p class="text-gray-700 mb-2 text-sm sm:text-base">{{ group.description }}</p>
                  <div class="text-sm text-gray-600">
                    <div><strong>Âge :</strong> {{ group.ageGroup }}</div>
                    <div><strong>Horaire :</strong> {{ group.schedule }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Selected Groups Summary -->
          <div class="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-xl p-4">
            <div class="text-center">
              <p class="text-gray-700 text-sm mb-1">Groupes sélectionnés</p>
              <p class="text-2xl font-bold text-orange-800">{{ selectedGroups.length }}</p>
              <p class="text-xs text-gray-600 mt-1">{{ selectedGroups.length }} groupe{{ selectedGroups.length > 1 ? 's' : '' }} choisi{{ selectedGroups.length > 1 ? 's' : '' }}</p>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <!-- Continue Button (first on mobile, right on desktop) -->
            <div class="order-1 sm:order-2">
              <button
                @click="handleFinalSubmit"
                :disabled="loading"
                class="btn-primary w-full sm:w-auto"
              >
                <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                <span v-else>Terminer l'inscription</span>
                <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </button>
            </div>
            
            <!-- Back Button (second on mobile, left on desktop) -->
            <div class="order-2 sm:order-1">
              <button
                @click="currentStep = 'dance-selection'"
                class="btn-secondary w-full sm:w-auto"
                :disabled="loading"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                Modifier la sélection
              </button>
            </div>
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
import { ref, onMounted, computed } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: ['auth', 'no-admin']
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

// Types pour les données des étapes
interface Step1Data {
  firstName: string
  lastName: string
  birthDate: string
}

interface HealthData {
  healthDeclaration: string
}

const currentStep = ref('greeting')
const displayText = ref('')
const showCursor = ref(true)
const loading = ref(false)
const error = ref('')
const selectedGroups = ref<any[]>([])
const selectedGroupIds = ref<number[]>([])
const validationErrors = ref<Record<string, string>>({})


const danceGroups = ref<any[]>([])
const loadingGroups = ref(true)

const fullText = "Et voilà ! On arrive à la dernière étape ! 🎉 C'est le moment de choisir ton ou tes groupes de danse. Tu peux en sélectionner plusieurs si tu veux explorer différents styles ! 🕺💃"

const goBack = () => {
  navigateTo('/inscription/step-3')
}

const typeText = () => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      displayText.value += fullText[index]
      index++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        currentStep.value = 'dance-selection'
      }, 800)
    }
  }, 20)
}

const loadDanceGroups = async () => {
  try {
    loadingGroups.value = true
    error.value = ''
    
    const response = await $fetch('/api/dance-groups')
    
    if (response.success) {
      danceGroups.value = response.groups
    } else {
      throw new Error('Erreur lors du chargement des groupes')
    }
  } catch (err: any) {
    console.error('Erreur chargement groupes:', err)
    error.value = 'Impossible de charger les groupes de danse'
  } finally {
    loadingGroups.value = false
  }
}

const updateSelectedGroups = () => {
  selectedGroups.value = danceGroups.value.filter(group => 
    selectedGroupIds.value.includes(group.id)
  )
}

const proceedToDetails = () => {
  // Clear previous errors
  validationErrors.value = {}
  
  if (selectedGroups.value.length === 0) {
    validationErrors.value.groups = 'Vous devez sélectionner au moins un groupe de danse'
    return
  }
  
  setTimeout(() => {
    currentStep.value = 'group-details'
  }, 300)
}

const handleFinalSubmit = async () => {
  // Clear previous errors
  validationErrors.value = {}
  error.value = ''
  
  // Validate that at least one group is selected
  if (selectedGroups.value.length === 0) {
    validationErrors.value.groups = 'Vous devez sélectionner au moins un groupe de danse'
    return
  }
  
  loading.value = true

  try {
    // Sauvegarder l'étape 4 dans les cookies
    const formDataCookie = useCookie('registration-step4', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      selectedDanceGroups: selectedGroups.value
    }
    
    // Récupérer toutes les données des étapes précédentes
    const step1Data = useCookie('registration-step1').value
    const healthData = useCookie('registration-health').value
    const step2Data = useCookie('registration-step2').value
    const step3Data = useCookie('registration-step3').value
    const step4Data = formDataCookie.value

    console.log('Envoi des données complètes:', {
      step1: step1Data,
      health: healthData,
      step2: step2Data,
      step3: step3Data,
      step4: step4Data
    })

    // Appel API pour sauvegarder en base de données
    const response = await $fetch('/api/inscriptions/complete', {
      method: 'POST',
      body: {
        step1: step1Data,
        health: healthData,
        step2: step2Data,
        step3: step3Data,
        step4: step4Data
      }
    })

    console.log('Inscription sauvegardée:', response)

    // Nettoyer les cookies après sauvegarde réussie
    useCookie('registration-step1').value = null
    useCookie('registration-step2').value = null
    useCookie('registration-step3').value = null
    useCookie('registration-step4').value = null
    
    // Aller à la page de confirmation
    await navigateTo('/inscription/success')
    
  } catch (err: any) {
    console.error('Erreur lors de la sauvegarde:', err)
    error.value = err.data?.message || err.message || 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  // Vérifier les données des étapes précédentes
  const step1Data = useCookie('registration-step1').value as Step1Data | null
  const healthData = useCookie('registration-health').value as HealthData | null
  const step2Data = useCookie('registration-step2').value
  const step3Data = useCookie('registration-step3').value
  
  if (!step1Data || !step1Data.firstName) {
    navigateTo('/inscription/step-1')
    return
  }

  if (!healthData || !healthData.healthDeclaration) {
    navigateTo('/inscription/sante')
    return
  }

  // Charger les groupes de danse depuis l'API
  await loadDanceGroups()

  // Démarrer l'animation de frappe
  setTimeout(() => {
    typeText()
  }, 1000)

  // Cursor blinking
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

// Meta
useHead({
  title: 'Étape 4 - Choix du groupe • Square630',
  meta: [
    { name: 'description', content: 'Damien.C, ton assistant virtuel pour l\'inscription Square630' }
  ]
})
</script>

<style scoped>
.typewriter {
  color: #1f2937;
  font-size: 1rem;
  line-height: 1.5rem;
}

@media (min-width: 640px) {
  .typewriter {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.answer-input {
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  color: #1e293b;
  font-size: 1.125rem;
  line-height: 1.75rem;
  outline: none;
  transition: all 0.3s ease;
}

.answer-input::placeholder {
  color: #94a3b8;
}

.answer-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.option-button {
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  text-align: left;
  transition: all 0.2s ease;
  outline: none;
}

.option-button:hover {
  border-color: #93c5fd;
  background-color: #eff6ff;
}

.option-button:focus {
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.option-button.selected {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #ea580c, #dc2626, #be185d);
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

@media (min-width: 640px) {
  .btn-primary {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(to right, #c2410c, #b91c1c, #a21caf);
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

@media (min-width: 640px) {
  .btn-secondary {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.btn-secondary:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
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

/* Group Card Styles */
.group-card {
  display: block;
  cursor: pointer;
  background-color: white;
  border: 1.5px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1rem;
  transition: all 0.25s ease;
  outline: none;
  position: relative;
  min-height: 120px;
}

.group-card:hover {
  border-color: #fed7aa;
  background-color: #fff7ed;
  box-shadow: 0 4px 16px rgba(234, 88, 12, 0.1);
  transform: translateY(-2px);
}

.group-card.selected {
  border-color: #ea580c;
  background: linear-gradient(135deg, #fff7ed 0%, #fef3f2 100%);
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.15);
  transform: translateY(-2px);
}

.group-card.selected::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #ea580c, #dc2626);
  border-radius: 0.75rem 0.75rem 0 0;
}

.custom-checkbox {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid #d1d5db;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.group-card.selected .custom-checkbox {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  border-color: #dc2626;
  box-shadow: 0 2px 6px rgba(234, 88, 12, 0.3);
}

.checkmark {
  width: 12px;
  height: 12px;
  color: white;
  opacity: 0;
  transform: scale(0.3);
  transition: all 0.15s ease;
}

.group-card.selected .checkmark {
  opacity: 1;
  transform: scale(1);
}

.group-card:hover .custom-checkbox {
  border-color: #fed7aa;
  box-shadow: 0 1px 4px rgba(234, 88, 12, 0.15);
}

.category-tag {
  background: linear-gradient(135deg, #ea580c, #dc2626);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.group-card.selected .category-tag {
  background: linear-gradient(135deg, #c2410c, #b91c1c);
  box-shadow: 0 2px 8px rgba(234, 88, 12, 0.3);
}

.info-badge {
  font-size: 0.6875rem;
  font-weight: 500;
  padding: 0.125rem 0.5rem;
  border-radius: 0.375rem;
  display: inline-block;
}
</style>