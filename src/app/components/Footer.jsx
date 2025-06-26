import React from 'react';
import Link from 'next/link';
export default function Footer({children}) {
  return (
    <footer className="bg-base-200 text-base-content p-10 mt-16">
      <div className="footer grid md:grid-cols-3 gap-10">
        {/* Company Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Sanayi Cebimde</h3>
          <p className="text-sm text-gray-500 mb-4">
            Sanayi dünyasında güvenilir ustalarla hızlı ve kolay iletişim kurmanızı sağlıyoruz. 
            Aracınızın ihtiyacına göre en uygun bakım ve onarım paketlerini seçin.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hızlı Bağlantılar</h3>
          <ul className="space-y-2">
            <li>
              {/* <a href="#" className="hover:text-blue-500">Anasayfa</a> */}
              <Link className='hover:text-blue-500' href="/">Anasayfa</Link>
            </li>
            <li>
              {/* <a href="#" className="hover:text-blue-500">Ustalar</a> */}
              <Link className='hover:text-blue-500' href="/Ustalar">Ustalar</Link>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Paketler</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">İletişim</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Bültene Abone Ol</h3>
          <p className="text-sm text-gray-500 mb-4">
            Güncellemeler ve fırsatlar için bültenimize abone olun.
          </p>
          <div className="form-control">
            <div className='flex gap-6'>
              <input
                type="email"
                placeholder="Email adresinizi girin"
                className="input input-bordered"
              />
              <button className="btn btn-primary">Abone Ol</button>
            </div>
          
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p className='hover:text-blue-500'>{children}</p>
      </div>
    </footer>
  );
}
