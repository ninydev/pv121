<script setup>

import {onMounted, onUnmounted, ref} from "vue";
import {useSocketChatStore} from "@/stores/sockets/socket.chat";

const socketChatStore = useSocketChatStore()

onMounted( () => {
  socketChatStore.connect()
})
onUnmounted( () => {
  socketChatStore.disconnect()
})

const msg = new ref()
const doSendMsg = () => {
  socketChatStore.sendMessage(msg.value)
  msg.value = ''
}
</script>

<template>

  <div>
    <ul>
      <li v-for="message in socketChatStore.messages">{{ message }}</li>
    </ul>
  </div>
  <div>
    <input v-model="msg">
    <input type="button" @click="doSendMsg" value="Send">
  </div>

</template>

<style scoped>

</style>
