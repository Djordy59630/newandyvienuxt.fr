<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
      <div class="absolute top-32 right-20 w-1 h-1 bg-orange-300/40 rounded-full animate-ping"></div>
      <div class="absolute bottom-20 left-32 w-1.5 h-1.5 bg-red-300/40 rounded-full animate-pulse"></div>
      <div class="absolute top-40 left-1/2 w-1 h-1 bg-orange-300/40 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-40 right-10 w-2 h-2 bg-red-300/30 rounded-full animate-ping" style="animation-delay: 2s;"></div>
    </div>

    <!-- Navigation Header -->
    <nav class="relative z-20 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="ml-4 text-2xl font-black text-white tracking-tight">
              <span class="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                SQUARE630
              </span>
            </span>
          </div>

          <!-- Progress -->
          <div class="flex items-center space-x-6">
            <div class="bg-green-500/20 backdrop-blur-xl text-green-300 font-semibold py-3 px-6 rounded-2xl border border-green-400/30">
              ✅ Inscription terminée
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-8 py-12 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]">
      
      <!-- Success Animation -->
      <div class="mb-8 relative">
        <div class="w-32 h-32 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
          <div class="relative">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Success Message -->
      <div class="text-center space-y-6 max-w-2xl">
        <h1 class="text-4xl md:text-5xl font-black text-white mb-4">
          🎉 Inscription réussie !
        </h1>
        
        <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
          <div class="space-y-4">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
              </svg>
            </div>
            
            <h2 class="text-xl font-bold text-gray-900">Message de Kali</h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Bravo ! 🎊 Ton inscription à Square630 a été enregistrée avec succès ! J'ai bien sauvegardé toutes tes informations en base de données. 
            </p>
            <p class="text-gray-600 text-sm">
              Tu recevras bientôt un email de confirmation avec tous les détails de ton inscription. L'équipe Square630 reviendra vers toi rapidement !
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="goToDashboard"
            class="btn-primary"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v6m8-6v6"/>
            </svg>
            Aller au tableau de bord
          </button>
          
          <button
            @click="goToHome"
            class="btn-secondary"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const goToDashboard = () => {
  navigateTo('/dashboard')
}

const goToHome = () => {
  navigateTo('/')
}

// Meta
useHead({
  title: 'Inscription réussie • Square630',
  meta: [
    { name: 'description', content: 'Votre inscription à Square630 a été enregistrée avec succès !' }
  ]
})
</script>

<style scoped>
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #ea580c, #dc2626, #e11d48);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
  text-decoration: none;
}

.btn-primary:hover {
  background: linear-gradient(to right, #c2410c, #b91c1c, #be123c);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(234, 88, 12, 0.25);
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
  text-decoration: none;
}

.btn-secondary:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}
</style>