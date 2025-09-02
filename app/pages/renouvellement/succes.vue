<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-green-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    </div>

    <div class="relative z-10">
      <!-- Header -->
      <header class="bg-white/80 backdrop-blur-lg shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="text-center">
            <h1 class="text-3xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">
              Renouvellement effectué avec succès !
            </h1>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 text-center">
          <!-- Success Icon -->
          <div class="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl mx-auto mb-8">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          
          <h2 class="text-3xl font-bold text-gray-800 mb-6">
            Votre renouvellement a été validé !
          </h2>
          
          <div class="bg-green-50 rounded-xl p-6 mb-8">
            <div class="flex items-center justify-center space-x-3 mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-lg font-bold text-green-800">Inscription renouvelée</h3>
            </div>
            <p class="text-green-700 text-center">
              Votre inscription pour l'année scolaire {{ getCurrentSchoolYear() }} a été soumise et est en cours de traitement.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gray-50 rounded-xl p-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-800 mb-2">Statut</h4>
              <p class="text-sm text-gray-600">En attente de validation</p>
            </div>

            <div class="bg-gray-50 rounded-xl p-6">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-800 mb-2">Délai</h4>
              <p class="text-sm text-gray-600">Réponse sous 48h</p>
            </div>

            <div class="bg-gray-50 rounded-xl p-6">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h4 class="font-bold text-gray-800 mb-2">Confirmation</h4>
              <p class="text-sm text-gray-600">Par email</p>
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl p-6 mb-8">
            <h3 class="text-lg font-bold text-blue-800 mb-4">Prochaines étapes</h3>
            <div class="text-left space-y-3">
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <p class="text-sm text-blue-700">Nous vérifions votre dossier de renouvellement</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <p class="text-sm text-blue-700">Vous recevrez une confirmation par email</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <p class="text-sm text-blue-700">Vous pourrez suivre l'évolution sur votre tableau de bord</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <button
              @click="$router.push('/dashboard')"
              class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-green-500/20 inline-flex items-center space-x-3"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
              </svg>
              <span>Retourner au tableau de bord</span>
            </button>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-200">
            <p class="text-sm text-gray-600">
              Une question ? Contactez-nous à 
              <a href="mailto:contact@square630.fr" class="text-orange-600 hover:text-orange-700 font-medium">
                contact@square630.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentSchoolYear } from '../../../utils/schoolYear'

// Meta
useHead({
  title: 'Renouvellement réussi • Square630',
  meta: [
    { name: 'description', content: 'Votre renouvellement d\'inscription a été effectué avec succès' }
  ]
})
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>