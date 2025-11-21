import React from 'react';
import Link from 'next/link';
import { 
  Search, FileText, Calendar, CheckCircle, 
  ArrowRight, Shield, Clock, Wallet 
} from 'lucide-react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/Footer';

const steps = [
  {
    id: 1,
    title: 'İhtiyacını Belirt',
    description: 'Aracınızın markası, modeli ve ihtiyacınız olan hizmeti girerek talebinizi saniyeler içinde oluşturun.',
    icon: <FileText className="w-8 h-8 text-blue-400" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: 'Teklifleri Karşılaştır',
    description: 'Bölgenizdeki güvenilir ustalardan gelen teklifleri inceleyin, yorumları okuyun ve size en uygun olanı seçin.',
    icon: <Search className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500 to-pink-400"
  },
  {
    id: 3,
    title: 'Randevunu Al',
    description: 'Seçtiğiniz ustadan size uygun bir tarih ve saat için kolayca randevunuzu oluşturun ve onaya gönderin.',
    icon: <Calendar className="w-8 h-8 text-green-400" />,
    color: "from-green-500 to-emerald-400"
  }
];

const benefits = [
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "Zaman Kazanın",
    desc: "Sanayi sanayi dolaşmak yerine, oturduğunuz yerden en uygun ustayı bulun."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Güvenilir Hizmet",
    desc: "Sadece onaylanmış ve puanlanmış ustalarla çalışın, sürpriz yaşamayın."
  },
  {
    icon: <Wallet className="w-6 h-6 text-blue-400" />,
    title: "Fiyat Avantajı",
    desc: "Teklifleri karşılaştırarak bütçenize en uygun servisi kolayca seçin."
  }
];

export default function NasilCalisirPage() {
  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen bg-slate-900 text-gray-100">
        
        {/* HERO SECTION */}
        <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Sadece <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">3 Kolay Adımda</span> <br />
              Aracınızın İhtiyacını Karşılayın
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Karmaşık süreçlerle uğraşmayın. SanayiCebimde ile aradığınız ustaya ulaşmak 
              ve randevu almak sandığınızdan çok daha kolay.
            </p>
          </div>
        </div>

        {/* STEP PROCESS SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative">
            
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 z-0 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, index) => (
                <div key={step.id} className="relative group">
                  {/* Card Content */}
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-300 relative overflow-hidden shadow-lg">
                    
                    {/* Big Number Background */}
                    <div className="absolute -right-4 -bottom-4 text-9xl font-black text-gray-700/20 select-none transition-transform group-hover:scale-110 duration-500">
                      {step.id}
                    </div>

                    {/* Icon & Title */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {step.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Indicator / Progress Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} w-0 group-hover:w-full transition-all duration-500`}></div>
                  </div>

                  {/* Mobile Connector Arrow (Hidden on Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center py-4 text-gray-600">
                      <ArrowRight className="w-8 h-8 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BENEFITS SECTION (Neden Biz?) */}
        <div className="bg-gray-800/50 py-20 mt-12 border-y border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Neden Bu Süreci İzlemelisiniz?</h2>
              <p className="text-gray-400">Geleneksel sanayi deneyimini teknolojiyle birleştiriyoruz.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-900/50 rounded-xl border border-gray-700/50">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-blue-400">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA (Call To Action) */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-blue-900/40 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 relative z-10">
              Aracınız İçin En Doğru Kararı Verin
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Hemen ücretsiz talebinizi oluşturun, bölgenizdeki en iyi ustalardan teklif almaya başlayın.
            </p>
            
            <Link 
              href="/talep-olustur" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors shadow-lg relative z-10"
            >
              <CheckCircle className="w-5 h-5" />
              Hemen Talep Oluştur
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}