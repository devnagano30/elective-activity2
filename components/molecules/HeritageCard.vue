<template>
  <article class="heritage-card">
    <AppImage
      :src="destination.image"
      :alt="destination.name"
      :width="destination.width"
      :height="destination.height"
      :widths="destination.widths"
      :priority="priority"
      sizes="(min-width: 820px) 360px, calc(100vw - 24px)"
    />
    <div class="heritage-card__body">
      <span class="badge">{{ destination.category }}</span>
      <component :is="`h${headingLevel}`">{{ destination.name }}</component>
      <p class="location">📍 {{ destination.location }}</p>
      <p>{{ destination.description }}</p>
      <NuxtLink class="text-link" :to="`/destinations/${destination.id}`">
        Explore destination →
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Destination } from '~/data/destinations'

withDefaults(defineProps<{
  destination: Destination
  priority?: boolean
  /** Kept in step with the surrounding page so headings never skip a level. */
  headingLevel?: 2 | 3
}>(), {
  priority: false,
  headingLevel: 3
})
</script>
