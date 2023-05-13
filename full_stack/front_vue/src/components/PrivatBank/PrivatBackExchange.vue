<script setup>
import {usePrivatBankExchange} from "@/stores/privatBank/privatBankExchange";
import {onMounted} from "vue";


const privatBankExchange = usePrivatBankExchange()
onMounted(() => {
    privatBankExchange.getExchange()
})
</script>

<template>
  <table>
      <thead>
      <tr>
        <th>ccy</th>
        <th>base_ccy</th>
        <th>buy</th>
        <th>cale</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="e in privatBankExchange.exchange">
            <td>{{e.ccy}}</td>
            <td>{{e.base_ccy}}</td>
            <td>{{e.buy}}</td>
            <td>{{e.sale}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
            <td> {{privatBankExchange.whenLoad}} </td>
        </tr>
      </tfoot>
  </table>
</template>

<style scoped>

</style>
