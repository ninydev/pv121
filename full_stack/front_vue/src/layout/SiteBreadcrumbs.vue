<script setup>
defineProps({
  pageTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- ======= Breadcrumbs ======= -->
  <div class="breadcrumbs">
    <div class="container">

      <div class="d-flex justify-content-between align-items-center">
        <h2>{{ pageTitle }}</h2>
        <ol>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>{{ pageTitle }}</li>
        </ol>
      </div>

    </div>
  </div><!-- End Breadcrumbs -->
</template>

<style scoped>

</style>
