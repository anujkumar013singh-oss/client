import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import { useLenis } from "../../hooks/useLenis"

const faqs = [
  ["What is ISO certification and why does my business need it?", "ISO certification proves your organisation meets internationally recognised standards for quality, safety, or environmental management. It builds customer trust, opens new market access, and improves internal efficiency."],
  ["How long does the QAMS certification process take?", "The timeline varies by standard and company size, but typically ranges from 4 to 12 weeks from application to certificate issuance. Our team works efficiently to minimise disruption to your operations."],
  ["Which ISO standards does QAMS offer certification for?", "QAMS offers certification for ISO 9001, 14001, 45001, 22000, 27001, 13485, 50001, 29990, CE Marking, HACCP, GMP, GDP, HALAL, and several more."],
  ["Is QAMS certification internationally recognised?", "Yes. QAMS Global is accredited by UKA Forum Limited and associated with ASCB, giving our certificates international recognition accepted by clients, regulators, and governments worldwide."],
  ["How can I verify if a certificate issued by QAMS is valid?", "Use the certificate verification tool above. Simply enter the certificate number to view the full details, status, and validity of any QAMS-issued certificate."],
]
export function FAQSection() {
  const { scrollTo } = useLenis()
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-wide grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div><SectionHeading center={false} label="Questions" title="Certification FAQs" subtitle="Quick answers for common certification decisions." /><button onClick={() => scrollTo("#contact")} className="font-semibold text-gold">Speak with an expert →</button></div>
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map(([q, a], i) => <Accordion.Item key={q} value={`item-${i}`} className="overflow-hidden rounded-md border border-border-light bg-offwhite data-[state=open]:border-l-4 data-[state=open]:border-l-gold">
            <Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-5 text-left font-heading text-base font-semibold leading-snug text-navy md:text-lg">{q}<Plus className="shrink-0 text-gold transition group-data-[state=open]:rotate-45" /></Accordion.Trigger></Accordion.Header>
            <Accordion.Content className="overflow-hidden px-5 pb-5 text-text-secondary data-[state=open]:animate-[accordion-down_0.25s_ease-out]">{a}</Accordion.Content>
          </Accordion.Item>)}
        </Accordion.Root>
      </div>
    </section>
  )
}
