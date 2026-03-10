"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Share2,
    Terminal,
    Cpu,
    Layout,
    GitBranch
} from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast Information",
        description: "Built on Next.js 15 for sub-millisecond page loads and instant interactions.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Share2,
        title: "Real-time Collaboration",
        description: "Share your code instantly with a generated URL and collaborate in real-time.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Terminal,
        title: "Universal Language Support",
        description: "First-class support for 10+ programming languages including C++, Python, Rust, and Go.",
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: Cpu,
        title: "AI Code Autocompletion",
        description: "Smart code suggestions powered by advanced LLMs to speed up your development.",
        color: "from-emerald-500 to-green-500"
    },
    {
        icon: Layout,
        title: "Customizable Workspaces",
        description: "5+ professional themes including Drifter, Monokai, and GitHub Dark.",
        color: "from-red-500 to-rosy-500"
    },
    {
        icon: GitBranch,
        title: "Version Control Built-in",
        description: "Track changes, snippets history and manage your code versions effortlessly.",
        color: "from-indigo-500 to-blue-500"
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-24 relative bg-[#0a0a0f]" id="features">

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Everything you need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            build faster
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Packed with advanced features designed for power users.
                        Experience the future of coding in the browser.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:bg-white/10 transition-colors"
                        >
                            {/* Gradient Hover Border */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`} />
                            </div>

                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
