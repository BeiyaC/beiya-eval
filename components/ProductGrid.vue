<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    <ProductCard
        v-for="product in products"
        :key="product.key"
        :product="product"
    />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  products: any
}>()

</script>