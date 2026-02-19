"use client"

import { useState } from "react"
import {
  ShieldCheck,
  Radar,
  SearchCheck,
  CloudCog,
  ShieldAlert,
  GraduationCap,
  FileCheck,
  LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"

type Solution = {
  key: string
  label: string
  title: string
  description: string
  highlights: string[]
  icon: LucideIcon
}

const solutions: Solution[] = [
  {
    key: "soc",
    label: "SOC Monitoring",
    title: "24/7 Security Operations Monitoring",
    description:
      "Continuous threat visibility across endpoints, cloud, and network telemetry with expert-led triage and response workflows",
    highlights: [
      "Real-time detection and alert correlation",
      "Threat hunting and incident triage playbooks",
      "Monthly posture reporting for leadership",
    ],
    icon: Radar,
  },
  {
    key: "pentest",
    label: "Penetration Testing",
    title: "Offensive Security Validation",
    description:
      "Simulate real-world attacker behavior to uncover exploitable weaknesses before adversaries do.",
    highlights: [
      "Web, API, and network penetration testing",
      "Prioritized vulnerability impact scoring",
      "Proof-of-exploit findings with remediation guidance",
    ],
    icon: SearchCheck,
  },
  {
    key: "cloud",
    label: "Cloud Security",
    title: "Cloud Hardening and Continuous Assurance",
    description:
      "Strengthen multi-cloud environments with identity controls, secure configuration baselines, and compliance guardrails.",
    highlights: [
      "AWS/Azure/GCP configuration reviews",
      "IAM hardening and least-privilege strategy",
      "Continuous policy and misconfiguration checks",
    ],
    icon: CloudCog,
  },
  {
    key: "incident",
    label: "Incident Response",
    title: "Breach Readiness and Rapid Response",
    description:
      "Build readiness before incidents happen and accelerate containment when critical events occur.",
    highlights: [
      "Response plans and tabletop exercises",
      "Forensic-first containment methodology",
      "Post-incident lessons and resilience roadmap",
    ],
    icon: ShieldAlert,
  },
  {
    key: "training",
    label: "Awareness Training",
    title: "Human Risk Reduction Programs",
    description:
      "Equip employees to identify phishing, social engineering, and unsafe behavior through role-based training programs.",
    highlights: [
      "Scenario-based learning modules",
      "Simulated phishing campaigns",
      "Behavioral metrics and improvement tracking",
    ],
    icon: GraduationCap,
  },
  {
    key: "compliance",
    label: "Compliance Support",
    title: "Audit-Ready Security Compliance",
    description:
      "Translate complex standards into practical control implementation for faster, lower-friction audits.",
    highlights: [
      "ISO 27001, GDPR, HIPAA, PCI DSS support",
      "Gap assessment and remediation plan",
      "Control evidence and audit preparation",
    ],
    icon: FileCheck,
  },
]

export function SecuritySolutionsSection() {
  const [activeKey, setActiveKey] = useState(solutions[0].key)
  const active = solutions.find((solution) => solution.key === activeKey) ?? solutions[0]
  const ActiveIcon = active.icon

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-background to-card/30">
      {/* Modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <AnimatedSection>
          <SectionHeading
            label="Security Solutions"
            title="Our Cybersecurity Services"
            description="Choose a focus area to explore how WiseTech delivers practical, measurable security outcomes."
          />
        </AnimatedSection>

        {/* Modern Tab Navigation */}
        <AnimatedSection delay={120}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <button
                  key={solution.key}
                  type="button"
                  onClick={() => setActiveKey(solution.key)}
                  className={`group relative inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeKey === solution.key
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card/50 text-muted-foreground hover:text-foreground hover:bg-card border border-border/50 hover:border-border"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {solution.label}
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Content Area */}
        <AnimatedSection delay={220}>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Image Hero */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src={`/images/solutions-${active.key}.jpg`}
                alt={`${active.label} illustration`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 rounded-lg bg-background/80 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-primary mb-4 border border-border/50">
                  <ShieldCheck className="h-3 w-3" />
                  Active Solution
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/90 backdrop-blur-sm">
                    <ActiveIcon className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{active.label}</h3>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground leading-tight">{active.title}</h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{active.description}</p>
              </div>

              {/* Key Features */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="text-xs font-semibold text-foreground mb-4 uppercase tracking-wider">Key Features</h4>
                <div className="space-y-3">
                  {active.highlights.map((item, idx) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-primary/10 text-primary text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">What's Included:</span> Every engagement includes executive-ready reporting and a prioritized remediation roadmap aligned to your business risk.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}