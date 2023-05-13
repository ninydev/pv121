<script setup>
import {useNovaPoshtaStore} from "@/stores/novaPoshta";
import {onMounted} from "vue";


const novaPostaStore = useNovaPoshtaStore()
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
