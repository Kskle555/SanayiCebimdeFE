import React from 'react';
import Link from 'next/link';
import { 
  Wrench, Car, Battery, Activity, ShieldCheck, PenTool, 
  Search, Calendar, CheckCircle, HelpCircle, Phone 
} from 'lucide-react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/Footer';

// --- VERİ KATMANI ---

// Hizmetler Verisi
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

// Nasıl Çalışır Verisi
const stepsData = [
  {
    id: 1,
    title: 'Arıza veya Hizmeti Seç',
    desc: 'Aracının ihtiyacı olan işlemi kategorilerden belirle.',
    icon: <Search className="w-6 h-6 text-blue-400" />
  },
  {
    id: 2,
    title: 'Ustaları Karşılaştır',
    desc: 'Puanlarına, yorumlarına ve konumuna göre en iyi ustayı bul.',
    icon: <CheckCircle className="w-6 h-6 text-blue-400" />
  },
  {
    id: 3,
    title: 'Randevunu Oluştur',
    desc: 'Sana uygun saati seç ve bekleme yapmadan hizmet al.',
    icon: <Calendar className="w-6 h-6 text-blue-400" />
  }
];

// SSS Verisi
const faqData = [
  {
    q: "Ustalar güvenilir mi?",
    a: "Platformumuzdaki tüm ustalar vergi levhası ve ustalık belgeleri kontrol edilerek sisteme dahil edilir."
  },
  {
    q: "Fiyat garantisi var mı?",
    a: "Randevu oluştururken belirtilen tahmini fiyat aralıkları geçerlidir, sürpriz ek ücretlerle karşılaşmazsınız."
  },
  {
    q: "Sadece İstanbul'da mı hizmet veriyorsunuz?",
    a: "Hayır, SanayiCebimde şu an 81 ilde aktif olarak hizmet vermektedir."
  }
];

export default function HizmetlerimizPage() {
  return (
    <div>
      <Navbar />
      
      {/* Ana Arka Plan */}
      <div className="min-h-screen bg-slate-900 text-gray-100">
        
        {/* HERO SECTION */}
        <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Arka plan efekti (Opsiyonel glow) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-4">
              Güvenilir Sanayi Rehberi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-white">
              Aracınızın Dilinden <span className="text-blue-500">Anlayan Ustalar</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Motor arızasından periyodik bakıma kadar aracınızın tüm ihtiyaçları için 
              onaylı ve puanlanmış ustalara anında ulaşın.
            </p>
            
            {/* İstatistikler (Güven Bandı) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-gray-800 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12K+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Kayıtlı Usta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">81</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Hizmet İli</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Randevu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Ortalama Puan</div>
              </div>
            </div>
          </div>
        </div>

        {/* NASIL ÇALIŞIR? (Process Steps) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stepsData.map((step, index) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center border border-blue-800">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HİZMETLER GRİD YAPISI */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Tüm Hizmetlerimiz</h2>
            <Link href="/ustalar" className="text-sm text-blue-400 hover:text-blue-300">
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hizmetlerData.map((hizmet) => (
              <div 
                key={hizmet.id} 
                className="group bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500/50 shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-center w-14 h-14 bg-gray-700 group-hover:bg-blue-900/30 rounded-full mb-4 transition-colors">
                    {hizmet.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {hizmet.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {hizmet.description}
                  </p>
                </div>
                
                <div className="bg-gray-900/30 px-6 py-4 border-t border-gray-700 flex justify-between items-center">
                  <Link 
                    href={hizmet.link} 
                    className="text-blue-400 text-sm font-medium hover:text-blue-300 flex items-center gap-2 transition-colors"
                  >
                    Ustaları Listele
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SSS & ACİL DURUM BÖLÜMÜ */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SSS Kısmı */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="text-blue-500" /> Sıkça Sorulanlar
            </h3>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                  <p className="text-sm text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Acil Durum / Call to Action */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-2xl border border-blue-700/50 p-8 text-center flex flex-col justify-center items-center relative overflow-hidden">
            {/* Dekoratif Arka Plan */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
            
            <Phone className="w-12 h-12 text-white mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-2">Yolda mı kaldınız?</h3>
            <p className="text-blue-100 mb-8 max-w-md">
              Panik yapmayın! Size en yakın çekici ve yol yardım hizmetini 
              anında bulun. 7/24 aktif ustalar burada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Link 
                href="/acil-yardim" 
                className="inline-flex justify-center items-center bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
              >
                Acil Çekici Çağır
              </Link>
              <Link 
                href="/usta-kayit" 
                className="inline-flex justify-center items-center bg-white text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Usta Olarak Katıl
              </Link>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}