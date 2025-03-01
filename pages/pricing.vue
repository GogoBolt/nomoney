<template>
  <div>
    <section class="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p class="text-xl max-w-3xl mx-auto">Des formules adaptées à tous les besoins et toutes les tailles d'établissements.</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col items-center mb-12">
          <div class="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8">
             <!-- Bouton Facturation mensuelle -->
    <button
      :class="[
        'px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2',
        activeButton === 'monthly' ? 'bg-primary text-white' : 'bg-white text-gray-700'
      ]"
      @click="setActiveButton('monthly')"
    >
      <span>Facturation mensuelle</span>
      <svg v-if="activeButton === 'monthly'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </button>

    <!-- Bouton Facturation annuelle -->
    <button
      :class="[
        'px-6 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2',
        activeButton === 'yearly' ? 'bg-primary text-white' : 'bg-white text-gray-700'
      ]"
      @click="setActiveButton('yearly')"
    >
      <span>Facturation annuelle</span>
      <svg v-if="activeButton === 'yearly'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </button>
          </div>
          <p class="text-gray-600 text-center max-w-xl">Économisez jusqu'à 20% avec nos formules annuelles. Tous les prix sont affichés hors taxes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Plan Starter -->
          <div class="card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-xl font-bold mb-2">Starter</h3>
              <p class="text-gray-600 mb-4">Idéal pour les petites écoles</p>
              <div class="flex items-baseline">
                <span class="text-4xl font-bold">29€</span>
                <span class="text-gray-600 ml-2">/mois</span>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Jusqu'à 100 élèves</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestion des QR Codes</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiements en ligne</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support par email</span>
                </li>
                <li class="flex items-start text-gray-400">
                  <svg class="w-5 h-5 text-gray-400 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Rapports avancés</span>
                </li>
                <li class="flex items-start text-gray-400">
                  <svg class="w-5 h-5 text-gray-400 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>API personnalisée</span>
                </li>
              </ul>
              <div class="mt-6">
                <NuxtLink to="/register" class="btn btn-outline w-full">Commencer</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Plan Pro -->
          <div class="card bg-white border-2 border-primary rounded-lg overflow-hidden shadow-lg transform md:scale-105">
            <div class="bg-primary text-white text-center py-2 text-sm font-semibold">
              RECOMMANDÉ
            </div>
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-xl font-bold mb-2">Pro</h3>
              <p class="text-gray-600 mb-4">Pour les établissements moyens</p>
              <div class="flex items-baseline">
                <span class="text-4xl font-bold">79€</span>
                <span class="text-gray-600 ml-2">/mois</span>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Jusqu'à 500 élèves</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestion des QR Codes</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiements en ligne</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support prioritaire</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapports avancés</span>
                </li>
                <li class="flex items-start text-gray-400">
                  <svg class="w-5 h-5 text-gray-400 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>API personnalisée</span>
                </li>
              </ul>
              <div class="mt-6">
                <NuxtLink to="/register" class="btn btn-primary w-full">Commencer</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Plan Enterprise -->
          <div class="card bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="p-6 border-b border-gray-200">
              <h3 class="text-xl font-bold mb-2">Enterprise</h3>
              <p class="text-gray-600 mb-4">Pour les grands établissements</p>
              <div class="flex items-baseline">
                <span class="text-4xl font-bold">199€</span>
                <span class="text-gray-600 ml-2">/mois</span>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Élèves illimités</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gestion des QR Codes</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paiements en ligne</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support dédié 24/7</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapports avancés</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-green-500 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>API personnalisée</span>
                </li>
              </ul>
              <div class="mt-6">
                <NuxtLink to="/register" class="btn btn-outline w-full">Commencer</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Questions fréquentes</h2>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-6">
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Puis-je changer de formule à tout moment ?</h3>
                <p class="text-gray-600">Oui, vous pouvez passer à une formule supérieure à tout moment. Le changement prendra effet immédiatement et la facturation sera ajustée au prorata.</p>
              </div>
            </div>
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Y a-t-il des frais de mise en service ?</h3>
                <p class="text-gray-600">Non, il n'y a aucun frais de mise en service. Vous ne payez que l'abonnement mensuel ou annuel selon la formule choisie.</p>
              </div>
            </div>
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Comment sont calculés les frais de transaction ?</h3>
                <p class="text-gray-600">Nous ne prélevons aucune commission sur les transactions. Vous ne payez que les frais de votre prestataire de paiement (généralement entre 1,5% et 3% selon le moyen de paiement).</p>
              </div>
            </div>
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Proposez-vous des tarifs spéciaux pour les associations ?</h3>
                <p class="text-gray-600">Oui, nous proposons des tarifs préférentiels pour les associations et les établissements publics. Contactez-nous pour en savoir plus.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Vous avez des questions spécifiques ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Notre équipe est à votre disposition pour vous aider à choisir la formule adaptée à vos besoins.</p>
        <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">Contactez-nous</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Référence pour stocker le bouton actif
const activeButton = ref('monthly'); // Par défaut, "Facturation mensuelle" est active

// Fonction pour définir le bouton actif
const setActiveButton = (button:any) => {
  activeButton.value = button;
};
</script>
