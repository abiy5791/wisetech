interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label && (
        <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <div className="h-px w-10 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <p className="rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
            {label}
          </p>
          <div className="h-px w-10 bg-gradient-to-l from-transparent via-primary/70 to-transparent" />
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
