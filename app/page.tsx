"use client"

import { useState, useEffect } from "react"
import { InstagramIcon, MapPin, ArrowDown, ChevronRight, Menu, Phone, Calendar, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setIsLoaded(true), 500)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(id)
    }
  }

  return (
    <main className="bg-neutral-950 text-neutral-100 font-sans overflow-x-hidden">
      {/* LOADING SPLASH SCREEN */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="relative mb-8">
          <div className="w-24 h-24 border-2 border-neutral-800 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-0 flex items-center justify-center animate-[spin_3s_linear_infinite_reverse]">
            <Utensils className="w-10 h-10 text-yellow-600" />
          </div>
        </div>
        <p className="font-serif text-sm tracking-[0.5em] text-neutral-500 animate-pulse">YÜKLENİYOR</p>
      </div>

      {/* SPLIT HERO SECTION */}
      <section className="h-screen flex flex-col lg:flex-row relative">
        {/* LEFT SIDE - BRANDING (40%) */}
        <div className="w-full lg:w-[40%] h-[40vh] lg:h-full relative flex flex-col justify-end pb-20 px-8 md:px-16 z-20 bg-neutral-950 border-r border-neutral-800/50">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-yellow-950/5 to-red-950/10 -z-10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-900/5 rounded-full blur-3xl -z-10" />

          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl font-light tracking-wider mb-2 leading-none">
              <span className="block">PITA</span>
              <span className="block text-yellow-600">LARA</span>
            </h1>
            <p className="text-2xl md:text-3xl text-neutral-400 mt-4 max-w-md font-[family-name:var(--font-dancing)]">
              Coffee • Lunch • Breakfast
            </p>
            <div className="mt-8 w-16 h-0.5 bg-yellow-600" />
          </div>
        </div>

        {/* RIGHT SIDE - NAVIGATION (60%) */}
        <div className="w-full lg:w-[60%] h-[60vh] lg:h-full flex flex-col bg-neutral-950">
          {/* NAV ITEM 1: HİKAYEMİZ */}
          <div
            onClick={() => scrollToSection('story')}
            className="group relative flex-1 cursor-pointer overflow-hidden transition-all duration-700 hover:flex-[1.5]"
          >
            <Image
              src="/7.PNG"
              alt="Hikayemiz"
              fill
              className="object-cover opacity-20 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-between px-12 md:px-20">
              <div className="flex flex-col">
                <span className="text-[10px] text-yellow-600 tracking-[0.3em] mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">KEŞFET</span>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-500">
                  HİKAYEMİZ
                </h2>
              </div>
              <ArrowDown className="w-5 h-5 text-neutral-600 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:translate-y-2 opacity-50 group-hover:opacity-100" />
            </div>
          </div>

          {/* NAV ITEM 2: MENÜ */}
          <div
            onClick={() => scrollToSection('menu')}
            className="group relative flex-1 cursor-pointer overflow-hidden transition-all duration-700 hover:flex-[1.5]"
          >
            <Image
              src="/4.PNG"
              alt="Menü"
              fill
              className="object-cover opacity-20 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-between px-12 md:px-20">
              <div className="flex flex-col">
                <span className="text-[10px] text-yellow-600 tracking-[0.3em] mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">LEZZETLER</span>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-500">
                  MENÜ
                </h2>
              </div>
              <Menu className="w-5 h-5 text-neutral-600 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:scale-110 opacity-50 group-hover:opacity-100" />
            </div>
          </div>

          {/* NAV ITEM 3: REZERVASYON */}
          <div
            onClick={() => scrollToSection('contact')}
            className="group relative flex-1 cursor-pointer overflow-hidden transition-all duration-700 hover:flex-[1.5]"
          >
            <Image
              src="/3.PNG"
              alt="Rezervasyon"
              fill
              className="object-cover opacity-20 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-between px-12 md:px-20">
              <div className="flex flex-col">
                <span className="text-[10px] text-yellow-600 tracking-[0.3em] mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">BİZE ULAŞIN</span>
                <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest text-neutral-400 group-hover:text-white transition-colors duration-500">
                  REZERVASYON
                </h2>
              </div>
              <Calendar className="w-5 h-5 text-neutral-600 group-hover:text-yellow-600 transition-all duration-500 transform group-hover:rotate-12 opacity-50 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: HİKAYEMİZ & NATURAL PRODUCTS */}
      <section id="story" className="min-h-screen bg-neutral-900 relative py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-6xl md:text-8xl font-serif font-light text-yellow-600">Köklerimiz</h2>
              <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                Antalya'nın bereketli topraklarından ilham alarak, geleneksel lezzetleri modern bir dokunuşla sofranıza getiriyoruz. Her bir pita, odun ateşinin sıcaklığı ve ustalarımızın el emeği ile şekilleniyor.
              </p>
              <p className="text-lg text-neutral-400 font-light leading-relaxed">
                2015 yılında küçük bir fırın olarak başladığımız bu yolculukta, amacımız sadece karın doyurmak değil, ruhu besleyen bir deneyim sunmaktı. Bugün, Pita Lara ailesi olarak, misafirlerimize ev sıcaklığında bir atmosfer ve unutulmaz tatlar sunmanın gururunu yaşıyoruz.
              </p>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              <Image src="/1.PNG" alt="Our Story" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
            </div>
          </div>

          {/* Natural Products Slide Effect */}
          <div className="relative h-[80vh] rounded-3xl overflow-hidden my-32 group">
            <Image src="/6.PNG" alt="Natural Products" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-5xl md:text-7xl font-serif font-light mb-8 text-white">Doğal & Yerel</h3>
              <p className="text-2xl md:text-3xl font-light text-neutral-200 max-w-3xl leading-relaxed">
                "Mutfağımızda kullandığımız her malzeme, yerel üreticilerden özenle seçiliyor. Mevsimin en taze sebzeleri, doğal peynirler ve katkısız unlar..."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MENÜ */}
      <section id="menu" className="min-h-screen bg-neutral-950 py-32 px-8 md:px-16 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl font-serif font-light mb-6">Menümüz</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {/* Category 1 */}
            <div>
              <h3 className="text-3xl font-serif text-yellow-600 mb-8 border-b border-neutral-800 pb-4">Pitalar</h3>
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-medium text-neutral-200 group-hover:text-yellow-600 transition-colors">Lorem Ipsum Pita</h4>
                      <span className="text-yellow-600 font-light">$12.00</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="text-3xl font-serif text-yellow-600 mb-8 border-b border-neutral-800 pb-4">Kahvaltılıklar</h3>
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-medium text-neutral-200 group-hover:text-yellow-600 transition-colors">Dolor Sit Breakfast</h4>
                      <span className="text-yellow-600 font-light">$15.50</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Category 3 */}
            <div>
              <h3 className="text-3xl font-serif text-yellow-600 mb-8 border-b border-neutral-800 pb-4">İçecekler</h3>
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-medium text-neutral-200 group-hover:text-yellow-600 transition-colors">Consectetur Coffee</h4>
                      <span className="text-yellow-600 font-light">$4.00</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 4 */}
            <div>
              <h3 className="text-3xl font-serif text-yellow-600 mb-8 border-b border-neutral-800 pb-4">Tatlılar</h3>
              <div className="space-y-8">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-medium text-neutral-200 group-hover:text-yellow-600 transition-colors">Magna Aliqua Dessert</h4>
                      <span className="text-yellow-600 font-light">$8.50</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REZERVASYON & İLETİŞİM */}
      <section id="contact" className="min-h-screen bg-neutral-900 relative flex items-center justify-center py-32 px-8 md:px-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/2.PNG" alt="Contact Background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        </div>

        <div className="relative z-10 max-w-5xl w-full bg-neutral-950/50 backdrop-blur-md border border-neutral-800 p-8 md:p-16 rounded-2xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-serif font-light mb-8 text-white">Bize Ulaşın</h2>
              <p className="text-neutral-400 mb-12 text-lg">
                Özel günleriniz, kahvaltı organizasyonlarınız veya akşam yemekleriniz için rezervasyon yapabilirsiniz.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="w-8 h-8 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Adres</h3>
                    <p className="text-neutral-400">Lara Caddesi No: 123<br />Muratpaşa, Antalya</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Phone className="w-8 h-8 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Telefon</h3>
                    <p className="text-neutral-400">+90 (242) 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <InstagramIcon className="w-8 h-8 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">Sosyal Medya</h3>
                    <p className="text-neutral-400">@pitalara</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/80 p-8 rounded-xl border border-neutral-800">
              <h3 className="text-2xl font-serif mb-6 text-white">Rezervasyon Yap</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">İsim Soyisim</label>
                  <input type="text" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors" placeholder="Adınız" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Tarih & Saat</label>
                  <input type="datetime-local" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Kişi Sayısı</label>
                  <select className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-600 transition-colors">
                    <option>2 Kişi</option>
                    <option>3 Kişi</option>
                    <option>4 Kişi</option>
                    <option>5+ Kişi</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-4 rounded-lg transition-colors mt-4">
                  Rezervasyon Oluştur
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
