import type { ReactNode } from "react";

interface EditorChromeProps {
  tabs: string[];
  activeTab?: number;
  className?: string;
  children: ReactNode;
}

/** macOS-style window chrome shared by the hero and playground editor mockups. */
export function EditorChrome({ tabs, activeTab = 0, className = "", children }: EditorChromeProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-midnight shadow-2xl ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex gap-1">
          {tabs.map((tab, i) => (
            <span
              key={tab}
              className={`rounded-md px-2.5 py-1 font-mono text-xs ${
                i === activeTab ? "bg-white/10 text-white" : "text-white/40"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
