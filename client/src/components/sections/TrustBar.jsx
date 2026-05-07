import { motion } from "framer-motion"

const items = ["UKA Forum Limited Accredited", "ASCB Member", "ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Trusted Since 2014", "500+ Clients Certified", "15+ Countries"]

export function TrustBar() {
  const row = [...items, ...items, ...items]
  return (
    <section id="trust" className="overflow-hidden bg-navy py-[18px]">
      <motion.div className="flex w-max gap-5 whitespace-nowrap" animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: 25, ease: "linear", repeat: Infinity }}>
        {row.map((item, i) => <span key={`${item}-${i}`} className="text-sm font-medium tracking-wider text-white"><span className="text-gold drop-shadow">{item}</span> <span className="mx-5 text-gold">◆</span></span>)}
      </motion.div>
    </section>
  )
}
