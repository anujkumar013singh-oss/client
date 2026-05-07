import { Heart, Link2, Mail, MapPin, Phone, PlayCircle, Share2 } from "lucide-react"
import { useLenis } from "../../hooks/useLenis"
import ThemeToggleFooter from "../ui/footer"

export function Footer() {
  const { scrollTo } = useLenis()
  const groups = [
    { name: "Company", items: [["About", "about"], ["Mission", "mission"], ["Policy", "policy"]] },
    { name: "Services", items: [["Audit", "process"], ["Training", "services"], ["Certification", "certifications"]] },
    { name: "Standards", items: [["ISO 9001", "certifications"], ["ISO 14001", "certifications"], ["ISO 45001", "certifications"]] },
    { name: "Tools", items: [["Verify Certificate", "search"], ["FAQs", "faq"], ["Contact", "contact"]] },
    { name: "Industries", items: [["Manufacturing", "industries"], ["Healthcare", "industries"], ["IT & Security", "industries"]] },
    { name: "Reach Us", items: [["Noida Office", "contact"], ["Email", "contact"], ["Phone", "contact"]] },
  ]
  const underline = "rounded-xl border border-dotted border-white/20 p-2.5 text-white/70 transition hover:-translate-y-1 hover:border-gold hover:text-gold"
  return (
    <footer className="mx-auto w-full border-y border-white/10 bg-footer px-2 text-white">
      <div className="relative mx-auto grid max-w-7xl items-center justify-center gap-6 p-10 pb-0 md:flex">
        <button onClick={() => scrollTo("#hero")} className="flex items-center justify-center rounded-full">
          <img src="https://ik.imagekit.io/vxqem8zrj/Screenshot_from_2026-05-06_16-18-08-removebg-preview%20(1).png?updatedAt=1778064700322" alt="QAMS Global" className="h-14 w-auto object-contain" />
        </button>
        <p className="max-w-5xl bg-transparent text-center text-xs leading-6 text-white/60 md:text-left">
          QAMS Global helps organisations prove quality, safety, environmental responsibility, and operational maturity through impartial ISO certification, audit, and training services. We combine clear documentation, competent auditors, and responsive support so businesses can earn trust in regulated and competitive markets.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-dotted border-white/20" />
        <div className="py-10">
          <div className="grid grid-cols-2 justify-between gap-8 leading-6 sm:grid-cols-3 md:flex">
            {groups.map((section) => (
              <div key={section.name}>
                <h6 className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">{section.name}</h6>
                <ul className="flex flex-col space-y-2">
                  {section.items.map(([name, id]) => (
                    <li key={`${section.name}-${name}`} className="flow-root">
                      <button onClick={() => scrollTo(`#${id}`)} className="text-left text-sm text-white/55 transition hover:text-gold md:text-xs">
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-b border-dotted border-white/20" />
      </div>

      <div className="flex flex-wrap justify-center gap-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
          <a aria-label="Email QAMS Global" href="mailto:info@qamsglobal.com" className={underline}><Mail className="h-5 w-5" /></a>
          <a aria-label="Call QAMS Global" href="tel:+911204917144" className={underline}><Phone className="h-5 w-5" /></a>
          <button aria-label="Map" onClick={() => scrollTo("#contact")} className={underline}><MapPin className="h-5 w-5" /></button>
          <a aria-label="LinkedIn" href="https://www.linkedin.com" rel="noreferrer" target="_blank" className={underline}><Link2 className="h-5 w-5" /></a>
          <a aria-label="YouTube" href="https://www.youtube.com" rel="noreferrer" target="_blank" className={underline}><PlayCircle className="h-5 w-5" /></a>
          <button aria-label="Share" className={underline}><Share2 className="h-5 w-5" /></button>
        </div>
        <ThemeToggleFooter />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-xs md:max-w-7xl">
        <div className="flex flex-row items-center justify-center gap-1 text-white/55">
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>QAMS Global. Made with</span>
          <Heart className="mx-1 h-4 w-4 animate-pulse text-gold" />
          <span>in India.</span>
        </div>
      </div>
    </footer>
  )
}
