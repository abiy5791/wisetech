import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Search,
  Bug,
  BarChart3,
  ShieldCheck,
  CheckCircle,
  Shield,
  Zap,
  Sparkles,
  Target,
  Lock,
  Gauge,
} from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cybersecurity Assessments",
  description:
    "WiseTech's comprehensive cybersecurity assessments identify vulnerabilities, simulate attacks, and deliver actionable remediation plans.",
}

const features = [
  {
    icon: Search,
    title: "Comprehensive Vulnerability Assessments",
    description:
      "We systematically scan and analyze your systems, networks, and applications to identify security gaps. Each finding is prioritized by risk severity, business impact, and exploitability to help you focus remediation efforts where they matter most.",
    highlights: [
      "Automated and manual scanning across infrastructure",
      "Asset discovery and attack surface mapping",
      "Risk-ranked findings with business context",
      "Detailed technical reports and executive summaries",
    ],
    color: "from-primary to-primary/80",
  },
  {
    icon: Bug,
    title: "Penetration Testing",
    description:
      "Our certified ethical hackers simulate real-world attacks against your environment to uncover exploitable weaknesses. We test from both external and internal perspectives to give you a complete picture of your defenses.",
    highlights: [
      "External and internal network penetration testing",
      "Web application and API security testing",
      "Social engineering and phishing simulations",
      "Wireless and physical security assessments",
    ],
    color: "from-primary/90 to-primary/70",
  },
  {
    icon: BarChart3,
    title: "Risk Analysis & Reporting",
    description:
      "We translate technical findings into clear, actionable intelligence. Our reports are designed for both technical teams and business leadership, ensuring everyone understands the risks and the path forward.",
    highlights: [
      "Executive-level risk dashboards",
      "Prioritized remediation roadmaps",
      "Compliance gap correlation",
      "Follow-up validation and retesting",
    ],
    color: "from-primary/80 to-primary/60",
  },
]

const benefits = [
  {
    text: "Enhanced security posture with clear visibility into vulnerabilities",
    icon: Shield,
  },
  {
    text: "Reduced risk of data breaches and costly security incidents",
    icon: Lock,
  },
  {
    text: "Improved compliance readiness across regulatory frameworks",
    icon: CheckCircle,
  },
  {
    text: "Actionable insights that align security investment with business risk",
    icon: Target,
  },
  {
    text: "Validated defenses through real-world attack simulations",
    icon: Zap,
  },
  {
    text: "Continuous improvement with regular assessment cycles",
    icon: Gauge,
  },
]

const stats = [
  { value: "1000+", label: "Assessments Completed", icon: BarChart3 },
  { value: "99.9%", label: "Vulnerability Detection Rate", icon: Target },
  { value: "24/7", label: "Expert Support", icon: Zap },
  { value: "30+", label: "Compliance Frameworks", icon: Shield },
]

export default function CybersecurityAssessmentsPage() {
  return (
    <PageLayout>
      {/* Hero Section - Modern & Clean */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-24 sm:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Animated badge */}
            <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="mr-2 h-4 w-4" />
                Cybersecurity Assessments
                <Sparkles className="ml-2 h-3 w-3 text-primary" />
              </Badge>
            </div>

            {/* Main heading with gradient */}
            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Know Your Risks Before
              <br />
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                They Become Threats
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Expert-driven security evaluations that identify vulnerabilities,
              simulate real-world attacks, and deliver actionable remediation strategies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Request an Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Stats Section */}
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

      {/* Features Section - Modern Cards */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              Our Methodology
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Security Testing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Multi-layered assessments designed to uncover vulnerabilities before attackers do
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 space-y-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl"
              >
                {/* Gradient accent line */}
                <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${feature.color}`} />
                
                <CardContent className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Left Column - Feature Info */}
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

                    {/* Right Column - Highlights */}
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
                            <span className="text-sm leading-relaxed">
                              {highlight}
                            </span>
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

      {/* Benefits Section - Modern Grid */}
      <section className="relative overflow-hidden bg-secondary/20 py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The Value of Regular Assessments
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Proactive security testing is one of the most impactful investments your organization can make
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
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

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all group-hover:w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Bold */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
            
            <CardContent className="relative px-8 py-16 text-center sm:px-16 lg:px-24">
              {/* Icon */}
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Shield className="h-8 w-8" />
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Strengthen Your Security Posture?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                Schedule a comprehensive assessment and gain clear visibility into your vulnerabilities.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group min-w-[200px] text-base"
                  asChild
                >
                  <Link href="/contact">
                    Schedule Your Assessment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <p className="mt-8 text-sm text-primary-foreground/60">
                No commitment required • Free initial consultation • 24/7 support
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}