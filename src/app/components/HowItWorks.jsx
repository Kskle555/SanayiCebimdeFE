export function HowItWorks() {
    const steps = [
      {
        title: "Talep Oluştur",
        desc: "İhtiyacını kısa ve net şekilde platforma bildir.",
        icon: "📋"
      },
      {
        title: "Teklif Al",
        desc: "Birden fazla ustadan teklif al ve karşılaştır.",
        icon: "💬"
      },
      {
        title: "Usta Seç",
        desc: "Güvenilir ustalardan birini seç ve onayla.",
        icon: "🔧"
      },
      {
        title: "İşini Yaptır",
        desc: "Araç bakımını kolayca ve güvenle yaptır.",
        icon: "🚗"
      },
    ]
  
    return (
      <section className="py-16 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Nasıl Çalışır?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map(({title, desc, icon}, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition cursor-default flex flex-col items-center">
              <div className="text-6xl mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  