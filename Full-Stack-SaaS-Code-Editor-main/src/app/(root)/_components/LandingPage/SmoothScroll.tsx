"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Optional: Reset scroll on reload
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;
