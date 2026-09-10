<template>
  <section v-if="destination" class="section">
    <div class="container">
      <NuxtLink to="/destinations" class="back-link">← Back to destinations</NuxtLink>

      <div class="detail">
        <AppImage
          :src="destination.image"
          :alt="destination.name"
          :width="destination.width"
          :height="destination.height"
          :widths="destination.widths"
          priority
          sizes="(min-width: 820px) 565px, calc(100vw - 24px)"
        />
        <div class="detail__content">
          <span class="badge">{{ destination.category }}</span>
          <h1>{{ destination.name }}</h1>
          <p class="location">📍 {{ destination.location }}</p>
          <p class="lead">{{ destination.description }}</p>

          <h2>Highlights</h2>
          <ul class="highlights">
            <li v-for="highlight in destination.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section v-else class="section">
    <div class="container empty-state">
      <h1>Destination not found</h1>
      <NuxtLink class="text-link" to="/destinations">Return to destinations →</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { getDestination } from '~/data/destinations'
const route = useRoute()
const destination = getDestination(Number(route.params.id))

if (!destination) {
  throw createError({ statusCode: 404, statusMessage: 'Destination not found' })
}

useSeoMeta({
  title: `${destination.name} | Pangasinan Heritage`,
  description: destination.description
})
</script>