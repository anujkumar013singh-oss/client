import CountUpModule from "react-countup"
import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"
import { SectionWrapper } from "../layout/SectionWrapper"

const CountUp = CountUpModule.default ?? CountUpModule

const stats = [
  [500, "Clients Certified", "Audited and certified across high-trust sectors."],
  [10, "Years of Excellence", "A decade of disciplined certification practice."],
  [15, "Industries Served", "From manufacturing to technology and healthcare."],
  [20, "ISO Standards Offered", "Broad coverage across major global standards."],
]

export function StatsSection() {
  return (
    <SectionWrapper id="stats" className="section-pad dot-grid bg-footer">
      <div className="container-wide">
        <SectionHeading light label="Proof of Performance" title="Our Impact in Numbers" subtitle="QAMS Global supports organisations with clear evidence, impartial audits, and recognised certification outcomes." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label, desc], i) => (
            <motion.div key={label} initial={{ opacity: 1, y: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.15 }} className="rounded-lg border border-gold/20 border-t-[3px] border-t-gold bg-white/[0.04] p-7 text-center">
              <div className="font-heading text-5xl font-extrabold text-gold"><CountUp end={value} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce={false} /></div>
              <h4 className="mt-3 text-xl text-white">{label}</h4>
              <p className="mt-2 text-sm text-white/55">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
