import React from 'react';
import Link from 'next/link';
export default function Footer({children}) {
  return (
   <footer className="border-t border-solid border-[#29382f] bg-[#1c2620]">
<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="space-y-4">
<h3 className="text-lg font-bold text-white">Sanayicebimde</h3>
<ul className="space-y-2">
<li><a className="text-base text-gray-400 hover:text-white" href="#">Hakkımızda</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Kariyer</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Basın</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-lg font-bold text-white">Hizmetler</h3>
<ul className="space-y-2">
<li><a className="text-base text-gray-400 hover:text-white" href="#">Tamir &amp; Bakım</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Kaporta &amp; Boya</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Muayene &amp; Vize</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Tüm Hizmetler</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-lg font-bold text-white">Destek</h3>
<ul className="space-y-2">
<li><a className="text-base text-gray-400 hover:text-white" href="#">İletişim</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">S.S.S.</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Kullanım Koşulları</a></li>
<li><a className="text-base text-gray-400 hover:text-white" href="#">Gizlilik Politikası</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-lg font-bold text-white">Bizi Takip Edin</h3>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-white" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-white" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.398 1.363.444 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.046 1.064-.207 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.398-2.427.444-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.046-1.791-.207-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.398-1.363-.444-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.046-1.064.207-1.791.465-2.427A4.902 4.902 0 013.47 3.684 4.902 4.902 0 015.242 2.53c.636-.247 1.363-.398 2.427-.444C8.714 2.014 9.068 2 11.498 2h.817zM12 6.845a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31zM12 15.11a3.11 3.11 0 110-6.22 3.11 3.11 0 010 6.22z" fillRule="evenodd"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-white" href="#">
<span className="sr-only">Facebook</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
<path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-12 border-t border-[#29382f] pt-8 text-center">
<p className="text-base text-gray-400">{children}</p>
</div>
</div>
</footer>
  );
}
