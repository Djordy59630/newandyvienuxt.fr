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

    <div class="relative flex min-h-screen items-center justify-center px-4 py-12">
      <div class="w-full max-w-2xl">
        <!-- Logo Section -->
        <div class="text-center mb-8 animate-fade-in">
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">4</span>
            </div>
          </div>
          <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
              TON GROUPE
            </span>
          </h1>
          <p class="text-slate-200 font-medium text-lg">Choisis ton style !</p>
        </div>

        <!-- Groups Selection -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div 
                v-for="group in danceGroups" 
                :key="group.id"
                @click="selectGroup(group)"
                :class="[
                  'p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 border-2',
                  selectedGroup?.id === group.id 
                    ? 'bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 text-white border-blue-600 shadow-lg shadow-blue-500/25' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-300 hover:border-blue-400'
                ]"
              >
                <!-- Selection indicator -->
                <div v-if="selectedGroup?.id === group.id" class="flex items-center justify-between mb-3">
                  <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                </div>

                <!-- Group info -->
                <h3 :class="['text-lg font-bold mb-2', selectedGroup?.id === group.id ? 'text-white' : 'text-gray-800']">
                  {{ group.name }}
                </h3>
                
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <svg :class="['w-4 h-4 flex-shrink-0', selectedGroup?.id === group.id ? 'text-white/80' : 'text-gray-500']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span :class="['text-sm font-medium', selectedGroup?.id === group.id ? 'text-white/80' : 'text-gray-600']">{{ group.ageRange }}</span>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <svg :class="['w-4 h-4 flex-shrink-0', selectedGroup?.id === group.id ? 'text-white/80' : 'text-gray-500']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span :class="['text-sm font-medium', selectedGroup?.id === group.id ? 'text-white/80' : 'text-gray-600']">{{ group.schedule }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sport Code Section (si groupe sélectionné) -->
        <div v-if="selectedGroup" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="space-y-4">
              <!-- Groupe sélectionné -->
              <div class="text-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
                    {{ selectedGroup.name }}
                  </span>
                </h3>
                <p class="text-gray-600">{{ selectedGroup.ageRange }} • {{ selectedGroup.schedule }}</p>
              </div>

              <!-- Sport Code -->
              <div class="space-y-2">
                <label class="block text-sm font-semibold text-slate-700">
                  Code Sport (optionnel)
                </label>
                <input
                  v-model="sportCode"
                  type="text"
                  placeholder="Ton code sport si tu en as un"
                  :disabled="loading"
                  class="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200/50 focus:border-blue-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                />
                <p class="text-gray-500 text-sm">
                  Renseigne ton code sport uniquement si tu en possèdes un
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
          
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
              :disabled="loading || !selectedGroup"
              class="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden"
            >
              <!-- Shine effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
                <div class="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
              <span :class="{ 'invisible': loading }" class="relative flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ loading ? 'Finalisation...' : 'Finaliser mon inscription' }}</span>
              </span>
            </button>
            
            <p class="text-center text-gray-500 text-sm mt-4">
              En cliquant sur ce bouton, tu valides ton inscription qui sera transmise pour validation
            </p>
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
import { ref, onMounted } from 'vue'
import { useHead, navigateTo } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

interface DanceGroup {
  id: number
  name: string
  ageRange: string
  schedule: string
  description?: string
}

const loading = ref(false)
const error = ref('')
const selectedGroup = ref<DanceGroup | null>(null)
const sportCode = ref('')

// Ces données viendront de l'API plus tard
const danceGroups = ref<DanceGroup[]>([
  {
    id: 1,
    name: "Les Kids",
    ageRange: "CP / CE1",
    schedule: "Samedi 12h-13h"
  },
  {
    id: 2,
    name: "La Relève",
    ageRange: "CE2 / CM1 / CM2",
    schedule: "Samedi 10h-11h"
  },
  {
    id: 3,
    name: "Les Espoirs",
    ageRange: "Collégiens 6ᵉ – 5ᵉ",
    schedule: "Samedi 11h-12h"
  },
  {
    id: 4,
    name: "Les Initiés",
    ageRange: "Collégiens 4ᵉ – 3ᵉ",
    schedule: "Samedi 13h-14h"
  },
  {
    id: 5,
    name: "Les Confirmés",
    ageRange: "Lycéens à 25 ans",
    schedule: "Vendredi 19h-20h"
  },
  {
    id: 6,
    name: "Les Funky",
    ageRange: "+25 ans",
    schedule: "Mercredi 18h15-19h15"
  },
  {
    id: 7,
    name: "Les Élites",
    ageRange: "Sur sélection",
    schedule: "RDV avec Damien"
  },
  {
    id: 8,
    name: "Les No Limit",
    ageRange: "Handicap, dès 14 ans",
    schedule: "Vendredi 18h-19h"
  },
  {
    id: 9,
    name: "Les Rookies",
    ageRange: "Handicap, 6-13 ans",
    schedule: "Vendredi 17h-18h"
  },
  {
    id: 10,
    name: "Cours Général",
    ageRange: "Collège et +",
    schedule: "Samedi 10h-11h"
  },
  {
    id: 11,
    name: "Débutants/Inter",
    ageRange: "CE2 au CM2",
    schedule: "Samedi 11h-12h"
  },
  {
    id: 12,
    name: "Show Break",
    ageRange: "Tous niveaux",
    schedule: "Samedi 12h-13h"
  },
  {
    id: 13,
    name: "Confirmés Libre",
    ageRange: "Niveau confirmé",
    schedule: "Mer & Ven 18h-20h"
  }
])

const selectGroup = (group: DanceGroup) => {
  selectedGroup.value = group
}

const goBack = () => {
  navigateTo('/inscription/step-3')
}

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    if (!selectedGroup.value) {
      error.value = 'Veuillez sélectionner un groupe de danse'
      return
    }

    // Ici on sauvegardera les données plus tard
    console.log('Registration data:', {
      groupId: selectedGroup.value.id,
      sportCode: sportCode.value || null
    })
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Rediriger vers la page de récapitulatif
    await navigateTo('/inscription/summary')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la finalisation'
  } finally {
    loading.value = false
  }
}

// Meta
useHead({
  title: 'Étape 4 - Choix du groupe • Square630',
  meta: [
    { name: 'description', content: 'Sélectionnez votre groupe de danse hip-hop selon votre âge et niveau' }
  ]
})
</script>