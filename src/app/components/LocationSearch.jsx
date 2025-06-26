import React from 'react';
import { Search } from 'lucide-react'; // Arama ikonu için lucide-react kullanıyoruz

const cities = [
  'İstanbul',
  'Ankara',
  'İzmir',
  'Bursa',
  'Antalya',
  'Adana',
  'Konya',
  'Gaziantep',
  'Şanlıurfa',
  'Mersin',
];

export const LocationSearch = () => {
  return (
    <section className="py-16 bg-white text-center -mx-6 px-6">
      <h2 className="text-3xl font-bold mb-2">Şehrinize Göre Ustayı Bulun</h2>
      <p className="text-lg mb-10 text-gray-600">
        Size en yakın ve güvenilir ustaları keşfedin.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto text-white">
        <select className=" select select-bordered  w-full md:w-auto flex-grow">
          <option defaultValue={"Şehir Seçin"}>Şehir Seçin</option>
          {cities.map((city, index) => (
            <option key={index}>{city}</option>
          ))}
        </select>
        <button className="btn btn-primary btn-lg w-full md:w-auto flex-shrink-0">
          <Search className="w-5 h-5 mr-2" />
          Usta Ara
        </button>
      </div>
    </section>
  );
};
