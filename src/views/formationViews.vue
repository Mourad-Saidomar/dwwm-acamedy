<script setup>
import { formations } from '../data/formations.js'
import FormationCard from '../components/formationCard.vue'
</script>

<template>
  <main class="container py-5">
    <div class="mb-5">
      <p class="text-success fw-bold text-uppercase small mb-2">Catalogue</p>
      <h1 class="fw-bold">Toutes les formations</h1>
      <p class="text-secondary mb-0">
        {{ formations.length }} formations disponibles au centre DWWM Academy.
      </p>
    </div>

    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="formation in formations" :key="formation.id">
        <FormationCard
          :formation="formation"
        />
      </div>
    </div>
  </main>
</template>
