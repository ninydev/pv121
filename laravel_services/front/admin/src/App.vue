<script setup>
import {onMounted} from "vue";
import {useSocketMainStore} from "@/stores/sockets/socket.main";

// Поскольку я админ - я буду подключаться только в момент, когда я логинюсь в админку
// Но - проверку я выполню в момент подключения
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
          <li><RouterLink to="/job"> Фоновые задачи </RouterLink></li>
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
