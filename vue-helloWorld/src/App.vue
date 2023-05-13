<script setup>
import MyHeader from "@/components/layouts/MyHeader.vue";
import MyFooter from "@/components/layouts/MyFooter.vue";
import MyFirstComponent from "@/components/first/MyFirstComponent.vue";
</script>

<template>
  <MyHeader></MyHeader>
    <hr>
    <main>
    <MyFirstComponent></MyFirstComponent>
    </main>
    <hr>
  <MyFooter></MyFooter>
</template>

<style scoped>
</style>
