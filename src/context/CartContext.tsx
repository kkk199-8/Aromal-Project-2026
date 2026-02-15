"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export interface CartItem {
    productId: number;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, qty: number) => void;
    clearCart: () => void;
    getQuantity: (id: number) => number;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

/* Prices stored in Lek (integer) — lookup by product ID */
const PRICE_MAP: Record<number, number> = {
    1: 890, 2: 990, 3: 750, 4: 650,
    5: 490, 6: 550, 7: 450,
    8: 390, 9: 350, 10: 290,
    11: 250, 12: 350,
};

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [hydrated, setHydrated] = useState(false);

    // Hydrate from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem("aromal-cart");
            if (stored) {
                setItems(JSON.parse(stored));
            }
        } catch {
            // ignore
        }
        setHydrated(true);
    }, []);

    // Persist to localStorage on change
    useEffect(() => {
        if (hydrated) {
            localStorage.setItem("aromal-cart", JSON.stringify(items));
        }
    }, [items, hydrated]);

    const addItem = useCallback((id: number) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.productId === id);
            if (existing) {
                return prev.map((item) =>
                    item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { productId: id, quantity: 1 }];
        });
    }, []);

    const removeItem = useCallback((id: number) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.productId === id);
            if (existing && existing.quantity > 1) {
                return prev.map((item) =>
                    item.productId === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prev.filter((item) => item.productId !== id);
        });
    }, []);

    const updateQuantity = useCallback((id: number, qty: number) => {
        if (qty <= 0) {
            setItems((prev) => prev.filter((item) => item.productId !== id));
        } else {
            setItems((prev) =>
                prev.map((item) =>
                    item.productId === id ? { ...item, quantity: qty } : item
                )
            );
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const getQuantity = useCallback(
        (id: number) => items.find((item) => item.productId === id)?.quantity || 0,
        [items]
    );

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce(
        (sum, item) => sum + item.quantity * (PRICE_MAP[item.productId] || 0),
        0
    );

    return (
        <CartContext.Provider
            value={{ items, addItem, removeItem, updateQuantity, clearCart, getQuantity, totalItems, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
