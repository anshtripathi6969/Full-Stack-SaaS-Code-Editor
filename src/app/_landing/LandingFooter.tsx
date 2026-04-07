"use client";

import { Blocks, Github, Twitter, Linkedin, Heart } from "lucide-react";
import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="relative bg-[#050508] pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans">
            {/* Background Gradients & Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-blue-500/20 blur-xl px-20" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[200px] bg-blue-600/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Brand Section */}
                <div className="flex flex-col items-center mb-16">
                    <Link href="/" className="flex items-center gap-4 group mb-8">
                        <div className="relative">
                            {/* Logo Glow */}
                            <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-3 rounded-2xl ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 shadow-2xl">
                                <Blocks className="size-8 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                        </div>
                        <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-white/80 text-transparent bg-clip-text">
                            AutoSyntax
                        </span>
                    </Link>
                    
                    <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-lg font-light">
                        The elite code editor for the modern web. 
                        Engineered for speed, built for beauty, and crafted for developers who demand excellence.
                    </p>
                </div>

                {/* Simplified Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto mb-20 px-4">
                    {/* Newsletter / Stay Updated */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm">
                        <h4 className="text-lg font-semibold text-white">Join the Community</h4>
                        <p className="text-sm text-gray-500">Get the latest updates on features and performance optimizations.</p>
                        <div className="relative group w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#12121a] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all placeholder:text-gray-600"
                            />
                            <button className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:scale-[1.02] active:scale-95 text-xs font-medium">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Quick Connect */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        <h4 className="text-lg font-semibold text-white">Quick Connect</h4>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {[
                                { label: "GitHub", href: "https://github.com/AnshTripathi6969", icon: Github, color: "hover:text-white" },
                                { label: "Twitter", href: "https://twitter.com/", icon: Twitter, color: "hover:text-blue-400" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/anshtripathi20/", icon: Linkedin, color: "hover:text-blue-600" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 transition-all hover:bg-white/10 ${social.color} group`}
                                >
                                    <social.icon className="size-4" />
                                    <span className="text-sm font-medium">{social.label}</span>
                                </a>
                            ))}
                        </div>
                        <a 
                            href="https://github.com/AnshTripathi6969/Resume-2025/blob/main/AnshTripathi_RESUME_2025.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text group-hover:animate-bounce"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                            View Portfolio & Resume
                        </a>
                    </div>
                </div>

                {/* Final Credits */}
                <div className="border-t border-white/[0.05] pt-12 flex flex-col items-center gap-8">
                    <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-gray-600 flex items-center gap-2">
                            Built with <Heart className="size-3 text-red-500 fill-red-500" /> by 
                            <span className="text-gray-400 font-semibold hover:text-blue-400 transition-colors cursor-default">Ansh Tripathi</span>
                        </p>
                        <p className="text-[10px] text-gray-700 tracking-widest uppercase">
                            © {new Date().getFullYear()} AutoSyntax • All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
