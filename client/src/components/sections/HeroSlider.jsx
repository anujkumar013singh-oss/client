import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { gsap } from "gsap"
import { GoldButton } from "../ui/GoldButton"
import AvatarGroup from "../ui/avatar-group"
import { useLenis } from "../../hooks/useLenis"

const slides = [
  ["ISO Certification Body", "Demonstrate True Performance", "India's most trusted certification, audit, and training partner. Recognised globally.", "Explore Our Services", "#services", "https://marketplace.canva.com/EAF5ZVffmZw/1/0/1600w/canva-modern-vintage-certificate-of-achievement-yMEujoaa8Hs.jpg"],
  ["Globally Recognised Standards", "ISO Certified", "Serving 15+ industries across India and beyond. Helping businesses achieve compliance.", "Explore Our Services", "#services", "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85"],
  ["Quality Without Compromise", "Quality That Speaks for Itself", "ISO 9001, 14001, 45001 and 15+ more standards. Apply for certification today.", "Explore Our Services", "#services", "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=85"],
  ["Professional Certification", "Certified Excellence", "Comprehensive ISO certification services for quality, safety, and environmental management systems.", "Explore Our Services", "#services", "https://www.certbodies.co.uk/wp-content/uploads/2021/03/ISO-certification-scaled.jpeg"],
]

const expertAvatars = [
  { id: 1, name: "Rajesh Kumar", designation: "Lead QMS Auditor", image: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 2, name: "Priya Sharma", designation: "OH&S Assessor", image: "https://randomuser.me/api/portraits/women/61.jpg" },
  { id: 3, name: "Amit Verma", designation: "ISMS Trainer", image: "https://randomuser.me/api/portraits/men/62.jpg" },
  { id: 4, name: "Neha Bansal", designation: "Compliance Lead", image: "https://randomuser.me/api/portraits/women/63.jpg" },
  { id: 5, name: "Vikram Sethi", designation: "Certification Manager", image: "https://randomuser.me/api/portraits/men/64.jpg" },
  { id: 6, name: "Farah Khan", designation: "Food Safety Expert", image: "https://randomuser.me/api/portraits/women/65.jpg" },
]

export function HeroSlider() {
  const root = useRef(null)
  const labelRef = useRef(null)
  const { scrollTo } = useLenis()
  const animate = () => {
    const active = root.current?.querySelector(".swiper-slide-active")
    if (!active) return
    gsap.fromTo(active.querySelectorAll(".hero-word"), { opacity: 0, yPercent: 110, rotateX: -70, filter: "blur(10px)" }, { opacity: 1, yPercent: 0, rotateX: 0, filter: "blur(0px)", stagger: 0.055, duration: 0.9, delay: 0.45, ease: "power4.out" })
    gsap.fromTo(active.querySelector(".hero-sub"), { opacity: 0, y: 24, filter: "blur(8px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, delay: 0.95 })
  }
  useEffect(() => {
    const ctx = gsap.context(() => {
      animate()
      if (labelRef.current) {
        gsap.fromTo(labelRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
      }
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section id="hero" ref={root} className="relative h-screen overflow-hidden bg-navy">
      <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 5000, disableOnInteraction: false }} loop speed={1000} allowTouchMove={false} onSlideChangeTransitionStart={animate} className="h-full">
        {slides.map(([label, title, sub, cta, target, image]) => (
          <SwiperSlide key={title}>
            <img src={image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(12,35,64,0.88)_35%,rgba(12,35,64,0.42)_100%)]" />
            <div className="absolute inset-y-0 left-0 flex w-full items-center">
              <div className="max-w-[850px] px-[6vw] pt-16">
                <span className="label-text">{label}</span>
                <h1 className="mt-5 overflow-hidden text-balance text-white [perspective:900px]">{title.split(" ").map((w, i) => <span key={`${w}-${i}`} className="hero-word inline-block origin-bottom mr-4">{w}</span>)}</h1>
                <p className="hero-sub mt-6 max-w-2xl text-lg !text-white">{sub}</p>
                <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2 }} className="mt-8">
                  <GoldButton onClick={() => scrollTo(target)}>{cta}</GoldButton>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={labelRef} className="absolute left-[6vw] top-[28vh] sm:top-[29vh] lg:top-[28vh] z-10 pointer-events-none">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <AvatarGroup items={expertAvatars} maxVisible={5} size="sm" className="sm:scale-110" />
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">Trusted audit experts</span>
        </div>
      </div>
      <motion.button aria-label="Scroll down" onClick={() => scrollTo("#trust")} animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"><ChevronDown size={34} /></motion.button>
    </section>
  )
}
