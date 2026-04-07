export const dynamic = "force-dynamic";

import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto px-6 py-4">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}