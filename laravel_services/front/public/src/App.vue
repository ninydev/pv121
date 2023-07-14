<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from "vue";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

onMounted( () => {
  const socketsMainStore = useSocketMainStore()
  socketsMainStore.connect()
})
</script>

<template>
  <header> Public 1 </header>
  <main id="main">
  </main>
  <footer> &copy; ItStep 2023 </footer>

</template>


<style scoped>
</style>
