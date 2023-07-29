<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from "vue";
import {useSocketMainStore} from "@/stores/sockets/socket.main";
import RegisterForm from "@/components/forms/auth/RegisterForm.vue";

onMounted( () => {
  const socketsMainStore = useSocketMainStore()
  socketsMainStore.connect()
})
</script>

<template>
  <header> Public 1 </header>
  <nav>
    <ul>
      <li><RouterLink to="/">Главная</RouterLink></li>
      <li><RouterLink to="/posts">Посты </RouterLink></li>
    </ul>
  </nav>
  <main id="main">
    <RouterView></RouterView>
  </main>
  <footer> &copy; ItStep 2023 </footer>

</template>


<style scoped>
</style>
