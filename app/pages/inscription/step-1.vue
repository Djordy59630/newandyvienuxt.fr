<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-slate-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
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
            <div class="text-white/90 font-medium">
              Étape <span class="font-bold text-white">1</span> sur 4
            </div>
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
      <div class="w-full max-w-4xl">
        <!-- Header Section -->
        <div class="text-center mb-12 animate-fade-in">
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">1</span>
            </div>
          </div>
          <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
              Informations personnelles
            </span>
          </h1>
          <p class="text-slate-200 font-medium text-lg">"Qui es-tu ?"</p>
        </div>

        <!-- Form Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Email (lecture seule) -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Email *
                  </span>
                </label>
                <input
                  :value="user?.email"
                  type="email"
                  readonly
                  class="w-full px-4 py-3 rounded-2xl bg-gray-100 border-2 border-gray-200 text-gray-600 font-medium cursor-not-allowed"
                />
              </div>

              <!-- Nom et Prénom -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Prénom *
                    </span>
                  </label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="Jean"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      Nom *
                    </span>
                  </label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Dupont"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50/50 border-2 border-slate-200/50 focus:border-indigo-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Date de naissance -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Date de naissance *
                  </span>
                </label>
                <input
                  v-model="form.birthDate"
                  type="date"
                  :disabled="loading"
                  class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                  required
                />
              </div>

              <!-- Adresse -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Adresse *
                  </span>
                </label>
                <input
                  v-model="form.address"
                  type="text"
                  placeholder="12 rue de la Danse"
                  :disabled="loading"
                  class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                  required
                />
              </div>

              <!-- Code postal et Ville -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Code postal *
                    </span>
                  </label>
                  <input
                    v-model="form.postalCode"
                    type="text"
                    placeholder="75000"
                    pattern="[0-9]{5}"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      Ville *
                    </span>
                  </label>
                  <input
                    v-model="form.city"
                    type="text"
                    placeholder="Paris"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50/50 border-2 border-slate-200/50 focus:border-indigo-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/20"
                    required
                  />
                </div>
              </div>

              <!-- Téléphone -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Téléphone *
                  </span>
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  :disabled="loading"
                  class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                  required
                />
              </div>

              <!-- Niveau scolaire et Taille t-shirt -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Niveau scolaire *
                    </span>
                  </label>
                  <select
                    v-model="form.schoolLevel"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                    required
                  >
                    <option value="">Sélectionnez votre niveau</option>
                    <option value="CP">CP</option>
                    <option value="CE1">CE1</option>
                    <option value="CE2">CE2</option>
                    <option value="CM1">CM1</option>
                    <option value="CM2">CM2</option>
                    <option value="6ème">6ème</option>
                    <option value="5ème">5ème</option>
                    <option value="4ème">4ème</option>
                    <option value="3ème">3ème</option>
                    <option value="2nde">2nde</option>
                    <option value="1ère">1ère</option>
                    <option value="Terminale">Terminale</option>
                    <option value="Études supérieures">Études supérieures</option>
                    <option value="Actif">Actif</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                      Taille de t-shirt *
                    </span>
                  </label>
                  <select
                    v-model="form.tshirtSize"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50/50 border-2 border-slate-200/50 focus:border-indigo-500 focus:bg-white text-gray-800 font-medium transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/20"
                    required
                  >
                    <option value="">Sélectionnez votre taille</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>

              <!-- Autres informations -->
              <div class="space-y-2">
                <label class="block text-sm font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Autres informations
                  </span>
                </label>
                <textarea
                  v-model="form.otherInfo"
                  placeholder="Informations complémentaires (allergies, remarques particulières...)"
                  :disabled="loading"
                  rows="4"
                  class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50/50 border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20 resize-none"
                />
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
                class="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden"
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
import { ref } from 'vue'
import { useHead, navigateTo } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const loading = ref(false)
const error = ref('')

const form = ref({
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  birthDate: '',
  postalCode: '',
  city: '',
  address: '',
  phone: '',
  schoolLevel: '',
  tshirtSize: '',
  otherInfo: ''
})

const goBack = () => {
  navigateTo('/dashboard')
}

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Ici on sauvegardera les données plus tard
    console.log('Form data:', form.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Rediriger vers l'étape 2
    await navigateTo('/inscription/step-2')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

// Meta
useHead({
  title: 'Étape 1 - Informations personnelles • Square630',
  meta: [
    { name: 'description', content: 'Renseignez vos informations personnelles pour votre inscription aux cours de hip-hop' }
  ]
})
</script>