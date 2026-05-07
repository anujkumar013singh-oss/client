import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { cn } from "../../utils/cn"

export function SectionHeading({ label, title, subtitle, light = false, center = true }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".heading-word", {
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        y: 44,
        stagger: 0.045,
        duration: 0.75,
        ease: "power3.out",
      })
      gsap.fromTo(".heading-line", { scaleX: 0 }, {
        scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none none" },
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power2.out",
      })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={ref} className={cn("mb-12", center ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      <span className="label-text">{label}</span>
      <h2 className={cn("mt-3 overflow-hidden", light && "text-white")}>
        {title.split(" ").map((word, index) => <span className="heading-word inline-block mr-3" key={`${word}-${index}`}>{word}</span>)}
      </h2>
      {subtitle && <p className={cn("mt-5", light && "text-white/70")}>{subtitle}</p>}
      <span className={cn("heading-line mt-6 block h-0.5 w-24 bg-gold", center && "mx-auto")} />
    </div>
  )
}
