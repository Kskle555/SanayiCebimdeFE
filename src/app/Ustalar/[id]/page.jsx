import { notFound } from 'next/navigation';
import Link from 'next/link';
import { mockUstaData } from '@/app/data/mockUstaData';
import { Navbar } from '../../components/ui/navbar';
import Footer from '../../components/Footer';
import UstaYorumlari from '../../components/UstaYorumlari';
import UstaFotografGalerisi from '../../components/UstaFotografGalerisi';
import IletisimModal from '../../components/IletisimModal';
import IletisimButton from '../../components/IletisimButton';
import { Award, Briefcase, Heart, ShieldCheck } from 'lucide-react';


export async function generateStaticParams() {
  return mockUstaData.map((usta) => ({
    id: usta.id.toString(),
  }));
}

const getUstaById = (id) => {
  const usta = mockUstaData.find((u) => u.id.toString() === id);
  if (!usta) {
    notFound();
  }
  return usta;
};

export default function UstaProfilePage({ params }) {
  const { id } = params;
  const usta = getUstaById(id);
  const bugun = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar
        className="p-6 border-b bg-slate-800 text-slate-100 shadow-md flex items-center justify-between"
        buttonLabels={['Anasayfa', 'Ustalar', 'Paketler', 'İletişim']}
      >
        SanayiSepeti
      </Navbar>

      <main className="flex-grow text-slate-800">
        <div className="container mx-auto px-4 py-10">
          <div className="mb-6">
            <Link href="/Ustalar" className="btn btn-ghost">
              &larr; Tüm ustalara geri dön
            </Link>
          </div>

          {/* Profil Başlığı */}
          <div className="card card-side bg-white shadow-xl mb-8 flex-col md:flex-row">
            <div className="flex justify-center p-8 md:w-1/4 items-center">
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-blue-600 ring-offset-white ring-offset-2">
                  <img src={usta.image} alt={usta.name} />
                </div>
              </div>
            </div>
            <div className="card-body md:w-3/4">
              <h1 className="card-title text-3xl font-bold">{usta.name}</h1>
              <p className="text-lg text-slate-600">{usta.profession}</p>
              <div className="badge bg-blue-100 text-blue-800 border-none mt-1">{usta.location}</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="rating rating-sm">
                  {[...Array(5)].map((_, i) => (
                    <input key={i} type="radio" name={`rating-${usta.id}`} className="mask mask-star-2 bg-amber-400" disabled checked={i < Math.round(usta.rating)} />
                  ))}
                </div>
                <span className="font-bold text-md">{usta.rating}</span>
                <span className="text-slate-500 text-sm">({usta.reviews} yorum)</span>
              </div>
              <div className="card-actions justify-start mt-4 gap-2">
                <IletisimButton />
                <button className="btn btn-ghost text-slate-600 hover:bg-slate-100"><Heart className="w-4 h-4" /> Favorilere Ekle</button>
              </div>
            </div>
          </div>

          {/* Ana İçerik */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Hakkında */}
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Hakkında</h3>
                  <p className="text-slate-700 leading-relaxed">{usta.description}</p>
                </div>
              </div>

              {/* Uzmanlık Alanları */}
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">Uzmanlık Alanları</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {usta.skills.map(skill => (
                      <div key={skill} className="badge badge-outline border-slate-300 badge-lg">{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
 {/* Fotoğraf Galerisi */}
              <UstaFotografGalerisi gallery={usta.gallery} />
              {/* İstatistikler */}
              <div className="card bg-white shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">İstatistikler</h3>
                  <div className="stats stats-vertical lg:stats-horizontal shadow-none bg-slate-50/50 mt-2">
                    <div className="stat">
                      <div className="stat-figure text-blue-600"><Briefcase /></div>
                      <div className="stat-title text-blue-500 font-bold">Tamamlanan İş</div>
                      <div className="stat-value">{usta.totalJobs}+</div>
                    </div>
                    <div className="stat">
                      <div className="stat-figure text-green-500"><ShieldCheck /></div>
                      <div className="stat-title text-green-500 font-bold">Müşteri Memnuniyeti</div>
                      <div className="stat-value">{usta.satisfactionRate}%</div>
                    </div>
                    <div className="stat">
                      <div className="stat-figure text-purple-500"><Award /></div>
                      <div className="stat-title text-purple-500 font-bold">Platforma Katılım</div>
                      <div className="stat-value">{usta.memberSince}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Yorumlar */}
            <div className="md:col-span-1">
              <UstaYorumlari comments={usta.comments} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-300 p-4 mt-auto">
        <Footer>{`SanayiSepeti © ${bugun}. Tüm hakları saklıdır.`}</Footer>
      </footer>

      <IletisimModal ustaName={usta.name} />
    </div>
  );
}