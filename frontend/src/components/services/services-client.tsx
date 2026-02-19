"use client"

import Link from "next/link"
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  FileCheck,
  Compass,
  Cloud,
  Server,
  Sparkles,
  Target,
  Gauge,
  Zap,
  CheckCircle,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const coreServices = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Assessments",
    description:
      "Identify vulnerabilities, risks, and actionable improvements through comprehensive security evaluations and penetration testing.",
    href: "/services/cybersecurity-assessments",
    highlights: [
      "Vulnerability scanning and risk prioritization",
      "Penetration testing across networks, apps, and APIs",
      "Executive reporting with business context",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    description:
      "Customized training programs designed to educate teams, reduce human risk factors, and build a security-first culture.",
    href: "/services/security-awareness-training",
    highlights: [
      "Role-based learning for all teams",
      "Live workshops and on-demand modules",
      "Phishing simulations and measurable outcomes",
    ],
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: FileCheck,
    title: "Compliance & Regulatory Support",
    description:
      "Expert guidance to achieve and maintain certifications like ISO 27001, GDPR, HIPAA, and PCI DSS compliance.",
    href: "/services/compliance-regulatory-support",
    highlights: [
      "Framework mapping and gap assessments",
      "Audit prep with evidence-ready documentation",
      "Ongoing compliance monitoring support",
    ],
    color: "from-primary/80 to-primary/60",
  },
]

const additionalServices = [
  {
    icon: Compass,
    title: "Security Strategy & Governance",
    description:
      "Develop robust security frameworks, policies, and governance structures aligned with your business objectives and risk appetite.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Secure your cloud infrastructure with architecture reviews, configuration audits, identity management, and compliance assurance.",
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: Server,
    title: "IT Service Outsourcing",
    description:
      "Access managed security operations, monitoring, and expert support without the overhead of building an in-house security team.",
    color: "from-primary/80 to-primary/60",
  },
]

const stats = [
  { value: "3", label: "Core Services", icon: ShieldCheck },
  { value: "End-to-End", label: "Security Coverage", icon: Target },
  { value: "24/7", label: "Expert Support", icon: Zap },
  { value: "Continuous", label: "Improvement Model", icon: Gauge },
]

export function ServicesClient() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection variant="fade-up">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8">
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Our Services
                  <Sparkles className="ml-2 h-3 w-3 text-primary" />
                </Badge>
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Cybersecurity Solutions
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Tailored to Your Needs
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
                From proactive assessments to compliance support and workforce training,
                WiseTech delivers customer-focused solutions built on a commitment to
                excellence and transparency.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group relative overflow-hidden" asChild>
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Talk to an Expert
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#core-services">Explore Services</Link>
                </Button>
              </div>

              <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="inline-flex rounded-xl bg-primary/5 p-3 ring-1 ring-primary/10">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="mt-3 text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="core-services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Core Services"
              title="What We Specialize In"
              description="Our core offerings address the most critical aspects of your cybersecurity program."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 120} variant="fade-up">
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl">
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${service.color}`} />
                  <CardContent className="p-8">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-all duration-200 hover:gap-2"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/20 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Additional Services"
              title="More Ways We Can Help"
              description="Beyond our core offerings, we provide strategic and operational security support."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 120} variant="fade-up">
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
                    <div className="relative">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                        <service.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all group-hover:w-full" />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

            <CardContent className="relative px-8 py-16 text-center sm:px-16 lg:px-24">
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Need a Security Plan Built for Your Business?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                Tell us your goals and constraints, and we’ll map the right services into a practical roadmap.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="group min-w-[200px] text-base" asChild>
                  <Link href="/contact">
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-primary-foreground/60">
                Practical guidance • Prioritized roadmap • Expert support
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
