<template>
  <!-- Flèche de navigation -->
  <div
    class="fixed right-6 bottom-6 z-50 transition-opacity duration-300"
    :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
  >
    <!-- Bouton pour défiler vers le Footer -->
    <button
      v-if="!isAtBottom"
      @click="scrollToFooter"
      class="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
      aria-label="Aller au Footer"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7 7m0 0l7-7m-7 7V3" />
      </svg>
    </button>

    <!-- Bouton pour revenir en haut de la page -->
    <button
      v-else
      @click="scrollToTop"
      class="p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-300"
      aria-label="Revenir en haut de la page"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// État pour la visibilité de la flèche
const isVisible = ref(false);

// État pour vérifier si l'utilisateur est en bas de la page
const isAtBottom = ref(false);

let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

// Vérifier la position du scroll
const checkScrollPosition = () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Marges pour éviter les tremblements
    const topMargin = 100;
    const bottomMargin = 100;
    
    // Détecter si on est en haut ou en bas avec une marge
    const atTop = scrollY <= topMargin;
    const atBottom = scrollY + windowHeight >= documentHeight - bottomMargin;
    
    // Mettre à jour les états
    isAtBottom.value = atBottom;
    
    // Afficher la flèche si on n'est pas tout en haut
    isVisible.value = scrollY > topMargin;
  }, 100);
};

// Scroll vers le Footer
const scrollToFooter = () => {
  const footer = document.querySelector('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth' });
  }
};

// Scroll vers le top directement
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Ajout des événements au scroll
onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
  checkScrollPosition(); // Vérifier l'état initial
});

onUnmounted(() => {
  if (scrollTimeout) clearTimeout(scrollTimeout);
  window.removeEventListener('scroll', checkScrollPosition);
});
</script>