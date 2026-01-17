"use client";

import { useEffect, useRef } from "react";

function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Particles
        const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2, // Subtle movement
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2,
                alpha: Math.random() * 0.5
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Gradient Background
            const time = Date.now() * 0.0002;
            //        const gradient = ctx.createLinearGradient(0, 0, width, height);
            //        gradient.addColorStop(0, "#0a0a0f");
            //        gradient.addColorStop(1, "#12121a");
            //        ctx.fillStyle = gradient;
            //        ctx.fillRect(0, 0, width, height);

            // Subtle moving gradient blobs
            const gradient1 = ctx.createRadialGradient(
                width * 0.2 + Math.sin(time) * 100,
                height * 0.3 + Math.cos(time) * 50,
                0,
                width * 0.2 + Math.sin(time) * 100,
                height * 0.3 + Math.cos(time) * 50,
                800
            );
            gradient1.addColorStop(0, "rgba(59, 130, 246, 0.03)"); // Blue
            gradient1.addColorStop(1, "transparent");

            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, width, height);

            const gradient2 = ctx.createRadialGradient(
                width * 0.8 - Math.cos(time * 0.8) * 100,
                height * 0.7 + Math.sin(time * 0.9) * 50,
                0,
                width * 0.8 - Math.cos(time * 0.8) * 100,
                height * 0.7 + Math.sin(time * 0.9) * 50,
                600
            );
            gradient2.addColorStop(0, "rgba(168, 85, 247, 0.03)"); // Purple
            gradient2.addColorStop(1, "transparent");

            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, width, height);

            // Draw Particles
            ctx.fillStyle = "white";
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.globalAlpha = 1;

            requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
        />
    );
}

export default Background;
