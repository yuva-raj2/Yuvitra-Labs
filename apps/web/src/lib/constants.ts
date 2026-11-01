export const SITE_CONFIG = {
  name: "Yuvitra Labs",
  tagline: "Industrial Software & Digital Engineering",
  flagshipProduct: "Yuvitra CMMS",
  description:
    "Engineering modern computerized maintenance management, digital twin architectures, and telemetry-driven maintenance workflows.",
  status: "Phase 1: Brand & Architecture Foundation",
  year: 2026,
  location: "Coimbatore, India",
} as const;

export const NAV_LINKS = [
  { label: "CMMS Overview", href: "#cmms" },
  { label: "Modules", href: "#modules" },
  { label: "Architecture", href: "#architecture" },
  { label: "Brand System", href: "#brand" },
] as const;

export const CMMS_MODULES = [
  {
    id: "asset-hierarchy",
    title: "Asset Hierarchy & Digital Twin",
    badge: "Core Engine",
    desc: "Multi-tier plant, production line, machine, and component registry with industrial QR code tagging and telemetry mapping.",
  },
  {
    id: "work-orders",
    title: "Work Order Lifecycle",
    badge: "Operations",
    desc: "End-to-end corrective, preventive, and emergency work order dispatching, labor hour logs, and digital technician verification.",
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance Engine",
    badge: "Automation",
    desc: "Automated calendar recurrence and runtime meter threshold triggers to prevent unplanned machine downtime.",
  },
  {
    id: "inventory-bom",
    title: "Spare Parts & Machine BOM",
    badge: "Inventory",
    desc: "Machine Bill of Materials (BOM), warehouse bin tracking, minimum stock thresholds, and work order parts consumption.",
  },
] as const;

export const TECH_STACK = [
  { label: "Frontend", value: "Next.js 16 (App Router) + TypeScript" },
  { label: "Design System", value: "Tailwind CSS v4 (Industrial Dark)" },
  { label: "API Protocol", value: "GraphQL (Typed Schema)" },
  { label: "Backend Core", value: "Java 17 + Spring Boot 3" },
  { label: "Database", value: "Native PostgreSQL 17 (Port 5432)" },
  { label: "DB Admin GUI", value: "pgAdmin 4" },
] as const;
