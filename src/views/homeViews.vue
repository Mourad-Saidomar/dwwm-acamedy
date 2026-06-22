<script setup>
import { formations } from '../data/formations.js'
import FormationCard from '../components/formationCard.vue'
import AvantageCard from '../components/AvantageCard.vue'

const formationsEnAvant = formations.slice(0, 3)

const avantages = [
  {
    titre: 'Formations pratiques',
    description: 'HTML, CSS, JavaScript, Vue.js et Bootstrap. Du concret, du code, des projets reels.'
  },
  {
    titre: 'Progression claire',
    description: 'Parcours adaptes aux debutants, avec une montee en competences progressive.'
  },
  {
    titre: 'Suivi personnalise',
    description: 'Le centre accompagne chaque apprenant dans son projet professionnel.'
  }
]

const technologies = [
  {
    nom: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    nom: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  {
    nom: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
  },
  {
    nom: 'Vue.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg'
  },
  {
    nom: 'Bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
  },
  {
    nom: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  },
  {
    nom: 'Node.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
  },
  {
    nom: 'Vite',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
  }
]

const outils = [
  {
    nom: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    nom: 'PHP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
  },
  {
    nom: 'Laravel',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg'
  },
  {
    nom: 'MySQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    nom: 'MongoDB',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  },
  {
    nom: 'Figma',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
  },
  {
    nom: 'VS Code',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
  },
  {
    nom: 'GitHub',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
  }
]

</script>

<template>
  <main>
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5 py-lg-5">
          <div class="col-lg-6">
            <span class="badge text-bg-success mb-3">Centre de formation</span>

            <h1 class="display-4 fw-bold mb-3">
              Apprends a coder,<br>
              <span class="text-success-emphasis">lance ta carriere.</span>
            </h1>

            <p class="lead text-secondary mb-4">
              Des formations pratiques en HTML, CSS, JavaScript et Vue.js,
              adaptees aux debutants comme aux profils intermediaires.
            </p>

            <div class="d-flex flex-wrap gap-3">
              <RouterLink to="/formations" class="btn btn-success fw-semibold">
                Voir les formations
              </RouterLink>
              <RouterLink to="/contact" class="btn btn-outline-success">
                Contacter le centre
              </RouterLink>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card overflow-hidden">
              <div class="card-body p-4 py-5">
                <div class="overflow-hidden">
                  <div class="tech-track">
                    <div
                      class="tech-logo card"
                      v-for="(technologie, index) in [...technologies, ...technologies]"
                      :key="technologie.nom + index"
                    >
                      <div class="card-body text-center">
                        <img
                          :src="technologie.image"
                          :alt="'Logo ' + technologie.nom"
                          class="tech-logo-image mb-2"
                        >
                        <p class="mb-0 fw-semibold">{{ technologie.nom }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="overflow-hidden mt-3">
                  <div class="tech-track tech-track-reverse">
                    <div
                      class="tech-logo card"
                      v-for="(outil, index) in [...outils, ...outils]"
                      :key="outil.nom + index"
                    >
                      <div class="card-body text-center">
                        <img
                          :src="outil.image"
                          :alt="'Logo ' + outil.nom"
                          class="tech-logo-image mb-2"
                        >
                        <p class="mb-0 fw-semibold">{{ outil.nom }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-5">
      <div class="row g-4 mb-5">
        <div class="col-md-4" v-for="avantage in avantages" :key="avantage.titre">
          <AvantageCard :avantage="avantage" />
        </div>
      </div>

      <hr class="border-success-subtle my-5">

      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <p class="text-success fw-bold text-uppercase small mb-1">Selection</p>
          <h2 class="h3 mb-0">Formations en avant</h2>
        </div>

        <RouterLink to="/formations" class="btn btn-outline-success btn-sm rounded-5">
          Tout le catalogue <i class="bi bi-arrow-right"></i>
        </RouterLink>
      </div>

      <div class="row g-4">
        <div class="col-lg-4 col-md-6" v-for="formation in formationsEnAvant" :key="formation.id">
          <FormationCard :formation="formation" />
        </div>
      </div>
    </section>
  </main>
</template>
