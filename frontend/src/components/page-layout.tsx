import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="cyber-grid" aria-hidden="true" />
      {/* <div className="cyber-scanline" aria-hidden="true" /> */}
      <div className="pointer-events-none absolute -top-40 left-1/3 z-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[45%] -right-36 z-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 pt-[73px]">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  )
}
