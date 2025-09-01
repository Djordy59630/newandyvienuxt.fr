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
              Bonjour, <span class="font-bold text-white">{{ user?.firstName || user?.email }}</span>
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
            Inscription Hip-Hop
          </span>
        </h1>
        <p class="text-slate-200 text-xl font-medium">
          Association Andyvie • Square630
        </p>
      </div>

      <!-- Instructions Card -->
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-12 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
        <!-- Card glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl"></div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"></div>
        
        <div class="relative">
          <div class="flex items-center space-x-6 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-xl">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12 7-12 6z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-800">
                <span class="bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
                  Processus d'inscription
                </span>
              </h2>
              <p class="text-gray-600 text-lg font-medium">4 étapes simples pour rejoindre nos cours</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-2xl border-2 border-orange-200/50">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Bienvenue {{ user?.firstName || user?.email }} !</h3>
                <p class="text-gray-700 leading-relaxed">
                  Félicitations pour votre inscription ! Vous allez maintenant pouvoir vous inscrire à nos cours de hip-hop. 
                  Le processus se déroule en 4 étapes simples qui nous permettront de mieux vous connaître et de vous proposer 
                  le groupe qui vous correspond le mieux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Steps Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-in-delay">
        <!-- Étape 1 -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer" @click="goToStep(1)">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-white text-xl font-bold">1</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Informations personnelles
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">"Qui es-tu ?"</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Renseignez vos coordonnées personnelles : nom, prénom, adresse, téléphone, niveau scolaire...
            </p>
          </div>
        </div>

        <!-- Étape 2 -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer" @click="goToStep(2)">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-white text-xl font-bold">2</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Responsable légal
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">Si mineur uniquement</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Coordonnées du responsable légal et autorisation parentale pour les participants mineurs.
            </p>
          </div>
        </div>

        <!-- Étape 3 -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer" @click="goToStep(3)">
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-white text-xl font-bold">3</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Contacts d'urgence
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">Sécurité avant tout</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Ajoutez un ou plusieurs contacts d'urgence avec leurs coordonnées et autorisations.
            </p>
          </div>
        </div>

        <!-- Étape 4 -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer" @click="goToStep(4)">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span class="text-white text-xl font-bold">4</span>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Choix du groupe
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">Trouvez votre style</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Sélectionnez le groupe de danse qui correspond à votre âge et votre niveau.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
        <button 
          @click="goToStep(1)"
          class="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg inline-flex items-center space-x-3 group overflow-hidden relative"
        >
          <!-- Shine effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12 7-12 6z"/>
          </svg>
          <span class="relative z-10">Commencer l'inscription</span>
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 mt-20 pb-12">
      <div class="text-center">
        <p class="text-slate-300/80 font-medium text-lg">
          © 2024 Portail • 
          <span class="bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">
            Tous droits réservés
          </span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useHead, navigateTo } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user, logout } = useAuth()

const handleLogout = async () => {
  await logout()
}

const goToStep = (step: number) => {
  navigateTo(`/inscription/step-${step}`)
}

// Meta
useHead({
  title: 'Inscription Hip-Hop - Square630',
  meta: [
    { name: 'description', content: 'Processus d\'inscription aux cours de hip-hop de Square630' }
  ]
})
</script>