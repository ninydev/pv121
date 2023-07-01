<script setup>

import NavLink from "@/Components/NavLink.vue";
import {useForm} from "@inertiajs/vue3";

defineProps({
    post: {
        type: Object
    }
})


const form = useForm({});


</script>

<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            {{ post.title }}

            <NavLink :href="route('posts.edit', post.id)"> Edit </NavLink>
            <form @submit.prevent="form.delete(route('posts.destroy', post.id))" class="mt-6 space-y-6">
                <input type="submit" value="-">
            </form>

        </div>
    </div>

</template>

<style scoped>

</style>
