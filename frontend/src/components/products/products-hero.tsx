"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductsHero() {
    return (
        <section className="relative overflow-hidden rounded-2xl bg-card border border-border">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="h-full w-full bg-cover bg-center opacity-40 mix-blend-overlay"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBypIRmnTJeEbCzbsoDr2bIJhVb_5RpqNxrKapoDH8XdtGVmo9kXku0F2TbsmueTcBft6AHKKEmUjWp0DKuobFuiZGqZahV6eU6pCdoMUVCLX1f8YNPiuTQaLwkHtzqUk_zbalRwW-DNuxFC5BHTG_l0vjIM6KBiW2pFtZsQXh7DaGLroPOpemhMB60HYE63r9BG2gmjQNObNfmseoAgwJ7NwdRlxMjiYD_nwTZRUBY2nZ9feRYVCSSRyrJJjzglpc0eN-iu2zsqQ')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent" />
                {/* Primary glow */}
                <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -top-10 left-1/4 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-[420px] md:min-h-[500px] flex-col justify-center px-8 py-16 md:px-16 lg:w-2/3">
                <AnimatedSection variant="fade-down" delay={0}>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Featured Product
                    </span>
                </AnimatedSection>

                <AnimatedSection variant="fade-up" delay={100}>
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Enterprise-Grade{" "}
                        <br />
                        <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                            Cybersecurity Tools
                        </span>
                    </h1>
                </AnimatedSection>

                <AnimatedSection variant="fade-up" delay={200}>
                    <p className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed">
                        Equip your team with professional security solutions — from endpoint
                        protection and SIEM platforms to hardware keys and pentest toolkits.
                    </p>
                </AnimatedSection>

                <AnimatedSection variant="fade-up" delay={300}>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95"
                        >
                            <Link href="/products/endpoint-shield-pro">
                                Explore Top Pick
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="border-border/50 bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/60"
                        >
                            <Link href="/contact">Request a Demo</Link>
                        </Button>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
