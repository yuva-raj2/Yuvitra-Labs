import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#090A0F] text-zinc-400">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="primary" width={180} height={41} />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Engineering modern computerized maintenance management, digital twin architectures, and telemetry-driven workflows for industrial operations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Coimbatore, India • Industrial SaaS</span>
            </div>
          </div>

          {/* Column 1: Flagship Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Flagship SaaS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-amber-400 font-medium">
                  {SITE_CONFIG.flagshipProduct}
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Asset Hierarchy &amp; Tree
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Work Order Kanban
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Preventive Maintenance
                </span>
              </li>
              <li>
                <span className="text-zinc-400 hover:text-zinc-200 transition-colors">
                  Machine BOM &amp; Spares
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Tech Stack
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-zinc-400">Next.js 16 (App Router)</li>
              <li className="text-zinc-400">React 19 &amp; TypeScript</li>
              <li className="text-zinc-400">Tailwind CSS v4</li>
              <li className="text-zinc-400">Java 17 &amp; Spring Boot 3</li>
              <li className="text-zinc-400">PostgreSQL 17 (Port 5432)</li>
            </ul>
          </div>

          {/* Column 3: Platform Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-zinc-400">Monorepo Architecture</li>
              <li className="text-zinc-400">Stateless JWT + RBAC</li>
              <li className="text-zinc-400">Multi-Tenant Row Isolation</li>
              <li className="text-zinc-400">Strict Factual Standards</li>
              <li>
                <Link
                  href="#brand"
                  className="text-amber-400/90 hover:text-amber-300 transition-colors"
                >
                  Brand Design System &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#1E2028] bg-[#07080B] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#10121A] border border-[#27272A] text-zinc-400 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              PostgreSQL 17 Native Active
            </span>
            <span>Flagship: {SITE_CONFIG.flagshipProduct}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
