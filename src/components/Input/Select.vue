<template>
  <div class="form-group" :class="[margin]">
    <!-- Label -->
    <label
      v-if="label"
      class="form-label mb-1"
      :for="`input-${id || name}`"
      :class="[{ 'col-form-label-sm': small }]"
      >{{ label }}</label
    >

    <!-- Input Group -->
    <div
      class="input-group input-group-merge"
      :class="[{ 'input-group-lg': large, 'input-group-sm': small }]"
    >
      <!-- Input -->
      <select
        v-bind="$attrs"
        :id="`input-${id || name}`"
        :class="[
          {
            'form-control-appended': icon != 'none',
            'form-control-lg': large,
            'form-control-sm': small,
            'form-control-flush': flush,
            'is-invalid': status === 'danger',
            'is-focus': isFocus,
            'is-info': status === 'info',
            'is-valid': status === 'success',
            'is-warning': status === 'warning',
            'is-invalid': invalid !== null,
          },
        ]"
        class="form-control form-select"
        v-model="value"
        :name="name"
        :aria-label="label"
        :readonly="readonly"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        :tabindex="tabindex"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
      >
        <option value="">{{ placeholder }}</option>
        <option
          v-for="(option, key) in options"
          :key="key"
          :value="option.value || option"
        >
          {{ option.label || option }}
        </option>
      </select>

      <!-- <i class="ci-arrow-down input-icon"></i> -->

      <!-- Icon -->
      <div v-if="icon != 'none'" class="input-group-append">
        <div class="input-group-text">
          <i class="ci" :class="[icon]"></i>
        </div>
      </div>
    </div>

    <!-- Help text -->
    <small v-if="help" class="form-text text-muted">{{ help }}</small>

    <!-- Invalid text -->
    <small v-if="invalid" class="form-text text-danger">{{ invalid }}</small>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['change', 'blur', 'focus', 'input', 'keyup', 'keydown'])

defineProps({
  label: { type: String, default: null },
  help: { type: String, default: null },
  name: { type: String, default: null },
  id: { type: String, default: null },
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
  large: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  margin: { type: String, default: 'mb-4' },
  invalid: { type: [String, Boolean], default: null },
  money: { type: Boolean, default: false },
  options: {
    type: [Object, Array],
    default: () => [{ value: '', label: 'Selecione' }],
  },
  selected: { type: String, default: '' },
});
  
const value = defineModel();

let isFocus = ref(false);

function handleChange(e) {
  emit('change', e)
}
function handleBlur(e) {
  isFocus.value = false
  emit('blur', e)
}
function handleFocus(e) {
  isFocus.value = true
  emit('focus', e)
}
const handleInput = (e) => {
  emit('input', e.target.value)
}
</script>
