<template>
  <UCard class="cursor-pointer hover:scale-105 transition-transform">
    <img
        :src="product.value.image"
        :alt="product.value.name"
        class="rounded-lg mb-2 w-full h-56 object-cover bg-gray-200"
    />
    <div>
      <h2 class="font-semibold text-lg truncate">{{ product.value.name }}</h2>
      <div class="text-xs text-gray-400 mb-1">
        {{ product.value.description }}
      </div>
      <div class="text-xs text-gray-400 mb-1">
        {{ product.value.price }} €
      </div>
      <div class="mt-2 text-sm">
        <span class="font-bold text-primary">
          Stock remain: {{ product.value.stock ?? '--' }}/10
        </span>
      </div>
      <div class="flex gap-2 mt-4">
        <UButton
            v-if="product.value.stock <= 1"
            size="sm"
            color="info"
            variant="outline"
        >
          Unlucky
        </UButton>
        <UButton
            v-else-if="!isInCart(product.key)"
            size="sm"
            color="primary"
            @click="addToCart(product)"
        >
          Add to Cart
        </UButton>
        <UButton
            v-else
            size="sm"
            color="warning"
            variant="outline"
            @click="removeFromCart(product.key)"
        >
          Remove from Cart
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">

defineProps<{
  product: { key: string, value: any }
}>()

const { addToCart, removeFromCart, isInCart } = useCart()
</script>