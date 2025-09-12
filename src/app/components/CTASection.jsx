import { Star, Quote, ArrowRight } from "lucide-react";

export default function CTASection() {
  const featuredMasters = [
    {
      name: "Ali Vural",
      specialty: "Mekanik Uzmanı",
      rating: 4.9,
      reviews: 124,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHJgWts3czcwdLQiu_AJMoRO1Ptz_iAWd1WqgAVDsLJ8vqbv6CkOkijU94pgAQ1fkwYGDI19j_9ji_YCjFC1_6P38BwHy5THAeZiZqlbh9Btt9Gj9JpEBDs0jLeAMcX8izwXgt9xwWUWf4_pPvUptL6zDquYgL6RV5mTKQiVH0er7oHVayNvy6uHHyZUCFSsdMk0j5ZDZTUZJcGkRyAsklrAyLlTqAxxN88BqTStPPdjHKz1LNl87ovdFjbYjgUYU6RecpDMyFZw"
    },
    {
      name: "Ayşe Yılmaz", 
      specialty: "Kaporta & Boya",
      rating: 4.8,
      reviews: 98,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuyXuary8eTwcIoCR7fMBOWAd2pbbaU2cdw2L-YGaFLQvOaVTZnXxf7CBfC0i6yx1Ll-R-6ShaQMDLPIRiEM-CJNPZEO8m043XBd8Exoa7xILTG9llaOGguL96Wz7tqDKPHkoJxMYpm2fbjPBOZ1eiuxPArNheuDpTBDJO_xhjQUpkTuJEZbvG1Uh2mdP2tEzCdsb6rxhtMDwT77XJss8agXwe1QvH6FbPH1-9fWOEysI5CDNf3ogzInDDZU2nDDGwIkk2JxGKDA"
    },
    {
      name: "Mehmet Kaya",
      specialty: "Elektrik & Elektronik", 
      rating: 4.9,
      reviews: 152,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhhDGiwu9GDe_V7bkTmXA7mB0jSfORWvyMs9zOL2XCAnVaqj9D3z06Je7J9fnOuPrq53dgX-aRXFCnmORkTdSC0Jcfe8-k8lqWtFzWVgq2zsOnca-QAZqRU-BELFjD2XUCsesbZ_3-l8X0HCRpUI65Bqc6zQ1O6HIYDb25C374vJBQ49SqCA1mvKzTWTR1-eoXWxLgt0YC3NwPZQ7Lv1-x6v90URv_jAJkKliyuXLHsi1Ktdt4ulinl2E9cp3tOhpMIB-G3zBM6Q"
    },
    {
      name: "Fatma Demir",
      specialty: "Klima Bakım",
      rating: 5.0,
      reviews: 85,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQI9-9jrwKr_e2P1rUaGifB74U0yF1j4tk5Wn1jFk3U4VGOT2tv3ISinobBe_-oQ4gdWffBykCbFGJjIIw0DjtRBq99qEsW2OSqyXJ4Fg7C9AD6oBgS8VhFoIYx7Ve2bgjvV5ezaGPmHed0bMwIh0R3-7EQGXMsSlKUD413fiMjKbqCglZ5kCxSEI3DEjRfBESmjz0pvlq1-oMnmAhH095m1mB3U01ZV6vWOSwwwN7DQQ38kK0f2m2SONncozyO-QgQtoKg5LeNg"
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Çelik",
      service: "Ford Focus - Periyodik Bakım",
      comment: "Sanayicebimde sayesinde aracımın periyodik bakımını çok uygun fiyata ve harika bir ustaya yaptırdım. Süreç çok hızlı ve şeffaftı. Kesinlikle tavsiye ederim!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTCOj_QtSoSp32I15Tc1su62T9zfn7Ta2cOMYjc1I04pmD48bLVV53siGuJhckOUzBVbAlOSnKqM87a8Ia0L8U5XUeeogBfFJ-QyaiNHgxfCjYkuPKXfDL9qt08dBNJy6xrDeeRGiXrD4OeZKbcgscAoET9IbyNw1KF7VOC9IeqktpLSt1qCLUBx19QXFOdVCfDmWrzwo1m20STOFcO8PNzQimsusmlyeawd1R9bp_orJSM6G373BcSkhUc8zcEYPye9K_7GYfQQ"
    },
    {
      name: "Zeynep Aydın",
      service: "VW Golf - Kaporta Düzeltme", 
      comment: "Küçük bir kaza sonrası kaportada oluşan göçüğü nerede yaptıracağımı bilemiyordum. Sanayicebimde üzerinden gelen teklifleri karşılaştırdım ve Ayşe Usta'yı seçtim. Sonuç mükemmel oldu!",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1PWpXPPaiTk9XjKYFEjyo-hWyaxeL7nR22WWWkEkbcTFmQLInmbZh4N_1huRlgg2tSRSU1AsLH7TMaT3jx-lm-AFBcFAs4dYKsEaqp1Fo2hRbO2tVb5cIxm0wT78-UPbeaFgEPfYLxR5R6VcsMOAl1evqA5rWAg8M_zJyqJcgOtZUaejlye6VrKpS2yX_EUE1RkWUhHtn-bhS3xGNw3oubhPzOl0mLHYdTpgKK_jM84fK9DV87rZuCg67lv805XdDE2QdfP_OMg"
    }
  ];

  return (
    <div className="bg-gray-900">
      {/* Featured Masters Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Öne Çıkan Ustalar
            </h2>
            <p className="mt-4 text-xl text-gray-400">
              Müşterilerimiz tarafından en çok tercih edilen ustalarımız.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredMasters.map((master, index) => (
              <div key={index} className="group transform rounded-2xl bg-gray-800 p-6 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-700">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-full mb-4">
                  <img
                    alt={master.name}
                    className="h-24 w-24 mx-auto object-cover object-center rounded-full ring-4 ring-green-400/20 group-hover:ring-green-400/50 transition-all duration-300"
                    src={master.image}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {master.name}
                  </h3>
                  <p className="text-base text-gray-400 mt-1">{master.specialty}</p>
                  
                  <div className="mt-3 flex justify-center items-center text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-white font-medium">
                      {master.rating} ({master.reviews} yorum)
                    </span>
                  </div>

                  <button className="mt-4 w-full bg-green-400/10 text-green-400 py-2 px-4 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 font-medium">
                    Profili Görüntüle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Müşteri Yorumları
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Hizmetlerimizden memnun kalan müşterilerimizin görüşleri.
          </p>
        </div>

        <div className="mt-20 mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group rounded-2xl bg-gray-900 p-8 shadow-2xl hover:bg-gray-850 transition-all duration-300">
              <Quote className="h-8 w-8 text-green-400 mb-4" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-green-400/20"
                  src={testimonial.image}
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.service}</p>
                </div>
              </div>
              
              <p className="text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                "{testimonial.comment}"
              </p>

              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {[
            {
              question: "Sanayicebimde'yi kullanmak ücretli mi?",
              answer: "Hayır, Sanayicebimde'yi kullanmak ve ustalardan teklif almak tamamen ücretsizdir. Sadece seçtiğiniz ustanın hizmeti için ödeme yaparsınız."
            },
            {
              question: "Ustalara nasıl güvenebilirim?",
              answer: "Platformumuzdaki tüm ustalar, belirli kriterlere göre doğrulanmaktadır. Ayrıca, usta profillerindeki gerçek müşteri yorumlarını ve puanlamalarını inceleyerek kararınızı verebilirsiniz."
            },
            {
              question: "Ödemeyi nasıl yapıyorum?",
              answer: "Ödeme, hizmet tamamlandıktan sonra doğrudan ustaya yapılır. Ödeme yöntemleri ustadan ustaya değişiklik gösterebilir."
            }
          ].map((faq, index) => (
            <details key={index} className="group rounded-lg bg-gray-800 p-6 hover:bg-gray-700 transition-colors duration-300">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-white">
                {faq.question}
                <span className="ml-4 flex-shrink-0 transform transition-transform duration-200 group-open:rotate-180">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 text-base text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Aracınız İçin En İyi Teklifleri Keşfedin
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Sanayicebimde ile aracınızın bakımı için en uygun fiyatlı ve kaliteli hizmetleri bulun. 
            Hemen teklif alın ve aracınızın bakımını dert etmeyin.
          </p>
          
          <div className="mt-10">
            <button className="inline-flex items-center rounded-full bg-gradient-to-r from-green-400 to-green-600 px-10 py-4 text-lg font-bold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-green-700">
              Hemen Teklif Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            ✓ Ücretsiz teklif alma  ✓ Güvenilir ustalar  ✓ Şeffaf fiyatlandırma
          </div>
        </div>
      </section>
    </div>
  );
}