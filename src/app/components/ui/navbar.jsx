// ui/Navbar.jsx
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
export const Navbar = ({ children, className, buttonLabels }) => {
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
      {/* <Image
        src="https://w7.pngwing.com/pngs/556/616/png-transparent-logo-industry-design-company-logo-engineering.png"
        alt="Logo"
        width={50}
        height={50}
        className="inline-block h-12 w-12 rounded-full mr-4"
        /> */}
      </div>
     
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
