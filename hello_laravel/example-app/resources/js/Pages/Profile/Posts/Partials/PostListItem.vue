<script setup>

import NavLink from "@/Components/NavLink.vue";

defineProps({
    post: {
        type: Object
    }
})

</script>

<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            {{ post.title }}

            <NavLink :href="route('posts.edit', post.id)"> Edit </NavLink>
        </div>
    </div>

</template>

<style scoped>

</style>
