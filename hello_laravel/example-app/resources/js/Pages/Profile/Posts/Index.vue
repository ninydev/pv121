<script setup>

import {Head, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PostListItem from "@/Pages/Profile/Posts/Partials/PostListItem.vue";
import NavLink from "@/Components/NavLink.vue";

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
            <PostListItem v-for="post in posts.data" :post="post" :key="post.id" />
        </div>

        <div>
            <NavLink :href="route('posts.create')" >
                Create
            </NavLink>
        </div>

    </AuthenticatedLayout>
</template>

<style scoped>

</style>
