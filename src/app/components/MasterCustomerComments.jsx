import React from 'react'

export default function MasterCustomerComments() {
  return (
    <section className="mb-16 bg-gray-50 shadow-md  p-8 rounded-xl">
    <h2 className="text-2xl font-bold text-center mb-6 text-neutral ">Müşteri Yorumları</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-sm text-black">"Ahmet Usta arabamı 2 saatte çözdü, çok memnun kaldım!"</p>
        <p className="mt-2 text-xs text-right text-gray-500">- Can D.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-black">"Kaporta işini mükemmel yaptı. Tavsiye ederim."</p>
        <p className="mt-2 text-xs text-right text-black-500">- Elif K.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow">
        <p className="text-sm text-black">"Fiyat/performans çok iyiydi. Tekrar tercih ederim."</p>
        <p className="mt-2 text-xs text-right text-gray-500">- Murat A.</p>
      </div>
    </div>
  </section>
  )
}
