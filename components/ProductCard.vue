<template>
  <UCard class="cursor-pointer hover:scale-105 transition-transform">
    <img
        :src="`https://picsum.photos/500`"
        :alt="product.name"
        class="rounded-lg mb-2 w-full h-56 object-cover bg-gray-200"
    />
    <div>
      <h2 class="font-semibold text-lg truncate">{{ product.name }}</h2>
      <div class="text-xs text-gray-400 mb-1">
        {{ product.description }}
      </div>
      <div class="text-xs text-gray-400 mb-1">
        {{ product.price }}
      </div>
      <div class="mt-2 text-sm">
          <span class="font-bold text-primary">
            ★ {{ product.stock ?? '--' }}/10
          </span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product'

defineProps<{
  product: Product
}>()

</script>