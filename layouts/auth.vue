<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-8">
    <div class="w-full max-w-md">
      <div class="text-center mb-3">
        <NuxtLink to="/" class="inline-block">
          <div class="flex items-center justify-center">
            <img
              class="rounded-lg shadow-md transform hover:scale-105 transition duration-300 h-20 w-20"
              :src="selectedImage"
              alt="NO-Money Just QR-Code"
            />
          </div>
        </NuxtLink>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Liste des images disponibles
const images = [
  '/images/logo.png',
  '/images/ab.png', 
];

// Référence pour stocker l'image sélectionnée
const selectedImage = ref('');

// Fonction pour choisir une image aléatoire
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

// Au montage du composant, choisir une image aléatoire
onMounted(() => {
  selectedImage.value = getRandomImage();
});
</script>