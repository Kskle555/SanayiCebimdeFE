// ui/Navbar.jsx
import { Button } from "./Button";
import Link from "next/link";

export const Navbar = ({ children, className, buttonLabels }) => {
   const labellist = [
    { label: "Anasayfa", href: "/" },
    { label: "Ustalar", href: "/Ustalar" },
    { label: "Paketler", href: "/paketler" },
    { label: "İletişim", href: "/iletişim" },
  ];

  return (
    <header className={`${className}`}>
      <h1 className="text-2xl font-bold">{children}</h1>
      <nav className="space-x-4">
        {labellist.map((label, index) => (
       <Link key={index} href={label.href}>
          <button className="text-white hover:text-blue-500 bg-transparent px-4 py-2.5 rounded-md focus:outline-none">
            {label.label}
          </button>
            </Link>
        ))}
      </nav>
    </header>
  );
};
