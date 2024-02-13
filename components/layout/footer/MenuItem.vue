<script setup lang="ts">
defineProps<{
  item: {
    title: string
    url: string
  }
}>()
</script>

<template>
  <NuxtLink
    :to="`${item.url}`"
    class="">
    {{ item.title }}
  </NuxtLink>
</template>

<style scoped></style>
