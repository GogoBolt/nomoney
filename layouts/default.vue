<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="container mx-auto px-4 py-20 flex-grow">
      <slot />
    </main>
    <AppFooter class="mt-12" />
    <NavigationArrow />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import NavigationArrow from '~/components/NavigationArrow.vue';
</script>