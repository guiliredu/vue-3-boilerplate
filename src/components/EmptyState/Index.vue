<template>
  <div>
    <div class="text-center display-1 mb-2 text-info">
      <i class="fas" :class="[icon]"></i>
    </div>
    <h5 class="mb-0 text-info">{{ title }}</h5>
    <p class="mb-0 mt-2">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  icon: { type: String, default: 'fa-times-circle' },
});
</script>
