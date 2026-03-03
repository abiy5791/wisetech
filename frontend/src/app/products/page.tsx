import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { softwareProducts } from "@/lib/software-products";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore WiseTech software solutions including Nexus AI, Lumina Security, and Vortex Cloud.",
};

export default function ProductsPage() {
    return (
        <PageLayout>
            <section className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Software Solutions
                        </span>
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Built for Modern Security and Cloud Operations
                        </h1>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                            WiseTech products are purpose-built software platforms, not e-commerce inventory.
                            Each solution is optimized for enterprise outcomes: predictive intelligence,
                            zero-trust control, and cloud-native orchestration.
                        </p>
                    </div>
                </div>
            </section>

            <div className="sticky top-[73px] z-20 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                <div className="mx-auto flex max-w-7xl items-center gap-4 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
                    {softwareProducts.map((product) => (
                        <a
                            key={product.slug}
                            className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            href={`#${product.slug}`}
                        >
                            {product.navLabel}
                        </a>
                    ))}
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {softwareProducts.map((product, index) => (
                    <section
                        key={product.slug}
                        id={product.slug}
                        className={`grid items-center gap-10 py-16 md:gap-12 lg:min-h-[calc(100vh-73px)] lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                            index !== softwareProducts.length - 1
                                ? "border-b border-border/60"
                                : ""
                        }`}
                    >
                        <div className={index % 2 === 0 ? "order-2 lg:order-1" : "order-2"}>
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                                {product.badge}
                            </span>
                            <h2 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                                {product.name}
                            </h2>
                            <p className="mt-3 text-base font-medium text-foreground/80">{product.tagline}</p>
                            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                                {product.longDescription}
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                {product.metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="rounded-xl border border-border/70 bg-card px-4 py-3"
                                    >
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                            {metric.label}
                                        </p>
                                        <p className="mt-1 text-lg font-semibold text-foreground">
                                            {metric.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {product.useCases.map((useCase) => (
                                    <span
                                        key={useCase}
                                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                                    >
                                        {useCase}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                                    href={`/products/${product.slug}`}
                                >
                                    {product.ctaPrimary}
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                                    href={`/products/${product.slug}`}
                                >
                                    {product.ctaSecondary}
                                </Link>
                            </div>
                        </div>

                        <div className={index % 2 === 0 ? "order-1 lg:order-2" : "order-1"}>
                            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl shadow-primary/10">
                                <img
                                    alt={product.imageAlt}
                                    className="aspect-[4/3] w-full object-cover"
                                    src={product.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/70 bg-background/85 p-4 backdrop-blur">
                                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                        Focus Outcome
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-foreground">{product.quote}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </PageLayout>
    );
}
