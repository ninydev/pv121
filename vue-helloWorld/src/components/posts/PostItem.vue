<script setup>
  let postData = {
      title: "Привет мир",
      body: "Текст поста",
      likes: {
          count: 10
      }
  }
  // BIND (OneWay)
</script>

<template>
  <article>
      <header>{{postData.title}}
          <hr>
          <span>{{postData.likes.count}}</span>
      </header>
      <div>{{postData.body}}</div>
      <footer></footer>
  </article>
</template>

<style scoped>

</style>
