

export function WhyUs() {
  const benefits = [
    "Güvenilir ustalarla hızlı iletişim",
    "Uygun fiyatlı ve şeffaf teklifler",
    "Kolay teklif karşılaştırma",
    "Mobil uyumlu ve kullanıcı dostu arayüz"
  ]

  return (
    <section className="py-16  text-center max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10">Neden SanayiSepeti?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow hover:shadow-lg transition cursor-default">
            {/* İkon yerine DaisyUI ikon ya da Heroicons kullanabilirsin */}
            <div className="text-primary text-5xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
