<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
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
              Étape <span class="font-bold text-white">3</span> sur 4
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
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-white via-slate-50 to-orange-50 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-600 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">3</span>
            </div>
          </div>
          <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-white via-slate-200 to-orange-200 bg-clip-text text-transparent">
              Contacts d'urgence
            </span>
          </h1>
          <p class="text-slate-200 font-medium text-lg">Sécurité avant tout</p>
        </div>

        <!-- Info Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-600 via-red-600 to-orange-600 rounded-3xl flex items-center justify-center shadow-xl">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                    Personnes de confiance
                  </span>
                </h2>
                <p class="text-gray-600 text-lg font-medium">Ajoutez un ou plusieurs contacts d'urgence</p>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border-2 border-orange-200/50">
              <p class="text-gray-700 leading-relaxed">
                <span class="font-semibold text-orange-800">Pourquoi ces informations ?</span><br>
                Ces contacts seront prévenus en cas d'urgence pendant les cours. Vous pouvez également indiquer qui est autorisé à récupérer votre enfant à la fin des séances.
              </p>
            </div>
          </div>
        </div>

        <!-- Contacts List -->
        <div class="space-y-6 mb-8">
          <div v-for="(contact, index) in contacts" :key="index" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
            <!-- Card glow effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl"></div>
            
            <div class="relative">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Contact {{ index + 1 }}
                  </span>
                </h3>
                <button
                  v-if="contacts.length > 1"
                  @click="removeContact(index)"
                  class="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-2xl transition-all duration-300 transform hover:scale-110"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>

              <div class="space-y-6">
                <!-- Type de contact -->
                <div class="space-y-3">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Type de contact *
                    </span>
                  </label>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      type="button"
                      @click="contact.type = 'emergency'"
                      :class="[
                        'py-3 px-4 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 transform hover:scale-105',
                        contact.type === 'emergency' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
                      ]"
                    >
                      Contact d'urgence
                    </button>
                    <button
                      type="button"
                      @click="contact.type = 'pickup'"
                      :class="[
                        'py-3 px-4 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 transform hover:scale-105',
                        contact.type === 'pickup' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
                      ]"
                    >
                      Récupération uniquement
                    </button>
                    <button
                      type="button"
                      @click="contact.type = 'both'"
                      :class="[
                        'py-3 px-4 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 transform hover:scale-105',
                        contact.type === 'both' 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-lg' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-400'
                      ]"
                    >
                      Les deux
                    </button>
                  </div>
                </div>

                <!-- Nom et Prénom -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="block text-sm font-bold text-gray-800">
                      <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        Prénom *
                      </span>
                    </label>
                    <input
                      v-model="contact.firstName"
                      type="text"
                      placeholder="Pierre"
                      :disabled="loading"
                      class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-orange-50/50 border-2 border-slate-200/50 focus:border-orange-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                      required
                    />
                  </div>

                  <div class="space-y-2">
                    <label class="block text-sm font-bold text-gray-800">
                      <span class="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                        Nom *
                      </span>
                    </label>
                    <input
                      v-model="contact.lastName"
                      type="text"
                      placeholder="Martin"
                      :disabled="loading"
                      class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-red-50/50 border-2 border-slate-200/50 focus:border-red-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-red-500/20"
                      required
                    />
                  </div>
                </div>

                <!-- Téléphone -->
                <div class="space-y-2">
                  <label class="block text-sm font-bold text-gray-800">
                    <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Téléphone *
                    </span>
                  </label>
                  <input
                    v-model="contact.phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    :disabled="loading"
                    class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-orange-50/50 border-2 border-slate-200/50 focus:border-orange-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-orange-500/20"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Contact Button -->
        <div class="text-center mb-8">
          <button
            @click="addContact"
            class="bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 border-2 border-orange-300 hover:border-orange-500 text-orange-800 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            <span>Ajouter un contact</span>
          </button>
        </div>

        <!-- Form Actions -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <!-- Error Alert -->
            <div v-if="error" class="bg-red-50 border border-red-200 p-4 rounded-xl mb-6">
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
              @click="handleSubmit"
              :disabled="loading || !isFormValid"
              class="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 hover:from-orange-700 hover:via-red-700 hover:to-orange-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 group overflow-hidden"
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
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center animate-slide-in-delay">
          <p class="text-sm text-slate-300/80 font-medium">
            © 2024 Square630 • Association Andyvie • 
            <span class="bg-gradient-to-r from-slate-300 to-orange-300 bg-clip-text text-transparent">
              Tous droits réservés
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead, navigateTo } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

interface Contact {
  type: string
  firstName: string
  lastName: string
  phone: string
}

const loading = ref(false)
const error = ref('')

const contacts = ref<Contact[]>([
  {
    type: '',
    firstName: '',
    lastName: '',
    phone: ''
  }
])

const isFormValid = computed(() => {
  return contacts.value.every(contact => 
    contact.type && 
    contact.firstName.trim() && 
    contact.lastName.trim() && 
    contact.phone.trim()
  )
})

const addContact = () => {
  contacts.value.push({
    type: '',
    firstName: '',
    lastName: '',
    phone: ''
  })
}

const removeContact = (index: number) => {
  if (contacts.value.length > 1) {
    contacts.value.splice(index, 1)
  }
}

const goBack = () => {
  navigateTo('/inscription/step-2')
}

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Validation
    if (!isFormValid.value) {
      error.value = 'Veuillez remplir tous les champs obligatoires pour chaque contact'
      return
    }

    // Ici on sauvegardera les données plus tard
    console.log('Emergency contacts data:', contacts.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Rediriger vers l'étape 4
    await navigateTo('/inscription/step-4')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

// Meta
useHead({
  title: 'Étape 3 - Contacts d\'urgence • Square630',
  meta: [
    { name: 'description', content: 'Ajoutez vos contacts d\'urgence pour votre inscription aux cours de hip-hop' }
  ]
})
</script>