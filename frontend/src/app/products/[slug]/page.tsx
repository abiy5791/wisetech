import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/page-layout";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductInfo } from "@/components/products/product-info";
import { ProductSpecs } from "@/components/products/product-specs";
import { RelatedProducts } from "@/components/products/related-products";
import { productDetails } from "@/components/products/product-data";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = productDetails[slug];

    if (!product) {
        return { title: "Product Not Found" };
    }

    return {
        title: product.name,
        description: product.longDescription,
    };
}

export function generateStaticParams() {
    return Object.keys(productDetails).map((slug) => ({
        slug,
    }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = productDetails[slug];

    if (!product) {
        notFound();
    }

    return (
        <PageLayout>
            {/* Breadcrumb */}
            <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
                <nav className="flex text-sm text-muted-foreground">
                    <ol className="flex items-center gap-1.5">
                        <li>
                            <Link
                                className="hover:text-foreground transition-colors"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                        </li>
                        <li>
                            <Link
                                className="hover:text-foreground transition-colors"
                                href="/products"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                        </li>
                        <li>
                            <Link
                                className="hover:text-foreground transition-colors"
                                href="/products"
                            >
                                {product.category}
                            </Link>
                        </li>
                        <li>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
                        </li>
                        <li className="font-medium text-foreground">{product.name}</li>
                    </ol>
                </nav>
            </div>

            {/* Product Grid */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <ProductGallery
                        images={product.gallery}
                        productName={product.name}
                        badge={product.badge}
                    />
                    <ProductInfo product={product} />
                </div>
            </div>

            {/* Specs */}
            <ProductSpecs product={product} />

            {/* Related Products */}
            <RelatedProducts currentSlug={slug} />
        </PageLayout>
    );
}
