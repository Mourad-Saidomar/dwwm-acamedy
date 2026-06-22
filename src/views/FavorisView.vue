<script setup>
import { computed } from 'vue'
import { formations } from '../data/formations.js'
import { useFavorisStore } from '../stores/favoris.js'
import FavorisCard from '../components/FavorisCard.vue'

const favorisStore = useFavorisStore()

const formationsFavorites = computed(() => {
  return formations.filter(f => favorisStore.favoris.includes(f.id))
})
</script>

<template>
  <main class="container py-5">
    <div class="mb-5">
      <p class="text-success fw-bold text-uppercase small mb-2">Selection personnelle</p>
      <h1 class="fw-bold">Mes favoris</h1>
      <p class="text-secondary mb-0">
        {{ formationsFavorites.length }} formation{{ formationsFavorites.length !== 1 ? 's' : '' }} sauvegardee{{ formationsFavorites.length !== 1 ? 's' : '' }}.
      </p>
    </div>

    <div v-if="formationsFavorites.length === 0" class="card text-center" style="max-width: 420px;">
      <div class="card-body p-5">
        <h2 class="h4">Aucun favori pour le moment</h2>
        <p class="text-secondary">Ajoutez des formations depuis le catalogue pour les retrouver ici.</p>
        <RouterLink to="/formations" class="btn btn-success">
          Explorer le catalogue
        </RouterLink>
      </div>
    </div>

    <div v-else class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="formation in formationsFavorites" :key="formation.id">
        <FavorisCard 
          :formation="formation" 
        />
      </div>
    </div>
  </main>
</template>
