import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { GoldButton } from "../ui/GoldButton"
import { useLenis } from "../../hooks/useLenis"

export function CTABanner() {
  const ref = useRef(null)
  const { scrollTo } = useLenis()
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, { backgroundPosition: "200% 50%", duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section id="cta" ref={ref} className="bg-[linear-gradient(135deg,#0C2340_0%,#1A3D6E_50%,#0C2340_100%)] bg-[length:200%_200%] py-20 text-center">
      <div className="container-wide">
        <h2 className="text-white">Ready to Achieve ISO Certification?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">Join 500+ businesses that trust QAMS Global for their certification needs.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <GoldButton onClick={() => scrollTo("#contact")}>Apply for Certification</GoldButton>
          <a href="tel:+911204917144" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">Call Us Now</a>
        </div>
      </div>
    </section>
  )
}
