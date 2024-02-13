<script setup lang="ts">
import useWpApi from "~/api/useWpApi";
import type {IPageData} from "~/types/WPJsonData";
const {getPage, takeData} = useWpApi()
const slug = ref<string>('')
const route = useRoute()

if (route.params.slug) {
  const slugLength = route.params.slug.length
  if (slugLength > 0) {
    const lastIndex = slugLength - 1
    slug.value = route.params.slug[lastIndex]
  } else {
    slug.value = 'home'
  }
} else {
  slug.value = 'home'
}

const { data, error } = await getPage(slug.value)
const page = takeData(data.value as IPageData[])

</script>

<template>
  <main
    v-if="page"
    class="pt-20">
    <h1 class="mb-10 text-center text-3xl font-bold">{{ page.title  }}</h1>

    <div v-html="page.content"></div>
  </main>
  <div v-else-if="error">Error connection</div>
</template>

<style scoped></style>
