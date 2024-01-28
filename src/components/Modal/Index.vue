<template>
  <div
    v-if="show"
    class="modal"
    :class="[{ 'show d-block': show }]"
    tabindex="-1"
    aria-modal="true"
    role="dialog"
  >
    <div class="modal-bg animate__animated animate__faster animate__fadeIn show" @click="close()"></div>
    <div class="modal-dialog">
      <div class="modal-content animate__animated animate__faster animate__fadeInUp" :class="[contentBg]">
        <div class="modal-header">
          <h3 class="h6 modal-title fw-normal">{{ title }}</h3>
          <button class="btn btn-light btn-sm py-0" type="button" data-bs-dismiss="modal" aria-label="Close" @click="close()" >
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="modal-body pt-0">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

defineProps({
  title: { type: String, default: '' },
  contentBg: { type: String, default: 'bg-white' },
  show: { type: Boolean, default: false },
});

watch(this.show, async (newValue) => {
  if (newValue) {
    this.toggleBodyClass('add', 'modal-open')
  } else {
    this.toggleBodyClass('remove', 'modal-open')
  }
})

const close = () => {
  emit('close')
}

const toggleBodyClass = (type, className) => {
  const el = document.body

  if (type === 'add') {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}
  
onMounted(() => {
  toggleBodyClass('add', 'modal-open')
})

onUnmounted(() => {
  toggleBodyClass('remove', 'modal-open')
})
</script>
