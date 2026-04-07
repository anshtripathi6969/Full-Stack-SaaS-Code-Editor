"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Zap,
  Share2,
  Terminal,
  Cpu,
  Layout,
  GitBranch,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Next.js 15 for sub-millisecond page loads and instant interactions.",
    accent: "text-blue-400",
    glow: "bg-blue-500",
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    description: "Share your code instantly with a generated URL and collaborate in real-time.",
    accent: "text-purple-400",
    glow: "bg-purple-500",
  },
  {
    icon: Terminal,
    title: "10+ Languages",
    description: "First-class support for C++, Python, Rust, Go, Java, and more.",
    accent: "text-amber-400",
    glow: "bg-amber-500",
  },
  {
    icon: Cpu,
    title: "Cloud Execution",
    description: "Compile and run your code instantly on secure, lightning-fast cloud servers.",
    accent: "text-emerald-400",
    glow: "bg-emerald-500",
  },
  {
    icon: Layout,
    title: "Premium Themes",
    description: "5+ professional themes including Drifter, Monokai, and GitHub Dark.",
    accent: "text-pink-400",
    glow: "bg-pink-500",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Track changes, snippets history and manage your code versions effortlessly.",
    accent: "text-cyan-400",
    glow: "bg-cyan-500",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const cards = gridRef.current?.querySelectorAll(".feature-card");
    if (!cards || cards.length === 0) return;

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 40 });
    gsap.set(headingRef.current, { opacity: 0, y: 30 });

    // Heading animation
    ScrollTrigger.create({
      trigger: headingRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(headingRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    });

    // Feature cards staggered reveal
    ScrollTrigger.create({
      trigger: gridRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative bg-[#0a0a0f]" id="features">
      {/* Ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/70 font-semibold mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need to{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              build faster
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light">
            Packed with advanced features designed for power users.
          </p>
        </div>

        {/* Feature Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] 
                hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 cursor-default"
            >
              {/* Glow on hover */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 ${feature.glow} opacity-0 group-hover:opacity-[0.07] blur-3xl rounded-full transition-opacity duration-700`}
              />

              <div className="relative">
                <div
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <feature.icon className={`w-5 h-5 ${feature.accent}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
