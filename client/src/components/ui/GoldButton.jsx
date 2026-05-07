import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function GoldButton({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: "var(--shadow-glow)" }}
      whileTap={{ scale: 0.98 }}
      className={cn("min-h-11 rounded-full bg-gold px-6 py-3 font-semibold text-navy transition", className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
