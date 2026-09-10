<template>
  <button
    :class="['app-button', `app-button--${variant}`]"
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
}>(), {
  variant: 'primary',
  type: 'button'
})

defineEmits<{ click: [] }>()
</script>