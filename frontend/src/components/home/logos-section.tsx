"use client"

import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const partners = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
]

export function LogosSection() {
  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-card/30 to-background py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" aria-hidden="true" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <AnimatedSection variant="fade">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary/80 mb-2">
              Trusted Worldwide
            </p>
            <h2 className="text-2xl font-bold text-foreground">
              Powering Innovation for Industry Leaders
            </h2>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.name} delay={i * 100} variant="zoom-in">
              <div className="group relative flex h-24 items-center justify-center rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={40}
                  className="max-h-8 w-auto object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  priority={i < 3}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
