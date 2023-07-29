<script setup>
import {useReadPostsStore} from "@/stores/readPosts.store";
import {onMounted} from "vue";
import PostListItem from "@/components/posts/PostListItem.vue";

const readPostStore = useReadPostsStore()
onMounted( () => {
  readPostStore.loadPosts()
})
</script>

<template>
  <div v-if="readPostStore.isPreload">
    Loading
  </div>


    <div class="py-12" v-else>
      <PostListItem v-for="post in readPostStore.posts" :post="post" :key="post.id" />
    </div>

</template>

<style scoped>

</style>
