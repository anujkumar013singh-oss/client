"use client"

import React from "react"
import { motion } from "motion/react"

export function TestimonialsColumn({ className = "", testimonials, duration = 10 }) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="flex flex-col gap-6 bg-transparent pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-lg shadow-black/10 backdrop-blur" key={`${name}-${i}`}>
                <div className="text-sm leading-7 text-white">{text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <img width={40} height={40} src={image} alt={name} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-white">{name}</div>
                    <div className="text-sm leading-5 tracking-tight text-white">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}
