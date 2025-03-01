<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <!-- Effet de vague -->
    <!-- <div class="absolute inset-x-0 -bottom-3">
      <svg class="w-full h-6 text-primary" viewBox="0 0 1440 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,272C480,277,600,267,720,250.7C840,235,960,213,1080,186.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div> -->

    <div class="container mx-auto px-6 py-4 relative z-10">
      <div class="flex items-center justify-between h-20">
        <!-- Logo et Nom -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img class="h-16 w-16 rounded-full shadow-md transform hover:scale-105 transition duration-300" src="~/assets/images/logo1.png" alt="NO-Money Just QR-Code" />
            <span class="text-[#0070BA] font-extrabold text-2xl tracking-wide drop-shadow-lg">GogoSoft & Familly</span>
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
            <span>Connexion</span>
            <svg v-if="activeButton === 'monthly'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>

          <!-- Bouton Inscription -->
          <button
            :class="[
              'px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2',
              activeButton === 'yearly' ? 'bg-primary text-white' : 'bg-white text-gray-700'
            ]"
            @click="setActiveButton('yearly')"
          >
            <span>Inscription</span>
            <svg v-if="activeButton === 'yearly'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
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
