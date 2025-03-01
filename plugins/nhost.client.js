import { NhostClient } from '@nhost/vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Vérifier que les variables d'environnement sont définies
  if (!config.public.nhostSubdomain || !config.public.nhostRegion) {
    console.error('Nhost configuration is missing. Please check your .env file.')
  }
  
  const nhost = new NhostClient({
    subdomain: config.public.nhostSubdomain,
    region: config.public.nhostRegion
  })

  nuxtApp.provide('nhost', nhost)
})