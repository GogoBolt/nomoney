<template>
  <div class="min-h-screen bg-gray-100">
    <DashboardHeader />
    <div class="flex pt-16">
      <DashboardSidebar />
      <main class="flex-1 p-6 overflow-y-auto">
        <slot />
      </main>
    </div>
    <NavigationArrow />
  </div>
</template>

<script setup>
import NavigationArrow from '~/components/NavigationArrow.vue';
</script>