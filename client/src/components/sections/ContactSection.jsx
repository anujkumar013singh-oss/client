import { AnimatePresence, motion } from "framer-motion"
import { Building, CheckCircle, Clock, Link2, Loader2, Mail, MapPin, Phone, Share2, User } from "lucide-react"
import { useState } from "react"
import { SectionHeading } from "../ui/SectionHeading"

const fields = [
  ["name", "Full Name", "text", User],
  ["email", "Email Address", "email", Mail],
  ["phone", "Phone Number", "tel", Phone],
  ["company", "Company Name", "text", Building],
]

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "Certification", message: "" })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle")

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = "Please enter your full name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email."
    if (form.phone && !/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Phone must be 10 digits."
    if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters."
    setErrors(e)
    return !Object.keys(e).length
  }

  const submit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return

    setStatus("loading")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        // Reset form after 3 seconds
        setTimeout(() => {
          setForm({ name: "", email: "", phone: "", company: "", service: "Certification", message: "" })
          setStatus("idle")
        }, 3000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
    }
  }

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-wide">
        <SectionHeading
          label="Contact Us"
          title="Start Your Certification Conversation"
          subtitle="Tell us what you need certified, audited, or trained. We will respond with a practical next step."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            onSubmit={submit}
            animate={status === "error" ? { x: [0, -8, 8, -8, 8, 0] } : { x: 0 }}
            className="rounded-lg border border-border-light bg-offwhite p-6 shadow-card"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid min-h-[420px] place-items-center text-center"
                >
                  <div>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                      <CheckCircle className="mx-auto text-success" size={72} />
                    </motion.div>
                    <h4 className="mt-5">Thank you!</h4>
                    <p>We'll be in touch within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4">
                  {fields.map(([key, label, type, Icon], i) => (
                    <motion.label
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: false }}
                      className="relative block"
                    >
                      <Icon className="absolute left-4 top-4 text-text-muted" size={18} />
                      <input
                        value={form[key]}
                        onChange={(e) => set(key, e.target.value)}
                        type={type}
                        placeholder={label}
                        className="w-full rounded-md border border-border-light bg-white py-3 pl-11 pr-4 outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,160,23,0.15)]"
                      />
                      {errors[key] && <p className="mt-1 text-sm text-error">{errors[key]}</p>}
                    </motion.label>
                  ))}
                  <select
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className="rounded-md border border-border-light bg-white px-4 py-3 outline-none focus:border-gold"
                  >
                    <option>Audit</option>
                    <option>Training</option>
                    <option>Certification</option>
                    <option>Other</option>
                  </select>
                  <label>
                    <textarea
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={5}
                      placeholder="Message"
                      className="w-full rounded-md border border-border-light bg-white px-4 py-3 outline-none focus:border-gold"
                    />
                    {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
                  </label>
                  <button
                    type="submit"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy font-semibold text-gold hover:bg-navy/90 transition-all"
                  >
                    {status === "loading" && <Loader2 className="animate-spin" />} Send Message →
                  </button>
                  {status === "error" && (
                    <p className="text-center text-sm text-error">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
          <div className="space-y-5">
            {[
              [MapPin, "Sector 10, Noida, Uttar Pradesh, India"],
              [Phone, "+91 120 4917144, +91 9155889930"],
              [Mail, "info@qamsglobal.com"],
              [Clock, "Monday to Saturday, 9:30 AM - 6:30 PM"],
            ].map(([Icon, text], i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: false }}
                className="flex gap-4 rounded-md border border-border-light p-4"
              >
                <Icon className="text-gold" />
                <p className="font-semibold text-navy">{text}</p>
              </motion.div>
            ))}
            <iframe
              title="QAMS Global map"
              className="h-72 w-full rounded-lg border-0 shadow-card"
              loading="lazy"
              src="https://www.google.com/maps?q=Sector%2010%20Noida%20Uttar%20Pradesh&output=embed"
            />
            <div className="flex gap-4 text-gold">
              <Link2 />
              <Share2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
