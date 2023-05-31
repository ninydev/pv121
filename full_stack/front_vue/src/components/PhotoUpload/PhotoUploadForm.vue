<script setup>
import {usePhotoUploadStore} from "@/stores/photoUpload/photoUpload";
const photoUploadStore = usePhotoUploadStore()

</script>

<template>
  <form action="/someUrl" method="post" enctype="multipart/form-data" @submit.prevent="photoUploadStore.doSendFile">
  <input type="file" @change="photoUploadStore.changeFile">
  <input type="submit" value="send">
  </form>
</template>

<style scoped>

</style>
