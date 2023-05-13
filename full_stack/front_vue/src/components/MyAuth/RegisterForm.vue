<script setup>

import {toast} from "vue3-toastify";
import {ref} from "vue";

const email = ref("test@test.com");

const password = ref('')
const confirmPassword = ref('')

const doSend = () =>{
    if(password.value !== confirmPassword.value) {
        toast.error("Ваши пароли не совпадают")
        return
    }
    toast.info("Send")
}
</script>

<template>
  <input type="email" name="email" v-model="email"> {{ email }}<br>
  <input type="password" name="password" v-model="password"><br>
  <input type="password" name="confirmPassword" v-model="confirmPassword"><br>
  <input type="button" value="send" @click="doSend">
</template>

<style scoped>

</style>
