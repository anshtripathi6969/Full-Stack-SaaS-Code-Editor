import { CodeEditorState } from "./../types/index";
import { LANGUAGE_CONFIG } from "@/app/editor/_constants";
import { create } from "zustand";

const getInitialState = () => {
  // if we're on the server, return default values
  if (typeof window === "undefined") {
    return {
      language: "javascript",
      fontSize: 16,
      theme: "vs-dark",
    };
  }

  // if we're on the client, return values from local storage bc localStorage is a browser API.
  const savedLanguage = localStorage.getItem("editor-language") || "javascript";
  const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
  const savedFontSize = localStorage.getItem("editor-font-size") || 16;

  return {
    language: savedLanguage,
    theme: savedTheme,
    fontSize: Number(savedFontSize),
  };
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
  const initialState = getInitialState();

  return {
    ...initialState,
    output: "",
    isRunning: false,
    error: null,
    editor: null,
    executionResult: null,
    isShareDialogOpen: false,

    setIsShareDialogOpen: (isOpen: boolean) => set({ isShareDialogOpen: isOpen }),

    getCode: () => get().editor?.getValue() || "",

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setEditor: (editor: any) => {
      const savedCode = localStorage.getItem(`editor-code-${get().language}`);
      if (savedCode) editor.setValue(savedCode);

      set({ editor });
    },

    setTheme: (theme: string) => {
      localStorage.setItem("editor-theme", theme);
      set({ theme });
    },

    setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language: string) => {
      // Save current language code before switching
      const currentCode = get().editor?.getValue();
      if (currentCode) {
        localStorage.setItem(`editor-code-${get().language}`, currentCode);
      }

      localStorage.setItem("editor-language", language);

      set({
        language,
        output: "",
        error: null,
      });
    },

    runCode: async () => {
      const { language, getCode } = get();
      const code = getCode();

      if (!code) {
        set({ error: "Please enter some code" });
        return;
      }

      set({ isRunning: true, error: null, output: "" });

      try {
        const compiler = LANGUAGE_CONFIG[language].wandboxCompiler;

        // Preprocess Java code to remove 'public' from class declarations
        // This is necessary because Wandbox uses a fixed filename (prog.java)
        // and Java requires the filename to match the public class name.
        let executionCode = code;
        if (language === "java") {
          executionCode = code.replace(/^\s*public\s+class\b/gm, "class");
        }

        const response = await fetch("https://wandbox.org/api/compile.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            compiler: compiler,
            code: executionCode,
          }),
        });

        const data = await response.json();

        console.log("data back from wandbox:", data);

        // handle API-level and compilation errors
        if (data.status !== "0") {
          const error = data.compiler_error || data.program_error || data.compiler_message || data.program_message || "Execution error";
          set({ error, executionResult: { code, output: "", error } });
          return;
        }

        // if we get here, execution was successful
        const output = data.program_output || data.program_message || "";

        set({
          output: output.trim(),
          error: null,
          executionResult: {
            code,
            output: output.trim(),
            error: null,
          },
        });
      } catch (error) {
        console.log("Error running code:", error);
        set({
          error: "Error running code",
          executionResult: { code, output: "", error: "Error running code" },
        });
      } finally {
        set({ isRunning: false });
      }
    },
  };
});

export const getExecutionResult = () => useCodeEditorStore.getState().executionResult;
