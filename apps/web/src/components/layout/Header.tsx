"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#27272A] bg-[#090A0F]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
        {/* Left: Reusable Brand Logo */}
        <div className="flex items-center gap-3">
          <Logo variant="primary" width={175} height={40} priority href="#home" />
        </div>

        {/* Center: Desktop Navigation Links (All 8 links) */}
        <nav
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-zinc-400"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-zinc-100 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Medium-screen Navigation Links (truncated or compact for laptops) */}
        <nav
          className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-medium text-zinc-400"
          aria-label="Compact Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-zinc-100 py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Telemetry Badge & Primary CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden 2xl:inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-[11px] font-mono text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{SITE_CONFIG.flagshipProduct} Showcase</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            Request a Demo
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#contact"
            className="sm:hidden inline-flex items-center justify-center px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-[11px] uppercase font-mono tracking-wider"
          >
            Demo
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#27272A] bg-[#10121A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-xs font-mono text-amber-400 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>{SITE_CONFIG.flagshipProduct} Showcase</span>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-2.5 rounded-md bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all"
            >
              Request a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
