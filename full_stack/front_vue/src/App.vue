<script setup>

/*

<header>
<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

<div class="wrapper">
  <h1>Hello PV011</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</div>
</header>

<RouterView />
 */

import { RouterLink, RouterView } from 'vue-router'
import SiteHeader from "@/layout/SiteHeader.vue";
import SiteFooter from "@/layout/SiteFooter.vue";
</script>

<template>
  <SiteHeader></SiteHeader>
  <main id="main">
    <!-- Аналог Render Body - место - куда выводить тело страницы -->
    <RouterView />
  </main>
  <SiteFooter></SiteFooter>
</template>


<style scoped>

</style>
