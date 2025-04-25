import React from 'react'

export default function MasterStatistics() {
  return (
    <section className="mt-16 mb-16 p-8 bg-gray-50 shadow-md   rounded-xl">
  <h2 className="text-2xl font-bold text-center mb-6 text-neutral">İstatistikler</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-black">200+</h3>
      <p className="text-sm text-gray-500">Aktif Usta</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-black">95%</h3>
      <p className="text-sm text-gray-500">Müşteri Memnuniyeti</p>
    </div>
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold text-black">15+</h3>
      <p className="text-sm text-gray-500">Şehirde Hizmet</p>
    </div>
  </div>
</section>
  )
}
