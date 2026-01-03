import { FaMapMarkerAlt } from 'react-icons/fa';
export default function FeaturedMaster({ onFilterChange, filter, onCityChange, selectedCity }) {
  const categories = ['Hepsi', 'En Çok Oylanan', 'En Yeni', 'En Tecrübeli'];
  // const sehirler = ['Tüm Şehirler', 'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Konya'];
  const sehirler = ['İzmir'];
  return (
    <section className="bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl border border-gray-700 shadow-2xl flex flex-wrap gap-4 justify-between items-center w-full">
      {/* Kategori Butonları */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
              filter === cat 
              ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
              : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Şehir Seçimi */}
      <div className="relative w-full md:w-64 group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 z-10">
          <FaMapMarkerAlt />
        </div>
        <select 
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="select select-bordered w-full pl-10 bg-gray-900 border-gray-700 text-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl transition-all duration-300"
        >
          {sehirler.map((sehir) => (
            <option key={sehir} value={sehir}>
              {sehir}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}