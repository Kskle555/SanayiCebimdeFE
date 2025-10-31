'use client';
import React, { useEffect } from 'react';
import { FaStar, FaMapMarker } from 'react-icons/fa';
import useUstalarStore from '../store/useUstalarStore';

export default function UstaCards({ filter }) {

  // Zustand store'dan ustalar verisini ve fetch fonksiyonunu al
  const { ustalar, fetchUstalar } = useUstalarStore();

  useEffect(() => {
    if (fetchUstalar) fetchUstalar();
  }, [fetchUstalar]);

  // API'den gelen veriyi component'te kullanacağımız alanlara map et
const mappedUstalar = ustalar.map(u => ({
    id: u.id,
    name: u.name,
    profession: u.profession,
    location: u.location,
    rating: u.rating,
    description: u.description,
    imageURL: u.imageURL,
    googleMapsLink: u.googleMapsLink || "#" // Eğer API vermiyorsa fallback
}));


  // Filtreleme işlemleri
  let filteredUstalar = [...mappedUstalar];
  if (filter === 'En Çok Oylanan') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  } else if (filter === 'En Yeni') {
    filteredUstalar.sort((a, b) => b.id - a.id);
  } else if (filter === 'En Tecrübeli') {
    filteredUstalar.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredUstalar.map((usta) => (
        <div key={usta.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
          <div className="relative">
            <img src={usta.imageURL} alt={usta.name} className="w-full h-64 object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{usta.name}</h2>
            <p className="text-sm text-gray-600">{usta.profession} - {usta.location}</p>
            <div className="flex items-center mb-2">
             <div className="flex text-yellow-400">
          {Array.from(
          { length: Math.floor(usta.rating || 0) },
          (_, index) => <FaStar key={index} />
          )}
          </div>

              <span className="text-gray-600 text-sm ml-2">({usta.rating}/5)</span>
              <div className="flex items-center ml-auto">
                <FaMapMarker style={{ color: '#007bff' }} className="text-gray-600 text-sm -mr-1.5" />
                <a href={usta.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm ml-2 hover:underline">
                  Haritada Gör
                </a>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">{usta.description}</p>
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                İletişime Geç
              </button>
              <button onClick={() => { window.location.href = `/Ustalar/${usta.id}` }} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
                Profili Gör
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
