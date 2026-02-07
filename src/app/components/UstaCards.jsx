"use client";
import React from 'react';
import { FaStar, FaMapMarkerAlt, FaTools, FaChevronRight, FaPlus,FaWhatsapp } from 'react-icons/fa';
import useUstalarStore from '../store/useUstalarStore';

export default function UstaCards({ filter, city }) {

  const { ustalar, fetchUstalar, hasMore, isLoading } = useUstalarStore();

  const handleWhatsApp = (phone, name) => {
    if (!phone) {
      alert("Bu ustanın telefon numarası kayıtlı değil.");
      return;
    }

    // Numarayı temizle (boşlukları, parantezleri vs. kaldır)s
    // Eğer numara 0 ile başlıyorsa başındaki 0'ı atıp Türkiye kodu olan 90'ı eklee
    let cleanedPhone = phone.replace(/\D/g, ''); // Sadece rakamlar kalsın
    if (cleanedPhone.startsWith('0')) {
      cleanedPhone = '90' + cleanedPhone.substring(1);
    } else if (!cleanedPhone.startsWith('90')) {
      cleanedPhone = '90' + cleanedPhone;
    }

    const message = `Merhaba ${name} usta, SanayiSepeti üzerinden size ulaşıyorum. Bir konu hakkındaa bilgi alabilir miyim?`;
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL'ini oluştur ve yeni sekmede aç
    const whatsappUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // 1. Filtreleme ve Sıralama Mantığı
  let filteredUstalar = [...ustalar];

  if (city && city !== 'Tüm Şehirler') {
    filteredUstalar = filteredUstalar.filter(u => 
      u.location && u.location.toLowerCase().includes(city.toLowerCase())
    );
  }

  // Sıralama mantığı (Kategoriye göre)
  if (filter === 'En Çok Oylanan') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  } else if (filter === 'En Yeni') {
    filteredUstalar.sort((a, b) => b.id - a.id);
  } else if (filter === 'En Tecrübeli') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="py-8 flex flex-col items-center"> {/* Ortalamak için flex-col eklendi */}
      {filteredUstalar.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {filteredUstalar.map((usta) => (
              <div 
                key={usta.id} 
                className="group bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)] flex flex-col"
              >
                {/* Resim Alanı */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={usta.imageURL || 'https://via.placeholder.com/400x300?text=Usta+Resmi'} 
                    alt={usta.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 border border-amber-500/30">
                    <FaStar className="text-amber-500 text-sm" />
                    <span className="text-white font-bold text-sm">{usta.rating || '0.0'}</span>
                  </div>
                </div>

                {/* İçerik Alanı */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{usta.name}</h3>
                    <p className="text-amber-500/90 text-sm font-medium flex items-center gap-2 mt-1">
                      <FaTools size={12} /> {usta.profession}
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm italic line-clamp-2 mb-6">"{usta.description}"</p>
                  
                  <div className="mt-auto flex items-center justify-between text-gray-500 text-xs border-t border-gray-700/50 pt-4 mb-6">
                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-amber-500" />{usta.location}</span>
                    <a href={usta.googleMapsLink} target="_blank" className="text-blue-400 hover:underline">Harita</a>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                  <button 
                  onClick={() => handleWhatsApp(usta.phone, usta.name)}
                  className="btn btn-md bg-emerald-600 hover:bg-emerald-700 border-none text-white font-bold rounded-xl transition-all active:scale-95 gap-2"
                >
                  <FaWhatsapp size={18} />
                  İletişime Geç
                </button>
                    <button onClick={() => window.location.href = `/Ustalar/${usta.id}`} className="btn btn-md btn-outline border-gray-600 hover:bg-gray-700 text-gray-300 rounded-xl">
                      Profil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

      
          {hasMore && (
            <div className="mt-16 mb-8">
              <button 
                onClick={() => fetchUstalar(true)} // true: veriyi listenin sonuna ekle demek
                disabled={isLoading}
                className={`btn btn-wide h-14 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-amber-500 text-white rounded-2xl transition-all duration-300 gap-3 ${isLoading ? 'loading' : ''}`}
              >
                {!isLoading && <FaPlus className="text-amber-500" />}
                {isLoading ? 'Ustalara Bakılıyor...' : 'Daha Fazla Usta Yükle'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 bg-gray-800/20 rounded-[3rem] border-2 border-dashed border-gray-700 w-full">
           <FaTools size={40} className="text-gray-600 mb-4" />
           <h3 className="text-xl font-semibold text-gray-300">Usta Bulunamadı</h3>
        </div>
      )}
    </section>
  );
}