<template>
  <picture class="hero__bg">
    <source type="image/avif" :srcset="srcsetFor('avif')" sizes="100vw" />
    <source type="image/webp" :srcset="srcsetFor('webp')" sizes="100vw" />
    <!-- Decorative: the hero text carries the meaning, so alt stays empty. -->
    <img
      :src="assetUrl('/images/hero-bg-1024.webp')"
      alt=""
      width="1140"
      height="593"
      loading="eager"
      fetchpriority="high"
      decoding="sync"
    />
  </picture>
</template>

<script setup lang="ts">
// Rendered as an <img> rather than a CSS background so the browser's preload
// scanner discovers the LCP image while HTML is still streaming, instead of
// waiting for the stylesheet to parse.
const WIDTHS = [480, 640, 800, 1024, 1140]

const assetUrl = useAssetUrl()

const srcsetFor = (format: 'avif' | 'webp') =>
  WIDTHS.map(w => `${assetUrl(`/images/hero-bg-${w}.${format}`)} ${w}w`).join(', ')
</script>
