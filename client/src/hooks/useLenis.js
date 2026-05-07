import { useLenisContext } from "../context/LenisContext"

export function useLenis() {
  const lenis = useLenisContext()
  const scrollTo = (target, options = {}) => {
    if (lenis) lenis.scrollTo(target, { offset: -80, ...options })
    else document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
  }
  return { lenis, scrollTo }
}
