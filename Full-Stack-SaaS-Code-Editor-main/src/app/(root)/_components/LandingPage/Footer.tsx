import Link from "next/link";
import { Blocks } from "lucide-react";

function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0a0a0f] pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/10 rounded-xl">
                            <Blocks className="size-6 text-blue-400" />
                        </div>
                        <span className="text-xl font-bold text-white">AutoSyntax</span>
                    </div>
                    <div className="flex gap-6 text-gray-400">
                        <Link href="/snippets" className="hover:text-blue-400 transition-colors">Snippets</Link>
                        <Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
                        <Link href="/editor" className="hover:text-blue-400 transition-colors">Editor</Link>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} AutoSyntax. All rights reserved. Built with ❤️ for developers.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
