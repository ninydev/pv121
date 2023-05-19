<script setup>
import SiteBreadcrumbs from "@/layout/SiteBreadcrumbs.vue";
const pageTitle = "About Page"
</script>

<template>
  <SiteBreadcrumbs :pageTitle=pageTitle></SiteBreadcrumbs>
  <!-- ======= Blog Section ======= -->
  <section class="inner-page">
    <div class="container">

      <div class="section-header">
        <h2>{{pageTitle}}</h2>
      </div>

      <p>
        Text About
      </p>

    </div>
  </section><!-- End Inner Page -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
