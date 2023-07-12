<script setup>

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head} from "@inertiajs/vue3";
import {toast} from "vue3-toastify";
import {io} from "socket.io-client";

const socket = io('http://localhost:3000/')

socket.on('socket.myNameIs', (data) => {
    toast.success('Connect to: ' + data)
})

// Реакция на отключение связи
socket.on('disconnect', (data) => {
    toast.error(data)
})

socket.on('connect_error', (data) => {
    toast.error(data)
    console.log(data)
})

socket.on('controller_event', (data) => {
    toast.success('Event: \n' + data);
    console.log(data);
})

// Пинг с сервера
socket.on('ping', (data) => {
    toast.info('Ping from server: \n' + new Date(data).toLocaleString(), {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_RIGHT,
        transition: "zoom",
        autoClose: 500
    });
});


const doSend = () => {
    fetch('/socket/emit')
        .then(res => res.text())
        .then(txt => {
            console.log('ok')
        })
        .catch( err => {
            toast.error(err)
            console.log(err)
        })
}




</script>

<template>
    <Head title="Hello Socket" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Hello Socket</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">Ждем сокетов</div>
                    <div class="p-6 text-gray-900">
                        <button @click="doSend"> Emit </button>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
