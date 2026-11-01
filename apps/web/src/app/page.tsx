import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  const stackItems = [
    { label: "Frontend", value: "Next.js 16 (App Router) + TypeScript" },
    { label: "Styling", value: "Tailwind CSS v4" },
    { label: "API Protocol", value: "GraphQL" },
    { label: "Backend Core", value: "Java 17 + Spring Boot 3" },
    { label: "Database", value: "PostgreSQL 17 (Native Windows, Port 5432)" },
    { label: "DB Management", value: "pgAdmin 4" },
  ];

  const upcomingModules = [
    {
      title: "Asset Hierarchy & Digital Twin",
      desc: "Multi-tier plant, production line, machine, and component registry with QR code tracking.",
    },
    {
      title: "Work Order Management",
      desc: "End-to-end corrective, preventive, and emergency work order dispatching and verification.",
    },
    {
      title: "Preventive Maintenance",
      desc: "Time and meter-based trigger engines with automated maintenance scheduling.",
    },
    {
      title: "Spare Parts & Inventory",
      desc: "Machine Bill of Materials (BOM), warehouse bin tracking, and stock threshold alerts.",
    },
  ];

  return (
    <main className="flex-1 flex flex-col justify-center items-center px-6 py-20">
      <div className="max-w-4xl w-full mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {SITE_CONFIG.status}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            {SITE_CONFIG.tagline}
          </p>
          <p className="text-sm text-zinc-500 max-w-2xl">
            {SITE_CONFIG.description}
          </p>
        </div>

        {/* Flagship Product Showcase Banner */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                Flagship SaaS Solution
              </span>
              <h2 className="text-2xl font-bold text-zinc-100">
                {SITE_CONFIG.flagshipProduct}
              </h2>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono bg-zinc-800 text-zinc-300 border border-zinc-700 w-fit">
              Architecture Baseline Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {upcomingModules.map((module) => (
              <div
                key={module.title}
                className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-950/50 space-y-2"
              >
                <h3 className="font-semibold text-sm text-zinc-200">
                  {module.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* System Architecture Grid */}
        <div className="space-y-4">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            Approved System Architecture Baseline
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stackItems.map((item) => (
              <div
                key={item.label}
                className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40"
              >
                <div className="text-[11px] font-mono text-zinc-500">
                  {item.label}
                </div>
                <div className="text-xs font-medium text-zinc-200 mt-1 truncate">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
