"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface Product {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
    className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
    return (
        <div
            className={cn(
                "group flex flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5",
                className
            )}
        >
            <Link
                href={`/products/${product.slug}`}
                className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-secondary"
            >
                <img
                    alt={product.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src={product.image}
                />
                <button
                    className="absolute right-3 top-3 rounded-full bg-card/80 backdrop-blur-sm p-1.5 text-muted-foreground shadow-sm transition-colors hover:text-red-500"
                    onClick={(e) => e.preventDefault()}
                >
                    <Heart className="h-5 w-5" />
                </button>
                {product.badge && (
                    <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                        {product.badge}
                    </span>
                )}
            </Link>
            <div className="flex flex-1 flex-col">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-auto flex items-end justify-between pt-4">
                    {product.originalPrice ? (
                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground line-through">
                                Birr {product.originalPrice.toLocaleString()}
                            </span>
                            <span className="text-lg font-bold text-red-500">
                                Birr {product.price.toLocaleString()}
                            </span>
                        </div>
                    ) : (
                        <span className="text-lg font-bold text-foreground">
                            Birr {product.price.toLocaleString()}
                        </span>
                    )}
                    <button className="rounded-full bg-secondary p-2.5 text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
                        <ShoppingCart className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
