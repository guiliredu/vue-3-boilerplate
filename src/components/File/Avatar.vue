<template>
  <div class="avatar" :class="[`avatar-${size}`]" :data-tooltip="tooltip">
    <img v-if="image" :src="file.thumb" :alt="file.file" class="avatar-img rounded">
    <div v-else class="avatar-title rounded" ><i :class="[file.icon]"></i></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  file: { type: Object, default: () => {} },
  size: { type: String, default: '' },
  tooltip: { type: String, default: null },
});

const image = computed(() => {
  return ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/bmp'].includes(this.file.type);
})
</script>
