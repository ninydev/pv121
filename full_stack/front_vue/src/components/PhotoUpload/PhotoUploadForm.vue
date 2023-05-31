<script setup>



// Обработчик отправки формы
const sendToBack = () => {

}
</script>

<template>
  <form action="/someUrl" method="post" enctype="multipart/form-data" @submit.prevent="sendToBack">
  <input type="file">
  <input type="submit" value="send">
  </form>
</template>

<style scoped>

</style>
