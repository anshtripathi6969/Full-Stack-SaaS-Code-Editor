"use client";

import { Blocks, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";


export default function LandingFooter() {
    return (
        <footer className="relative bg-[#0a0a0f] pt-24 pb-12 overflow-hidden border-t border-white/5 font-sans">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0a0a0f] to-[#0a0a0f]" />
            <div className="absolute w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -top-20 -right-20 pointer-events-none" />
            <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] bottom-0 -left-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-3 group mb-6 w-fit">
                            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2.5 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300 shadow-lg shadow-blue-500/0 group-hover:shadow-blue-500/20">
                                <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                                AutoSyntax
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm text-base">
                            The intelligent code editor that understands your workflow. Built for developers who demand speed, precision, and beauty.
                        </p>

                        {/* Newsletter Input - Visual Only */}
                        <div className="flex flex-col gap-3 max-w-sm">
                            <h4 className="text-sm font-semibold text-gray-300">Stay updated</h4>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#12121a] border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all placeholder:text-gray-600"
                                />
                                <button className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors shadow-lg shadow-blue-600/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </button>
                            </div>
                            <p className="text-xs text-gray-600">No spam, unsubscribe anytime.</p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Product */}
                        <div>
                            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Product</h3>
                            <ul className="space-y-4">
                                <li><Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Features</Link></li>
                                <li><Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Pricing</Link></li>
                                <li><Link href="/editor" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Editor</Link></li>
                                <li><Link href="/changelog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Changelog</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Resources</h3>
                            <ul className="space-y-4">
                                <li><Link href="/docs" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Documentation</Link></li>
                                <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Blog</Link></li>
                                <li><Link href="/community" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Community</Link></li>
                                <li><Link href="/help" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Help Center</Link></li>
                            </ul>
                        </div>

                        {/* Social / Legal */}
                        <div>
                            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Connect</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://github.com/AnshTripathi6969" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                        <Github className="size-4 group-hover:text-white transition-colors" />
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                                        <Twitter className="size-4 group-hover:text-blue-400 transition-colors" />
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/anshtripathi20/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors text-sm flex items-center gap-2 group">
                                        <Linkedin className="size-4 group-hover:text-blue-600 transition-colors" />
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/AnshTripathi6969/Resume-2025/blob/main/AnshTripathi_RESUME_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text size-4 group-hover:text-emerald-400 transition-colors"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} AutoSyntax. Built with ❤️ by Ansh Tripathi.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
