"use client"

import { AnimatedSection } from "@/components/animated-section"

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Training Sessions Delivered" },
  { value: "99%", label: "Client Satisfaction Rate" },
]

export function StatsSection() {
  return (
    <section className="relative border-y border-border bg-card py-20 overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 150} variant="zoom-in">
              <div className="group text-center">
                <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                {/* Underline accent */}
                <div className="mx-auto mt-3 h-0.5 w-8 rounded-full bg-primary/30 transition-all duration-300 group-hover:w-12 group-hover:bg-primary/60" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
    </section>
  )
}
