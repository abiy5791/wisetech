import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { AboutClient } from "@/components/about/about-client"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about WiseTech's mission, values, and the team behind our cybersecurity consulting and training services.",
}

const team = [
  {
    name: "James Harrington",
    role: "Founder & CEO",
    image: "/images/team-1.jpg",
    bio: "20+ years in cybersecurity leadership. Former CISO at Fortune 500 companies.",
  },
  {
    name: "Elena Vasquez",
    role: "Head of Consulting",
    image: "/images/team-2.jpg",
    bio: "Specialist in risk assessment and compliance across healthcare and finance sectors.",
  },
  {
    name: "Marcus Okafor",
    role: "Lead Security Engineer",
    image: "/images/team-3.jpg",
    bio: "Expert in penetration testing, cloud security, and threat intelligence.",
  },
  {
    name: "Dr. Karen Liu",
    role: "Director of Training",
    image: "/images/team-4.jpg",
    bio: "Designs and delivers award-winning security awareness programs for global teams.",
  },
]

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "12", label: "Industries Covered" },
  { value: "500+", label: "Training Sessions" },
]

const faqs = [
  {
    question: "What sets WiseTech apart from other cybersecurity firms?",
    answer:
      "Our commitment to transparency, customer-centric approach, and deep technical expertise. We don't upsell unnecessary services -- we focus on what your organization truly needs to be secure.",
    category: "general",
  },
  {
    question: "What industries does WiseTech serve?",
    answer:
      "We serve clients across healthcare, finance, manufacturing, logistics, energy, education, and government. Our team has specialized experience in highly regulated industries.",
    category: "services",
  },
  {
    question: "How does WiseTech stay current with evolving threats?",
    answer:
      "Our team engages in continuous professional development, participates in industry research, and maintains certifications including CISSP, CISM, CEH, and OSCP.",
    category: "general",
  },
  {
    question: "Can WiseTech work with organizations of any size?",
    answer:
      "Absolutely. We work with startups, mid-market companies, and enterprise organizations. Our solutions scale to fit your size, budget, and risk profile.",
    category: "services",
  },
  {
    question: "What is the typical engagement timeline?",
    answer:
      "It varies by scope. A focused assessment may take 2-4 weeks, while a comprehensive security transformation program can span several months. We always provide a clear timeline upfront.",
    category: "services",
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutClient
        team={team}
        stats={stats}
        faqs={faqs}
      />
    </PageLayout>
  )
}
