<script setup>
import { defineProps, ref } from 'vue';

const {post}  = defineProps({
  post: {
    type: Object
  }
});

const like_count = ref(post.like_count[0].count_likes);

</script>

<template>
  <article class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
    <header class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
      {{ post.title }}

    </header>

    <footer>
      {{like_count}}
    </footer>
  </article>
</template>

<style scoped>

</style>
