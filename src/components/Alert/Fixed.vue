<template>
  <div v-if="alerts.alert.show" :class="`alert-${alerts.alert.type}`" class="alert alert-fixed alert-shadow fade show" >
    <i :class="{'fas fa-check-circle': ['success'].includes( alerts.alert.type ), 'fas fa-exclamation-circle': ['warning', 'info'].includes( alerts.alert.type ), 'fas fa-times-circle': alerts.alert.type == 'danger', }" ></i>
    {{ alerts.alert.message }}
  </div>
</template>

<script setup>
import { useAlertStore } from '@/stores/alerts';
const alerts = useAlertStore();
</script>
