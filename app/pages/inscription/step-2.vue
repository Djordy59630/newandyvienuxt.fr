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

          <!-- Back Button Only -->
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
        <ProgressBar :current-step="2" />
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
            <div v-if="currentStep === 'greeting'" class="typewriter">
              {{ displayText }}
              <span v-if="showCursor" class="cursor">|</span>
            </div>
            <div v-else>
              <p v-if="currentStep === 'guardian-info'" class="text-gray-800 text-lg leading-relaxed">
                Super ! Maintenant j'ai besoin des informations de ton responsable légal : nom, prénom et email pour finaliser ton dossier. 👨‍👩‍👧‍👦
              </p>
              <p v-else-if="currentStep === 'no-guardian'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Tu es majeur(e), nous pouvons passer directement à l'étape suivante.
              </p>
            </div>
          </div>
        </div>

        <!-- Response Area -->

        <!-- No Guardian Needed -->
        <div v-if="currentStep === 'no-guardian'" class="space-y-6">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <div class="flex items-center text-green-700">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span class="font-medium">Tu es majeur(e), aucune autorisation parentale nécessaire !</span>
            </div>
          </div>
          
          <div class="flex justify-center">
            <button
              @click="handleNoGuardianSubmit"
              :disabled="loading"
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

        <!-- Guardian Info Form -->
        <div v-if="currentStep === 'guardian-info'" class="space-y-6">
          <div class="space-y-4">
            <div>
              <input
                v-model="form.firstName"
                type="text"
                class="answer-input"
                :class="{ 'border-red-500 border-2': validationErrors.firstName }"
                placeholder="Prénom du responsable légal"
                @input="validationErrors.firstName = ''"
                :disabled="loading"
                required
              />
              <div v-if="validationErrors.firstName" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                {{ validationErrors.firstName }}
              </div>
            </div>
            <div>
              <input
                v-model="form.lastName"
                type="text"
                class="answer-input"
                :class="{ 'border-red-500 border-2': validationErrors.lastName }"
                placeholder="Nom de famille du responsable légal"
                @input="validationErrors.lastName = ''"
                :disabled="loading"
                required
              />
              <div v-if="validationErrors.lastName" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                {{ validationErrors.lastName }}
              </div>
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                class="answer-input"
                :class="{ 'border-red-500 border-2': validationErrors.email }"
                placeholder="parent@exemple.com"
                @keyup.enter="handleEmailSubmit"
                @input="validationErrors.email = ''"
                :disabled="loading"
                required
              />
              <div v-if="validationErrors.email" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                {{ validationErrors.email }}
              </div>
            </div>
            <div>
              <select
                v-model="form.relationship"
                class="answer-input"
                :class="{ 'border-red-500 border-2': validationErrors.relationship }"
                @change="validationErrors.relationship = ''"
                :disabled="loading"
                required
              >
                <option value="">Sélectionner la relation</option>
                <option value="Parent">Parent</option>
                <option value="Tuteur">Tuteur</option>
                <option value="Grand-parent">Grand-parent</option>
                <option value="Oncle/Tante">Oncle/Tante</option>
                <option value="Autre">Autre</option>
              </select>
              <div v-if="validationErrors.relationship" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                {{ validationErrors.relationship }}
              </div>
            </div>
            
            <!-- Autorisation parentale -->
            <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4" :class="{ 'border-red-500': validationErrors.authorized }">
              <label class="flex items-start space-x-3 cursor-pointer">
                <input
                  v-model="form.authorized"
                  type="checkbox"
                  class="mt-1 w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  @change="validationErrors.authorized = ''"
                  :disabled="loading"
                  required
                />
                <div class="text-sm">
                  <p class="text-gray-800 font-medium">Autorisation parentale</p>
                  <p class="text-gray-600 mt-1">
                    J'autorise <strong>{{ step1Data.firstName }} {{ step1Data.lastName }}</strong> 
                    à participer aux activités hip-hop de l'association Square630.
                  </p>
                </div>
              </label>
              <div v-if="validationErrors.authorized" class="mt-2 text-red-600 text-sm bg-red-50 p-2 rounded-lg">
                {{ validationErrors.authorized }}
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'minor-check'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleEmailSubmit"
              :disabled="loading || !form.email || !form.firstName || !form.lastName || !form.relationship || !form.authorized"
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

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {{ error }}
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: ['auth', 'no-admin']
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const currentStep = ref('greeting')
const displayText = ref('')
const showCursor = ref(true)
const loading = ref(false)
const error = ref('')
const validationErrors = ref<Record<string, string>>({})

// Validation functions
const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) return 'L\'email est obligatoire'
  if (!emailRegex.test(email)) return 'Format d\'email invalide'
  return null
}

const validateName = (name: string, fieldName: string): string | null => {
  if (!name) return `${fieldName} est obligatoire`
  if (name.length < 2) return `${fieldName} doit contenir au moins 2 caractères`
  if (name.length > 50) return `${fieldName} ne peut pas dépasser 50 caractères`
  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(name)) return `${fieldName} contient des caractères invalides`
  return null
}
const isMinor = ref<boolean | null>(null)
const step1Data = ref<{
  firstName?: string
  lastName?: string
  birthDate?: string
}>({})

// Type pour les cookies
interface Step1Data {
  firstName: string
  lastName: string
  birthDate: string
}

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  relationship: 'Parent',
  authorized: false
})

// Calculer si mineur depuis les données de l'étape 1
let fullText = ""
let isUserMinor = false

const calculateAge = (birthDate: string) => {
  if (!birthDate) return false
  const today = new Date()
  const birth = new Date(birthDate)
  const age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return (age - 1) < 18
  }
  return age < 18
}

const goBack = () => {
  navigateTo('/inscription/sante')
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
        // Déterminer automatiquement si mineur ou majeur
        if (isUserMinor) {
          currentStep.value = 'guardian-info'
        } else {
          currentStep.value = 'no-guardian'
        }
      }, 800)
    }
  }, 20)
}

const handleNoGuardianSubmit = async () => {
  await handleSubmit(false)
}

const handleEmailSubmit = async () => {
  // Clear previous errors
  validationErrors.value = {}
  
  // Validate all fields for guardian info
  let hasError = false
  
  const firstNameError = validateName(form.value.firstName, 'Le prénom')
  if (firstNameError) {
    validationErrors.value.firstName = firstNameError
    hasError = true
  }
  
  const lastNameError = validateName(form.value.lastName, 'Le nom')
  if (lastNameError) {
    validationErrors.value.lastName = lastNameError
    hasError = true
  }
  
  const emailError = validateEmail(form.value.email)
  if (emailError) {
    validationErrors.value.email = emailError
    hasError = true
  }
  
  if (!form.value.relationship) {
    validationErrors.value.relationship = 'La relation avec l\'enfant est obligatoire'
    hasError = true
  }
  
  if (!form.value.authorized) {
    validationErrors.value.authorized = 'L\'autorisation parentale est obligatoire'
    hasError = true
  }
  
  if (hasError) return
  
  await handleSubmit(true)
}

const handleSubmit = async (isMinorValue: boolean) => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données
    const formDataCookie = useCookie('registration-step2', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      isMinor: isMinorValue,
      guardianEmail: isMinorValue ? form.value.email : null,
      guardianFirstName: isMinorValue ? form.value.firstName : null,
      guardianLastName: isMinorValue ? form.value.lastName : null,
      guardianRelationship: isMinorValue ? form.value.relationship : null,
      guardianAuthorized: isMinorValue ? form.value.authorized : false
    }
    
    console.log('Step 2 data:', formDataCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aller à l'étape 3
    await navigateTo('/inscription/step-3')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Vérifier les données de l'étape 1
  const step1Cookie = useCookie('registration-step1').value as Step1Data | null
  if (!step1Cookie || !step1Cookie.firstName) {
    navigateTo('/inscription/step-1')
    return
  }
  
  step1Data.value = step1Cookie

  // Calculer si l'utilisateur est mineur depuis ses données
  if (step1Cookie.birthDate) {
    isUserMinor = calculateAge(step1Cookie.birthDate)
    
    // Définir le message de Damien.C selon l'âge
    if (isUserMinor) {
      fullText = `Re-salut ${step1Cookie.firstName} ! 👋 J'ai calculé ton âge : ${getAge(step1Cookie.birthDate)} ans. Comme tu es mineur(e), j'ai besoin des coordonnées de ton responsable légal pour finaliser l'inscription. C'est une obligation légale ! 👨‍👩‍👧‍👦`
    } else {
      fullText = `Re-salut ${step1Cookie.firstName} ! 👋 J'ai calculé ton âge : ${getAge(step1Cookie.birthDate)} ans. Parfait, tu es majeur(e) ! On peut passer directement à l'étape suivante. 🎉`
    }
  } else {
    navigateTo('/inscription/step-1')
    return
  }

  // Démarrer l'animation de frappe
  setTimeout(() => {
    typeText()
  }, 1000)

  // Cursor blinking
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

// Fonction pour calculer l'âge exact
const getAge = (birthDate: string) => {
  if (!birthDate) return 0
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

// Meta
useHead({
  title: 'Étape 2 - Responsable légal • Square630',
  meta: [
    { name: 'description', content: 'Damien.C, ton assistant virtuel pour l\'inscription Square630' }
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