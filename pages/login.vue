<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <UCard class="w-full max-w-sm p-8">
      <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
      <form @submit.prevent="login" class="flex flex-col gap-4">
        <UInput
            v-model="password"
            type="password"
            placeholder="Password"
            size="lg"
            icon="i-heroicons-lock-closed"
            required
            class="w-full"
        />
        <UButton :loading="loading" type="submit" color="primary" class="w-full">
          Login
        </UButton>
        <UAlert
            v-if="error"
            color="warning"
            variant="soft"
            class="w-full mt-2 text-center"
        >
          {{ error }}
        </UAlert>
        <UAlert
            v-if="success"
            color="success"
            variant="soft"
            class="w-full mt-2 text-center"
        >
          {{ success }}
        </UAlert>
      </form>
    </UCard>
  </div>
</template>

<script setup lang="ts">

const password = ref('')
const error = ref('')
const success = ref('')
const loading = ref(false)
const router = useRouter()

const login = async () => {
  error.value = ''
  success.value = ''
  loading.value = true
  try {
    const res = await $fetch('/api/login', {
      method: 'POST',
      body: { password: password.value },
      credentials: 'include',
    })
    if (res.success) {
      success.value = 'Login successful!'
      setTimeout(() => router.push('/admin'), 800)
    } else {
      error.value = 'Incorrect password'
    }
  } catch (e) {
    error.value = 'Server error'
  } finally {
    loading.value = false
  }
}
</script>