import { defineStore } from 'pinia'

export const useFavorisStore = defineStore('favoris', {
  state: () => ({
    favoris: []
  }),

  actions: {
    ajouterOuRetirer(id) {
      if (this.favoris.includes(id)) {
        this.favoris = this.favoris.filter(favoriId => favoriId !== id)
      } else {
        this.favoris.push(id)
      }
    },

    estFavori(id) {
      return this.favoris.includes(id)
    }
  }
})
