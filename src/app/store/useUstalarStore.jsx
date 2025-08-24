// store/useUstalarStore.js
import { create } from 'zustand'
import axios from 'axios'

const useUstalarStore = create((set) => ({
  ustalar: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null })
    try {
      const res = await axios.get('/api/ustalar') // ←
      set({ ustalar: res.data, isLoading: false })
    } catch (err) {
      set({ error: err.message || 'Veri çekme hatası', isLoading: false })
    }
  },
}))
export default useUstalarStore
