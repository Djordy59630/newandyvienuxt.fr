<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
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
              Étape <span class="font-bold text-white">4</span> sur 4
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
      <div class="w-full max-w-6xl">
        <!-- Header Section -->
        <div class="text-center mb-12 animate-fade-in">
          <div class="mx-auto w-20 h-20 bg-gradient-to-br from-white via-slate-50 to-purple-50 rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/20 backdrop-blur-sm">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">4</span>
            </div>
          </div>
          <h1 class="text-4xl font-black text-white mb-2 tracking-tight">
            <span class="bg-gradient-to-r from-white via-slate-200 to-purple-200 bg-clip-text text-transparent">
              Choix du groupe
            </span>
          </h1>
          <p class="text-slate-200 font-medium text-lg">Trouvez votre style !</p>
        </div>

        <!-- Groups Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div 
            v-for="group in danceGroups" 
            :key="group.id"
            @click="selectGroup(group)"
            :class="[
              'bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105',
              selectedGroup?.id === group.id 
                ? 'border-purple-500 ring-4 ring-purple-500/30 shadow-purple-500/25' 
                : 'border-white/20 hover:border-purple-300'
            ]"
          >
            <!-- Card glow effect -->
            <div :class="[
              'absolute inset-0 rounded-3xl transition-opacity duration-300',
              selectedGroup?.id === group.id 
                ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-100' 
                : 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100'
            ]"></div>
            
            <div class="relative">
              <!-- Selection indicator -->
              <div v-if="selectedGroup?.id === group.id" class="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>

              <!-- Group icon -->
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12 7-12 6z"/>
                </svg>
              </div>

              <!-- Group info -->
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {{ group.name }}
                </span>
              </h3>
              
              <div class="space-y-3">
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  <span class="text-gray-600 text-sm font-medium">{{ group.ageRange }}</span>
                </div>
                
                <div class="flex items-center space-x-2">
                  <svg class="w-4 h-4 text-pink-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span class="text-gray-600 text-sm font-medium">{{ group.schedule }}</span>
                </div>
              </div>

              <!-- Description if available -->
              <p v-if="group.description" class="text-gray-500 text-sm mt-3 leading-relaxed">
                {{ group.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Sport Code Section -->
        <div v-if="selectedGroup" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/>
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                    Code Sport
                  </span>
                </h2>
                <p class="text-gray-600 text-lg font-medium">Informations complémentaires (optionnel)</p>
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-bold text-gray-800">
                <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Code Sport
                </span>
              </label>
              <input
                v-model="sportCode"
                type="text"
                placeholder="Votre code sport si vous en avez un"
                :disabled="loading"
                class="w-full px-4 py-3 rounded-2xl bg-gradient-to-r from-gray-50 to-purple-50/50 border-2 border-slate-200/50 focus:border-purple-500 focus:bg-white text-gray-800 font-medium placeholder-slate-400 transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20"
              />
              <p class="text-gray-500 text-sm mt-2">
                Ce champ est facultatif. Renseignez votre code sport uniquement si vous en possédez un.
              </p>
            </div>
          </div>
        </div>

        <!-- Selected Group Summary -->
        <div v-if="selectedGroup" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <!-- Card glow effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl"></div>
          
          <div class="relative">
            <div class="flex items-center space-x-6 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-gray-800">
                  <span class="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                    Votre sélection
                  </span>
                </h2>
                <p class="text-gray-600 text-lg font-medium">{{ selectedGroup.name }}</p>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200/50">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span class="text-purple-600 text-sm font-bold">Groupe</span>
                  <p class="font-bold text-gray-900 text-xl">{{ selectedGroup.name }}</p>
                </div>
                <div>
                  <span class="text-pink-600 text-sm font-bold">Âge</span>
                  <p class="font-bold text-gray-900 text-xl">{{ selectedGroup.ageRange }}</p>
                </div>
                <div class="md:col-span-2">
                  <span class="text-purple-600 text-sm font-bold">Horaires</span>
                  <p class="font-bold text-gray-900 text-xl">{{ selectedGroup.schedule }}</p>
                </div>
                <div v-if="sportCode" class="md:col-span-2">
                  <span class="text-pink-600 text-sm font-bold">Code Sport</span>
                  <p class="font-bold text-gray-900 text-xl">{{ sportCode }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl"></div>
          
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
              class="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group overflow-hidden"
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
              En cliquant sur ce bouton, vous validez votre inscription qui sera transmise à l'administrateur pour validation.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-8 text-center animate-slide-in-delay">
          <p class="text-sm text-slate-300/80 font-medium">
            © 2024 Square630 • Association Andyvie • 
            <span class="bg-gradient-to-r from-slate-300 to-purple-300 bg-clip-text text-transparent">
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
    schedule: "Samedi 12h-13h",
    description: "Initiation à la danse hip-hop pour les plus jeunes"
  },
  {
    id: 2,
    name: "La Relève",
    ageRange: "CE2 / CM1 / CM2",
    schedule: "Samedi 10h-11h",
    description: "Développement des bases et de la créativité"
  },
  {
    id: 3,
    name: "Les Espoirs",
    ageRange: "Collégiens 6ᵉ – 5ᵉ",
    schedule: "Samedi 11h-12h",
    description: "Perfectionnement technique et expression"
  },
  {
    id: 4,
    name: "Les Initiés",
    ageRange: "Collégiens 4ᵉ – 3ᵉ",
    schedule: "Samedi 13h-14h",
    description: "Approfondissement des styles hip-hop"
  },
  {
    id: 5,
    name: "Les Confirmés",
    ageRange: "Lycéens à 25 ans",
    schedule: "Vendredi 19h-20h",
    description: "Niveau avancé et préparation spectacles"
  },
  {
    id: 6,
    name: "Les Funky",
    ageRange: "+25 ans",
    schedule: "Mercredi 18h15-19h15",
    description: "Hip-hop pour adultes, tous niveaux"
  },
  {
    id: 7,
    name: "Les Élites",
    ageRange: "Sur sélection",
    schedule: "Sur rendez-vous avec Damien",
    description: "Groupe de haut niveau avec audition"
  },
  {
    id: 8,
    name: "Les No Limit",
    ageRange: "Personnes en situation de handicap, dès 14 ans",
    schedule: "Vendredi 18h-19h",
    description: "Danse adaptée et inclusive"
  },
  {
    id: 9,
    name: "Les Rookies",
    ageRange: "Personnes en situation de handicap de 6 à 13 ans",
    schedule: "Vendredi 17h-18h",
    description: "Initiation danse pour jeunes en situation de handicap"
  },
  {
    id: 10,
    name: "Cours Général",
    ageRange: "Collège et +",
    schedule: "Samedi 10h-11h",
    description: "Cours ouvert à tous les niveaux collège et plus"
  },
  {
    id: 11,
    name: "Débutants/Inter",
    ageRange: "CE2 au CM2",
    schedule: "Samedi 11h-12h",
    description: "Niveau débutant à intermédiaire"
  },
  {
    id: 12,
    name: "Show Break Débutants/Inter",
    ageRange: "Tous niveaux",
    schedule: "Samedi 12h-13h",
    description: "Apprentissage du break dance"
  },
  {
    id: 13,
    name: "Cours Confirmés / Entraînement libre",
    ageRange: "Niveau confirmé",
    schedule: "Mercredi & Vendredi 18h-20h",
    description: "Entraînement intensif pour danseurs confirmés"
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