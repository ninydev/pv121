<script setup>
import {onMounted, ref} from "vue";

const regions = ref([]);          // Массив областей

onMounted(() => {
    fetch('https://api.novaposhta.ua/v2.0/json/Address/getAreas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
//            "apiKey": "[ВАШ КЛЮЧ]",
            "modelName": "Address",
            "calledMethod": "getAreas",
            "methodProperties": {   }
        }),
    })
        .then(response => response.json())
        .then(response_body => {
            // Обработка полученных данных
            // Вот тут backEnd и frontEnd должен договориться
            console.log(response_body.data);
            regions.value = response_body.data;
            // В переменной data будет содержаться список областей
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
})
</script>

<template>
  <h1>Тут должны будут быть отделения новой почты</h1>
    <div>
        <label for="region">Область:</label>
        <select id="region" v-model="selectedRegion">
            <option value="">Выберите область</option>
            <option v-for="region in regions" :value="region">{{ region.Description }}</option>
        </select>
    </div>

</template>

<style scoped>

</style>
