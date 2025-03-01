<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Tableau de bord</h1>

    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>

    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="card bg-white">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-primary-light bg-opacity-20">
              <svg class="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-500">Solde actuel</h2>
              <p class="text-lg font-semibold text-gray-900">{{ totalBalance.toFixed(2) }} €</p>
            </div>
          </div>
        </div>

        <div class="card bg-white">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-500">Repas ce mois</h2>
              <p class="text-lg font-semibold text-gray-900">{{ mealCount }}</p>
            </div>
          </div>
        </div>

        <div class="card bg-white">
          <div class="flex items-center">
            <div class="p-3 rounded-full bg-blue-100">
              <svg class="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <div class="ml-4">
              <h2 class="text-sm font-medium text-gray-500">Trajets ce mois</h2>
              <p class="text-lg font-semibold text-gray-900">{{ transportCount }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="card bg-white">
          <h2 class="text-lg font-semibold mb-4">Activité récente</h2>
          <div v-if="recentTransactions.length === 0" class="text-center text-gray-500 py-8">
            Aucune activité récente
          </div>
          <div v-else class="space-y-4">
            <div v-for="transaction in recentTransactions" :key="transaction.id" class="flex items-start">
              <div class="flex-shrink-0">
                <div class="p-2 rounded-full" :class="getActivityTypeClass(transaction.type)">
                  <svg class="h-4 w-4" :class="getActivityIconColor(transaction.type)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="transaction.type === 'meal'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    <path v-if="transaction.type === 'transport'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path v-if="transaction.type === 'recharge'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div class="ml-3 flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">{{ getTransactionDescription(transaction) }}</p>
                  <p class="text-sm text-gray-500">{{ formatDate(transaction.created_at) }}</p>
                </div>
                <p class="text-sm text-gray-500">{{ getTransactionDetails(transaction) }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-white">
          <h2 class="text-lg font-semibold mb-4">Consommation mensuelle</h2>
          <div class="h-64">
            <!-- Chart will be rendered here -->
            <p class="text-center text-gray-500 mt-20">Graphique de consommation mensuelle</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useNhostClient } from '@nhost/vue';
import { useAuthStore } from '~/composables/useAuth';

const nhost = useNhostClient();
const authStore = useAuthStore();
const isLoading = ref(true);
const students = ref([]);
const transactions = ref([]);

// Statistiques calculées
const totalBalance = computed(() => {
  return students.value.reduce((total, student) => total + student.balance, 0);
});

const mealCount = computed(() => {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  return transactions.value.filter(t =>
    t.type === 'meal' &&
    new Date(t.created_at) >= firstDayOfMonth
  ).length;
});

const transportCount = computed(() => {
  const now = new Date();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  return transactions.value.filter(t =>
    t.type === 'transport' &&
    new Date(t.created_at) >= firstDayOfMonth
  ).length;
});

const recentTransactions = computed(() => {
  return [...transactions.value]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);
});

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await fetchData();
  }
});

async function fetchData() {
  isLoading.value = true;

  try {
    // Récupérer les élèves du parent connecté
    if (authStore.userRole === 'parent') {
      const { data: studentsData, error: studentsError } = await nhost.graphql.request(`
        query GetStudents($parentId: uuid!) {
          students(where: {parent_id: {_eq: $parentId}}) {
            id
            first_name
            last_name
            class
            balance
          }
        }
      `, {
        variables: {
          parentId: authStore.user.id
        }
      });

      if (studentsError) {
        throw new Error(studentsError.message);
      }

      students.value = studentsData.students;

      // Récupérer les transactions des élèves
      const studentIds = students.value.map(s => s.id);

      if (studentIds.length > 0) {
        const { data: transactionsData, error: transactionsError } = await nhost.graphql.request(`
          query GetTransactions($studentIds: [uuid!]) {
            transactions(
              where: {student_id: {_in: $studentIds}}
              order_by: {created_at: desc}
              limit: 50
            ) {
              id
              type
              amount
              created_at
              student {
                first_name
                last_name
              }
              metadata
            }
          }
        `, {
          variables: {
            studentIds
          }
        });

        if (transactionsError) {
          throw new Error(transactionsError.message);
        }

        transactions.value = transactionsData.transactions;
      }
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  } finally {
    isLoading.value = false;
  }
}

// Fonctions utilitaires pour l'affichage
function getActivityTypeClass(type) {
  const classes = {
    meal: 'bg-yellow-100',
    transport: 'bg-blue-100',
    recharge: 'bg-green-100'
  };

  return classes[type] || 'bg-gray-100';
}

function getActivityIconColor(type) {
  const colors = {
    meal: 'text-yellow-600',
    transport: 'text-blue-600',
    recharge: 'text-green-600'
  };

  return colors[type] || 'text-gray-600';
}

function getTransactionDescription(transaction) {
  const descriptions = {
    meal: 'Repas consommé',
    transport: 'Trajet effectué',
    recharge: 'Rechargement de compte'
  };

  return descriptions[transaction.type] || 'Transaction';
}

function getTransactionDetails(transaction) {
  if (transaction.type === 'meal') {
    return `Cantine - ${transaction.student.first_name} ${transaction.student.last_name}`;
  } else if (transaction.type === 'transport') {
    return `Transport - ${transaction.student.first_name} ${transaction.student.last_name}`;
  } else if (transaction.type === 'recharge') {
    const paymentMethod = transaction.metadata?.payment_method || 'Carte bancaire';
    return `${paymentMethod} - ${transaction.amount.toFixed(2)} €`;
  }

  return '';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (date.toDateString() === now.toDateString()) {
    return `Aujourd'hui, ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Hier, ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  } else {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
  }
}
</script>
