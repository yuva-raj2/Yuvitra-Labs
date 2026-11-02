import React from "react";
import { Logo } from "@/components/ui/Logo";
import {
  SITE_CONFIG,
  CMMS_MODULES, 
  TECH_STACK,
} from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-gradient-to-b from-[#0E1017] via-[#090A0F] to-[#090A0F]">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center sm:text-left">
          {/* Status Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>{SITE_CONFIG.status}</span>
          </div>

          {/* Main Hero Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.12]">
              Industrial Software &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600">
                Digital Engineering
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl font-normal leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center sm:justify-start">
            <a
              href="#cmms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <span>Explore Yuvitra CMMS</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#brand"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#10121A] border border-[#27272A] hover:border-zinc-600 text-zinc-200 hover:text-white font-medium text-xs tracking-wider uppercase font-mono transition-all"
            >
              Brand Identity System
            </a>
          </div>

          {/* Quick Telemetry Metric Bar */}
          <div className="pt-6 border-t border-[#1E2028] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block">Flagship Product</span>
              <span className="text-zinc-200 font-semibold">{SITE_CONFIG.flagshipProduct}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Database</span>
              <span className="text-zinc-200 font-semibold">PostgreSQL 17 Native</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Backend Backplane</span>
              <span className="text-zinc-200 font-semibold">Spring Boot 3 + GraphQL</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Deployment Target</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Localhost :5432
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Flagship Yuvitra CMMS Showcase */}
      <section id="cmms" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Flagship SaaS Platform
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
                {SITE_CONFIG.flagshipProduct}
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-md">
              A high-precision computerized maintenance management system designed to connect shop-floor telemetry with enterprise asset health.
            </p>
          </div>

          {/* Core Modules Grid */}
          <div id="modules" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CMMS_MODULES.map((module) => (
              <div
                key={module.id}
                className="group p-6 rounded-xl border border-[#27272A] bg-[#10121A]/70 hover:border-zinc-700 hover:bg-[#161922] transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400">
                    {module.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Module 0{CMMS_MODULES.indexOf(module) + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Brand Identity & Design System Showcase (Demonstrates Dark & Light Variant Rule) */}
      <section id="brand" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#0B0D14]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Brand Identity System
            </span>
            <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
              Engineered Vector Assets &amp; Variant Alignment
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
              Consistent utilization of the approved Yuvitra Labs geometric monogram and wordmarks across appropriate background surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dark Variant Card (Appropriate on dark canvas) */}
            <div className="p-6 rounded-xl border border-[#27272A] bg-[#10121A] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Dark Context Variant
                </span>
                <p className="text-xs text-zinc-400">
                  Self-contained obsidian lockup with amber illumination for documentation and dark panels.
                </p>
              </div>
              <div className="py-6 flex items-center justify-center bg-[#07080B] rounded-lg border border-[#1E2028]">
                <Logo variant="dark" width={220} height={50} href="" />
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex justify-between">
                <span>Asset: yl-logo-dark.svg</span>
                <span className="text-amber-400">Dark Surface</span>
              </div>
            </div>

            {/* Light Variant Card (Demonstrating Appropriate Light Background Usage) */}
            <div className="p-6 rounded-xl border border-[#27272A] bg-[#10121A] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Light Context Variant
                </span>
                <p className="text-xs text-zinc-400">
                  Engineered dark graphite typography on high-contrast white container for invoices and PDF reports.
                </p>
              </div>
              <div className="py-6 flex items-center justify-center bg-white rounded-lg border border-zinc-200 shadow-sm">
                <Logo variant="light" width={220} height={50} href="" />
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex justify-between">
                <span>Asset: yl-logo-light.svg</span>
                <span className="text-zinc-300">Light Surface</span>
              </div>
            </div>

            {/* Standalone Monogram & Favicon Card */}
            <div className="p-6 rounded-xl border border-[#27272A] bg-[#10121A] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Monogram &amp; Favicon
                </span>
                <p className="text-xs text-zinc-400">
                  Scalable geometric Y+L interlock with central telemetry nexus hub.
                </p>
              </div>
              <div className="py-6 flex items-center justify-center gap-6 bg-[#07080B] rounded-lg border border-[#1E2028]">
                <div className="flex flex-col items-center gap-2">
                  <Logo variant="monogram" width={48} height={48} href="" />
                  <span className="text-[10px] font-mono text-zinc-500">Monogram</span>
                </div>
                <div className="h-10 w-[1px] bg-zinc-800" />
                <div className="flex flex-col items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/yl-favicon.svg"
                    width={40}
                    height={40}
                    alt="YL Favicon"
                    className="rounded-md"
                  />
                  <span className="text-[10px] font-mono text-zinc-500">Favicon</span>
                </div>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 flex justify-between">
                <span>Asset: yl-monogram.svg</span>
                <span className="text-amber-400">Micro &amp; Macro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Architecture Foundation Baseline */}
      <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Technical Stack
            </span>
            <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
              Approved Architecture Baseline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TECH_STACK.map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg border border-[#27272A] bg-[#10121A]/60 space-y-1.5"
              >
                <span className="text-[11px] font-mono uppercase text-zinc-500 tracking-wider">
                  {item.label}
                </span>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Demo Intake Teaser Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090A0F] to-[#0E1017]">
        <div className="max-w-4xl mx-auto rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-[#10121A] to-amber-500/5 p-8 sm:p-12 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Yuvitra CMMS Pilot Enrollment
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Ready to Modernize Your Industrial Maintenance?
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Inquire about our upcoming Yuvitra CMMS early pilot deployments, technical architecture briefings, and manufacturing digital twin integrations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:contact@yuvitralabs.com"
              className="w-full sm:w-auto px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all"
            >
              Contact Engineering Team
            </a>
            <span className="text-xs font-mono text-zinc-500">
              Coimbatore, India • enterprise@yuvitralabs.com
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
