<script setup>

import {Head, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";

// Получаю посты
const posts = usePage().props.posts;

// console.log(posts.data)
//
// for (let i = 0; i < posts.data.length; i++) {
//     console.log(posts.data[i].title)
// }

</script>

<template>
    <Head title="User Posts"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">User Posts</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                    <ul>
                        <li v-for="p in posts.data" :key="p.id">
                            {{ p.title }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </AuthenticatedLayout>
</template>

<style scoped>

</style>
