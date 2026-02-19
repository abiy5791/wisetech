"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  Globe,
  CheckCircle2,
  Sparkles,
  Shield,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact/contact-form";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@wisetech.com",
    href: "mailto:info@wisetech.com",
    description: "Drop us a line anytime",
    action: "Send email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 987-6543",
    href: "tel:+15559876543",
    description: "Mon-Fri 8am-6pm CST",
    action: "Call now",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.google.com/?q=200+Cyber+Drive+Austin+TX",
    description: "Visit our main office",
    action: "Get directions",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday, 8:00 AM - 6:00 PM CST",
    href: "#",
    description: "24/7 emergency support available",
    action: "Emergency?",
  },
];


export function ContactClient() {
  return (
    <>
      {/* Hero Section - Modern & Bold */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection
            variant="fade-up"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Animated badge */}
            <div className="mb-8 inline-flex animate-in fade-in slide-in-from-top-4 duration-1000">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Get in Touch
                <Sparkles className="ml-2 h-3 w-3 text-primary" />
              </Badge>
            </div>

            {/* Main heading */}
            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Secure
              </span>{" "}
              Your Future Together
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Whether you need a cybersecurity assessment, compliance guidance,
              training for your team, or want to explore a partnership, we are
              here to help.
            </p>

            {/* Quick actions */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button
                size="lg"
                className="group relative overflow-hidden"
                asChild
              >
                <Link href="#contact-form">
                  <span className="relative z-10 flex items-center">
                    Send a Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#locations">
                  <MapPin className="mr-2 h-4 w-4" />
                  Visit Our Offices
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              {[
                { icon: HeadphonesIcon, text: "24/7 Support" },
                { icon: Users, text: "Expert Team" },
                { icon: Globe, text: "Global Presence" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/5 p-2">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Cards - Modern Interactive */}
      <section className="relative -mt-16 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, i) => (
              <AnimatedSection
                key={item.label}
                delay={i * 100}
                variant="fade-up"
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6">
                    {/* Icon with gradient background */}
                    <div className="relative mb-4">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-1 text-base font-medium text-foreground">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {item.description}
                    </p>

                    {/* Action link */}
                    {item.href !== "#" ? (
                      <Link
                        href={item.href}
                        className="mt-4 inline-flex items-center text-sm text-primary transition-all hover:gap-2"
                      >
                        {item.action}
                        <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <p className="mt-4 text-sm text-primary">{item.action}</p>
                    )}

                    {/* Hover gradient line */}
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all group-hover:w-full" />
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section id="contact-form" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column - Map & Info */}
            <AnimatedSection variant="fade-right">
              <div className="space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    Our Locations
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Visit Our{" "}
                    <span className="text-primary">Global Offices</span>
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    With offices across three continents, we're always nearby to
                    provide personalized cybersecurity support.
                  </p>
                </div>

                {/* Interactive Map - Using iframe for Google Maps */}
                <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.331912998455!2d-97.74368268487685!3d30.26720298180444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="grayscale transition-all hover:grayscale-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

            
              </div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection variant="fade-left" delay={150}>
              <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Send Us a Message</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1">
                      <Shield className="mr-1 h-3 w-3" />
                      Confidential
                    </Badge>
                  </div>

                  <ContactForm />

                  {/* Trust indicators */}
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        Encrypted
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        GDPR Compliant
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">
                        24h Response
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                {/* Icon */}
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Shield className="h-8 w-8" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get a Free Cybersecurity Assessment
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
                  Take the first step toward a stronger security posture. Our
                  experts will evaluate your current defenses and provide
                  actionable recommendations.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group min-w-[200px] text-base shadow-lg"
                    asChild
                  >
                    <Link href="#contact-form">
                      Request Free Assessment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] border-white/20 bg-white/10 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link href="tel:+15559876543">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us Now
                    </Link>
                  </Button>
                </div>

                {/* Response time guarantee */}
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <Clock className="h-4 w-4" />
                  <span>Guaranteed response within 24 hours</span>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
