"use client"

import { SectionHeading } from "@/components/section-heading"
import { AnimatedSection } from "@/components/animated-section"
import { MessageSquare, Search, Target, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a free, no-obligation conversation to understand your organization's unique security challenges and goals.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Assessment & Analysis",
    description:
      "Our experts conduct a thorough evaluation of your current security posture, identifying vulnerabilities and risks.",
    icon: Search,
  },
  {
    number: "03",
    title: "Tailored Strategy",
    description:
      "We develop a customized security roadmap with prioritized recommendations aligned to your budget and timeline.",
    icon: Target,
  },
  {
    number: "04",
    title: "Implementation & Support",
    description:
      "Our team works alongside yours to implement solutions, deliver training, and provide ongoing monitoring and support.",
    icon: Rocket,
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute left-10 top-20 w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-pulse" />
      <div className="absolute right-20 top-40 w-16 h-16 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/4 bottom-20 w-24 h-24 border border-primary/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute right-1/3 bottom-40 w-12 h-12 border border-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="How It Works"
            title="Our Engagement Process"
            description="From initial consultation to ongoing support, our proven process ensures measurable results at every stage."
          />
        </AnimatedSection>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 100} variant="fade-up">
              <div className="group relative h-full">
                {/* Animated connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-0 hidden h-full w-px lg:block lg:left-full lg:h-px lg:w-full lg:max-w-8 lg:top-1/2 lg:-translate-y-1/2">
                    <div className="h-full w-full bg-gradient-to-b lg:bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 opacity-40 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                )}
                
                <div className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Animated corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and number */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <span className="text-5xl font-black text-primary/10 transition-all duration-500 group-hover:text-primary/30 group-hover:scale-110">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Progress dots */}
                    <div className="mb-6 flex items-center gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            i <= index ? "bg-primary shadow-sm shadow-primary/50" : "bg-primary/10"
                          } group-hover:bg-primary group-hover:h-1.5`}
                        />
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                      {step.description}
                    </p>
                    
                    {/* Bottom accent line */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary/50 rounded-full transition-all duration-500 group-hover:w-full" />
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
