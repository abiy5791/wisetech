import { Metadata } from "next";
import { PageLayout } from "@/components/page-layout";
import { ProductsHero } from "@/components/products/products-hero";
import { TrendingCategories } from "@/components/products/trending-categories";
import { LatestArrivals } from "@/components/products/latest-arrivals";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore our curated selection of enterprise-grade cybersecurity products. From endpoint protection and SIEM platforms to hardware security keys and pentest toolkits.",
};

export default function ProductsPage() {
    return (
        <PageLayout>
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
                <ProductsHero />
                <TrendingCategories />
                <LatestArrivals />
            </div>
        </PageLayout>
    );
}
