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

          <!-- User Menu -->
          <div class="flex items-center space-x-6">
            <div class="text-white/90 font-medium">
              Bonjour, <span class="font-bold text-white">{{ user?.email }}</span>
            </div>
            <button
              @click="handleLogout"
              class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header Section -->
      <div class="mb-12 animate-fade-in text-center">
        <h1 class="text-5xl font-black text-white mb-4 tracking-tight">
          <span class="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            Tableau de bord
          </span>
        </h1>
        <p class="text-slate-200 text-xl font-medium">
          Association Andyvie • Square630
        </p>
      </div>

      <!-- Registration Status -->
      <div v-if="loading" class="text-center py-12">
        <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-white/80">Chargement de votre inscription...</p>
      </div>

      <div v-else-if="registration.hasRegistration" class="space-y-8">
        
        <!-- Status Badge -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center space-x-3 bg-green-100 text-green-800 px-6 py-3 rounded-2xl border border-green-200">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-lg font-bold">Inscription active</span>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Informations personnelles -->
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-blue-500/5 to-indigo-500/5 rounded-3xl"></div>
            <div class="relative">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">Informations personnelles</h3>
                  <p class="text-slate-600">{{ registration.registration.dancer.firstName }} {{ registration.registration.dancer.lastName }}</p>
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span class="text-gray-700">{{ registration.registration.dancer.email }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span class="text-gray-700">{{ registration.registration.dancer.phone }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span class="text-gray-700">{{ registration.registration.dancer.address }}, {{ registration.registration.dancer.postalCode }} {{ registration.registration.dancer.city }}</span>
                </div>
                <div class="flex items-center space-x-3">
                  <div class="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <span class="text-gray-700">Né(e) le {{ formatDate(registration.registration.dancer.birthDate) }}</span>
                </div>
                <div class="pt-4 border-t border-gray-200">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">Niveau</span>
                    <span class="font-semibold text-gray-700">{{ registration.registration.dancer.schoolLevel }}</span>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <span class="text-sm text-gray-500">T-shirt</span>
                    <span class="font-semibold text-gray-700">{{ registration.registration.dancer.tShirtSize }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Groupes de danse -->
          <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 rounded-3xl"></div>
            <div class="relative">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12 7-12 6z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-800">Groupes de danse</h3>
                  <p class="text-slate-600">{{ registration.registration.danceGroups.length }} groupe(s) sélectionné(s)</p>
                </div>
              </div>
              <div class="space-y-4">
                <div v-for="group in registration.registration.danceGroups" :key="group.id" 
                     class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all duration-300">
                  <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-gray-800">{{ group.name }}</h4>
                    <span class="px-3 py-1 rounded-full text-xs font-bold" :class="getStatusBadgeClass(group.status)">
                      {{ getStatusText(group.status) }}
                    </span>
                  </div>
                  <p class="text-sm text-gray-600 mb-2">{{ group.description }}</p>
                  <div class="flex items-center justify-between">
                    <span class="text-sm font-semibold text-purple-700">{{ group.schedule }}</span>
                    <span class="text-xs text-gray-500">{{ group.ageGroup }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contacts & Responsable -->
          <div class="space-y-8">
            
            <!-- Contacts d'urgence -->
            <div v-if="registration.registration.emergencyContacts.length > 0" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 rounded-3xl"></div>
              <div class="relative">
                <div class="flex items-center space-x-4 mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-800">Contacts d'urgence</h3>
                    <p class="text-slate-600">{{ registration.registration.emergencyContacts.length }} contact(s)</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div v-for="contact in registration.registration.emergencyContacts" :key="contact.id" 
                       class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border border-orange-200/50">
                    <p class="font-semibold text-gray-800">{{ contact.firstName }} {{ contact.lastName }}</p>
                    <p class="text-gray-600">{{ contact.phone }}</p>
                    <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">{{ contact.type }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Responsable légal -->
            <div v-if="registration.registration.guardian" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-3xl"></div>
              <div class="relative">
                <div class="flex items-center space-x-4 mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-800">Responsable légal</h3>
                    <p class="text-slate-600">Tuteur légal</p>
                  </div>
                </div>
                <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-2xl border border-emerald-200/50">
                  <div class="flex items-center justify-between mb-3">
                    <p class="font-semibold text-gray-800">{{ registration.registration.guardian.firstName }} {{ registration.registration.guardian.lastName }}</p>
                    <span class="px-3 py-1 rounded-full text-xs font-bold" 
                          :class="registration.registration.guardian.authorized ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'">
                      {{ registration.registration.guardian.authorized ? '✓ Autorisé' : '⏳ En attente' }}
                    </span>
                  </div>
                  <p class="text-gray-600 mb-1">{{ registration.registration.guardian.email }}</p>
                  <p class="text-gray-600">{{ registration.registration.guardian.phone }}</p>
                </div>
              </div>
            </div>
          
          </div>
        </div>

        <!-- Status global -->
        <div class="text-center">
          <div class="inline-block bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20">
            <p class="text-gray-700 mb-2">Inscription soumise le <span class="font-semibold">{{ formatDate(registration.registration.dancer.createdAt) }}</span></p>
            <div class="flex items-center justify-center space-x-2">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span class="text-lg font-bold text-blue-700">En attente de validation</span>
            </div>
          </div>
        </div>
      </div>

      <!-- No Registration -->
      <div v-else class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl"></div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        
        <div class="relative text-center">
          <div class="w-24 h-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-8">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            <span class="bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
              Commencer mon inscription
            </span>
          </h2>
          
          <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Vous n'avez pas encore d'inscription. Rejoignez nos cours de hip-hop en complétant votre dossier en 4 étapes simples.
          </p>

          <button
            @click="startRegistration"
            class="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/20 inline-flex items-center space-x-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            <span>Commencer l'inscription</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead, navigateTo } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user, logout } = useAuth()

const loading = ref(true)
const registration = ref({ hasRegistration: false, registration: null })

const fetchRegistration = async () => {
  try {
    const response = await $fetch('/api/inscriptions/my-registration')
    registration.value = response
  } catch (error) {
    console.error('Erreur chargement inscription:', error)
  } finally {
    loading.value = false
  }
}

const handleLogout = async () => {
  await logout()
  await navigateTo('/')
}

const startRegistration = () => {
  navigateTo('/inscription/step-1')
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR')
}

const getStatusText = (status: string) => {
  const statusMap = {
    'DRAFT': 'Brouillon',
    'SUBMITTED': 'Soumis',
    'APPROVED': 'Approuvé',
    'REJECTED': 'Refusé'
  }
  return statusMap[status] || status
}

const getStatusClass = (status: string) => {
  const classMap = {
    'DRAFT': 'border-gray-300',
    'SUBMITTED': 'border-blue-300',
    'APPROVED': 'border-green-300',
    'REJECTED': 'border-red-300'
  }
  return classMap[status] || 'border-gray-300'
}

const getStatusBadgeClass = (status: string) => {
  const classMap = {
    'DRAFT': 'bg-gray-100 text-gray-800',
    'SUBMITTED': 'bg-blue-100 text-blue-800',
    'APPROVED': 'bg-green-100 text-green-800',
    'REJECTED': 'bg-red-100 text-red-800'
  }
  return classMap[status] || 'bg-gray-100 text-gray-800'
}

onMounted(() => {
  fetchRegistration()
})

// Meta
useHead({
  title: 'Tableau de bord • Square630',
  meta: [
    { name: 'description', content: 'Tableau de bord Square630 - Mon inscription hip-hop' }
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-in {
  animation: slide-in 0.8s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>