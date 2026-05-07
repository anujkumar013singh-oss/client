import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function TextGenerateEffect({ words, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  return (
    <p ref={ref} className={className}>
      {words.split(" ").map((word, i) => (
        <motion.span
          className="mr-2 inline-block"
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 12, filter: "blur(6px)" }}
          transition={{ delay: i * 0.035, duration: 0.35 }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
}
