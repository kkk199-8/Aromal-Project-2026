"use client";

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
    return (
        <div
            className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] rounded-xl ${className}`}
        />
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
            <Skeleton className="aspect-[4/3] rounded-none" />
            <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-full" />
                <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-8 w-20 rounded-lg" />
                </div>
            </div>
        </div>
    );
}
