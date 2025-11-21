import React from 'react';
import Link from 'next/link';
import { Wrench, Car, Battery, Activity, ShieldCheck, PenTool } from 'lucide-react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/Footer';
// VERİ KATMANI
const hizmetlerData = [
  {
    id: 1,
    title: 'Motor ve Mekanik',
    description: 'Motor rektifiye, yağ değişimi, filtre bakımları ve ağır mekanik onarımlar için uzman ustalar.',
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
    link: '/ustalar?kategori=mekanik'
  },
  {
    id: 2,
    title: 'Kaporta ve Boya',
    description: 'Çizik giderme, göçük düzeltme, fırın boya ve lokal boya işlemleriyle aracınız ilk günkü gibi.',
    icon: <Car className="w-8 h-8 text-blue-500" />,
    link: '/ustalar?kategori=kaporta'
  },
  {
    id: 3,
    title: 'Oto Elektrik & Elektronik',
    description: 'Akü değişimi, far ayarı, beyin tamiri ve tüm elektrik aksam sorunları için çözümler.',
    icon: <Battery className="w-8 h-8 text-yellow-500" />,
    link: '/ustalar?kategori=elektrik'
  },
  {
    id: 4,
    title: 'Periyodik Bakım',
    description: 'Aracınızın ömrünü uzatan düzenli kontroller ve sıvı değişimleri.',
    icon: <Activity className="w-8 h-8 text-green-500" />,
    link: '/ustalar?kategori=bakim'
  },
  {
    id: 5,
    title: 'Oto Ekspertiz',
    description: 'İkinci el araç alım satımlarında güvenilir ve detaylı ekspertiz raporları.',
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
    link: '/ustalar?kategori=ekspertiz'
  },
  {
    id: 6,
    title: 'Modifiye ve Aksesuar',
    description: 'Aracınızı kişiselleştirin. Cam filmi, ses sistemleri ve body kit uygulamaları.',
    icon: <PenTool className="w-8 h-8 text-red-500" />,
    link: '/ustalar?kategori=modifiye'
  },
];

export default function HizmetlerimizPage() {
  return (
    <div>
      <Navbar />
      
      {/* Ana Arka Plan: Slate-900 */}
      <div className="min-h-screen bg-slate-900">
        
        {/* HERO SECTION */}
        <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
              Aracınız İçin İhtiyacınız Olan Her Şey
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              SanayiCebimde ile binlerce onaylı ustaya tek tıkla ulaşın. 
              Aracınızın ihtiyacı olan hizmeti seçin, en yakın ustayı hemen bulun.
            </p>
          </div>
        </div>

        {/* HİZMETLER GRİD YAPISI */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hizmetlerData.map((hizmet) => (
              <div 
                key={hizmet.id} 
                // KART: BG-GRAY-800, Border daha koyu (gray-700)
                className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  {/* İkon Yuvarlağı: Artık koyu gri (gray-700) */}
                  <div className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full mb-4">
                    {hizmet.icon}
                  </div>
                  {/* Başlık: Beyaz */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {hizmet.title}
                  </h3>
                  {/* Açıklama: Açık Gri (gray-400) */}
                  <p className="text-gray-400 leading-relaxed">
                    {hizmet.description}
                  </p>
                </div>
                
                {/* Kart Altı Link Alanı: Hafif farklı bir koyu ton */}
                <div className="bg-gray-900/30 px-6 py-4 border-t border-gray-700">
                  <Link 
                    href={hizmet.link} 
                    // Link Rengi: Blue-600 yerine Blue-400 (Koyu zeminde daha iyi görünür)
                    className="text-blue-400 font-medium hover:text-blue-300 flex items-center gap-2 transition-colors"
                  >
                    Ustaları Gör 
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA (Eylem Çağrısı) */}
        <div className="bg-gray-800 py-12 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Siz de Sanayi Ustası mısınız?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Hizmetlerinizi binlerce araç sahibine ulaştırın, randevularınızı yönetin ve işinizi büyütün.
            </p>
            <Link 
              href="/usta-kayit" 
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Hemen Usta Olarak Katıl
            </Link>
          </div>
        </div>

      </div>
        <Footer />
    </div>
  );
}