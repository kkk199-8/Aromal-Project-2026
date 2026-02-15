"use client";

import { useCart } from "@/context/CartContext";
import { Minus, Plus } from "lucide-react";

interface QuantityControlProps {
    productId: number;
}

export function QuantityControl({ productId }: QuantityControlProps) {
    const { getQuantity, addItem, removeItem } = useCart();
    const quantity = getQuantity(productId);

    if (quantity === 0) {
        return (
            <button
                onClick={() => addItem(productId)}
                className="quick-add-btn text-white"
                aria-label="Add to cart"
            >
                <Plus className="w-5 h-5" />
            </button>
        );
    }

    return (
        <div className="quantity-control">
            <button onClick={() => removeItem(productId)} aria-label="Decrease quantity">
                <Minus className="w-4 h-4" />
            </button>
            <span className="count">{quantity}</span>
            <button onClick={() => addItem(productId)} aria-label="Increase quantity">
                <Plus className="w-4 h-4" />
            </button>
        </div>
    );
}
