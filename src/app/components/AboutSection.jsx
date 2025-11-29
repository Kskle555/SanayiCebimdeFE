import { FileText, Search, Calendar } from "lucide-react";

export default function AboutSection() {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "İhtiyacını Belirt",
      description: "Aracınızın markası, modeli ve ihtiyacınız olan hizmeti girerek talebinizi oluşturun.",
      color: "from-blue-400 to-blue-600" 
    },
    {
      number: "2", 
      icon: Search,
      title: "Teklifleri Karşılaştır",
      description: "Bölgenizdeki güvenilir ustalardan gelen teklifleri inceleyin, yorumları okuyun ve size en uygun olanı seçin.",
      color: "from-purple-400 to-purple-600"
    },
    {
      number: "3",
      icon: Calendar,
      title: "Randevunu Al",
      description: "Seçtiğiniz ustadan size uygun bir tarih ve saat için kolayca randevunuzu oluşturun.",
      color: "from-green-400 to-green-600"
    }
    
  ];

  return (
    <section className="bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Nasıl Çalışır?
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Sadece 3 kolay adımda aracınızın ihtiyacını karşılayın.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 text-center md:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="flex flex-col items-center group">
                {/* Step Number Circle */}
                <div className="relative">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${step.color} text-4xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-4 w-4 text-gray-700" />
                  </div>

                  {/* Connection Line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-20 w-32 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500">
                      <div className="h-full bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-400 max-w-sm group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Hover Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Neden Bu Kadar Kolay?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                <div className="text-green-400 font-bold text-lg mb-2">Otomatik Eşleştirme</div>
                <div className="text-gray-300 text-sm">Yapay zeka ile en uygun ustaları buluyoruz</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                <div className="text-green-400 font-bold text-lg mb-2">Anında Bildirim</div>
                <div className="text-gray-300 text-sm">Teklifler geldiğinde hemen haberdar olursunuz</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                <div className="text-green-400 font-bold text-lg mb-2">Güvenli Ödeme</div>
                <div className="text-gray-300 text-sm">İş tamamlandıktan sonra güvenle ödeme yapın</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
                <div className="text-green-400 font-bold text-lg mb-2">7/24 Destek</div>
                <div className="text-gray-300 text-sm">Herhangi bir sorunuzda yanınızdayız</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-gray-900 font-bold text-lg rounded-full hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Hemen Başla
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}