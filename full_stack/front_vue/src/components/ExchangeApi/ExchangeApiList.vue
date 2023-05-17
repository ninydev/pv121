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
  <div v-if="exchangeStore.isPreload">
    Происходит загрузка данных
  </div>
  <div v-else-if="exchangeStore.isError">
    Произошла ошибка при запросе данных
    {{exchangeStore.error}}
  </div>
  <ul v-else>
      <li v-for="e in exchangeStore.data.conversion_rates">
          {{ e }}
      </li>
  </ul>
</template>

<style scoped>

</style>
