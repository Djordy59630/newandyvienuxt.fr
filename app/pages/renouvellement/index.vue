<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    </div>

    <div class="relative z-10">
      <!-- Header -->
      <header class="bg-white/80 backdrop-blur-lg shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <button @click="$router.back()" class="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
              </button>
              <h1 class="text-3xl font-bold bg-gradient-to-r from-orange-700 to-pink-700 bg-clip-text text-transparent">
                Renouvellement d'inscription
              </h1>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Année scolaire</p>
              <p class="text-lg font-bold text-gray-800">{{ currentSchoolYear }}</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" v-if="!loading">
        <!-- Progress Steps -->
        <div class="mb-8">
          <div class="flex justify-center space-x-8">
            <div class="flex items-center">
              <div :class="`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-orange-600 text-white' : 'bg-gray-300 text-gray-600'}`">
                1
              </div>
              <span class="ml-3 text-sm font-medium text-gray-700">Informations personnelles</span>
            </div>
            <div class="flex items-center">
              <div :class="`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-orange-600 text-white' : 'bg-gray-300 text-gray-600'}`">
                2
              </div>
              <span class="ml-3 text-sm font-medium text-gray-700">Questionnaire santé</span>
            </div>
            <div class="flex items-center">
              <div :class="`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-orange-600 text-white' : 'bg-gray-300 text-gray-600'}`">
                3
              </div>
              <span class="ml-3 text-sm font-medium text-gray-700">Groupes de danse</span>
            </div>
          </div>
        </div>

        <!-- Step 1: Personal Information Review -->
        <div v-if="currentStep === 1" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Vérification des informations</h2>
            <p class="text-gray-600">Vérifiez vos informations personnelles et celles de vos contacts. Vous pouvez les modifier si nécessaire.</p>
          </div>

          <!-- Personal Info -->
          <div class="space-y-8">
            <div class="bg-gray-50 rounded-xl p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Informations personnelles</h3>
                <button @click="editPersonalInfo = !editPersonalInfo" class="text-orange-600 hover:text-orange-700 font-medium">
                  {{ editPersonalInfo ? 'Annuler' : 'Modifier' }}
                </button>
              </div>
              
              <div v-if="!editPersonalInfo" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>Prénom :</strong> {{ dancerData?.firstName || 'Non renseigné' }}</div>
                <div><strong>Nom :</strong> {{ dancerData?.lastName || 'Non renseigné' }}</div>
                <div><strong>Email :</strong> {{ dancerData?.email || 'Non renseigné' }}</div>
                <div><strong>Téléphone :</strong> {{ dancerData?.phone || 'Non renseigné' }}</div>
                <div><strong>Date de naissance :</strong> {{ formatDate(dancerData?.birthDate) || 'Non renseigné' }}</div>
                <div><strong>Niveau scolaire :</strong> {{ formatSchoolLevel(dancerData?.schoolLevel) || 'Non renseigné' }}</div>
                <div class="md:col-span-2"><strong>Adresse :</strong> {{ fullAddress || 'Non renseigné' }}</div>
              </div>

              <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <input v-model="editForm.firstName" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input v-model="editForm.lastName" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input v-model="editForm.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <input v-model="editForm.phone" type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
                  <input v-model="editForm.address" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Code postal *</label>
                  <input v-model="editForm.postalCode" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                  <input v-model="editForm.city" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
              </div>
            </div>

            <!-- Guardian Info (if exists) -->
            <div v-if="guardianData" class="bg-gray-50 rounded-xl p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-gray-800">Responsable légal</h3>
                <button @click="editGuardianInfo = !editGuardianInfo" class="text-orange-600 hover:text-orange-700 font-medium">
                  {{ editGuardianInfo ? 'Annuler' : 'Modifier' }}
                </button>
              </div>
              
              <div v-if="!editGuardianInfo" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><strong>Prénom :</strong> {{ guardianData?.firstName || 'Non renseigné' }}</div>
                <div><strong>Nom :</strong> {{ guardianData?.lastName || 'Non renseigné' }}</div>
                <div><strong>Email :</strong> {{ guardianData?.email || 'Non renseigné' }}</div>
                <div><strong>Téléphone :</strong> {{ guardianData?.phone || 'Non renseigné' }}</div>
                <div><strong>Relation :</strong> {{ guardianData?.relationship || 'Non renseigné' }}</div>
                <div><strong>Autorisé :</strong> {{ guardianData?.authorized ? 'Oui' : 'Non' }}</div>
              </div>

              <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom *</label>
                  <input v-model="editGuardianForm.firstName" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                  <input v-model="editGuardianForm.lastName" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input v-model="editGuardianForm.email" type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <input v-model="editGuardianForm.phone" type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Relation *</label>
                  <select v-model="editGuardianForm.relationship" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500" required>
                    <option value="Parent">Parent</option>
                    <option value="Tuteur légal">Tuteur légal</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Autorisé à récupérer</label>
                  <input v-model="editGuardianForm.authorized" type="checkbox" class="w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded">
                </div>
              </div>
            </div>

            <!-- Emergency Contacts -->
            <div v-if="emergencyContacts?.length > 0" class="bg-gray-50 rounded-xl p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-4">Contacts d'urgence</h3>
              <div class="space-y-4">
                <div v-for="(contact, index) in emergencyContacts" :key="index" class="bg-white rounded-lg p-4">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><strong>Nom :</strong> {{ contact.firstName }} {{ contact.lastName }}</div>
                    <div><strong>Téléphone :</strong> {{ contact.phone }}</div>
                    <div><strong>Relation :</strong> {{ contact.relationship }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-end mt-8">
            <button @click="currentStep = 2" class="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Continuer
              <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Step 2: Health Questionnaire -->
        <div v-if="currentStep === 2" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Questionnaire santé</h2>
            <p class="text-gray-600">Ce questionnaire doit être rempli à nouveau pour chaque renouvellement.</p>
          </div>

          <div class="space-y-6">
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-yellow-800 mb-4">Questions de santé</h3>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <input 
                    id="health1" 
                    v-model="healthForm.hasHealthProblems" 
                    type="checkbox" 
                    class="mt-1 w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  >
                  <label for="health1" class="text-sm text-gray-700">
                    Au cours des douze derniers mois, avez-vous ressenti une douleur dans la poitrine lors d'un effort physique ?
                  </label>
                </div>

                <div class="flex items-start space-x-3">
                  <input 
                    id="health2" 
                    v-model="healthForm.hasCardiacProblems" 
                    type="checkbox" 
                    class="mt-1 w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  >
                  <label for="health2" class="text-sm text-gray-700">
                    Au cours des douze derniers mois, avez-vous eu des étourdissements lors d'un effort physique ?
                  </label>
                </div>

                <div class="flex items-start space-x-3">
                  <input 
                    id="health3" 
                    v-model="healthForm.takesMedication" 
                    type="checkbox" 
                    class="mt-1 w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  >
                  <label for="health3" class="text-sm text-gray-700">
                    Prenez-vous actuellement un traitement médical ?
                  </label>
                </div>
              </div>
            </div>

            <div class="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 class="text-lg font-bold text-red-800 mb-4">Déclaration obligatoire</h3>
              <div class="flex items-start space-x-3">
                <input 
                  id="healthDeclaration" 
                  v-model="healthForm.healthDeclaration" 
                  type="checkbox" 
                  class="mt-1 w-4 h-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  required
                >
                <label for="healthDeclaration" class="text-sm text-gray-700">
                  <strong>Je déclare</strong> n'avoir aucune contre-indication à la pratique de la danse hip-hop et m'engage à signaler tout changement dans mon état de santé qui pourrait constituer une contre-indication à la pratique sportive.
                </label>
              </div>
            </div>

            <div v-if="requiresCertificate" class="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.081 18.5C3.311 20.333 4.273 22 5.813 22z"/>
                </svg>
                <div>
                  <p class="font-bold text-orange-800">Certificat médical requis</p>
                  <p class="text-sm text-orange-700">Suite à vos réponses, vous devez fournir un certificat médical d'aptitude à la pratique sportive</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <button @click="currentStep = 1" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
              <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Précédent
            </button>
            <button 
              @click="currentStep = 3" 
              :disabled="!healthForm.healthDeclaration"
              class="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuer
              <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Step 3: Dance Groups Selection -->
        <div v-if="currentStep === 3" class="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Choix des groupes de danse</h2>
            <p class="text-gray-600">Sélectionnez vos groupes de danse pour l'année scolaire {{ currentSchoolYear }}</p>
          </div>

          <!-- Previous groups -->
          <div v-if="previousDanceGroups?.length > 0" class="mb-8">
            <h3 class="text-lg font-bold text-gray-800 mb-4">Vos groupes précédents</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="group in previousDanceGroups" :key="group.id" class="bg-gray-100 rounded-lg p-4">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="font-bold text-gray-800">{{ group.name }}</h4>
                    <p class="text-sm text-gray-600">{{ group.ageGroup }} • {{ group.schedule }}</p>
                    <p class="text-xs text-gray-500">Année {{ group.schoolYear }}</p>
                  </div>
                  <button 
                    @click="selectSameGroup(group)"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Reprendre
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Available groups -->
          <div>
            <h3 class="text-lg font-bold text-gray-800 mb-4">Groupes disponibles</h3>
            <div v-if="availableGroups?.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                v-for="group in availableGroups" 
                :key="group.id"
                @click="toggleGroup(group)"
                :class="`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedGroups.some(g => g.id === group.id)
                    ? 'border-orange-500 bg-orange-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-orange-300'
                }`"
              >
                <div class="flex justify-between items-start mb-4">
                  <h4 class="text-xl font-bold text-gray-800">{{ group.name }}</h4>
                  <div v-if="selectedGroups.some(g => g.id === group.id)" class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-600"><strong>Tranche d'âge :</strong> {{ group.ageGroup }}</p>
                  <p class="text-sm text-gray-600"><strong>Horaires :</strong> {{ group.schedule }}</p>
                  <p class="text-sm text-gray-600 line-clamp-2">{{ group.description }}</p>
                </div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <p class="text-gray-500">Aucun groupe disponible pour le moment.</p>
            </div>
          </div>

          <!-- Selected groups summary -->
          <div v-if="selectedGroups.length > 0" class="mt-8 bg-green-50 rounded-xl p-6">
            <h3 class="text-lg font-bold text-green-800 mb-4">Groupes sélectionnés ({{ selectedGroups.length }})</h3>
            <div class="space-y-2">
              <div v-for="group in selectedGroups" :key="group.id" class="flex justify-between items-center bg-white rounded-lg p-3">
                <div>
                  <span class="font-medium text-gray-800">{{ group.name }}</span>
                  <span class="text-sm text-gray-600 ml-2">{{ group.schedule }}</span>
                </div>
                <button @click="removeGroup(group)" class="text-red-500 hover:text-red-700">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-8">
            <button @click="currentStep = 2" class="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300">
              <svg class="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Précédent
            </button>
            <button 
              @click="submitRenewal" 
              :disabled="selectedGroups.length === 0 || submitting"
              class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="submitting">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Traitement...
              </span>
              <span v-else>
                Finaliser le renouvellement
                <svg class="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="flex justify-center items-center min-h-screen">
        <div class="text-center">
          <svg class="animate-spin h-16 w-16 text-orange-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p class="text-xl font-semibold text-gray-700">Chargement de vos données...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentSchoolYear } from '../../../utils/schoolYear'

// Auth
const router = useRouter()

// Data
const loading = ref(true)
const submitting = ref(false)
const currentStep = ref(1)
const currentSchoolYear = ref(getCurrentSchoolYear())

// Forms
const editPersonalInfo = ref(false)
const editGuardianInfo = ref(false)

// Original data from API
const dancerData = ref(null)
const guardianData = ref(null)
const emergencyContacts = ref([])
const previousDanceGroups = ref([])
const availableGroups = ref([])

// Edit forms
const editForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: ''
})

const editGuardianForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  relationship: 'Parent',
  authorized: false
})

const healthForm = ref({
  hasHealthProblems: false,
  hasCardiacProblems: false,
  takesMedication: false,
  healthDeclaration: false
})

const selectedGroups = ref([])

// Computed
const fullAddress = computed(() => {
  if (!dancerData.value) return ''
  const { address, postalCode, city } = dancerData.value
  return [address, postalCode, city].filter(Boolean).join(', ')
})

const requiresCertificate = computed(() => {
  return healthForm.value.hasHealthProblems || 
         healthForm.value.hasCardiacProblems || 
         healthForm.value.takesMedication
})

// Methods
const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('fr-FR')
}

const formatSchoolLevel = (level) => {
  const mapping = {
    'CP': 'CP',
    'CE1': 'CE1',
    'CE2': 'CE2', 
    'CM1': 'CM1',
    'CM2': 'CM2',
    'SIXIEME': '6ème',
    'CINQUIEME': '5ème',
    'QUATRIEME': '4ème',
    'TROISIEME': '3ème',
    'SECONDE': 'Seconde',
    'PREMIERE': 'Première',
    'TERMINALE': 'Terminale',
    'POST_BAC': 'Post-Bac',
    'ADULTE': 'Adulte'
  }
  return mapping[level] || level
}

const loadData = async () => {
  try {
    // Load renewal data
    const { data: renewalData } = await useFetch('/api/inscriptions/renew', {
      method: 'POST',
      body: { schoolYear: currentSchoolYear.value }
    })

    if (renewalData.value?.success) {
      dancerData.value = renewalData.value.dancer
      guardianData.value = renewalData.value.guardian
      emergencyContacts.value = renewalData.value.emergencyContacts
      previousDanceGroups.value = renewalData.value.previousDanceGroups

      // Initialize edit forms with current data
      editForm.value = {
        firstName: dancerData.value.firstName || '',
        lastName: dancerData.value.lastName || '',
        email: dancerData.value.email || '',
        phone: dancerData.value.phone || '',
        address: dancerData.value.address || '',
        postalCode: dancerData.value.postalCode || '',
        city: dancerData.value.city || ''
      }

      if (guardianData.value) {
        editGuardianForm.value = {
          firstName: guardianData.value.firstName || '',
          lastName: guardianData.value.lastName || '',
          email: guardianData.value.email || '',
          phone: guardianData.value.phone || '',
          relationship: guardianData.value.relationship || 'Parent',
          authorized: guardianData.value.authorized || false
        }
      }
    }

    // Load available dance groups
    const { data: groupsData } = await useFetch('/api/dance-groups')
    availableGroups.value = groupsData.value?.groups || []

  } catch (error) {
    console.error('Error loading renewal data:', error)
    // Redirect back to dashboard on error
    router.push('/dashboard')
  } finally {
    loading.value = false
  }
}

const toggleGroup = (group) => {
  const index = selectedGroups.value.findIndex(g => g.id === group.id)
  if (index > -1) {
    selectedGroups.value.splice(index, 1)
  } else {
    selectedGroups.value.push(group)
  }
}

const removeGroup = (group) => {
  const index = selectedGroups.value.findIndex(g => g.id === group.id)
  if (index > -1) {
    selectedGroups.value.splice(index, 1)
  }
}

const selectSameGroup = (previousGroup) => {
  // Find the equivalent group in available groups
  const availableGroup = availableGroups.value.find(g => g.name === previousGroup.name)
  if (availableGroup && !selectedGroups.value.some(g => g.id === availableGroup.id)) {
    selectedGroups.value.push(availableGroup)
  }
}

const submitRenewal = async () => {
  if (selectedGroups.value.length === 0 || !healthForm.value.healthDeclaration) {
    return
  }

  try {
    submitting.value = true

    // Use edited data if available, otherwise use original data
    const personalData = editPersonalInfo.value ? editForm.value : {
      firstName: dancerData.value.firstName,
      lastName: dancerData.value.lastName,
      email: dancerData.value.email,
      phone: dancerData.value.phone,
      address: dancerData.value.address,
      postalCode: dancerData.value.postalCode,
      city: dancerData.value.city
    }

    const guardianDataToSend = guardianData.value ? (
      editGuardianInfo.value ? editGuardianForm.value : {
        firstName: guardianData.value.firstName,
        lastName: guardianData.value.lastName,
        email: guardianData.value.email,
        phone: guardianData.value.phone,
        relationship: guardianData.value.relationship,
        authorized: guardianData.value.authorized
      }
    ) : null

    const { data: result } = await useFetch('/api/inscriptions/renew-complete', {
      method: 'POST',
      body: {
        schoolYear: currentSchoolYear.value,
        personalData,
        guardianData: guardianDataToSend,
        healthData: healthForm.value,
        selectedGroups: selectedGroups.value.map(g => ({
          id: g.id,
          name: g.name,
          ageGroup: g.ageGroup,
          schedule: g.schedule,
          description: g.description
        }))
      }
    })

    if (result.value?.success) {
      // Redirect to success page
      router.push('/renouvellement/succes')
    }

  } catch (error) {
    console.error('Error submitting renewal:', error)
    // Show error message to user
  } finally {
    submitting.value = false
  }
}

// Load data on mount
onMounted(() => {
  loadData()
})

// Meta
useHead({
  title: 'Renouvellement d\'inscription • Square630',
  meta: [
    { name: 'description', content: 'Renouvelez votre inscription pour la nouvelle année scolaire' }
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>