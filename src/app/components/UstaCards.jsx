"use client";
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaTools, FaChevronRight } from 'react-icons/fa';
import useUstalarStore from '../store/useUstalarStore';

export default function UstaCards({ filter, city }) {
  const { ustalar } = useUstalarStore();

  // 1. Filtreleme ve Sıralama Mantığı
  let filteredUstalar = [...ustalar];

  if (city && city !== 'Tüm Şehirler') {
    filteredUstalar = filteredUstalar.filter(u => 
      u.location && u.location.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (filter === 'En Çok Oylanan') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  } else if (filter === 'En Yeni') {
    filteredUstalar.sort((a, b) => b.id - a.id);
  } else if (filter === 'En Tecrübeli') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="py-8">
      {filteredUstalar.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUstalar.map((usta) => (
            <div 
              key={usta.id} 
              className="group bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] flex flex-col"
            >
              {/* Üst Kısım: Resim ve Rating Badge */}
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={usta.imageURL || 'https://via.placeholder.com/400x300?text=Usta+Resmi'} 
                  alt={usta.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-amber-500/30">
                  <FaStar className="text-amber-500 text-sm" />
                  <span className="text-white font-bold text-sm">{usta.rating || '0.0'}</span>
                </div>
              </div>

              {/* Orta Kısım: İçerik */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300">
                    {usta.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-amber-500/90 text-sm font-medium">
                    <FaTools size={12} />
                    <span>{usta.profession}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-6 italic">
                  "{usta.description || 'Tecrübeli usta, kaliteli hizmet.'}"
                </p>

                {/* Konum Bilgisi */}
                <div className="mt-auto flex items-center justify-between text-gray-500 text-xs border-t border-gray-700/50 pt-4 mb-6">
                  <div className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-amber-500" />
                    <span>{usta.location}</span>
                  </div>
                  <a 
                    href={usta.googleMapsLink || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    Haritada Gör
                  </a>
                </div>

                {/* Aksiyon Butonları */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="btn btn-md bg-amber-500 hover:bg-amber-600 border-none text-black font-bold rounded-xl transition-all active:scale-95">
                    İletişime Geç
                  </button>
                  <button 
                    onClick={() => { window.location.href = `/Ustalar/${usta.id}` }}
                    className="btn btn-md btn-outline border-gray-600 hover:bg-gray-700 text-gray-300 rounded-xl transition-all group/btn"
                  >
                    Profil
                    <FaChevronRight className="text-[10px] transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Boş Durum Tasarımı */
        <div className="flex flex-col items-center justify-center py-24 bg-gray-800/20 rounded-[3rem] border-2 border-dashed border-gray-700">
          <div className="bg-gray-800 p-6 rounded-full mb-4">
            <FaTools size={40} className="text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-300">Usta Bulunamadı</h3>
          <p className="text-gray-500 mt-2">Seçtiğiniz kriterlere veya şehre uygun sonuç yok.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 text-amber-500 hover:underline text-sm"
          >
            Filtreleri Temizle
          </button>
        </div>
      )}
    </section>
  );
}