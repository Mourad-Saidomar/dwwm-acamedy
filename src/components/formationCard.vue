<script setup>
import { useFavorisStore } from '../stores/favoris.js'

defineProps({
    formation: {
        type: Object,
        required: true
    }
})

const favorisStore = useFavorisStore()

function getNiveauBadge(niveau) {
    if (niveau === 'Intermediaire') return 'text-bg-warning'
    if (niveau === 'Tous niveaux') return 'text-bg-light'
    return 'text-bg-success'
}
</script>

<template>
    <div class="card rounded-5 h-100">
        <img :src="formation.image" class="card-img-top formation-image rounded-top-5 p-4" :alt="formation.titre">

        <div class="card-body d-flex flex-column">
            <h2 class="h5 card-title">{{ formation.titre }}</h2>
            <p class="card-text text-secondary">{{ formation.description }}</p>

            <div class="d-flex flex-wrap gap-2 mb-4">
                <span class="badge rounded-5" :class="getNiveauBadge(formation.niveau)">
                    {{ formation.niveau }}  
                </span>
                <span class="badge text-bg-dark rounded-5">{{ formation.prix }} euros</span>
                <span class="badge text-bg-secondary rounded-5">{{ formation.duree }}</span>
            </div>

            <div class="d-flex gap-2 flex-wrap mt-auto">
                <RouterLink :to="'/formations/' + formation.id" class="btn btn-success btn-sm rounded-5">
                    Voir le detail
                </RouterLink>

                <button
                    class="btn btn-sm btn-favori rounded-5"
                    :class="{ 'btn-favori-actif': favorisStore.estFavori(formation.id) }"
                    type="button"
                    @click="favorisStore.ajouterOuRetirer(formation.id)"
                    >

                    <span v-if="favorisStore.estFavori(formation.id)">&hearts;</span>
                    <span v-else>&#9825;</span>
                    {{ favorisStore.estFavori(formation.id) ? 'Favori' : 'Ajouter' }}
                </button>
            </div>
        </div>
    </div>
</template>
