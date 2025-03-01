<template>
  <div>
    <!-- Hero Section -->
    <section class="py-12 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-8 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">NO-Money Just QR-Code</h1>
            <p class="text-xl mb-6">Simplifiez la gestion de votre cantine et transport scolaire avec notre solution QR Code innovante.</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <NuxtLink to="/register" class="btn bg-white text-primary hover:bg-gray-100">Commencer maintenant</NuxtLink>
              <NuxtLink to="/features" class="btn border border-white text-white hover:bg-white hover:text-primary">En savoir plus</NuxtLink>
            </div>
          </div>
          <div class="md:w-1/2">
            <img src="~/assets/images/hero-image.svg" alt="NO-Money Just QR-Code" class="w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Notre solution offre une gestion complète et sécurisée pour les cantines et transports scolaires.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">QR Code unique</h3>
            <p class="text-gray-600">Chaque élève reçoit un QR Code unique pour accéder à la cantine et au transport scolaire.</p>
          </div>

          <div class="card text-center">
            <div class="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Paiements en ligne</h3>
            <p class="text-gray-600">Rechargez le compte de vos enfants en ligne avec plusieurs moyens de paiement sécurisés.</p>
          </div>

          <div class="card text-center">
            <div class="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Suivi en temps réel</h3>
            <p class="text-gray-600">Suivez en temps réel les consommations de repas et les trajets effectués par vos enfants.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Un processus simple et efficace pour tous les utilisateurs.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <span class="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Inscription</h3>
            <p class="text-gray-600">Créez un compte pour votre établissement ou en tant que parent.</p>
          </div>

          <div class="text-center">
            <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <span class="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Configuration</h3>
            <p class="text-gray-600">Ajoutez vos élèves et générez leurs QR Codes uniques.</p>
          </div>

          <div class="text-center">
            <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <span class="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Rechargement</h3>
            <p class="text-gray-600">Rechargez le compte de vos enfants en ligne.</p>
          </div>

          <div class="text-center">
            <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <span class="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Utilisation</h3>
            <p class="text-gray-600">Les élèves utilisent leur QR Code pour la cantine et le transport.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Prêt à simplifier votre gestion scolaire ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Rejoignez les établissements qui font confiance à NO-Money Just QR-Code pour leur gestion quotidienne.</p>
        <NuxtLink to="/register" class="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">Commencer gratuitement</NuxtLink>
      </div>
    </section>
  </div>
</template>