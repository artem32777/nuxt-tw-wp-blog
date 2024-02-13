<script setup lang="ts">
const items = [
  {
    title: '123',
    url: '#'
  }
]
</script>

<template>
  <nav>
    <ul>
      <li
          v-for="item in items"
          :key="item.title">
        <LayoutHeaderMenuItem :item="item" />
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
