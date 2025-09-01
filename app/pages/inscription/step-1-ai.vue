<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-slate-400/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-24 left-16 w-3 h-3 bg-blue-300/20 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute top-64 right-32 w-2 h-2 bg-indigo-300/30 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-48 left-24 w-4 h-4 bg-slate-300/15 rounded-full animate-pulse" style="animation-delay: 3s;"></div>
    </div>

    <!-- Top Navigation Bar -->
    <div class="relative z-20 px-8 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div class="text-xl font-bold text-white">Square630</div>
        </div>
        
        <!-- Progress indicator -->
        <div class="flex items-center space-x-6">
          <ProgressBar :current-step="1" />
          <button @click="goBack" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/20">
            Retour
          </button>
        </div>
      </div>
    </div>

    <!-- Chat Container -->
    <div class="relative z-10 max-w-4xl mx-auto px-8 pb-12 h-[calc(100vh-120px)]">
      
      <!-- Chat Messages Area -->
      <div class="bg-white/98 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 h-full flex flex-col">
        
        <!-- Chat Header -->
        <div class="border-b border-slate-200 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-t-2xl">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-800">Assistant Square630</h3>
              <p class="text-sm text-slate-600">Je vais t'aider pour ton inscription</p>
            </div>
            <div class="ml-auto">
              <div class="flex items-center space-x-2 text-sm text-slate-500">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>En ligne</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Messages Container -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-slate-50/50 to-white">
          
          <!-- AI Messages -->
          <div v-for="(message, index) in messages" :key="index" class="message-container" :class="message.type">
            
            <!-- AI Message -->
            <div v-if="message.type === 'ai'" class="flex items-start space-x-3 animate-slide-in">
              <div class="w-8 h-8 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
                </svg>
              </div>
              <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-md p-4 max-w-2xl shadow-sm">
                <p class="text-slate-800 leading-relaxed" v-html="message.content"></p>
              </div>
            </div>

            <!-- User Message -->
            <div v-if="message.type === 'user'" class="flex items-start space-x-3 justify-end animate-slide-in">
              <div class="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 rounded-2xl rounded-tr-md p-4 max-w-2xl shadow-sm">
                <p class="text-white leading-relaxed">{{ message.content }}</p>
              </div>
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>

            <!-- Options -->
            <div v-if="message.type === 'options'" class="flex flex-wrap gap-2 ml-11 animate-slide-in">
              <button 
                v-for="option in message.options" 
                :key="option.value"
                @click="selectOption(option)"
                class="option-button"
                :disabled="selectedOptions.includes(message.field)"
              >
                {{ option.label }}
              </button>
            </div>

            <!-- Input Field -->
            <div v-if="message.type === 'input'" class="ml-11 animate-slide-in">
              <div class="flex space-x-3">
                <input 
                  v-model="currentInput"
                  :type="message.inputType || 'text'"
                  :placeholder="message.placeholder"
                  class="input-field flex-1"
                  @keyup.enter="submitInput(message.field)"
                  :disabled="selectedOptions.includes(message.field)"
                />
                <button 
                  @click="submitInput(message.field)"
                  :disabled="!currentInput.trim() || selectedOptions.includes(message.field)"
                  class="submit-button"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex items-start space-x-3 animate-slide-in">
            <div class="w-8 h-8 bg-gradient-to-br from-slate-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
              </svg>
            </div>
            <div class="bg-white border border-slate-200 rounded-2xl rounded-tl-md p-4 shadow-sm">
              <div class="flex space-x-1">
                <div class="typing-dot animate-bounce"></div>
                <div class="typing-dot animate-bounce" style="animation-delay: 0.1s;"></div>
                <div class="typing-dot animate-bounce" style="animation-delay: 0.2s;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const messagesContainer = ref<HTMLElement>()
const messages = ref<any[]>([])
const isTyping = ref(false)
const currentInput = ref('')
const selectedOptions = ref<string[]>([])
const formData = ref<any>({})
const currentStep = ref(0)

const conversationFlow = [
  {
    type: 'ai',
    content: `Salut ${user.value?.firstName || 'toi'} ! 👋<br><br>Je suis l'assistant virtuel de Square630 et je vais t'aider à t'inscrire à nos cours de hip-hop. On va faire ça ensemble, étape par étape !<br><br>Prêt(e) à commencer ?`,
    delay: 1000
  },
  {
    type: 'ai',
    content: 'Pour commencer, dis-moi ton prénom :',
    delay: 800,
    followUp: {
      type: 'input',
      field: 'firstName',
      placeholder: 'Tape ton prénom...',
      inputType: 'text'
    }
  },
  {
    type: 'ai',
    content: 'Super ! Et ton nom de famille ?',
    delay: 600,
    followUp: {
      type: 'input',
      field: 'lastName',
      placeholder: 'Ton nom...',
      inputType: 'text'
    }
  },
  {
    type: 'ai',
    content: 'Parfait ! Maintenant, quelle est ta date de naissance ?',
    delay: 600,
    followUp: {
      type: 'input',
      field: 'birthDate',
      placeholder: '',
      inputType: 'date'
    }
  },
  {
    type: 'ai',
    content: 'Merci ! Où habites-tu ? (ton adresse complète)',
    delay: 600,
    followUp: {
      type: 'input',
      field: 'address',
      placeholder: '12 rue de la Danse...',
      inputType: 'text'
    }
  },
  {
    type: 'ai',
    content: 'Dans quelle ville ?',
    delay: 500,
    followUp: {
      type: 'input',
      field: 'city',
      placeholder: 'Paris, Lyon...',
      inputType: 'text'
    }
  },
  {
    type: 'ai',
    content: 'Et le code postal ?',
    delay: 500,
    followUp: {
      type: 'input',
      field: 'postalCode',
      placeholder: '75001...',
      inputType: 'text'
    }
  },
  {
    type: 'ai',
    content: 'Quel est ton numéro de téléphone ?',
    delay: 600,
    followUp: {
      type: 'input',
      field: 'phone',
      placeholder: '06 12 34 56 78...',
      inputType: 'tel'
    }
  },
  {
    type: 'ai',
    content: 'Quel est ton niveau scolaire actuel ?',
    delay: 600,
    followUp: {
      type: 'options',
      field: 'schoolLevel',
      options: [
        { label: 'Maternelle', value: 'Maternelle' },
        { label: 'Primaire (CP-CM2)', value: 'Primaire' },
        { label: 'Collège (6ème-3ème)', value: 'Collège' },
        { label: 'Lycée (2nde-Term)', value: 'Lycée' },
        { label: 'Études supérieures', value: 'Études supérieures' },
        { label: 'Vie active', value: 'Vie active' }
      ]
    }
  },
  {
    type: 'ai',
    content: 'Quelle taille de t-shirt portes-tu ?',
    delay: 600,
    followUp: {
      type: 'options',
      field: 'tshirtSize',
      options: [
        { label: 'XS', value: 'XS' },
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
        { label: 'XXL', value: 'XXL' }
      ]
    }
  },
  {
    type: 'ai',
    content: 'Dernière question : y a-t-il quelque chose d\'important que nous devrions savoir ? (allergies, particularités, etc.)<br><br>Tu peux aussi laisser vide si tu n\'as rien à signaler.',
    delay: 800,
    followUp: {
      type: 'input',
      field: 'otherInfo',
      placeholder: 'Optionnel : allergies, souhaits particuliers...',
      inputType: 'text'
    }
  }
]

const goBack = () => {
  navigateTo('/dashboard')
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const addMessage = async (message: any) => {
  if (message.delay) {
    isTyping.value = true
    await new Promise(resolve => setTimeout(resolve, message.delay))
    isTyping.value = false
  }
  
  messages.value.push(message)
  
  if (message.followUp) {
    await nextTick()
    messages.value.push(message.followUp)
  }
  
  await scrollToBottom()
}

const selectOption = async (option: any) => {
  const field = messages.value[messages.value.length - 1].field
  
  // Add user response
  messages.value.push({
    type: 'user',
    content: option.label
  })
  
  // Save data
  formData.value[field] = option.value
  selectedOptions.value.push(field)
  
  await scrollToBottom()
  
  // Continue conversation
  setTimeout(() => {
    nextQuestion()
  }, 800)
}

const submitInput = async (field: string) => {
  if (!currentInput.value.trim() && field !== 'otherInfo') return
  
  // Add user response
  messages.value.push({
    type: 'user',
    content: currentInput.value || 'Rien à signaler'
  })
  
  // Save data
  formData.value[field] = currentInput.value
  selectedOptions.value.push(field)
  currentInput.value = ''
  
  await scrollToBottom()
  
  // Continue conversation
  setTimeout(() => {
    nextQuestion()
  }, 800)
}

const nextQuestion = async () => {
  currentStep.value++
  
  if (currentStep.value < conversationFlow.length) {
    await addMessage(conversationFlow[currentStep.value])
  } else {
    // Conversation finished
    await addMessage({
      type: 'ai',
      content: `Parfait ! 🎉<br><br>J'ai toutes tes informations. ${calculateAge() < 18 ? 'Comme tu es mineur(e), on va maintenant avoir besoin des infos de ton responsable légal.' : 'On va maintenant passer aux contacts d\'urgence.'}<br><br>Clique sur "Continuer" pour passer à l'étape suivante !`,
      delay: 1000
    })
    
    // Add continue button
    setTimeout(() => {
      messages.value.push({
        type: 'continue'
      })
    }, 1200)
  }
}

const calculateAge = () => {
  if (!formData.value.birthDate) return 18
  const today = new Date()
  const birth = new Date(formData.value.birthDate)
  const age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1
  }
  return age
}

const continueToNextStep = async () => {
  // Save data
  const formDataCookie = useCookie('registration-step1', {
    default: () => ({})
  })
  
  const isMinor = calculateAge() < 18
  
  formDataCookie.value = {
    ...formData.value,
    isMinor
  }
  
  // Navigate to next step
  if (isMinor) {
    await navigateTo('/inscription/step-2')
  } else {
    await navigateTo('/inscription/step-3')
  }
}

// Start conversation
onMounted(async () => {
  await addMessage(conversationFlow[0])
  currentStep.value = 0
  
  // Auto continue after welcome
  setTimeout(async () => {
    await addMessage(conversationFlow[1])
    currentStep.value = 1
  }, 2000)
})

// Meta
useHead({
  title: 'Assistant IA - Inscription Square630',
  meta: [
    { name: 'description', content: 'Assistant virtuel pour votre inscription aux cours de hip-hop' }
  ]
})
</script>

<style scoped>
.message-container {
  animation: slideIn 0.5s ease-out;
}

.option-button {
  @apply px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-medium 
         hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 
         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}

.option-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.input-field {
  @apply px-4 py-3 bg-white border-2 border-slate-200 rounded-xl text-slate-800 
         placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 
         focus:ring-blue-500/20 transition-all duration-200;
}

.submit-button {
  @apply px-4 py-3 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 
         text-white rounded-xl hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 
         transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
         transform hover:scale-105 disabled:transform-none;
}

.typing-dot {
  @apply w-2 h-2 bg-slate-400 rounded-full;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}

/* Continue button */
.continue-btn {
  @apply w-full mt-4 px-6 py-4 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 
         text-white font-semibold rounded-xl hover:from-slate-700 hover:via-blue-700 
         hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 
         shadow-lg hover:shadow-xl;
}
</style>