"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function News() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    {
      src: "",
      alt: "Hospital Building",
    },
    {
      src: "",
      alt: "Hospital Interior",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl font-bold">
            OUR <span className="text-[#FF9B62]">NEWS</span>
          </h2>
          <div className="mt-8 bg-[#FF9B62] rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Coca-Cola foundation launches 'Unnati Aamrit' prog in state</h3>
                <Image
                  src=""
                  alt="News Article"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  The Coca-Cola Foundation has launched a new agricultural project under its flagship programme 'Project
                  Unnati' in partnership with SWADESH...
                </p>
              </div>
              <div className="text-white">
                <h3 className="text-4xl font-bold mb-8">GALLERY</h3>
                <div className="relative">
                  <div className="overflow-hidden rounded-lg">
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {galleryImages.map((image, index) => (
                        <div key={index} className="min-w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={500}
                            height={300}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide(Math.min(galleryImages.length - 1, currentSlide + 1))}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                    disabled={currentSlide === galleryImages.length - 1}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

