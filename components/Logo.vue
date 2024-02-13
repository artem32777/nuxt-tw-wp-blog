<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string
    image?: string
  }>(),
  {
    size: '30',
  },
)
</script>

<template>
  <NuxtLink to="/">
    <NuxtImg
      :width="size"
      :height="size"
      :src="image ?? `/logo.svg`" />
  </NuxtLink>
</template>

<style scoped></style>
