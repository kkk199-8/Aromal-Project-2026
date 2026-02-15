"use client";

import { useRef, useEffect } from "react";
import { CATEGORIES } from "@/data/products";

interface CategoryBarProps {
    activeCategory: string;
    onCategoryClick: (id: string) => void;
}

export function CategoryBar({ activeCategory, onCategoryClick }: CategoryBarProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});

    // Scroll active tab into view when activeCategory changes
    useEffect(() => {
        const activeTab = tabsRef.current[activeCategory];
        const container = scrollContainerRef.current;

        if (activeTab && container) {
            const containerWidth = container.offsetWidth;
            const tabWidth = activeTab.offsetWidth;
            const tabLeft = activeTab.offsetLeft;

            // Calculate scroll position to center the tab
            const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth"
            });
        }
    }, [activeCategory]);

    return (
        <div className="sticky top-[80px] z-30 gradient-menu shadow-md">
            <div className="max-w-7xl mx-auto">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-1 overflow-x-auto px-4 py-3 scrollbar-hide justify-start md:justify-center"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            ref={(el) => { tabsRef.current[cat.id] = el; }}
                            onClick={() => onCategoryClick(cat.id)}
                            className={`
                                px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider
                                whitespace-nowrap cursor-pointer transition-all duration-200 flex-shrink-0
                                ${activeCategory === cat.id
                                    ? "bg-white text-orange shadow-sm scale-105"
                                    : "bg-transparent text-white hover:bg-white/15"
                                }
                            `}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
