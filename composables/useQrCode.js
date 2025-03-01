import { ref } from 'vue'
import { useNhostClient } from '@nhost/vue'
import gql from 'graphql-tag'

export function useQrCode() {
  const nhost = useNhostClient()
  const isLoading = ref(false)
  const error = ref(null)

  // Générer un QR code pour un élève
  async function generateStudentQrCode(studentId) {
    isLoading.value = true
    error.value = null
    
    try {
      // Générer un code unique pour l'élève
      const uniqueCode = `STD-${studentId}-${Date.now()}`
      
      // Enregistrer le code dans la base de données
      const { data, error: gqlError } = await nhost.graphql.request(gql`
        mutation CreateQrCode($studentId: uuid!, $code: String!) {
          insert_qr_codes_one(object: {
            student_id: $studentId,
            code: $code,
            is_active: true
          }) {
            id
            code
            created_at
          }
        }
      `, {
        variables: {
          studentId,
          code: uniqueCode
        }
      })
      
      if (gqlError) {
        throw new Error(gqlError.message)
      }
      
      return {
        success: true,
        qrCode: data.insert_qr_codes_one
      }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  // Valider un scan de QR code
  async function validateQrCodeScan(code, type) {
    isLoading.value = true
    error.value = null
    
    try {
      // Vérifier si le code existe et est valide
      const { data: qrData, error: qrError } = await nhost.graphql.request(gql`
        query GetQrCode($code: String!) {
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
        variables: { code }
      })
      
      if (qrError) {
        throw new Error(qrError.message)
      }
      
      if (!qrData.qr_codes.length) {
        throw new Error('QR Code invalide ou expiré')
      }
      
      const qrCode = qrData.qr_codes[0]
      const student = qrCode.student
      
      // Vérifier le solde pour les repas
      if (type === 'meal' && student.balance < 5) {
        return {
          success: false,
          status: 'insufficient_balance',
          message: 'Solde insuffisant pour un repas',
          student
        }
      }
      
      // Enregistrer la transaction
      const amount = type === 'meal' ? 5 : 2 // 5€ pour un repas, 2€ pour un transport
      const { data: transactionData, error: transactionError } = await nhost.graphql.request(gql`
        mutation CreateTransaction($studentId: uuid!, $type: String!, $amount: numeric!) {
          insert_transactions_one(object: {
            student_id: $studentId,
            type: $type,
            amount: $amount
          }) {
            id
            created_at
          }
        }
      `, {
        variables: {
          studentId: student.id,
          type,
          amount
        }
      })
      
      if (transactionError) {
        throw new Error(transactionError.message)
      }
      
      // Mettre à jour le solde de l'élève
      const { data: updateData, error: updateError } = await nhost.graphql.request(gql`
        mutation UpdateStudentBalance($studentId: uuid!, $amount: numeric!) {
          update_students_by_pk(
            pk_columns: {id: $studentId}, 
            _inc: {balance: -$amount}
          ) {
            id
            balance
          }
        }
      `, {
        variables: {
          studentId: student.id,
          amount
        }
      })
      
      if (updateError) {
        throw new Error(updateError.message)
      }
      
      return {
        success: true,
        student: {
          ...student,
          balance: updateData.update_students_by_pk.balance
        },
        transaction: transactionData.insert_transactions_one
      }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    generateStudentQrCode,
    validateQrCodeScan
  }
}