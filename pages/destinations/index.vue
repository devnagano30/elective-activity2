<template>
  <section class="section">
    <div class="container">
      <span class="eyebrow">PANGASINAN DESTINATIONS</span>
      <h1>Places worth discovering</h1>
      <p class="lead">Browse selected tourism and heritage destinations from Pangasinan.</p>

      <SearchForm @search="search = $event" />

      <div v-if="filtered.length" class="mt">
        <HeritageGrid :destinations="filtered" :heading-level="2" />
      </div>
      <div v-else class="empty-state">
        <h2>No destinations found</h2>
        <p>Try another search term.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { destinations } from '~/data/destinations'
const search = ref('')

const filtered = computed(() => {
  const term = search.value.trim().toLowerCase()
  if (!term) return destinations
  return destinations.filter(item =>
    [item.name, item.location, item.category, item.description].some(value =>
      value.toLowerCase().includes(term)
    )
  )
})
</script>