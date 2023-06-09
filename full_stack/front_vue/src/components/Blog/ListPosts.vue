<script setup>
/**
 * Отвечает за построение списка элементов
 */
import {useBlogStore} from "@/stores/posts/posts";
import {onMounted} from "vue";
import ListPostItem from "@/components/Blog/ListPostItem.vue";

const blogStore = useBlogStore()

onMounted( () => {
  blogStore.getAllPost()
})

</script>

<template>
  <ul>
    <li v-for="p in blogStore.posts" :key="p.id">
      <ListPostItem :post="p"></ListPostItem>
    </li>
  </ul>
</template>

<style scoped>

</style>
