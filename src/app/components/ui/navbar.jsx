// ui/Navbar.jsx
import { Button } from "./Button";
import Link from "next/link";

export const Navbar = ({ children, className, buttonLabels }) => {
   const labellist = [
    { label: "Anasayfa", href: "https://www.youtube.com/watch?v=57P_Uysp2nc&t=2056s" },
    { label: "Ustalar", href: "/ustalar" },
    { label: "Paketler", href: "/paketler" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className={`${className}`}>
      <h1 className="text-2xl font-bold">{children}</h1>
      <nav className="space-x-4">
        {labellist.map((label, index) => (
       <Link key={index} href={label.href} target="_blank">
          <button className="text-white hover:text-blue-500 bg-transparent px-4 py-2.5 rounded-md focus:outline-none">
            {label.label}
          </button>
            </Link>
        ))}
      </nav>
    </header>
  );
};
