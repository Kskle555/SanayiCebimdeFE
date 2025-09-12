import Navbar  from "./components/ui/navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Testimonial } from "./components/Testimonial.jsx";
import { Packages } from "./components/Packages.jsx";
import { FAQ } from "./components/FAQ";
import { WhyUs } from "./components/WhyUs";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection.jsx";
import CTASection from "./components/CTASection.jsx";
import { HowItWorks } from "./components/HowItWorks";
import {ServiceCategories} from "./components/ServiceCategories.jsx";
import { StatisticsSection } from "./components/StatisticsSection.jsx";
import { LatestArticles } from "./components/LatestArticles.jsx";
import { CtaForMasters } from "./components/CtaForMasters.jsx";
import { LocationSearch } from "./components/LocationSearch.jsx";
import { AiFaultFinder } from "./components/AiFaultFinder.jsx";
import ContactBanner from "./components/ContactBanner.jsx";
import Image from "next/image.js";
export default function Page() {
  return (
    <div className="min-h-screen  text-gray-900">
      <Navbar>
    
      </Navbar>
        <main className="">
            <Hero/>
            <FeaturesSection/>
            <AboutSection/>
            <CTASection/>
           {/* <ContactBanner/>
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
          <FAQ/> */}
    
      
        </main>
    <Footer>
        {`SanayiSepeti © ${new Date().getFullYear()}. Tüm hakları saklıdır.`}
    </Footer>
      </div>
  );
}
