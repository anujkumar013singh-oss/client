import { cn } from "../../utils/cn"

export function Badge({ children, className }) {
  return <span className={cn("inline-flex rounded-full bg-gold-pale px-3 py-1 text-xs font-semibold text-navy", className)}>{children}</span>
}
