<script setup>
import { onMounted } from 'vue'
import OdesaWeather from "@/components/first/OdesaWeather.vue";

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
        .then(data => {
            // Обработка полученных данных
            console.log(data);
            // В переменной data будет содержаться список областей
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
})
</script>

<template>
    <h4> Welcome to MVVM Pattern</h4>
<OdesaWeather></OdesaWeather>
</template>

<style scoped>

</style>
