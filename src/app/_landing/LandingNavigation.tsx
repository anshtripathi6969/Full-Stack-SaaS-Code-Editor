"use client";

import Link from "next/link";
import { Blocks } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

function LandingNavigation() {
    const { isAuthenticated } = useConvexAuth();

    return (
        <div className="sticky top-0 z-50 w-full">
            <div className="flex items-center justify-between bg-[#0a0a0f]/70 backdrop-blur-2xl px-8 py-5 lg:mx-20 rounded-b-2xl border-b border-white/[0.04]">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2.5 rounded-xl ring-1 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-300">
                        <Blocks className="size-5 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-bold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
                            AutoSyntax
                        </span>
                        <span className="text-[9px] text-gray-600 font-medium tracking-widest uppercase">
                            Code Editor
                        </span>
                    </div>
                </Link>

                <div className="flex items-center gap-6">
                    <Link
                        href="/editor"
                        className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
                    >
                        Editor
                    </Link>

                    <div className="ml-2 pl-4 border-l border-white/[0.06] flex items-center gap-4">
                        {isAuthenticated ? (
                            <UserButton />
                        ) : (
                            <div className="flex">
                                <SignInButton mode="modal">
                                    <button className="px-5 py-2 text-sm font-medium text-white bg-white/[0.06] border border-white/10 rounded-xl hover:bg-white/[0.1] hover:border-white/20 transition-all">
                                        Sign In
                                    </button>
                                </SignInButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingNavigation;
