<script setup>
import { ref } from 'vue'

const nom = ref('')
const email = ref('')
const message = ref('')
const erreur = ref('')
const confirmation = ref('')

function envoyerFormulaire() {
  erreur.value = ''
  confirmation.value = ''

  if (!nom.value || !email.value || !message.value) {
    erreur.value = 'Veuillez remplir tous les champs.'
    return
  }

  if (!email.value.includes('@')) {
    erreur.value = 'Veuillez saisir une adresse email valide.'
    return
  }

  confirmation.value = 'Votre message a bien envoyé.'
  nom.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <main class="container py-5">
    <div class="row justify-content-center">
      <div class="mb-5 col-lg-6 col-md-12">
        <p class="text-success fw-bold text-uppercase small mb-2">Contact</p>
        <h1 class="fw-bold">Contacter le centre</h1>
        <p class="text-secondary mb-0">
          Une question sur une formation ? Remplissez le formulaire ci-dessous.
        </p>
      </div>
      <div class="col-lg-6 col-md-12 mt-5 pt-4">
        <div class="card rounded-5">
          <div class="card-body p-4 p-md-5">
            <div v-if="erreur" class="alert alert-danger rounded-5">
              {{ erreur }}
            </div>

            <div v-if="confirmation" class="alert alert-success rounded-5">
              {{ confirmation }}
            </div>

            <form @submit.prevent="envoyerFormulaire">
              <div class="mb-3">
                <label class="form-label " for="nom">Nom complet</label>
                <input
                  id="nom"
                  v-model="nom"
                  type="text"
                  class="form-control rounded-5"
                  placeholder="Votre nom"
                >
              </div>

              <div class="mb-3">
                <label class="form-label" for="email">Adresse email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  class="form-control rounded-5"
                  placeholder="vous@exemple.com"
                >
              </div>

              <div class="mb-4">
                <label class="form-label" for="message">Message</label>
                <textarea
                  id="message"
                  v-model="message"
                  class="form-control rounded-5 pt-3"
                  rows="5"
                  placeholder="Decrivez votre demande..."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-success w-100 fw-semibold rounded-5">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
