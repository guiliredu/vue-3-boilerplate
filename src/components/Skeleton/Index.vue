<template>
  <div class="skeleton" :class="[`skeleton-${type}`]"></div>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'text' },
});
</script>
