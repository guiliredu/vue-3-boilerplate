<template>
  <div v-if="show" :class="`alert-${type}`" class="alert" role="alert">
    <div class="row align-items-center">
      <div class="col-12">
        <h4 class="mb-2" :class="[`text-${type == 'secondary' ? 'primary' : type}`]"><i v-if="icon" class="fas" :class="[icon]"></i> {{ title }}</h4>
        <p v-if="text" class="mb-2" :class="[`text-${type == 'secondary' ? 'primary' : type}`]">{{ text }}</p>
        <slot></slot>
      </div>
      <div class="col-12 col-md-auto">
        <router-link v-if="link" :to="link" class="btn btn-sm w-100 mt-2" :class="[`btn-${type}`]">{{ linkText }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    show: { type: Boolean, default: true },
    type: { type: String, default: 'info' },
    icon: { type: String, default: null },
    title: { type: String, default: '' },
    text: { type: String, default: null },
    link: { type: String, default: null },
    linkText: { type: String, default: null },
  })
</script>
