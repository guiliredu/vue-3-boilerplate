<template>
  <main>
    <router-view :key="$route.fullPath"></router-view>

    <AlertFixed />
    <AlertLoading />
  </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
