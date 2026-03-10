"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Users, Zap } from "lucide-react";

const STATS = [
    {
        label: "Developers",
        value: "10K+",
        icon: Users,
        color: "from-blue-500 to-cyan-500",
    },
    {
        label: "Snippets Run",
        value: "5M+",
        icon: Code2,
        color: "from-purple-500 to-pink-500",
    },
    {
        label: "Languages",
        value: "20+",
        icon: Globe,
        color: "from-green-500 to-emerald-500",
    },
    {
        label: "Execution Speed",
        value: "<100ms",
        icon: Zap,
        color: "from-orange-500 to-red-500",
    },
];

export default function StatsSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />

                            <div className="relative flex flex-col items-center text-center gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                    <p className="text-gray-400">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
