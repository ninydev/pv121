<script setup>
import {defineProps, onMounted, onUnmounted, ref} from 'vue';
import {useSocketMainStore} from "@/stores/sockets/socket.main";
import {toast} from "vue3-toastify";
import myLog from "@/helpers/myLog";

const {post}  = defineProps({
  post: {
    type: Object
  }
});

const like_count = ref(post.like_count[0].count_likes);

const useSocket = useSocketMainStore()

/**
 * Реакция на изменение лайков
 * @param newCount
 */
const onChangeLikeCount = (newCount) => {
  toast.info(newCount)
  myLog(newCount)
  like_count.value = newCount
}

/**
 * Реакция на изменение комментариев
 * @param data
 */
const onChangeComments = (data) => {
  myLog(data)
}

// Когда мы показываем пост - мы входим в комнату - про обновления данных по этому посту
onMounted(() => {
  useSocket.join('post.updates.' + post.id)
  useSocket.on('post.update.likes.' + post.id, onChangeLikeCount)
  useSocket.on('post.update.comments.' + post.id, onChangeComments)
})

// Когда компонент уходит - мы покидаем комнату
onUnmounted( () => {
  useSocket.leave('post.updates.' + post.id)
  useSocket.off('post.update.likes.' + post.id, onChangeLikeCount)
  useSocket.off('post.update.comments.' + post.id, onChangeComments)
})


</script>

<template>
  <article class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
    <header class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
      {{ post.title }}

    </header>

    <footer>
      {{like_count}}
    </footer>
  </article>
</template>

<style scoped>

</style>
