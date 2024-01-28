<template>
  <Modal v-if="show" :show="show" :title="title" size="modal-md" @close="$emit('cancel')">
    <p v-if="text">{{ text }}</p>

    <slot></slot>

    <div class="text-end">
      <button class="btn btn-outline-danger" @click="$emit('cancel')" :disabled="loading">{{ cancelText }}</button>
      <button class="btn btn-primary" @click="$emit('success')" :disabled="loading">{{ successText }}</button>
    </div>
  </Modal>
</template>

<script setup>
  defineProps({
    show: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    type: { type: String, default: 'secondary' },
    title: { type: String, default: 'Confirmar' },
    text: { type: String, default: null },
    successText: { type: String, default: 'Confirmar' },
    cancelText: { type: String, default: 'Cancelar' },
  });
</script>
