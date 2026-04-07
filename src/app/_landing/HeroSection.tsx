"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";

const CODE_LINES = [
  { num: 1, tokens: [{ text: "const", c: "text-purple-400" }, { text: " server", c: "text-blue-300" }, { text: " = ", c: "text-gray-500" }, { text: "require", c: "text-yellow-400" }, { text: "(", c: "text-gray-400" }, { text: "'express'", c: "text-emerald-400" }, { text: ")", c: "text-gray-400" }] },
  { num: 2, tokens: [{ text: "const", c: "text-purple-400" }, { text: " app", c: "text-blue-300" }, { text: " = ", c: "text-gray-500" }, { text: "server", c: "text-yellow-400" }, { text: "()", c: "text-gray-400" }] },
  { num: 3, tokens: [] },
  { num: 4, tokens: [{ text: "app", c: "text-blue-300" }, { text: ".", c: "text-gray-500" }, { text: "get", c: "text-yellow-400" }, { text: "(", c: "text-gray-400" }, { text: "'/'", c: "text-emerald-400" }, { text: ", ", c: "text-gray-500" }, { text: "(req, res)", c: "text-orange-300" }, { text: " => {", c: "text-purple-400" }] },
  { num: 5, tokens: [{ text: "  res", c: "text-blue-300" }, { text: ".", c: "text-gray-500" }, { text: "json", c: "text-yellow-400" }, { text: "({ ", c: "text-gray-400" }, { text: "status:", c: "text-red-300" }, { text: " 'blazing fast'", c: "text-emerald-400" }, { text: " })", c: "text-gray-400" }] },
  { num: 6, tokens: [{ text: "})", c: "text-purple-400" }] },
  { num: 7, tokens: [] },
  { num: 8, tokens: [{ text: "app", c: "text-blue-300" }, { text: ".", c: "text-gray-500" }, { text: "listen", c: "text-yellow-400" }, { text: "(", c: "text-gray-400" }, { text: "3000", c: "text-orange-400" }, { text: ")", c: "text-gray-400" }] },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, { opacity: 0, y: 30, duration: 0.6 })
        .from(headlineRef.current, { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(mockupRef.current, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          rotateX: 8,
          duration: 1,
          ease: "power2.out",
        }, "-=0.3");

      // Blinking cursor animation
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          opacity: 0,
          repeat: -1,
          yoyo: true,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-0"
    >
      {/* Ambient Gradients */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-200px] w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[-200px] w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm cursor-default"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            v2.0 — Fast Remote Execution
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05]"
        >
          Code with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Superpowers
          </span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
        >
          The world&apos;s most advanced browser-based IDE.
          Built for speed, designed for pros, powered by high-performance remote compilers.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/editor"
            className="group relative px-8 py-4 bg-white text-[#0a0a0f] rounded-2xl font-bold text-lg shadow-2xl shadow-white/10 hover:shadow-white/20 transition-all hover:scale-[1.03] active:scale-95"
          >
            <span className="flex items-center gap-2">
              Start Coding
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/snippets"
            className="px-8 py-4 bg-white/[0.04] border border-white/10 rounded-2xl text-gray-300 font-medium hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all text-lg"
          >
            View Snippets
          </Link>
        </div>
      </div>

      {/* IDE Mockup */}
      <div
        ref={mockupRef}
        className="mt-20 mx-auto max-w-4xl w-full relative z-10"
        style={{ perspective: "1200px" }}
      >
        <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c14]/90 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04] bg-[#0c0c14]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.03] rounded-lg border border-white/5">
              <span className="text-[10px] text-gray-500 font-mono">server.js</span>
            </div>
            <div className="w-16" />
          </div>

          {/* Code area */}
          <div className="p-6 font-mono text-sm leading-7">
            {CODE_LINES.map((line) => (
              <div key={line.num} className="flex">
                <span className="w-8 text-right text-gray-700 select-none mr-6 text-xs leading-7">
                  {line.num}
                </span>
                <span>
                  {line.tokens.map((token, i) => (
                    <span key={i} className={token.c}>
                      {token.text}
                    </span>
                  ))}
                  {line.num === 8 && (
                    <span ref={cursorRef} className="inline-block w-[2px] h-4 bg-blue-400 ml-0.5 align-middle" />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom status bar */}
          <div className="flex items-center justify-between px-5 py-2 border-t border-white/[0.04] bg-[#0c0c14]">
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-600">JavaScript</span>
              <span className="text-[10px] text-gray-600">UTF-8</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-emerald-400/80">Ready</span>
            </div>
          </div>
        </div>

        {/* Glow under mockup */}
        <div className="absolute -bottom-8 inset-x-8 h-16 bg-blue-500/10 blur-3xl rounded-full" />
      </div>
    </section>
  );
}
