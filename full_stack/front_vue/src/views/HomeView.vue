<script setup>

import ListAreas from "@/components/NovaPoshta/Areas/ListAreas.vue";
import PrivatBackExchange from "@/components/PrivatBank/PrivatBackExchange.vue";
import ExchangeApiList from "@/components/ExchangeApi/ExchangeApiList.vue";
import RegisterForm from "@/components/MyAuth/RegisterForm.vue";
</script>

<template>
  <!-- ======= Blog Section ======= -->
  <section class="inner-page">
    <div class="container">

      <div class="section-header">
        <h2>Home Page</h2>

      </div>

      <ExchangeApiList></ExchangeApiList>

    </div>
  </section>
  <!-- End Inner Page -->
</template>
