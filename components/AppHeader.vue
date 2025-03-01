<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex-shrink-0">
            <img class="h-8" src="~/assets/images/logo.svg" alt="NO-Money Just QR-Code" />
          </NuxtLink>
        </div>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary">Accueil</NuxtLink>
          <NuxtLink to="/features" class="text-gray-700 hover:text-primary">Fonctionnalités</NuxtLink>
          <NuxtLink to="/pricing" class="text-gray-700 hover:text-primary">Tarifs</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-700 hover:text-primary">Contact</NuxtLink>
        </nav>
        <div class="flex items-center space-x-4">
          <NuxtLink to="/login" class="btn btn-outline">Connexion</NuxtLink>
          <NuxtLink to="/register" class="btn btn-primary">Inscription</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>