<script setup>
import {useAuthStore} from "@/stores/auth/auth";

const authStore = useAuthStore()
</script>

<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top" data-scrollto-offset="0">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <RouterLink to="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0">
        <h1>HeroBiz<span>.</span></h1>
      </RouterLink>

      <nav id="navbar" class="navbar">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/chat">Chat</RouterLink></li>
          <li><RouterLink to="/photoUpload">Photo Upload</RouterLink></li>
          <li v-if="!authStore.isLogin"><RouterLink to="/register">Register</RouterLink></li>
          <li v-else>Logout</li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle d-none"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

</template>

<style scoped></style>
