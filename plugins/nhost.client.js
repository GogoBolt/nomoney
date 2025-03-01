import { NhostClient } from '@nhost/nhost-js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Vérifier que les variables d'environnement sont définies
  if (!config.public.nhostSubdomain || !config.public.nhostRegion) {
    throw new Error('La configuration Nhost est manquante. Veuillez vérifier votre fichier .env')
  }

  const nhost = new NhostClient({
    subdomain: config.public.nhostSubdomain,
    region: config.public.nhostRegion
  })

  return {
    provide: {
      nhost
    }
  }
})
