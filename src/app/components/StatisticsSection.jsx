import React from 'react';

const statistics = [
  { value: '1.500+', label: 'Kayıtlı Usta' },
  { value: '10.000+', label: 'Mutlu Müşteri' },
  { value: '30+', label: 'Şehirde Hizmet' },
  { value: '5.000+', label: 'Tamamlanan İş' },
];

export const StatisticsSection = () => {
  return (
    <section className="py-16 bg-primary text-white text-center -mx-6 px-6">
      <h2 className="text-3xl font-bold mb-10">Rakamlarla Sanayi Cebimde</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-5xl font-extrabold mb-2">{stat.value}</p>
            <p className="text-lg font-medium opacity-90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
