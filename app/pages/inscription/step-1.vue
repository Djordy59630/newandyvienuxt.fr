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
        <div class="flex justify-between items-center h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="ml-3 lg:ml-4 text-xl lg:text-2xl font-black text-white tracking-tight">
              <span class="bg-gradient-to-r from-white via-orange-200 to-red-200 bg-clip-text text-transparent">
                SQUARE630
              </span>
            </span>
          </div>

          <!-- Back Button Only -->
          <button
            @click="goBack"
            class="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 inline-flex items-center space-x-2 text-sm lg:text-base"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <span class="hidden sm:inline">Retour</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Progress Bar -->
    <div class="relative z-10 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <ProgressBar :current-step="1" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-200px)]">
      
      <!-- Damien.C Avatar -->
      <div class="mb-6 lg:mb-8">
        <div class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow relative mx-auto">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div class="relative">
            <svg class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
        </div>
        <div class="text-center mt-3 lg:mt-4">
          <h2 class="text-xl lg:text-2xl font-bold text-white mb-2">Damien.C</h2>
          <div class="bg-gradient-to-r from-green-400 to-green-500 text-white text-xs lg:text-sm px-3 py-1 rounded-full inline-block">
            En ligne
          </div>
        </div>
      </div>

      <!-- Conversation Interface -->
      <div class="w-full max-w-2xl space-y-4 sm:space-y-6">
        
        <!-- Damien.C Message -->
        <div class="flex items-start space-x-3 sm:space-x-4">
          <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>
          <div class="bg-white/95 backdrop-blur-sm rounded-2xl rounded-tl-md p-4 sm:p-6 shadow-xl border border-white/20 flex-1">
            <div v-if="currentStep === 'greeting'" class="typewriter">
              {{ displayText }}
              <span v-if="showCursor" class="cursor">|</span>
            </div>
            <div v-else>
              <p v-if="currentStep === 'firstName'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Pour commencer, quel est ton prénom ?
              </p>
              <p v-else-if="currentStep === 'email'" class="text-gray-800 text-lg leading-relaxed">
                Merci {{ form.firstName }} ! J'ai besoin de ton adresse email.
              </p>
              <p v-else-if="currentStep === 'lastName'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Et ton nom de famille ?
              </p>
              <p v-else-if="currentStep === 'birthDate'" class="text-gray-800 text-lg leading-relaxed">
                Super ! Maintenant, quelle est ta date de naissance ?
              </p>
              <p v-else-if="currentStep === 'address'" class="text-gray-800 text-lg leading-relaxed">
                Merci ! Où habites-tu ? J'ai besoin de ton adresse complète.
              </p>
              <p v-else-if="currentStep === 'phone'" class="text-gray-800 text-lg leading-relaxed">
                Parfait ! Quel est ton numéro de téléphone ?
              </p>
              <p v-else-if="currentStep === 'schoolLevel'" class="text-gray-800 text-lg leading-relaxed">
                Génial ! Quel est ton niveau scolaire actuel ?
              </p>
              <p v-else-if="currentStep === 'tshirtSize'" class="text-gray-800 text-lg leading-relaxed">
                Super ! Quelle est ta taille de t-shirt ?
              </p>
              <p v-else-if="currentStep === 'otherInfo'" class="text-gray-800 text-lg leading-relaxed">
                Presque fini ! Y a-t-il d'autres informations que tu souhaites nous communiquer ?
              </p>
              <p v-else-if="currentStep === 'final'" class="text-gray-800 text-lg leading-relaxed">
                Excellent ! J'ai toutes tes informations de base. Prêt(e) à continuer ?
              </p>
            </div>
          </div>
        </div>

        <!-- Response Area -->
        <!-- First Name Input -->
        <div v-if="currentStep === 'firstName'" class="space-y-6">
          <div>
            <input
              v-model="form.firstName"
              type="text"
              class="answer-input"
              placeholder="Ton prénom"
              @keyup.enter="handleFirstNameSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-end">
            <button
              @click="handleFirstNameSubmit"
              :disabled="loading || !form.firstName"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Email Input -->
        <div v-if="currentStep === 'email'" class="space-y-6">
          <div>
            <input
              v-model="form.email"
              type="email"
              class="answer-input"
              placeholder="ton.email@exemple.com"
              @keyup.enter="handleEmailSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'firstName'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleEmailSubmit"
              :disabled="loading || !form.email"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Last Name Input -->
        <div v-if="currentStep === 'lastName'" class="space-y-6">
          <div>
            <input
              v-model="form.lastName"
              type="text"
              class="answer-input"
              placeholder="Ton nom"
              @keyup.enter="handleLastNameSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'email'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleLastNameSubmit"
              :disabled="loading || !form.lastName"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Birth Date Input -->
        <div v-if="currentStep === 'birthDate'" class="space-y-6">
          <div>
            <input
              v-model="form.birthDate"
              type="date"
              class="answer-input"
              @keyup.enter="handleBirthDateSubmit"
              :disabled="loading"
              required
            />
            <div v-if="form.birthDate && isMinor" class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm">
              ℹ️ Tu es mineur(e), nous aurons besoin des informations de ton responsable légal à l'étape suivante.
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'lastName'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleBirthDateSubmit"
              :disabled="loading || !form.birthDate"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Address Input -->
        <div v-if="currentStep === 'address'" class="space-y-6">
          <div class="space-y-4">
            <input
              v-model="form.address"
              type="text"
              class="answer-input"
              placeholder="12 rue de la Danse"
              :disabled="loading"
              required
            />
            <div class="grid grid-cols-2 gap-4">
              <input
                v-model="form.city"
                type="text"
                class="answer-input"
                placeholder="Ville"
                :disabled="loading"
                required
              />
              <input
                v-model="form.postalCode"
                type="text"
                class="answer-input"
                placeholder="Code postal"
                pattern="[0-9]{5}"
                :disabled="loading"
                required
              />
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'birthDate'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleAddressSubmit"
              :disabled="loading || !form.address || !form.city || !form.postalCode"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Phone Input -->
        <div v-if="currentStep === 'phone'" class="space-y-6">
          <div>
            <input
              v-model="form.phone"
              type="tel"
              class="answer-input"
              placeholder="06 12 34 56 78"
              @keyup.enter="handlePhoneSubmit"
              :disabled="loading"
              required
            />
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'address'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handlePhoneSubmit"
              :disabled="loading || !form.phone"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- School Level Input -->
        <div v-if="currentStep === 'schoolLevel'" class="space-y-6">
          <div>
            <select
              v-model="form.schoolLevel"
              class="answer-input"
              :disabled="loading"
              required
            >
              <option value="">Sélectionne ton niveau</option>
              <option value="CP">CP</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
              <option value="CM1">CM1</option>
              <option value="CM2">CM2</option>
              <option value="SIXIEME">6ème</option>
              <option value="CINQUIEME">5ème</option>
              <option value="QUATRIEME">4ème</option>
              <option value="TROISIEME">3ème</option>
              <option value="SECONDE">Seconde</option>
              <option value="PREMIERE">Première</option>
              <option value="TERMINALE">Terminale</option>
              <option value="POST_BAC">Post-Bac</option>
              <option value="ADULTE">Adulte</option>
            </select>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'phone'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleSchoolLevelSubmit"
              :disabled="loading || !form.schoolLevel"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- T-shirt Size Input -->
        <div v-if="currentStep === 'tshirtSize'" class="space-y-6">
          <div>
            <select
              v-model="form.tshirtSize"
              class="answer-input"
              :disabled="loading"
              required
            >
              <option value="">Choisis ta taille</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'schoolLevel'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleTshirtSizeSubmit"
              :disabled="loading || !form.tshirtSize"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Other Info Input -->
        <div v-if="currentStep === 'otherInfo'" class="space-y-6">
          <div>
            <textarea
              v-model="form.otherInfo"
              class="answer-input"
              placeholder="Partage-nous toute information que tu juges utile (allergies, besoins spéciaux, etc.)"
              rows="4"
              :disabled="loading"
            ></textarea>
            <p class="text-sm text-white/70 mt-2">Ce champ est optionnel</p>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'tshirtSize'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Retour
            </button>
            
            <button
              @click="handleOtherInfoSubmit"
              :disabled="loading"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Final Step -->
        <div v-if="currentStep === 'final'" class="space-y-6">
          <div class="bg-green-50 border border-green-200 rounded-xl p-4">
            <div class="text-green-700 text-sm">
              <div class="flex items-center mb-2">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <strong>Récapitulatif de tes informations :</strong>
              </div>
              <div class="space-y-1">
                <div>{{ form.firstName }} {{ form.lastName }}</div>
                <div>{{ form.email }}</div>
                <div>{{ form.address }}, {{ form.postalCode }} {{ form.city }}</div>
                <div>{{ form.phone }}</div>
                <div>{{ form.schoolLevel }}</div>
                <div>T-shirt : {{ form.tshirtSize }}</div>
                <div v-if="form.otherInfo">Autres infos : {{ form.otherInfo }}</div>
                <div>{{ isMinor ? 'Mineur(e)' : 'Majeur(e)' }}</div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center">
            <button
              @click="currentStep = 'otherInfo'"
              class="btn-secondary"
              :disabled="loading"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Modifier
            </button>
            
            <button
              @click="handleFinalSubmit"
              :disabled="loading"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              <span v-else>Étape suivante</span>
              <svg v-if="!loading" class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Already Registered Message -->
        <div v-if="hasExistingRegistration && currentStep === 'greeting'" class="space-y-6 mt-8">
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-orange-800 mb-2">Inscription déjà existante</h3>
            <p class="text-orange-700 mb-4">Tu as déjà une demande d'inscription en cours. Si tu souhaites la modifier, contacte l'administration.</p>
            <div class="flex space-x-4">
              <button
                @click="navigateTo('/dashboard')"
                class="bg-orange-100 hover:bg-orange-200 text-orange-800 font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Retour au tableau de bord
              </button>
              <a
                href="mailto:contact@square630.fr"
                class="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
              >
                Contacter l'administration
              </a>
            </div>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          {{ error }}
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: ['auth', 'no-admin']
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const currentStep = ref('greeting')
const displayText = ref('')
const showCursor = ref(true)
const loading = ref(false)
const error = ref('')

const form = ref({
  email: user.value?.email || '',
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  birthDate: '',
  address: '',
  city: '',
  postalCode: '',
  phone: '',
  schoolLevel: '',
  tshirtSize: '',
  otherInfo: ''
})

const fullText = ref("Salut ! Moi c'est Damien.C, ton assistant virtuel pour Square630 ! 🤖✨ Je vais t'accompagner dans ton inscription étape par étape. C'est parti, commençons par faire connaissance ! 😊")
const hasExistingRegistration = ref(false)
const existingDancer = ref<any>(null)

const goBack = () => {
  navigateTo('/dashboard')
}

const isMinor = computed(() => {
  if (!form.value.birthDate) return false
  const today = new Date()
  const birth = new Date(form.value.birthDate)
  const age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return (age - 1) < 18
  }
  return age < 18
})

const checkExistingRegistration = async () => {
  try {
    const response = await $fetch('/api/inscriptions/check-existing')
    if (response.hasExistingRegistration) {
      hasExistingRegistration.value = true
      existingDancer.value = response.dancer
      fullText.value = `Bonjour ${response.dancer.firstName} ! 👋 Je vois que tu as déjà une demande d'inscription en cours. Tu ne peux avoir qu'un seul dossier d'inscription par compte. Si tu souhaites modifier ton inscription, contacte l'administration. 📧`
      typeText()
      return true
    }
    return false
  } catch (err) {
    console.error('Erreur vérification inscription:', err)
    return false
  }
}

const typeText = () => {
  let index = 0
  const interval = setInterval(() => {
    if (index < fullText.value.length) {
      displayText.value += fullText.value[index]
      index++
    } else {
      clearInterval(interval)
      if (!hasExistingRegistration.value) {
        setTimeout(() => {
          currentStep.value = 'firstName'
        }, 800)
      }
    }
  }, 20)
}

const handleFirstNameSubmit = () => {
  if (!form.value.firstName) return
  setTimeout(() => {
    currentStep.value = 'email'
  }, 500)
}

const handleEmailSubmit = () => {
  if (!form.value.email) return
  setTimeout(() => {
    currentStep.value = 'lastName'
  }, 500)
}

const handleLastNameSubmit = () => {
  if (!form.value.lastName) return
  setTimeout(() => {
    currentStep.value = 'birthDate'
  }, 500)
}

const handleBirthDateSubmit = () => {
  if (!form.value.birthDate) return
  setTimeout(() => {
    currentStep.value = 'address'
  }, 500)
}

const handleAddressSubmit = () => {
  if (!form.value.address || !form.value.city || !form.value.postalCode) return
  setTimeout(() => {
    currentStep.value = 'phone'
  }, 500)
}

const handlePhoneSubmit = () => {
  if (!form.value.phone) return
  setTimeout(() => {
    currentStep.value = 'schoolLevel'
  }, 500)
}

const handleSchoolLevelSubmit = () => {
  if (!form.value.schoolLevel) return
  setTimeout(() => {
    currentStep.value = 'tshirtSize'
  }, 500)
}

const handleTshirtSizeSubmit = () => {
  if (!form.value.tshirtSize) return
  setTimeout(() => {
    currentStep.value = 'otherInfo'
  }, 500)
}

const handleOtherInfoSubmit = () => {
  setTimeout(() => {
    currentStep.value = 'final'
  }, 500)
}

const handleFinalSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données
    const formDataCookie = useCookie('registration-step1', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      ...form.value,
      isMinor: isMinor.value
    }
    
    console.log('Step 1 data:', formDataCookie.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Aller à l'étape santé
    await navigateTo('/inscription/sante')
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  // Vérifier d'abord si l'utilisateur a déjà une inscription
  const hasExisting = await checkExistingRegistration()
  
  if (!hasExisting) {
    // Démarrer l'animation de frappe normale
    setTimeout(() => {
      typeText()
    }, 1000)
  }

  // Cursor blinking
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

// Meta
useHead({
  title: 'Étape 1 - Informations personnelles • Square630',
  meta: [
    { name: 'description', content: 'Damien.C, ton assistant virtuel pour l\'inscription Square630' }
  ]
})
</script>

<style scoped>
.typewriter {
  color: #1f2937;
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.answer-input {
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  color: #1e293b;
  font-size: 1.125rem;
  line-height: 1.75rem;
  outline: none;
  transition: all 0.3s ease;
}

.answer-input::placeholder {
  color: #94a3b8;
}

.answer-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.option-button {
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 2px solid #e2e8f0;
  border-radius: 1rem;
  text-align: left;
  transition: all 0.2s ease;
  outline: none;
}

.option-button:hover {
  border-color: #93c5fd;
  background-color: #eff6ff;
}

.option-button:focus {
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.option-button.selected {
  border-color: #3b82f6;
  background-color: #eff6ff;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #475569, #2563eb, #4f46e5);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.75rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(to right, #334155, #1d4ed8, #4338ca);
  transform: scale(1.05);
  box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.25);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: scale(1);
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
}

.btn-secondary:hover {
  border-color: #cbd5e1;
  background-color: #f8fafc;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}
</style>