<template>
  <div class="page-wrapper position-relative" :class="classes">
    <div class="container pt-5 pb-10 pb-md-5">
      <div v-if="$slots.header" class="position-fixed d-block w-100 px-4 bg-primary shadow-sm" style="top:0px; left:0px; z-index:1020;">
        <slot name="header"></slot>
      </div>

      <div class="row justify-content-center">
        <div class="col-12" :class="[size]">
          <slot></slot>
        </div>
      </div>

      <div v-if="$slots.buttons" class="position-fixed d-block w-100 p-4 bg-white rounded shadow-sm" style="bottom:0px; left:0px; z-index:1020;">
        <div class="row justify-content-center">
          <div class="col-12" :class="[size]">
            <slot name="buttons"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    classes: null,
    size: null,
  });
</script>

<style lang="scss" scoped>
</style>
