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
  <header> Admin </header>
  <footer> &copy; itStep 2023 </footer>

</template>


<style scoped>
</style>
