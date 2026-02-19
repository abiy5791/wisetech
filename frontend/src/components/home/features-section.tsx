"use client"

import { SectionHeading } from "@/components/section-heading"
import { AnimatedSection } from "@/components/animated-section"
import {
  ShieldCheck,
  GraduationCap,
  FileCheck,
  Compass,
  Cloud,
  Server,
} from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Assessments",
    description:
      "Identify vulnerabilities and risks across your systems with thorough security evaluations and penetration testing.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Empower your team with customized training programs that reduce human risk and strengthen your security culture.",
  },
  {
    icon: FileCheck,
    title: "Compliance & Regulatory Support",
    description:
      "Navigate GDPR, HIPAA, PCI DSS, and ISO 27001 with expert guidance from gap assessment to audit preparation.",
  },
  {
    icon: Compass,
    title: "Security Strategy & Governance",
    description:
      "Develop robust security strategies and governance frameworks aligned with your business objectives.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Secure your cloud infrastructure with architecture reviews, configuration audits, and best-practice implementations.",
  },
  {
    icon: Server,
    title: "IT Service Outsourcing",
    description:
      "Access expert IT security management and monitoring without the overhead of an in-house team.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Radial gradient accent */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="Comprehensive Cybersecurity Services"
            description="Our suite of services spans the full spectrum of cybersecurity, from proactive assessments to ongoing management and training."
          />
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100} variant="fade-up">
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative h-full rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore
                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
