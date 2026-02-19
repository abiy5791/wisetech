export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  date: string
  category: string
  image: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-cybersecurity-threats-2026",
    title: "Top 5 Cybersecurity Threats to Watch in 2026",
    excerpt:
      "From AI-powered attacks to supply chain vulnerabilities, here are the five most critical cybersecurity threats organizations need to prepare for this year.",
    content: `
The cybersecurity landscape continues to evolve at a rapid pace, and 2026 brings a new wave of threats that organizations must be ready to face. In this post, we break down the five most pressing cybersecurity challenges of the year.

## 1. AI-Powered Social Engineering

Attackers are leveraging generative AI to create highly convincing phishing emails, deepfake voice calls, and even video impersonations. Traditional awareness training must evolve to address these sophisticated tactics.

## 2. Supply Chain Attacks

The SolarWinds-era wake-up call continues to resonate. Threat actors increasingly target third-party vendors and open-source dependencies to gain access to larger organizations. Robust vendor risk management is essential.

## 3. Ransomware-as-a-Service Evolution

Ransomware groups continue to refine their business models, offering increasingly sophisticated tools to less technically skilled operators. Double and triple extortion tactics remain prevalent.

## 4. Cloud Configuration Drift

As organizations expand their cloud footprints, misconfigurations remain a leading cause of breaches. Continuous monitoring and infrastructure-as-code practices are critical for maintaining secure configurations.

## 5. IoT and OT Convergence Risks

The blurring line between IT and operational technology creates new attack surfaces. Organizations in manufacturing, energy, and healthcare must implement segmentation and monitoring across converged environments.

## How to Prepare

The best defense is a proactive, layered security strategy. Regular assessments, continuous training, and robust incident response plans form the foundation of an effective cybersecurity program. Contact WiseTech to learn how we can help your organization stay ahead of these evolving threats.
    `,
    author: "James Harrington",
    authorRole: "Founder & CEO",
    date: "2026-02-10",
    category: "Threat Intelligence",
    image: "/images/blog-featured.jpg",
    featured: true,
  },
  {
    slug: "building-security-awareness-culture",
    title: "Building a Security Awareness Culture That Lasts",
    excerpt:
      "One-time training isn't enough. Learn how to create a sustained security culture that empowers every employee to be part of your defense.",
    content: `
Security awareness training is one of the most cost-effective investments an organization can make. But too many programs fail because they treat training as a checkbox exercise rather than a cultural initiative.

## Beyond Annual Compliance Training

Annual training sessions have their place, but they are not sufficient to create lasting behavioral change. Research consistently shows that knowledge retention drops dramatically within weeks of a single training event.

## The WiseTech Approach to Security Culture

At WiseTech, we advocate for a continuous, multi-layered approach to security awareness:

**Regular Micro-Learning:** Short, focused training modules delivered weekly or bi-weekly keep security top of mind without overwhelming employees.

**Simulated Attacks:** Regular phishing simulations and social engineering exercises provide realistic practice and measurable improvement metrics.

**Positive Reinforcement:** Recognizing and rewarding security-conscious behavior is far more effective than punitive approaches.

**Leadership Engagement:** When executives visibly champion security practices, it signals to the entire organization that security matters.

## Measuring Success

Effective security culture programs track metrics beyond completion rates. Look at phishing simulation click rates over time, incident reporting volumes, and employee survey responses about security confidence and awareness.

## Getting Started

Building a security culture is a journey, not a destination. Start with an honest assessment of your current state, set realistic goals, and commit to continuous improvement. WiseTech's training team can help you design a program that fits your organization's unique needs and culture.
    `,
    author: "Dr. Karen Liu",
    authorRole: "Director of Training",
    date: "2026-01-28",
    category: "Training",
    image: "/images/blog-2.png",
    featured: false,
  },
  {
    slug: "iso-27001-certification-guide",
    title: "A Practical Guide to ISO 27001 Certification",
    excerpt:
      "Demystifying the ISO 27001 certification process: what to expect, how to prepare, and common pitfalls to avoid.",
    content: `
ISO 27001 certification is increasingly becoming a business requirement, not just a nice-to-have. Whether you are pursuing certification for the first time or maintaining your existing ISMS, this guide provides practical insights from our team's extensive experience.

## Understanding the Scope

The first and arguably most important decision in your ISO 27001 journey is defining the scope of your Information Security Management System (ISMS). A well-defined scope ensures that certification efforts are focused and manageable.

## Key Steps in the Certification Process

**Gap Assessment:** Before diving into implementation, conduct a thorough gap assessment against ISO 27001 requirements. This provides a clear roadmap of what needs to be done.

**Risk Assessment:** ISO 27001 is fundamentally risk-based. Your risk assessment methodology should identify, analyze, and evaluate information security risks specific to your organization.

**Policy and Control Implementation:** Based on your risk assessment, implement the necessary controls from Annex A and document your policies and procedures.

**Internal Audit:** Before the certification audit, conduct a comprehensive internal audit to identify any remaining gaps or non-conformities.

**Management Review:** Senior management must review the ISMS to ensure its continuing suitability, adequacy, and effectiveness.

## Common Pitfalls

- Defining scope too broadly or too narrowly
- Treating documentation as a paperwork exercise rather than a living system
- Underestimating the time required for cultural change
- Neglecting ongoing maintenance after initial certification

## The WiseTech Advantage

Our compliance team has guided dozens of organizations through successful ISO 27001 certification. We provide hands-on support at every stage, from initial gap assessment through certification audit and ongoing maintenance.
    `,
    author: "Elena Vasquez",
    authorRole: "Head of Consulting",
    date: "2026-01-15",
    category: "Compliance",
    image: "/images/blog-3.jpg",
    featured: false,
  },
  {
    slug: "cloud-security-best-practices",
    title: "Cloud Security Best Practices for Growing Organizations",
    excerpt:
      "As your cloud footprint expands, so does your attack surface. Here are essential security practices for organizations scaling in the cloud.",
    content: `
Cloud adoption continues to accelerate, but security often struggles to keep pace with the speed of deployment. For growing organizations, establishing strong cloud security foundations early is far more effective than retrofitting security later.

## Identity and Access Management

IAM is the cornerstone of cloud security. Implement the principle of least privilege, use multi-factor authentication everywhere, and regularly review access permissions. Service accounts and API keys deserve special attention.

## Network Security

Design your cloud network architecture with security in mind from the start. Use VPCs, security groups, and network ACLs to create micro-segmented environments. Implement private endpoints for sensitive services.

## Data Protection

Classify your data and apply appropriate protections. Encrypt data at rest and in transit. Implement robust backup and recovery procedures. Use cloud-native tools for data loss prevention.

## Monitoring and Logging

Enable comprehensive logging across all cloud services. Implement centralized log management and security information and event management (SIEM) solutions. Set up alerts for suspicious activities and anomalous behavior.

## Configuration Management

Use infrastructure-as-code (IaC) to ensure consistent, auditable configurations. Implement cloud security posture management (CSPM) tools to continuously scan for misconfigurations and drift.

## Incident Response

Develop cloud-specific incident response procedures. Practice with tabletop exercises and ensure your team knows how to investigate and contain incidents in your cloud environments.

## Next Steps

Cloud security is an ongoing discipline that requires continuous attention as your environment evolves. WiseTech's cloud security team can help you assess your current posture and build a roadmap for improvement.
    `,
    author: "Marcus Okafor",
    authorRole: "Lead Security Engineer",
    date: "2026-01-05",
    category: "Cloud Security",
    image: "/images/blog-4.jpg",
    featured: false,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}
