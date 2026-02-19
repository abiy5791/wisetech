"use client"

import { SectionHeading } from "@/components/section-heading"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle } from "lucide-react"

const benefits = [
  {
    title: "Stronger Security Posture",
    description:
      "Proactively identify and remediate vulnerabilities before they become breaches, keeping your organization protected.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Meet industry requirements and avoid penalties with expert guidance across GDPR, HIPAA, PCI DSS, and more.",
  },
  {
    title: "Reduced Risk Exposure",
    description:
      "Minimize your attack surface and build resilience with tailored security strategies and ongoing monitoring.",
  },
  {
    title: "Empowered Workforce",
    description:
      "Turn employees into your first line of defense through engaging security awareness training and best practices.",
  },
  {
    title: "Cost-Effective Expertise",
    description:
      "Access top-tier cybersecurity talent and resources without the overhead of building a full in-house team.",
  },
  {
    title: "Peace of Mind",
    description:
      "Rest easy knowing your security is managed by experienced professionals committed to transparency and excellence.",
  },
]

export function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-background to-card/30">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <AnimatedSection>
          <SectionHeading
            label="Why WiseTech"
            title="The Benefits of Partnering with Us"
            description="We combine deep technical expertise with a transparent, customer-first approach to deliver measurable security improvements."
          />
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 80} variant="fade-up">
              <div className="group relative h-full">
                {/* Gradient border on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/50 to-primary/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Card */}
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 group-hover:border-transparent group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Number badge */}
                  <div className="absolute top-5 right-5 flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    {i + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <CheckCircle className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Learn more</span>
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
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
