import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8 px-6 text-center text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
        </div>
        <div className="font-mono text-zinc-500">
          Flagship Product: {SITE_CONFIG.flagshipProduct}
        </div>
      </div>
    </footer>
  );
}
