"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    productName: string;
    badge?: string;
}

export function ProductGallery({ images, productName, badge }: ProductGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary border border-border shadow-sm">
                {badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground uppercase tracking-wider shadow-lg shadow-primary/20">
                        {badge}
                    </span>
                )}
                <img
                    alt={`${productName} - Main View`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    src={images[selectedIndex]}
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={cn(
                            "relative aspect-square overflow-hidden rounded-lg bg-secondary transition-all duration-200",
                            selectedIndex === index
                                ? "border-2 border-primary shadow-md shadow-primary/10"
                                : "border border-border hover:border-primary/40"
                        )}
                    >
                        <img
                            alt={`${productName} - View ${index + 1}`}
                            className="h-full w-full object-cover object-center"
                            src={image}
                        />
                    </button>
                ))}
                <button className="relative aspect-square overflow-hidden rounded-lg border border-border bg-secondary hover:border-primary/40 transition-colors flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
