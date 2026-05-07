import { SectionWrapper } from "../layout/SectionWrapper"
import { useLenis } from "../../hooks/useLenis"
import { Gallery6 } from "../ui/gallery6"

const services = [
  {
    id: "audit",
    title: "Audit",
    summary: "Independent third-party audits for compliance and performance improvement across all major ISO standards.",
    url: "#process",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "training",
    title: "Training",
    summary: "Certified training programs for employees and internal auditors. Online and on-site options available.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "certification",
    title: "Certification",
    summary: "Globally recognised ISO certification issued by our accredited body. Fast turnaround, thorough process.",
    url: "#certifications",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "verification",
    title: "Certificate Verification",
    summary: "Instantly verify QAMS-issued certificate numbers, validity windows, scopes, and status.",
    url: "#search",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "readiness",
    title: "Compliance Readiness",
    summary: "Prepare teams, records, and evidence before formal assessment with practical expert guidance.",
    url: "#contact",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
]

export function ServicesSection() {
  const { scrollTo } = useLenis()
  return (
    <SectionWrapper id="services" className="section-pad bg-offwhite">
      <Gallery6 heading="Certification Services Built for Serious Organisations" demoUrl="#contact" items={services} onNavigate={scrollTo} />
    </SectionWrapper>
  )
}
