"use client"
import { useEffect, useState } from 'react'

export function Testimonial() {
  const testimonials = [
    {
      name: 'Ahmet K.',
      city: 'İzmir',
      text: 'SanayiSepeti sayesinde arabamı güvenilir bir ustaya teslim ettim. Hizmet çok hızlıydı!',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      color: 'primary'
    },
    {
      name: 'Emine T.',
      city: 'Ankara',
      text: 'Uygulama üzerinden 3 farklı ustadan teklif alabildim. Hepsiyle kolayca iletişime geçtim.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: 'success'
    },
    {
      name: 'Mehmet D.',
      city: 'Bursa',
      text: 'Usta bulmak bu kadar kolay olmamıştı. SanayiSepeti gerçekten işimi kolaylaştırdı.',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
      color: 'error'
    },
  ]

  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Kullanıcı Yorumları</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({name, city, text, img, color}, idx) => (
            <div
              key={idx}
              className={`card bg-white shadow-lg hover:shadow-xl transition cursor-pointer transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } delay-[${idx * 150}ms] duration-500`}
            >
              <div className="card-body">
                <p className="italic text-gray-700 mb-6">"{text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`avatar online`}>
                    <div className={`w-14 rounded-full ring ring-${color}-400 ring-offset-base-100 ring-offset-2`}>
                      <img src={img} alt={`${name} avatar`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-gray-500">{city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
