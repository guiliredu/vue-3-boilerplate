<template>
  <div class="mb-4 px-4 py-3 bg-white rounded shadow-sm">
    <div class="form-header" @click="toggle = !toggle">
      <div class="row align-items-center">
        <div class="col">
          <p v-if="subtitle" class="small text-muted mb-0">{{ subtitle }}</p>
          <h6 v-if="title" class="mb-0">{{ title }}</h6>
          <div>
            <span v-for="(label, i) in labels" :key="i" class="badge bg-secondary text-muted fw-light me-2">{{ label }}</span>
          </div>
        </div>

        <div v-if="icon" class="col-auto">
          <i class="text-muted" :class="[icon]"></i>
        </div>
      </div>
    </div>

    <div v-if="toggle" class="form-body pt-3 mt-3 border-top border-secondary">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  icon: { type: String, default: null },
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
  labels: { type: Array, default: () => ([]) },
});

const toggle = ref(false);
</script>
