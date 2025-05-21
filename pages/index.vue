<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">STORE</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">An error occurred.</div>
    <ProductGrid :products="products" />
  </div>
</template>
<script setup lang="ts">
const products = ref([])
const pending = ref(true)
const error = ref('')

onMounted(async () => {
  pending.value = true
  try {
    const res = await $fetch('/api/products/all')
    products.value = res
    error.value = ''
  } catch (e) {
    error.value = 'API unreachable'
  } finally {
    pending.value = false
  }
})
</script>