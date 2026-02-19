"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Handshake, 
  Award,
  Sparkles,
  Shield,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  Quote,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Github
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { GlowOrb } from "@/components/glow-orb"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Value {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

interface Stat {
  value: string
  label: string
  icon?: LucideIcon
  description?: string
}

interface FAQ {
  question: string
  answer: string
  category?: string
}

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface AboutClientProps {
  team: TeamMember[]
  stats: Stat[]
  faqs: FAQ[]
  timeline?: TimelineEvent[]
}

const values: Value[] = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We set the highest standards in everything we do, from our assessments to our training programs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in open, honest communication. No jargon, no hidden agendas, just clear guidance you can trust.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work alongside our clients as true partners, investing in their long-term success and security resilience.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description:
      "Every solution we deliver is tailored to the specific needs, risks, and objectives of your organization.",
    color: "from-emerald-500 to-teal-500",
  },
]

const defaultTimeline: TimelineEvent[] = [
  {
    year: "2018",
    title: "Founded WiseTech",
    description: "Started with a mission to provide honest, transparent cybersecurity guidance.",
  },
  {
    year: "2020",
    title: "Expanded Team",
    description: "Grew to 15 experts and opened our second office.",
  },
  {
    year: "2022",
    title: "200+ Clients Served",
    description: "Reached milestone of serving over 200 organizations across 12 industries.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Recognized as a top cybersecurity firm by industry leaders.",
  },
]

const partnerLogos = [
  { name: "Bank of Abyssinia", src: "/images/partners/Bank of Abyssinia Logo.svg" },
  { name: "Commercial Bank of Ethiopia", src: "/images/partners/Commercial Bank of Ethiopia Logo.svg" },
  { name: "Cooperative Bank of Oromia", src: "/images/partners/Cooperative Bank of Oromia Logo.svg" },
  { name: "Ethio Telecom", src: "/images/partners/Ethio Telecom Logo.svg" },
  { name: "Hyatt Regency", src: "/images/partners/Hyatt Regency Logo.svg" },
  { name: "Ride", src: "/images/partners/Ride Logo.svg" },
]

function getFallbackStatIcon(label: string): LucideIcon {
  const normalizedLabel = label.toLowerCase()

  if (normalizedLabel.includes("year")) {
    return Calendar
  }

  if (normalizedLabel.includes("client")) {
    return Users
  }

  if (normalizedLabel.includes("industr")) {
    return Globe
  }

  if (normalizedLabel.includes("training") || normalizedLabel.includes("session")) {
    return TrendingUp
  }

  return Shield
}

export function AboutClient({ 
  team, 
  stats, 
  faqs, 
  timeline = defaultTimeline 
}: AboutClientProps) {
  return (
    <>
      {/* Hero Section - Modern & Bold */}
      <section className="relative overflow-hidden min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection variant="fade-up" className="mx-auto max-w-4xl text-center">
            {/* Animated badge */}
            <div className="mb-8 inline-flex animate-in fade-in slide-in-from-top-4 duration-1000">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="mr-2 h-4 w-4" />
                About WiseTech
                <Sparkles className="ml-2 h-3 w-3 text-primary" />
              </Badge>
            </div>

            {/* Main heading */}
            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Building a More{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Secure
              </span>{" "}
              Digital Future
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Founded on the principles of excellence, honesty, and transparency, WiseTech
              is dedicated to helping organizations navigate the complex cybersecurity
              landscape with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#story">
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              {["ISO 27001 Certified", "GDPR Compliant", "SOC 2 Type II", "250+ Clients"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{badge}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section - Modern Layout */}
      <section id="story" className="relative border-t border-border bg-card py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <AnimatedSection variant="fade-right">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  Since 2018
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Journey to{" "}
                  <span className="text-primary">Redefine Cybersecurity</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    WiseTech was founded with a simple belief: every organization deserves
                    access to honest, expert cybersecurity guidance. Too many firms operate
                    with complexity and opacity. We chose a different path.
                  </p>
                  <p className="leading-relaxed">
                    From our first engagement, we have prioritized clear communication,
                    actionable recommendations, and genuine partnership with our clients.
                    Today, we serve over 200 organizations across 12 industries, delivering
                    the same transparency and dedication that defined us from day one.
                  </p>
                </div>

                {/* Key differentiators */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/5 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Expert Team</p>
                      <p className="text-xs text-muted-foreground">25+ Specialists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-lg bg-primary/5 p-2">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Global Reach</p>
                      <p className="text-xs text-muted-foreground">12+ Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-left">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/about-team.jpg"
                    alt="WiseTech team collaborating in a modern office"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-background p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">98%</p>
                      <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline */}
          <div className="mt-24">
            <AnimatedSection>
              <SectionHeading
                label="Our Timeline"
                title="Key Milestones"
                description="The journey that shaped WiseTech into what it is today."
              />
            </AnimatedSection>

            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:left-1/2 lg:-ml-px" />

              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <AnimatedSection
                    key={event.year}
                    delay={index * 100}
                    variant={index % 2 === 0 ? "fade-right" : "fade-left"}
                    className={`relative flex flex-col ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } items-start gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-9px] top-2 h-4 w-4 rounded-full border-2 border-primary bg-background lg:left-1/2 lg:-ml-2" />

                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                      <Card className="overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg">
                        <CardContent className="p-6">
                          <Badge variant="secondary" className="mb-2">
                            {event.year}
                          </Badge>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <p className="mt-2 text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <AnimatedSection>
              <SectionHeading
                label="Our Values"
                title="What Drives Us"
                description="These core values guide every decision we make and every service we deliver."
              />
            </AnimatedSection>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 100} variant="fade-up">
                  <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity group-hover:opacity-5`} />
                    
                    <CardContent className="p-6">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.color} shadow-lg`}>
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      
                      <h3 className="mt-4 text-lg font-semibold">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>

                      {/* Hover effect line */}
                      <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${value.color} transition-all group-hover:w-full`} />
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Cards */}
      <section className="relative border-y border-border bg-secondary/20 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100} variant="zoom-in">
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background to-background/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 transition-all group-hover:bg-primary/10">
                      {(() => {
                        const StatIcon = stat.icon ?? getFallbackStatIcon(stat.label)
                        return <StatIcon className="h-6 w-6 text-primary" />
                      })()}
                    </div>
                    <p className="text-3xl font-bold tracking-tight text-primary transition-all group-hover:scale-110">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </p>
                    {stat.description && (
                      <p className="mt-2 text-xs text-muted-foreground/80">
                        {stat.description}
                      </p>
                    )}
                    <div className="mx-auto mt-4 h-0.5 w-8 rounded-full bg-primary/30 transition-all group-hover:w-12 group-hover:bg-primary/60" />
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Cards with Social */}
      <section className="relative py-24 sm:py-32">
        <GlowOrb className="h-[500px] w-[500px] bottom-0 -left-40" color="secondary" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Our Team"
              title="Meet the Experts"
              description="Our leadership and consultants bring decades of combined experience across cybersecurity, compliance, and education."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100} variant="fade-up">
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Social overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {member.social?.linkedin && (
                          <Link href={member.social.linkedin} className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30">
                            <Linkedin className="h-4 w-4 text-white" />
                          </Link>
                        )}
                        {member.social?.twitter && (
                          <Link href={member.social.twitter} className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30">
                            <Twitter className="h-4 w-4 text-white" />
                          </Link>
                        )}
                        {member.social?.github && (
                          <Link href={member.social.github} className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30">
                            <Github className="h-4 w-4 text-white" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Modern Grid */}
      <section className="relative border-y border-border bg-card py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection variant="fade">
            <p className="mb-10 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by Industry Leaders
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((partner, i) => (
                <AnimatedSection key={partner.name} delay={i * 50} variant="zoom-in">
                  <Card className="group cursor-pointer border-0 bg-gradient-to-br from-secondary/45 to-secondary/25 transition-all hover:shadow-lg hover:-translate-y-0.5 dark:from-secondary/30 dark:to-secondary/15">
                    <CardContent className="flex h-20 items-center justify-center p-4">
                      <Image
                        src={partner.src}
                        alt={`${partner.name} logo`}
                        width={140}
                        height={32}
                        className="h-8 w-auto object-contain opacity-75 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-90"
                      />
                    </CardContent>
                  </Card>
                </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <SectionHeading
                label="FAQ"
                title="Frequently Asked Questions"
                description="Get answers to common questions about WiseTech and our approach."
              />
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-12">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-lg border border-border bg-card px-6"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="general" className="mt-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.filter(f => f.category === 'general').map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-lg border border-border bg-card px-6"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="services" className="mt-6">
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.filter(f => f.category === 'services').map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="rounded-lg border border-border bg-card px-6"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern & Bold */}
      <section className="relative border-t border-border bg-card py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection variant="zoom-in">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
              
              <CardContent className="relative px-8 py-16 text-center sm:px-16 lg:px-24">
                {/* Quote icon */}
                <Quote className="mx-auto mb-6 h-12 w-12 opacity-50" />

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Get <span className="text-white/90">Started</span>?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                  Schedule a consultation with our experts and discover how WiseTech can
                  strengthen your organization's security posture.
                </p>
                
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group min-w-[200px] text-base shadow-lg"
                    asChild
                  >
                    <Link href="/contact">
                      Contact Us Today
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] border-white/20 bg-white/10 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="/team">
                      Meet the Team
                    </Link>
                  </Button>
                </div>

                {/* Contact info */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@wisetech.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Global Offices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}