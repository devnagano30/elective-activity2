<template>
  <component :is="tag" :class="['typography', `typography--${variant}`]">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3'
  variant?: 'body' | 'eyebrow' | 'title' | 'subtitle'
}>(), {
  tag: 'p',
  variant: 'body'
})
</script>