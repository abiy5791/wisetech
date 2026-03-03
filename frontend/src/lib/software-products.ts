export interface SoftwareProduct {
    slug: string;
    name: string;
    tagline: string;
    categoryLabel: string;
    navLabel: string;
    badge: string;
    headline: string;
    description: string;
    longDescription: string;
    ctaPrimary: string;
    ctaSecondary: string;
    image: string;
    imageAlt: string;
    metrics: {
        label: string;
        value: string;
    }[];
    useCases: string[];
    quote: string;
    benefits: {
        title: string;
        description: string;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    trustedBy: string[];
}

export const softwareProducts: SoftwareProduct[] = [
    {
        slug: "nexus-ai",
        name: "Nexus AI",
        tagline: "Predictive intelligence for fast-moving teams",
        categoryLabel: "Predictive Analytics",
        navLabel: "Nexus AI",
        badge: "Predictive Analytics",
        headline: "Nexus AI: Predictive Intelligence, Refined.",
        description:
            "Solving the problem of unpredictable data patterns with neural forecasting. Harness deep learning to anticipate market shifts before they happen.",
        longDescription:
            "Nexus AI unifies fragmented data streams, learns evolving behavior patterns, and turns noisy telemetry into confident forecasts. Product, finance, and operations teams use it to anticipate demand shifts, detect anomalies early, and act before risk materializes.",
        ctaPrimary: "Explore Nexus",
        ctaSecondary: "View Documentation",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaPuW16xo79Iks3HYAbcdk9xF2muozfUsBTRNHQLw9rPUwhAOyFasoZOXJdpGcE7z5E_9N2-U3Jpf9UnqHePNeZB-yKXL42LZhNGiF7y2jNkZ5OzSXy-EHTAa6fntZrYD1nq0h94O1IsZTK0cevvVL5nvUmUXYGx5ssY-iRAsI5tIQeyM6b-8hbm8NPO94iPUOWZJIv4bBViF3Wox9QHHyA72ZviaEWz_ETu8ToYm249zzeGLSpUVRld4czuZv8a8Ox8-IVaav5Q",
        imageAlt: "Futuristic neural network visualization",
        metrics: [
            { label: "Forecast Precision", value: "98.2%" },
            { label: "Signal Processing", value: "5M events/min" },
            { label: "Insight Latency", value: "< 120ms" },
        ],
        useCases: [
            "Revenue and demand forecasting",
            "Supply chain drift detection",
            "Operational anomaly prediction",
            "Customer behavior trajectory modeling",
        ],
        quote:
            "Nexus AI harmonizes complex data streams into clear, predictive trajectories, helping teams make decisions with confidence and precision.",
        benefits: [
            {
                title: "Enhanced Accuracy",
                description:
                    "Our proprietary models reduce noise by up to 85%, delivering high-fidelity predictions your business can trust.",
            },
            {
                title: "Seamless Integration",
                description:
                    "Connect Nexus AI to your existing stack with zero-friction APIs and native connectors for major SaaS platforms.",
            },
            {
                title: "Scalable Architecture",
                description:
                    "Built on a cloud-native foundation that scales with your data requirements while preserving low latency.",
            },
        ],
        features: [
            {
                title: "Real-time Anomaly Detection",
                description:
                    "Identify outliers and issues before they impact operations with always-on monitoring.",
            },
            {
                title: "Prescriptive Recommendations",
                description:
                    "Get actionable guidance on how to respond to projected trends instead of just seeing forecasts.",
            },
            {
                title: "Enterprise-grade Security",
                description:
                    "SOC 2 Type II aligned infrastructure with end-to-end encryption for sensitive data streams.",
            },
        ],
        trustedBy: ["Stellar", "Prism", "Noctua", "Frost", "NexusLabs"],
    },
    {
        slug: "lumina-security",
        name: "Lumina Security",
        tagline: "Zero-trust access and enforcement at enterprise scale",
        categoryLabel: "Zero-Trust Infrastructure",
        navLabel: "Lumina Security",
        badge: "Zero-Trust Infrastructure",
        headline: "Lumina Security: Continuous Verification, Zero Blind Spots.",
        description:
            "Eliminating unauthorized access risks through continuous verification. Lumina treats every request as a potential breach and secures your perimeter with high-velocity logic.",
        longDescription:
            "Lumina Security applies continuous verification across users, devices, workloads, and service-to-service communication. It combines adaptive policy, behavior signals, and automated response to reduce breach windows while preserving user productivity.",
        ctaPrimary: "Secure Now",
        ctaSecondary: "View Architecture",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhY1aihlvI0lrRFncQt3Z3qHmpbKhjC7ki0h7TPm4Py0t4_CFRQQiCffye4m0n5y0cN7ErxaHj04oOCuj6OR4WHDrEQX4xWEFyWiq8wQa5I9It4DTFLDd7A3iYD5OV--1e6km4aEF8XbGx2Mmewh7-tQ5gCiDLZzrQ8qoJLZs3k8SuYeOc2gnCU5gWXz4JcR2fA-EPuHkultM_2Tc73KLuE3ITOEK8ufdvExF6LBkyYwpYzzJFV2R2-UnAWyKIjVo4LRXluO_VBw",
        imageAlt: "Cybersecurity digital shield",
        metrics: [
            { label: "Threat Mitigation", value: "99.9%" },
            { label: "Policy Evaluation", value: "35ms" },
            { label: "Session Verifications", value: "24/7" },
        ],
        useCases: [
            "Privileged access governance",
            "Remote workforce security",
            "Third-party access control",
            "Compliance-driven audit trails",
        ],
        quote:
            "Lumina Security enforces zero-trust policies across identity, device, and workload layers so teams can move fast without sacrificing control.",
        benefits: [
            {
                title: "Continuous Identity Checks",
                description:
                    "Every access request is validated in context, reducing lateral movement opportunities.",
            },
            {
                title: "Adaptive Policy Engine",
                description:
                    "Policies respond to risk signals in real time to tighten controls when threat posture changes.",
            },
            {
                title: "Audit-ready Visibility",
                description:
                    "Unified telemetry and immutable logs simplify compliance reporting and incident investigations.",
            },
        ],
        features: [
            {
                title: "Risk-aware Session Control",
                description:
                    "Session trust scores adjust continuously based on behavior, location, and endpoint health.",
            },
            {
                title: "Privileged Access Guardrails",
                description:
                    "JIT elevation, approval workflows, and command tracing protect high-impact operations.",
            },
            {
                title: "Threat Mitigation Automation",
                description:
                    "Automated playbooks isolate compromised identities and endpoints in seconds.",
            },
        ],
        trustedBy: ["AegisOne", "VectorGrid", "CobaltOps", "DeltaBank", "Skyline"],
    },
    {
        slug: "vortex-cloud",
        name: "Vortex Cloud",
        tagline: "Serverless orchestration for resilient cloud delivery",
        categoryLabel: "Serverless Orchestration",
        navLabel: "Vortex Cloud",
        badge: "Serverless Orchestration",
        headline: "Vortex Cloud: Elastic Infrastructure Without the Overhead.",
        description:
            "Solving infrastructure overhead by automating resource scaling. Deploy code and let Vortex handle expansion and contraction with near-zero operational burden.",
        longDescription:
            "Vortex Cloud orchestrates compute, networking, and deployment policies across environments with a serverless control plane. Teams use it to reduce operational toil, improve release confidence, and keep performance stable as workloads grow.",
        ctaPrimary: "Deploy Vortex",
        ctaSecondary: "Request Demo",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-NX8ICGBRzRMo7I4w16pWiDKPoFMiE2fyPHWiKaVvy6J-gyC1Hly2GoulRjcqZHyazr1xPru0aJ902oQH3m7BPG3telbVcTcncpRVB__Nw70-qTqZvC1FnojP-du6Qq8eUCo_CJ3Vx3T66kgsYPXEljk-cBqLUN492JV2ZYAZGktoCnY1lZOXpzQvSEYXtOh7ZNe_PKX0T7Seyh-V0wUCq0hkmG1A4fkr4xEwuOk1NGPsvH2VvqsRcY9-tTDBPLVdsFFgdnuXw",
        imageAlt: "Vortex of light and data",
        metrics: [
            { label: "Deployment Velocity", value: "4x" },
            { label: "Auto-scaling Reactivity", value: "< 10s" },
            { label: "Global Availability", value: "99.99%" },
        ],
        useCases: [
            "Event-driven application orchestration",
            "Multi-region workload balancing",
            "Cost-optimized scaling policies",
            "Platform engineering enablement",
        ],
        quote:
            "Vortex Cloud abstracts operational complexity so engineering teams can deliver features faster and keep performance predictable at every scale.",
        benefits: [
            {
                title: "Auto-scaling Workloads",
                description:
                    "Scale compute and services up or down automatically based on real-time traffic.",
            },
            {
                title: "Cost-aware Scheduling",
                description:
                    "Route workloads to the most efficient execution profile without sacrificing reliability.",
            },
            {
                title: "Resilient Multi-cloud Runtime",
                description:
                    "Distribute workloads across providers and regions for high availability and vendor flexibility.",
            },
        ],
        features: [
            {
                title: "Deployment Pipelines",
                description:
                    "Ship updates safely with progressive rollout controls and automated rollback policies.",
            },
            {
                title: "Observability by Default",
                description:
                    "Correlate logs, metrics, and traces from one dashboard to resolve incidents faster.",
            },
            {
                title: "Policy-driven Governance",
                description:
                    "Enforce security and compliance guardrails through reusable infrastructure policies.",
            },
        ],
        trustedBy: ["OrbitWorks", "KiteLabs", "BluePeak", "NeonStack", "Horizon"],
    },
];

export const softwareProductsBySlug = Object.fromEntries(
    softwareProducts.map((product) => [product.slug, product]),
) as Record<string, SoftwareProduct>;
