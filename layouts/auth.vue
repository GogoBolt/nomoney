<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md">
      <div class="text-center mb-3">
        <NuxtLink to="/" class="inline-block">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center space-x-3">
    <img
      class=" rounded-lg shadow-md transform hover:scale-105 transition duration-300"
      :src="selectedImage"
      alt="NO-Money Just QR-Code"
    />
  </NuxtLink>
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
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/4.jpg',
  '/images/5.jpg',
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
