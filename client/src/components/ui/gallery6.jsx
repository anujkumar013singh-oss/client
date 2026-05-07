"use client"

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const defaultItems = [
  {
    id: "item-1",
    title: "Audit",
    summary: "Independent third-party audits for compliance and performance improvement across all major ISO standards.",
    url: "#process",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "item-2",
    title: "Training",
    summary: "Certified training programs for employees and internal auditors with online and on-site delivery options.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "item-3",
    title: "Certification",
    summary: "Globally recognised ISO certification issued through a rigorous, impartial, and well-documented process.",
    url: "#certifications",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "item-4",
    title: "Certificate Verification",
    summary: "Fast validation tools that help clients and stakeholders verify QAMS-issued certificate status instantly.",
    url: "#search",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "item-5",
    title: "Compliance Advisory",
    summary: "Practical readiness support for organisations preparing documentation, teams, and operational evidence.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
]

function Gallery6({ heading = "Services", demoUrl = "#contact", items = defaultItems, onNavigate }) {
  const [carouselApi, setCarouselApi] = useState()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!carouselApi) return undefined
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
    }
    updateSelection()
    carouselApi.on("select", updateSelection)
    carouselApi.on("reInit", updateSelection)
    return () => {
      carouselApi.off("select", updateSelection)
      carouselApi.off("reInit", updateSelection)
    }
  }, [carouselApi])

  const handleLink = (event, url) => {
    if (url?.startsWith("#") && onNavigate) {
      event.preventDefault()
      onNavigate(url)
    }
  }

  return (
    <section className="py-28">
      <div className="container-wide">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <span className="label-text">What We Do</span>
            <h2 className="mb-3 mt-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">{heading}</h2>
            <a href={demoUrl} onClick={(event) => handleLink(event, demoUrl)} className="group flex w-fit items-center gap-1 text-sm font-semibold text-navy md:text-base lg:text-lg">
              Book a consultation
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} className="disabled:pointer-events-auto">
              <ArrowLeft className="size-5" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} className="disabled:pointer-events-auto">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel setApi={setCarouselApi} opts={{ align: "start", dragFree: false, breakpoints: { "(max-width: 768px)": { dragFree: true } } }} className="relative left-[-1rem]">
          <CarouselContent className="-mr-4 ml-8 2xl:ml-[max(8rem,calc(50vw-700px+1rem))] 2xl:mr-[max(0rem,calc(50vw-700px-1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                <a href={item.url} onClick={(event) => handleLink(event, item.url)} className="group flex h-full flex-col justify-between">
                  <div className="flex aspect-[3/2] overflow-clip rounded-xl bg-navy">
                    <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover object-center" loading="lazy" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,35,64,0.54),transparent_55%)]" />
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-semibold text-navy md:mb-3 md:text-xl lg:text-2xl">{item.title}</div>
                  <div className="mb-8 line-clamp-2 text-sm text-text-secondary md:mb-12 md:text-base lg:mb-9">{item.summary}</div>
                  <div className="flex items-center text-sm font-semibold text-gold">
                    Read more <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export { Gallery6 }
