export default function FeaturedMaster({ onFilterChange, filter }) {
  const categories = ['Hepsi', 'En Çok Oylanan', 'En Yeni', 'En Tecrübeli'];
  
  return (
    <section className="bg-gray-800/50 backdrop-blur-md p-2 rounded-2xl border border-gray-700 shadow-2xl  flex-wrap gap-2 justify-center w-full md:w-auto md:mx-auto block">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 ${
            filter === cat 
            ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
            : 'hover:bg-gray-700 text-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}