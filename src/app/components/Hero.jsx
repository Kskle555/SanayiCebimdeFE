import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center py-40 px-10 bg-gradient-to-b from-black/60 to-black/80">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7kRm71VqWDe_bamK80deZ9Xz4vRTcN21FLKEywix21C8pSuolbbug7FxuKvXsO97DiaLhmKmyblL_V4lnsR6bFcvA4785sEShVibxF_Q3APJ8GXJjItqmX646gMpE_7NfPwVPxpDz_eQUckRVyAdM3Hm1dv4ase5u0qf5T7_GEskSDCuNk7JvPn0g9um5Ggkay7iljS8DHq-zUp1AwE7xjhXi_q2mv6-hRjgNgZwa6TjVoooyt0Q6LoAI9KlwzuQDI8iSbQV2Cw")'
        }}
      />
      
      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          Aracınızın Bakımı İçin En İyi Adres
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Sanayicebimde ile aracınızın ihtiyacı olan tüm hizmetleri tek bir yerden bulun. 
          Güvenilir ustalar, uygun fiyatlar ve kolay randevu sistemi ile aracınızın bakımını dert etmeyin.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <div className="flex flex-col w-full max-w-xl">
            <div className="relative">
              <input
                className="w-full rounded-full border-2 border-transparent bg-white/20 py-4 px-6 text-white placeholder-gray-300 backdrop-blur-sm focus:border-green-400 focus:bg-white/20 focus:outline-none focus:ring-0 transition-all duration-300"
                placeholder="Aracınızın markası, modeli veya ihtiyacınız olan hizmet..."
                type="text"
              />
              <button className="absolute inset-y-0 right-0 flex items-center justify-center rounded-full h-full px-6 bg-green-400 text-gray-900 text-base font-bold tracking-wider hover:bg-green-500 transition-colors duration-300">
                Teklif Al
              </button>
            </div>
          </div>
        </div>

        {/* Quick Service Tags */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Periyodik Bakım",
            "Kaporta & Boya",
            "Mekanik Tamir",
            "Elektrik & Elektronik",
            "Muayene & Vize",
            "Klima Bakımı"
          ].map((service, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              {service}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">500+</div>
            <div className="text-sm text-gray-300 mt-1">Güvenilir Usta</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">10,000+</div>
            <div className="text-sm text-gray-300 mt-1">Memnun Müşteri</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-green-400">50+</div>
            <div className="text-sm text-gray-300 mt-1">Şehir</div>
          </div>
        </div>
      </div>
    </section>
  );
}