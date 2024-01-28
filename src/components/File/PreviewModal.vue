<template>
  <Modal :show="show" title="Visualizar arquivo" @close="$emit('close')">
    <!-- Image -->
    <img v-if="type == 'image'" :src="file.file_path" class="w-100">

    <!-- Iframe -->
    <iframe v-if="type == 'iframe'" :src="file.file_path" frameborder="0" class="w-100 h-420"></iframe>

    <!-- Office apps -->
    <iframe v-if="type == 'office'" :src="`https://view.officeapps.live.com/op/embed.aspx?src=${file.file_path}`" frameborder="0" class="w-100 h-420"></iframe>

    <!-- Video -->
    <video v-if="type == 'video'" autoplay playsinline controls class="w-100" style="aspect-ratio: 16/9;">
        <source :src="file.file_path" :type="file.type">
    </video>
  </Modal>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  file: { type: Object, default: null },
  show: { type: Boolean, default: false },
});

const type = computed(() => {
  if (!this.file) {
    return null;
  }

  if (!this.file.type) {
    return null;
  }

  if (this.file.type.includes('image')) {
    return 'image';
  }

  if (this.file.type.includes('video')) {
    return 'video';
  }

  if (this.file.type.includes('audio')) {
    return 'video';
  }

  if (this.file.type.includes('pdf')) {
    return 'iframe';
  }

  if (
    this.file.type.includes('word')
    || this.file.type.includes('excel')
    || this.file.type.includes('powerpoint')
    || this.file.type.includes('csv')
  ) {
    return 'office';
  }

  if (this.file.type.includes('text')) {
    return 'iframe';
  }

  return 'icon';
}) 
</script>
