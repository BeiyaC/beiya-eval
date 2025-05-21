<template>
  <div class="max-w-2xl mx-auto py-12 px-4">
    <UCard class="mb-8">
      <h1 class="text-3xl font-bold text-center">Your Cart</h1>
    </UCard>
    <div v-if="cart.length === 0" class="text-gray-400 text-center mt-12">
      <UIcon name="i-heroicons-shopping-cart" class="mx-auto mb-3 w-10 h-10" />
      <span class="block text-lg">Your cart is empty.</span>
    </div>
    <div v-else class="space-y-4">
      <CartItem
          v-for="item in cart"
          :key="item.key"
          :item="item"
          @remove="removeFromCart"
      />

      <UCard class="flex items-center justify-between bg-gray-50 border-0 shadow-none mt-8">
        <div class="font-bold text-lg">Total</div>
        <div class="font-extrabold text-xl text-primary">
          {{ totalPrice }} €
        </div>
      </UCard>

      <UButton
          @click="clearCart"
          color="neutral"
          variant="soft"
          class="w-full mt-6"
          icon="i-heroicons-trash"
      >
        Clear Cart
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">

const { cart, removeFromCart, clearCart } = useCart()

const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + Number(item.value.price ?? 0), 0)
)
</script>