import { AnimatePresence, motion } from "framer-motion"
import { Search } from "lucide-react"
import { useState } from "react"
import { SectionHeading } from "../ui/SectionHeading"
import { Badge } from "../ui/Badge"
import { useLenis } from "../../hooks/useLenis"

const certs = [
  ["ISO 9001", ":2015", "Quality Management System", ["Quality", "All sectors"]],
  ["ISO 14001", ":2015", "Environmental Management System", ["Environment", "Manufacturing"]],
  ["ISO 45001", ":2018", "Occupational Health and Safety", ["Safety", "Construction"]],
  ["ISO 22000", ":2005", "Food Safety Management", ["Food", "Hospitality"]],
  ["ISO 27001", ":2013", "Information Security Management", ["IT", "Security"]],
  ["ISO 13485", ":2016", "Medical Device Quality Systems", ["Healthcare", "Devices"]],
  ["ISO 50001", ":2011", "Energy Management Systems", ["Energy", "Power"]],
  ["ISO 29990", ":2010", "Learning Services Management", ["Education", "Training"]],
  ["CE Marking", "", "European conformity assessment", ["Export", "Products"]],
  ["HACCP", "", "Hazard analysis for food safety", ["Food", "Risk"]],
  ["GMP", "", "Good manufacturing practices", ["Pharma", "Manufacturing"]],
  ["GDP", "", "Good distribution practices", ["Supply Chain", "Pharma"]],
  ["ROHS", "", "Restriction of hazardous substances", ["Electronics", "Compliance"]],
  ["Organic Certification", "", "Organic production and handling", ["Agriculture", "Food"]],
  ["HALAL Certification", "", "Halal compliance assurance", ["Food", "Export"]],
]
const other = ["Logo Registration", "Trademark", "IEC Certificate", "MSME Registration", "GST Registration", "Private Limited Company", "NSIC", "Software Development"]

export function CertificationsSection() {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(null)
  const { scrollTo } = useLenis()
  const filtered = certs.filter((c) => c.join(" ").toLowerCase().includes(query.toLowerCase()))
  return (
    <section id="certifications" className="section-pad diagonal-grid bg-offwhite">
      <div className="container-wide">
        <SectionHeading label="Certification Portfolio" title="15+ Standards for Modern Compliance" subtitle="Search the standards below and expand any card for scope and application details." />
        <div className="relative mx-auto mb-10 max-w-2xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Filter certifications..." className="h-14 w-full rounded-full border border-border-light bg-white pl-14 pr-5 shadow-card outline-none focus:border-gold" />
        </div>
        <motion.div layout className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
          <AnimatePresence>
            {filtered.map(([name, year, desc, tags]) => (
              <motion.article layout key={name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} whileHover={{ y: -6, boxShadow: "var(--shadow-glow)" }} className="rounded-md border border-border-light bg-white p-5 shadow-card">
                <button onClick={() => setOpen(open === name ? null : name)} className="w-full text-left">
                  <h5>{name}<span className="text-gold">{year}</span></h5>
                  <p className="mt-3 text-sm">{desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{tags.map((t) => <span key={t} className="rounded-full bg-blue-pale px-2 py-0.5 text-xs font-semibold text-blue-mid">{t}</span>)}</div>
                </button>
                <AnimatePresence>
                  {open === name && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="mt-5 border-t border-border-light pt-4">
                        <p className="text-sm">Scope includes assessment of management controls, records, operational evidence, and continual improvement practices relevant to {desc.toLowerCase()}.</p>
                        <button onClick={() => scrollTo("#contact")} className="mt-4 font-semibold text-gold">Apply for this Certification →</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="mt-14 text-center">
          <h4 className="mb-5 text-2xl">Other Services</h4>
          <div className="flex flex-wrap justify-center gap-3">{other.map((item, i) => <motion.span key={item} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} viewport={{ once: false }}><Badge>{item}</Badge></motion.span>)}</div>
        </div>
      </div>
    </section>
  )
}
