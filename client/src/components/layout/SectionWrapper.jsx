import { cn } from "../../utils/cn"

export function SectionWrapper({ children, id, className }) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      {children}
    </section>
  )
}
