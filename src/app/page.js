import { Navbar } from "./components/ui/navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Testimonial } from "./components/Testimonial.jsx";
import { Packages } from "./components/Packages.jsx";
import { FAQ } from "./components/FAQ";
import { WhyUs } from "./components/WhyUs";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import {ServiceCategories} from "./components/ServiceCategories.jsx";
import { StatisticsSection } from "./components/StatisticsSection.jsx";
import { LatestArticles } from "./components/LatestArticles.jsx";
import { CtaForMasters } from "./components/CtaForMasters.jsx";
import { LocationSearch } from "./components/LocationSearch.jsx";
import { AiFaultFinder } from "./components/AiFaultFinder.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar className="p-6 border-b   text-white  bg-base-200 shadow-sm flex items-center justify-between" buttonLabels={["Anasayfa", "Ustalar","Paketler","İletişim","Hakkımızda"]}>
      Sanayi Cebimde
      </Navbar>
        <main className="px-6 py-16 max-w-6xl mx-auto text-center">
           
            <Hero/>
            <LocationSearch/>
          
            <WhyUs/>
            <Packages/>
          <HowItWorks/>
          <ServiceCategories/>
          <StatisticsSection/>
          <Testimonial/>
          <CtaForMasters/>
            <AiFaultFinder/>
           <LatestArticles/>
          <FAQ/>
    
      
        </main>
  
     <Footer>
  SanayiSepeti © 2025. Tüm hakları saklıdır.
</Footer>
      </div>
  );
}
