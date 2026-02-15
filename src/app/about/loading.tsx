import { Skeleton } from "@/components/ui/Skeleton";

export default function AboutLoading() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="h-20 bg-white/80 backdrop-blur-md shadow-sm fixed top-0 w-full z-40" />

            {/* Hero */}
            <section className="py-20 md:py-32 px-4 text-center">
                <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
                    <Skeleton className="h-8 w-32 rounded-full" />
                    <Skeleton className="h-16 w-full md:w-3/4 rounded-2xl" />
                    <Skeleton className="h-6 w-full md:w-2/3 rounded-xl" />
                </div>
            </section>

            {/* Story Section */}
            <section className="section-spacing">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                        <div className="space-y-6">
                            <Skeleton className="h-10 w-48 rounded-xl" />
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                            <div className="space-y-4">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-4/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
