<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Solde et Paiements</h1>
    
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
    
    <template v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="card bg-white">
          <h2 class="text-lg font-semibold mb-4">Solde actuel</h2>
          <div class="flex items-center mb-6">
            <div class="p-3 rounded-full bg-primary-light bg-opacity-20">
              <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-2xl font-bold text-gray-900">{{ totalBalance.toFixed(2) }} €</p>
              <p class="text-sm text-gray-500">Solde total de tous les comptes</p>
            </div>
          </div>
          
          <div v-if="students.length > 0">
            <h3 class="text-md font-medium mb-2">Détail par élève</h3>
            <div class="space-y-3">
              <div v-for="student in students" :key="student.id" class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p class="font-medium">{{ student.first_name }} {{ student.last_name }}</p>
                  <p class="text-sm text-gray-500">{{ student.class }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold" :class="student.balance < 10 ? 'text-red-600' : 'text-green-600'">
                    {{ student.balance.toFixed(2) }} €
                  </p>
                  <button @click="selectStudentForRecharge(student)" class="text-sm text-primary hover:text-primary-dark">
                    Recharger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card bg-white">
          <h2 class="text-lg font-semibold mb-4">Recharger un compte</h2>
          <div v-if="!selectedStudent" class="text-center py-8">
            <p class="text-gray-500 mb-4">Sélectionnez un élève pour recharger son compte</p>
            <div class="space-y-3">
              <button 
                v-for="student in students" 
                :key="student.id" 
                @click="selectStudentForRecharge(student)"
                class="btn btn-outline w-full"
              >
                {{ student.first_name }} {{ student.last_name }}
              </button>
            </div>
          </div>
          
          <form v-else @submit.prevent="rechargeAccount" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Élève</label>
              <div class="p-3 bg-gray-50 rounded-lg">
                {{ selectedStudent.first_name }} {{ selectedStudent.last_name }}
              </div>
            </div>
            
            <div>
              <label for="amount" class="block text-sm font-medium text-gray-700 mb-1">Montant (€)</label>
              <input 
                id="amount" 
                v-model.number="rechargeAmount" 
                type="number" 
                min="5" 
                step="5" 
                required 
                class="input"
              />
            </div>
            
            <div>
              <label for="paymentMethod" class="block text-sm font-medium text-gray-700 mb-1">Moyen de paiement</label>
              <select id="paymentMethod" v-model="paymentMethod" required class="input">
                <option value="card">Carte bancaire</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Virement bancaire</option>
              </select>
            </div>
            
            <div class="pt-4">
              <button type="submit" class="btn btn-primary w-full" :disabled="isProcessing">
                {{ isProcessing ? 'Traitement en cours...' : 'Recharger le compte' }}
              </button>
              <button 
                type="button" 
                @click="cancelRecharge" 
                class="btn text-gray-500 hover:text-gray-700 w-full mt-2"
                :disabled="isProcessing"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="card bg-white">
        <h2 class="text-lg font-semibold mb-4">Historique des transactions</h2>
        <div v-if="transactions.length === 0" class="text-center text-gray-500 py-8">
          Aucune transaction récente
        </div>
        <div v-else class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Élève</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="transaction in transactions" :key="transaction.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatDate(transaction.created_at) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">
                    {{ transaction.student.first_name }} {{ transaction.student.last_name }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ formatTransactionType(transaction.type) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium" :class="getAmountClass(transaction)">
                    {{ formatAmount(transaction) }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Complété
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNhostClient } from '@nhost/vue';
import { useAuthStore } from '~/composables/useAuth';
import { useStudent } from '~/composables/useStudent';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const nhost = useNhostClient();
const authStore = useAuthStore();
const studentService = useStudent();

const isLoading = ref(true);
const students = ref([]);
const transactions = ref([]);
const selectedStudent = ref(null);
const rechargeAmount = ref(20);
const paymentMethod = ref('card');
const isProcessing = ref(false);

const totalBalance = computed(() => {
  return students.value.reduce((total, student) => total + student.balance, 0);
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
    const studentsResult = await studentService.getStudentsByParent(authStore.user.id);
    
    if (studentsResult.success) {
      students.value = studentsResult.students;
      
      // Récupérer les transactions des élèves
      const studentIds = students.value.map(s => s.id);
      
      if (studentIds.length > 0) {
        const { data, error } = await nhost.graphql.request(`
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
                id
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
        
        if (error) {
          throw new Error(error.message);
        }
        
        transactions.value = data.transactions;
      }
    } else {
      throw new Error(studentsResult.error);
    }
  } catch (error) {
    console.error('Error fetching payment data:', error);
  } finally {
    isLoading.value = false;
  }
}

function selectStudentForRecharge(student) {
  selectedStudent.value = student;
}

function cancelRecharge() {
  selectedStudent.value = null;
  rechargeAmount.value = 20;
}

async function rechargeAccount() {
  if (!selectedStudent.value || rechargeAmount.value <= 0) {
    return;
  }
  
  isProcessing.value = true;
  
  try {
    const result = await studentService.rechargeStudentBalance(
      selectedStudent.value.id,
      rechargeAmount.value,
      paymentMethod.value
    );
    
    if (result.success) {
      // Mettre à jour le solde de l'élève dans la liste
      const studentIndex = students.value.findIndex(s => s.id === selectedStudent.value.id);
      if (studentIndex !== -1) {
        students.value[studentIndex].balance = result.newBalance;
      }
      
      // Ajouter la transaction à la liste
      await fetchData();
      
      // Réinitialiser le formulaire
      selectedStudent.value = null;
      rechargeAmount.value = 20;
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    console.error('Error recharging account:', error);
    // Afficher une notification d'erreur
  } finally {
    isProcessing.value = false;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return format(date, 'dd MMMM yyyy, HH:mm', { locale: fr });
}

function formatTransactionType(type) {
  const types = {
    meal: 'Repas',
    transport: 'Transport',
    recharge: 'Rechargement'
  };
  
  return types[type] || type;
}

function formatAmount(transaction) {
  if (transaction.type === 'recharge') {
    return `+${transaction.amount.toFixed(2)} €`;
  } else {
    return `-${transaction.amount.toFixed(2)} €`;
  }
}

function getAmountClass(transaction) {
  if (transaction.type === 'recharge') {
    return 'text-green-600';
  } else {
    return 'text-red-600';
  }
}
</script>