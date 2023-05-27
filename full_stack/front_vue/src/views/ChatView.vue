<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import {useSocketChatStore} from "@/stores/sockets/socket.chat";
import SiteBreadcrumbs from "@/layout/SiteBreadcrumbs.vue";

const socketChatStore = useSocketChatStore()

onMounted( () => {
  socketChatStore.connect()
})
onUnmounted( () => {
  socketChatStore.disconnect()
})
const pageTitle = "Chat Page"
const msg = new ref()
const doSendMsg = () => {
  socketChatStore.sendMessage(msg.value)
  msg.value = ''
}
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
          <li v-for="message in socketChatStore.messages">{{ message }}</li>
        </ul>
      </div>
      <div>
        <input v-model="msg">
        <input type="button" @click="doSendMsg" value="Send">
      </div>

    </div>
  </section><!-- End Inner Page -->



</template>

<style scoped>

</style>
