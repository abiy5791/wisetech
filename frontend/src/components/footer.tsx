import Link from "next/link";
import { Shield, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Services: [
    {
      name: "Cybersecurity Assessments",
      href: "/services/cybersecurity-assessments",
    },
    {
      name: "Security Training",
      href: "/services/security-awareness-training",
    },
    {
      name: "Compliance Support",
      href: "/services/compliance-regulatory-support",
    },
    { name: "All Services", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function XIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26L22.8 21.75h-6.79l-5.316-6.944L4.11 21.75H.8l7.73-8.835L1.2 2.25h6.96l4.81 6.29 5.274-6.29z" />
    </svg>
  );
}



export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group flex items-center gap-2">
              <Shield className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Wise<span className="text-primary">Tech</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Expert cybersecurity consulting, assessments, and training. We
              help organizations build resilient security postures with
              transparency and excellence.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:pl-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} WiseTech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <XIcon className="h-5 w-5" />
            </Link>
               <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
            </Link>
               <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
