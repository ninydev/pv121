<script setup>

import {Head, useForm} from "@inertiajs/vue3";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm.vue";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.vue";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

// const form = useForm({
//     someFile: null,
// });
//
// const sendForm = () => {
// }
const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

</script>

<template>
    <Head title="Upload Files" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Upload Files</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                <form action="/uploadFiles"
                      enctype="multipart/form-data"
                      method="post">

                    <input type="file" name="someFile">
                    <!-- добавляем ключ защиты -->
                    <input type="hidden" name="_token" v-model=csrfToken>
                    <input type="submit">
                </form>

            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
