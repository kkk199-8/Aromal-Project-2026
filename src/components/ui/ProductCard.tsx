"use client";

import Image from "next/image";
import { type Product, formatPrice } from "@/data/products";
import { QuantityControl } from "@/components/ui/QuantityControl";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-base text-charcoal leading-tight">
                    {product.name}
                </h3>
                <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed flex-1">
                    {product.description}
                </p>
                <div className="flex items-end justify-between mt-3">
                    <p className="font-bold text-charcoal text-sm">
                        {formatPrice(product.price)}
                    </p>
                    <QuantityControl productId={product.id} />
                </div>
            </div>
        </div>
    );
}
