import { AnimatePresence, motion } from "framer-motion"
import { Download, Search, SearchX } from "lucide-react"
import { useState } from "react"
import { api } from "../../utils/api"
import { SectionHeading } from "../ui/SectionHeading"
import { NavyButton } from "../ui/NavyButton"
import { useLenis } from "../../hooks/useLenis"

export function SearchCertificate() {
  const [cert, setCert] = useState("")
  const [state, setState] = useState("idle")
  const [result, setResult] = useState(null)
  const { scrollTo } = useLenis()
  const search = async (e) => {
    e.preventDefault()
    if (!cert.trim()) return
    setState("loading")
    setResult(null)
    try {
      const { data } = await api.get(`/api/search?cert=${encodeURIComponent(cert.trim())}`)
      if (data?.found === false) setState("notfound")
      else {
        setResult(data.certificate || data)
        setState("found")
      }
    } catch {
      setState("notfound")
    }
  }
  const rows = result ? [["Certificate Number", result.certNumber], ["Organisation Name", result.orgName], ["Standard", result.standard], ["Address", result.address], ["Scope", result.scope], ["Issued On", new Date(result.issuedOn).toLocaleDateString()], ["Expire On", new Date(result.expireOn).toLocaleDateString()], ["Status", result.status]] : []
  return (
    <section id="search" className="section-pad noise bg-offwhite">
      <div className="container-wide">
        <SectionHeading label="Certificate Verification" title="Verify a Certificate Instantly" subtitle="Enter any certificate number issued by QAMS Global to instantly verify its authenticity and current status." />
        <form onSubmit={search} className="shimmer mx-auto flex h-auto max-w-3xl flex-col gap-3 rounded-xl border-2 border-transparent bg-white p-2 shadow-card focus-within:border-gold sm:h-16 sm:flex-row sm:rounded-full">
          <div className="flex min-h-12 flex-1 items-center gap-3 px-4"><Search className="text-text-muted" /><input value={cert} onChange={(e) => setCert(e.target.value)} placeholder="e.g. QAMS-ISO9001-2024-0001" className="w-full bg-transparent font-mono outline-none" /></div>
          <NavyButton className="sm:min-w-52">Verify Certificate</NavyButton>
        </form>
        <AnimatePresence mode="wait">
          {state === "loading" && <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto mt-6 max-w-3xl rounded-lg bg-white p-6 shadow-card"><div className="h-6 w-1/2 animate-pulse rounded bg-slate-200" /><div className="mt-4 h-24 animate-pulse rounded bg-slate-100" /></motion.div>}
          {state === "found" && result && (
            <motion.div key="found" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-auto mt-6 max-w-3xl rounded-lg border border-border-light bg-white p-6 shadow-heavy">
              <div className="border-l-4 border-gold pl-4"><div className="mono text-xl font-bold">{result.certNumber}</div><span className="mt-2 inline-flex rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-success">VALID CERTIFICATE</span></div>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">{rows.map(([label, value], i) => <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}><dt className="text-xs font-bold uppercase tracking-wider text-text-muted">{label}</dt><dd className="mt-1 font-semibold text-navy">{value}</dd></motion.div>)}</dl>
              <button className="mt-6 flex items-center gap-2 rounded-full border border-navy px-4 py-2 font-semibold text-navy"><Download size={18} /> Download / Print</button>
            </motion.div>
          )}
          {state === "notfound" && <motion.div key="no" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mx-auto mt-6 max-w-3xl rounded-lg bg-white p-8 text-center shadow-card"><SearchX className="mx-auto text-text-muted" size={52} /><h4 className="mt-4">No certificate found</h4><p>Please check the certificate number and try again, or contact us.</p><button onClick={() => scrollTo("#contact")} className="mt-4 font-semibold text-gold">Contact QAMS Global</button></motion.div>}
        </AnimatePresence>
      </div>
    </section>
  )
}
