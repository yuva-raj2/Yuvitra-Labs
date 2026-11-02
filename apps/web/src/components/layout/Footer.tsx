import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#090A0F] text-zinc-400">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Info & Positioning (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="primary" width={180} height={41} href="#home" />
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Industrial software, custom digital platforms, AI-powered assistants, and intelligent automation solutions engineered to modernize manufacturing and enterprise operations.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{SITE_CONFIG.location}</span>
            </div>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Initiate Engineering Consultation</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>

          {/* Column 1: Flagship Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Flagship Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="#products"
                  className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
                >
                  {SITE_CONFIG.flagshipProduct}
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Asset Digital Twin
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Work Order Dispatch
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Preventive Engine
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Machine BOM &amp; Spares
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Industrial Software &amp; CMMS
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Custom Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  AI Assistants &amp; Automation
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  GraphQL &amp; REST APIs
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Telemetry Ingestion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="#industries"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Discrete Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="#industries"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Automotive Components
                </Link>
              </li>
              <li>
                <Link
                  href="#industries"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Textile &amp; Processing
                </Link>
              </li>
              <li>
                <Link
                  href="#industries"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Food &amp; Cold Chain
                </Link>
              </li>
              <li>
                <Link
                  href="#industries"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Warehousing &amp; Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="#about"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  About Yuvitra Labs
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Our Work &amp; Domains
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Engagement Models
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  Contact &amp; Inquiries
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
          <div className="flex items-center gap-4 text-[11px]">
            <span>{SITE_CONFIG.tagline}</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="hidden sm:inline">{SITE_CONFIG.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
