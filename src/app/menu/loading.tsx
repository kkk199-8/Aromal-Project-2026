import { ProductCardSkeleton } from "@/components/ui/Skeleton";

export default function MenuLoading() {
    return (
        <main className="min-h-screen bg-transparent">
            {/* Header skeleton */}
            <div className="h-20 bg-white/80 backdrop-blur-md shadow-sm" />

            {/* CategoryBar skeleton */}
            <div className="h-14 bg-gradient-to-r from-[#F28E46] to-[#9DC545] shadow-md" />

            {/* Page content */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
                {/* Search skeleton */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="h-12 bg-white rounded-full animate-pulse" />
                </div>

                {/* Grid skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}
