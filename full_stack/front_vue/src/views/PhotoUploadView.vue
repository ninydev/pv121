<script setup>

import SiteBreadcrumbs from "@/layout/SiteBreadcrumbs.vue";
import PhotoUploadForm from "@/components/PhotoUpload/PhotoUploadForm.vue";
const pageTitle = "Photo Upload"
</script>

<template>
  <!-- передача параметра pageTitle (props) в секцию - аналог ViewData  -->
  <SiteBreadcrumbs :pageTitle=pageTitle></SiteBreadcrumbs>
  <!-- ======= Blog Section ======= -->
  <section class="inner-page">
    <div class="container">

      <div class="section-header">
        <h2>{{pageTitle}}</h2>
      </div>

      <PhotoUploadForm></PhotoUploadForm>

    </div>
  </section><!-- End Inner Page -->


</template>

<style scoped>

</style>
