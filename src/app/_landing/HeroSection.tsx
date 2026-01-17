"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden px-4 md:px-0">

            {/* Background Glows */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 transform translate-x-1/2 right-1/2 w-[1000px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 hover:bg-white/10 transition-colors cursor-default"
                >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-gray-300 font-medium">
                        v2.0 is now live: AI Code Completion
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight"
                >
                    Code with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                        Superpowers
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light"
                >
                    The world's most advanced browser-based IDE. Built for speed, designed for pros, and powered by next-gen AI.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        href="/editor"
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white font-semibold shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="flex items-center gap-2 text-lg">
                            Start Coding Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 rounded-xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                    </Link>

                    <Link
                        href="/pricing"
                        className="px-8 py-4 bg-[#0a0a0f] border border-white/10 rounded-xl text-gray-300 font-medium hover:text-white hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-lg"
                    >
                        View Pricing
                    </Link>
                </motion.div>
            </div>

            {/* Floating UI Mockup */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="mt-20 mx-auto max-w-6xl w-full perspective-2000 relative z-10"
                style={{ perspective: "1200px" }}
            >
                <div className="relative rounded-xl border border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10 overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#1a1a2e]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="mx-auto flex items-center gap-2 px-3 py-1 bg-black/20 rounded-lg">
                            <Terminal className="w-3 h-3 text-blue-400" />
                            <span className="text-xs text-gray-400 font-mono">Run: main.tsx</span>
                        </div>
                    </div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
                        <div className="font-mono text-sm space-y-1">
                            <div className="flex gap-4"><span className="text-gray-600 select-none">1</span> <span className="text-purple-400">import</span> <span className="text-blue-400">React</span> <span className="text-purple-400">from</span> <span className="text-green-400">"react"</span>;</div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">2</span> </div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">3</span> <span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">App</span>() {"{"}</div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">4</span> <span className="pl-4 text-purple-400">return</span> (</div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">5</span> <span className="pl-8 text-blue-400">&lt;div&gt;</span>Hello World<span className="text-blue-400">&lt;/div&gt;</span></div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">6</span> <span className="pl-4">);</span></div>
                            <div className="flex gap-4"><span className="text-gray-600 select-none">7</span> {"}"}</div>
                        </div>

                        <div className="relative flex items-center justify-center bg-black/40 rounded-xl border border-white/5 border-dashed">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl mx-auto mb-4 animate-pulse shadow-lg shadow-blue-500/20" />
                                <div className="text-sm text-gray-400 font-medium">Render Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
