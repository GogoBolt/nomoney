<template>
  <div>
    <NuxtLayout name="auth">
      <h2 class="text-2xl font-bold mb-6 text-center">Connexion</h2>
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="email" type="email" v-model="email" required class="input" placeholder="votre@email.com" />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
          <input id="password" type="password" v-model="password" required class="input" placeholder="••••••••" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" type="checkbox" v-model="rememberMe" class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-700">Se souvenir de moi</label>
          </div>
          <div class="text-sm">
            <NuxtLink to="/forgot-password" class="text-primary hover:text-primary-dark">Mot de passe oublié ?</NuxtLink>
          </div>
        </div>
        <div>
          <button type="submit" class="w-full btn btn-primary py-2" :disabled="isLoading">
            <span v-if="isLoading">Connexion en cours...</span>
            <span v-else>Se connecter</span>
          </button>
        </div>
      </form>
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Vous n'avez pas de compte ?
          <NuxtLink to="/register" class="text-primary hover:text-primary-dark font-medium">S'inscrire</NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const error = ref(null);
const isLoading = ref(false);
const router = useRouter();
const authStore = useAuthStore();

async function login() {
  if (!email.value || !password.value) {
    error.value = 'Veuillez remplir tous les champs';
    return;
  }
  
  isLoading.value = true;
  error.value = null;
  
  try {
    const result = await authStore.signIn(email.value, password.value);
    
    if (result.success) {
      router.push('/dashboard/home');
    } else {
      error.value = result.error || 'Erreur de connexion';
    }
  } catch (err) {
    error.value = err.message || 'Une erreur est survenue';
  } finally {
    isLoading.value = false;
  }
}
</script>