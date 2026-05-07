import { Globe, ShieldCheck, Star, Users } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"

const values = [[ShieldCheck, "Independent & Impartial"], [Globe, "Globally Recognised"], [Users, "Customer Focused"], [Star, "Integrity in Everything"]]
export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, margin: "-100px" }}>
          <SectionHeading center={false} label="Who We Are" title="A Certification Partner with Measured Authority" />
          <p>QAMS Global is a Noida-based certification, audit, and training body helping organisations demonstrate conformity with internationally recognised standards. Our work combines independent assessment, practical guidance, and disciplined documentation.</p>
          <p className="mt-4">We support companies that need credible certification outcomes for customers, regulators, tenders, export markets, and internal performance improvement.</p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">{values.map(([Icon, text]) => <div key={text} className="flex items-center gap-3 font-semibold text-navy"><Icon className="text-gold" /> {text}</div>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 60, scale: 1.03 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: false, margin: "-100px" }} className="relative">
          <div className="absolute -bottom-5 -right-5 h-3/5 w-3/5 rounded-lg bg-gold opacity-20" />
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85" alt="Quality management meeting" className="relative aspect-[4/3] rounded-lg object-cover shadow-heavy" loading="lazy" />
        </motion.div>
      </div>
    </section>
  )
}
