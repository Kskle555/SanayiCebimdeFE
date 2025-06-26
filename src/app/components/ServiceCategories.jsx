import React from 'react';
import { Wrench, Car, BatteryCharging, CircleDot, Snowflake, Gauge } from 'lucide-react';

const categories = [
  { name: 'Periyodik Bakım', icon: <Wrench className="w-10 h-10" /> },
  { name: 'Kaporta & Boya', icon: <Car className="w-10 h-10" /> },
  { name: 'Elektrik & Elektronik', icon: <BatteryCharging className="w-10 h-10" /> },
  { name: 'Lastik & Jant', icon: <CircleDot className="w-10 h-10" /> },
  { name: 'Klima Sistemleri', icon: <Snowflake className="w-10 h-10" /> },
  { name: 'Ekspertiz', icon: <Gauge className="w-10 h-10" /> },
];

export const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white text-center -mx-6 px-6">
      <h2 className="text-3xl font-bold mb-2">Hizmet Kategorileri</h2>
      <p className="text-lg mb-10 text-gray-600">
        Aracınız için ihtiyacınız olan hizmeti kolayca bulun.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="text-primary mb-4">{category.icon}</div>
            <h3 className="font-semibold text-gray-800">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};