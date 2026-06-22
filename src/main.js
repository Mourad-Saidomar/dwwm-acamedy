import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/style.css'
import App from './App.vue'
import router from './router/index.js'

// On cree l'application Vue.
const app = createApp(App)

// On branche Pinia pour gerer les favoris.
app.use(createPinia())

// On branche le router pour naviguer entre les pages.
app.use(router)

// On affiche l'application dans la page HTML.
app.mount('#app')
