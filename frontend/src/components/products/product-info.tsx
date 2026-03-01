"use client";

import { useState } from "react";
import {
    Star,
    StarHalf,
    Heart,
    BatteryFull,
    Bluetooth,
    AudioLines,
    ShieldCheck,
    Wifi,
    Cpu,
    HeartPulse,
    Camera,
    Navigation,
    PenTool,
    Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";
import { type ProductDetail } from "./product-data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "battery-full": BatteryFull,
    bluetooth: Bluetooth,
    "audio-lines": AudioLines,
    "shield-check": ShieldCheck,
    wifi: Wifi,
    cpu: Cpu,
    "heart-pulse": HeartPulse,
    camera: Camera,
    navigation: Navigation,
    "pen-tool": PenTool,
    monitor: Monitor,
};

function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
        <div className="flex text-primary">
            {Array.from({ length: fullStars }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            {hasHalf && <StarHalf className="h-5 w-5 fill-current" />}
        </div>
    );
}

interface ProductInfoProps {
    product: ProductDetail;
}

export function ProductInfo({ product }: ProductInfoProps) {
    const [selectedColor, setSelectedColor] = useState(
        product.colors.findIndex((c) => c.selected) || 0
    );

    return (
        <div className="flex flex-col">
            <AnimatedSection variant="fade-left" delay={0}>
                <div className="mb-2 flex items-center gap-3">
                    <StarRating rating={product.rating} />
                    <span className="text-sm font-medium text-muted-foreground">
                        ({product.reviewCount} Reviews)
                    </span>
                </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={100}>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
                    {product.name}
                </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={200}>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {product.longDescription}
                </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-left" delay={300}>
                <div className="mb-8 flex items-baseline gap-4 flex-wrap">
                    <span className="text-4xl font-bold text-foreground">
                        Birr {product.price.toLocaleString()}.00
                    </span>
                    {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                            Birr {product.originalPrice.toLocaleString()}.00
                        </span>
                    )}
                    {product.inStock && (
                        <span className="rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs font-bold text-green-500">
                            In Stock
                        </span>
                    )}
                </div>
            </AnimatedSection>

            {/* Color selector */}
            <AnimatedSection variant="fade-left" delay={350}>
                <div className="mb-8">
                    <h3 className="mb-3 text-sm font-semibold text-foreground">Color</h3>
                    <div className="flex gap-3">
                        {product.colors.map((color, index) => (
                            <button
                                key={color.name}
                                onClick={() => setSelectedColor(index)}
                                className={cn(
                                    "h-10 w-10 rounded-full border-2 transition-all duration-200",
                                    selectedColor === index
                                        ? "border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-background scale-110"
                                        : "border-border hover:border-primary/40"
                                )}
                                style={{ backgroundColor: color.value }}
                                title={color.name}
                            />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Action buttons */}
            <AnimatedSection variant="fade-up" delay={400}>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                        size="lg"
                        className="flex-1 rounded-xl py-6 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        Buy Now
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="flex-1 rounded-xl py-6 text-base font-bold border-2 transition-all hover:border-primary hover:bg-primary/5"
                    >
                        Add to Cart
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-xl py-6 px-6 text-muted-foreground transition-all hover:border-red-500/50 hover:bg-red-500/5 hover:text-red-500"
                    >
                        <Heart className="h-5 w-5" />
                    </Button>
                </div>
            </AnimatedSection>

            {/* Feature highlights */}
            <AnimatedSection variant="fade-up" delay={500}>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
                    {product.features.map((feature) => {
                        const IconComponent = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.label}
                                className="flex flex-col items-center gap-2 text-center group"
                            >
                                <div className="rounded-full bg-secondary p-3 text-foreground transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                                    {IconComponent ? (
                                        <IconComponent className="h-5 w-5" />
                                    ) : (
                                        <ShieldCheck className="h-5 w-5" />
                                    )}
                                </div>
                                <span className="text-xs font-semibold text-muted-foreground">
                                    {feature.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </AnimatedSection>
        </div>
    );
}
