import { useEffect, useRef, useState } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LenisContext } from "./context/LenisContext"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { HeroSlider } from "./components/sections/HeroSlider"
import { TrustBar } from "./components/sections/TrustBar"
import { StatsSection } from "./components/sections/StatsSection"
import { ServicesSection } from "./components/sections/ServicesSection"
import { HowItWorks } from "./components/sections/HowItWorks"
import { CertificationsSection } from "./components/sections/CertificationsSection"
import { IndustriesGrid } from "./components/sections/IndustriesGrid"
import { AboutSection } from "./components/sections/AboutSection"
import { MissionSection } from "./components/sections/MissionSection"
import { SearchCertificate } from "./components/sections/SearchCertificate"
import { Testimonials } from "./components/sections/Testimonials"
import { FAQSection } from "./components/sections/FAQSection"
import { PolicySection } from "./components/sections/PolicySection"
import { CTABanner } from "./components/sections/CTABanner"
import { ContactSection } from "./components/sections/ContactSection"

export default function App() {
  const [lenis, setLenis] = useState(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.08,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    })
    // Lenis must be exposed synchronously; deferring this can publish a destroyed
    // StrictMode test instance and make nav scrolling appear broken.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLenis(instance)
    instance.on("scroll", ScrollTrigger.update)
    const raf = (time) => instance.raf(time * 1000)
    rafRef.current = raf
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(raf)
      instance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      <Navbar />
      <main>
        <HeroSlider />
        <TrustBar />
        <StatsSection />
        <ServicesSection />
        <HowItWorks />
        <CertificationsSection />
        <IndustriesGrid />
        <AboutSection />
        <MissionSection />
        <SearchCertificate />
        <Testimonials />
        <FAQSection />
        <PolicySection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
    </LenisContext.Provider>
  )
}
