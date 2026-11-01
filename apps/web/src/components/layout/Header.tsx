import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-zinc-950 text-sm tracking-wider">
            YL
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-100">
            {SITE_CONFIG.name}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            {SITE_CONFIG.flagshipProduct} Showcase
          </span>
        </div>
      </div>
    </header>
  );
}
