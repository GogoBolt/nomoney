<template>
  <div>
    <NuxtLayout name="auth">
      <h2 class="text-2xl font-bold mb-6 text-center">Créer un compte</h2>
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {{ error }}
      </div>
      <form @submit.prevent="register" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input id="firstName" type="text" v-model="firstName" required class="input" placeholder="Jean" />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input id="lastName" type="text" v-model="lastName" required class="input" placeholder="Dupont" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input id="email" type="email" v-model="email" required class="input" placeholder="votre@email.com" />
        </div>
        <div>
          <label for="userType" class="block text-sm font-medium text-gray-700 mb-1">Type d'utilisateur</label>
          <select id="userType" v-model="userType" required class="input">
            <option value="parent">Parent</option>
            <option value="school">Établissement scolaire</option>
            <option value="transport">Transporteur</option>
          </select>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
          <input id="password" type="password" v-model="password" required class="input" placeholder="••••••••" />
        </div>
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
          <input id="confirmPassword" type="password" v-model="confirmPassword" required class="input" placeholder="••••••••" />
        </div>
        <div class="flex items-center">
          <input id="terms" type="checkbox" v-model="acceptTerms" required class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
          <label for="terms" class="ml-2 block text-sm text-gray-700">
            J'accepte les <NuxtLink to="/terms" class="text-primary hover:text-primary-dark">conditions d'utilisation</NuxtLink> et la <NuxtLink to="/privacy" class="text-primary hover:text-primary-dark">politique de confidentialité</NuxtLink>
          </label>
        </div>
        <div>
          <button type="submit" class="w-full btn btn-primary py-2" :disabled="isLoading">
            <span v-if="isLoading">Inscription en cours...</span>
            <span v-else>S'inscrire</span>
          </button>
        </div>
      </form>
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Vous avez déjà un compte ?
          <NuxtLink to="/login" class="text-primary hover:text-primary-dark font-medium">Se connecter</NuxtLink>
        </p>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const userType = ref('parent');
const password = ref('');
const confirmPassword = ref('');
const acceptTerms = ref(false);
const error = ref(null);
const isLoading = ref(false);
const router = useRouter();
const { $nhost } = useNuxtApp();

async function register() {
  // Validation des champs
  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    error.value = 'Veuillez remplir tous les champs obligatoires';
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas';
    return;
  }

  if (!acceptTerms.value) {
    error.value = 'Vous devez accepter les conditions d\'utilisation';
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    // Créer l'utilisateur avec Nhost
    const { session, error: signUpError } = await $nhost.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        metadata: {
          firstName: firstName.value,
          lastName: lastName.value,
          role: userType.value,
        },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    // Créer le profil utilisateur dans la base de données
    const { data, error: gqlError } = await $nhost.graphql.request(
      `
        mutation CreateUserProfile($userId: uuid!, $firstName: String!, $lastName: String!, $userType: String!) {
          insert_profiles_one(object: {
            user_id: $userId,
            first_name: $firstName,
            last_name: $lastName,
            user_type: $userType
          }) {
            id
          }
        }
      `,
      {
        variables: {
          userId: session?.user?.id, // Utiliser l'ID de l'utilisateur créé
          firstName: firstName.value,
          lastName: lastName.value,
          userType: userType.value,
        },
      }
    );

    if (gqlError) {
      throw new Error(gqlError.message);
    }

    // Rediriger vers le tableau de bord
    router.push('/dashboard/home');
  } catch (err) {
    error.value = err.message || 'Une erreur est survenue';

    // Si l'utilisateur a été créé mais que la création du profil a échoué, on le déconnecte
    if ($nhost.auth.isAuthenticated()) {
      await $nhost.auth.signOut();
    }
  } finally {
    isLoading.value = false;
  }
}
</script>
