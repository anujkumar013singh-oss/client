import { motion } from "framer-motion"
import { cn } from "../../utils/cn"

export function NavyButton({ children, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, backgroundColor: "#D4A017", color: "#0C2340" }}
      whileTap={{ scale: 0.98 }}
      className={cn("min-h-11 rounded-full bg-navy px-6 py-3 font-semibold text-gold transition", className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
