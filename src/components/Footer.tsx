"use client";

import { usePathname } from "next/navigation";

import { Blocks } from "lucide-react";

function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by developers</span>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/anshtripathi20/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-gray-400 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Contact Me
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>

            <a
              href="https://github.com/AnshTripathi6969/Resume-2025/blob/main/AnshTripathi_RESUME_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-gray-400 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Resume
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-emerald-400 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>

            <a
              href="https://github.com/AnshTripathi6969"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden text-gray-400 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                GitHub
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-yellow-400 to-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
