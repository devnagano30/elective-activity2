<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="brand">
        <span class="brand-mark">PH</span>
        <span>
          <strong>Pangasinan Heritage</strong>
          <small>Digital Showcase</small>
        </span>
      </NuxtLink>

      <button class="menu-button" aria-label="Toggle navigation" :aria-expanded="open" @click="open = !open">
        ☰
      </button>

      <nav class="main-nav" :class="{ 'main-nav--open': open }">
        <NavigationItem label="Home" to="/" @click="open = false" />
        <NavigationItem label="Destinations" to="/destinations" @click="open = false" />
        <NavigationItem label="About Pangasinan" to="/about" @click="open = false" />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
</script>