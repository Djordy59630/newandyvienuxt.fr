<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-slate-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-slate-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div class="absolute top-32 right-20 w-1 h-1 bg-blue-300/40 rounded-full animate-ping"></div>
      <div class="absolute bottom-20 left-32 w-1.5 h-1.5 bg-indigo-300/40 rounded-full animate-pulse"></div>
      <div class="absolute top-40 left-1/2 w-1 h-1 bg-slate-300/40 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 right-10 w-2 h-2 bg-blue-300/30 rounded-full animate-ping" style="animation-delay: 2s;"></div>
    </div>

    <!-- Navigation Header -->
    <nav class="relative z-20 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="ml-4 text-2xl font-black text-white tracking-tight">
              <span class="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
                SQUARE630
              </span>
            </span>
          </div>

          <!-- Progress & Back -->
          <div class="flex items-center space-x-6">
            <ProgressBar :current-step="1" />
            <button
              @click="goBack"
              class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              <span>Retour</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-8 pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      
      <!-- Kali Avatar -->
      <div class="mb-8">
        <div class="w-32 h-32 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow relative">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-400 via-blue-400 to-indigo-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div class="relative">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
        </div>
        <div class="text-center mt-4">
          <h2 class="text-2xl font-bold text-white mb-2">Kali</h2>
          <div class="bg-gradient-to-r from-green-400 to-green-500 text-white text-sm px-3 py-1 rounded-full inline-block">
            En ligne
          </div>
        </div>
      </div>

      <!-- Conversation Interface -->
      <div class="w-full max-w-2xl space-y-6">
        
        <!-- Kali Message -->
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-md p-6 shadow-xl border border-white/20 flex-1">
            <div v-if="currentStep === 'greeting'" class="typewriter">
              {{ displayText }}
              <span v-if="showCursor" class="cursor">|</span>
            </div>
            <div v-else>
              <p v-if="currentStep === 'firstName'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Pour commencer, quel est ton prénom ?
              </p>
              <p v-else-if="currentStep === 'lastName'" class="text-gray-800 text-lg leading-relaxed">
                Enchanté {{ form.firstName }} ! Et ton nom de famille ?
              </p>
              <p v-else-if="currentStep === 'birthDate'" class="text-gray-800 text-lg leading-relaxed">
                Super ! Maintenant, quelle est ta date de naissance ?
              </p>
              <p v-else-if="currentStep === 'address'" class="text-gray-800 text-lg leading-relaxed">
                Merci ! Où habites-tu ? J'ai besoin de ton adresse complète.
              </p>
              <p v-else-if="currentStep === 'phone'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Quel est ton numéro de téléphone ?
              </p>
              <p v-else-if="currentStep === 'final'" class="text-gray-800 text-lg leading-relaxed">
                Excellent ! J'ai toutes tes informations de base. Prêt(e) à continuer ?
              </p>
            </div>
          </div>
        </div>

        <!-- Response Area -->
        <!-- First Name Input -->
        <div v-if="currentStep === 'firstName'" class="space-y-6">
          <div>
            <input
              v-model="form.firstName"
              type="text"
              class="answer-input"
              placeholder="Ton prénom"
              @keyup.enter="handleFirstNameSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-end">
            <button
              @click="handleFirstNameSubmit"
              :disabled="loading || !form.firstName"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Last Name Input -->
        <div v-if="currentStep === 'lastName'" class="space-y-6">
          <div>
            <input
              v-model="form.lastName"
              type="text"
              class="answer-input"
              placeholder="Ton nom"
              @keyup.enter="handleLastNameSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'firstName'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleLastNameSubmit"
              :disabled="loading || !form.lastName"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Birth Date Input -->
        <div v-if="currentStep === 'birthDate'" class="space-y-6">
          <div>
            <input
              v-model="form.birthDate"
              type="date"
              class="answer-input"
              @keyup.enter="handleBirthDateSubmit"
              :disabled="loading"
              required
            />
            <div v-if="form.birthDate && isMinor" class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm">
              ℹ️ Tu es mineur(e), nous aurons besoin des informations de ton responsable légal à l'étape suivante.
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'lastName'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleBirthDateSubmit"
              :disabled="loading || !form.birthDate"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Address Input -->
        <div v-if="currentStep === 'address'" class="space-y-6">
          <div class="space-y-4">
            <input
              v-model="form.address"
              type="text"
              class="answer-input"
              placeholder="12 rue de la Danse"
              :disabled="loading"
              required
            />
            <div class="grid grid-cols-2 gap-4">
              <input
                v-model="form.city"
                type="text"
                class="answer-input"
                placeholder="Ville"
                :disabled="loading"
                required
              />
              <input
                v-model="form.postalCode"
                type="text"
                class="answer-input"
                placeholder="Code postal"
                pattern="[0-9]{5}"
                :disabled="loading"
                required
              />
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'birthDate'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleAddressSubmit"
              :disabled="loading || !form.address || !form.city || !form.postalCode"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Phone Input -->
        <div v-if="currentStep === 'phone'" class="space-y-6">
          <div>
            <input
              v-model="form.phone"
              type="tel"
              class="answer-input"
              placeholder="06 12 34 56 78"
              @keyup.enter="handlePhoneSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'address'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handlePhoneSubmit"
              :disabled="loading || !form.phone"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Final Step -->
        <div v-if="currentStep === 'final'" class="space-y-6">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <div class="text-green-700 text-sm">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <strong>Récapitulatif de tes informations :</strong>
              </div>
              <div class="space-y-1">
                <div>{{ form.firstName }} {{ form.lastName }}</div>
                <div>{{ form.address }}, {{ form.postalCode }} {{ form.city }}</div>
                <div>{{ form.phone }}</div>
                <div>{{ isMinor ? 'Mineur(e)' : 'Majeur(e)' }}</div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'phone'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Modifier
            </button>
            
            <button
              @click="handleFinalSubmit"
              :disabled="loading"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Étape suivante</span>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const currentStep = ref('greeting')
const displayText = ref('')
const showCursor = ref(true)
const loading = ref(false)
const error = ref('')

const form = ref({
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  birthDate: '',
  address: '',
  city: '',
  postalCode: '',
  phone: ''
})

const fullText = "Salut ! Moi c'est Kali, ton assistante virtuelle pour Square630 ! 🤖✨ Je vais t'accompagner dans ton inscription étape par étape. C'est parti, commençons par faire connaissance ! 😊"

const goBack = () => {
  navigateTo('/dashboard')
}

const isMinor = computed(() => {
  if (!form.value.birthDate) return false
  const today = new Date()
  const birth = new Date(form.value.birthDate)
  const age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return (age - 1) < 18
  }
  return age < 18
})

const typeText = () => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.length) {
      displayText.value += fullText[index]
      index++
    } else {
      clearInterval(interval)
      setTimeout(() => {
        currentStep.value = 'firstName'
      }, 800)
    }
  }, 20)
}

const handleFirstNameSubmit = () => {
  if (!form.value.firstName) return
  setTimeout(() => {
    currentStep.value = 'lastName'
  }, 500)
}

const handleLastNameSubmit = () => {
  if (!form.value.lastName) return
  setTimeout(() => {
    currentStep.value = 'birthDate'
  }, 500)
}

const handleBirthDateSubmit = () => {
  if (!form.value.birthDate) return
  setTimeout(() => {
    currentStep.value = 'address'
  }, 500)
}

const handleAddressSubmit = () => {
  if (!form.value.address || !form.value.city || !form.value.postalCode) return
  setTimeout(() => {
    currentStep.value = 'phone'
  }, 500)
}

const handlePhoneSubmit = () => {
  if (!form.value.phone) return
  setTimeout(() => {
    currentStep.value = 'final'
  }, 500)
}

const handleFinalSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données
    const formDataCookie = useCookie('registration-step1', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      ...form.value,
      isMinor: isMinor.value
    }
    
    console.log('Step 1 data:', formDataCookie.value)
    
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
  title: 'Étape 1 - Informations personnelles • Square630',
  meta: [
    { name: 'description', content: 'Kali, ton assistante virtuelle pour l\'inscription Square630' }
  ]
})
</script>

<style scoped>
.typewriter {
  color: #1f2937;
  font-size: 1.125rem;
  line-height: 1.75rem;
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
  padding: 1rem 2rem;
  background: linear-gradient(to right, #475569, #2563eb, #4f46e5);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(to right, #334155, #1d4ed8, #4338ca);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: scale(1);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  color: #374151;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
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
</style>