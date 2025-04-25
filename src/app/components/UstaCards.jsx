import React from 'react'

export default function UstaCards() {

    const ustalar = [
      {
        id: 1,
        ad: 'Ahmet Usta',
        brans: 'Mekanik',
        sehir: 'İzmir',
        puan: 4.7,
        aciklama: '20 yıllık deneyimli motor ustası.',
        resim: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlraParqfEALbxnMv2VbnDGLE33iELK7uD6A&s'
      },
      {
        id: 2,
        ad: 'Mehmet Usta',
        brans: 'Elektrik',
        sehir: 'Ankara',
        puan: 4.3,
        aciklama: 'Araç içi elektrik işleri uzmanı.',
        resim: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcoqd_Nwpm9IwASgPzFWis2-KBkS8jfC8WQ&s'
      },
      {
        id: 3,
        ad: 'Ayşe Usta',
        brans: 'Kaporta & Boya',
        sehir: 'Bursa',
        puan: 4.9,
        aciklama: 'Kaporta ve lokal boya işlemlerinde uzmandır.',
        resim: 'https://avatars.mds.yandex.net/get-altay/14402904/2a00000193f2d6487fbb57892a656be8b7f8/L_height'
      },
    ]


  return (
    <div>
                  {/* Usta Kartları */}
                  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ustalar.map((usta) => (
              <div
                key={usta.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-base-200 transition duration-300"
              >
                <div className="flex flex-col items-center p-6 text-center ">
                  <img
                    src={usta.resim}
                    alt={usta.ad}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold text-neutral">{usta.ad}</h2>
                  <p className="text-sm text-gray-500 mb-1">{usta.sehir}</p>
                  
                  <div className="badge badge-secondary mb-2">{usta.brans}</div>

                  <p className="text-yellow-500">⭐ {usta.puan}</p>
                  <p className="text-sm mt-2 text-gray-700">{usta.aciklama}</p>

                  <button className="btn btn-primary btn-sm mt-4 w-full">
                    Teklif Al
                  </button>
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}
