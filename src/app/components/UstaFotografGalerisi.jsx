'use client';
import React, { useState } from 'react';

const UstaFotografGalerisi = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!gallery || gallery.length === 0) {
    return null; // Eğer galeri boşsa hiçbir şey render etme
  }

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    document.getElementById('gallery_modal').showModal();
  };

  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body">
        <h3 className="card-title">Fotoğraf Galerisi</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Galeri fotoğrafı ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DaisyUI Modal */}
      <dialog id="gallery_modal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl p-0 bg-transparent shadow-none">
          <img src={selectedImage} alt="Seçilen fotoğraf" className="w-full h-auto rounded-lg" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>kapat</button>
        </form>
      </dialog>
    </div>
  );
};

export default UstaFotografGalerisi;