"use client";

import { useEffect, useRef } from "react";
import { Blocks, Github, Twitter, Linkedin, Heart } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LandingFooter() {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".footer-content", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                    once: true,
                },
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="relative bg-[#050508] pt-24 pb-12 overflow-hidden border-t border-white/[0.04]">
            {/* Top gradient line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="footer-content max-w-5xl mx-auto px-6 relative z-10">
                {/* Brand */}
                <div className="text-center mb-16">
                    <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                        <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2.5 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300">
                            <Blocks className="size-6 text-blue-400" />
                        </div>
                        <span className="text-2xl font-bold text-white">
                            AutoSyntax
                        </span>
                    </Link>

                    <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed mt-4">
                        The elite code editor for the modern web.
                        Engineered for speed, built for beauty.
                    </p>
                </div>

                {/* Links row */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                    {[
                        { label: "GitHub", href: "https://github.com/AnshTripathi6969", icon: Github },
                        { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/anshtripathi20/", icon: Linkedin },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-600 hover:text-white transition-all hover:bg-white/[0.04] text-sm"
                        >
                            <social.icon className="size-4" />
                            {social.label}
                        </a>
                    ))}
                    <a
                        href="https://github.com/AnshTripathi6969/Resume-2025/blob/main/AnshTripathi_RESUME_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-600 hover:text-emerald-400 transition-all hover:bg-white/[0.04] text-sm"
                    >
                        Resume
                    </a>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/[0.04] pt-8 flex flex-col items-center gap-3">
                    <p className="text-xs text-gray-700 flex items-center gap-1.5">
                        Built with <Heart className="size-3 text-red-500/60 fill-red-500/60" /> by
                        <span className="text-gray-500 font-medium">Ansh Tripathi</span>
                    </p>
                    <p className="text-[10px] text-gray-800 tracking-widest uppercase">
                        © {new Date().getFullYear()} AutoSyntax
                    </p>
                </div>
            </div>
        </footer>
    );
}
