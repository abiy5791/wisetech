"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Shield, ChevronDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Cybersecurity Assessments",
        href: "/services/cybersecurity-assessments",
      },
      {
        name: "Security Awareness Training",
        href: "/services/security-awareness-training",
      },
      {
        name: "Compliance & Regulatory Support",
        href: "/services/compliance-regulatory-support",
      },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-xl shadow-lg shadow-background/50"
          : "border-b border-transparent bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* <div className="flex shrink-0 items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <img
              src="/logo.png"
              alt="WiseTech Logo"
              className="h-7 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Wise<span className="text-primary">Tech</span>
            </span>
          </Link>
        </div> */}
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              Wise<span className="text-primary">Tech</span>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                  {item.name}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`cyber-panel absolute left-0 top-[calc(100%+2px)] z-[60] w-72 rounded-xl p-2.5 shadow-xl shadow-background/50 transition-all duration-200 ${
                    servicesOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -top-2 left-0 h-2 w-full"
                    aria-hidden="true"
                  />
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-foreground hover:pl-4"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/12 text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ),
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="border-border/70 bg-background/60 backdrop-blur-sm" />
          <Button asChild className="shadow-lg shadow-primary/20">
            <Link href="/contact">Get a Consultation</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="h-9 w-9 border-border/70 bg-background/60 backdrop-blur-sm" />
          <button
            className="rounded-md p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`border-t border-border bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded-md px-2 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
              {item.children && (
                <div className="ml-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 border-t border-border pt-4">
            <Button asChild className="w-full shadow-lg shadow-primary/20">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Get a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
