"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import React, { useEffect, useRef, useState } from "react";
import { THEMES } from "../_constants";
import { AnimatePresence, motion } from "framer-motion";
import { CircleOff, Cloud, Github, Laptop, Moon, Palette, Sun, ChevronDown } from "lucide-react";
import useMounted from "@/hooks/useMounted";

const THEME_ICONS: Record<string, React.ReactNode> = {
  "vs-dark": <Moon className="size-4" />,
  "vs-light": <Sun className="size-4" />,
  "github-dark": <Github className="size-4" />,
  monokai: <Laptop className="size-4" />,
  "solarized-dark": <Cloud className="size-4" />,
};

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const { theme, setTheme } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTheme = THEMES.find((t) => t.id === theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 bg-[#12121a]/80 
        rounded-xl transition-all duration-200 border border-white/5 hover:border-white/10"
      >
        {/* Color dot */}
        <div
          className="w-3.5 h-3.5 rounded-full ring-2 ring-white/10 group-hover:ring-white/20 transition-all shadow-inner"
          style={{ background: currentTheme?.color }}
        />

        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
          {currentTheme?.label}
        </span>

        <ChevronDown
          className={`size-3.5 text-gray-500 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-full min-w-[220px] bg-[#0d0d14]/95 
            backdrop-blur-xl rounded-xl border border-white/[0.06] shadow-2xl py-2 z-50"
          >
            <div className="px-3 pb-2 mb-2 border-b border-white/[0.04]">
              <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Theme</p>
            </div>

            {THEMES.map((t, index) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`
                relative group w-full flex items-center gap-3 px-3 py-2 mx-1 rounded-lg transition-all duration-200
                ${theme === t.id ? "bg-white/5 text-white" : "text-gray-400 hover:text-white hover:bg-white/[0.03]"}
              `}
                onClick={() => setTheme(t.id)}
              >
                {/* icon */}
                <div
                  className={`
                flex items-center justify-center size-7 rounded-lg transition-all duration-200
                ${theme === t.id ? "bg-blue-500/10 text-blue-400" : "bg-white/5 text-gray-500"}
              `}
                >
                  {THEME_ICONS[t.id] || <CircleOff className="w-3.5 h-3.5" />}
                </div>
                
                <span className="flex-1 text-left text-sm">{t.label}</span>

                {/* color indicator */}
                <div
                  className="w-3 h-3 rounded-full ring-1 ring-white/10"
                  style={{ background: t.color }}
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default ThemeSelector;