export default function MasterStatistics() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="stats stats-vertical lg:stats-horizontal w-full bg-gray-800 border border-gray-700 shadow-xl">
        <div className="stat place-items-center">
          <div className="stat-title text-gray-400 font-medium">Aktif Usta</div>
          <div className="stat-value text-amber-500">200+</div>
          <div className="stat-desc text-gray-500">Tüm Türkiye genelinde</div>
        </div>
        
        <div className="stat place-items-center border-gray-700">
          <div className="stat-title text-gray-400 font-medium">Memnuniyet</div>
          <div className="stat-value text-emerald-500">95%</div>
          <div className="stat-desc text-gray-500">Başarılı iş teslimi</div>
        </div>
        
        <div className="stat place-items-center border-gray-700">
          <div className="stat-title text-gray-400 font-medium">Hizmet Bölgesi</div>
          <div className="stat-value text-blue-500">15+</div>
          <div className="stat-desc text-gray-500">Şehir ve ilçe</div>
        </div>
      </div>
    </section>
  );
}