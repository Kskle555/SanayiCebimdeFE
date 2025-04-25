import React from 'react'

export default function FeaturedMaster() {
  return (
   <section className="mt-5  p-8 rounded-xl">
     <h2 className="text-2xl font-bold text-center mb-6 text-neutral">Öne Çıkan Ustalar</h2>
     <div className="flex flex-wrap justify-center gap-4">
       <span className="badge badge-primary badge-lg">En Çok Oylanan</span>
       <span className="badge badge-secondary badge-lg">En Yeni</span>
       <span className="badge badge-accent badge-lg">En Tecrübeli</span>
     </div>
   </section>
  )
}
