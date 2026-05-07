"use client"

import { ArrowUp, Moon, Sun } from "lucide-react"

function handleScrollTop() {
  window.scroll({ top: 0, behavior: "smooth" })
}

function ThemeToggleFooter() {
  const setTheme = (theme) => {
    document.documentElement.classList.toggle("mono-dark", theme === "dark")
    document.documentElement.classList.toggle("dark", theme === "dark")
  }

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-dotted border-white/25 bg-white/5 px-2 py-1 text-white">
        <button onClick={() => setTheme("light")} className="mr-3 rounded-full bg-white p-2 text-navy" aria-label="Light theme">
          <Sun className="h-5 w-5" strokeWidth={1.4} />
        </button>
        <button type="button" onClick={handleScrollTop} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10" aria-label="Back to top">
          <ArrowUp className="h-3 w-3" />
        </button>
        <button onClick={() => setTheme("dark")} className="ml-3 rounded-full bg-black p-2 text-white" aria-label="Dark theme">
          <Moon className="h-5 w-5" strokeWidth={1.4} />
        </button>
      </div>
    </div>
  )
}

export default ThemeToggleFooter
