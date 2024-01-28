<template>
  <div class="form-group" :class="[margin]">
    <!-- Label -->
    <label
      v-if="label"
      class="form-label mb-1"
      :for="`input-${id || name}`"
      :class="[{ 'col-form-label-sm': small, 'col-form-label-lg': large }]"
      >{{ label }}</label>

    <!-- Input Group -->
    <div
      class="input-group input-group-merge"
      :class="[{ 'input-group-lg': large, 'input-group-sm': small }]"
    >
      <!-- Input -->
      <textarea
        v-bind="$attrs"
        :id="`input-${id || name}`"
        ref="textarea"
        :class="[
          {
            'fs-xs': small,
            'form-control-sm': small,
            'form-control-lg': small,
            'form-control-appended': icon != 'none',
            'is-invalid': status === 'danger',
            'is-focus': isFocus,
            'is-info': status === 'info',
            'is-valid': status === 'success',
            'is-warning': status === 'warning',
            'form-control-flush': flush,
          },
        ]"
        class="form-control"
        v-model="value"
        :name="name"
        :placeholder="placeholder"
        :rows="rows"
        :readonly="readonly"
        :tabindex="tabindex"
        :disabled="disabled"
        :required="required"
        :aria-label="label"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @keyup="$emit('keyup', $event)"
        @keydown="$emit('keydown', $event)"
      ></textarea>

      <!-- Icon -->
      <div v-if="icon != 'none'" class="input-group-append">
        <div class="input-group-text">
          <i class="ci" :class="[icon]"></i>
        </div>
      </div>
    </div>

    <!-- Help text -->
    <small v-if="help" class="form-text text-muted">{{ help }}</small>

    <!-- INvalid text -->
    <small v-if="invalid" class="form-text text-danger">{{ invalid }}</small>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['change', 'blur', 'focus', 'input', 'keyup', 'keydown'])

defineProps({
  label: { type: String, default: null },
  help: { type: String, default: null },
  id: { type: String, default: null },
  name: { type: String, default: null },
  autocomplete: { type: String, default: 'off' },
  disabled: Boolean,
  placeholder: { type: String, default: null },
  readonly: Boolean,
  status: { type: String, default: null },
  icon: { type: String, default: 'none' },
  tabindex: { type: String, default: null },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false },
  flush: { type: Boolean, default: false },
  rows: { type: String, default: '3' },
  margin: { type: String, default: 'mb-4' },
  invalid: { type: [String, Boolean], default: null },
  small: { type: Boolean, default: false },
  large: { type: Boolean, default: false },
});

const value = defineModel();

let isFocus = ref(false)

const handleBlur = (e) => {
  isFocus.value = false
  emit('blur', e)
  autoResize(e)
}
const handleFocus = (e) => {
  isFocus.value = true
  emit('focus', e)
  autoResize(e)
}
const handleInput = (e) => {
  emit('input', e.target.value)
  autoResize(e)
}
const autoResize = () => {
  // $refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`
}

onMounted(() => {
  autoResize()
})
</script>
