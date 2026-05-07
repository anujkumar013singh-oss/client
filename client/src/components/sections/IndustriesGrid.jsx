import { Building, Car, Factory, FlaskConical, GraduationCap, HeartPulse, Hotel, Laptop, Pill, PlugZap, ShoppingBag, Utensils } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "../ui/SectionHeading"

const industries = [
  [Factory, "Manufacturing"], [Utensils, "Food & Beverage"], [Laptop, "Information Technology"], [Pill, "Pharmaceuticals"], [Building, "Construction"], [HeartPulse, "Healthcare"], [Hotel, "Hospitality"], [ShoppingBag, "Retail"], [PlugZap, "Energy & Power"], [FlaskConical, "Chemicals"], [Car, "Automobiles"], [GraduationCap, "Education"],
]
export function IndustriesGrid() {
  return (
    <section id="industries" className="section-pad bg-navy">
      <div className="container-wide">
        <SectionHeading light label="Industries We Serve" title="Built for Regulated, Ambitious Sectors" subtitle="Our audit teams understand the operational realities behind certification evidence." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(([Icon, name]) => <motion.div key={name} whileHover={{ backgroundColor: "rgba(212,160,23,0.15)", borderColor: "#D4A017", scale: 1.04 }} className="rounded-md border border-white/10 bg-white/[0.05] p-5 text-center"><Icon className="mx-auto text-white" /><p className="mt-3 text-sm font-medium text-white">{name}</p></motion.div>)}
        </div>
      </div>
    </section>
  )
}
