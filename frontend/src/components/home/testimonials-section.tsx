"use client"

import { SectionHeading } from "@/components/section-heading"
import { AnimatedSection } from "@/components/animated-section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "WiseTech transformed our security posture. Their honest assessment revealed critical gaps we never knew existed, and their remediation plan was clear and actionable.",
    name: "Sarah Mitchell",
    role: "CTO, Meridian Health Systems",
  },
  {
    quote:
      "The security awareness training program was outstanding. Our team is now far more vigilant, and phishing incident rates have dropped by 80% since partnering with WiseTech.",
    name: "David Chen",
    role: "VP of Operations, Atlas Financial",
  },
  {
    quote:
      "Their compliance support made our ISO 27001 certification journey seamless. WiseTech's transparency and expertise gave us complete confidence throughout the process.",
    name: "Rachel Torres",
    role: "Director of IT, Vanguard Logistics",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Background accents */}
      <div
        className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/3 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from organizations that have strengthened their security with WiseTech's guidance."
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 150} variant="fade-up">
              <div className="group relative flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                    <Quote className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  <p className="flex-1 text-base leading-relaxed text-foreground/80 mb-8">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
