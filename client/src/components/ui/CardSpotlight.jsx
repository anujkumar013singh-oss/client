import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function CardSpotlight({ children, className }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
      whileHover={{ y: -8 }}
      className={cn("group relative overflow-hidden rounded-lg border border-gold/20 bg-white p-8 shadow-card", className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(212,160,23,.18), transparent 45%)` }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
