<template>
  <nav aria-label="breadcrumb" class="mb-1">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/" class="fs-xs text-muted">Início</a></li>
      <li v-for="(link, index) in links" :key="index" class="breadcrumb-item">
        <a :href="link.url" class="fs-xs text-muted" :class="{'fw-bold' : index == links.length - 1}">{{ link.title }}</a>
      </li>
    </ol>
  </nav>
</template>

<script setup>
  defineProps({
    links: { type: Array, default: () => [] }
  })
</script>
