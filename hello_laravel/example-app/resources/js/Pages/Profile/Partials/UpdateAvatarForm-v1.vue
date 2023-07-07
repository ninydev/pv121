<script setup>
import {usePage} from "@inertiajs/vue3";

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const user = usePage().props.auth.user;

</script>

<template>

    <form action="/profile/avatar"
          enctype="multipart/form-data"
          method="post">

        <input type="file" name="avatar">
        <!-- добавляем ключ защиты -->
        <input type="hidden" name="_token" v-model=csrfToken>
        <input type="submit">
    </form>

    <h3>Old Avatar</h3>
    <img :src="user.avatar" v-if="user.avatar" width="100" />

</template>

<style scoped>

</style>
