<template>
  <header class="w-full bg-primary text-white shadow-md py-4 mb-8">
    <nav class="container mx-auto flex gap-6 justify-center items-center text-lg font-semibold">
      <ULink
          v-for="item in nav"
          :key="item.slug"
          :to="`/${item.slug}`"
          active-class="underline"
          class="hover:text-secondary transition-colors"
      >
        {{ item.label }}
      </ULink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const nav = [
  { label: 'index', slug: 'home' },
  { label: 'cart', slug: 'your cart' },
  { label: 'admin', slug: 'admin' },
]
</script>