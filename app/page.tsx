"use client"

import { useState, useEffect } from "react"
import { InstagramIcon, MapPin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-neutral-950 text-neutral-100 font-sans overflow-hidden">
      {/* ENTRANCE - Cinematic Hero */}
      <section className="min-h-screen relative flex items-end justify-start pt-32 pb-20 px-8 md:px-16 overflow-hidden">
        {/* Dark moody gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-yellow-950/10 to-red-950/20 -z-10" />
        <div className="absolute inset-0 -z-20">
          <Image
            src="/7.PNG"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Decorative overlapping shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-900/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-red-900/5 rounded-full blur-3xl -z-10" />

        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Main title */}
          <h1 className="font-serif text-8xl md:text-9xl font-light tracking-wider mb-6 leading-none">
            <span className="block">PITA</span>
            <span className="block text-yellow-600">LARA</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl font-light tracking-widest text-neutral-400 mt-8">
            ARTISAN BREAKFAST & COFFEE
          </p>
        </div>
      </section>

      {/* FOOD SECTION - Asymmetrical Menu */}
      <section className="py-32 px-8 md:px-16 bg-neutral-900/50">
        {/* Odun Ateşi - Pitas */}
        <div className="mb-32">
          <h2 className="text-7xl md:text-8xl font-serif font-light mb-20 text-neutral-100 tracking-tighter">
            Odun Ateşi
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 lg:order-2">
              <div className="border-l-4 border-yellow-600 pl-8">
                <h3 className="text-4xl md:text-5xl font-serif font-light mb-3">Klasik Pita</h3>
                <p className="text-2xl text-yellow-600 font-light">$8.50</p>
                <p className="text-neutral-400 mt-4 text-lg leading-relaxed">
                  Freshly baked wood-fired pita with Mediterranean herbs, served with tzatziki and roasted vegetables.
                </p>
              </div>
            </div>
            <div className="lg:order-1 relative h-96 bg-gradient-to-br from-yellow-800/20 to-red-900/20 rounded-2xl overflow-hidden group">
              <Image
                src="/1.PNG"
                alt="Klasik Pita"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="border-l-4 border-red-600 pl-8">
                <h3 className="text-4xl md:text-5xl font-serif font-light mb-3">Sucuklu Pita</h3>
                <p className="text-2xl text-red-600 font-light">$10.00</p>
                <p className="text-neutral-400 mt-4 text-lg leading-relaxed">
                  Turkish soudjouk sausage with caramelized onions, fresh herbs, and sumac.
                </p>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-red-800/20 to-yellow-900/20 rounded-2xl overflow-hidden group">
              <Image
                src="/2.PNG"
                alt="Sucuklu Pita"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 lg:order-2">
              <div className="border-l-4 border-yellow-600 pl-8">
                <h3 className="text-4xl md:text-5xl font-serif font-light mb-3">Beyaz Peynir Pita</h3>
                <p className="text-2xl text-yellow-600 font-light">$9.25</p>
                <p className="text-neutral-400 mt-4 text-lg leading-relaxed">
                  Creamy white cheese, slow-roasted tomatoes, arugula, and olive oil drizzle.
                </p>
              </div>
            </div>
            <div className="lg:order-1 relative h-96 bg-gradient-to-br from-yellow-800/20 to-neutral-800/50 rounded-2xl overflow-hidden group">
              <Image
                src="/3.PNG"
                alt="Beyaz Peynir Pita"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Kahvaltı - Breakfast */}
        <div className="border-t border-neutral-800 pt-32">
          <h2 className="text-7xl md:text-8xl font-serif font-light mb-20 text-neutral-100 tracking-tighter">
            Kahvaltı
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Menemen",
                price: "$7.50",
                desc: "Scrambled eggs with tomatoes, peppers, and onions",
                color: "border-yellow-600",
                image: "/4.PNG",
              },
              {
                name: "Börek",
                price: "$8.00",
                desc: "Crispy phyllo with spinach and cheese filling",
                color: "border-red-600",
                image: "/5.PNG",
              },
              {
                name: "Açma",
                price: "$4.50",
                desc: "Traditional Turkish breakfast bread with sesame seeds",
                color: "border-yellow-600",
                image: "/6.PNG",
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl bg-neutral-900/50">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                </div>
                <div className={`border-l-4 ${item.color} pl-6 py-8 relative z-10 bg-neutral-900/80 backdrop-blur-sm -mt-12 mx-4 mb-4 rounded-r-lg`}>
                  <h3 className="text-3xl md:text-4xl font-serif font-light mb-2">{item.name}</h3>
                  <p
                    className={`text-xl font-light ${item.color === "border-yellow-600" ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {item.price}
                  </p>
                  <p className="text-neutral-400 mt-3 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COFFEE & DRINKS - Premium Dark Section */}
      <section className="py-32 px-8 md:px-16 bg-gradient-to-b from-neutral-900 via-orange-950/30 to-neutral-950">
        <h2 className="text-7xl md:text-8xl font-serif font-light mb-6 text-neutral-100 tracking-tighter">
          Kahve & İçecekler
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-transparent mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "V60",
              price: "$5.50",
              desc: "Hand-poured precision brewing",
            },
            {
              name: "Cold Brew",
              price: "$4.75",
              desc: "24-hour cold extraction",
            },
            {
              name: "Turkish Coffee",
              price: "$3.50",
              desc: "Traditional copper pot method",
            },
            {
              name: "Artisan Tea",
              price: "$4.00",
              desc: "Loose leaf selection",
            },
            {
              name: "Cortado",
              price: "$4.25",
              desc: "Balanced espresso & steamed milk",
            },
            {
              name: "Flat White",
              price: "$5.00",
              desc: "Silky microfoam perfection",
            },
            {
              name: "Fresh Orange Juice",
              price: "$5.50",
              desc: "Daily pressed",
            },
            {
              name: "Ayran",
              price: "$3.00",
              desc: "Traditional yogurt drink",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 p-6 hover:border-yellow-600/50 transition-colors"
            >
              <h3 className="text-2xl font-serif font-light mb-2 text-neutral-100">{item.name}</h3>
              <p className="text-yellow-600 text-lg font-light mb-3">{item.price}</p>
              <p className="text-neutral-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-8 md:px-16 border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <p className="text-neutral-400 text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-600" />
              Istanbul, Turkey
            </p>
            <p className="text-neutral-500 text-sm">Open Daily 7am - 10pm</p>
          </div>

          <a href="#" className="flex items-center gap-2 text-neutral-400 hover:text-yellow-600 transition-colors">
            <InstagramIcon className="w-5 h-5" />
            <span className="text-lg">@pitalara</span>
          </a>
        </div>
      </footer>
    </main>
  )
}
