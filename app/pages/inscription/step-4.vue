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
            <ProgressBar :current-step="4" />
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
              <p v-if="currentStep === 'dance-selection'" class="text-gray-800 text-lg leading-relaxed">
                Génial ! Nous arrivons à la dernière étape. Il est temps de choisir ton groupe de danse ! Quel style t'intéresse le plus ?
              </p>
              <p v-else-if="currentStep === 'group-details' && selectedGroup" class="text-gray-800 text-lg leading-relaxed">
                Excellent choix ! {{ selectedGroup.name }} - {{ selectedGroup.description }}. Es-tu prêt(e) à rejoindre ce groupe ?
              </p>
            </div>
          </div>
        </div>

        <!-- Dance Group Selection -->
        <div v-if="currentStep === 'dance-selection'" class="space-y-4">
          <div class="grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
            <button
              v-for="group in danceGroups"
              :key="group.id"
              @click="handleGroupSelection(group)"
              :disabled="loading"
              class="option-button"
              :class="{ 'selected': selectedGroup?.id === group.id }"
            >
              <div class="flex items-start">
                <div class="w-8 h-8 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <span class="text-white text-sm font-bold">{{ group.name.substring(0, 2) }}</span>
                </div>
                <div class="text-left flex-1">
                  <div class="font-semibold text-gray-900">{{ group.name }}</div>
                  <div class="text-sm text-gray-600 mb-1">{{ group.description }}</div>
                  <div class="text-xs text-blue-600 font-medium">
                    {{ group.ageRange }} • {{ group.schedule }} • {{ group.price }}€
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <!-- Group Confirmation -->
        <div v-if="currentStep === 'group-details'" class="space-y-6">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <span class="text-white text-lg font-bold">{{ selectedGroup?.name.substring(0, 2) }}</span>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-1">{{ selectedGroup?.name }}</h3>
                <p class="text-gray-700 mb-2">{{ selectedGroup?.description }}</p>
                <div class="text-sm text-gray-600">
                  <div><strong>Âge :</strong> {{ selectedGroup?.ageRange }}</div>
                  <div><strong>Horaire :</strong> {{ selectedGroup?.schedule }}</div>
                  <div><strong>Prix :</strong> {{ selectedGroup?.price }}€ {{ selectedGroup?.period }}</div>
                  <div><strong>Niveau :</strong> {{ selectedGroup?.level }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'dance-selection'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Changer de groupe
            </button>
            
            <button
              @click="handleFinalSubmit"
              :disabled="loading"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Terminer l'inscription</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
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
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const currentStep = ref('greeting')
const displayText = ref('')
const showCursor = ref(true)
const loading = ref(false)
const error = ref('')
const selectedGroup = ref<any>(null)

const danceGroups = ref([
  {
    id: 1,
    name: "HIPHOP ENFANTS",
    description: "Initiation au hip-hop avec des bases ludiques",
    ageRange: "6-10 ans",
    schedule: "Mercredi 14h-15h",
    level: "Débutant",
    price: 25,
    period: "par mois"
  },
  {
    id: 2,
    name: "HIPHOP ADOS",
    description: "Hip-hop dynamique pour adolescents",
    ageRange: "11-15 ans", 
    schedule: "Mercredi 15h-16h30",
    level: "Tous niveaux",
    price: 30,
    period: "par mois"
  },
  {
    id: 3,
    name: "HIPHOP ADULTES",
    description: "Sessions hip-hop pour adultes débutants et confirmés",
    ageRange: "16+ ans",
    schedule: "Jeudi 19h-20h30",
    level: "Tous niveaux", 
    price: 35,
    period: "par mois"
  },
  {
    id: 4,
    name: "BREAKDANCE",
    description: "L'art du breaking avec figures au sol",
    ageRange: "12+ ans",
    schedule: "Samedi 14h-15h30",
    level: "Intermédiaire",
    price: 40,
    period: "par mois"
  },
  {
    id: 5,
    name: "HOUSE DANCE",
    description: "Danse house énergique et technique", 
    ageRange: "14+ ans",
    schedule: "Vendredi 18h-19h30",
    level: "Avancé",
    price: 35,
    period: "par mois"
  }
])

const fullText = "Nous y sommes presque ! C'est le moment de choisir ton groupe de danse. Chaque groupe a sa propre personnalité et son niveau. Lequel t'appelle le plus ? 🕺💃"

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

const handleGroupSelection = (group: any) => {
  selectedGroup.value = group
  setTimeout(() => {
    currentStep.value = 'group-details'
  }, 500)
}

const handleFinalSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données
    const formDataCookie = useCookie('registration-step4', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      selectedDanceGroup: selectedGroup.value
    }
    
    console.log('Step 4 data:', formDataCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aller à la page de récapitulatif
    await navigateTo('/inscription/summary')
    
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
  const step3Data = useCookie('registration-step3').value
  
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
  title: 'Étape 4 - Choix du groupe • Square630',
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