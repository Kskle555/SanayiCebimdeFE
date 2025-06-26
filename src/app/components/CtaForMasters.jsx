import React from 'react';
import Link from 'next/link';
import { CheckCircle, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    text: 'Daha fazla müşteriye ulaşın ve işinizi büyütün.',
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    text: 'Profilinizi oluşturun, hizmetlerinizi ve uzmanlığınızı sergileyin.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    text: 'Kolayca teklif verin ve randevularınızı yönetin.',
  },
];

export const CtaForMasters = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            İşinizi Büyütün, Sanayi Cebimde'ye Katılın!
          </h2>
          <p className="text-lg text-white mb-8">
            Türkiye'nin dört bir yanından yeni müşterilerle buluşmak için platformumuza katılın.
          </p>
          <Link href="/ustalar/kayit">
            <button className="btn btn-success btn-lg">
              Usta Olarak Kayıt Ol
            </button>
          </Link>
        </div>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{benefit.icon}</div>
              <p className="text-white">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
