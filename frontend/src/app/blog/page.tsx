import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Star,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PageLayout } from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, ideas, and innovation from the WiseTech team across cybersecurity, compliance, and modern technology operations.",
};

export default function BlogPage() {
  const allPosts = getAllPosts();

  const galleryImages = Array.from({ length: 5 }, (_, index) => {
    if (allPosts.length === 0) {
      return "/images/blog-featured.jpg";
    }

    return allPosts[index % allPosts.length].image;
  });

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const testimonials = [
    {
      quote:
        "WiseTech helped us modernize our infrastructure and tighten our security posture without disrupting operations.",
      name: "Emily Carter",
      role: "CTO, Nexatech Solutions",
    },
    {
      quote:
        "Their team moved quickly, communicated clearly, and delivered a secure platform launch right on schedule.",
      name: "Rajesh Mehra",
      role: "Founder & CEO, Finytics",
    },
    {
      quote:
        "From consulting to implementation, the support has been practical, reliable, and business-focused.",
      name: "Sophia Nguyen",
      role: "Operations Manager, BrightEdge Retail",
    },
  ];

  return (
    <PageLayout>
      <section className="overflow-hidden py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-foreground">Blog</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Insights,
            <br />
            Ideas &amp; Innovation
          </h1>

          <p className="mx-auto mb-12 mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
            Explore expert articles, tech trends, and practical tips to keep
            your business ahead of the curve.
          </p>
{/* 
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-5">
            {galleryImages.map((image, index) => {
              const cardHeights = [
                "h-48 md:h-64",
                "h-64 md:h-80",
                "h-80 md:h-96",
                "h-64 md:h-80",
                "h-48 md:h-64",
              ];
              const translates = [
                "translate-y-8",
                "-translate-y-4",
                "translate-y-4",
                "-translate-y-4",
                "translate-y-8",
              ];

              return (
                <div
                  key={`${image}-${index}`}
                  className={`relative overflow-hidden rounded-2xl shadow-lg ${cardHeights[index]} ${translates[index]} ${index === 4 ? "hidden md:block" : ""}`}
                >
                  <Image
                    src={image}
                    alt="Blog gallery"
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Our Blog
              </span>
              <h2 className="mt-2 text-4xl font-bold text-balance">
                View All Knowledge Posts
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Dive into expert-written articles, tutorials, and insights
              designed to help you stay ahead in the fast-moving world of
              technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block cursor-pointer"
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <time className="text-xs font-medium text-muted-foreground/80">
                  {formatDate(post.date)}
                </time>

                <h3 className="mb-4 mt-3 text-2xl font-bold text-balance transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="mb-6 text-muted-foreground">{post.excerpt}</p>

                <span className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-semibold">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-border pt-8">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                    page === 1
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors hover:border-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Testimonials
              </span>
              <h2 className="mt-2 text-4xl font-bold text-balance leading-tight">
                Reviews That Speak Volumes
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Hear how our technology solutions have transformed operations,
              improved efficiency, and driven measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => {
              const initials = testimonial.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase();

              return (
                <article
                  key={testimonial.name}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-background p-8 shadow-sm"
                >
                  <div>
                    <div className="mb-6 flex text-yellow-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mb-8 italic text-muted-foreground">
                      “{testimonial.quote}”
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                      {initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{testimonial.name}</h4>
                      <p className="text-xs font-medium text-muted-foreground/80">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex justify-end gap-4">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:opacity-90"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative mx-4 my-16 overflow-hidden rounded-[40px] bg-gradient-to-br from-primary/30 via-primary/20 to-primary/5 shadow-2xl md:mx-8 md:my-24 lg:mx-12">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 h-60 w-60 rounded-full bg-primary/15 blur-3xl animate-pulse delay-700" />
        </div>

        {/* Image with overlay gradient */}
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/5 to-primary/25 z-10" />
          <Image
            src={galleryImages[0]}
            alt="Technology consulting session"
            fill
            sizes="50vw"
            className="object-cover transition-transform duration-1000 hover:scale-105"
            priority
          />
          {/* Decorative overlay pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16 lg:px-4">
          <div className="flex items-center">
            <div className="w-full text-left md:w-1/2 md:pr-8 lg:pr-12">
              {/* Animated label */}
              <AnimatedSection
                className="mb-6 inline-flex items-center gap-3"
                variant="fade-up"
              >
                <div className="h-px w-8 bg-primary/60" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Work Showcase
                </span>
                <div className="h-px w-8 bg-primary/60" />
              </AnimatedSection>

              {/* Main heading with gradient */}
              <AnimatedSection variant="fade-up" delay={100}>
                <h2 className="mb-4 text-2xl font-bold leading-tight md:mb-6 md:text-4xl lg:text-5xl">
                  Ready to Take Your Business to the{" "}
                  <span className="relative">
                    <span className="relative z-10 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                      Next Level
                    </span>
                    <span className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 blur-xl" />
                  </span>{" "}
                  with Powerful IT Solutions?
                </h2>
              </AnimatedSection>

              {/* Description with enhanced typography */}
              <AnimatedSection variant="fade-up" delay={200}>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:mb-8 md:text-base lg:text-lg">
                  With deep expertise in{" "}
                  <span className="font-semibold text-foreground">
                    cybersecurity
                  </span>
                  ,{" "}
                  <span className="font-semibold text-foreground">
                    cloud architecture
                  </span>
                  , and{" "}
                  <span className="font-semibold text-foreground">
                    compliance operations
                  </span>
                  , we help organizations modernize securely, scale confidently,
                  and stay resilient in a fast-changing digital landscape.
                </p>
              </AnimatedSection>

              {/* CTA Button with enhanced design */}
              <AnimatedSection variant="fade-up" delay={300}>
                <Button
                  asChild
                  size="lg"
                  className="group relative overflow-hidden rounded-full px-6 py-5 text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:px-8 md:py-6 md:text-base"
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </Button>

                {/* Trust indicators */}
                <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1.5">
                      <svg
                        className="h-3.5 w-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground md:text-sm">
                      No commitment required
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1.5">
                      <svg
                        className="h-3.5 w-3.5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground md:text-sm">
                      30-minute consultation
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 h-20 w-20 border-l-2 border-t-2 border-primary/20 rounded-tl-[40px]" />
        <div className="absolute bottom-0 right-0 h-20 w-20 border-r-2 border-b-2 border-primary/20 rounded-br-[40px]" />
      </section>
    </PageLayout>
  );
}
