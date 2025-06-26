
"use client";
// ui/Navbar.jsx

import Link from "next/link";
import { Button } from "./Button";
import { useState } from "react";
import { List,X } from "lucide-react";
export const Navbar = ({ children, className, buttonLabels }) => {

  const [isOpen, setIsOpen] = useState(false);


   const labellist = [
    { label: "Anasayfa", href: "/" },
    { label: "Ustalar", href: "/Ustalar" },
    { label: "Paketler", href: "/paketler" },
    { label: "İletişim", href: "/iletişim" },
    {label:"Hakkımızda", href: "/hakkimizda"}
  ];

  return (
    <header className={`${className}`}>
      <div className="flex space-x-4">
      <h1 className="text-2xl font-bold">{children}</h1>
      </div>
     
        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`z-50 text-white focus:outline-none ${isOpen ? 'fixed top-6 right-6' : ''}`}>
            {isOpen ? <X className="h-6 w-6 top-6" /> : <List className="h-6 w-6" />}
          </button>
        </div>
      <nav className={`${isOpen ? "hidden" : "block"} md:flex hidden space-x-4 items-center justify-between w-full md:w-auto`}>
       
        {labellist.map((label, index) => (
       <Link key={index} href={label.href}>
          <button className="text-white hover:text-blue-500 bg-transparent px-4 py-2.5 rounded-md focus:outline-none">
            {label.label}
          </button>
            </Link>
        ))}


     
      </nav>
          {/* Mobile Menu (Full Width) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {labellist.map((label, index) => (
            <Link key={index} href={label.href}>
              <button className="w-full text-white hover:text-blue-500 bg-transparent px-4 py-2.5 rounded-md focus:outline-none">
                {label.label}
              </button>
            </Link>
          ))}
          
        </div>
      )}
    </header>
  );
};
