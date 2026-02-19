import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { ContactClient } from "@/components/contact/contact-client"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WiseTech for cybersecurity consulting, assessments, training, or partnership inquiries.",
}

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactClient />
    </PageLayout>
  )
}
