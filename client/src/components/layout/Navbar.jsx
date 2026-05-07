import { AnimatePresence, motion, useScroll } from "framer-motion"
import { Building2, ChevronDown, FileBadge2, Home, Info, Menu, ScrollText, Target, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { useLenis } from "../../hooks/useLenis"
import { cn } from "../../utils/cn"

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TwitterIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const nav = [
  { label: "Home", id: "hero", icon: Home },
  { label: "Services", id: "services", icon: Building2 },
  { label: "Certifications", id: "certifications", icon: FileBadge2 },
  { label: "Contact Us", id: "contact", icon: ScrollText },
]
const company = [
  { label: "About Us", id: "about", icon: Info },
  { label: "Mission", id: "mission", icon: Target },
  { label: "Policy", id: "policy", icon: ScrollText },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const { lenis, scrollTo } = useLenis()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")
  const [drawer, setDrawer] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const ids = useMemo(() => ["hero", "services", "certifications", "about", "mission", "policy", "contact"], [])

  useEffect(() => scrollY.on("change", (v) => setScrolled(v > 80)), [scrollY])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  useEffect(() => {
    if (!lenis) return
    if (drawer) lenis.stop()
    else lenis.start()
  }, [drawer, lenis])

  const go = (id) => {
    setDrawer(false)
    setCompanyOpen(false)
    setTimeout(() => scrollTo(`#${id}`), 120)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[9999]"
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.08)",
        backdropFilter: "blur(18px)",
        boxShadow: scrolled ? "0 2px 22px rgba(0,0,0,0.18)" : "none",
      }}
    >
      <nav className="container-wide flex h-20 items-center justify-between">
        <button onClick={() => go("hero")} className="flex items-center gap-3 text-left">
          <img src="https://ik.imagekit.io/vxqem8zrj/Screenshot_from_2026-05-06_16-18-08-removebg-preview%20(1).png?updatedAt=1778064700322" alt="QAMS Global" className="h-12 w-auto object-contain" />
          <span className="hidden leading-tight sm:block">
            <span className="block text-xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>QAMS</span>
            <span className="block text-xs font-medium uppercase tracking-[0.28em] text-gold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Global</span>
          </span>
        </button>
        <div className="hidden items-center gap-8 lg:flex">
          {nav.slice(0, 3).map((item) => (
            <button key={item.id} onClick={() => go(item.id)} className={cn("border-b-2 border-transparent py-2 text-base font-semibold text-white transition hover:text-gold", active === item.id && "border-gold text-gold")} style={{ fontFamily: 'Sen, sans-serif' }}>{item.label}</button>
          ))}
          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className={cn("flex items-center gap-1 border-b-2 border-transparent py-2 text-base font-semibold text-white transition hover:text-gold", ["about", "mission", "policy"].includes(active) && "border-gold text-gold")} style={{ fontFamily: 'Sen, sans-serif' }}>
              Company <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 top-11 w-56 rounded-md bg-white p-2 shadow-heavy">
                  {company.map(({ id, label, icon: Icon }) => (
                    <button key={id} onClick={() => go(id)} className="flex w-full items-center gap-3 rounded-sm border-l-2 border-transparent px-4 py-3 text-left text-sm font-semibold text-navy hover:border-navy hover:bg-blue-pale">
                      <Icon size={18} className="text-gold" /> {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => go("contact")} className={cn("border-b-2 border-transparent py-2 text-base font-semibold text-white transition hover:text-gold", active === "contact" && "border-gold text-gold")} style={{ fontFamily: 'Sen, sans-serif' }}>Contact Us</button>
        </div>
        <button className="grid h-11 w-11 place-items-center text-gold lg:hidden" onClick={() => setDrawer(true)} aria-label="Open menu"><Menu /></button>
      </nav>
      <AnimatePresence>
        {drawer && (
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 220 }} className="fixed right-0 top-0 z-[10000] h-screen w-full bg-navy p-7 sm:w-[420px]">
            <div className="mb-10 flex items-center justify-between">
              <img src="https://ik.imagekit.io/vxqem8zrj/Screenshot_from_2026-05-06_16-18-08-removebg-preview%20(1).png?updatedAt=1778064700322" alt="QAMS Global" className="h-14 w-auto object-contain" />
              <button className="grid h-11 w-11 place-items-center text-gold" onClick={() => setDrawer(false)} aria-label="Close menu"><X /></button>
            </div>
            {[...nav.slice(0, 3), ...nav.slice(3)].map(({ id, label, icon: Icon }) => (
              <button key={id} onClick={() => go(id)} className={cn("flex w-full items-center gap-4 border-b border-white/10 py-5 text-left text-xl font-semibold transition", active === id ? "text-gold" : "text-white hover:text-gold")}><Icon /> {label}</button>
            ))}
            <button onClick={() => setCompanyOpen((v) => !v)} className={cn("flex w-full items-center justify-between border-b border-white/10 py-5 text-xl font-semibold transition", ["about","mission","policy"].includes(active) ? "text-gold" : "text-white")}>
              Company <ChevronDown className={cn("transition", companyOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {companyOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  {company.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => go(id)} className={cn("flex w-full items-center gap-3 px-4 py-3 text-left transition", active === id ? "text-gold" : "text-white/80 hover:text-gold")}><Icon size={18} /> {label}</button>)}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-8 flex items-center gap-6 border-t border-white/10 pt-8">
              <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <InstagramIcon size={24} />
              </motion.a>
              <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors" whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                <TwitterIcon size={24} />
              </motion.a>
              <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <FacebookIcon size={24} />
              </motion.a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
