<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from "@/layout/SiteHeader.vue";
import SiteFooter from "@/layout/SiteFooter.vue";
import {onMounted} from "vue";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

onMounted( () => {
  const socketsMainStore = useSocketMainStore()
  socketsMainStore.connect()
})
</script>

<template>
  <!-- App.Vue - Это аналог мастер страницы -->
  <!-- https://metanit.com/sharp/aspnet5/7.4.php -->


  <SiteHeader></SiteHeader><!-- RenderSection -->
  <main id="main">
    <RouterView /><!-- Аналог Render Body - место - куда выводить тело страницы -->
  </main>
  <SiteFooter></SiteFooter><!-- RenderSection -->
</template>


<style scoped>
</style>
