import React from 'react'

export default function UstaFilter() {
  return (
    <div className="flex flex-wrap justify-center mb-6">
    <input
      type="text"
      placeholder="Usta veya şehir ara..."
      className="input input-bordered w-full md:w-1/3 bg-white text-neutral focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-md"
    />
  </div>
  )
}
