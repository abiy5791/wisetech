export function GlowOrb({
  className = "",
  color = "primary",
}: {
  className?: string
  color?: "primary" | "secondary"
}) {
  const bg =
    color === "primary"
      ? "bg-[#fb9e2d]/15"
      : "bg-[#fb9e2d]/8"

  return (
    <div
      className={`absolute rounded-full blur-3xl animate-pulse-glow pointer-events-none ${bg} ${className}`}
      aria-hidden="true"
    />
  )
}
