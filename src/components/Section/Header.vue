<template>
  <section class="header pb-2 pt-6 mb-4">
    <div class="bg" :style="{backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('${background}')`}"></div>

    <div class="content position-relative">
      <h1 class="text-white mb-2">{{ title }}</h1>
      <p v-if="subtitle" class="text-white text mb-2">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  background: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: null },
})
</script>

<style lang="scss" scoped>
.header {
  position:relative;
  .bg {
    position:absolute;
    top:calc(0px - 2rem);
    height:calc(100% + 1.5rem);
    width:calc(100vw - 16px);
    left:50%;
    transform:translateX(-50%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;

    @media (max-width: 480px) {
      width:100vw;
    }

    @media (min-width: 768px) {
      height:120px;
    }
  }
}
</style>
