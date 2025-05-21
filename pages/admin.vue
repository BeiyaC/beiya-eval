<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-6 bg-gray-50">
    <UButton
        :loading="loading"
        :disabled="!canGenerate || loading"
        color="primary"
        size="lg"
        @click="generateData"
        class="w-48"
    >
      Generate Data
    </UButton>
    <UAlert v-if="message" color="primary" variant="soft" class="w-80">
      <span class="font-semibold">Success:</span> {{ message }}
    </UAlert>
    <UAlert v-if="error" color="warning" variant="soft" class="w-80">
      <span class="font-semibold">Error:</span> {{ error }}
    </UAlert>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canGenerate = ref(false)
const loading = ref(false)
const message = ref('')
const error = ref('')

const checkIfCanGenerate = async () => {
  try {
    const res = await $fetch('/api/products/check')
    canGenerate.value = res.status === 'ok'
    error.value = ''
  } catch (e) {
    canGenerate.value = false
    error.value = 'API unreachable'
  }
}

const generateData = async () => {
  loading.value = true
  message.value = ''
  error.value = ''
  try {
    const res = await $fetch('/api/products/generate', { method: 'POST' })
    if (res.status === 'success') {
      message.value = 'Data generated!'
    } else {
      error.value = 'Generation failed'
    }
  } catch (e) {
    error.value = 'Error generating data'
  } finally {
    loading.value = false
    await checkIfCanGenerate()
  }
}

onMounted(checkIfCanGenerate)
</script>