<template>
  <picture>
    <source type="image/avif" :srcset="srcsetFor('avif')" :sizes="sizes" />
    <source type="image/webp" :srcset="srcsetFor('webp')" :sizes="sizes" />
    <img
      :src="fallbackSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : 'auto'"
      :decoding="priority ? 'sync' : 'async'"
    />
  </picture>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  src: string
  alt: string
  width: number
  height: number
  /** Variant widths generated alongside the source image. */
  widths: number[]
  /** Layout width hint so the browser can pick the smallest usable variant. */
  sizes?: string
  /** Set on above-the-fold images to load them eagerly at high priority. */
  priority?: boolean
}>(), {
  sizes: '100vw',
  priority: false
})

const assetUrl = useAssetUrl()

// "/images/bolinao.jpg" -> "/images/bolinao"
const stem = computed(() => props.src.replace(/\.[^.]+$/, ''))

const srcsetFor = (format: 'avif' | 'webp') =>
  props.widths.map(w => `${assetUrl(`${stem.value}-${w}.${format}`)} ${w}w`).join(', ')

const fallbackSrc = computed(() => assetUrl(`${stem.value}-fallback.jpg`))
</script>
