<template>
  <div class="flex items-center space-x-3">
    <span class="text-slate-300 text-sm font-medium">Étape {{ currentStep }} sur {{ totalSteps }}</span>
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
      </div>
      <!-- Step indicators -->
      <div class="step-indicators">
        <div 
          v-for="step in totalSteps" 
          :key="step"
          class="step-dot"
          :class="{ 
            'active': step <= currentStep,
            'completed': step < currentStep 
          }"
        >
          <svg v-if="step < currentStep" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span v-else class="text-xs font-bold">{{ step }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number
  totalSteps?: number
}

const props = withDefaults(defineProps<Props>(), {
  totalSteps: 4
})

const progressWidth = computed(() => {
  return (props.currentStep / props.totalSteps) * 100
})
</script>

<style scoped>
.progress-container {
  position: relative;
  width: 220px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(135deg, #ea580c, #dc2626, #e11d48);
  border-radius: 4px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 2px 8px rgba(234, 88, 12, 0.3);
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: progress-shimmer 2s infinite;
}

@keyframes progress-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.step-indicators {
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -2px;
}

.step-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.step-dot.active {
  background: linear-gradient(135deg, #ea580c, #dc2626, #e11d48);
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.4);
}

.step-dot.completed {
  background: #10b981;
  color: white;
  border-color: rgba(255, 255, 255, 0.4);
}
</style>