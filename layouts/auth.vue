<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <NuxtLink to="/" class="inline-block">
          <img src="~/assets/images/logo.svg" alt="NO-Money Just QR-Code" class="h-16 mx-auto" />
        </NuxtLink>
      </div>
      <div class="bg-white rounded-lg shadow-lg p-8">
        <slot />
      </div>
    </div>
  </div>
</template>