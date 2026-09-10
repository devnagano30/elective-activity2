<template>
  <NuxtLink :to="to" class="nav-link" :class="{ active: active }">
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  to: string
  active?: boolean
}>()
</script>