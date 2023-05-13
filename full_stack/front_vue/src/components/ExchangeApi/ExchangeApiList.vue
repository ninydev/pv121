<script setup>

import {useExchangeApiStore} from "@/stores/exchangerateApi/exchangerateApi";
import {onMounted} from "vue";

const exchangeStore = useExchangeApiStore()
onMounted( () => {
    exchangeStore.getExchange()
})
</script>

<template>
  <h1>{{exchangeStore.data.base_code}}</h1>
  <ul>
      <li v-for="e in exchangeStore.data.conversion_rates">
          {{ e }}
      </li>
  </ul>
</template>

<style scoped>

</style>
