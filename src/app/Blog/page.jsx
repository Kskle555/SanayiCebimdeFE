import React from 'react';
import Link from 'next/link';
import { 
  Calendar, User, ArrowRight, Tag, Clock, 
  MessageCircle, Share2, TrendingUp 
} from 'lucide-react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/Footer';

// --- MOCK DATA (Örnek Veriler) ---

const categories = [
  "Tümü", "Oto Bakım", "Sektör Haberleri", "Müşteri Deneyimi", "İpuçları", "Modifiye"
];

const featuredPost = {
  id: 99,
  title: "Kış Gelmeden Aracınızı Hazırlayın: Hayat Kurtaran 5 Kış Bakımı",
  excerpt: "Soğuk havalar kapıda! Akü kontrolünden lastik seçimine kadar, kışın yolda kalmamak için yapmanız gereken kritik kontrolleri uzman ustalara sorduk.",
  category: "Oto Bakım",
  author: "Mehmet Usta",
  date: "21 Kasım 2024",
  readTime: "5 dk okuma",
  image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1600&auto=format&fit=crop"
};

const blogPosts = [
  {
    id: 1,
    title: "Motor Yağı Seçerken Dikkat Etmeniz Gerekenler",
    excerpt: "Her yağ her araca olmaz. Viskozite değerleri ve sentetik yağların farklarını basitçe anlattık.",
    category: "İpuçları",
    author: "Ahmet Yılmaz",
    date: "20 Kasım 2024",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
    comments: 12
  },
  {
    id: 2,
    title: "İstanbul Trafiğinde Debriyaj Ömrünü Uzatmanın Yolları",
    excerpt: "Dur-kalk trafikte baskı balatanızı korumak için sürüş alışkanlıklarınızda yapabileceğiniz küçük değişiklikler.",
    category: "Müşteri Deneyimi",
    author: "Canan Dağdelen",
    date: "18 Kasım 2024",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    comments: 8
  },
  {
    id: 3,
    title: "Elektrikli Araçların Bakım Maliyetleri: Efsaneler ve Gerçekler",
    excerpt: "Elektrikli araçlar gerçekten sanayi yüzü görmüyor mu? Batarya, fren ve lastik masraflarını inceledik.",
    category: "Sektör Haberleri",
    author: "Teknoloji Ekibi",
    date: "15 Kasım 2024",
    readTime: "6 dk okuma",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
    comments: 24
  },
  {
    id: 4,
    title: "Fren Balatası Ne Zaman Değişmeli?",
    excerpt: "Frenlerden gelen o ince ses ne anlama geliyor? Güvenliğiniz için fren sistemindeki uyarı işaretleri.",
    category: "Oto Bakım",
    author: "Hasan Usta",
    date: "12 Kasım 2024",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=800&auto=format&fit=crop",
    comments: 5
  },
  {
    id: 5,
    title: "Seramik Kaplama Gerekli mi? Artıları ve Eksileri",
    excerpt: "Aracınızın boyasını korumak için yapılan seramik kaplama işlemi parasına değer mi?",
    category: "Modifiye",
    author: "Detailing Merkezi",
    date: "10 Kasım 2024",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
    comments: 18
  },
  {
    id: 6,
    title: "Yedek Parçada Yan Sanayi vs Orijinal: Hangisini Seçmeli?",
    excerpt: "Hangi parçalarda orijinal şart, hangilerinde yan sanayi kullanılabilir? Bütçe dostu öneriler.",
    category: "İpuçları",
    author: "Sanayi Rehberi",
    date: "08 Kasım 2024",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop",
    comments: 32
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-gray-100 font-sans">
      <Navbar />
      
      {/* HEADER / HERO SECTION */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Sanayi <span className="text-blue-500">Günlükleri</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Otomobil dünyasından son haberler, uzman ustalardan bakım ipuçları ve 
            gerçek müşteri deneyimlerini keşfedin.
          </p>
        </div>
      </div>

      {/* CATEGORY FILTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 w-full">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                idx === 0 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-900/50' 
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* FEATURED POST (Öne Çıkan Yazıı) */}
        <div className="mb-16 group cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden hover:border-gray-600 transition-colors shadow-2xl shadow-black/20">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Öne Çıkan
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-blue-400 mb-4">
                <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {featuredPost.category}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-gray-700 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{featuredPost.author}</div>
                    <div className="text-xs text-gray-500">{featuredPost.date}</div>
                  </div>
                </div>
                <span className="flex items-center text-blue-500 font-medium group-hover:translate-x-1 transition-transform">
                  Oku <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* LATEST POSTS HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="text-blue-500" /> Son Yazılar
          </h2>
          <button className="text-gray-400 hover:text-white text-sm font-medium">Tümünü Gör</button>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-gray-700">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${post.id}`} className="focus:outline-none">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Card Footer */}
                <div className="flex items-center justify-between border-t border-gray-700 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-300">
                    <User className="w-3 h-3 text-blue-500" /> {post.author}
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <button className="flex items-center gap-1 text-xs hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" /> {post.comments}
                    </button>
                    <button className="flex items-center gap-1 text-xs hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* NEWSLETTER CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden border border-blue-800/50">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Aracınızın Bakımını Şansa Bırakmayın
            </h3>
            <p className="text-blue-100 mb-8">
              Haftalık bakım ipuçları, sanayi indirimleri ve uzman tavsiyeleri için bültenimize abone olun.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="E-posta adresinizi girin" 
                className="flex-1 px-6 py-4 rounded-xl bg-slate-900/50 border border-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}