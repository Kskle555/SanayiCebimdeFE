import React from 'react';

export default function FeaturedMaster({ onFilterChange, filter }) {
  return (
    <section className="mt-5 p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-neutral">Öne Çıkan Ustalar</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <span 
          className={`badge badge-primary badge-lg ${filter === 'En Çok Oylanan' ? 'badge-active' : ''}`} 
          onClick={() => onFilterChange('En Çok Oylanan')}
        >
          En Çok Oylanan
        </span>
        <span 
          className={`badge badge-secondary badge-lg ${filter === 'En Yeni' ? 'badge-active' : ''}`} 
          onClick={() => onFilterChange('En Yeni')}
        >
          En Yeni
        </span>
        <span 
          className={`badge badge-accent badge-lg ${filter === 'En Tecrübeli' ? 'badge-active' : ''}`} 
          onClick={() => onFilterChange('En Tecrübeli')}
        >
          En Tecrübeli
        </span>
      </div>
    </section>
  );
}
