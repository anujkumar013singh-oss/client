import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { SectionHeading } from "../ui/SectionHeading"
import { cn } from "../../utils/cn"

const policies = {
  "Quality Policy": ["QAMS Global is committed to delivering impartial certification services that are technically sound, consistently administered, and focused on continual improvement.", ["Maintain competent audit teams", "Apply certification rules consistently", "Improve services through measurable feedback"]],
  "Environmental Policy": ["We conduct our operations with respect for environmental protection, resource efficiency, and prevention of pollution wherever our activities have influence.", ["Reduce avoidable waste", "Prefer responsible digital workflows", "Promote environmental awareness"]],
  "OH&S Policy": ["QAMS Global works to protect the health, safety, and welfare of employees, auditors, clients, and stakeholders involved in our certification activities.", ["Identify operational risks", "Promote safe audit practices", "Comply with applicable OH&S requirements"]],
  "Impartiality Policy": ["Certification decisions are made independently and without commercial, financial, or personal pressure that could compromise objectivity.", ["Manage conflicts of interest", "Separate consulting from certification decisions", "Escalate threats to impartiality"]],
  "Confidentiality Policy": ["Client information obtained during certification activities is protected and used only for legitimate assessment, certification, and regulatory purposes.", ["Limit access to records", "Use secure communication channels", "Respect client intellectual property"]],
}

export function PolicySection() {
  const tabs = Object.keys(policies)
  const [tab, setTab] = useState(tabs[0])
  const [body, bullets] = policies[tab]
  return (
    <section id="policy" className="section-pad bg-offwhite">
      <div className="container-wide">
        <SectionHeading label="Governance" title="Our Policies" subtitle="Formal commitments that guide QAMS Global's certification operations." />
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={cn("relative rounded-full px-4 py-2 text-sm font-semibold text-navy", tab === item && "text-gold")}>{item}{tab === item && <motion.span layoutId="policy-tab" className="absolute inset-x-4 -bottom-1 h-0.5 bg-gold" />}</button>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.article key={tab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mx-auto mt-10 max-w-[65ch] rounded-lg bg-white p-8 shadow-card">
              <h3>{tab}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold">Last reviewed: January 2025</p>
              <p className="mt-6 leading-[1.85]">{body}</p>
              <div className="mt-6 space-y-3">{bullets.map((b) => <p key={b} className="flex items-center gap-3 text-navy"><CheckCircle2 className="text-gold" /> {b}</p>)}</div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
