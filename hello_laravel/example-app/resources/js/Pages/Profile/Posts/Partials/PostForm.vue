<script setup>
import {useForm} from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";


const post = {
    title: "",
    body: "",
    img_url: null
}

const form = useForm({
    title: post.title,
    body: post.body,
    img_url: post.img_url, //
    img_blob: null // Для загрузки изображения
});
</script>

<template>

    <section>

        <h2 class="text-lg font-medium text-gray-900">Post Information</h2>

        <form @submit.prevent="form.post(route('post.create'))" class="mt-6 space-y-6">

            <div>
                <InputLabel for="name" value="Title" />

                <TextInput
                    id="title"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.title"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.title" />
            </div>

            <div>
                <InputLabel for="name" value="Body" />

                <TextInput
                    id="body"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.body"
                    required
                />

                <InputError class="mt-2" :message="form.errors.body" />
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>


        </form>


    </section>



</template>

<style scoped>

</style>
