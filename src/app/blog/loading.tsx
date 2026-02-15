import { Skeleton } from "@/components/ui/Skeleton";
import { Header } from "@/components/layout/Header";

export default function BlogLoading() {
    return (
        <main className="min-h-screen bg-transparent">
            {/* Header placeholder to avoid layout shift */}
            <div className="h-20 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-40" />

            {/* Hero Skeleton */}
            <section className="py-14 md:py-20 px-4 text-center">
                <div className="flex flex-col items-center gap-4">
                    <Skeleton className="h-12 w-48 md:w-64 rounded-xl" />
                    <Skeleton className="h-5 w-72 md:w-96 rounded-lg" />
                </div>
            </section>

            {/* Articles Grid Skeleton */}
            <section className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-transparent">
                            {/* Image Skeleton */}
                            <Skeleton className="aspect-[16/10] w-full rounded-none" />

                            {/* Content Skeleton */}
                            <div className="p-5 md:p-6 space-y-4">
                                <Skeleton className="h-3 w-32" />
                                <Skeleton className="h-6 w-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-2/3" />
                                </div>
                                <Skeleton className="h-4 w-24 pt-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
