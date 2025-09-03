<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Navigation Header -->
    <nav class="relative z-20 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span class="ml-3 lg:ml-4 text-xl lg:text-2xl font-black text-white tracking-tight">
              Panel Admin
            </span>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/dashboard"
              class="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              ← Dashboard
            </NuxtLink>
            <button
              @click="logout"
              class="px-4 py-2 bg-red-500/20 text-white rounded-xl hover:bg-red-500/30 transition-all duration-200 backdrop-blur-sm border border-red-500/30"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Gestion des Inscriptions</h1>
        <p class="text-orange-100/80">Visualisez, approuvez ou rejetez les demandes d'inscription</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ stats.total }}</p>
              <p class="text-orange-100/60 text-sm">Total</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ stats.pending }}</p>
              <p class="text-orange-100/60 text-sm">En attente</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ stats.approved }}</p>
              <p class="text-orange-100/60 text-sm">Approuvées</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ stats.rejected }}</p>
              <p class="text-orange-100/60 text-sm">Rejetées</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Actions & Filters -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
        <div class="flex flex-wrap gap-4 items-center justify-between">
          <div class="flex flex-wrap gap-4 items-center">
            <div>
              <label class="block text-sm font-medium text-white mb-2">Filtrer par statut</label>
              <select 
                v-model="selectedStatus" 
                @change="filterRegistrations"
                class="bg-white/20 text-white rounded-xl px-4 py-2 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">Tous les statuts</option>
                <option value="SUBMITTED">En attente</option>
                <option value="APPROVED">Approuvées</option>
                <option value="REJECTED">Rejetées</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-white mb-2">Rechercher</label>
              <input
                v-model="searchTerm"
                @input="filterRegistrations"
                type="text"
                placeholder="Nom, email, groupe..."
                class="bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-2 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="flex gap-3">
            <NuxtLink
              to="/admin/stats"
              class="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 backdrop-blur-xl text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 border border-purple-500/30 inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              <span>Stats par Groupe</span>
            </NuxtLink>
            
            <NuxtLink
              to="/admin/groups"
              class="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 backdrop-blur-xl text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 border border-teal-500/30 inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>Gérer Groupes</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Registrations List -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
        <div v-if="loading" class="p-8 text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p class="text-white mt-4">Chargement des inscriptions...</p>
        </div>

        <div v-else-if="filteredRegistrations.length === 0" class="p-8 text-center">
          <p class="text-white text-lg">Aucune inscription trouvée</p>
        </div>

        <div v-else>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-white/5">
                <tr>
                  <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Danseur</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Groupe</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Statut</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                  <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/10">
                <tr v-for="registration in paginatedRegistrations" :key="registration.id" class="hover:bg-white/5">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span class="text-white font-bold text-sm">
                          {{ registration.dancer.firstName.charAt(0) }}{{ registration.dancer.lastName.charAt(0) }}
                        </span>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-white">
                          {{ registration.dancer.firstName }} {{ registration.dancer.lastName }}
                        </div>
                        <div class="text-sm text-orange-100/60">{{ registration.dancer.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-white">{{ registration.danceGroup.name }}</div>
                    <div class="text-sm text-orange-100/60">{{ registration.danceGroup.schedule }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusClass(registration.status)">
                      {{ getStatusText(registration.status) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {{ formatDate(registration.createdAt) }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <NuxtLink
                      :to="`/admin/registration/${registration.id}`"
                      class="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-3 py-1 rounded-lg transition-colors inline-block"
                    >
                      Voir
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Pagination -->
        <div v-if="showPagination" class="px-6 py-4 bg-white/5 border-t border-white/10">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <!-- Info pagination -->
            <div class="text-sm text-white">
              Affichage {{ ((currentPage - 1) * itemsPerPage) + 1 }} à {{ Math.min(currentPage * itemsPerPage, filteredRegistrations.length) }} sur {{ filteredRegistrations.length }} inscription{{ filteredRegistrations.length > 1 ? 's' : '' }}
            </div>
            
            <!-- Navigation pagination -->
            <div class="flex items-center space-x-2">
              <button
                @click="previousPage"
                :disabled="currentPage === 1"
                class="px-3 py-2 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <!-- Numéros de page -->
              <div class="flex items-center space-x-1">
                <button
                  v-for="page in Math.min(5, totalPages)"
                  :key="page"
                  @click="goToPage(page)"
                  :class="[
                    'px-3 py-2 text-sm rounded-lg backdrop-blur-sm border',
                    currentPage === page
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  ]"
                >
                  {{ page }}
                </button>
                
                <span v-if="totalPages > 5" class="text-white">...</span>
                
                <button
                  v-if="totalPages > 5 && currentPage !== totalPages"
                  @click="goToPage(totalPages)"
                  :class="[
                    'px-3 py-2 text-sm rounded-lg backdrop-blur-sm border',
                    currentPage === totalPages
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  ]"
                >
                  {{ totalPages }}
                </button>
              </div>
              
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="px-3 py-2 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm border border-white/20"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'admin']
})

const { logout } = useAuth()

// State
const registrations = ref([])
const filteredRegistrations = ref([])
const loading = ref(true)
const selectedStatus = ref('')
const searchTerm = ref('')

// Pagination
const currentPage = ref(1)
const itemsPerPage = 10

// Stats
const stats = computed(() => {
  const total = registrations.value.length
  const pending = registrations.value.filter(r => r.status === 'SUBMITTED').length
  const approved = registrations.value.filter(r => r.status === 'APPROVED').length
  const rejected = registrations.value.filter(r => r.status === 'REJECTED').length
  
  return { total, pending, approved, rejected }
})

// Pagination computed
const totalPages = computed(() => {
  return Math.ceil(filteredRegistrations.value.length / itemsPerPage)
})

const paginatedRegistrations = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredRegistrations.value.slice(start, end)
})

const showPagination = computed(() => {
  return filteredRegistrations.value.length > itemsPerPage
})

// Methods
const fetchRegistrations = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/admin/registrations')
    registrations.value = response.registrations
    filteredRegistrations.value = response.registrations
  } catch (error) {
    console.error('Erreur lors du chargement des inscriptions:', error)
  } finally {
    loading.value = false
  }
}

const filterRegistrations = () => {
  let filtered = registrations.value

  if (selectedStatus.value) {
    filtered = filtered.filter(r => r.status === selectedStatus.value)
  }

  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase()
    filtered = filtered.filter(r => 
      r.dancer.firstName.toLowerCase().includes(term) ||
      r.dancer.lastName.toLowerCase().includes(term) ||
      r.dancer.email.toLowerCase().includes(term) ||
      r.danceGroup.name.toLowerCase().includes(term)
    )
  }

  filteredRegistrations.value = filtered
  currentPage.value = 1 // Reset to first page when filtering
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}


const getStatusClass = (status) => {
  switch (status) {
    case 'SUBMITTED':
      return 'bg-yellow-500/20 text-yellow-300'
    case 'APPROVED':
      return 'bg-green-500/20 text-green-300'
    case 'REJECTED':
      return 'bg-red-500/20 text-red-300'
    default:
      return 'bg-gray-500/20 text-gray-300'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'SUBMITTED':
      return 'En attente'
    case 'APPROVED':
      return 'Approuvée'
    case 'REJECTED':
      return 'Rejetée'
    default:
      return status
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-FR')
}

// Lifecycle
onMounted(() => {
  fetchRegistrations()
})
</script>