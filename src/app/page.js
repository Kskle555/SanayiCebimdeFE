import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Input } from "./components/ui/Input.jsx";
import { Navbar } from "./components/ui/navbar.jsx";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./components/Footer.jsx";
import MastarFaq from "./components/ui/MasterFaq";
export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar className="p-6 border-b   text-white  bg-base-200 shadow-sm flex items-center justify-between" buttonLabels={["Anasayfa", "Ustalar","Paketler","İletişim"]}>
      SanayiSepeti
      </Navbar>
        <main className="px-6 py-16 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Sanayi Dünyası Artık Cebinizde</h2>
            <p className="text-lg mb-8 text-gray-600">
              En iyi ustaları bulun, tamir paketlerini seçin, dükkan değerlendirmelerine göz atın.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Input placeholder="Aracınızın modeli veya ihtiyacınız..." className="max-w-md" />
              <Button size="lg">
                Usta Bul 
              </Button>
              
            </div>
        
  
          <section className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="shadow-md ">
              <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">📦 Tamir Paketleri</h3>
                <p className="text-sm text-gray-500">
                  Aracınıza özel uygun fiyatlı bakım & onarım paketleriyle tanışın.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">🔧 Güvenilir Ustalar</h3>
                <p className="text-sm text-gray-500">
                  Alanında uzman, yorumlanmış ustaları kolayca bulun ve iletişime geçin.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">⭐ Dükkan Değerlendirmeleri</h3>
                <p className="text-sm text-gray-500">
                  Diğer kullanıcıların yorumları sayesinde doğru tercihi yapın.
                </p>
              </CardContent>
            </Card>
          </section>


          <MastarFaq className={"mt-12"}/>
        </main>
  
      <Footer
      children={"SanayiSepeti © 2025. Tüm hakları saklıdır."}
      />
      </div>
  );
}
