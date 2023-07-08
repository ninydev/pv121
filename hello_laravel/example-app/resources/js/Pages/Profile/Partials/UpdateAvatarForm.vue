<script setup>
import {useForm, usePage} from "@inertiajs/vue3";
import {ref} from "vue";

import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';
import 'vue-advanced-cropper/dist/theme.bubble.css';


const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
const user = usePage().props.auth.user;

const newAvatarBody = ref(null);
const cropAvatarBody = ref();
const cropAvatarPrev = ref();

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


// Функция для преобразования Data URL в Blob
const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

const sendUpdateAvatar = (event) => {
    event.preventDefault();
    let formData = new FormData();

    const { canvas } = cropAvatarBody.value.getResult();
    const blob  = dataURLtoBlob(canvas.toDataURL());

    formData.append('avatar', blob);
    formData.append('_token', csrfToken);

    fetch(route('profile.update.avatar'), {
        method: 'POST',
        body: formData
    })
        .then(res => {
        console.log(res)
    })
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })

}

const handleCropperChange = () => {
    const { canvas } = cropAvatarBody.value.getResult();
    cropAvatarPrev.value = canvas.toDataURL();
}

</script>

<template>

    <form @submit="sendUpdateAvatar">

        <input type="file" name="avatar" accept="image/*" @change="handleUploadAvatar">
        <!-- добавляем ключ защиты -->
        <input type="hidden" name="_token" v-model=csrfToken>
        <input type="submit">
    </form>

    <div v-if="newAvatarBody">
        <cropper
            ref="cropAvatarBody"
            @change="handleCropperChange"
            class="cropper"
            :src="newAvatarBody">

        </cropper>

    </div>

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

            <td v-if="newAvatarBody">
                <h3>New Avatar Crop </h3>
                <img :src="cropAvatarPrev"  width="100" />
            </td>


        </tr>


    </table>

</template>

<style scoped>
.preview {
    border: dashed 1px rgba(255,255,255, 0.25);
}
</style>
