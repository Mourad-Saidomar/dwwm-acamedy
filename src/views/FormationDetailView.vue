<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { formations } from '../data/formations.js'
import { useFavorisStore } from '../stores/favoris.js'

const route = useRoute()
const favorisStore = useFavorisStore()

const formation = computed(() => {
  const id = Number(route.params.id)
  return formations.find(item => item.id === id)
})

function getNiveauBadge(niveau) {
  if (niveau === 'Intermediaire') return 'text-bg-warning'
  if (niveau === 'Tous niveaux') return 'text-bg-light'
  return 'text-bg-success'
}
</script>

<template>
  <main class="container py-5">
      <RouterLink to="/formations" class="btn btn-outline-success btn-sm mb-4">
        Retour au catalogue
      </RouterLink>

      <div class="row g-4 align-items-start">
        <div class="col-lg-4">
          <div class="card mb-3">
            <div class="card-body text-center">
              <img :src="formation.image" :alt="formation.titre" class="img-fluid detail-image">
            </div>
          </div>

          <button
            class="btn btn-favori rounded-5"
            :class="{ 'btn-favori-actif': favorisStore.estFavori(formation.id) }"
            type="button"
            @click="favorisStore.ajouterOuRetirer(formation.id)"
          >
            <span v-if="favorisStore.estFavori(formation.id)">&hearts;</span>
            <span v-else>&#9825;</span>
            {{ favorisStore.estFavori(formation.id) ? 'Retirer des favoris' : 'Ajouter aux favoris' }}
          </button>
        </div>

        <div class="col-lg-8">
          <p class="text-success fw-bold text-uppercase small mb-2">Detail de la formation</p>
          <h1 class="fw-bold mb-3">{{ formation.titre }}</h1>
          <p class="lead text-secondary mb-4">{{ formation.description }}</p>

          <div class="row d-flex justify-content-between mb-5">
            <div class="col-lg-3 col-md-6">
              <div class="text-center glass-effect py-1 rounded-5 d-flex justify-content-around m-2">
                <strong>Duree</strong>
                <span>{{ formation.duree }}</span>
              </div>
            </div>
 
            <div class="col-lg-3 col-md-6">
              <div class="text-center glass-effect py-1 rounded-5 d-flex justify-content-around m-2">
                <strong>Niveau</strong>
                <span class="badge d-flex align-items-center rounded-5" :class="getNiveauBadge(formation.niveau)">
                  {{ formation.niveau }}
                </span>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="text-center glass-effect py-1 rounded-5 d-flex justify-content-around m-2">
                <strong>Prix</strong>
                <span class="badge text-bg-dark d-flex align-items-center rounded-5">{{ formation.prix }} euros</span>
              </div>
            </div>

          </div>
        </div>
      </div>
  </main>
</template>
