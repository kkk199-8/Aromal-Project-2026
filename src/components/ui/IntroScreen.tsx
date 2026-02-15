"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export function IntroScreen({ children }: { children: React.ReactNode }) {
    const [phase, setPhase] = useState<"playing" | "fading" | "revealing" | "done">("playing");
    const [isClient, setIsClient] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setIsClient(true);
        if (sessionStorage.getItem("aromal-intro-seen")) {
            setPhase("done");
        }
    }, []);

    // Start video playback
    useEffect(() => {
        if (!isClient || phase !== "playing") return;

        const video = videoRef.current;
        if (!video) return;

        const startPlayback = () => {
            video.play().catch(() => {
                sessionStorage.setItem("aromal-intro-seen", "1");
                setPhase("done");
            });
        };

        if (video.readyState >= 3) {
            startPlayback();
        } else {
            video.addEventListener("canplay", startPlayback, { once: true });
        }

        return () => video.removeEventListener("canplay", startPlayback);
    }, [isClient, phase]);

    // Video ends → smooth transition
    const handleVideoEnd = useCallback(() => {
        setPhase("fading");
        sessionStorage.setItem("aromal-intro-seen", "1");
        setTimeout(() => {
            setPhase("revealing");
            setTimeout(() => setPhase("done"), 900);
        }, 700);
    }, []);

    // Safety timeout
    useEffect(() => {
        if (!isClient || phase === "done") return;
        const t = setTimeout(() => {
            sessionStorage.setItem("aromal-intro-seen", "1");
            setPhase("done");
        }, 15000);
        return () => clearTimeout(t);
    }, [isClient, phase]);

    // During hydration (first client render), we must match the server render exactly.
    // The server always renders the playing overlay.
    if (phase === "done") return <>{children}</>;

    return (
        <>
            <div
                className={`fixed inset-0 z-[9999] transition-opacity ${phase === "fading" || phase === "revealing"
                    ? "opacity-0 pointer-events-none duration-700 ease-out"
                    : "opacity-100 duration-300"
                    }`}
                style={{ backgroundColor: "#4A4A4A" }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                    preload="auto"
                >
                    <source
                        src="/assets/Loading Whisk AROMAL Video.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div
                className={`transition-all ${phase === "revealing"
                    ? "opacity-100 translate-y-0 duration-[800ms] ease-out"
                    : "opacity-0 translate-y-6"
                    }`}
            >
                {children}
            </div>
        </>
    );
}
