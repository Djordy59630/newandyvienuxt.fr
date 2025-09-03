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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <span class="ml-3 lg:ml-4 text-xl lg:text-2xl font-black text-white tracking-tight">
              Gestion des Groupes
            </span>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/admin/panel"
              class="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              ← Panel Admin
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
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-bold text-white mb-2">Gestion des Groupes de Danse</h1>
          <p class="text-orange-100/80">Créer, modifier et gérer les groupes disponibles pour les inscriptions</p>
        </div>
        <button
          @click="openCreateModal"
          class="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 backdrop-blur-xl text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 border border-green-500/30 inline-flex items-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <span>Nouveau Groupe</span>
        </button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ totalGroups }}</p>
              <p class="text-orange-100/60 text-sm">Total Groupes</p>
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
              <p class="text-2xl font-bold text-white">{{ activeGroups }}</p>
              <p class="text-orange-100/60 text-sm">Groupes Actifs</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-white">{{ totalRegistrations }}</p>
              <p class="text-orange-100/60 text-sm">Inscriptions Total</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Groups List -->
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
        <div v-if="loading" class="p-8 text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p class="text-white mt-4">Chargement des groupes...</p>
        </div>

        <div v-else-if="groups.length === 0" class="p-8 text-center">
          <p class="text-white text-lg">Aucun groupe créé</p>
          <button
            @click="openCreateModal"
            class="mt-4 bg-green-500/20 text-green-300 hover:bg-green-500/30 px-6 py-2 rounded-xl transition-colors"
          >
            Créer le premier groupe
          </button>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-white/5">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Groupe</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Horaire</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Tranche d'âge</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Restrictions d'âge</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Statut</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Inscrits</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10">
              <tr v-for="group in groups" :key="group.id" class="hover:bg-white/5">
                <td class="px-6 py-4">
                  <div>
                    <div class="text-sm font-medium text-white">{{ group.name }}</div>
                    <div class="text-sm text-orange-100/60 max-w-xs truncate">{{ group.description }}</div>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-white">{{ group.schedule }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-white">{{ group.ageGroup }}</div>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-white">
                    <span v-if="group.ageMin || group.ageMax">
                      {{ group.ageMin || '?' }} - {{ group.ageMax || '?' }} ans
                    </span>
                    <span v-else class="text-orange-100/60">Non défini</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span 
                    class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                    :class="group.isActive ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'"
                  >
                    {{ group.isActive ? 'Actif' : 'Inactif' }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="text-sm text-white">{{ group.registrationCount }}</div>
                </td>
                <td class="px-6 py-4 text-sm font-medium space-x-2">
                  <button
                    @click="editGroup(group)"
                    class="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 px-3 py-1 rounded-lg transition-colors"
                  >
                    Modifier
                  </button>
                  <button
                    @click="confirmDelete(group)"
                    :disabled="group.registrationCount > 0"
                    class="bg-red-500/20 text-red-300 hover:bg-red-500/30 px-3 py-1 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    :title="group.registrationCount > 0 ? 'Impossible de supprimer : des inscriptions existent' : 'Supprimer le groupe'"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal Create/Edit Group -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-2xl w-full">
        <div class="p-6">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-white">
              {{ editingGroup ? 'Modifier le Groupe' : 'Nouveau Groupe' }}
            </h2>
            <button @click="closeModal" class="text-white/60 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="saveGroup" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-white mb-2">Nom du groupe *</label>
              <input
                v-model="formData.name"
                type="text"
                required
                class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Ex: Les Kids"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-white mb-2">Description *</label>
              <textarea
                v-model="formData.description"
                required
                rows="3"
                class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                placeholder="Description du groupe de danse"
              ></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-white mb-2">Horaire *</label>
                <input
                  v-model="formData.schedule"
                  type="text"
                  required
                  class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ex: Samedi 14h-15h"
                >
              </div>

              <div>
                <label class="block text-sm font-medium text-white mb-2">Tranche d'âge *</label>
                <input
                  v-model="formData.ageGroup"
                  type="text"
                  required
                  class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ex: 6e / 5e"
                >
              </div>
            </div>

            <!-- Restrictions d'âge -->
            <div>
              <label class="block text-sm font-medium text-white mb-2">Restrictions d'âge (optionnel)</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs text-orange-100/80 mb-1">Âge minimum</label>
                  <input
                    v-model="formData.ageMin"
                    type="number"
                    min="0"
                    max="100"
                    class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ex: 6"
                  >
                </div>

                <div>
                  <label class="block text-xs text-orange-100/80 mb-1">Âge maximum</label>
                  <input
                    v-model="formData.ageMax"
                    type="number"
                    min="0"
                    max="100"
                    class="w-full bg-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ex: 12"
                  >
                </div>
              </div>
              <p class="text-xs text-orange-100/60 mt-2">
                Si défini, seuls les danseurs dans cette tranche d'âge pourront s'inscrire à ce groupe
              </p>
            </div>

            <div>
              <label class="flex items-center space-x-3">
                <input
                  v-model="formData.isActive"
                  type="checkbox"
                  class="w-4 h-4 text-orange-500 bg-white/20 border-white/30 rounded focus:ring-orange-500 focus:ring-2"
                >
                <span class="text-sm text-white">Groupe actif (visible dans les inscriptions)</span>
              </label>
            </div>

            <!-- Actions -->
            <div class="flex justify-end space-x-4 pt-6 border-t border-white/10">
              <button
                type="button"
                @click="closeModal"
                class="px-6 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                :disabled="saving"
                class="px-6 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-white rounded-xl border border-green-500/30 transition-colors disabled:opacity-50"
              >
                {{ saving ? 'Enregistrement...' : (editingGroup ? 'Modifier' : 'Créer') }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal Delete Confirmation -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 max-w-md w-full">
        <div class="p-6">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L5.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-white">Confirmer la suppression</h3>
            </div>
          </div>

          <p class="text-orange-100/80 mb-6">
            Êtes-vous sûr de vouloir supprimer le groupe <strong>{{ groupToDelete?.name }}</strong> ? 
            Cette action est irréversible.
          </p>

          <div class="flex justify-end space-x-4">
            <button
              @click="cancelDelete"
              class="px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
            >
              Annuler
            </button>
            <button
              @click="deleteGroup"
              :disabled="deleting"
              class="px-4 py-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded-xl transition-colors disabled:opacity-50"
            >
              {{ deleting ? 'Suppression...' : 'Supprimer' }}
            </button>
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
const loading = ref(true)
const saving = ref(false)
const deleting = ref(false)
const groups = ref([])
const showModal = ref(false)
const showDeleteModal = ref(false)
const editingGroup = ref(null)
const groupToDelete = ref(null)

const formData = ref({
  name: '',
  description: '',
  schedule: '',
  ageGroup: '',
  ageMin: null,
  ageMax: null,
  isActive: true
})

// Computed
const totalGroups = computed(() => groups.value.length)
const activeGroups = computed(() => groups.value.filter(g => g.isActive).length)
const totalRegistrations = computed(() => groups.value.reduce((sum, g) => sum + g.registrationCount, 0))

// Methods
const fetchGroups = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/admin/groups')
    groups.value = response.groups
  } catch (error) {
    console.error('Erreur lors du chargement des groupes:', error)
  } finally {
    loading.value = false
  }
}

const openCreateModal = () => {
  editingGroup.value = null
  formData.value = {
    name: '',
    description: '',
    schedule: '',
    ageGroup: '',
    ageMin: null,
    ageMax: null,
    isActive: true
  }
  showModal.value = true
}

const editGroup = (group) => {
  editingGroup.value = group
  formData.value = {
    name: group.name,
    description: group.description,
    schedule: group.schedule,
    ageGroup: group.ageGroup,
    ageMin: group.ageMin,
    ageMax: group.ageMax,
    isActive: group.isActive
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingGroup.value = null
  formData.value = {
    name: '',
    description: '',
    schedule: '',
    ageGroup: '',
    ageMin: null,
    ageMax: null,
    isActive: true
  }
}

const saveGroup = async () => {
  try {
    saving.value = true
    
    if (editingGroup.value) {
      // Update existing group
      const response = await $fetch(`/api/admin/groups/${editingGroup.value.id}`, {
        method: 'PUT',
        body: formData.value
      })
      
      // Update in local list
      const index = groups.value.findIndex(g => g.id === editingGroup.value.id)
      if (index !== -1) {
        groups.value[index] = { ...groups.value[index], ...response.group }
      }
    } else {
      // Create new group
      const response = await $fetch('/api/admin/groups', {
        method: 'POST',
        body: formData.value
      })
      
      // Add to local list
      groups.value.push({ ...response.group, registrationCount: 0 })
    }
    
    closeModal()
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error)
    alert(error.data?.statusMessage || 'Erreur lors de la sauvegarde')
  } finally {
    saving.value = false
  }
}

const confirmDelete = (group) => {
  groupToDelete.value = group
  showDeleteModal.value = true
}

const cancelDelete = () => {
  groupToDelete.value = null
  showDeleteModal.value = false
}

const deleteGroup = async () => {
  if (!groupToDelete.value) return
  
  try {
    deleting.value = true
    
    await $fetch(`/api/admin/groups/${groupToDelete.value.id}`, {
      method: 'DELETE'
    })
    
    // Remove from local list
    groups.value = groups.value.filter(g => g.id !== groupToDelete.value.id)
    
    cancelDelete()
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    alert(error.data?.statusMessage || 'Erreur lors de la suppression')
  } finally {
    deleting.value = false
  }
}

// Lifecycle
onMounted(() => {
  fetchGroups()
})
</script>