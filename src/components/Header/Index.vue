<template>
  <header class="position-fixed w-100 top-0" style="z-index:2;">
    <div id="header-mobile" class="py-3 bg-primary d-block d-md-none">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto">
            <router-link to="/"><img src="/images/logo-white.webp" alt="FarmBy" class="logo" /></router-link>
          </div>

          <div class="col-auto">
            <button class="menu" :class="{ active: menu }" @click="menu = !menu">
              <span class="menu-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="menu" class="menu-mobile">
      <div class="bg animate__animated animate__faster animate__fadeIn"></div>
      <div
        class="content bg-white p-5 pt-8 shadow animate__animated animate__faster"
        :class="{ animate__fadeInRight: menu, animate__fadeOutRight: !menu }"
        style="overflow:hidden; overflow-y:scroll; max-height:100vh;"
      >
        <div v-for="service in services" :key="service.slug" class="border rounded px-3 py-2 mb-2">
          <router-link :to="`/${service.status != 'soon' ? service.slug : '#'}`" class="d-block" @click.native="menu = false">
            <div class="row g-2 align-items-center">
              <div class="col-2 text-center">
                <i class="fas" :class="[service.icon]"></i>
              </div>
              <div class="col">
                <h6 class="mb-0 fs-md">{{ service.short_title }}</h6>
              </div>
              <div v-if="service.status == 'soon'" class="col-auto">
                <span class="badge bg-warning">breve!</span>
              </div>
            </div>
          </router-link>
        </div>

        <router-link v-if="!$store.state.auth.user" to="/cadastro" class="btn btn-secondary w-100 mb-2">Cadastro</router-link>
        <router-link v-if="!$store.state.auth.user" to="/entrar" class="btn btn-outline-primary w-100" @click.native="menu = false">Acessar minha conta</router-link>
        <router-link v-if="$store.state.auth.user" to="/perfil" class="btn btn-outline-primary w-100" @click.native="menu = false">Meu painel</router-link>
      </div>
    </div>

    <HeaderQuotationBar />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref(false);
</script>
