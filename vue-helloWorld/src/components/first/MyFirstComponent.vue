<script setup>
import { onMounted } from 'vue'
import UkraineAreas from "@/components/first/UkraineAreas.vue";
import PostItem from "@/components/posts/PostItem.vue";
import AllHP from "@/components/novaPoshta/AllHP.vue";

onMounted(() => {
    console.log(`the component is now mounted.`)
})


</script>

<template>
  <h3>Мой первый компонент</h3>
  <AllHP></AllHP>

</template>

<style scoped>
h3 {color: #00B7FF}
</style>
