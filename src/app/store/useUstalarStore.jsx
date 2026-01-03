import { create } from 'zustand'
import axios from 'axios'

const useUstalarStore = create((set, get) => ({
  ustalar: [],
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,

  fetchUstalar: async (isNextPage = false) => {
    const { page, ustalar, isLoading, hasMore } = get();

    // Zaten yükleniyorsa veya daha fazla veri yoksa isteği durdur
    if (isLoading || (isNextPage && !hasMore)) return;

    const currentPage = isNextPage ? page + 1 : 1;
    set({ isLoading: true, error: null });

    try {
      // Backend'deki sayfalama parametrelerini gönderiyoruz
      const res = await axios.get(`https://api.sanayicebimde.net/ustalar?page=${currentPage}&pageSize=12`);
      
      // Backend'den gelen veriyi al
      const newItems = res.data.items || []; 

      set({
        // Eğer sonraki sayfaysa listenin sonuna ekle, değilse listeyi sıfırla
        ustalar: isNextPage ? [...ustalar, ...newItems] : newItems,
        page: currentPage,
        // Eğer gelen veri 12'den azsa (pageSize), backend'de başka usta kalmamış demektir
        hasMore: newItems.length === 12, 
        isLoading: false
      });
    } catch (error) {
      set({ 
        error: error.message || 'Veri çekilirken bir hata oluştu', 
        isLoading: false 
      });
    }
  }
}));

export default useUstalarStore;