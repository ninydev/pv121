<script setup>
import {onMounted} from "vue";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

onMounted( () => {
  const socketsMainStore = useSocketMainStore()
  socketsMainStore.connect()
})
</script>

<template>

  <div class="wrapper dark-mode">

    <header class="main-header">  main-header </header>
    <aside class="main-sidebar">  main-main-sidebar
      <nav>
        <ul>
          <li><RouterLink to="/">Главная</RouterLink></li>
          <li><RouterLink to="/users">Пользователи</RouterLink></li>
        </ul>


      </nav>
    </aside>
    <div class="content-wrapper">
      <RouterView></RouterView>
    </div>
    <footer class="main-footer"> &copy; 2023 IT Step</footer>




  </div>

</template>


<style scoped>
</style>
