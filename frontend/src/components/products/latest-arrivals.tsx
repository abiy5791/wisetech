"use client";

import { AnimatedSection } from "@/components/animated-section";
import { ProductCard } from "./product-card";
import { products } from "./product-data";

export function LatestArrivals() {
    return (
        <section>
            <AnimatedSection variant="fade-right" delay={0}>
                <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                    Latest Arrivals
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product, index) => (
                    <AnimatedSection key={product.id} variant="fade-up" delay={index * 80}>
                        <ProductCard product={product} />
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}
