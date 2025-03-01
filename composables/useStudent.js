import { ref } from 'vue'
import { useNhostClient } from '@nhost/vue'
import gql from 'graphql-tag'

export function useStudent() {
  const nhost = useNhostClient()
  const isLoading = ref(false)
  const error = ref(null)

  // Récupérer les élèves d'un parent
  async function getStudentsByParent(parentId) {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: gqlError } = await nhost.graphql.request(gql`
        query GetStudentsByParent($parentId: uuid!) {
          students(where: {parent_id: {_eq: $parentId}}) {
            id
            first_name
            last_name
            class
            balance
            qr_codes(where: {is_active: {_eq: true}}, limit: 1) {
              id
              code
            }
          }
        }
      `, {
        variables: { parentId }
      })
      
      if (gqlError) {
        throw new Error(gqlError.message)
      }
      
      return {
        success: true,
        students: data.students
      }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  // Ajouter un élève
  async function addStudent(studentData) {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: gqlError } = await nhost.graphql.request(gql`
        mutation AddStudent($student: students_insert_input!) {
          insert_students_one(object: $student) {
            id
            first_name
            last_name
            class
            balance
          }
        }
      `, {
        variables: {
          student: studentData
        }
      })
      
      if (gqlError) {
        throw new Error(gqlError.message)
      }
      
      return {
        success: true,
        student: data.insert_students_one
      }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  // Récupérer l'historique des transactions d'un élève
  async function getStudentTransactions(studentId) {
    isLoading.value = true
    error.value = null
    
    try {
      const { data, error: gqlError } = await nhost.graphql.request(gql`
        query GetStudentTransactions($studentId: uuid!) {
          transactions(
            where: {student_id: {_eq: $studentId}}
            order_by: {created_at: desc}
          ) {
            id
            type
            amount
            created_at
          }
        }
      `, {
        variables: { studentId }
      })
      
      if (gqlError) {
        throw new Error(gqlError.message)
      }
      
      return {
        success: true,
        transactions: data.transactions
      }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  // Recharger le compte d'un élève
  async function rechargeStudentBalance(studentId, amount, paymentMethod) {
    isLoading.value = true
    error.value = null
    
    try {
      // Enregistrer la transaction de rechargement
      const { data: transactionData, error: transactionError } = await nhost.graphql.request(gql`
        mutation CreateRechargeTransaction($studentId: uuid!, $amount: numeric!, $paymentMethod: String!) {
          insert_transactions_one(object: {
            student_id: $studentId,
            type: "recharge",
            amount: $amount,
            metadata: { payment_method: $paymentMethod }
          }) {
            id
            created_at
          }
        }
      `, {
        variables: {
          studentId,
          amount,
          paymentMethod
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
            _inc: {balance: $amount}
          ) {
            id
            balance
          }
        }
      `, {
        variables: {
          studentId,
          amount
        }
      })
      
      if (updateError) {
        throw new Error(updateError.message)
      }
      
      return {
        success: true,
        newBalance: updateData.update_students_by_pk.balance,
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
    getStudentsByParent,
    addStudent,
    getStudentTransactions,
    rechargeStudentBalance
  }
}