import React from 'react'
import { Navbar } from '../components/ui/navbar'
import Footer from '../components/Footer'

//bugünün tarihin al 

const bugun = new Date().getFullYear();

export default function page() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
    <Navbar className="p-6 border-b text-white bg-base-200 shadow-sm flex items-center justify-between" buttonLabels={["Anasayfa", "Ustalar", "Paketler", "İletişim"]}>
      SanayiSepeti
    </Navbar>

    <main className="flex-grow bg-amber-300">
      <h1 className='text-black text-center'>Ustalar</h1>
    </main>

    <footer className='mt-auto'>
      <Footer children={`SanayiSepeti © ${bugun}. Tüm hakları saklıdır.`} />
    </footer>
  </div>
  )
}
