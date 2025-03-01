<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="~/assets/images/logo-white.svg" alt="NO-Money Just QR-Code" class="h-10 mb-4" />
          <p class="text-gray-400">Simplifiez la gestion de votre cantine et transport scolaire avec notre solution QR Code.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Accueil</NuxtLink></li>
            <li><NuxtLink to="/features" class="text-gray-400 hover:text-white">Fonctionnalités</NuxtLink></li>
            <li><NuxtLink to="/pricing" class="text-gray-400 hover:text-white">Tarifs</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-400 hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Légal</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/terms" class="text-gray-400 hover:text-white">Conditions d'utilisation</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="text-gray-400 hover:text-white">Politique de confidentialité</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <p class="text-gray-400">Email: contact@nomoney-qrcode.com</p>
          <p class="text-gray-400">Téléphone: +225 07 58 96 61 56</p>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} NO-Money Just QR-Code. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
