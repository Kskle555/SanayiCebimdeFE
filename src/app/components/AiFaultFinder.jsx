import { FaBrain } from "react-icons/fa";

export const AiFaultFinder = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-6">
        <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Yapay Zeka Teknolojisi"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-8 p-8 md:p-16">
            {/* Left side: Content */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-4">
                <FaBrain className="text-4xl text-primary" />
                <h2 className="text-3xl lg:text-4xl font-extrabold">
                  Sorunun Ne Olduğundan Emin Değil Misin?
                </h2>
              </div>
              <p className="text-gray-300 mb-8 max-w-2xl text-lg">
                Aracınızdaki sorunu anlatın,{" "}
                <span className="text-primary font-semibold">yapay zekamız</span>{" "}
                size en uygun usta kategorisini anında önersin.
              </p>
            </div>

            {/* Right side: Form */}
            <div className="w-full bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <textarea
                className="w-full h-28 p-4 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-primary transition"
                placeholder="Örnek: Arabam sabahları zor çalışıyor ve beyaz duman atıyor..."
              ></textarea>
              <button className="mt-4 w-full btn btn-primary btn-lg">
                Yapay Zeka ile Usta Bul
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

