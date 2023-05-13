<script setup>
import {useNovaPoshta} from "@/stores/novaPoshta";
import {onMounted} from "vue";


const novaPostaStore = useNovaPoshta()
onMounted(() => {
  novaPostaStore.getAreas()
})
</script>

<template>
  <ul>
      <li v-for="area in novaPostaStore.areas" key="area.Ref">
          {{ area.Description }}
      </li>
  </ul>
</template>

<style scoped>
</style>
