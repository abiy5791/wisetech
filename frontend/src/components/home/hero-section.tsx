"use client";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Lock,
  Binary,
  Code2,
  Terminal,
  Database,
  Server,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/glow-orb";
import { AnimatedSection } from "@/components/animated-section";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      <GlowOrb className="h-[700px] w-[700px] -top-52 -right-52 z-0" />
      <GlowOrb
        className="h-[500px] w-[500px] -bottom-24 -left-32 z-0"
        color="secondary"
      />

      <div className="cyber-grid z-0 opacity-40" aria-hidden="true" />
      {/* <div className="cyber-scanline z-0" aria-hidden="true" /> */}

      {/* Floating security icons */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Shield
          className="absolute top-[15%] left-[8%] h-12 w-12 text-primary/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <Lock
          className="absolute top-[25%] right-[12%] h-10 w-10 text-primary/35 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <Binary
          className="absolute top-[60%] left-[15%] h-11 w-11 text-primary/30 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Terminal
          className="absolute bottom-[20%] right-[18%] h-12 w-12 text-primary/32 animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <Database
          className="absolute top-[40%] right-[8%] h-10 w-10 text-primary/30 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <Server
          className="absolute bottom-[35%] left-[10%] h-11 w-11 text-primary/35 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        <Code2
          className="absolute top-[70%] right-[25%] h-10 w-10 text-primary/30 animate-float"
          style={{ animationDelay: "3s" }}
        />
        <Cloud
          className="absolute top-[50%] left-[5%] h-12 w-12 text-primary/32 animate-float"
          style={{ animationDelay: "1.8s" }}
        />
      </div>

      {/* Glowing particles */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-[20%] left-[15%] h-3 w-3 rounded-full bg-primary/50 animate-pulse shadow-lg shadow-primary/50" />
        <div className="absolute top-[35%] right-[25%] h-2.5 w-2.5 rounded-full bg-primary/60 animate-pulse delay-300 shadow-lg shadow-primary/50" />
        <div className="absolute bottom-[30%] left-[20%] h-3 w-3 rounded-full bg-primary/40 animate-pulse delay-700 shadow-lg shadow-primary/50" />
        <div className="absolute top-[50%] right-[15%] h-2 w-2 rounded-full bg-primary/55 animate-pulse delay-500 shadow-lg shadow-primary/50" />
        <div className="absolute bottom-[45%] left-[30%] h-2.5 w-2.5 rounded-full bg-primary/45 animate-pulse delay-1000 shadow-lg shadow-primary/50" />
        <div className="absolute top-[65%] right-[35%] h-3 w-3 rounded-full bg-primary/50 animate-pulse delay-200 shadow-lg shadow-primary/50" />
        <div className="absolute bottom-[20%] left-[40%] h-2 w-2 rounded-full bg-primary/60 animate-pulse delay-800 shadow-lg shadow-primary/50" />
        <div className="absolute top-[80%] right-[10%] h-2.5 w-2.5 rounded-full bg-primary/40 animate-pulse delay-400 shadow-lg shadow-primary/50" />
        <div className="absolute top-[15%] left-[50%] h-2 w-2 rounded-full bg-primary/55 animate-pulse delay-600 shadow-lg shadow-primary/50" />
        <div className="absolute bottom-[60%] right-[45%] h-3 w-3 rounded-full bg-primary/45 animate-pulse delay-900 shadow-lg shadow-primary/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection variant="fade-down" delay={0}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-primary/15 to-primary/5 px-5 py-2 backdrop-blur-md shadow-lg shadow-primary/10">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Trusted Cybersecurity Partner
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={100}>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Protect Your Business with{" "}
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent animate-gradient">
                Expert Cybersecurity
              </span>{" "}
              Solutions
            </h1>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={250}>
            <p className="mt-8 max-w-3xl mx-auto text-xl leading-relaxed text-muted-foreground/90 text-balance">
              WiseTech delivers comprehensive cybersecurity consulting,
              assessments, and training. We help organizations identify
              vulnerabilities, meet compliance requirements, and build resilient
              security postures.
            </p>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={400}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="group shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all text-base px-8 py-6 h-auto"
              >
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/30 hover:bg-primary/10 backdrop-blur-md text-base px-8 py-6 h-auto"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}
