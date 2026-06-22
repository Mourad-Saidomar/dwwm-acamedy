const imagesFormation = {
  developpeurWeb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  htmlCss: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  frontEnd: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  dwwm: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
}

export const formations = [
  {
    id: 1,
    titre: 'Developpeur Web',
    description: 'Apprendre a creer des sites web avec HTML, CSS, JavaScript et Vue.js.',
    duree: '6 mois',
    niveau: 'Debutant',
    prix: 1200,
    image: imagesFormation.developpeurWeb
  },
  {
    id: 2,
    titre: 'HTML et CSS',
    description: 'Comprendre les bases pour construire et mettre en forme une page web.',
    duree: '4 semaines',
    niveau: 'Debutant',
    prix: 300,
    image: imagesFormation.htmlCss
  },
  {
    id: 3,
    titre: 'JavaScript Debutant',
    description: 'Ajouter de l interaction dans une page avec les variables, fonctions et evenements.',
    duree: '5 semaines',
    niveau: 'Debutant',
    prix: 450,
    image: imagesFormation.javascript
  },
  {
    id: 4,
    titre: 'Vue.js',
    description: 'Creer une application simple avec les composants, les props et le router.',
    duree: '6 semaines',
    niveau: 'Intermediaire',
    prix: 650,
    image: imagesFormation.vue
  },
  {
    id: 5,
    titre: 'Bootstrap',
    description: 'Construire rapidement une interface responsive avec les classes Bootstrap.',
    duree: '2 semaines',
    niveau: 'Debutant',
    prix: 250,
    image: imagesFormation.bootstrap
  },
  {
    id: 6,
    titre: 'Git et GitHub',
    description: 'Sauvegarder son code, travailler en equipe et publier un projet.',
    duree: '2 semaines',
    niveau: 'Debutant',
    prix: 200,
    image: imagesFormation.git
  },
  {
    id: 7,
    titre: 'Projet Front-End',
    description: 'Realiser une application front-end complete avec une navigation et des pages.',
    duree: '8 semaines',
    niveau: 'Intermediaire',
    prix: 900,
    image: imagesFormation.frontEnd
  },
  {
    id: 8,
    titre: 'Preparation DWWM',
    description: 'Revoir les bases importantes pour preparer le titre professionnel DWWM.',
    duree: '3 mois',
    niveau: 'Tous niveaux',
    prix: 1000,
    image: imagesFormation.dwwm
  }
]
