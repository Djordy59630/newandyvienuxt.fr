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

    <!-- Top Navigation Bar -->
    <div class="relative z-20 px-8 py-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-4">
          <div class="w-10 h-10 bg-gradient-to-br from-slate-500 via-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div class="text-xl font-bold text-white">Square630</div>
        </div>
        
        <!-- Progress indicator -->
        <div class="flex items-center space-x-6">
          <ProgressBar :current-step="5" :total-steps="5" />
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="relative z-10 pb-6">
      <div class="text-center">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-3">
          Récapitulatif
        </h1>
        <p class="text-slate-300 text-lg">
          Vérifiez vos informations avant validation
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 pb-12">
      
      <!-- Personal Information Section -->
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-6 shadow-2xl border border-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600"></div>
        
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white text-lg font-bold">1</span>
          </div>
          <h2 class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Informations personnelles
            </span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Prénom</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.firstName }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Nom</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.lastName }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Date de naissance</label>
              <p class="text-lg font-medium text-gray-800">{{ formatDate(formData.personalInfo.birthDate) }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Téléphone</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.phone }}</p>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Adresse</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.address }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Ville</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.city }} {{ formData.personalInfo.zipCode }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.email }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Niveau scolaire</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.personalInfo.schoolLevel }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal Guardian Section (if minor) -->
      <div v-if="formData.legalGuardian" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-6 shadow-2xl border border-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
        
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white text-lg font-bold">2</span>
          </div>
          <h2 class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Responsable légal
            </span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Prénom</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.legalGuardian.firstName }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Nom</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.legalGuardian.lastName }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Téléphone</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.legalGuardian.phone }}</p>
            </div>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Email</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.legalGuardian.email }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Relation</label>
              <p class="text-lg font-medium text-gray-800">{{ formData.legalGuardian.relationship }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Autorisation</label>
              <p class="text-lg font-medium text-green-600">✓ Accordée</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Emergency Contacts Section -->
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-6 shadow-2xl border border-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
        
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white text-lg font-bold">3</span>
          </div>
          <h2 class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Contacts d'urgence
            </span>
          </h2>
        </div>
        
        <div class="space-y-6">
          <div v-for="(contact, index) in formData.emergencyContacts" :key="index" class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 class="font-bold text-gray-800 mb-4">Contact {{ index + 1 }}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-1">Nom complet</label>
                <p class="text-lg font-medium text-gray-800">{{ contact.firstName }} {{ contact.lastName }}</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-1">Téléphone</label>
                <p class="text-lg font-medium text-gray-800">{{ contact.phone }}</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-1">Relation</label>
                <p class="text-lg font-medium text-gray-800">{{ contact.relationship }}</p>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-1">Autorisé à récupérer</label>
                <p class="text-lg font-medium" :class="contact.canPickup ? 'text-green-600' : 'text-red-600'">
                  {{ contact.canPickup ? '✓ Oui' : '✗ Non' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dance Group Section -->
      <div class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 mb-8 shadow-2xl border border-white/20 relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
        
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span class="text-white text-lg font-bold">4</span>
          </div>
          <h2 class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Groupe sélectionné
            </span>
          </h2>
        </div>
        
        <div v-if="selectedGroup" class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200/50">
          <div class="flex items-center space-x-4 mb-4">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12 7-12 6z"/>
              </svg>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-800">{{ selectedGroup.name }}</h3>
              <p class="text-purple-600 font-semibold">{{ selectedGroup.ageRange }} • {{ selectedGroup.level }}</p>
            </div>
          </div>
          <p class="text-gray-700 mb-4">{{ selectedGroup.description }}</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Horaires</label>
              <p class="text-lg font-medium text-gray-800">{{ selectedGroup.schedule }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-1">Tarif mensuel</label>
              <p class="text-lg font-bold text-purple-600">{{ selectedGroup.price }}€</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="goBack"
          class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 inline-flex items-center space-x-3"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          <span>Modifier</span>
        </button>
        
        <button 
          @click="submitRegistration"
          :disabled="isSubmitting"
          class="bg-gradient-to-r from-slate-600 via-blue-600 to-indigo-600 hover:from-slate-700 hover:via-blue-700 hover:to-indigo-700 disabled:opacity-50 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 text-lg inline-flex items-center space-x-3 group overflow-hidden relative"
        >
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <svg v-if="!isSubmitting" class="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
          <span class="relative z-10">{{ isSubmitting ? 'Validation...' : 'Valider l\'inscription' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// Form data from cookies
const formData = {
  personalInfo: useCookie('registration-step1').value || {},
  legalGuardian: useCookie('registration-step2').value || null,
  emergencyContacts: useCookie('registration-step3').value || [],
  selectedGroupId: useCookie('registration-step4').value || null
}

const isSubmitting = ref(false)

// Mock dance groups data - in real app this would come from API
const danceGroups = [
  {
    id: 1,
    name: 'Baby Hip-Hop',
    ageRange: '4-5 ans',
    level: 'Débutant',
    description: 'Éveil corporel et premiers pas de danse pour les tout-petits',
    schedule: 'Mercredi 16h-17h',
    price: 40
  },
  {
    id: 2,
    name: 'Poussin Hip-Hop',
    ageRange: '6-7 ans',
    level: 'Débutant',
    description: 'Apprentissage ludique des bases du hip-hop',
    schedule: 'Mercredi 17h-18h',
    price: 45
  },
  {
    id: 3,
    name: 'Kids Hip-Hop Débutant',
    ageRange: '8-10 ans',
    level: 'Débutant',
    description: 'Initiation aux mouvements fondamentaux du hip-hop',
    schedule: 'Mercredi 18h-19h',
    price: 50
  },
  {
    id: 4,
    name: 'Kids Hip-Hop Intermédiaire',
    ageRange: '8-10 ans',
    level: 'Intermédiaire',
    description: 'Perfectionnement des techniques de base',
    schedule: 'Samedi 14h-15h',
    price: 50
  },
  {
    id: 5,
    name: 'Kids Hip-Hop Avancé',
    ageRange: '8-10 ans',
    level: 'Avancé',
    description: 'Chorégraphies complexes et figures avancées',
    schedule: 'Samedi 15h-16h',
    price: 55
  },
  {
    id: 6,
    name: 'Ados Hip-Hop Débutant',
    ageRange: '11-14 ans',
    level: 'Débutant',
    description: 'Découverte du hip-hop pour adolescents',
    schedule: 'Mercredi 19h-20h',
    price: 55
  },
  {
    id: 7,
    name: 'Ados Hip-Hop Intermédiaire',
    ageRange: '11-14 ans',
    level: 'Intermédiaire',
    description: 'Développement des skills et de la créativité',
    schedule: 'Samedi 16h-17h',
    price: 60
  },
  {
    id: 8,
    name: 'Ados Hip-Hop Avancé',
    ageRange: '11-14 ans',
    level: 'Avancé',
    description: 'Maîtrise technique et expression artistique',
    schedule: 'Samedi 17h-18h',
    price: 60
  },
  {
    id: 9,
    name: 'Juniors Hip-Hop Débutant',
    ageRange: '15-17 ans',
    level: 'Débutant',
    description: 'Initiation pour les grands adolescents',
    schedule: 'Vendredi 18h-19h',
    price: 60
  },
  {
    id: 10,
    name: 'Juniors Hip-Hop Intermédiaire',
    ageRange: '15-17 ans',
    level: 'Intermédiaire',
    description: 'Approfondissement des techniques',
    schedule: 'Vendredi 19h-20h',
    price: 65
  },
  {
    id: 11,
    name: 'Juniors Hip-Hop Avancé',
    ageRange: '15-17 ans',
    level: 'Avancé',
    description: 'Niveau expert pour les jeunes danseurs confirmés',
    schedule: 'Samedi 18h-19h',
    price: 65
  },
  {
    id: 12,
    name: 'Adultes Hip-Hop',
    ageRange: '18+ ans',
    level: 'Tous niveaux',
    description: 'Cours adapté aux adultes, tous niveaux confondus',
    schedule: 'Mardi 20h-21h',
    price: 70
  },
  {
    id: 13,
    name: 'Adultes Hip-Hop Avancé',
    ageRange: '18+ ans',
    level: 'Avancé',
    description: 'Cours technique pour adultes confirmés',
    schedule: 'Jeudi 20h-21h',
    price: 75
  }
]

const selectedGroup = computed(() => {
  return danceGroups.find(group => group.id === formData.selectedGroupId)
})

const formatDate = (dateString: string) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const goBack = () => {
  navigateTo('/inscription/step-4')
}

const submitRegistration = async () => {
  isSubmitting.value = true
  
  try {
    // Here you would make the API call to save the registration
    // For now, we'll simulate a delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Clear cookies after successful submission
    const step1Cookie = useCookie('registration-step1')
    const step2Cookie = useCookie('registration-step2')
    const step3Cookie = useCookie('registration-step3')
    const step4Cookie = useCookie('registration-step4')
    
    step1Cookie.value = null
    step2Cookie.value = null
    step3Cookie.value = null
    step4Cookie.value = null
    
    // Redirect to success page or dashboard
    navigateTo('/inscription/success')
    
  } catch (error) {
    console.error('Error submitting registration:', error)
    alert('Une erreur est survenue lors de la validation. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

// Check if we have the required data
onMounted(() => {
  if (!formData.personalInfo.firstName || !formData.selectedGroupId) {
    // Redirect to step 1 if data is missing
    navigateTo('/inscription/step-1')
  }
})

// Meta
useHead({
  title: 'Récapitulatif - Inscription Hip-Hop Square630',
  meta: [
    { name: 'description', content: 'Récapitulatif de votre inscription aux cours de hip-hop Square630' }
  ]
})
</script>