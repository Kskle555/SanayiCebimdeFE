import React from 'react';
import { FaStar, FaStarHalfAlt,FaMapMarker  } from 'react-icons/fa'; 
import { useState } from 'react';
export default function UstaCards({filter}) {
  const ustalar = [
    {
      id: 1,
      ad: 'Ahmet Usta',
      brans: 'Mekanik',
      sehir: 'İzmir',
      puan: 4.7,
      aciklama: '20 yıllık deneyimli motor ustası.',
      resim: 'https://www.yubusi.com/wp-content/uploads/2021/08/oto-tamir-ustasi.jpg',
      calismaSaatleri: 'Pazartesi - Cuma: 08:00 - 18:00',
      googleMapsLink: 'https://goo.gl/maps/pt7p9y4UgPj'
    },
    {
      id: 2,
      ad: 'Mehmet Usta',
      brans: 'Elektrik',
      sehir: 'Ankara',
      puan: 4.3,
      aciklama: 'Araç içi elektrik işleri uzmanı.',
      resim: 'https://blog2.araba.com/surucu-rehberi/araba-tamirleri/attachment/araba-tamirleri/',
      calismaSaatleri: 'Pazartesi - Cumartesi: 09:00 - 19:00',
      googleMapsLink: 'https://goo.gl/maps/AKDg1MwS9rM2'
    },
    {
      id: 3,
      ad: 'Ayşe Usta',
      brans: 'Kaporta & Boya',
      sehir: 'Bursa',
      puan: 4.9,
      aciklama: 'Kaporta ve lokal boya işlemlerinde uzmandır.',
      resim: 'https://www.mobilotoservis.net/wp-content/uploads/2016/05/kaporta-tamiri-guncel.jpg',
      calismaSaatleri: 'Pazar hariç her gün: 08:30 - 17:30',
      googleMapsLink: 'https://goo.gl/maps/Xvc1NejvKFGXU3dPA'
    },
    {
      id: 4,
      ad: 'Hasan Usta',
      brans: 'Mekanik',
      sehir: 'İstanbul',
      puan: 4.8,
      aciklama: 'Motor ve şanzıman tamiri konusunda uzman.',
      resim: 'https://www.esotomobil.com.tr/Content/images/services/3.jpg',
      calismaSaatleri: 'Pazartesi - Cuma: 08:00 - 18:00, Cumartesi: 09:00 - 14:00',
      googleMapsLink: 'https://goo.gl/maps/7Lj1VskGdxA2'
    },
    {
      id: 5,
      ad: 'Emine Usta',
      brans: 'Elektrik',
      sehir: 'Bursa',
      puan: 4.6,
      aciklama: 'Araç elektrik tesisatlarını yeniler ve tamir eder.',
      resim: 'https://www.pacaciogullari.com/upload/images/Oto-Kaporta-ve-Boya.jpg',
      calismaSaatleri: 'Pazartesi - Cuma: 08:00 - 18:30',
      googleMapsLink: 'https://goo.gl/maps/GJY5QfV1zpo'
    },
    {
      id: 6,
      ad: 'Yusuf Usta',
      brans: 'Kaporta & Boya',
      sehir: 'Adana',
      puan: 5.0,
      aciklama: 'Yüksek kaliteli kaporta ve boya işçilikleri.',
      resim: 'https://www.glasurit.com/data/sites/glasurit/files/styles/ars__ratio_43__808x606/public/2023-03/BOOST%2002.jpg.?itok=JKUTKN-a',
      calismaSaatleri: 'Pazar hariç her gün: 09:00 - 18:00',
      googleMapsLink: 'https://goo.gl/maps/k82bm1evbEB2'
    },
    {
      id: 7,
      ad: 'Öykü Usta',
      brans: 'Elektrik',
      sehir: 'Antalya',
      puan: 4.4,
      aciklama: 'Otomotiv elektrik işlerinde tecrübeli.',
      resim: 'https://www.akasyam.com/files/uploads/news/default/20240612-tokat-oto-elektrik-ile-arac-elektrik-sistemlerinde-uzman-hizmetler-952710-ebd908e03065182f4a35.jpg',
      calismaSaatleri: 'Pazartesi - Cumartesi: 08:00 - 19:00',
      googleMapsLink: 'https://goo.gl/maps/wF7iE6oKDeB2'
    },
    {
      id: 8,
      ad: 'Veli Usta',
      brans: 'Mekanik',
      sehir: 'Konya',
      puan: 4.2,
      aciklama: 'Araç motorları ve şanzıman konusunda uzman.',
      resim: 'https://www.bakismazotomotiv.com/uploads/sayfalar/oto-elektrik-elektronik.jpg',
      calismaSaatleri: 'Pazartesi - Cuma: 08:30 - 18:00',
      googleMapsLink: 'https://goo.gl/maps/qW5QPKp8BaG2'
    },
    {
      id: 9,
      ad: 'Fatma Usta',
      brans: 'Kaporta & Boya',
      sehir: 'İzmir',
      puan: 4.8,
      aciklama: 'Kaporta onarımları ve dış boyama işlemlerinde profesyonel.',
      resim: 'https://isinolsun.com/blog/wp-content/uploads/2024/02/oto-tamircisi-nedir.jpg',
      calismaSaatleri: 'Pazar hariç her gün: 09:00 - 18:00',
      googleMapsLink: 'https://goo.gl/maps/2U7z5BXr5S62'
    },
    {
      id: 10,
      ad: 'Ali Usta',
      brans: 'Elektrik',
      sehir: 'Mersin',
      puan: 4.7,
      aciklama: 'Elektrik arızaları ve onarımlarında uzman.',
      resim: 'https://arabam-blog.mncdn.com/wp-content/uploads/2021/05/4-1068x601.jpg',
      calismaSaatleri: 'Pazartesi - Cumartesi: 08:00 - 19:00',
      googleMapsLink: 'https://goo.gl/maps/1kN2wF9c3so'
    },
  ];
  

   // Filtreleme işlemleri
   let filteredUstalar = [...ustalar];

   if (filter === 'En Çok Oylanan') {
     filteredUstalar.sort((a, b) => b.puan - a.puan);
   } else if (filter === 'En Yeni') {
     //idye göre siralayalim
      filteredUstalar.sort((a, b) => b.id - a.id);
   } else if (filter === 'En Tecrübeli') {
     filteredUstalar.sort((a, b) => b.puan - a.puan);
   }
 
   return (
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {filteredUstalar.map((usta) => (
         <div key={usta.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full">
           <div className="relative">
             <img src={usta.resim} alt={usta.ad} className="w-full h-64 object-cover" />
           </div>
           <div className="p-4">
             <h2 className="text-xl font-semibold text-gray-800 mb-2">{usta.ad}</h2>
             <p className="text-sm text-gray-600">{usta.brans} - {usta.sehir}</p>
             <div className="flex items-center mb-2">
               <div className="flex text-yellow-400">
                 {[...Array(Math.floor(usta.puan))].map((_, index) => (
                   <FaStar key={index} />
                 ))}
               </div>
               <span className="text-gray-600 text-sm ml-2">({usta.puan}/5)</span>
               <div className="flex items-center ml-auto">
                 <FaMapMarker style={{ color: '#007bff' }} className="text-gray-600 text-sm -mr-1.5" />
                 <a href={usta.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm ml-2 hover:underline">Haritada Gör</a>
               </div>
             </div>
             <p className="text-gray-600 text-sm mb-4">{usta.aciklama}</p>
             <div className="flex space-x-2">
               <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                 İletişime Geç
               </button>
               <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
                 Profili Gör
               </button>
             </div>
           </div>
         </div>
       ))}
     </div>
   );
}
