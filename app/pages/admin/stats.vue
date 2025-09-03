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
        <div class="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          <!-- Logo -->
          <div class="flex items-center min-w-0 flex-1 sm:flex-none">
            <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <span class="ml-2 sm:ml-3 lg:ml-4 text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tight truncate">
              <span class="hidden sm:inline">Statistiques par Groupe</span>
              <span class="sm:hidden">Stats</span>
            </span>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            <NuxtLink
              to="/admin/panel"
              class="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2 bg-white/10 text-white rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20 text-xs sm:text-sm lg:text-base"
            >
              <span class="hidden sm:inline">← Panel Admin</span>
              <span class="sm:hidden">←</span>
            </NuxtLink>
            <button
              @click="logout"
              class="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2 bg-red-500/20 text-white rounded-lg sm:rounded-xl hover:bg-red-500/30 transition-all duration-200 backdrop-blur-sm border border-red-500/30 text-xs sm:text-sm lg:text-base"
            >
              <span class="hidden sm:inline">Déconnexion</span>
              <span class="sm:hidden">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-white mb-2">Statistiques par Groupe de Danse</h1>
        <p class="text-orange-100/80 text-sm sm:text-base">Vue d'ensemble des inscriptions par groupe</p>
      </div>

      <!-- Global Stats -->
      <div v-if="!loading && globalStats" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 mb-6 sm:mb-8">
        <div class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <p class="text-lg sm:text-2xl font-bold text-white">{{ globalStats.activeGroups }}</p>
              <p class="text-orange-100/60 text-xs sm:text-sm truncate">Groupes Actifs</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <p class="text-lg sm:text-2xl font-bold text-white">{{ globalStats.totalDancers }}</p>
              <p class="text-orange-100/60 text-xs sm:text-sm truncate">Total Danseurs</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <p class="text-lg sm:text-2xl font-bold text-white">{{ globalStats.totalSubmitted }}</p>
              <p class="text-orange-100/60 text-xs sm:text-sm truncate">En Attente</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <p class="text-lg sm:text-2xl font-bold text-white">{{ globalStats.totalApproved }}</p>
              <p class="text-orange-100/60 text-xs sm:text-sm truncate">Approuvées</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-3 sm:ml-4 min-w-0">
              <p class="text-lg sm:text-2xl font-bold text-white">{{ globalStats.totalRejected }}</p>
              <p class="text-orange-100/60 text-xs sm:text-sm truncate">Rejetées</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        <p class="text-white mt-4">Chargement des statistiques...</p>
      </div>

      <!-- Groups Stats -->
      <div v-else-if="groups && groups.length > 0" class="space-y-6 sm:space-y-8">
        <div v-for="group in groups" :key="group.id" class="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden">
          <!-- Group Header -->
          <div class="p-4 sm:p-6 border-b border-white/10">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
              <div class="min-w-0 flex-1">
                <h2 class="text-xl sm:text-2xl font-bold text-white mb-2 truncate">{{ group.name }}</h2>
                <p class="text-orange-100/70 mb-3 text-sm sm:text-base line-clamp-2">{{ group.description }}</p>
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-orange-100/60">
                  <span class="flex items-center">
                    <span class="hidden sm:inline">📅</span>
                    <span class="sm:hidden text-xs">Horaire:</span>
                    <span class="ml-1">{{ group.schedule }}</span>
                  </span>
                  <span class="flex items-center">
                    <span class="hidden sm:inline">👥</span>
                    <span class="sm:hidden text-xs">Age:</span>
                    <span class="ml-1">{{ group.ageGroup }}</span>
                  </span>
                  <span class="flex items-center" :class="group.isActive ? 'text-green-400' : 'text-red-400'">
                    <span class="hidden sm:inline">{{ group.isActive ? '✅' : '❌' }}</span>
                    <span class="sm:hidden text-xs">Statut:</span>
                    <span class="ml-1">{{ group.isActive ? 'Actif' : 'Inactif' }}</span>
                  </span>
                </div>
              </div>
              <button
                @click="toggleGroupDetails(group.id)"
                class="bg-white/10 hover:bg-white/20 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-200 text-sm sm:text-base flex-shrink-0"
              >
                <span class="hidden sm:inline">{{ expandedGroups[group.id] ? 'Masquer' : 'Voir détails' }}</span>
                <span class="sm:hidden">{{ expandedGroups[group.id] ? 'Masquer' : 'Détails' }}</span>
              </button>
            </div>
          </div>

          <!-- Group Stats -->
          <div class="p-4 sm:p-6">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div class="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10">
                <div class="text-lg sm:text-xl lg:text-2xl font-bold text-white">{{ group.stats.totalDancers }}</div>
                <div class="text-xs sm:text-sm text-orange-100/60">Total</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10">
                <div class="text-lg sm:text-xl lg:text-2xl font-bold text-gray-300">{{ group.stats.draftCount }}</div>
                <div class="text-xs sm:text-sm text-orange-100/60">Brouillons</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10 col-span-2 sm:col-span-1">
                <div class="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">{{ group.stats.submittedCount }}</div>
                <div class="text-xs sm:text-sm text-orange-100/60">En attente</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10">
                <div class="text-lg sm:text-xl lg:text-2xl font-bold text-green-400">{{ group.stats.approvedCount }}</div>
                <div class="text-xs sm:text-sm text-orange-100/60">Approuvées</div>
              </div>
              <div class="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border border-white/10">
                <div class="text-lg sm:text-xl lg:text-2xl font-bold text-red-400">{{ group.stats.rejectedCount }}</div>
                <div class="text-xs sm:text-sm text-orange-100/60">Rejetées</div>
              </div>
            </div>

            <!-- Dancers List -->
            <div v-if="expandedGroups[group.id]" class="border-t border-white/10 pt-4 sm:pt-6">
              <h3 class="text-lg font-semibold text-white mb-4">Liste des Danseurs ({{ group.dancers.length }})</h3>
              
              <div v-if="group.dancers.length === 0" class="text-center py-8">
                <p class="text-orange-100/60">Aucun danseur inscrit dans ce groupe</p>
              </div>

              <div v-else>
                <!-- Mobile: Cards Layout -->
                <div class="block sm:hidden space-y-3">
                  <div v-for="dancer in group.dancers" :key="dancer.id" class="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div class="flex items-start justify-between mb-3">
                      <div class="flex items-center min-w-0 flex-1">
                        <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span class="text-white font-bold text-sm">
                            {{ dancer.firstName.charAt(0) }}{{ dancer.lastName.charAt(0) }}
                          </span>
                        </div>
                        <div class="ml-3 min-w-0">
                          <div class="text-sm font-medium text-white truncate">
                            {{ dancer.firstName }} {{ dancer.lastName }}
                          </div>
                          <div class="text-xs text-orange-100/60">
                            {{ formatAge(dancer.birthDate) }} ans
                          </div>
                        </div>
                      </div>
                      <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full flex-shrink-0" :class="getStatusClass(dancer.status)">
                        {{ getStatusText(dancer.status) }}
                      </span>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 text-xs mb-3">
                      <div>
                        <span class="text-orange-100/60">Email:</span>
                        <p class="text-white truncate">{{ dancer.email }}</p>
                      </div>
                      <div>
                        <span class="text-orange-100/60">Téléphone:</span>
                        <p class="text-white">{{ dancer.phone || 'Non renseigné' }}</p>
                      </div>
                      <div>
                        <span class="text-orange-100/60">Niveau:</span>
                        <p class="text-white">{{ dancer.schoolLevel }}</p>
                      </div>
                      <div>
                        <span class="text-orange-100/60">T-shirt:</span>
                        <p class="text-white">{{ dancer.tShirtSize }}</p>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                      <span class="text-xs text-orange-100/60">{{ formatDate(dancer.registrationDate) }}</span>
                      <NuxtLink
                        :to="`/admin/registration/${dancer.registrationId}`"
                        class="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-3 py-1 rounded-lg transition-colors inline-flex items-center space-x-1 text-xs"
                      >
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>Voir fiche</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <!-- Desktop: Table Layout -->
                <div class="hidden sm:block overflow-x-auto">
                <table class="w-full">
                  <thead class="bg-white/5">
                    <tr>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Danseur</th>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden lg:table-cell">Contact</th>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden xl:table-cell">Informations</th>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Statut</th>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider hidden md:table-cell">Date</th>
                      <th class="px-3 py-3 sm:px-4 sm:py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-white/5">
                    <tr v-for="dancer in group.dancers" :key="dancer.id" class="hover:bg-white/5">
                      <td class="px-3 py-3 sm:px-4 sm:py-3">
                        <div class="flex items-center">
                          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span class="text-white font-bold text-xs sm:text-sm">
                              {{ dancer.firstName.charAt(0) }}{{ dancer.lastName.charAt(0) }}
                            </span>
                          </div>
                          <div class="ml-2 sm:ml-3 min-w-0">
                            <div class="text-sm font-medium text-white truncate">
                              {{ dancer.firstName }} {{ dancer.lastName }}
                            </div>
                            <div class="text-xs text-orange-100/60">
                              {{ formatAge(dancer.birthDate) }} ans
                            </div>
                            <!-- Mobile info in main column -->
                            <div class="text-xs text-orange-100/60 lg:hidden">{{ dancer.email }}</div>
                            <div class="text-xs text-orange-100/60 xl:hidden">{{ dancer.schoolLevel }}</div>
                          </div>
                        </div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 sm:py-3 hidden lg:table-cell">
                        <div class="text-sm text-white">{{ dancer.email }}</div>
                        <div class="text-xs text-orange-100/60">{{ dancer.phone || 'Non renseigné' }}</div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 sm:py-3 hidden xl:table-cell">
                        <div class="text-sm text-white">{{ dancer.schoolLevel }}</div>
                        <div class="text-xs text-orange-100/60">Taille: {{ dancer.tShirtSize }}</div>
                      </td>
                      <td class="px-3 py-3 sm:px-4 sm:py-3">
                        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusClass(dancer.status)">
                          {{ getStatusText(dancer.status) }}
                        </span>
                      </td>
                      <td class="px-3 py-3 sm:px-4 sm:py-3 hidden md:table-cell text-xs sm:text-sm text-white">
                        {{ formatDate(dancer.registrationDate) }}
                      </td>
                      <td class="px-3 py-3 sm:px-4 sm:py-3 text-sm font-medium">
                        <NuxtLink
                          :to="`/admin/registration/${dancer.registrationId}`"
                          class="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-2 py-1 sm:px-3 sm:py-1 rounded-lg transition-colors inline-flex items-center space-x-1 text-xs sm:text-sm"
                        >
                          <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span class="hidden sm:inline">Voir fiche</span>
                          <span class="sm:hidden">Voir</span>
                        </NuxtLink>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Data State -->
      <div v-else-if="!loading" class="text-center py-12">
        <p class="text-white text-lg">Aucune donnée disponible</p>
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
const loading = ref(true)
const globalStats = ref(null)
const groups = ref([])
const expandedGroups = ref({})

// Methods
const fetchStats = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/admin/stats/groups')
    globalStats.value = response.globalStats
    groups.value = response.groups
  } catch (error) {
    console.error('Erreur lors du chargement des statistiques:', error)
  } finally {
    loading.value = false
  }
}

const toggleGroupDetails = (groupId) => {
  expandedGroups.value[groupId] = !expandedGroups.value[groupId]
}

const getStatusClass = (status) => {
  switch (status) {
    case 'DRAFT':
      return 'bg-gray-500/20 text-gray-300'
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
    case 'DRAFT':
      return 'Brouillon'
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

const formatAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  const age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    return age - 1
  }
  return age
}

// Lifecycle
onMounted(() => {
  fetchStats()
})
</script>