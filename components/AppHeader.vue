<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-6 py-4 relative z-10">
      <div class="flex items-center justify-between h-20">
        <!-- Logo et Nom -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img 
              class="h-16 w-16 rounded-full shadow-md transform hover:scale-105 transition duration-300" 
              src="/images/logo.png" 
              alt="NO-Money Just QR-Code" 
            />
            <span class="text-[#0070BA] font-extrabold text-2xl tracking-wide drop-shadow-lg">GogoSoft</span>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
          <NuxtLink to="/features" class="nav-link">Fonctionnalités</NuxtLink>
          <NuxtLink to="/pricing" class="nav-link">Tarifs</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="inline-flex items-center bg-gray-100 rounded-full p-1 space-x-2">
          <!-- Bouton Connexion -->
          <button
            :class="[
              'px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2',
              activeButton === 'monthly' ? 'bg-primary text-white' : 'bg-white text-gray-700'
            ]"
            @click="setActiveButton('monthly')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            <span class="md:inline hidden">Connexion</span>
          </button>

          <!-- Bouton Inscription -->
          <button
            :class="[
              'px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2',
              activeButton === 'yearly' ? 'bg-primary text-white' : 'bg-white text-gray-700'
            ]"
            @click="setActiveButton('yearly')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span class="md:inline hidden">Inscription</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Référence pour stocker le bouton actif
const activeButton = ref('monthly'); // Par défaut, "Connexion" est active

// Utilisation du routeur pour la navigation
const router = useRouter();

// Fonction pour définir le bouton actif et naviguer
const setActiveButton = (button: string) => {
  activeButton.value = button;

  // Navigation vers la page correspondante
  if (button === 'monthly') {
    router.push('/login'); // Redirige vers la page de connexion
  } else if (button === 'yearly') {
    router.push('/register'); // Redirige vers la page d'inscription
  }
};
</script>

<style scoped>
/* Styles des liens */
.nav-link {
  @apply text-gray-700 font-medium hover:text-[#0070BA] transition duration-300 transform hover:scale-105;
}

/* Boutons */
.btn {
  @apply px-5 py-2 rounded-lg font-semibold shadow-md transition duration-300;
}

.btn-primary {
  @apply bg-[#0070BA] text-white hover:bg-blue-600;
}

.btn-outline {
  @apply border border-[#0070BA] text-[#0070BA] hover:bg-[#0070BA] hover:text-white;
}
</style>