"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { GlowOrb } from "@/components/glow-orb"

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <GlowOrb className="h-[500px] w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 z-0" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] z-0" aria-hidden="true" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20 z-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection variant="zoom-in">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary mb-8 backdrop-blur-md shadow-lg shadow-primary/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl leading-tight">
              Ready to <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent animate-gradient">Strengthen</span> Your Security?
            </h2>
            
            <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted-foreground text-pretty max-w-2xl mx-auto">
              Get started with a complimentary cybersecurity assessment. Our certified experts
              will analyze your infrastructure and deliver actionable insights to fortify your defenses.
            </p>
            
            {/* Feature highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span>Enterprise Grade</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                asChild 
                className="group relative shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 px-10 h-14 text-base font-semibold overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10">Request Free Assessment</span>
                  <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-primary/30 hover:border-primary/60 backdrop-blur-md bg-background/60 hover:bg-background/90 transition-all duration-300 px-10 h-14 text-base font-semibold hover:shadow-lg"
              >
                <Link href="/about">Our Approach</Link>
              </Button>
            </div>
            
            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground/70">
                No credit card required • Free consultation • Trusted by 500+ businesses
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
