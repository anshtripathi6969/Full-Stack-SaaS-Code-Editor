"use client";

import { getExecutionResult, useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";
import { api } from "../../../../convex/_generated/api";

function RunButton() {
  const { user } = useUser();
  const { runCode, language, isRunning } = useCodeEditorStore();
  const saveExecution = useMutation(api.codeExecutions.saveExecution);

  const handleRun = async () => {
    await runCode();
    const result = getExecutionResult();

    if (user && result) {
      await saveExecution({
        language,
        code: result.code,
        output: result.output || undefined,
        error: result.error || undefined,
      });
    }
  };

  return (
    <motion.button
      onClick={handleRun}
      disabled={isRunning}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl overflow-hidden
        disabled:cursor-not-allowed focus:outline-none
        border transition-all duration-300
        ${isRunning 
          ? "border-blue-500/30 bg-blue-500/10" 
          : "border-emerald-500/20 bg-emerald-500/10 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/5"
        }
      `}
    >
      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">Executing...</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-semibold text-emerald-400">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
}
export default RunButton;