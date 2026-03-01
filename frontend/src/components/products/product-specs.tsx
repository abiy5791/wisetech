"use client";

import {
    Headphones,
    Zap,
    Wifi,
    Ruler,
    Monitor,
    Camera,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { type ProductDetail } from "./product-data";

const specIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    headphones: Headphones,
    zap: Zap,
    wifi: Wifi,
    ruler: Ruler,
    monitor: Monitor,
    camera: Camera,
};

interface ProductSpecsProps {
    product: ProductDetail;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
    return (
        <section className="bg-secondary/50 py-16 rounded-2xl">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <AnimatedSection variant="fade-up" delay={0}>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Technical Specifications
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Detailed breakdown of the {product.name} capabilities.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection variant="zoom-in" delay={100}>
                    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {product.specs.map((specGroup, index) => {
                                const IconComponent = specIconMap[specGroup.icon];
                                const isLastRow = index >= product.specs.length - 2;
                                const isOdd = index % 2 === 1;

                                return (
                                    <div
                                        key={specGroup.title}
                                        className={cn(
                                            "p-6",
                                            !isLastRow && "border-b border-border",
                                            !isOdd && !isLastRow && "md:border-r border-border",
                                            !isOdd && isLastRow && "md:border-r border-border",
                                            index >= 2 && "md:border-t border-border"
                                        )}
                                    >
                                        <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                                            {IconComponent && (
                                                <IconComponent className="h-5 w-5 text-primary" />
                                            )}
                                            {specGroup.title}
                                        </h3>
                                        <dl className="space-y-4">
                                            {specGroup.items.map((item) => (
                                                <div
                                                    key={item.label}
                                                    className="flex justify-between items-start"
                                                >
                                                    <dt className="text-sm font-medium text-muted-foreground">
                                                        {item.label}
                                                    </dt>
                                                    <dd className="text-sm font-semibold text-foreground text-right">
                                                        {item.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}
