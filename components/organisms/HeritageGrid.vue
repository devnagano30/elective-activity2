<template>
  <section class="heritage-grid">
    <HeritageCard
      v-for="(destination, index) in destinations"
      :key="destination.id"
      :destination="destination"
      :heading-level="headingLevel"
      :priority="index === 0"
    />
  </section>
</template>

<script setup lang="ts">
import type { Destination } from '~/data/destinations'

withDefaults(defineProps<{
  destinations: Destination[]
  headingLevel?: 2 | 3
}>(), {
  headingLevel: 3
})
</script>
