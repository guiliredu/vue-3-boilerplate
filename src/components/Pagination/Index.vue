<template>
  <ul
    v-if="links.length > 1"
    v-bind="$attrs"
    class="pagination"
    style="overflow-x:scroll;"
    >
    <li v-for="(link, key) in links" :key="key" class="page-item pagination-page-nav" :class="{ 'active': link.active }">
      <router-link v-if="link.label.length <= 3" class="page-link" :to="`${$route.path}?page=${link.label}`"> {{ link.label }} </router-link>
    </li>
</ul>
</template>

<script setup>
defineProps({
  links: { type: Array, default: () => [] }
})
</script>
