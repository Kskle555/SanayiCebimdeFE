import React from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Aracınızın Ömrünü Uzatmanın 5 Yolu',
    description: 'Periyodik bakımların önemi, doğru yağ seçimi ve daha fazlası...',
    imageUrl: 'https://pchocasi.com.tr/wp-content/smush-webp/2016/09/honda-civic-sedan-type-r.png.webp',
    link: '/blog/arac-omru-uzatma'
  },
  {
    id: 2,
    title: 'Kış Bakımı Neden Önemli?',
    description: 'Soğuk havalarda aracınızı korumak için yapmanız gerekenler.',
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/blog/kis-bakimi'
  },
  {
    id: 3,
    title: 'Elektrikli Araç Bakımı Farkları',
    description: 'Geleneksel araçlara göre elektrikli araç bakımının incelikleri.',
    imageUrl: 'https://res.cloudinary.com/tasit-com/images/f_webp,q_auto/v1680626856/tesla-model-y-inceleme/tesla-model-y-inceleme.jpg?_i=AA',
    link: '/blog/elektrikli-arac-bakimi'
  },
];

export const LatestArticles = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-2">Son Yazılarımız</h2>
      <p className="text-lg mb-10 text-gray-600">
        Araç bakımı ve sanayi dünyasından en güncel bilgiler. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.id} href={article.link} className="block">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
              <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{article.description}</p>
                <button className="btn btn-sm btn-primary mt-4 self-start">Devamını Oku</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
