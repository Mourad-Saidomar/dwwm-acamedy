import { createRouter, createWebHashHistory } from 'vue-router'

// On importe chaque page que le router va gerer.
import HomeView from '../views/homeViews.vue'
import FormationView from '../views/formationViews.vue'
import FormationDetailView from '../views/FormationDetailView.vue'
import FavorisView from '../views/FavorisView.vue'
import ContactView from '../views/ContactViews.vue'

// On definit les routes : chemin URL -> composant a afficher.
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formations',
    name: 'formations',
    component: FormationView
  },
  {
    path: '/formations/:id',
    name: 'formation-detail',
    component: FormationDetailView
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
