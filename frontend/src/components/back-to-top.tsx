"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setShow(scrolled > 400)
      setProgress((scrolled / height) * 100)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 size-14 rounded-full bg-primary/5 blur-xl pointer-events-none" />
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        size="icon"
        className={cn(
          "group fixed bottom-8 right-8 z-50 size-14 rounded-full shadow-2xl shadow-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-primary/60",
          show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <svg className="absolute inset-0 -rotate-90 size-14" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="opacity-20"
          />
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={163}
            strokeDashoffset={163 - (163 * progress) / 100}
            className="transition-all duration-300"
          />
        </svg>
        <ArrowUp className="relative z-10 h-5 w-5 transition-transform group-hover:-translate-y-1" />
      </Button>
    </>
  )
}
