export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  
  // Initialiser l'état d'authentification si ce n'est pas déjà fait
  if (!authStore.isAuthenticated && !authStore.isLoading) {
    await authStore.initialize()
  }
  
  // Attendre que l'initialisation soit terminée
  if (authStore.isLoading) {
    // On pourrait ajouter une page de chargement ici
    return
  }
  
  // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
  // et que la route nécessite une authentification
  if (!authStore.isAuthenticated && to.path.startsWith('/dashboard')) {
    return navigateTo('/login')
  }
  
  // Rediriger vers le tableau de bord si l'utilisateur est déjà authentifié
  // et qu'il essaie d'accéder à la page de connexion ou d'inscription
  if (authStore.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard/home')
  }
})