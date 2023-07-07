<script setup>
import {usePage} from "@inertiajs/vue3";
import {ref} from "vue";

const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const user = usePage().props.auth.user;

const newAvatarBody = ref(null);

const handleUploadAvatar =  (event) => {
    // Получить данные о файле
    const file = event.target.files[0];
    // Создать объект для чтения файлов
    const reader = new FileReader();

    // Когда файл будет прочитан - загрузить его тело в реактивную переменную
    reader.onload = (e) => {
        newAvatarBody.value = e.target.result;
    }

    // Прочитать файл
    reader.readAsDataURL(file);
}

</script>

<template>

    <form action="/profile/avatar"
          enctype="multipart/form-data"
          method="post">

        <input type="file" name="avatar" accept="image/*" @change="handleUploadAvatar">
        <!-- добавляем ключ защиты -->
        <input type="hidden" name="_token" v-model=csrfToken>
        <input type="submit">
    </form>

    <table>
        <tr>
            <td v-if="user.avatar">
                <h3>Old Avatar</h3>
                <img :src="user.avatar"  width="100" />
            </td>

            <td v-if="newAvatarBody">
                <h3>New Avatar </h3>
                <img :src="newAvatarBody"  width="100" />
            </td>

        </tr>


    </table>

</template>

<style scoped>

</style>
