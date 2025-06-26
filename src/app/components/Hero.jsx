import { FaCheckCircle, FaRocket, FaSearch } from "react-icons/fa";

export function Hero() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Arka plan efekt balonu */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-primary opacity-10 rounded-full blur-3xl z-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* Sol Kısım */}
        <div>
          <span className="inline-block bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow">
            🚗 Aracına En Yakın Ustayı Bul
          </span>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Güvenilir Usta, Hızlı Hizmet <br className="hidden md:block" />
            <span className="text-primary">Sanayi Cebimde</span> ile!
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Konumuna en yakın, onaylı ve yorumlu ustalara saniyeler içinde ulaş. Üstelik fiyat teklifi doğrudan cebine gelsin!
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button className="btn btn-primary btn-lg flex items-center gap-2">
              <FaRocket /> Hemen Başla
            </button>
            <button className="btn btn-outline btn-secondary btn-lg flex items-center gap-2">
              <FaSearch /> Paketleri İncele
            </button>
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            %100 Doğrulanmış ustalar & gerçek kullanıcı yorumları
          </div>
        </div>

        {/* Sağ Kısım */}
        <div className="relative">
        <img
  src="https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=2048x2048&w=is&k=20&c=IG4VlgJ9eN3od_gGzyfFvsAf4WPWO2SfIxByaHarf8M="
  alt="Usta ve araç"
  className="w-full max-w-5xl mx-auto md:mx-0 rounded-xl shadow-2xl"
/>


          {/* Arka plan blur top efekti */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary opacity-20 rounded-full blur-3xl animate-ping"></div>
        </div>

      </div>
    </section>
  );
}
