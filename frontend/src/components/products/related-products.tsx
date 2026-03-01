"use client";

import { AnimatedSection } from "@/components/animated-section";
import { ProductCard } from "./product-card";
import { products } from "./product-data";

interface RelatedProductsProps {
    currentSlug: string;
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
    const related = products.filter((p) => p.slug !== currentSlug).slice(0, 4);

    return (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <AnimatedSection variant="fade-right" delay={0}>
                <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                    You Might Also Like
                </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((product, index) => (
                    <AnimatedSection key={product.id} variant="fade-up" delay={index * 80}>
                        <ProductCard product={product} />
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}
