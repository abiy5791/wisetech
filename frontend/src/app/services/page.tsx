import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { ServicesClient } from "@/components/services/services-client"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore WiseTech's full range of cybersecurity consulting and training services, from assessments to compliance support.",
}

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesClient />
    </PageLayout>
  )
}
