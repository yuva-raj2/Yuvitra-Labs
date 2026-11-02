import React from "react";
import {
  SITE_CONFIG,
  SERVICE_PILLARS,
  CMMS_MODULES,
  CMMS_CAPABILITIES,
  INDUSTRIES,
  WHY_YUVITRA,
  DEVELOPMENT_APPROACH,
  SOLUTION_DOMAINS,
  ENGAGEMENT_MODELS,
} from "@/lib/constants";
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* =========================================================================
          1. HERO SECTION (#home)
          ========================================================================= */}
      <section
        id="home"
        className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-gradient-to-b from-[#0E1017] via-[#090A0F] to-[#090A0F]"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto space-y-8 relative z-10 text-center sm:text-left">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-mono tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Industrial Software &amp; Digital Engineering</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[1.08]">
              Engineering Smarter Businesses.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 block sm:inline">
                Building Better Industries.
              </span>
            </h1>
            <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center sm:justify-start">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <span>Explore Our Services</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#10121A] border border-[#27272A] hover:border-zinc-600 text-zinc-200 hover:text-white font-medium text-xs tracking-wider uppercase font-mono transition-all"
            >
              Explore Yuvitra CMMS
            </a>
          </div>

          {/* Telemetry Highlight Bar (Clean, professional, factual) */}
          <div className="pt-8 border-t border-[#1E2028] grid grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Flagship Product</span>
              <span className="text-zinc-200 font-semibold text-sm mt-0.5 block">{SITE_CONFIG.flagshipProduct}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Core Disciplines</span>
              <span className="text-zinc-200 font-semibold text-sm mt-0.5 block">CMMS, Custom Web &amp; AI</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Architecture Stack</span>
              <span className="text-zinc-200 font-semibold text-sm mt-0.5 block">Next.js • Spring Boot • PostgreSQL</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase tracking-wider text-[11px]">Engineering Hub</span>
              <span className="text-emerald-400 font-semibold text-sm mt-0.5 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Coimbatore, India
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THREE PRIMARY SERVICE PILLARS (#services)
          ========================================================================= */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
                Engineering Services
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
                Our Services &amp; Capabilities
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                We combine deep industrial domain knowledge with modern full-stack software craftsmanship to engineer reliable systems that scale.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Consult an Engineering Lead</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Three Primary Service Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl border border-[#27272A] bg-[#10121A]/80 p-8 flex flex-col justify-between hover:border-zinc-700 transition-all hover:bg-[#131622] group shadow-sm"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400 font-semibold">
                      {pillar.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">{pillar.highlight}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/80">
                      {pillar.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-2 border-t border-zinc-800/80 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Core Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-300">
                      {pillar.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold select-none">&bull;</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 group-hover:text-amber-400 transition-colors"
                  >
                    <span>Request Scoping &amp; Details</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Foundation Highlights */}
          <div className="rounded-xl border border-[#27272A] bg-[#0E1017] p-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6">
              Full-Lifecycle Technical Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block">01 / Type-Safe Contracts</span>
                <p className="text-zinc-400 text-[11px]">Strict GraphQL &amp; TypeScript boundaries ensure zero runtime data misalignment.</p>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block">02 / Relational Integrity</span>
                <p className="text-zinc-400 text-[11px]">PostgreSQL with ACID transactions, normalized schemas, and audited triggers.</p>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block">03 / Enterprise Security</span>
                <p className="text-zinc-400 text-[11px]">Multi-tenant row-level security, stateless JWT auth, and role-based access.</p>
              </div>
              <div className="space-y-1">
                <span className="text-amber-400 font-semibold block">04 / Zero Vendor Lock-in</span>
                <p className="text-zinc-400 text-[11px]">Standard containerized or native services with complete source code ownership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. PROMINENT FLAGSHIP SHOWCASE: YUVITRA CMMS (#products)
          ========================================================================= */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#0B0D14]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>Flagship Industrial SaaS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
                {SITE_CONFIG.flagshipProduct}
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                A modern Computerized Maintenance Management System connecting factory shop-floor telemetry with enterprise asset health to eliminate unplanned downtime.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-zinc-950 font-semibold text-xs tracking-wider uppercase font-mono transition-all shadow-sm"
              >
                Schedule CMMS Walkthrough
              </a>
            </div>
          </div>

          {/* Core Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CMMS_MODULES.map((module) => (
              <div
                key={module.id}
                className="group p-6 sm:p-8 rounded-xl border border-[#27272A] bg-[#10121A]/80 hover:border-zinc-700 hover:bg-[#151822] transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-amber-500/20 bg-amber-500/10 text-amber-400 font-semibold">
                    {module.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {module.code}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Key Industrial Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CMMS_CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border border-[#27272A] bg-[#0E1017] space-y-2"
              >
                <div className="text-amber-400 font-mono text-xs font-semibold">
                  0{i + 1} / Advantage
                </div>
                <h4 className="text-sm font-bold text-zinc-200">{cap.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INDUSTRIES WE SERVE (#industries)
          ========================================================================= */}
      <section id="industries" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              Target Verticals
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Tailored software architectures built for high-consequence industrial, manufacturing, and operational environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="p-6 sm:p-7 rounded-xl border border-[#27272A] bg-[#10121A]/70 hover:border-zinc-700 hover:bg-[#141720] transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                    {ind.category}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-100">
                    {ind.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>Vertical 0{i + 1}</span>
                  <span className="text-amber-400/80">Tailored Workflows</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY YUVITRA LABS
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#0B0D14]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              The Yuvitra Advantage
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Why Yuvitra Labs
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              How we differentiate ourselves from generic marketing agencies and rigid, legacy off-the-shelf software packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_YUVITRA.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#27272A] bg-[#10121A]/80 hover:border-zinc-700 transition-all space-y-3"
              >
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR DEVELOPMENT APPROACH
          ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              Engineering Lifecycle
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Our Development Approach
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              A transparent, predictable, and verifiable 4-stage engineering methodology designed to deliver mission-critical software on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEVELOPMENT_APPROACH.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl border border-[#27272A] bg-[#10121A]/70 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono font-extrabold text-amber-400">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800 text-zinc-400">
                      {step.tagline}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-zinc-100">
                    {step.phase}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
                  <span className="text-zinc-400 block font-medium">Deliverable:</span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. OUR WORK & SOLUTION DOMAINS (#work)
          ========================================================================= */}
      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#0B0D14]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
                Engineering Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
                Our Work &amp; Solution Domains
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                Demonstrated core competencies across industrial SaaS architectures, telemetry ingestion, and enterprise portals.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              Zero unverified claims &bull; Factual technical architectures
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SOLUTION_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="p-6 sm:p-8 rounded-xl border border-[#27272A] bg-[#10121A]/80 hover:border-zinc-700 hover:bg-[#141720] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                    {domain.category}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-100">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {domain.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap gap-2">
                  {domain.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800/70 border border-zinc-700/60 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PRICING & ENGAGEMENT MODELS (#pricing)
          ========================================================================= */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#090A0F]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              Transparent Cooperation
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Engagement Models
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Scope-driven, predictable partnership models tailored for early-stage validation, full-scale industrial modernization, or continuous development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const isPopular = "popular" in model && model.popular;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border p-8 flex flex-col justify-between transition-all ${
                    isPopular
                      ? "border-amber-500/50 bg-[#12141F] shadow-lg shadow-amber-500/5 relative"
                      : "border-[#27272A] bg-[#10121A]/70 hover:border-zinc-700"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-amber-500 text-zinc-950 font-mono font-bold text-[10px] uppercase tracking-wider">
                      Most Requested
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block">
                        {model.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-zinc-100">
                        {model.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {model.bestFor}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-zinc-800">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 block">
                        Included In Scope:
                      </span>
                      <ul className="space-y-2.5 text-xs text-zinc-400">
                        {model.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">&check;</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-zinc-800/80">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-mono font-semibold text-xs uppercase tracking-wider transition-all ${
                        isPopular
                          ? "bg-amber-500 hover:bg-amber-400 text-zinc-950"
                          : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                      }`}
                    >
                      {model.ctaText} &rarr;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. ABOUT YUVITRA LABS (#about)
          ========================================================================= */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-[#27272A] bg-[#0B0D14]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              Company Background
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              About Yuvitra Labs
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
            <p>
              Based in Coimbatore, Tamil Nadu—one of India&apos;s most dynamic engineering and industrial manufacturing hubs—<strong className="text-zinc-200">Yuvitra Labs</strong> was founded to bridge the gap between heavy industrial operations and modern software engineering.
            </p>
            <p>
              We believe industrial software should be as fast, intuitive, and enjoyable to use as the best consumer applications, while retaining the uncompromising reliability, deterministic performance, and strict data integrity demanded by factory managers and reliability engineers.
            </p>
            <p>
              Whether developing our flagship <strong className="text-amber-400 font-semibold">{SITE_CONFIG.flagshipProduct}</strong>, building custom digital platforms, or deploying autonomous AI assistants, we adhere to strict architectural rigor: type-safe API contracts, domain-driven design, and battle-tested technology foundations.
            </p>
          </div>

          {/* Pillars of Engineering Philosophy */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-amber-400">Principle 01</span>
              <h4 className="text-base font-bold text-zinc-200">Reliability Over Hype</h4>
              <p className="text-xs text-zinc-400">We prioritize rock-solid system stability, data durability, and uptime over fragile software trends.</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-amber-400">Principle 02</span>
              <h4 className="text-base font-bold text-zinc-200">Type-Safe Architecture</h4>
              <p className="text-xs text-zinc-400">Zero ambiguity. Strict schemas across database, backend services, and frontend UI components.</p>
            </div>
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase text-amber-400">Principle 03</span>
              <h4 className="text-base font-bold text-zinc-200">Direct Senior Access</h4>
              <p className="text-xs text-zinc-400">Clients work directly with software architects who understand their domain and write production code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CONTACT CTA & INTAKE FORM (#contact)
          ========================================================================= */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#090A0F] to-[#0E1017]">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center sm:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
              Engineering Intake
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              Initiate an Engineering Consultation
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Discuss your manufacturing challenge, schedule a Yuvitra CMMS walkthrough, or scope a custom industrial software project with our engineering leads.
            </p>
          </div>

          {/* Form and Contact Meta Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Interactive Contact Form */}
            <div className="lg:col-span-2 rounded-2xl border border-[#27272A] bg-[#10121A]/80 p-6 sm:p-8">
              <ContactForm />
            </div>

            {/* Right 1 Col: Direct Contact Information */}
            <div className="space-y-6">
              <div className="rounded-xl border border-[#27272A] bg-[#10121A]/60 p-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                  Direct Inquiries
                </span>
                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-zinc-500 block">General &amp; Technical:</span>
                    <a
                      href="mailto:contact@yuvitralabs.com"
                      className="text-zinc-200 hover:text-amber-400 transition-colors font-semibold"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <div className="pt-2">
                    <span className="text-zinc-500 block">Location:</span>
                    <span className="text-zinc-300 block">{SITE_CONFIG.location}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-zinc-500 block">Turnaround SLA:</span>
                    <span className="text-emerald-400 block">Within 24 business hours</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block font-semibold">
                  Early Pilot Program
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We are accepting applications from manufacturing facilities and machine shops interested in piloting <strong className="text-zinc-200">Yuvitra CMMS</strong> with hands-on engineering setup and telemetry integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
