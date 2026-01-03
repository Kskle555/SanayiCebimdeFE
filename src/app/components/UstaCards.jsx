"use client";
import { FaStar, FaMapMarkerAlt, FaTools } from 'react-icons/fa';
import useUstalarStore from '../store/useUstalarStore';
export default function UstaCards({ filter }) {
  const { ustalar } = useUstalarStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {ustalar.map((usta) => (
        <div key={usta.id} className="group bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10">
          {/* Görsel Alanı */}
          <div className="relative h-56 overflow-hidden">
            <img src={usta.imageURL} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-amber-500 border border-amber-500/20">
              <FaStar className="text-sm" />
              <span className="font-bold text-sm">{usta.rating}</span>
            </div>
          </div>

          {/* İçerik Alanı */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors">{usta.name}</h3>
                <p className="text-amber-500/80 text-sm flex items-center gap-2">
                  <FaTools size={12} /> {usta.profession}
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm line-clamp-2 mb-4 h-10 italic">
              "{usta.description}"
            </p>

            <div className="flex items-center gap-2 text-gray-500 text-xs mb-6">
              <FaMapMarkerAlt />
              <span>{usta.location}</span>
              <a href={usta.googleMapsLink} target="_blank" className="ml-auto text-blue-400 hover:underline">Haritada Aç</a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="btn btn-sm bg-amber-500 hover:bg-amber-600 border-none text-black normal-case">
                İletişime Geç
              </button>
              <button onClick={() => window.location.href = `/Ustalar/${usta.id}`} className="btn btn-sm btn-outline border-gray-600 hover:bg-gray-700 text-gray-300 normal-case">
                Profili İncele
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}