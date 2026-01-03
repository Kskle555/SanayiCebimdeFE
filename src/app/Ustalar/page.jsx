'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/Footer';
import UstaCards from '../components/UstaCards';
import FeaturedMaster from '../components/FeaturedMaster';
import MasterCustomerComments from '../components/MasterCustomerComments';
import MasterStatistics from '../components/MasterStatistics';
import MasterFaq from '../components/ui/MasterFaq';
import useUstalarStore from '../store/useUstalarStore';

export default function Page() {
  const { fetchUstalar } = useUstalarStore();
  const [filter, setFilter] = useState('Hepsi');
  const [selectedCity, setSelectedCity] = useState('Tüm Şehirler');
  const bugun = new Date().getFullYear();

  useEffect(() => {
    if (fetchUstalar) fetchUstalar();
  }, [fetchUstalar]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 selection:bg-amber-500 selection:text-black">
      <Navbar className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800" />
      
      <main className="flex-grow">
        {/* Hero Section Mantığında Başlık */}
        <div className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">
              Güvenilir <span className="text-amber-500">Ustalar</span> Burada
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Aracınız için en iyi uzmanları bulun, yorumları okuyun ve hemen iletişime geçin.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8">
         <FeaturedMaster 
  onFilterChange={setFilter} 
  filter={filter} 
  onCityChange={setSelectedCity} 
  selectedCity={selectedCity} 
/>
          <div className="mt-12">
  <UstaCards filter={filter} city={selectedCity} />
</div>
        </div>

        <MasterStatistics />
        <MasterCustomerComments />
        <MasterFaq className="max-w-3xl mx-auto my-20 px-4" />
      </main>

      
        <Footer>{`SanayiSepeti © ${bugun}. Tüm hakları saklıdır.`}</Footer>
      
    </div>
  );
}