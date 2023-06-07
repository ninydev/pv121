<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import {useSocketChatStore} from "@/stores/sockets/socket.chat";
import SiteBreadcrumbs from "@/layout/SiteBreadcrumbs.vue";
import AddPost from "@/components/Blog/AddPost.vue";

const socketChatStore = useSocketChatStore()


const pageTitle = "Blog Page"
const msg = new ref()

</script>

<template>

  <!-- передача параметра pageTitle (props) в секцию - аналог ViewData  -->
  <SiteBreadcrumbs :pageTitle=pageTitle></SiteBreadcrumbs>
  <!-- ======= Blog Section ======= -->
  <section class="inner-page">
    <div class="container">

      <div class="section-header">
        <h2>{{pageTitle}}</h2>
      </div>

      <div>
        <ul>
          Список постов
        </ul>
      </div>
      <div>
        <AddPost></AddPost>
      </div>

    </div>
  </section><!-- End Inner Page -->



</template>

<style scoped>

</style>
