<script setup>

import {Head, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PostForm from "@/Pages/Profile/Posts/Partials/PostForm.vue";


</script>

<template>
    <Head title="User Edit Posts"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">User Edit Posts</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">


                <PostForm></PostForm>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<style scoped>

</style>
