<template>
  <footer class="site-footer mt-5 py-4">
    <div class="container">
      <div class="row align-items-center g-3">
        <div class="col-md-6">
          <p class="fw-bold mb-1 text-success">DWWM Academy</p>
          <p class="text-secondary mb-0">
            Centre de formation au developpement web.
          </p>
        </div>

        <div class="col-md-6">
          <div class="d-flex flex-wrap justify-content-md-end gap-2">
            <RouterLink to="/" class="footer-link">Accueil</RouterLink>
            <RouterLink to="/formations" class="footer-link">Formations</RouterLink>
            <RouterLink to="/favoris" class="footer-link">Favoris</RouterLink>
            <RouterLink to="/contact" class="footer-link">Contact</RouterLink>
          </div>
        </div>
      </div>

      <hr class="border-success-subtle my-4">

      <p class="text-secondary small mb-0 text-center">
        2026 - DWWM Academy
      </p>
    </div>
  </footer>
</template>
