// store/useUstalarStore.js
import { create } from 'zustand'
import axios from 'axios'

const useUstalarStore = create((set) => ({
  ustalar: [],
  isLoading: false,
  error: null,
  page: 1,
  hasMore:true,// Daha veri var mı?

 fetchUstalar: async (isNextPage = false)=>{
  const {page,ustalar} = get();
  const currentPage = isNextPage ? page + 1 : 1;
  set({isLoading:true, error:null});
  try{
    const res = await axios.get(`https://api.sanayicebimde.net/ustalar?page=${currentPage}&pageSize=12`);
    const newItems = res.data.items;
    const newUstalar = response.data;
    set({
      ustalar: isNextPage ? [...ustalar, ...newItems] : newItems,
      page: currentPage, 
      hasMore: newItems.length === 12,   // Eğer gelen veri pageSize'dan azsa bitmiştir
      isLoading:false
    }); 
  } catch (error) {
    set({ error: error.message, isLoading: false });
  }
}
}));
export default useUstalarStore
