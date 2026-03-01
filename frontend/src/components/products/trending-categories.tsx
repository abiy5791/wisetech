"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { categories } from "./product-data";

export function TrendingCategories() {
    return (
        <section>
            <div className="mb-8 flex items-end justify-between">
                <AnimatedSection variant="fade-right" delay={0}>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        Browse by Category
                    </h2>
                </AnimatedSection>
                <AnimatedSection variant="fade-left" delay={100}>
                    <Link
                        className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                        href="/products"
                    >
                        View All
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                    <AnimatedSection
                        key={category.name}
                        variant="fade-up"
                        delay={index * 100}
                    >
                        <Link
                            href={category.href}
                            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="aspect-[4/3] w-full overflow-hidden bg-secondary">
                                <img
                                    alt={category.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={category.image}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground">
                                    {category.name}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {category.description}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    Browse Products
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}
