'use client'

import React, { useEffect, useState } from 'react'
import { PortfolioItem } from '../../types'
import ScrollAnimation from '../../components/ScrollAnimation'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { portfolioItems } from '@/lib/appConstant'

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const openSlideshow = (item: PortfolioItem, index: number) => {
    setSelectedItem(item)
    setCurrentIndex(index)
  }

  const closeSlideshow = () => {
    setSelectedItem(null)
  }

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % portfolioItems.length
    setCurrentIndex(newIndex)
    setSelectedItem(portfolioItems[newIndex])
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length
    setCurrentIndex(newIndex)
    setSelectedItem(portfolioItems[newIndex])
  }

  useEffect(()=>{
    if(wrapperRef.current) {
      console.log("currentIndex changed", currentIndex);
      wrapperRef.current.scrollTop = 0;
    }
  }, [currentIndex])

  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <ScrollAnimation>
          <h1 className="text-5xl font-bold text-center mb-4 text-pink-600">Our Portfolio</h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Showcasing our best work and successful projects
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={item.id}>
              <div
                onClick={() => openSlideshow(item, index)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-muted hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.screenshot}
                    alt={item.title}
                    className="object-top w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-pink-600">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm bg-green-400/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Slideshow Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeSlideshow}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-lg transition bg-black"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-lg transition"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-lg transition"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl w-full">
          <div ref={wrapperRef} className="max-h-[70vh] overflow-auto rounded-lg mb-6">
              <img
                src={selectedItem.screenshot}
                alt={selectedItem.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-white text-center">
              <h2 className="text-3xl font-bold mb-2 text-pink-600">{selectedItem.title}</h2>
              <p className="text-gray-300 mb-4">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selectedItem.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-green-400/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {selectedItem.liveUrl && (
                <a
                  href={selectedItem.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                >
                  View Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}