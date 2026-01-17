import { Blocks, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function LandingFooter() {
    return (
        <footer className="relative pt-24 pb-12 bg-[#0a0a0f] overflow-hidden">

            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div
                                className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
                ring-white/10 group-hover:ring-white/20 transition-all"
                            >
                                <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                                AutoSyntax
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            The next generation code editor tailored for modern developers.
                            Write, collaborate, and deploy in seconds.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Platform</h3>
                        <ul className="space-y-4">
                            <li><Link href="/features" className="text-gray-400 hover:text-blue-400 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
                            <li><Link href="/editor" className="text-gray-400 hover:text-blue-400 transition-colors">Editor</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-6">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-blue-400">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-blue-700">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} AutoSyntax. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
