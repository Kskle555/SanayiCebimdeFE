'use client'
import React, { useState,useEffect } from 'react';
import { Navbar } from '../components/ui/navbar';
import Footer from '../components/Footer';
import UstaCards from '../components/UstaCards';
import FeaturedMaster from '../components/FeaturedMaster';
import MasterCustomerComments from '../components/MasterCustomerComments';
import MasterStatistics from '../components/MasterStatistics';
import MasterFaq from '../components/ui/MasterFaq';
import useUstalarStore from '../store/useUstalarStore';

//git
const bugun = new Date().getFullYear();

export default function Page() {

  const { ustalar, isLoading, error, fetchUstalar } = useUstalarStore();

  useEffect(() => {
     if (fetchUstalar) fetchUstalar();
   
  }, []);

  // Filtreyi state olarak page bileşeninde tut
  const [filter, setFilter] = useState('');

  // Filtre değiştirildiğinde filtreyi güncelleyen fonksiyon
  const handleFilterChange = (newFilter) => {
    console.log(newFilter);
    setFilter(newFilter);
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-100">
      <Navbar
        className="p-6 border-b bg-neutral text-white shadow-md flex items-center justify-between"
        buttonLabels={['Anasayfa', 'Ustalar', 'Paketler', 'İletişim']}
      >
        SanayiSepeti
      </Navbar>
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-6 text-neutral">Ustalar</h1>

         {/* {ustalar.map((x)=>(<div key={x.id}><h1 className='text-red-500'>{x.name}</h1></div>))} */}
          <FeaturedMaster onFilterChange={handleFilterChange} filter={filter} />

         
          <UstaCards filter={filter} />
        </div>
        <MasterCustomerComments />
        <MasterStatistics />
        <MasterFaq className={"mt-16 max-w-4xl mx-auto mb-16"} />
      </main>

      <footer className="bg-neutral text-white p-4 mt-auto">
        <Footer>{`SanayiSepeti © ${bugun}. Tüm hakları saklıdır.`}</Footer>
      </footer>
    </div>
  );
}
