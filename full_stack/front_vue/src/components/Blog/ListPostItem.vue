<script setup>
/**
 * Отображение 1 конкретного элемента списка
 */

import MyLog from "@/services/myLog";

// Передаем пост снаружи через Props
// https://vuejs.org/guide/components/props.html
const props = defineProps(["post"])
const post = props.post
MyLog(post)

</script>

<template>
  <strong>{{post.title}}</strong>
</template>

<style scoped>

</style>
