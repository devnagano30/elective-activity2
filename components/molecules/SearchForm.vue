<template>
  <form class="search-form" @submit.prevent="$emit('search', query)">
    <label for="destination-search">Search destinations</label>
    <div class="search-form__row">
      <input
        id="destination-search"
        v-model="query"
        type="search"
        placeholder="Search Pangasinan destinations..."
      />
      <AppButton type="submit">
        <AppIcon icon="⌕" /> Search
      </AppButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const query = ref('')
defineEmits<{ search: [value: string] }>()
</script>