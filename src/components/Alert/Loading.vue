<template>
  <div v-if="alerts.loading" class="modal" :class="{ 'show d-block': alerts.loading }" >
    <div class="modal-bg"></div>
    <div class="modal-dialog">
      <div class="content display-1 w-100 my-auto text-center">
        <i class="fas fa-sync fa-spin text-secondary"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAlertStore } from '@/stores/alerts';
const alerts = useAlertStore();
</script>
