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

onMounted(() => {
  const stored = localStorage.getItem('products')
  products.value = stored ? JSON.parse(stored) : []
})
</script>