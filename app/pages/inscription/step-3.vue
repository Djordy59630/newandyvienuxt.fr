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
        <ProgressBar :current-step="3" />
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
              <p v-if="currentStep === 'contact-name'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Quel est le prénom et nom de ton {{ contacts.length === 0 ? 'premier' : contacts.length === 1 ? 'deuxième' : 'prochain' }} contact d'urgence ?
              </p>
              <p v-else-if="currentStep === 'contact-phone'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Merci {{ form.firstName }} ! Quel est son numéro de téléphone ?
              </p>
              <p v-else-if="currentStep === 'contact-type'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Parfait ! Maintenant dis-moi, ce contact peut-il : récupérer le mineur en fin de cours, être appelé en cas d'urgence, ou les deux ?
              </p>
              <p v-else-if="currentStep === 'add-more'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Super ! Veux-tu ajouter un autre contact d'urgence ? (recommandé d'avoir au moins 2 contacts)
              </p>
              <p v-else-if="currentStep === 'contact-list'" class="text-gray-800 text-base sm:text-lg leading-relaxed">
                Voici tes contacts d'urgence ajoutés :
              </p>
            </div>
          </div>
        </div>

        <!-- Contacts List Display -->
        <div v-if="currentStep === 'contact-list' && contacts.length > 0" class="space-y-4">
          <div v-for="(contact, index) in contacts" :key="index" class="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-semibold text-gray-800">{{ contact.firstName }} {{ contact.lastName }}</p>
                <p class="text-gray-600">{{ contact.phone }}</p>
                <p class="text-xs text-gray-500 mt-1">
                  <span v-if="contact.type === 'PICKUP_ONLY'" class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Récupération</span>
                  <span v-else-if="contact.type === 'EMERGENCY_ONLY'" class="bg-red-100 text-red-800 px-2 py-1 rounded-full">Urgence</span>
                  <span v-else-if="contact.type === 'EMERGENCY_AND_PICKUP'" class="bg-green-100 text-green-800 px-2 py-1 rounded-full">Récupération + Urgence</span>
                </p>
              </div>
              <button
                @click="removeContact(index)"
                class="text-red-500 hover:text-red-700 p-2"
                title="Supprimer ce contact"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Add More Contact Buttons -->
        <div v-if="currentStep === 'add-more'" class="space-y-4">
          <div class="flex space-x-4">
            <button
              @click="addAnotherContact"
              class="btn-primary flex-1"
              :disabled="loading"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Oui, ajouter un contact
            </button>
            <button
              @click="finishContacts"
              class="btn-secondary flex-1"
              :disabled="loading || contacts.length === 0"
            >
              {{ contacts.length === 0 ? 'Au moins 1 contact requis' : 'Terminer' }}
            </button>
          </div>
        </div>

        <!-- Contact Name Input -->
        <div v-if="currentStep === 'contact-name'" class="space-y-4 sm:space-y-6">
          <div class="space-y-4">
            <input
              v-model="form.firstName"
              type="text"
              class="answer-input"
              placeholder="Prénom du contact"
              :disabled="loading"
              required
            />
            <input
              v-model="form.lastName"
              type="text"
              class="answer-input"
              placeholder="Nom de famille du contact"
              @keyup.enter="handleNameSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <button
              @click="handleBack"
              class="btn-secondary w-full sm:w-auto"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleNameSubmit"
              :disabled="loading || !form.firstName || !form.lastName"
              class="btn-primary w-full sm:w-auto"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Contact Phone Input -->
        <div v-if="currentStep === 'contact-phone'" class="space-y-4 sm:space-y-6">
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
          
          <div class="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <button
              @click="currentStep = 'contact-name'"
              class="btn-secondary w-full sm:w-auto"
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
              class="btn-primary w-full sm:w-auto"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Contact Type Selection -->
        <div v-if="currentStep === 'contact-type'" class="space-y-4 sm:space-y-6">
          <div class="grid grid-cols-1 gap-4">
            <button
              @click="handleContactType('PICKUP_ONLY')"
              :disabled="loading"
              class="contact-type-btn"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-800">Récupération uniquement</p>
                  <p class="text-sm text-gray-600">Peut venir récupérer le mineur en fin de cours</p>
                </div>
              </div>
            </button>
            
            <button
              @click="handleContactType('EMERGENCY_ONLY')"
              :disabled="loading"
              class="contact-type-btn"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L5.232 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-800">Urgence uniquement</p>
                  <p class="text-sm text-gray-600">À appeler en cas d'urgence seulement</p>
                </div>
              </div>
            </button>
            
            <button
              @click="handleContactType('EMERGENCY_AND_PICKUP')"
              :disabled="loading"
              class="contact-type-btn"
            >
              <div class="flex items-center">
                <div class="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-800">Les deux</p>
                  <p class="text-sm text-gray-600">Récupération ET contact d'urgence</p>
                </div>
              </div>
            </button>
          </div>
          
          <div class="flex justify-center">
            <button
              @click="currentStep = 'contact-phone'"
              class="btn-secondary"
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
const contacts = ref([])
const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  type: ''
})

const fullText = "Excellent ! On avance bien dans ton inscription ! 🎯 Pour ta sécurité, j'ai maintenant besoin d'ajouter tes contacts d'urgence. C'est important en cas de besoin ! 🚨"

const goBack = () => {
  navigateTo('/inscription/step-2')
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
        currentStep.value = 'contact-name'
      }, 800)
    }
  }, 20)
}

const addAnotherContact = () => {
  form.value = { firstName: '', lastName: '', phone: '', type: '' }
  currentStep.value = 'contact-name'
}

const finishContacts = async () => {
  if (contacts.value.length > 0) {
    await handleSubmit()
  }
}

const removeContact = (index: number) => {
  contacts.value.splice(index, 1)
}

const handleNameSubmit = () => {
  if (!form.value.firstName || !form.value.lastName) return
  setTimeout(() => {
    currentStep.value = 'contact-phone'
  }, 500)
}

const handlePhoneSubmit = () => {
  if (!form.value.phone) return
  
  // Aller à l'étape de sélection du type
  setTimeout(() => {
    currentStep.value = 'contact-type'
  }, 500)
}

const handleContactType = (type: string) => {
  form.value.type = type
  
  // Ajouter le contact à la liste
  contacts.value.push({
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    phone: form.value.phone,
    type: type
  })
  
  // Réinitialiser le formulaire
  form.value = { firstName: '', lastName: '', phone: '', type: '' }
  
  // Aller à l'étape "add-more"
  setTimeout(() => {
    currentStep.value = 'add-more'
  }, 500)
}

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données
    const formDataCookie = useCookie('registration-step3', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      emergencyContacts: contacts.value
    }
    
    console.log('Step 3 data:', formDataCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aller à l'étape 4
    await navigateTo('/inscription/step-4')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  // Vérifier les données des étapes précédentes
  const step1Data = useCookie('registration-step1').value
  const step2Data = useCookie('registration-step2').value
  
  if (!step1Data || !step1Data.firstName) {
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

// Meta
useHead({
  title: 'Étape 3 - Contact d\'urgence • Square630',
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
  padding: 1rem 1.5rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  color: #1e293b;
  font-size: 1rem;
  line-height: 1.5rem;
  outline: none;
  transition: all 0.3s ease;
}

@media (min-width: 640px) {
  .answer-input {
    padding: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

.answer-input::placeholder {
  color: #94a3b8;
}

.answer-input:focus {
  border-color: #ea580c;
  box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.2);
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

.contact-type-btn {
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  text-align: left;
  transition: all 0.2s ease;
  outline: none;
}

.contact-type-btn:hover {
  border-color: #fed7aa;
  background-color: #fff7ed;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.contact-type-btn:focus {
  box-shadow: 0 0 0 4px rgba(234, 88, 12, 0.2);
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
</style>