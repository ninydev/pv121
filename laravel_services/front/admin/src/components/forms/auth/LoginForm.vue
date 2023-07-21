<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import MyLog from "@/helpers/myLog";
import {useAuthStore} from "@/stores/auth.store";

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const authStore = useAuthStore()

async function onSubmit(data) {
  MyLog('send form')
  authStore.login(data)
}
</script>

<template>
  <div v-if="authStore.isPreload">
    Login
  </div>

  <div class="card-body">
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
      <div class="form-group">
        <label>Email</label>
        <Field name="email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" />
        <div class="invalid-feedback">{{ errors.email }}</div>
      </div>
      <div class="form-group">
        <label>Password</label>
        <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="isSubmitting">
          <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
          Send
        </button>
      </div>
    </Form>
  </div>



</template>

<style scoped>

</style>
