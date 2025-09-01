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
            <ProgressBar :current-step="2" />
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

    <div class="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        <!-- Logo Section -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">2</span>
            </div>
          </div>
          <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
              RESPONSABLE
            </span>
          </h1>
          <p class="text-slate-200 font-medium text-lg">Si tu es mineur</p>
        </div>

        <!-- Age Check Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="mb-6">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">
                <span class="bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
                  Es-tu mineur ?
                </span>
              </h2>
              
              <div class="flex flex-col gap-4">
                <button
                  @click="setIsMinor(true)"
                  :class="[
                    'flex items-center justify-center py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 transform hover:scale-105',
                    isMinor === true 
                      ? 'bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  ]"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Oui, j'ai moins de 18 ans
                </button>
                <button
                  @click="setIsMinor(false)"
                  :class="[
                    'flex items-center justify-center py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 transform hover:scale-105',
                    isMinor === false 
                      ? 'bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                  ]"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Non, j'ai 18 ans ou plus
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Card (visible seulement si mineur) -->
        <div v-if="isMinor === true" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <form @submit.prevent="handleSubmit" class="space-y-5">
              
              <!-- Email du responsable -->
              <div class="space-y-3">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                    Email du responsable légal
                  </span>
                </label>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div class="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                      </svg>
                    </div>
                  </div>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="parent@exemple.com"
                    :disabled="loading"
                    class="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Name Fields Row -->
              <div class="grid grid-cols-2 gap-4">
                <!-- First Name -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                      Prénom
                    </span>
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="Marie"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>

                <!-- Last Name -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent">
                      Nom
                    </span>
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Dupont"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-indigo-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Address -->
              <div class="space-y-3">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                    Adresse
                  </span>
                </label>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div class="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                  </div>
                  <input
                    v-model="form.address"
                    type="text"
                    placeholder="12 rue de la République"
                    :disabled="loading"
                    class="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Postal Code and City Row -->
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                      Code postal
                    </span>
                  </label>
                  <input
                    v-model="form.postalCode"
                    type="text"
                    placeholder="75000"
                    pattern="[0-9]{5}"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent">
                      Ville
                    </span>
                  </label>
                  <input
                    v-model="form.city"
                    type="text"
                    placeholder="Paris"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-indigo-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Phone -->
              <div class="space-y-3">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                    Téléphone
                  </span>
                </label>
                <div class="relative group">
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <div class="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                  </div>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    :disabled="loading"
                    class="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Autorisation parentale -->
              <div class="space-y-4">
                <div class="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border-2 border-slate-200/50">
                  <div class="flex items-start space-x-4">
                    <input
                      v-model="form.authorized"
                      type="checkbox"
                      id="authorization"
                      :disabled="loading"
                      class="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-slate-300"
                      required
                    />
                    <label for="authorization" class="text-gray-700 font-medium leading-relaxed cursor-pointer">
                      <span class="font-bold text-slate-800">J'autorise mon fils/ma fille à participer à l'activité danse hip-hop organisée par l'association Andyvie.</span>
                      <br><br>
                      <span class="text-sm text-gray-600">En cochant cette case, je donne mon consentement parental pour la participation de mon enfant aux cours de danse hip-hop.</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Error Alert -->
              <div v-if="error" class="bg-red-50 border border-red-200 p-4 rounded-xl">
                <div class="flex items-center">
                  <div class="w-5 h-5 text-red-600 mr-3 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L5.232 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                  </div>
                  <p class="text-red-800 font-medium text-sm">{{ error }}</p>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="loading"
                class="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden"
              >
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
                  <div class="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                </div>
                <span :class="{ 'invisible': loading }" class="relative flex items-center justify-center space-x-2">
                  <span>{{ loading ? 'Sauvegarde...' : 'Étape suivante' }}</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- Skip Button (si majeur) -->
        <div v-if="isMinor === false" class="text-center animate-slide-in">
          <button
            @click="skipStep"
            :disabled="loading"
            class="py-4 px-8 rounded-2xl font-bold text-lg bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden"
          >
            <!-- Shine effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span class="relative flex items-center justify-center space-x-2">
              <span>Passer à l'étape suivante</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
          <p class="text-slate-300 mt-4 text-sm">Tu es majeur, cette étape ne te concerne pas.</p>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center animate-slide-in-delay">
          <p class="text-sm text-slate-300/80 font-medium">
            © 2024 Square630 • Association Andyvie • 
            <span class="bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">
              Tous droits réservés
            </span>
          </p>
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

// Vérifier si l'utilisateur doit être ici
onMounted(() => {
  const step1Data = useCookie('registration-step1').value
  if (!step1Data || !step1Data.isMinor) {
    // Si pas mineur, rediriger vers l'étape 3
    navigateTo('/inscription/step-3')
  }
})

const loading = ref(false)
const error = ref('')
const isMinor = ref<boolean | null>(null)

const form = ref({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  postalCode: '',
  city: '',
  phone: '',
  authorized: false
})

const setIsMinor = (value: boolean) => {
  isMinor.value = value
  if (value === false) {
    // Reset form if user is not minor
    form.value = {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      postalCode: '',
      city: '',
      phone: '',
      authorized: false
    }
  }
}

const goBack = () => {
  navigateTo('/inscription/step-1')
}

const skipStep = async () => {
  // Aller directement à l'étape 3 si majeur
  await navigateTo('/inscription/step-3')
}

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Vérifier que l'autorisation est cochée
    if (!form.value.authorized) {
      error.value = 'L\'autorisation parentale est obligatoire'
      return
    }

    // Ici on sauvegardera les données plus tard
    console.log('Legal guardian data:', form.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Rediriger vers l'étape 3
    await navigateTo('/inscription/step-3')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

// Meta
useHead({
  title: 'Étape 2 - Responsable légal • Square630',
  meta: [
    { name: 'description', content: 'Informations du responsable légal pour les participants mineurs' }
  ]
})
</script>