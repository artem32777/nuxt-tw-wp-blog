<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref<boolean>(true)
// nuxtApp.hook('app:created', () => {
//   loading.value = true
// })
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<template>
  <div
    v-if="loading"
    class="fixed left-0 top-0 z-50 h-full w-full bg-green-500 opacity-10"
    aria-hidden="true"
    role="presentation" />
</template>

<style scoped></style>
