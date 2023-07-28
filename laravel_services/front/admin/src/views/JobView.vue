<script setup>

import {useJobStore} from "@/stores/startJob.store";

const jobStore = useJobStore()
const startJob = () => {
  jobStore.startJob()
}
</script>

<template>
  <button @click="startJob"> Start </button>
</template>

<style scoped>

</style>
