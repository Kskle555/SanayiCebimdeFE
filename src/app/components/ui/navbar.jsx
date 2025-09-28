"use client";
import React, { useState } from "react";
import Link from "next/link";

// Responsive Navbar component optimized for Next.js + TailwindCSS + DaisyUI
// Props:
//  - logoText (string)          : site logo text
//  - links (array of objects)   : [{ label: 'Hizmetlerimiz', href: '/hizmetler' }, ...]
//  - onSearch (function)        : optional callback called with the search query on submit

export default function Navbar({
  logoText = "Sanayicebimde",
  links = [
    { label: "Hizmetlerimiz", href: "#" },
    { label: "Nasıl Çalışır", href: "#" },
    { label: "Blog", href: "#" },
    { label: "İletişim", href: "#" },
  ],
  onSearch,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (typeof onSearch === "function") onSearch(query);
    // if you want default navigation behaviour, you can add router.push here
    // import { useRouter } from 'next/router' and call router.push(`/search?q=${encodeURIComponent(query)}`)
  };

  return (
    <header data-theme="dark" className="w-full border-b border-[#29382f]">
      <div  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div   className="flex items-center justify-between h-16">
          {/* Left: Logo + Desktop Nav */}
          <div  className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <svg
                className="h-8 w-8 text-[#38e07b]"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
                {logoText}
              </span>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.href + l.label}
                  href={l.href}
                  className="text-white text-base font-medium leading-normal hover:text-[#38e07b] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Search + Auth buttons + Mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Search (desktop) */}
            <form onSubmit={handleSearch} className="hidden md:block relative w-64">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Arama yap..."
                className="form-input w-full rounded-full border-2 border-[#29382f] bg-[#1c2620] px-4 py-2 pl-10 text-white placeholder-gray-400 focus:border-[#38e07b] focus:outline-none focus:ring-0"
                aria-label="Arama"
              />
            </form>

            {/* Auth buttons (desktop) */}
            <div className="hidden md:flex gap-2">
              <Link href="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#38e07b] text-[#111714] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                <span className="truncate">Giriş Yap</span>
              </Link>
              <Link href="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent border-2 border-[#38e07b] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#38e07b] hover:text-[#111714] transition-colors">
                <span className="truncate">Kaydol</span>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {!mobileOpen ? (
                // hamburger
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // close
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-[#29382f] bg-[#111714]`}>
        <div className="px-4 py-4 space-y-3">
          <form onSubmit={handleSearch} className="w-full">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Arama yap..."
                className="form-input w-full rounded-full border-2 border-[#29382f] bg-[#1c2620] px-4 py-2 pl-10 text-white placeholder-gray-400 focus:border-[#38e07b] focus:outline-none focus:ring-0"
                aria-label="Arama (mobil)"
              />
            </div>
          </form>

          <nav className="space-y-1">
            {links.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-[#1c2620]">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2">
            <Link href="/login" className="flex-1 inline-flex items-center justify-center rounded-full h-10 px-6 bg-[#38e07b] text-[#111714] font-bold">Giriş Yap</Link>
            <Link href="/register" className="flex-1 inline-flex items-center justify-center rounded-full h-10 px-6 border-2 border-[#38e07b] text-white font-bold">Kaydol</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
