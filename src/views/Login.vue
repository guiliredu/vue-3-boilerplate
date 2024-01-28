<template>
  <Container>
    <section id="login">
      <div class="row justify-content-center">
        <div class="col-12 col-md-4">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-center">Login</h2>
            <form @submit.prevent="login">
              <InputText v-model="form.email" type="email" name="email" label="Email" required />
              <InputText v-model="form.password" type="password" name="password" label="Password" required />
              <button class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import { http } from '@/http'
import { useAuthStore } from '@/stores/auth';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const auth = useAuthStore();

const form = ref({
  email: null,
  password: null,
});

const login = () => {
  http.post(`auth/login`, { ...form })
    .then(response => {
      console.log(response);
      auth.setToken(response.data.data.access_token)
      fetchUser()
    })
}

const fetchUser = () => {
  http.get(`auth/user`)
    .then(response => {
      console.log(response);
      auth.setUser(response.data.data)
      if (route.query.redirect) {
        router.push({path: route.query.redirect});
        return false;
      }

      router.push({path: `/perfil`});
    })
}
</script>

<style lang="scss" scoped>

</style>