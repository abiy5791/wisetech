import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { softwareProducts, softwareProductsBySlug } from "@/lib/software-products";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = softwareProductsBySlug[slug];

    if (!product) {
        return { title: "Product Not Found" };
    }

    return {
        title: product.name,
        description: product.longDescription,
    };
}

export function generateStaticParams() {
    return softwareProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = softwareProductsBySlug[slug];

    if (!product) {
        notFound();
    }

    return (
        <PageLayout>
            <section className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
                        <Link className="transition-colors hover:text-foreground" href="/products">
                            Solutions
                        </Link>
                        <span>/</span>
                        <span className="text-foreground">{product.name}</span>
                    </nav>

                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                        <div>
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                                {product.categoryLabel}
                            </div>
                            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                {product.headline}
                            </h1>
                            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                                {product.longDescription}
                            </p>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {product.metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="rounded-xl border border-border/70 bg-card px-4 py-3"
                                    >
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                            {metric.label}
                                        </p>
                                        <p className="mt-1 text-xl font-semibold text-foreground">
                                            {metric.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                                    Get Started Free
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                                <button className="rounded-xl border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent">
                                    Book Live Demo
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-3 rounded-3xl bg-primary/15 blur-2xl" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl shadow-primary/10">
                                <img
                                    alt={product.imageAlt}
                                    className="aspect-[5/4] w-full object-cover"
                                    src={product.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sticky top-[73px] z-20 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
                <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
                    {[
                        ["overview", "Overview"],
                        ["benefits", "Benefits"],
                        ["features", "Features"],
                        ["use-cases", "Use Cases"],
                    ].map(([anchor, label]) => (
                        <a
                            key={anchor}
                            className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            href={`#${anchor}`}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>

            <section id="overview" className="border-b border-border/60 bg-card/60">
                <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">The Core of Intelligence</h2>
                    <p className="mt-6 text-lg italic leading-relaxed text-muted-foreground">“{product.quote}”</p>
                </div>
            </section>

            <section id="benefits" className="border-b border-border/60">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-foreground">Key Benefits</h2>
                        <p className="mt-2 text-muted-foreground">High-impact advantages built for enterprise execution.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {product.benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm"
                            >
                                <div className="inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                                    <Check className="h-4 w-4" />
                                </div>
                                <h3 className="mt-4 text-xl font-semibold text-foreground">{benefit.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" className="border-b border-border/60 bg-muted/20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground">Powerful Features</h2>
                        <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
                        <div className="mt-8 space-y-6">
                            {product.features.map((feature) => (
                                <div key={feature.title} className="rounded-xl border border-border/70 bg-card p-5">
                                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-xl">
                            <img
                                alt={product.imageAlt}
                                className="aspect-square w-full rounded-xl object-cover"
                                src={product.image}
                            />
                        </div>
                        <div className="absolute -right-4 -top-4 hidden rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg lg:block">
                            Enterprise Ready
                        </div>
                    </div>
                </div>
            </section>

            <section id="use-cases" className="border-b border-border/60">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-3xl font-bold text-foreground">Where Teams Use {product.name}</h2>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {product.useCases.map((useCase) => (
                            <span
                                key={useCase}
                                className="rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground"
                            >
                                {useCase}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b border-border/60">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                    <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Trusted by Industry Leaders
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-foreground/80 sm:gap-10">
                        {product.trustedBy.map((company) => (
                            <span key={company}>{company}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary py-16 text-primary-foreground lg:py-20">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold sm:text-4xl">Ready to deploy {product.name}?</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
                        Join teams using {product.name} to convert operational complexity into measurable business outcomes.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button className="w-full rounded-xl bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 sm:w-auto">
                            Start Your 14-Day Free Trial
                        </button>
                        <button className="w-full rounded-xl border border-primary-foreground/40 bg-transparent px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto">
                            Talk to Sales
                        </button>
                    </div>
                    <p className="mt-5 text-sm text-primary-foreground/75">No credit card required. Cancel anytime.</p>
                </div>
            </section>

            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <Link className="text-sm font-medium text-primary hover:underline" href="/products">
                    ← Back to all solutions
                </Link>
            </div>
        </PageLayout>
    );
}
