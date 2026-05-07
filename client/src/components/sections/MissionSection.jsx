import { BadgeCheck, Eye, Handshake, Lightbulb, Scale, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "../ui/TextGenerateEffect"

const values = [
  [BadgeCheck, "Quality", "Evidence-led work."], [Scale, "Integrity", "Clear and impartial decisions."], [Lightbulb, "Innovation", "Modern certification support."], [Eye, "Transparency", "Visible process and status."], [Handshake, "Customer Focus", "Responsive expert teams."], [Shield, "Global Standards", "Internationally aligned practice."],
]
export function MissionSection() {
  return (
    <section id="mission" className="section-pad bg-footer">
      <div className="container-wide max-w-5xl">
        <span className="label-text">Our Mission</span>
        <blockquote className="mt-5 border-l-4 border-gold pl-8"><TextGenerateEffect words="To provide world-class certification services that empower businesses to achieve internationally recognised quality, safety, and environmental standards with integrity, independence, and excellence." className="text-[clamp(1.8rem,4vw,3.4rem)] font-bold leading-tight text-white" style={{ fontFamily: 'Josefin Sans, sans-serif' }} /></blockquote>
        <div className="mt-14 border-l-4 border-blue-mid pl-8">
          <span className="label-text">Our Vision</span>
          <p className="mt-4 font-heading text-2xl font-semibold text-white">To be India's most trusted and globally recognised certification body, known for our commitment to quality, independence, and measurable impact.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map(([Icon, title, text], i) => <motion.div key={title} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: false }} className="rounded-lg border border-white/10 bg-white/[0.05] p-5"><Icon className="text-gold" /><h5 className="mt-4 text-white">{title}</h5><p className="mt-2 text-sm text-white/60">{text}</p></motion.div>)}
        </div>
      </div>
    </section>
  )
}
