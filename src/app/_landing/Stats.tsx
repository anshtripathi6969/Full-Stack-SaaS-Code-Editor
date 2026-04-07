"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Globe, Users, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { label: "Developers", numericValue: 100, prefix: "", suffix: "+", icon: Users },
  { label: "Snippets Run", numericValue: 500, prefix: "", suffix: "+", icon: Code2 },
  { label: "Languages", numericValue: 20, prefix: "", suffix: "+", icon: Globe },
  { label: "Execution Speed", numericValue: 100, prefix: "<", suffix: "ms", icon: Zap },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const cards = sectionRef.current?.querySelectorAll(".stat-card");
    if (!cards) return;

    gsap.set(cards, { opacity: 0, y: 30 });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        // Animate cards in
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
        });

        // Animate counters
        counterRefs.current.forEach((el, i) => {
          if (!el) return;
          const stat = STATS[i];
          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.numericValue,
            duration: 1.5,
            delay: i * 0.12,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = `${stat.prefix}${Math.round(obj.val)}${stat.suffix}`;
            },
          });
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Horizontal rules */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center py-8 px-4"
            >
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                <span ref={(el) => { counterRefs.current[index] = el; }}>
                  {stat.prefix}0{stat.suffix}
                </span>
              </h3>
              <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
