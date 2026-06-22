<script setup>
defineProps({
  avantage: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card h-100 rounded-5 ps-3">
    <div class="card-body">
      <h2 class="h5 card-title">{{ avantage.titre }}</h2>
      <p class="card-text text-secondary">
        {{ avantage.description }}
      </p>
    </div>
  </div>
</template>
