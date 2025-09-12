"use client";

import { Archive, Shield, Clock } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Archive,
      title: "Geniş Hizmet Yelpazesi",
      description: "Otomobil tamir, kaporta, elektrik, boya, muayene, vize, mekanik ve klima tamir gibi tüm hizmetler tek bir platformda."
    },
    {
      icon: Shield,
      title: "Güvenilir Ustalar",
      description: "Alanında uzman, deneyimli ve müşteri memnuniyeti yüksek ustalarla çalışın."
    },
    {
      icon: Clock,
      title: "Hızlı ve Kolay",
      description: "Birkaç adımla teklif alın, ustaları karşılaştırın ve randevunuzu kolayca oluşturun."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Neden Sanayicebimde?
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Aracınızın bakımı için en güvenilir ve kolay çözüm.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group transform rounded-2xl bg-gray-800 p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-750"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400 group-hover:bg-green-500 transition-colors duration-300">
                  <IconComponent className="h-6 w-6 text-gray-900" />
                </div>
                
                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="mt-4 text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400">%100</div>
              <div className="text-sm text-gray-400 mt-1">Güvenli Ödeme</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Müşteri Desteği</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400">0₺</div>
              <div className="text-sm text-gray-400 mt-1">Komisyon</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-green-400">5⭐</div>
              <div className="text-sm text-gray-400 mt-1">Ortalama Puan</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gray-800/50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">
              Güvenli ve Şeffaf Hizmet
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Doğrulanmış Ustalar
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Gerçek Müşteri Yorumları
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Şeffaf Fiyatlandırma
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}