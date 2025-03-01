<template>
  <div  >
    <!-- Hero Section -->
    <section id="section1"
  class="py-10 md:py-16 bg-gradient-to-r from-primary to-primary-dark text-white"
>
  <div class="container mx-auto px-4">
    <div
      class="flex flex-col md:flex-row items-center"
      v-motion-fade-visible
    >
      <div class="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1
          class="text-4xl md:text-5xl font-bold mb-4"
          v-motion-pop-visible
        >
          NO-Money Just QR-Code
        </h1>
        <p class="text-xl mb-6">Simplifiez la gestion de votre cantine et transport scolaire avec notre solution QR Code innovante.</p>
        <div
          class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <NuxtLink
            to="/register"
            class="btn bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Commencer maintenant
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="btn border border-white text-white hover:bg-white hover:text-primary transition-transform transform hover:scale-105"
          >
            En savoir plus
          </NuxtLink>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <img
          src="~/assets/images/logo1.png"
          style="height: 300px; width: 350px"
          alt="NO-Money Just QR-Code"
          class="w-full drop-shadow-lg animate-fade-in"
        />
      </div>
    </div>
  </div>
</section>
    <!-- Features Section -->
    <section id="section2" class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Fonctionnalités principales</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Notre solution offre une gestion complète et sécurisée pour les cantines et transports scolaires.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="card text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            v-motion-slide-visible
          >
            <div
              class="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
            >
              <component :is="feature.icon" class="w-8 h-8 text-white"></component>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="section3" class="py-8  ">
      <div class="container  mx-auto   px-4 rounded-lg shadow-md">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Un processus simple et efficace pour tous les utilisateurs.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="text-center"
            v-motion-slide-visible
          >
            <div class="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
              <span class="text-2xl font-bold text-primary">{{ step.number }}</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section id="section4"      class="py-12 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2
          class="text-3xl font-bold mb-4"
          v-motion-pop-visible
        >
          Prêt à simplifier votre gestion scolaire ?
        </h2>
        <p
          class="text-xl mb-8 max-w-2xl mx-auto"
          v-motion-fade-visible
        >
          Rejoignez les établissements qui font confiance à NO-Money Just QR-Code pour leur gestion quotidienne.
        </p>
        <NuxtLink
          to="/register"
          class="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg transition-transform transform hover:scale-105"
          v-motion-pop-visible
        >
          Commencer gratuitement
        </NuxtLink>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="py-8 bg-gray-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} NO-Money Just QR-Code. Tous droits réservés.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CreditCardIcon, QrCodeIcon, ClockIcon } from '@heroicons/vue/24/outline';

const features = ref([
  {
    title: 'QR Code unique',
    description: "Chaque élève reçoit un QR Code unique pour accéder à la cantine et au transport scolaire.",
    icon: QrCodeIcon
  },
  {
    title: 'Paiements en ligne',
    description: "Rechargez le compte de vos enfants en ligne avec plusieurs moyens de paiement sécurisés.",
    icon: CreditCardIcon
  },
  {
    title: 'Suivi en temps réel',
    description: "Suivez en temps réel les consommations de repas et les trajets effectués par vos enfants.",
    icon: ClockIcon
  }
]);

const steps = ref([
  {
    number: 1,
    title: 'Inscription',
    description: 'Créez un compte pour votre établissement ou en tant que parent.'
  },
  {
    number: 2,
    title: 'Configuration',
    description: 'Ajoutez vos élèves et générez leurs QR Codes uniques.'
  },
  {
    number: 3,
    title: 'Rechargement',
    description: 'Rechargez le compte de vos enfants en ligne.'
  },
  {
    number: 4,
    title: 'Utilisation',
    description: 'Les élèves utilisent leur QR Code pour la cantine et le transport.'
  }
]);


</script>


<style>
.animate-fade-in {
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
