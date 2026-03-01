import { type Product } from "./product-card";

export const products: Product[] = [
    {
        id: "1",
        slug: "endpoint-shield-pro",
        name: "Endpoint Shield Pro",
        description: "Advanced endpoint protection & EDR.",
        price: 2499,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCISr201S-YQq4i1HElCU0EGE405L5TIa8N80i2b0S1ynAvReBYZfBEzsauwAfWmJhRuT-Y6KYrDoAu_nXm18VYqoeJGmTaDwCexxhLG7PXRZ8li0ZA6bfxLC9QNuPKMDtRTd1-PU7vXlf8dFhuLMyAHBWQDLawZ21EW15kGNUPgn6zfBNwN6Q3UNG8CVpWdsQyaaQo-BEpddqRg7gItBtFtRjvD1Kr3dnh1KDVNzKZj74bH4K0QvwJlUVMH4PkuS4zDglx-fkA",
        badge: "NEW",
        category: "Software",
    },
    {
        id: "2",
        slug: "yubikey-5-nfc",
        name: "YubiKey 5 NFC",
        description: "Hardware MFA security key.",
        price: 55,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCuAnSMzLwTRg884OQlIrhxlPW8-jQB810jepZL02fv8G8UDhRcPY1WsbZiB-z1DkBGNmdkap06jejrX-ejkrVqeespikbjr80HrFFXRh66kTfW1G1Pup0cIq7utljs4ObcTR54u5bZ_jmkZeyMTPJoPJgntAMPW5T_41Z3948s4yX7be8PoqSCJaRULS-QlcF7GxCuSOXkkpJmxvOme0QMAvon06naD0c-cFCYbek8OeljdQLSMqYQpPNsclxDoL_FIjh8QOxmsQ",
        category: "Hardware",
    },
    {
        id: "3",
        slug: "siem-analyzer-suite",
        name: "SIEM Analyzer Suite",
        description: "Real-time threat monitoring & analytics.",
        price: 4999,
        originalPrice: 5999,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBnB5vYovxVfdnCAR_4s5vIqv5iuxfG1oH3rCSCVI7u33Vfp79ru6ooknv9-N4MX7vADHqiQ3EQ8bqxRdKAhKARzPBaUqXG7nX0eHxwe90f0_pDML-Fg0fIYNW-HvKLD4EEffiHIvKYIQQqR0ImEpLuKQ1TuRkszw8s7QMQ89B2f3KA1j-2ahnB7irgepeuNqLA9PrxaaBxiTngD0d8Gh9eSG6kFQ_uBFHyRJvOZl9khL4Pn8oiGg_HKUcnpbodrdyJVQrSMcLg",
        category: "Software",
    },
    {
        id: "4",
        slug: "pentest-toolkit",
        name: "PenTest Toolkit",
        description: "Professional penetration testing kit.",
        price: 1299,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCziAlPHJazG5utZJ96j8yXCHobw4P7bFYn_ckajP2lVPCZCE28e_47qoEq819hFzCizYlj8ht3ecuyRmhsAUlOQLzEdnHNZtaEBZJ6BwRjYY0DopOrzzmuJlZuVp9KKIYtbLyGDE0ogIVCEqGkBmBjW__N6hVLo7Khs9IaecVHmcjzsVlLqgm2Lb2nYTpWdcuQ-EMYMNaUytPbeo4lLg58WwZC5eAi81agj5cKNvrP3NLUlagHWBr8lhdZcU48uDyIXAL5xdpQ5w",
        category: "Tools",
    },
    {
        id: "5",
        slug: "firewall-guardian-x",
        name: "Firewall Guardian X",
        description: "Next-gen network firewall appliance.",
        price: 3499,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJFQzkdvxUZcPWwv2eGshcBtHsYPJ9gH0GaiUm6a3T5ozA6wp12kJOvVDrkP0IL-Bwqi2jbPHmRKohft2h7Nl9ifF6DAAR-FYxCihg1iM9GF561jxa1vmWh7VYqqjKducF7CK3lbaCJ-7gCGd-QUlbV2aehn7r2PQL5ioXSAh6gA93eHjjz3tyPJ4oXSBVWPVAhPYXeMIG84dVj7ieeStGN0GCRQDTuhvXi1YdfJ_fgz_zIPJjtLeWdsVx7p-Mx5wfSTd74L7cw",
        category: "Hardware",
    },
];

export const categories = [
    {
        name: "Security Software",
        description: "Enterprise-grade protection suites, SIEM tools, and vulnerability scanners.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJFQzkdvxUZcPWwv2eGshcBtHsYPJ9gH0GaiUm6a3T5ozA6wp12kJOvVDrkP0IL-Bwqi2jbPHmRKohft2h7Nl9ifF6DAAR-FYxCihg1iM9GF561jxa1vmWh7VYqqjKducF7CK3lbaCJ-7gCGd-QUlbV2aehn7r2PQL5ioXSAh6gA93eHjjz3tyPJ4oXSBVWPVAhPYXeMIG84dVj7ieeStGN0GCRQDTuhvXi1YdfJ_fgz_zIPJjtLeWdsVx7p-Mx5wfSTd74L7cw",
        href: "/products",
    },
    {
        name: "Hardware Security",
        description: "Firewalls, hardware keys, and secure network appliances.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fnbwC66EdvU2aA2LfxvAiVtFxxjuQQ9vJEwRqLqqAHDOpFvDNMXCXaZPS0ONtCwBK6w7PB64d_bBxJTRm40_qcLEeuwxge1lDoH1Y7O6po_yOZzyQBG0FAdRXv4EKxqghavBuRMgTc-V2e5WQXX6V905J_NqSNUSR_KzVEIpLZbN-MtubOwkys-6l-JvLM4Q-RISl13IcQRbY7rDvcdnhZlB1JiC8h3a4DJusre6PC0Ri3bL2SU_wTE3AsAcu8vKK6jaku7ogA",
        href: "/products",
    },
    {
        name: "Pentest & Audit Tools",
        description: "Professional toolkits for vulnerability assessment and penetration testing.",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA7r4srcnBVTSTBj24UCHzVLV7a0ZkW-auJlS9rXUmX3Bdpza7KShkZf-wNnSHe5f_skv6dwLmqaRcyDygr_HL-LEnxRPmE5DiHPQFS21NBkpfHrluIvrw7CgeYYTq24TwK9Y-vwrkWJA98Fzd3N0mic-aRK4CEF9Luc29CeAycn0SS302CJrNB4ZdW31aKjBcdeuTgzKRaxzQiBxyQbL6zOwGBSBzQUAULJ6Sohad30D5zK-y6xKgStPs4Rhe0maXQ3RHGLrlaSA",
        href: "/products",
    },
];

// Detailed product data for the detail page
export interface ProductDetail extends Product {
    longDescription: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    colors: { name: string; value: string; selected?: boolean }[];
    features: { icon: string; label: string }[];
    specs: {
        title: string;
        icon: string;
        items: { label: string; value: string }[];
    }[];
    gallery: string[];
}

export const productDetails: Record<string, ProductDetail> = {
    "endpoint-shield-pro": {
        id: "1",
        slug: "endpoint-shield-pro",
        name: "Endpoint Shield Pro",
        description: "Advanced endpoint protection & EDR.",
        longDescription:
            "Endpoint Shield Pro delivers military-grade endpoint detection and response for your entire organization. Powered by AI-driven threat analysis, it detects zero-day exploits, ransomware, and advanced persistent threats in real time — while providing centralized management across all devices.",
        price: 2499,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCISr201S-YQq4i1HElCU0EGE405L5TIa8N80i2b0S1ynAvReBYZfBEzsauwAfWmJhRuT-Y6KYrDoAu_nXm18VYqoeJGmTaDwCexxhLG7PXRZ8li0ZA6bfxLC9QNuPKMDtRTd1-PU7vXlf8dFhuLMyAHBWQDLawZ21EW15kGNUPgn6zfBNwN6Q3UNG8CVpWdsQyaaQo-BEpddqRg7gItBtFtRjvD1Kr3dnh1KDVNzKZj74bH4K0QvwJlUVMH4PkuS4zDglx-fkA",
        badge: "NEW",
        category: "Software",
        rating: 4.8,
        reviewCount: 312,
        inStock: true,
        colors: [
            { name: "Standard License", value: "#1a1a2e", selected: true },
            { name: "Enterprise License", value: "#fb9e2d" },
        ],
        features: [
            { icon: "shield-check", label: "Zero-Day Defense" },
            { icon: "cpu", label: "AI-Powered" },
            { icon: "wifi", label: "Cloud Console" },
            { icon: "shield-check", label: "24/7 Support" },
        ],
        specs: [
            {
                title: "Protection",
                icon: "headphones",
                items: [
                    { label: "Threat Detection", value: "AI + Behavioral" },
                    { label: "Response Time", value: "< 50ms" },
                    { label: "Malware Types", value: "Ransomware, APT, Zero-Day" },
                    { label: "Sandboxing", value: "Cloud-based" },
                ],
            },
            {
                title: "Deployment",
                icon: "zap",
                items: [
                    { label: "OS Support", value: "Windows, macOS, Linux" },
                    { label: "Agents per License", value: "Up to 100" },
                    { label: "Deployment", value: "Cloud + On-Premise" },
                    { label: "Updates", value: "Automatic, Real-time" },
                ],
            },
            {
                title: "Management",
                icon: "wifi",
                items: [
                    { label: "Dashboard", value: "Web-based, SSO" },
                    { label: "Reporting", value: "SIEM Integration" },
                    { label: "API Access", value: "REST & GraphQL" },
                    { label: "Compliance", value: "SOC 2, ISO 27001" },
                ],
            },
            {
                title: "Licensing",
                icon: "ruler",
                items: [
                    { label: "License Type", value: "Annual Subscription" },
                    { label: "Support", value: "24/7 Priority" },
                    { label: "Trial", value: "30-Day Free" },
                    { label: "Includes", value: "Setup, Training, Support" },
                ],
            },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCISr201S-YQq4i1HElCU0EGE405L5TIa8N80i2b0S1ynAvReBYZfBEzsauwAfWmJhRuT-Y6KYrDoAu_nXm18VYqoeJGmTaDwCexxhLG7PXRZ8li0ZA6bfxLC9QNuPKMDtRTd1-PU7vXlf8dFhuLMyAHBWQDLawZ21EW15kGNUPgn6zfBNwN6Q3UNG8CVpWdsQyaaQo-BEpddqRg7gItBtFtRjvD1Kr3dnh1KDVNzKZj74bH4K0QvwJlUVMH4PkuS4zDglx-fkA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA7r4srcnBVTSTBj24UCHzVLV7a0ZkW-auJlS9rXUmX3Bdpza7KShkZf-wNnSHe5f_skv6dwLmqaRcyDygr_HL-LEnxRPmE5DiHPQFS21NBkpfHrluIvrw7CgeYYTq24TwK9Y-vwrkWJA98Fzd3N0mic-aRK4CEF9Luc29CeAycn0SS302CJrNB4ZdW31aKjBcdeuTgzKRaxzQiBxyQbL6zOwGBSBzQUAULJ6Sohad30D5zK-y6xKgStPs4Rhe0maXQ3RHGLrlaSA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBypIRmnTJeEbCzbsoDr2bIJhVb_5RpqNxrKapoDH8XdtGVmo9kXku0F2TbsmueTcBft6AHKKEmUjWp0DKuobFuiZGqZahV6eU6pCdoMUVCLX1f8YNPiuTQaLwkHtzqUk_zbalRwW-DNuxFC5BHTG_l0vjIM6KBiW2pFtZsQXh7DaGLroPOpemhMB60HYE63r9BG2gmjQNObNfmseoAgwJ7NwdRlxMjiYD_nwTZRUBY2nZ9feRYVCSSRyrJJjzglpc0eN-iu2zsqQ",
        ],
    },
    "yubikey-5-nfc": {
        id: "2",
        slug: "yubikey-5-nfc",
        name: "YubiKey 5 NFC",
        description: "Hardware MFA security key.",
        longDescription:
            "The YubiKey 5 NFC is the gold standard for phishing-resistant multi-factor authentication. Supporting FIDO2/WebAuthn, smart card, OTP, and OpenPGP protocols, it provides strong authentication for hundreds of services via USB-A and NFC — no batteries or network required.",
        price: 55,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCuAnSMzLwTRg884OQlIrhxlPW8-jQB810jepZL02fv8G8UDhRcPY1WsbZiB-z1DkBGNmdkap06jejrX-ejkrVqeespikbjr80HrFFXRh66kTfW1G1Pup0cIq7utljs4ObcTR54u5bZ_jmkZeyMTPJoPJgntAMPW5T_41Z3948s4yX7be8PoqSCJaRULS-QlcF7GxCuSOXkkpJmxvOme0QMAvon06naD0c-cFCYbek8OeljdQLSMqYQpPNsclxDoL_FIjh8QOxmsQ",
        category: "Hardware",
        rating: 4.9,
        reviewCount: 1024,
        inStock: true,
        colors: [
            { name: "USB-A", value: "#1a1a2e", selected: true },
            { name: "USB-C", value: "#4a4a6a" },
        ],
        features: [
            { icon: "shield-check", label: "FIDO2 / WebAuthn" },
            { icon: "bluetooth", label: "NFC Enabled" },
            { icon: "shield-check", label: "Phishing-Proof" },
            { icon: "shield-check", label: "Crushproof" },
        ],
        specs: [
            {
                title: "Authentication",
                icon: "headphones",
                items: [
                    { label: "Protocols", value: "FIDO2, U2F, Smart Card" },
                    { label: "OTP Modes", value: "Yubico OTP, HOTP, TOTP" },
                    { label: "OpenPGP", value: "Supported" },
                    { label: "PIV", value: "Smart Card (x.509)" },
                ],
            },
            {
                title: "Connectivity",
                icon: "wifi",
                items: [
                    { label: "Interface", value: "USB-A + NFC" },
                    { label: "Power", value: "No battery needed" },
                    { label: "NFC Range", value: "< 4cm" },
                    { label: "USB Standard", value: "USB 2.0" },
                ],
            },
            {
                title: "Compatibility",
                icon: "zap",
                items: [
                    { label: "OS Support", value: "Windows, macOS, Linux" },
                    { label: "Mobile", value: "iOS (NFC), Android" },
                    { label: "Browsers", value: "Chrome, Edge, Firefox" },
                    { label: "Services", value: "Google, Microsoft, AWS+" },
                ],
            },
            {
                title: "Physical",
                icon: "ruler",
                items: [
                    { label: "Weight", value: "3g" },
                    { label: "Water Resistance", value: "IP68" },
                    { label: "Crush Resistance", value: "Up to 500N" },
                    { label: "In the Box", value: "Key, Quick Start Guide" },
                ],
            },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCuAnSMzLwTRg884OQlIrhxlPW8-jQB810jepZL02fv8G8UDhRcPY1WsbZiB-z1DkBGNmdkap06jejrX-ejkrVqeespikbjr80HrFFXRh66kTfW1G1Pup0cIq7utljs4ObcTR54u5bZ_jmkZeyMTPJoPJgntAMPW5T_41Z3948s4yX7be8PoqSCJaRULS-QlcF7GxCuSOXkkpJmxvOme0QMAvon06naD0c-cFCYbek8OeljdQLSMqYQpPNsclxDoL_FIjh8QOxmsQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fnbwC66EdvU2aA2LfxvAiVtFxxjuQQ9vJEwRqLqqAHDOpFvDNMXCXaZPS0ONtCwBK6w7PB64d_bBxJTRm40_qcLEeuwxge1lDoH1Y7O6po_yOZzyQBG0FAdRXv4EKxqghavBuRMgTc-V2e5WQXX6V905J_NqSNUSR_KzVEIpLZbN-MtubOwkys-6l-JvLM4Q-RISl13IcQRbY7rDvcdnhZlB1JiC8h3a4DJusre6PC0Ri3bL2SU_wTE3AsAcu8vKK6jaku7ogA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJFQzkdvxUZcPWwv2eGshcBtHsYPJ9gH0GaiUm6a3T5ozA6wp12kJOvVDrkP0IL-Bwqi2jbPHmRKohft2h7Nl9ifF6DAAR-FYxCihg1iM9GF561jxa1vmWh7VYqqjKducF7CK3lbaCJ-7gCGd-QUlbV2aehn7r2PQL5ioXSAh6gA93eHjjz3tyPJ4oXSBVWPVAhPYXeMIG84dVj7ieeStGN0GCRQDTuhvXi1YdfJ_fgz_zIPJjtLeWdsVx7p-Mx5wfSTd74L7cw",
        ],
    },
    "siem-analyzer-suite": {
        id: "3",
        slug: "siem-analyzer-suite",
        name: "SIEM Analyzer Suite",
        description: "Real-time threat monitoring & analytics.",
        longDescription:
            "The SIEM Analyzer Suite provides comprehensive security information and event management for modern enterprises. With AI-powered correlation, real-time dashboards, and automated incident response workflows, it transforms raw log data into actionable threat intelligence — helping your SOC team respond faster and smarter.",
        price: 4999,
        originalPrice: 5999,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBnB5vYovxVfdnCAR_4s5vIqv5iuxfG1oH3rCSCVI7u33Vfp79ru6ooknv9-N4MX7vADHqiQ3EQ8bqxRdKAhKARzPBaUqXG7nX0eHxwe90f0_pDML-Fg0fIYNW-HvKLD4EEffiHIvKYIQQqR0ImEpLuKQ1TuRkszw8s7QMQ89B2f3KA1j-2ahnB7irgepeuNqLA9PrxaaBxiTngD0d8Gh9eSG6kFQ_uBFHyRJvOZl9khL4Pn8oiGg_HKUcnpbodrdyJVQrSMcLg",
        category: "Software",
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        colors: [
            { name: "Team (10 users)", value: "#1a1a2e", selected: true },
            { name: "Enterprise (Unlimited)", value: "#fb9e2d" },
        ],
        features: [
            { icon: "cpu", label: "AI Correlation" },
            { icon: "monitor", label: "Live Dashboard" },
            { icon: "shield-check", label: "Auto-Response" },
            { icon: "wifi", label: "Cloud Native" },
        ],
        specs: [
            {
                title: "Analytics",
                icon: "monitor",
                items: [
                    { label: "Log Ingestion", value: "Up to 500GB/day" },
                    { label: "Correlation Engine", value: "ML-based, Rules Engine" },
                    { label: "Data Retention", value: "12 Months (hot)" },
                    { label: "Query Language", value: "SQL-like Syntax" },
                ],
            },
            {
                title: "Response",
                icon: "zap",
                items: [
                    { label: "Alert Latency", value: "< 30 seconds" },
                    { label: "Playbooks", value: "100+ Prebuilt" },
                    { label: "Automation", value: "SOAR Integration" },
                    { label: "Ticketing", value: "Jira, ServiceNow, PagerDuty" },
                ],
            },
            {
                title: "Integration",
                icon: "wifi",
                items: [
                    { label: "Data Sources", value: "500+ Connectors" },
                    { label: "API", value: "REST, Webhooks, Syslog" },
                    { label: "Cloud Providers", value: "AWS, Azure, GCP" },
                    { label: "Export", value: "CSV, PDF, STIX/TAXII" },
                ],
            },
            {
                title: "Licensing",
                icon: "ruler",
                items: [
                    { label: "License Type", value: "Annual Subscription" },
                    { label: "Users", value: "10 Analysts (Team)" },
                    { label: "Support", value: "24/7 Dedicated CSM" },
                    { label: "Includes", value: "Onboarding, Training" },
                ],
            },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAOBnB5vYovxVfdnCAR_4s5vIqv5iuxfG1oH3rCSCVI7u33Vfp79ru6ooknv9-N4MX7vADHqiQ3EQ8bqxRdKAhKARzPBaUqXG7nX0eHxwe90f0_pDML-Fg0fIYNW-HvKLD4EEffiHIvKYIQQqR0ImEpLuKQ1TuRkszw8s7QMQ89B2f3KA1j-2ahnB7irgepeuNqLA9PrxaaBxiTngD0d8Gh9eSG6kFQ_uBFHyRJvOZl9khL4Pn8oiGg_HKUcnpbodrdyJVQrSMcLg",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBypIRmnTJeEbCzbsoDr2bIJhVb_5RpqNxrKapoDH8XdtGVmo9kXku0F2TbsmueTcBft6AHKKEmUjWp0DKuobFuiZGqZahV6eU6pCdoMUVCLX1f8YNPiuTQaLwkHtzqUk_zbalRwW-DNuxFC5BHTG_l0vjIM6KBiW2pFtZsQXh7DaGLroPOpemhMB60HYE63r9BG2gmjQNObNfmseoAgwJ7NwdRlxMjiYD_nwTZRUBY2nZ9feRYVCSSRyrJJjzglpc0eN-iu2zsqQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDUCISr201S-YQq4i1HElCU0EGE405L5TIa8N80i2b0S1ynAvReBYZfBEzsauwAfWmJhRuT-Y6KYrDoAu_nXm18VYqoeJGmTaDwCexxhLG7PXRZ8li0ZA6bfxLC9QNuPKMDtRTd1-PU7vXlf8dFhuLMyAHBWQDLawZ21EW15kGNUPgn6zfBNwN6Q3UNG8CVpWdsQyaaQo-BEpddqRg7gItBtFtRjvD1Kr3dnh1KDVNzKZj74bH4K0QvwJlUVMH4PkuS4zDglx-fkA",
        ],
    },
    "pentest-toolkit": {
        id: "4",
        slug: "pentest-toolkit",
        name: "PenTest Toolkit",
        description: "Professional penetration testing kit.",
        longDescription:
            "The PenTest Toolkit is a comprehensive bundle for professional security assessors. It includes a preconfigured laptop with Kali Linux, specialized wireless adapters, a network TAP, USB Rubber Ducky, and LAN Turtle — everything you need to conduct thorough physical and network penetration tests following industry-standard methodologies.",
        price: 1299,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCziAlPHJazG5utZJ96j8yXCHobw4P7bFYn_ckajP2lVPCZCE28e_47qoEq819hFzCizYlj8ht3ecuyRmhsAUlOQLzEdnHNZtaEBZJ6BwRjYY0DopOrzzmuJlZuVp9KKIYtbLyGDE0ogIVCEqGkBmBjW__N6hVLo7Khs9IaecVHmcjzsVlLqgm2Lb2nYTpWdcuQ-EMYMNaUytPbeo4lLg58WwZC5eAi81agj5cKNvrP3NLUlagHWBr8lhdZcU48uDyIXAL5xdpQ5w",
        category: "Tools",
        rating: 4.6,
        reviewCount: 156,
        inStock: true,
        colors: [
            { name: "Standard Kit", value: "#6b7280", selected: true },
            { name: "Advanced Kit", value: "#fb9e2d" },
        ],
        features: [
            { icon: "cpu", label: "Kali Pre-loaded" },
            { icon: "wifi", label: "Wi-Fi Adapters" },
            { icon: "shield-check", label: "PTES Ready" },
            { icon: "shield-check", label: "Carry Case" },
        ],
        specs: [
            {
                title: "Hardware",
                icon: "monitor",
                items: [
                    { label: "Laptop", value: "14\" i7, 32GB RAM" },
                    { label: "Wi-Fi Adapters", value: "2x Alfa AWUS036ACH" },
                    { label: "Network TAP", value: "Passive Gigabit" },
                    { label: "USB Tools", value: "Rubber Ducky, LAN Turtle" },
                ],
            },
            {
                title: "Software",
                icon: "zap",
                items: [
                    { label: "OS", value: "Kali Linux 2024.x" },
                    { label: "Frameworks", value: "Metasploit, Burp Suite" },
                    { label: "Scanners", value: "Nmap, Nessus, Nuclei" },
                    { label: "Reporting", value: "Custom Template Engine" },
                ],
            },
            {
                title: "Methodology",
                icon: "wifi",
                items: [
                    { label: "Standards", value: "OWASP, PTES, NIST" },
                    { label: "Cheat Sheets", value: "50+ Quick References" },
                    { label: "Playbooks", value: "Web, Network, Wireless" },
                    { label: "Training Videos", value: "12 Hours Included" },
                ],
            },
            {
                title: "Package",
                icon: "ruler",
                items: [
                    { label: "Case", value: "Pelican Hard Case" },
                    { label: "Weight", value: "4.5 kg (total)" },
                    { label: "Updates", value: "1 Year Free" },
                    { label: "Support", value: "Community + Email" },
                ],
            },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCziAlPHJazG5utZJ96j8yXCHobw4P7bFYn_ckajP2lVPCZCE28e_47qoEq819hFzCizYlj8ht3ecuyRmhsAUlOQLzEdnHNZtaEBZJ6BwRjYY0DopOrzzmuJlZuVp9KKIYtbLyGDE0ogIVCEqGkBmBjW__N6hVLo7Khs9IaecVHmcjzsVlLqgm2Lb2nYTpWdcuQ-EMYMNaUytPbeo4lLg58WwZC5eAi81agj5cKNvrP3NLUlagHWBr8lhdZcU48uDyIXAL5xdpQ5w",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBypIRmnTJeEbCzbsoDr2bIJhVb_5RpqNxrKapoDH8XdtGVmo9kXku0F2TbsmueTcBft6AHKKEmUjWp0DKuobFuiZGqZahV6eU6pCdoMUVCLX1f8YNPiuTQaLwkHtzqUk_zbalRwW-DNuxFC5BHTG_l0vjIM6KBiW2pFtZsQXh7DaGLroPOpemhMB60HYE63r9BG2gmjQNObNfmseoAgwJ7NwdRlxMjiYD_nwTZRUBY2nZ9feRYVCSSRyrJJjzglpc0eN-iu2zsqQ",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fnbwC66EdvU2aA2LfxvAiVtFxxjuQQ9vJEwRqLqqAHDOpFvDNMXCXaZPS0ONtCwBK6w7PB64d_bBxJTRm40_qcLEeuwxge1lDoH1Y7O6po_yOZzyQBG0FAdRXv4EKxqghavBuRMgTc-V2e5WQXX6V905J_NqSNUSR_KzVEIpLZbN-MtubOwkys-6l-JvLM4Q-RISl13IcQRbY7rDvcdnhZlB1JiC8h3a4DJusre6PC0Ri3bL2SU_wTE3AsAcu8vKK6jaku7ogA",
        ],
    },
    "firewall-guardian-x": {
        id: "5",
        slug: "firewall-guardian-x",
        name: "Firewall Guardian X",
        description: "Next-gen network firewall appliance.",
        longDescription:
            "The Firewall Guardian X is a next-generation network security appliance built for mid-to-large enterprises. Featuring deep packet inspection, intrusion prevention, SSL/TLS decryption, and geo-IP filtering — all managed through an intuitive web interface. Protect your perimeter with hardware-accelerated throughput up to 40 Gbps.",
        price: 3499,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJFQzkdvxUZcPWwv2eGshcBtHsYPJ9gH0GaiUm6a3T5ozA6wp12kJOvVDrkP0IL-Bwqi2jbPHmRKohft2h7Nl9ifF6DAAR-FYxCihg1iM9GF561jxa1vmWh7VYqqjKducF7CK3lbaCJ-7gCGd-QUlbV2aehn7r2PQL5ioXSAh6gA93eHjjz3tyPJ4oXSBVWPVAhPYXeMIG84dVj7ieeStGN0GCRQDTuhvXi1YdfJ_fgz_zIPJjtLeWdsVx7p-Mx5wfSTd74L7cw",
        category: "Hardware",
        rating: 4.5,
        reviewCount: 97,
        inStock: true,
        colors: [
            { name: "1U Rackmount", value: "#4a4a4a", selected: true },
            { name: "Desktop Form", value: "#1a1a2e" },
        ],
        features: [
            { icon: "shield-check", label: "IPS / IDS" },
            { icon: "wifi", label: "40 Gbps" },
            { icon: "cpu", label: "Deep Packet" },
            { icon: "shield-check", label: "5y Warranty" },
        ],
        specs: [
            {
                title: "Performance",
                icon: "zap",
                items: [
                    { label: "Throughput", value: "40 Gbps (Firewall)" },
                    { label: "IPS Throughput", value: "12 Gbps" },
                    { label: "VPN Throughput", value: "8 Gbps (IPSec)" },
                    { label: "Concurrent Sessions", value: "10 Million" },
                ],
            },
            {
                title: "Security",
                icon: "headphones",
                items: [
                    { label: "IPS/IDS", value: "Signature + Anomaly" },
                    { label: "SSL Inspection", value: "TLS 1.3 Decryption" },
                    { label: "Anti-Malware", value: "Gateway AV" },
                    { label: "App Control", value: "3,000+ Apps" },
                ],
            },
            {
                title: "Networking",
                icon: "wifi",
                items: [
                    { label: "Interfaces", value: "8x GbE, 4x 10GbE SFP+" },
                    { label: "VPN", value: "IPSec, SSL, WireGuard" },
                    { label: "HA Mode", value: "Active-Active Cluster" },
                    { label: "SD-WAN", value: "Built-in" },
                ],
            },
            {
                title: "Physical",
                icon: "ruler",
                items: [
                    { label: "Form Factor", value: "1U Rackmount" },
                    { label: "Weight", value: "5.4 kg" },
                    { label: "Power", value: "Dual Redundant PSU" },
                    { label: "In the Box", value: "Appliance, Cables, Ears" },
                ],
            },
        ],
        gallery: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJFQzkdvxUZcPWwv2eGshcBtHsYPJ9gH0GaiUm6a3T5ozA6wp12kJOvVDrkP0IL-Bwqi2jbPHmRKohft2h7Nl9ifF6DAAR-FYxCihg1iM9GF561jxa1vmWh7VYqqjKducF7CK3lbaCJ-7gCGd-QUlbV2aehn7r2PQL5ioXSAh6gA93eHjjz3tyPJ4oXSBVWPVAhPYXeMIG84dVj7ieeStGN0GCRQDTuhvXi1YdfJ_fgz_zIPJjtLeWdsVx7p-Mx5wfSTd74L7cw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fnbwC66EdvU2aA2LfxvAiVtFxxjuQQ9vJEwRqLqqAHDOpFvDNMXCXaZPS0ONtCwBK6w7PB64d_bBxJTRm40_qcLEeuwxge1lDoH1Y7O6po_yOZzyQBG0FAdRXv4EKxqghavBuRMgTc-V2e5WQXX6V905J_NqSNUSR_KzVEIpLZbN-MtubOwkys-6l-JvLM4Q-RISl13IcQRbY7rDvcdnhZlB1JiC8h3a4DJusre6PC0Ri3bL2SU_wTE3AsAcu8vKK6jaku7ogA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCuAnSMzLwTRg884OQlIrhxlPW8-jQB810jepZL02fv8G8UDhRcPY1WsbZiB-z1DkBGNmdkap06jejrX-ejkrVqeespikbjr80HrFFXRh66kTfW1G1Pup0cIq7utljs4ObcTR54u5bZ_jmkZeyMTPJoPJgntAMPW5T_41Z3948s4yX7be8PoqSCJaRULS-QlcF7GxCuSOXkkpJmxvOme0QMAvon06naD0c-cFCYbek8OeljdQLSMqYQpPNsclxDoL_FIjh8QOxmsQ",
        ],
    },
};
