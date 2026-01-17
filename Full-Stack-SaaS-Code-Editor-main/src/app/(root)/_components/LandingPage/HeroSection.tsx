"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Badge
        tl.from(".hero-badge", {
            y: 20,
            opacity: 0,
            duration: 0.8
        });

        // Title characters stagger
        const chars = titleRef.current?.querySelectorAll(".char");
        if (chars && chars.length > 0) {
            tl.from(chars, {
                y: 40,
                opacity: 0,
                rotateX: -45,
                stagger: 0.02,
                duration: 1
            }, "-=0.4");
        }

        // Subtitle
        tl.from(subtitleRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.6");

        // Buttons
        tl.from(buttonsRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.8
        }, "-=0.6");

        // Code Preview Tilt Effect (3D)
        tl.from(previewRef.current, {
            y: 40,
            opacity: 0,
            rotateX: 10,
            duration: 1.2,
            ease: "power2.out"
        }, "-=0.6");

        // Magnetic Button Effect
        const buttons = document.querySelectorAll(".magnetic-btn");
        buttons.forEach((btn) => {
            btn.addEventListener("mousemove", (e: any) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3 });
            });
            btn.addEventListener("mouseleave", () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        });

    }, { scope: containerRef });

    const splitText = (text: string) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char inline-block">{char === " " ? "\u00A0" : char}</span>
        ));
    };

    return (
        <div ref={containerRef} className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-32">
            <div className="container mx-auto px-4 text-center">
                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 font-medium">
                    <Sparkles className="w-4 h-4" />
                    <span>The Ultimate SaaS Code Editor</span>
                </div>

                {/* Title */}
                <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-8 tracking-tight perspective-1000">
                    <div className="text-white inline-block">
                        {splitText("Code Brilliantly")}
                    </div>
                    <br />
                    <div className="text-blue-500 inline-block">
                        {splitText("Build Faster")}
                    </div>
                </h1>

                {/* Subtitle */}
                <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
                    A powerful, collaborative, and beautiful online code editor for modern developers.
                    Write, execute, and share code in 10+ languages instantly.
                </p>

                {/* CTA Buttons */}
                <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/editor"
                        className="magnetic-btn group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            Start Coding Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="/snippets"
                        className="magnetic-btn px-8 py-4 bg-[#1e1e2e] border border-gray-800 rounded-xl text-gray-300 font-semibold hover:bg-[#262637] transition-all hover:scale-105"
                    >
                        Explore Snippets
                    </Link>
                </div>

                {/* Floating Code Preview / Decoration */}
                <div ref={previewRef} className="mt-20 relative max-w-5xl mx-auto transform-style-3d hover:scale-[1.02] transition-transform duration-700">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
                    <div className="relative bg-[#0a0a0f] border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden backdrop-blur-sm">
                        {/* Mock Window Controls */}
                        <div className="flex items-center gap-2 mb-4 px-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>

                        {/* Mock Code */}
                        <div className="text-left font-mono text-sm md:text-base p-4 overflow-x-auto bg-[#1e1e2e]/50 rounded-xl">
                            <pre>
                                <code className="text-gray-300">
                                    <span className="text-purple-400">function</span> <span className="text-blue-400">createFuture</span>() {"{"}
                                    {"\n"}  <span className="text-purple-400">const</span> stack = [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Convex"</span>, <span className="text-green-400">"Clerk"</span>];
                                    {"\n"}  <span className="text-purple-400">return</span> stack.map(tech ={">"} tech.toNextLevel());
                                    {"\n"}{"}"}
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;
