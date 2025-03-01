import { ref, computed } from 'vue'
import { useNhostClient } from '@nhost/vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const nhost = useNhostClient()
  const user = ref(null)
  const isLoading = ref(true)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const userRole = computed(() => user.value?.metadata?.role || 'user')

  async function initialize() {
    isLoading.value = true
    error.value = null
    
    try {
      const authState = await nhost.auth.getAuthenticationStatus()
      user.value = authState.user
    } catch (err) {
      error.value = err.message
      console.error('Auth initialization error:', err)
    } finally {
      isLoading.value = false
    }
  }

  async function signIn(email, password) {
    isLoading.value = true
    error.value = null
    
    try {
      const { session, error: authError } = await nhost.auth.signIn({
        email,
        password
      })
      
      if (authError) {
        throw new Error(authError.message)
      }
      
      user.value = session.user
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  async function signUp(email, password, metadata = {}) {
    isLoading.value = true
    error.value = null
    
    try {
      const { session, error: authError } = await nhost.auth.signUp({
        email,
        password,
        options: {
          metadata
        }
      })
      
      if (authError) {
        throw new Error(authError.message)
      }
      
      user.value = session?.user || null
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  async function signOut() {
    isLoading.value = true
    error.value = null
    
    try {
      await nhost.auth.signOut()
      user.value = null
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    } finally {
      isLoading.value = false
    }
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    userRole,
    initialize,
    signIn,
    signUp,
    signOut
  }
})