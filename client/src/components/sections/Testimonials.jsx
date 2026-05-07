import { motion } from "motion/react"
import { TestimonialsColumn } from "../ui/testimonials-columns-1"

const testimonials = [
  { text: "QAMS Global guided us through the entire ISO 9001:2015 certification process. Professional, thorough, and incredibly supportive.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Rajesh Kumar", role: "Quality Manager" },
  { text: "We achieved ISO 45001 certification in under 3 months. The audit team was detailed, fair, and genuinely helpful.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Priya Sharma", role: "HSE Head" },
  { text: "The ISO 27001 training provided by QAMS was world-class. Our IT team is now fully equipped to maintain the ISMS.", image: "https://randomuser.me/api/portraits/men/46.jpg", name: "Amit Verma", role: "CTO" },
  { text: "Their document review was precise and practical. We knew exactly what to improve before the stage-2 audit.", image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Neha Bansal", role: "Compliance Lead" },
  { text: "The certification process was transparent from start to finish. Timelines, findings, and decisions were clearly communicated.", image: "https://randomuser.me/api/portraits/men/73.jpg", name: "Vikram Sethi", role: "Plant Head" },
  { text: "QAMS helped our food safety team align HACCP controls with stronger evidence and cleaner internal records.", image: "https://randomuser.me/api/portraits/women/12.jpg", name: "Farah Khan", role: "Food Safety Manager" },
  { text: "A serious certification partner. The auditors understood our manufacturing realities without diluting the standard.", image: "https://randomuser.me/api/portraits/men/22.jpg", name: "Arun Mehta", role: "Operations Director" },
  { text: "Their internal auditor training made our team more confident and much better prepared for surveillance audits.", image: "https://randomuser.me/api/portraits/women/28.jpg", name: "Kavya Nair", role: "Training Coordinator" },
  { text: "The certificate verification system gives our customers confidence when they review our credentials.", image: "https://randomuser.me/api/portraits/men/11.jpg", name: "Siddharth Rao", role: "Business Head" },
]

export function Testimonials() {
  const firstColumn = testimonials.slice(0, 3)
  const secondColumn = testimonials.slice(3, 6)
  const thirdColumn = testimonials.slice(6, 9)
  return (
    <section id="testimonials" className="relative bg-navy py-24">
      <div className="container-wide z-10 mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className="mx-auto flex max-w-[620px] flex-col items-center justify-center text-center">
          <div className="flex justify-center">
            <div className="rounded-lg border border-white/15 px-4 py-1 text-sm text-gold">Testimonials</div>
          </div>
          <h2 className="mt-5 text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">What Clients Say About QAMS</h2>
          <p className="mt-5 text-center text-white/65">Evidence-led certification support, practical audit teams, and service clients can trust.</p>
        </motion.div>
        <div className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
