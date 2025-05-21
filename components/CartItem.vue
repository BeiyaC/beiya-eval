<template>
  <UCard class="flex items-center justify-between">
    <div>
      <div class="font-semibold text-lg">{{ item.value.name }}</div>
      <div class="text-xs text-gray-400">{{ item.value.description }}</div>
      <div class="text-sm text-gray-600 font-bold mt-2">
        {{ item.value.price }} €
      </div>
    </div>
    <UButton
        @click="$emit('remove', item.key)"
        color="error"
        size="sm"
        variant="outline"
        icon="i-heroicons-trash"
    >
      Remove
    </UButton>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  item: { key: string, value: any }
}>()
defineEmits(['remove'])
</script>