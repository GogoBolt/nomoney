
<template>
    <!-- Flèche de navigation -->
    <div
      class="fixed right-6 bottom-6 z-50 transition-opacity duration-300"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      @mouseenter="isVisible = true"
      @mouseleave="isVisible = false"
    >
      <button
        v-if="!isAtBottom"
        @click="scrollToNextSection"
        class="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      <button
        v-else
        @click="scrollToTop"
        class="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  </template>

 <script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Vérifier si on est en mode client
const isClient = process.client;

// État pour la visibilité de la flèche
const isVisible = ref(true);
const isAtBottom = ref(false);

const checkIfAtBottom = () => {
  if (!isClient) return; // Vérifie qu'on est bien côté client

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  isAtBottom.value = scrollY + windowHeight >= documentHeight - 100;

  const sections = document.querySelectorAll('section');
  if (sections.length > 0) {
    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];
    const firstSectionRect = firstSection.getBoundingClientRect();
    const lastSectionRect = lastSection.getBoundingClientRect();

    isVisible.value = firstSectionRect.top <= 0 || lastSectionRect.bottom <= window.innerHeight;
  }
};

// Fonction pour faire défiler vers la section suivante
const scrollToNextSection = () => {
  if (!isClient) return;
  const sections = document.querySelectorAll('section');

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top > 0) {
      section.scrollIntoView({ behavior: 'smooth' });
      break;
    }
  }
};

// Fonction pour revenir en haut de la page
const scrollToTop = () => {
  if (!isClient) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Ajouter les écouteurs d'événements seulement côté client
onMounted(() => {
  if (!isClient) return;
  window.addEventListener('scroll', checkIfAtBottom);
  checkIfAtBottom();
});

onUnmounted(() => {
  if (!isClient) return;
  window.removeEventListener('scroll', checkIfAtBottom);
});
</script>
