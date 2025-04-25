import React from 'react'

export default function MastarFaq({className}) {
  return (
    <section className={`${className}`}>
    <h2 className="text-2xl font-bold text-center mb-6 text-neutral">Sık Sorulan Sorular</h2>
    <div className="space-y-4">
      <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <summary className="font-medium text-lg text-black">Usta seçimini neye göre yapmalıyım?</summary>
        <p className="text-sm mt-2 text-gray-600">Puanlama, yorumlar ve branşa göre tercih edebilirsiniz.</p>
      </details>
      <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <summary className="font-medium text-lg text-black">Teklif aldıktan sonra ne olacak?</summary>
        <p className="text-sm mt-2 text-gray-600">Usta sizinle iletişime geçerek detayları paylaşacak.</p>
      </details>
      <details className="bg-white p-4 rounded-lg shadow cursor-pointer">
        <summary className="font-medium text-lg text-black">SanayiSepeti ücretsiz mi?</summary>
        <p className="text-sm mt-2 text-gray-600">Evet, platformumuzdan hizmet almak ücretsizdir.</p>
      </details>
    </div>
  </section>
  )
}
