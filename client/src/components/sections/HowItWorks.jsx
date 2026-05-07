import { Building2, FileText, Search, ShieldCheck } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SectionHeading } from "../ui/SectionHeading"

const steps = [
  [FileText, "Apply", "Submit your application form online or contact our team directly."],
  [Search, "Document Review", "Our experts review your quality management documentation thoroughly."],
  [Building2, "On-site Audit", "Certified auditors visit your premises and conduct a detailed stage-2 audit."],
  [ShieldCheck, "Get Certified", "Receive your internationally recognised ISO certificate. Valid 3 years."],
]

export function HowItWorks() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".process-path", { strokeDasharray: 900, strokeDashoffset: 900 })
      gsap.to(".process-path", {
        scrollTrigger: {
          trigger: ".process-graph",
          start: "top 82%",
          end: "bottom 45%",
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
        strokeDashoffset: 0,
        ease: "none",
      })
      gsap.from(".graph-node", { scrollTrigger: { trigger: ".process-graph", start: "top 78%", toggleActions: "play none none none" }, opacity: 0, y: 34, scale: 0.92, stagger: 0.18, duration: 0.85, ease: "power3.out" })
      gsap.to(".pulse-ring", { scale: 1.35, opacity: 0, repeat: -1, duration: 1.8, stagger: 0.22, ease: "power2.out" })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <section id="process" ref={ref} className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading label="How It Works" title="A Clear Route to Certification" subtitle="A disciplined process that keeps responsibilities clear from application through certificate issue." />
        <div className="process-graph relative mx-auto max-w-6xl rounded-xl border border-border-light bg-offwhite p-6 shadow-card md:p-10">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 1100 430" fill="none" preserveAspectRatio="none">
            <path className="process-path" d="M110 238 C250 80 365 92 455 214 C555 350 682 345 765 210 C842 82 955 88 1010 190" stroke="#D4A017" strokeWidth="3" strokeLinecap="round" strokeDasharray="900" />
            <path d="M110 238 C250 80 365 92 455 214 C555 350 682 345 765 210 C842 82 955 88 1010 190" stroke="#0C2340" strokeOpacity=".08" strokeWidth="18" strokeLinecap="round" />
          </svg>
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map(([Icon, title, text], i) => (
              <div key={title} className={`graph-node relative rounded-lg border border-white bg-white p-6 shadow-card ${i % 2 ? "lg:mt-28" : ""}`}>
                <div className="relative mb-5 grid h-14 w-14 place-items-center rounded-full bg-navy text-gold">
                  <span className="pulse-ring absolute inset-0 rounded-full border border-gold" />
                  <Icon size={26} />
                </div>
                <span className="mono text-xs">0{i + 1}</span>
                <h4 className="mt-2 text-xl">{title}</h4>
                <p className="mt-3 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
