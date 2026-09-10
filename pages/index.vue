<template>
  <div>
    <section class="hero">
      <HeroBackground />
      <div class="container hero-content">
        <span class="eyebrow">EXPLORE • EXPERIENCE • PRESERVE</span>
        <h1>Discover the heritage and beauty of Pangasinan.</h1>
        <p>
          Explore iconic destinations, natural attractions, and cultural landmarks
          through a fast and mobile-friendly digital showcase.
        </p>
        <div class="hero-actions">
          <NuxtLink to="/destinations" class="app-button app-button--primary">Explore destinations</NuxtLink>
          <NuxtLink to="/about" class="app-button app-button--ghost">About the project</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="eyebrow">FEATURED DESTINATION</span>
            <h2>Start with Balungao Hot Spring</h2>
          </div>
          <NuxtLink class="text-link" to="/destinations/1">View details →</NuxtLink>
        </div>
        <HeritageCard :destination="featured" />
      </div>
    </section>

    <section class="section section--muted">
      <div class="container">
        <span class="eyebrow">WHY THIS SHOWCASE</span>
        <h2>Made for curious travelers.</h2>
        <div class="feature-list">
          <div><span class="feature-number">01</span><h3>Fast</h3><p>Lightweight pages designed with mobile data use in mind.</p></div>
          <div><span class="feature-number">02</span><h3>Responsive</h3><p>A mobile-first layout that adapts to tablets and desktops.</p></div>
          <div><span class="feature-number">03</span><h3>Accessible</h3><p>Clear hierarchy, readable text, labels, and keyboard-friendly controls.</p></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { destinations } from '~/data/destinations'
const featured = destinations[0]
</script>