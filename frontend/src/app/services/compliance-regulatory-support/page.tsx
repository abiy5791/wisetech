import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Scale,
  ClipboardList,
  RefreshCw,
  CheckCircle,
  Sparkles,
  Shield,
  Lock,
  Target,
  Gauge,
  FileCheck,
} from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Compliance & Regulatory Support",
  description:
    "WiseTech helps organizations achieve and maintain compliance with GDPR, HIPAA, PCI DSS, ISO 27001, and other security standards.",
}

const features = [
  {
    icon: Scale,
    title: "Compliance Frameworks Covered",
    description:
      "WiseTech brings deep expertise across the major regulatory and industry compliance frameworks. Whether you need to achieve certification for the first time or maintain ongoing compliance, our team has the knowledge to guide you.",
    highlights: [
      "GDPR -- EU data protection and privacy regulation",
      "HIPAA -- Healthcare information security standards",
      "PCI DSS -- Payment card industry data security",
      "ISO 27001 -- Information security management systems",
      "SOC 2 -- Service organization controls and trust criteria",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: ClipboardList,
    title: "Our Support Process",
    description:
      "We follow a structured, proven methodology to take you from current state to full compliance. Our process is transparent, collaborative, and designed to minimize disruption to your business operations.",
    highlights: [
      "Gap assessment against target framework requirements",
      "Prioritized remediation planning and resource allocation",
      "Policy and procedure documentation and templates",
      "Evidence collection and audit preparation support",
      "Mock audits and readiness assessments",
    ],
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Compliance Management",
    description:
      "Compliance is not a one-time event. Regulations evolve, and your environment changes. WiseTech provides continuous monitoring and management to ensure you remain compliant as requirements shift.",
    highlights: [
      "Regulatory change monitoring and impact analysis",
      "Periodic compliance health checks and reviews",
      "Continuous control testing and evidence management",
      "Annual recertification and renewal support",
      "Vendor and third-party risk compliance assessments",
    ],
    color: "from-primary/80 to-primary/60",
  },
]

const benefits = [
  {
    text: "Reduced risk of regulatory penalties and fines",
    icon: Shield,
  },
  {
    text: "Simplified and accelerated compliance journey",
    icon: Target,
  },
  {
    text: "Clear documentation and audit-ready evidence",
    icon: FileCheck,
  },
  {
    text: "Competitive advantage through demonstrated compliance",
    icon: CheckCircle,
  },
  {
    text: "Peace of mind with ongoing monitoring and management",
    icon: Gauge,
  },
  {
    text: "Expert guidance from experienced compliance professionals",
    icon: Lock,
  },
]

const stats = [
  { value: "5+", label: "Core Frameworks", icon: Scale },
  { value: "Gap-to-Audit", label: "End-to-End Process", icon: ClipboardList },
  { value: "Continuous", label: "Monitoring Model", icon: RefreshCw },
  { value: "Expert-Led", label: "Advisory Support", icon: Shield },
]

export default function ComplianceRegulatoryPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Scale className="mr-2 h-4 w-4" />
                Compliance & Regulatory Support
                <Sparkles className="ml-2 h-3 w-3 text-primary" />
              </Badge>
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Navigate Compliance
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                with Confidence
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              From initial gap assessment to certification and beyond, WiseTech
              provides expert compliance support that simplifies the complex world of
              security regulations and standards.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Start Your Compliance Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
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
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Our Methodology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Structured Compliance Delivery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A practical framework that moves your organization from uncertainty to audit readiness.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl"
              >
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${feature.color}`} />

                <CardContent className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        <feature.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>

                    <div className="lg:col-span-7">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {feature.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 rounded-lg border border-border/50 bg-secondary/20 p-4 transition-all hover:border-primary/30 hover:bg-secondary/30"
                          >
                            <div className={`mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br ${feature.color} p-1`}>
                              <CheckCircle className="h-3 w-3 text-primary-foreground" />
                            </div>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary/20 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Gauge className="mr-2 h-4 w-4" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Compliance Outcomes That Matter
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We turn regulatory complexity into practical, sustainable controls.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.text}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />

                  <div className="relative flex items-start gap-4">
                    <div className="rounded-lg bg-primary/5 p-3 ring-1 ring-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">
                      {benefit.text}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all group-hover:w-full" />
                </CardContent>
              </Card>
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
                <Scale className="h-8 w-8" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Simplify Compliance?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                Get a clear roadmap, practical controls, and confidence before your next audit.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group min-w-[200px] text-base"
                  asChild
                >
                  <Link href="/contact">
                    Get Compliance Support
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-sm text-primary-foreground/60">
                Practical guidance • Audit-ready documentation • Ongoing support
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}
