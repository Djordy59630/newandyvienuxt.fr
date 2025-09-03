<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Header avec navigation -->
    <div class="relative z-20 bg-white/10 backdrop-blur-xl border-b border-white/20 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <NuxtLink 
              to="/admin/panel" 
              class="flex items-center space-x-2 text-white hover:text-orange-200 transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Retour au panel</span>
            </NuxtLink>
            <div class="h-6 w-px bg-white/20"></div>
            <h1 class="text-xl font-bold text-white">Détail de l'inscription</h1>
          </div>
          
          <!-- Actions -->
          <div class="flex flex-wrap gap-3" v-if="registration">
            <button
              @click="printRegistration"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Imprimer</span>
            </button>
            
            <button
              v-if="registration.status === 'SUBMITTED'"
              @click="updateStatus('APPROVED')"
              :disabled="loading"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Approuver</span>
            </button>
            
            <button
              v-if="registration.status === 'SUBMITTED'"
              @click="updateStatus('REJECTED')"
              :disabled="loading"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Rejeter</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="pending" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p class="text-white mt-4 ml-4">Chargement...</p>
      </div>

      <div v-else-if="error" class="bg-white/10 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 text-center">
        <svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h3 class="text-lg font-medium text-white mb-2">Erreur</h3>
        <p class="text-red-300">{{ error }}</p>
      </div>

      <div v-else-if="registration" class="space-y-6">
        <!-- Header avec statut -->
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span class="text-white font-bold text-lg">
                    {{ registration.dancer.firstName.charAt(0) }}{{ registration.dancer.lastName.charAt(0) }}
                  </span>
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-white">
                    {{ registration.dancer.firstName }} {{ registration.dancer.lastName }}
                  </h2>
                  <p class="text-orange-100/60">Inscription #{{ registration.id }}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-4 text-sm text-orange-100/80">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Inscrit le {{ formatDate(registration.createdAt) }}
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  {{ registration.danceGroup.name }}
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <div class="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold"
                   :class="getStatusClass(registration.status)">
                <div class="w-3 h-3 rounded-full mr-3"
                     :class="getStatusDotClass(registration.status)"></div>
                {{ getStatusText(registration.status) }}
              </div>
            </div>
          </div>
        </div>

        <!-- Layout en 2 colonnes -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Colonne principale -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Informations personnelles -->
            <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <svg class="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Informations personnelles
              </h3>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Date de naissance</label>
                    <p class="text-white mt-1">{{ formatDate(registration.dancer.birthDate) }}</p>
                  </div>
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Email</label>
                    <p class="text-white mt-1">{{ registration.dancer.user?.email }}</p>
                  </div>
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Téléphone</label>
                    <p class="text-white mt-1">{{ registration.dancer.phone || 'Non renseigné' }}</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Adresse</label>
                    <p class="text-white mt-1">{{ registration.dancer.address }}</p>
                    <p class="text-orange-100/80 text-sm">{{ registration.dancer.postalCode }} {{ registration.dancer.city }}</p>
                  </div>
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Niveau scolaire</label>
                    <p class="text-white mt-1">{{ registration.dancer.schoolLevel || 'Non renseigné' }}</p>
                  </div>
                  <div>
                    <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Taille T-shirt</label>
                    <p class="text-white mt-1">{{ registration.dancer.tShirtSize || 'Non renseigné' }}</p>
                  </div>
                </div>
              </div>

              <div v-if="registration.dancer.medicalInfo || registration.dancer.otherInfo" class="mt-6 pt-6 border-t border-white/10">
                <div v-if="registration.dancer.medicalInfo" class="mb-4">
                  <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Informations médicales</label>
                  <div class="mt-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                    <p class="text-white">{{ registration.dancer.medicalInfo }}</p>
                  </div>
                </div>
                <div v-if="registration.dancer.otherInfo">
                  <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Autres informations</label>
                  <p class="text-white mt-2">{{ registration.dancer.otherInfo }}</p>
                </div>
              </div>
            </div>

            <!-- Responsable légal et contacts -->
            <div v-if="registration.dancer.guardian || (registration.dancer.emergencyContacts && registration.dancer.emergencyContacts.length > 0)" 
                 class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <svg class="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Contacts
              </h3>

              <!-- Responsable légal -->
              <div v-if="registration.dancer.guardian" class="mb-6">
                <h4 class="text-orange-100/80 font-medium mb-3">Responsable légal</h4>
                <div class="bg-white/5 rounded-lg p-4">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Nom complet</label>
                      <p class="text-white mt-1">{{ registration.dancer.guardian.firstName }} {{ registration.dancer.guardian.lastName }}</p>
                    </div>
                    <div>
                      <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Relation</label>
                      <p class="text-white mt-1">{{ registration.dancer.guardian.relationship }}</p>
                    </div>
                    <div>
                      <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Email</label>
                      <p class="text-white mt-1">{{ registration.dancer.guardian.email }}</p>
                    </div>
                    <div>
                      <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Téléphone</label>
                      <p class="text-white mt-1">{{ registration.dancer.guardian.phone }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contacts d'urgence -->
              <div v-if="registration.dancer.emergencyContacts && registration.dancer.emergencyContacts.length > 0">
                <h4 class="text-orange-100/80 font-medium mb-3">Contacts d'urgence</h4>
                <div class="space-y-3">
                  <div v-for="(contact, index) in registration.dancer.emergencyContacts" :key="contact.id"
                       class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-3">
                      <div class="w-6 h-6 bg-red-500/30 rounded-full flex items-center justify-center">
                        <span class="text-red-200 text-xs font-bold">{{ index + 1 }}</span>
                      </div>
                      <span class="text-white font-medium">{{ contact.firstName }} {{ contact.lastName }}</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Relation</label>
                        <p class="text-orange-100/80 mt-1">{{ contact.relationship }}</p>
                      </div>
                      <div>
                        <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Téléphone</label>
                        <p class="text-orange-100/80 mt-1">{{ contact.phone }}</p>
                      </div>
                      <div v-if="contact.email" class="sm:col-span-2">
                        <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Email</label>
                        <p class="text-orange-100/80 mt-1">{{ contact.email }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Colonne latérale -->
          <div class="space-y-6">
            <!-- Groupe de danse -->
            <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <svg class="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14-4H3m12 8H7"/>
                </svg>
                Groupe de danse
              </h3>
              
              <div class="space-y-4">
                <div class="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4">
                  <h4 class="text-white font-bold text-lg mb-2">{{ registration.danceGroup.name }}</h4>
                  <p class="text-orange-100/90 text-sm mb-3">{{ registration.danceGroup.description }}</p>
                  
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="text-orange-100/80">{{ registration.danceGroup.schedule }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      <span class="text-orange-100/80">{{ registration.danceGroup.ageGroup }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Informations de révision -->
            <div v-if="registration.reviewer || registration.reviewedAt" 
                 class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">
              <h3 class="text-lg font-semibold text-white mb-4 flex items-center">
                <svg class="w-5 h-5 text-orange-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Révision
              </h3>
              
              <div class="space-y-4">
                <div v-if="registration.reviewer">
                  <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Révisé par</label>
                  <p class="text-white mt-1">{{ registration.reviewer.email }}</p>
                </div>
                <div v-if="registration.reviewedAt">
                  <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Date</label>
                  <p class="text-white mt-1">{{ formatDate(registration.reviewedAt) }}</p>
                </div>
                <div v-if="registration.notes">
                  <label class="text-xs font-medium text-orange-100/60 uppercase tracking-wide">Notes</label>
                  <div class="mt-2 bg-white/10 border border-white/20 rounded-lg p-3">
                    <p class="text-white text-sm">{{ registration.notes }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast notifications -->
    <div v-if="toast.show" class="fixed bottom-4 right-4 z-50">
      <div class="bg-white/10 backdrop-blur-xl border-l-4 border-green-400 rounded-lg shadow-lg p-4 max-w-sm border border-white/20">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-white">{{ toast.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin'
})

const route = useRoute()
const registrationId = parseInt(route.params.id)

const { data: registration, pending, error, refresh } = await useFetch(`/api/admin/registrations/${registrationId}`, {
  transform: (data) => data.registration
})

const loading = ref(false)
const toast = ref({
  show: false,
  message: ''
})

const updateStatus = async (newStatus) => {
  loading.value = true
  
  try {
    const response = await $fetch(`/api/admin/registrations/${registrationId}`, {
      method: 'PUT',
      body: { status: newStatus }
    })
    
    if (response.success) {
      await refresh()
      showToast(`Inscription ${newStatus === 'APPROVED' ? 'approuvée' : 'rejetée'} avec succès`)
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error)
    showToast('Erreur lors de la mise à jour du statut', 'error')
  } finally {
    loading.value = false
  }
}

const showToast = (message, type = 'success') => {
  toast.value = { show: true, message }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

const printRegistration = () => {
  // Créer une nouvelle fenêtre pour l'impression
  const printWindow = window.open('', '_blank')
  
  if (!printWindow || !registration.value) return
  
  // Contenu HTML pour l'impression
  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Inscription - ${registration.value.dancer.firstName} ${registration.value.dancer.lastName}</title>
      <style>
        @page {
          size: A4;
          margin: 2cm;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 210mm;
          margin: 0 auto;
          background: white;
        }
        
        .header {
          text-align: center;
          border-bottom: 3px solid #ea580c;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        .header h1 {
          color: #ea580c;
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        
        .header p {
          color: #666;
          margin: 5px 0;
          font-size: 14px;
        }
        
        .dancer-info {
          background: #fff;
          border: 2px solid #ea580c;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 25px;
        }
        
        .dancer-info h2 {
          color: #ea580c;
          margin: 0 0 15px 0;
          font-size: 24px;
          text-align: center;
        }
        
        .status-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 14px;
          margin-left: 10px;
        }
        
        .status-submitted { background: #fef3c7; color: #92400e; }
        .status-approved { background: #d1fae5; color: #065f46; }
        .status-rejected { background: #fee2e2; color: #991b1b; }
        .status-draft { background: #f3f4f6; color: #374151; }
        
        .section {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        
        .section h3 {
          color: #ea580c;
          font-size: 18px;
          margin: 0 0 15px 0;
          padding-bottom: 5px;
          border-bottom: 2px solid #fed7aa;
        }
        
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .info-item {
          margin-bottom: 15px;
        }
        
        .info-label {
          font-weight: bold;
          color: #374151;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
          display: block;
        }
        
        .info-value {
          color: #111827;
          font-size: 14px;
        }
        
        .dance-group {
          background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        
        .dance-group h4 {
          color: #9a3412;
          font-size: 20px;
          margin: 0 0 10px 0;
        }
        
        .dance-group p {
          color: #9a3412;
          margin: 5px 0;
        }
        
        .contact-card {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 15px;
        }
        
        .contact-card h4 {
          color: #dc2626;
          margin: 0 0 10px 0;
          font-size: 16px;
        }
        
        .emergency-number {
          background: #dc2626;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          margin-right: 10px;
        }
        
        .medical-alert {
          background: #fef3c7;
          border: 2px solid #f59e0b;
          border-radius: 8px;
          padding: 15px;
          margin-top: 15px;
        }
        
        .medical-alert .info-value {
          color: #92400e;
          font-weight: 500;
        }
        
        .review-section {
          background: #f3f4f6;
          border-radius: 8px;
          padding: 15px;
        }
        
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #d1d5db;
          color: #6b7280;
          font-size: 12px;
        }
        
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .page-break { page-break-before: always; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>FICHE D'INSCRIPTION</h1>
        <p>École de Danse</p>
        <p>Inscription #${registration.value.id} - ${formatDate(registration.value.createdAt)}</p>
      </div>
      
      <div class="dancer-info">
        <h2>
          ${registration.value.dancer.firstName} ${registration.value.dancer.lastName}
          <span class="status-badge status-${registration.value.status.toLowerCase()}">
            ${getStatusText(registration.value.status)}
          </span>
        </h2>
      </div>
      
      <div class="section">
        <h3>Informations Personnelles</h3>
        <div class="info-grid">
          <div>
            <div class="info-item">
              <span class="info-label">Date de naissance</span>
              <div class="info-value">${formatDate(registration.value.dancer.birthDate)}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Email</span>
              <div class="info-value">${registration.value.dancer.user?.email || 'Non renseigné'}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Téléphone</span>
              <div class="info-value">${registration.value.dancer.phone || 'Non renseigné'}</div>
            </div>
          </div>
          <div>
            <div class="info-item">
              <span class="info-label">Adresse complète</span>
              <div class="info-value">
                ${registration.value.dancer.address}<br>
                ${registration.value.dancer.postalCode} ${registration.value.dancer.city}
              </div>
            </div>
            <div class="info-item">
              <span class="info-label">Niveau scolaire</span>
              <div class="info-value">${registration.value.dancer.schoolLevel || 'Non renseigné'}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Taille T-shirt</span>
              <div class="info-value">${registration.value.dancer.tShirtSize || 'Non renseigné'}</div>
            </div>
          </div>
        </div>
        
        ${registration.value.dancer.medicalInfo ? `
          <div class="medical-alert">
            <span class="info-label">⚠️ Informations médicales importantes</span>
            <div class="info-value">${registration.value.dancer.medicalInfo}</div>
          </div>
        ` : ''}
        
        ${registration.value.dancer.otherInfo ? `
          <div class="info-item">
            <span class="info-label">Autres informations</span>
            <div class="info-value">${registration.value.dancer.otherInfo}</div>
          </div>
        ` : ''}
      </div>
      
      <div class="section">
        <h3>Groupe de Danse</h3>
        <div class="dance-group">
          <h4>${registration.value.danceGroup.name}</h4>
          <p><strong>Description:</strong> ${registration.value.danceGroup.description}</p>
          <p><strong>Horaires:</strong> ${registration.value.danceGroup.schedule}</p>
          <p><strong>Groupe d'âge:</strong> ${registration.value.danceGroup.ageGroup}</p>
        </div>
      </div>
      
      ${registration.value.dancer.guardian ? `
        <div class="section">
          <h3>Responsable Légal</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Nom complet</span>
              <div class="info-value">${registration.value.dancer.guardian.firstName} ${registration.value.dancer.guardian.lastName}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Relation</span>
              <div class="info-value">${registration.value.dancer.guardian.relationship}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Email</span>
              <div class="info-value">${registration.value.dancer.guardian.email}</div>
            </div>
            <div class="info-item">
              <span class="info-label">Téléphone</span>
              <div class="info-value">${registration.value.dancer.guardian.phone}</div>
            </div>
          </div>
        </div>
      ` : ''}
      
      ${registration.value.dancer.emergencyContacts?.length ? `
        <div class="section">
          <h3>Contacts d'Urgence</h3>
          ${registration.value.dancer.emergencyContacts.map((contact, index) => `
            <div class="contact-card">
              <h4>
                <span class="emergency-number">${index + 1}</span>
                ${contact.firstName} ${contact.lastName}
              </h4>
              <div class="info-grid">
                <div class="info-item">
                  <span class="info-label">Relation</span>
                  <div class="info-value">${contact.relationship}</div>
                </div>
                <div class="info-item">
                  <span class="info-label">Téléphone</span>
                  <div class="info-value">${contact.phone}</div>
                </div>
                ${contact.email ? `
                  <div class="info-item">
                    <span class="info-label">Email</span>
                    <div class="info-value">${contact.email}</div>
                  </div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${registration.value.reviewer || registration.value.reviewedAt ? `
        <div class="section">
          <h3>Informations de Révision</h3>
          <div class="review-section">
            ${registration.value.reviewer ? `
              <div class="info-item">
                <span class="info-label">Révisé par</span>
                <div class="info-value">${registration.value.reviewer.email}</div>
              </div>
            ` : ''}
            ${registration.value.reviewedAt ? `
              <div class="info-item">
                <span class="info-label">Date de révision</span>
                <div class="info-value">${formatDate(registration.value.reviewedAt)}</div>
              </div>
            ` : ''}
            ${registration.value.notes ? `
              <div class="info-item">
                <span class="info-label">Notes de révision</span>
                <div class="info-value">${registration.value.notes}</div>
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}
      
      <div class="footer">
        <p>Document généré le ${new Date().toLocaleDateString('fr-FR', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <p>École de Danse - Système de Gestion des Inscriptions</p>
      </div>
    </body>
    </html>
  `
  
  // Écrire le contenu dans la nouvelle fenêtre
  printWindow.document.write(printContent)
  printWindow.document.close()
  
  // Attendre que le contenu soit chargé puis imprimer
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }
}

const formatDate = (date) => {
  if (!date) return 'Non renseigné'
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getStatusClass = (status) => {
  switch (status) {
    case 'APPROVED':
      return 'bg-green-100 text-green-800'
    case 'REJECTED':
      return 'bg-red-100 text-red-800'
    case 'SUBMITTED':
      return 'bg-yellow-100 text-yellow-800'
    case 'DRAFT':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusDotClass = (status) => {
  switch (status) {
    case 'APPROVED':
      return 'bg-green-400'
    case 'REJECTED':
      return 'bg-red-400'
    case 'SUBMITTED':
      return 'bg-yellow-400'
    case 'DRAFT':
      return 'bg-gray-400'
    default:
      return 'bg-gray-400'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'APPROVED':
      return 'Approuvée'
    case 'REJECTED':
      return 'Rejetée'
    case 'SUBMITTED':
      return 'En attente'
    case 'DRAFT':
      return 'Brouillon'
    default:
      return 'Inconnu'
  }
}
</script>