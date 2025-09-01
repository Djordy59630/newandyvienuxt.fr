<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-slate-400/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      <div class="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-slate-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
    </div>
    
    <!-- Floating elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-24 left-16 w-3 h-3 bg-blue-300/20 rounded-full animate-bounce" style="animation-delay: 1s;"></div>
      <div class="absolute top-64 right-32 w-2 h-2 bg-indigo-300/30 rounded-full animate-ping" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-48 left-24 w-4 h-4 bg-slate-300/15 rounded-full animate-pulse" style="animation-delay: 3s;"></div>
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
          <ProgressBar :current-step="1" />
          <button @click="goBack" class="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors border border-white/20">
            Retour
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-2xl mx-auto px-8 pb-12">
      
      <!-- Header Section -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 via-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-3">
          Informations personnelles
        </h1>
        <p class="text-slate-300 text-lg">
          Commençons par apprendre à te connaître
        </p>
      </div>

      <!-- Form Container -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          
          <!-- Name Row -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="form-label">Prénom</label>
              <input 
                v-model="form.firstName"
                type="text" 
                class="form-input"
                placeholder="Ton prénom"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Nom</label>
              <input 
                v-model="form.lastName"
                type="text" 
                class="form-input"
                placeholder="Ton nom"
                required
              />
            </div>
          </div>

          <!-- Birth Date -->
          <div class="form-group">
            <label class="form-label">Date de naissance</label>
            <input 
              v-model="form.birthDate"
              type="date" 
              class="form-input"
              required
            />
            <div v-if="form.birthDate && isMinor" class="mt-2 text-sm text-blue-600 font-medium">
              ℹ️ Tu es mineur(e), nous aurons besoin des informations de ton responsable légal
            </div>
          </div>

          <!-- Address -->
          <div class="form-group">
            <label class="form-label">Adresse</label>
            <input 
              v-model="form.address"
              type="text" 
              class="form-input"
              placeholder="12 rue de la Danse"
              required
            />
          </div>

          <!-- City & Postal Code -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label class="form-label">Ville</label>
              <input 
                v-model="form.city"
                type="text" 
                class="form-input"
                placeholder="Paris"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label">Code postal</label>
              <input 
                v-model="form.postalCode"
                type="text" 
                class="form-input"
                placeholder="75001"
                pattern="[0-9]{5}"
                required
              />
            </div>
          </div>

          <!-- Phone -->
          <div class="form-group">
            <label class="form-label">Téléphone</label>
            <input 
              v-model="form.phone"
              type="tel" 
              class="form-input"
              placeholder="06 12 34 56 78"
              required
            />
          </div>

          <!-- School Level -->
          <div class="form-group">
            <label class="form-label">Niveau scolaire</label>
            <select v-model="form.schoolLevel" class="form-input" required>
              <option value="">Sélectionne ton niveau</option>
              <option value="Maternelle">Maternelle</option>
              <option value="CP">CP</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
              <option value="CM1">CM1</option>
              <option value="CM2">CM2</option>
              <option value="6ème">6ème</option>
              <option value="5ème">5ème</option>
              <option value="4ème">4ème</option>
              <option value="3ème">3ème</option>
              <option value="Seconde">Seconde</option>
              <option value="Première">Première</option>
              <option value="Terminale">Terminale</option>
              <option value="Études supérieures">Études supérieures</option>
              <option value="Vie active">Vie active</option>
            </select>
          </div>

          <!-- T-shirt Size -->
          <div class="form-group">
            <label class="form-label">Taille de t-shirt</label>
            <select v-model="form.tshirtSize" class="form-input" required>
              <option value="">Choisis ta taille</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

          <!-- Additional Info -->
          <div class="form-group">
            <label class="form-label">Informations complémentaires</label>
            <textarea 
              v-model="form.otherInfo"
              class="form-input min-h-24"
              placeholder="Allergies, particularités, souhaits... (optionnel)"
              rows="3"
            ></textarea>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
            {{ error }}
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end pt-4">
            <button 
              type="submit" 
              :disabled="loading"
              class="btn-primary"
            >
              <div v-if="loading" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span v-else>Continuer</span>
              <svg v-if="!loading" class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <!-- Footer -->
      <div class="text-center mt-8">
        <p class="text-slate-400 text-sm">
          © 2024 Square630 • Association Andyvie
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead, navigateTo, useCookie } from 'nuxt/app'

definePageMeta({
  middleware: 'auth'
})

// @ts-ignore - Nuxt auto-import
const { user } = useAuth()

const loading = ref(false)
const error = ref('')

const form = ref({
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  birthDate: '',
  postalCode: '',
  city: '',
  address: '',
  phone: '',
  schoolLevel: '',
  tshirtSize: '',
  otherInfo: ''
})

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

const handleSubmit = async () => {
  error.value = ''
  loading.value = true

  try {
    // Sauvegarder les données avec le statut mineur
    const formDataCookie = useCookie('registration-step1', {
      default: () => ({})
    })
    
    formDataCookie.value = {
      ...form.value,
      isMinor: isMinor.value
    }
    
    console.log('Form data:', form.value, 'Is minor:', isMinor.value)
    
    // Simuler un appel API
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Si mineur, aller à l'étape 2 (responsable légal), sinon étape 3 (contacts d'urgence)
    if (isMinor.value) {
      await navigateTo('/inscription/step-2')
    } else {
      await navigateTo('/inscription/step-3')
    }
    
  } catch (err) {
    error.value = 'Une erreur s\'est produite lors de la sauvegarde'
  } finally {
    loading.value = false
  }
}

// Meta
useHead({
  title: 'Étape 1 - Informations personnelles • Square630',
  meta: [
    { name: 'description', content: 'Renseignez vos informations personnelles pour votre inscription aux cours de hip-hop' }
  ]
})
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  color: #0f172a;
  transition: all 0.2s ease;
  font-size: 16px;
  line-height: 1.5;
}

.form-input::placeholder {
  color: #94a3b8;
}

.form-input:hover {
  border-color: #cbd5e1;
}

.form-input:focus {
  outline: none;
  background: white;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: linear-gradient(to right, #475569, #2563eb, #4f46e5);
  color: white;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-primary:hover:not(:disabled) {
  background: linear-gradient(to right, #334155, #1d4ed8, #4338ca);
  transform: scale(1.05);
  box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.25);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: scale(1);
}


/* Animations */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.6s ease-out;
}
</style>