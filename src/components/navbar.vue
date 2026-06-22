<script setup>
import { computed, ref } from 'vue'
import { useFavorisStore } from '../stores/favoris.js'

const favorisStore = useFavorisStore()
const menuOuvert = ref(false)

const nombreFavoris = computed(() => {
  return favorisStore.favoris.length
})

function fermerMenu() {
  menuOuvert.value = false
}
</script>

<template>
  <nav class="navbar navbar-expand-lg py-3 sticky-top">
    <div class="container">
      <RouterLink to="/" class="glass-effect px-3 rounded-5 navbar-brand fw-bold">
        DWWM Academy
      </RouterLink>

      <button
        class="navbar-toggler glass-effect"
        type="button"
        aria-label="Ouvrir le menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" :class="{ show: menuOuvert }">
        <div class="navbar-nav gap-2 glass-effect px-2 p-1 rounded-5 mt-3 mt-lg-0">
          <RouterLink to="/" class="nav-link px-3 rounded-5" @click="fermerMenu">
            Accueil
          </RouterLink>

          <RouterLink to="/formations" class="nav-link px-3 rounded-5" @click="fermerMenu">
            Formations
          </RouterLink>

          <RouterLink to="/contact" class="nav-link px-3 rounded-5" @click="fermerMenu">
            Contact
          </RouterLink>

          <RouterLink to="/favoris" class="nav-link px-3 rounded-5" @click="fermerMenu">
            Favoris
            <span class="glass-effect rounded-2 px-2 py-1 ms-1">
              {{ nombreFavoris }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
