import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronLeft,
  Clock3,
  Home,
  User,
} from "lucide-react"
import { PageLayout } from "@/components/page-layout"
import { getAllPosts, getPostBySlug } from "@/lib/blog-data"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await Promise.resolve(params)
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>
}) {
  const { slug } = await Promise.resolve(params)
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getAllPosts().filter((item) => item.slug !== slug).slice(0, 3)

  const paragraphs = post.content
    .trim()
    .split("\n\n")
    .filter((item) => item.trim())

  const headings = paragraphs
    .map((item) => item.trim())
    .filter((item) => item.startsWith("## "))
    .map((item) => item.replace("## ", ""))

  const wordCount = post.content.trim().split(/\s+/).filter(Boolean).length
  const readTime = Math.max(1, Math.ceil(wordCount / 220))

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })

  return (
    <PageLayout>
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="cyber-grid" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Home className="h-4 w-4" />
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
            <span>/</span>  
            <Link
              href="/blog"
              className="transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="line-clamp-1 font-medium text-foreground">
              {post.title}
            </span>
          </div>

          {/* <Link
            href="/blog"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-1 h-3.5 w-3.5" />
            Back to Blog
          </Link> */}

          <div className="mx-auto max-w-4xl">
            <span className="mb-4 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
              {post.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}, {post.authorRole}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4" />
                {readTime} min read
              </span>
            </div>
          </div>

          <div className="cyber-frame relative mx-auto mt-12 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <article className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm sm:p-10">
              <div className="flex flex-col gap-7">
                <p className="border-l-4 border-primary/70 pl-5 text-[1.32rem] leading-relaxed font-medium text-foreground/95 sm:text-[1.42rem]">
                  {post.excerpt}
                </p>

                {paragraphs.map((paragraph, index) => {
                  const trimmed = paragraph.trim()

                  if (trimmed.startsWith("## ")) {
                    const headingText = trimmed.replace("## ", "")
                    return (
                      <h2
                        id={slugify(headingText)}
                        key={index}
                        className="scroll-mt-24 border-l-2 border-primary/60 pl-4 text-2xl font-bold tracking-tight text-foreground"
                      >
                        {headingText}
                      </h2>
                    )
                  }

                  if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
                    return (
                      <p key={index} className="text-lg font-semibold text-foreground">
                        {trimmed.replace(/\*\*/g, "")}
                      </p>
                    )
                  }

                  if (trimmed.startsWith("**")) {
                    const parts = trimmed.split("**")
                    return (
                      <p
                        key={index}
                        className="text-base leading-8 text-muted-foreground/95 text-pretty"
                      >
                        {parts.map((part, idx) =>
                          idx % 2 === 1 ? (
                            <strong
                              key={idx}
                              className="font-semibold text-foreground"
                            >
                              {part}
                            </strong>
                          ) : (
                            <span key={idx}>{part}</span>
                          )
                        )}
                      </p>
                    )
                  }

                  if (trimmed.startsWith("- ")) {
                    const items = trimmed
                      .split("\n")
                      .filter((line) => line.startsWith("- "))
                    return (
                      <ul key={index} className="space-y-3 pl-5 marker:text-primary">
                        {items.map((item, idx) => (
                          <li
                            key={idx}
                            className="list-disc text-base leading-8 text-muted-foreground/95"
                          >
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  return (
                    <p
                      key={index}
                      className="text-base leading-8 text-muted-foreground/95 text-pretty"
                    >
                      {trimmed}
                    </p>
                  )
                })}
              </div>
            </article>

            <div className="mt-10 flex justify-between gap-4 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
                All Posts
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Talk to WiseTech
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Continue Reading
                </span>
                <h2 className="mt-2 text-4xl font-bold text-balance">
                  More Articles
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Discover more practical guides and expert perspectives from the
                WiseTech team.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block cursor-pointer"
                >
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-background">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <time className="text-xs font-medium text-muted-foreground/80">
                    {formatDate(related.date)}
                  </time>

                  <h3 className="mb-4 mt-3 text-2xl font-bold text-balance transition-colors group-hover:text-primary">
                    {related.title}
                  </h3>

                  <p className="mb-6 text-muted-foreground">{related.excerpt}</p>

                  <span className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-sm font-semibold">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}
