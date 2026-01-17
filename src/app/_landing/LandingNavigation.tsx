import Link from "next/link";
import { Blocks } from "lucide-react";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";

function LandingNavigation() {
  const { isAuthenticated } = useConvexAuth();

  return (
    <div className="sticky top-0 z-50 w-full mb-4">
      <div className="flex items-center justify-between bg-[#0a0a0f]/80 backdrop-blur-xl p-6 lg:mx-20 rounded-b-2xl border-b border-white/5">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Logo hover effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 
                group-hover:opacity-100 transition-all duration-500 blur-xl"
            />

            {/* Logo */}
            <div
              className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1
              ring-white/10 group-hover:ring-white/20 transition-all"
            >
              <Blocks className="size-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
            </div>

            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                AutoSyntax
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Cognitive Code Editor
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/editor"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            Editor
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
          </Link>
          
          <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-4">
              {isAuthenticated ? (
                  <UserButton />
              ) : (
                <div className="flex bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all rounded-lg p-[1px]">
                     <div className="bg-[#0a0a0f] hover:bg-transparent transition-all rounded-lg px-0.5 py-0.5" >
                        <SignInButton mode="modal">
                            <button className="px-4 py-1.5 text-sm font-medium text-blue-100 mix-blend-plus-lighter">
                                Sign In
                            </button>
                        </SignInButton>
                     </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingNavigation;
