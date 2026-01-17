"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const codePreviewVariants = {
        hidden: { opacity: 0, y: 40, rotateX: 10 },
        visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: "easeOut" } },
    };

    return (
        <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-32">
            <motion.div
                className="container mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 font-medium"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>The Ultimate SaaS Code Editor</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-bold mb-8 tracking-tight perspective-1000"
                >
                    <span className="text-white inline-block mr-2">
                        Code Brilliantly
                    </span>
                    <br />
                    <span className="text-blue-500 inline-block">
                        Build Faster
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
                >
                    A powerful, collaborative, and beautiful online code editor for modern developers.
                    Write, execute, and share code in 10+ languages instantly.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/editor"
                        className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            Start Coding Free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href="/snippets"
                        className="px-8 py-4 bg-[#1e1e2e] border border-gray-800 rounded-xl text-gray-300 font-semibold hover:bg-[#262637] transition-all hover:scale-105"
                    >
                        Explore Snippets
                    </Link>
                </motion.div>

                {/* Floating Code Preview / Decoration */}
                <motion.div
                    variants={codePreviewVariants}
                    className="mt-20 relative max-w-5xl mx-auto transform-style-3d hover:scale-[1.02] transition-transform duration-700"
                >
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
                </motion.div>
            </motion.div>
        </div>
    );
}

export default HeroSection;
