"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { AlertTriangle, CheckCircle, Clock, Copy, Terminal, Sparkles } from "lucide-react";
import { useState } from "react";
import RunningCodeSkeleton from "./RunningCodeSkeleton";

function OutputPanel() {
  const { output, error, isRunning } = useCodeEditorStore();
  const [isCopied, setIsCopied] = useState(false);

  const hasContent = error || output;

  const handleCopy = async () => {
    if (!hasContent) return;
    await navigator.clipboard.writeText(error || output);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#0d0d14] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">
      {/* Top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#0d0d14]/80 backdrop-blur-sm border-b border-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/5">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-white/90">Output</span>
          {isRunning && (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-medium text-blue-400">Running</span>
            </div>
          )}
        </div>

        {hasContent && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-500 hover:text-white bg-white/5 
            rounded-lg border border-white/5 hover:border-white/10 transition-all"
          >
            {isCopied ? (
              <>
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Output Area */}
      <div
        className="p-4 h-[600px] overflow-auto font-mono text-sm"
      >
        {isRunning ? (
          <RunningCodeSkeleton />
        ) : error ? (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-red-400" />
            </div>
            <div className="space-y-2 min-w-0">
              <div className="text-sm font-semibold text-red-400">Execution Error</div>
              <pre className="whitespace-pre-wrap text-red-400/70 text-xs leading-relaxed break-words">{error}</pre>
            </div>
          </div>
        ) : output ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/10">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-emerald-400">Execution Successful</span>
            </div>
            <pre className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">{output}</pre>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-600">
            <div className="relative mb-6">
              <div className="absolute -inset-4 bg-blue-500/5 rounded-full blur-2xl" />
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <Clock className="w-7 h-7 text-gray-600" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500 mb-1">No output yet</p>
            <p className="text-xs text-gray-700 flex items-center gap-1.5">
              Hit <Sparkles className="w-3 h-3 text-blue-500" /> <span className="text-blue-500/80 font-medium">Run</span> to execute your code
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;