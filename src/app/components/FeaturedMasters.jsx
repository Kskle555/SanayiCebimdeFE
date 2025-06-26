import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Star } from "lucide-react";

// Örnek usta verileri, daha sonra API'den çekilecek
const featuredMasters = [
  {
    id: 1,
    name: "Ahmet Usta",
    specialty: "Motor Mekanik",
    location: "İstanbul, Kadıköy",
    rating: 4.9,
    imageUrl: "https://i.pravatar.cc/150?u=ahmetusta1",
  },
  {
    id: 2,
    name: "Mehmet Yılmaz",
    specialty: "Kaporta & Boya",
    location: "Ankara, Çankaya",
    rating: 4.8,
    imageUrl: "https://i.pravatar.cc/150?u=mehmetusta2",
  },
  {
    id: 3,
    name: "Ayşe Kaya",
    specialty: "Elektrik & Elektronik",
    location: "İzmir, Bornova",
    rating: 5.0,
    imageUrl: "https://i.pravatar.cc/150?u=ayseusta3",
  },
];

export const FeaturedMasters = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-2">Öne Çıkan Ustalarımız</h2>
      <p className="text-lg mb-10 text-gray-600">
        Kullanıcılarımız tarafından en yüksek puanları alan ustalara göz atın.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredMasters.map((master) => (
          <Card key={master.id} className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <img src={master.imageUrl} alt={master.name} className="w-16 h-16 rounded-full" />
              <div>
                <CardTitle>{master.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{master.specialty}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};