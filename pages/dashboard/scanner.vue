<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Scanner QR Code</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card bg-white">
        <h2 class="text-lg font-semibold mb-4">Scanner un QR Code</h2>
        <div v-if="!isCameraActive" class="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center h-64">
          <div class="mb-4">
            <svg class="w-12 h-12 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <p class="text-gray-600 mb-4 text-center">Placez le QR Code devant la caméra pour le scanner</p>
          <button @click="activateCamera" class="btn btn-primary">
            Activer la caméra
          </button>
        </div>
        <div v-else class="bg-gray-100 rounded-lg p-4 h-64 relative">
          <qrcode-stream @decode="onDecode" @init="onInit" :camera="selectedCamera" class="h-full w-full"></qrcode-stream>
          <button @click="isCameraActive = false" class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
            <svg class="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div v-if="cameras.length > 1" class="absolute bottom-2 right-2">
            <button @click="toggleCamera" class="bg-white rounded-full p-2 shadow-md">
              <svg class="w-5 h-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div class="card bg-white">
        <h2 class="text-lg font-semibold mb-4">Résultat du scan</h2>
        <div v-if="scanResult" class="space-y-4">
          <div class="flex items-center p-4 rounded-lg" :class="scanResult.success ? 'bg-green-100' : 'bg-red-100'">
            <svg v-if="scanResult.success" class="w-6 h-6 text-green-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg v-else class="w-6 h-6 text-red-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 class="font-medium">{{ scanResult.success ? 'Scan réussi' : 'Scan échoué' }}</h3>
              <p class="text-sm" :class="scanResult.success ? 'text-green-700' : 'text-red-700'">
                {{ scanResult.success ? 'QR Code validé avec succès' : scanResult.message || 'QR Code invalide' }}
              </p>
            </div>
          </div>
          
          <div v-if="scanResult.student" class="border border-gray-200 rounded-lg p-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Nom de l'élève</p>
                <p class="font-medium">{{ scanResult.student.first_name }} {{ scanResult.student.last_name }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">ID</p>
                <p class="font-medium">{{ scanResult.student.id }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Classe</p>
                <p class="font-medium">{{ scanResult.student.class }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Solde</p>
                <p class="font-medium" :class="scanResult.student.balance < 10 ? 'text-red-600' : 'text-green-600'">
                  {{ scanResult.student.balance.toFixed(2) }} €
                </p>
              </div>
            </div>
          </div>
          
          <div v-if="scanResult.success && scanResult.student" class="flex space-x-4">
            <button @click="validateTransaction('meal')" class="btn btn-primary flex-1" :disabled="isValidating">
              {{ isValidating ? 'Validation...' : 'Valider repas' }}
            </button>
            <button @click="validateTransaction('transport')" class="btn btn-secondary flex-1" :disabled="isValidating">
              {{ isValidating ? 'Validation...' : 'Valider transport' }}
            </button>
          </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center h-64 text-gray-500">
          <svg class="w-12 h-12 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Aucun QR Code scanné</p>
          <p class="text-sm">Scannez un QR Code pour voir les détails</p>
        </div>
      </div>
    </div>
    
    <div class="mt-6 card bg-white">
      <h2 class="text-lg font-semibold mb-4">Historique des scans récents</h2>
      <div v-if="isLoading" class="flex justify-center items-center h-32">
        <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
      <div v-else-if="recentScans.length === 0" class="text-center text-gray-500 py-8">
        Aucun scan récent
      </div>
      <div v-else class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Élève</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Heure</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="scan in recentScans" :key="scan.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="text-sm font-medium text-gray-900">{{ scan.student.first_name }} {{ scan.student.last_name }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ formatTransactionType(scan.type) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ formatDate(scan.created_at) }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Validé
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import { useNhostClient } from '@nhost/vue';
import { useAuthStore } from '~/composables/useAuth';
import { useQrCode } from '~/composables/useQrCode';

const nhost = useNhostClient();
const authStore = useAuthStore();
const qrCodeService = useQrCode();

const isCameraActive = ref(false);
const cameras = ref([]);
const selectedCamera = ref('auto');
const cameraIndex = ref(0);
const scanResult = ref(null);
const isValidating = ref(false);
const isLoading = ref(true);
const recentScans = ref([]);

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await fetchRecentScans();
  }
});

async function fetchRecentScans() {
  isLoading.value = true;
  
  try {
    const { data, error } = await nhost.graphql.request(`
      query GetRecentTransactions {
        transactions(
          order_by: {created_at: desc}
          limit: 10
          where: {type: {_in: ["meal", "transport"]}}
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
        }
      }
    `);
    
    if (error) {
      throw new Error(error.message);
    }
    
    recentScans.value = data.transactions;
  } catch (error) {
    console.error('Error fetching recent scans:', error);
  } finally {
    isLoading.value = false;
  }
}

function activateCamera() {
  isCameraActive.value = true;
}

async function onInit(promise) {
  try {
    const { capabilities } = await promise;
    cameras.value = capabilities.filter(cap => cap.kind === 'videoinput');
  } catch (error) {
    console.error(error);
  }
}

function toggleCamera() {
  cameraIndex.value = (cameraIndex.value + 1) % cameras.value.length;
  selectedCamera.value = cameras.value[cameraIndex.value].deviceId;
}

async function onDecode(content) {
  try {
    // Vérifier si le QR code est valide
    const { data, error } = await nhost.graphql.request(`
      query GetQrCodeInfo($code: String!) {
        qr_codes(where: {code: {_eq: $code}, is_active: {_eq: true}}) {
          id
          student_id
          student {
            id
            first_name
            last_name
            class
            balance
          }
        }
      }
    `, {
      variables: { code: content }
    });
    
    if (error) {
      throw new Error(error.message);
    }
    
    if (data.qr_codes.length === 0) {
      scanResult.value = {
        success: false,
        message: 'QR Code invalide ou expiré'
      };
      return;
    }
    
    const qrCode = data.qr_codes[0];
    
    scanResult.value = {
      success: true,
      student: qrCode.student,
      qrCodeId: qrCode.id
    };
  } catch (error) {
    console.error('Error decoding QR code:', error);
    scanResult.value = {
      success: false,
      message: error.message || 'Erreur lors du scan du QR Code'
    };
  }
}

async function validateTransaction(type) {
  if (!scanResult.value || !scanResult.value.success || !scanResult.value.student) {
    return;
  }
  
  isValidating.value = true;
  
  try {
    const result = await qrCodeService.validateQrCodeScan(scanResult.value.qrCodeId, type);
    
    if (result.success) {
      scanResult.value = {
        ...scanResult.value,
        success: true,
        student: result.student,
        transaction: result.transaction
      };
      
      // Mettre à jour l'historique des scans
      await fetchRecentScans();
    } else {
      scanResult.value = {
        ...scanResult.value,
        success: false,
        message: result.message || 'Erreur lors de la validation'
      };
    }
  } catch (error) {
    console.error('Error validating transaction:', error);
    scanResult.value = {
      ...scanResult.value,
      success: false,
      message: error.message || 'Erreur lors de la validation'
    };
  } finally {
    isValidating.value = false;
  }
}

function formatTransactionType(type) {
  const types = {
    meal: 'Repas',
    transport: 'Transport'
  };
  
  return types[type] || type;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}
</script>