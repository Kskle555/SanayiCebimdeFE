export function Packages() {
    const plans = [
      {
        title: "Temel Paket",
        price: "₺199 / aylık",
        features: ["Sınırsız teklif alma", "Usta puanlama", "Mobil destek"],
        popular: false,
      },
      {
        title: "Standart Paket",
        price: "₺299 / aylık",
        features: ["Temel Paket + Öncelikli destek", "Detaylı ustalar analizi"],
        popular: true,
      },
      {
        title: "Premium Paket",
        price: "₺499 / aylık",
        features: ["Standart + VIP usta erişimi", "Kişisel danışmanlık"],
        popular: false,
      },
    ]
  
    return (
      <section className="py-16  max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Paketlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({title, price, features, popular}, idx) => (
            <div
              key={idx}
              className={`card p-6 shadow-lg hover:shadow-xl transition cursor-pointer border ${
                popular ? 'border-primary bg-primary text-white' : 'bg-white'
              }`}
            >
              {popular && (
                <div className="badge badge-secondary mb-4 text-sm uppercase tracking-wide">En Çok Tercih Edilen</div>
              )}
              <h3 className={`text-2xl font-bold mb-4 ${popular ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
              <p className={`text-xl font-semibold mb-6 ${popular ? 'text-white' : 'text-primary'}`}>{price}</p>
              <ul className={`mb-6 text-left space-y-2 ${popular ? 'text-white' : 'text-gray-700'}`}>
                {features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${popular ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className={`btn w-full ${popular ? 'btn-outline btn-white' : 'btn-primary'}`}>
                Satın Al
              </button>
            </div>
          ))}
        </div>
      </section>
    )
  }
  