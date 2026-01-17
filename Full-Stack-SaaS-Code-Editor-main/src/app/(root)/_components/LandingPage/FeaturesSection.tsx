"use client";

import { Code2, Cpu, Globe, Zap, Layout, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <Code2 className="w-8 h-8 text-blue-400" />,
        title: "Multi-Language Support",
        description: "Write code in JavaScript, Python, Java, C++, and 10+ other languages with full syntax highlighting.",
    },
    {
        icon: <Zap className="w-8 h-8 text-purple-400" />,
        title: "Instant Execution",
        description: "Run your code instantly in the cloud with our high-performance Piston runtime.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-pink-400" />,
        title: "AI-Ready Architecture",
        description: "Built on modern stack (Next.js 15), ready for AI integrations and smart coding assistants.",
    },
    {
        icon: <Globe className="w-8 h-8 text-green-400" />,
        title: "Social Coding",
        description: "Share your snippets, star favorites, and engage with a global community of developers.",
    },
    {
        icon: <Layout className="w-8 h-8 text-amber-400" />,
        title: "Beautiful Themes",
        description: "Choose from 5+ premium themes including VS Dark, Monokai, and Solarized.",
    },
    {
        icon: <Share2 className="w-8 h-8 text-cyan-400" />,
        title: "Easy Sharing",
        description: "One-click snippet sharing with generated links and social previews.",
    },
];

function FeaturesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="relative bg-[#0a0a0f] py-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a0f] via-blue-950/5 to-[#0a0a0f]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                            Everything you need
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Powerful features to supercharge your development workflow.
                        Designed for modern developers who want to build faster.
                    </p>
                </div>

                {/* Vertical Grid Container */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="feature-card bg-[#1e1e2e]/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-[#1e1e2e] transition-all duration-300 group hover:-translate-y-2 hover:border-blue-500/30"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}

export default FeaturesSection;
