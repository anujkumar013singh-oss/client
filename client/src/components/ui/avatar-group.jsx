"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

function Avatar({ item, index, totalItems, size, isHovered, onHover, onLeave }) {
  return (
    <div
      className="group relative flex items-center justify-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ marginLeft: index === 0 ? 0 : "-0.5rem", zIndex: totalItems - index }}
    >
      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute -top-16 z-50 flex min-w-max flex-col items-center justify-center whitespace-nowrap rounded-xl border border-white/15 bg-white px-4 py-2 text-xs shadow-lg"
          >
            <div className="relative z-30 text-center text-base font-bold text-gray-900">{item.name}</div>
            <div className="text-center text-xs text-gray-600">{item.designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div whileHover={{ scale: 1.05, zIndex: 100 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="relative">
        <img src={item.image} alt={item.name} className={cn("rounded-full border-2 border-white object-cover transition duration-300", sizeClasses[size])} />
      </motion.div>
    </div>
  )
}

export default function AvatarGroup({ items, className, maxVisible = 5, size = "md" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const visibleItems = items.slice(0, maxVisible)
  const remainingCount = items.length - maxVisible

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {visibleItems.map((item, index) => (
        <Avatar
          key={item.id}
          item={item}
          index={index}
          totalItems={visibleItems.length}
          size={size}
          isHovered={hoveredIndex === item.id}
          onHover={() => setHoveredIndex(item.id)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
      {remainingCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn("ml-[-0.5rem] flex items-center justify-center rounded-full border-2 border-white bg-white/15 font-medium text-white", sizeClasses[size])}
        >
          +{remainingCount}
        </motion.div>
      )}
    </div>
  )
}
