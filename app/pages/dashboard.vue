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
                PORTAIL
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
            Tableau de bord
          </span>
        </h1>
        <p class="text-slate-200 text-xl font-medium">
          Bienvenue dans votre univers connecté
        </p>
      </div>

      <!-- User Info Card -->
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-12 animate-slide-in shadow-2xl border border-white/20 relative overflow-hidden">
        <!-- Card glow effect -->
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl"></div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 via-blue-500 to-indigo-500"></div>
        
        <div class="relative">
          <div class="flex items-center space-x-6 mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-bold text-gray-800">
                <span class="bg-gradient-to-r from-slate-700 to-blue-700 bg-clip-text text-transparent">
                  Informations du compte
                </span>
              </h2>
              <p class="text-gray-600 text-lg font-medium">Vos données personnelles</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border-2 border-slate-200/50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <span class="text-slate-600 text-sm font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Email</span>
              <p class="font-bold text-gray-900 text-xl mt-1">{{ user?.email }}</p>
            </div>
            <div v-if="user?.firstName" class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-slate-200/50 hover:border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20">
              <span class="text-indigo-600 text-sm font-bold">Prénom</span>
              <p class="font-bold text-gray-900 text-xl mt-1">{{ user.firstName }}</p>
            </div>
            <div v-if="user?.lastName" class="bg-gradient-to-br from-indigo-50 to-slate-50 p-6 rounded-2xl border-2 border-slate-200/50 hover:border-slate-400 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/20">
              <span class="text-slate-600 text-sm font-bold">Nom</span>
              <p class="font-bold text-gray-900 text-xl mt-1">{{ user.lastName }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-slide-in-delay">
        <!-- Profil Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Profil
                  </span>
                </h3>
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span class="text-sm text-emerald-600 font-semibold">En ligne</span>
                </div>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Gérez vos informations personnelles et préférences de compte.
            </p>
          </div>
        </div>

        <!-- Statistiques Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                    Analytics
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">Données en temps réel</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Consultez vos métriques et statistiques d'utilisation détaillées.
            </p>
          </div>
        </div>

        <!-- Paramètres Card -->
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden group hover:scale-105 transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-slate-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  <span class="bg-gradient-to-r from-indigo-600 to-slate-600 bg-clip-text text-transparent">
                    Paramètres
                  </span>
                </h3>
                <span class="text-sm text-gray-500 font-semibold">Configuration avancée</span>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium">
              Personnalisez votre expérience et configurez vos préférences.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
        <button class="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg inline-flex items-center space-x-3 group overflow-hidden relative">
          <!-- Shine effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <svg class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
          </svg>
          <span class="relative z-10">Modifier mon profil</span>
        </button>
        <button class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 text-lg inline-flex items-center space-x-3">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <span>Voir les statistiques</span>
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
import { useHead } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user, logout } = useAuth()

const handleLogout = async () => {
  await logout()
}

// Meta
useHead({
  title: 'Dashboard - Portail',
  meta: [
    { name: 'description', content: 'Tableau de bord de votre espace personnel' }
  ]
})
</script>