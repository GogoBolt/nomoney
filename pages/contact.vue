<template>
  <div>
    <section class="py-12 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p class="text-xl max-w-3xl mx-auto">Notre équipe est à votre disposition pour répondre à toutes vos questions.</p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
            <p class="text-gray-600 mb-8">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>

            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input id="firstName" type="text" class="input" placeholder="Jean" />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input id="lastName" type="text" class="input" placeholder="Dupont" />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input id="email" type="email" class="input" placeholder="votre@email.com" />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select id="subject" class="input">
                  <option value="">Sélectionnez un sujet</option>
                  <option value="information">Demande d'information</option>
                  <option value="demo">Demande de démonstration</option>
                  <option value="support">Support technique</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="5" class="input" placeholder="Votre message..."></textarea>
              </div>

              <div class="flex items-center">
                <input id="privacy" type="checkbox" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label for="privacy" class="ml-2 block text-sm text-gray-700">
                  J'accepte que mes données soient traitées conformément à la <NuxtLink to="/privacy" class="text-primary hover:text-primary-dark">politique de confidentialité</NuxtLink>
                </label>
              </div>

              <div>
                <button type="submit" class="btn btn-primary py-2 px-6">Envoyer le message</button>
              </div>
            </form>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-6">Nos coordonnées</h2>
            <p class="text-gray-600 mb-8">Vous préférez nous contacter directement ? Voici nos coordonnées.</p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary-light bg-opacity-20 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Téléphone</h3>
                  <p class="text-gray-600">+225 07 58 96 61 56</p>
                  <p class="text-gray-500 text-sm">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-light bg-opacity-20 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Email</h3>
                  <p class="text-gray-600">contact@nomoney-qrcode.com</p>
                  <p class="text-gray-500 text-sm">Nous répondons sous 24h</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary-light bg-opacity-20 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-1">Adresse</h3>
                  <p class="text-gray-600">Riviera 3, coprim ARN</p>
                  <p class="text-gray-600">01 BP 5341 AB 01</p>
                </div>
              </div>
            </div>

            <div class="mt-10">
              <h3 class="text-lg font-semibold mb-4">Suivez-nous</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209  1.791-4 4-4 4 2.209 1.791 4 4 4 0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" class="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200">
                  <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
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
                <h3 class="text-lg font-semibold mb-2">Quel est le délai de réponse à une demande de contact ?</h3>
                <p class="text-gray-600">Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées.</p>
              </div>
            </div>
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Proposez-vous des démonstrations de votre solution ?</h3>
                <p class="text-gray-600">Oui, nous proposons des démonstrations personnalisées de notre solution. Vous pouvez en faire la demande via notre formulaire de contact.</p>
              </div>
            </div>
            <div class="card bg-white">
              <div class="p-6">
                <h3 class="text-lg font-semibold mb-2">Comment puis-je obtenir un devis personnalisé ?</h3>
                <p class="text-gray-600">Pour obtenir un devis personnalisé, veuillez nous contacter en précisant vos besoins spécifiques et le nombre d'élèves concernés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
