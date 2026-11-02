export const SITE_CONFIG = {
  name: "Yuvitra Labs",
  tagline: "Industrial Software & Digital Engineering",
  headline: "Engineering Smarter Businesses. Building Better Industries.",
  description:
    "Yuvitra Labs develops industrial software, custom digital platforms, AI-powered assistants and intelligent automation solutions that help businesses modernize their operations.",
  flagshipProduct: "Yuvitra CMMS",
  status: "Industrial Software & Digital Engineering",
  location: "Coimbatore, Tamil Nadu, India",
  email: "contact@yuvitralabs.com",
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Our Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICE_PILLARS = [
  {
    id: "industrial-software-cmms",
    title: "Industrial Software & CMMS",
    badge: "Pillar 01",
    tagline: "Operational reliability, digital twins & shop-floor telemetry",
    description:
      "Custom enterprise software and computerized maintenance management architectures tailored for factory floors, heavy machinery, and continuous process plants.",
    capabilities: [
      "Yuvitra CMMS flagship platform integration",
      "Multi-tier plant, line & machine digital twins",
      "Preventive & predictive maintenance engines",
      "Shop-floor telemetry & runtime meter tracking",
      "Spare parts inventory & machine BOM registry",
      "Standard Operating Procedure (SOP) digital guides",
    ],
    highlight: "Flagship CMMS Core",
  },
  {
    id: "custom-software-web",
    title: "Custom Software & Website Development",
    badge: "Pillar 02",
    tagline: "High-performance digital platforms & cloud-native systems",
    description:
      "End-to-end bespoke web platforms, customer portals, internal administration suites, and corporate web applications engineered for speed, security, and scalability.",
    capabilities: [
      "Next.js & React modern full-stack web applications",
      "Java Spring Boot mission-critical backends",
      "Type-safe GraphQL & high-throughput REST APIs",
      "PostgreSQL relational schema design & indexing",
      "Enterprise role-based access control (RBAC)",
      "Responsive shop-floor & executive dashboards",
    ],
    highlight: "Full-Stack Engineering",
  },
  {
    id: "ai-assistants-automation",
    title: "AI Assistants & Business Automation",
    badge: "Pillar 03",
    tagline: "Intelligent workflows, operational copilots & system integration",
    description:
      "Practical, domain-aware artificial intelligence and automated pipelines designed to eliminate manual data entry, streamline operations, and accelerate engineering decisions.",
    capabilities: [
      "Operational AI knowledge & SOP assistants",
      "Automated WhatsApp & email notification pipelines",
      "Dynamic PDF generation for invoices & work orders",
      "Incident classification & technician routing",
      "ERP, CRM & shop-floor data sync connectors",
      "Human-in-the-loop review & approval workflows",
    ],
    highlight: "Autonomous Workflows",
  },
] as const;

export const CMMS_MODULES = [
  {
    id: "asset-hierarchy",
    title: "Asset Hierarchy & Digital Twin",
    badge: "Core Engine",
    code: "MOD-01",
    desc: "Multi-tier plant, production line, machine, and component registry with industrial QR code tagging, metadata specifications, and telemetry mapping.",
  },
  {
    id: "work-orders",
    title: "Work Order Lifecycle & Dispatch",
    badge: "Operations",
    code: "MOD-02",
    desc: "End-to-end corrective, preventive, and emergency work order dispatching with priority matrices, labor hour logs, and digital technician sign-offs.",
  },
  {
    id: "preventive-maintenance",
    title: "Preventive Maintenance Engine",
    badge: "Automation",
    code: "MOD-03",
    desc: "Automated calendar recurrence schedules and runtime meter threshold triggers designed to eliminate unplanned downtime and extend equipment life.",
  },
  {
    id: "inventory-bom",
    title: "Spare Parts & Machine BOM",
    badge: "Inventory",
    code: "MOD-04",
    desc: "Machine Bill of Materials (BOM), warehouse bin tracking, minimum stock reorder thresholds, and direct work order parts consumption logs.",
  },
] as const;

export const CMMS_CAPABILITIES = [
  {
    title: "QR Code Equipment Scanning",
    desc: "Instant technician equipment lookup on mobile devices directly from machine tags on the plant floor.",
  },
  {
    title: "Granular Role-Based Access",
    desc: "Dedicated interfaces and authorization for Plant Managers, Maintenance Supervisors, and Field Technicians.",
  },
  {
    title: "Offline-Resilient Architecture",
    desc: "Engineered to withstand intermittent shop-floor network conditions without losing operational records.",
  },
  {
    title: "Comprehensive Audit Logs",
    desc: "Immutable change tracking across all work orders, parts adjustments, and maintenance status transitions.",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Discrete Manufacturing",
    category: "Machinery & Equipment",
    desc: "Machine tools, industrial fabrication, assembly lines, and specialized equipment manufacturing with complex assembly BOMs.",
  },
  {
    title: "Automotive & Precision Components",
    category: "Tier-1/2 Suppliers",
    desc: "Casting, CNC machining, high-tolerance component stamping, and production lines with stringent zero-defect and uptime standards.",
  },
  {
    title: "Textile & Industrial Processing",
    category: "Continuous Production",
    desc: "Spinning mills, automated looms, processing, and finishing units where continuous motor and spindle uptime is paramount.",
  },
  {
    title: "Food, Beverage & Cold Chain",
    category: "Regulated Operations",
    desc: "Processing plants, commercial refrigeration, packaging automation, and facilities requiring strict hygiene and calibration audits.",
  },
  {
    title: "Facilities & Plant Utilities",
    category: "Infrastructure",
    desc: "Centralized HVAC plants, industrial air compressors, power distribution sub-stations, and wastewater management facilities.",
  },
  {
    title: "Warehousing & Supply Chain",
    category: "Material Handling",
    desc: "Material handling equipment, automated conveyor systems, forklift fleets, and regional distribution center infrastructure.",
  },
] as const;

export const WHY_YUVITRA = [
  {
    title: "Industrial Domain Focus",
    desc: "We engineer software tailored to the physical reality of manufacturing lines, maintenance supervisors, and shop-floor technicians—not generic marketing templates.",
    icon: "precision",
  },
  {
    title: "Mission-Critical Tech Stack",
    desc: "Built on resilient, industry-proven technologies: Next.js, TypeScript, Java Spring Boot, and PostgreSQL for unmatched data integrity and performance.",
    icon: "stack",
  },
  {
    title: "Domain-Driven Architecture",
    desc: "Architected with clean boundaries, type-safe GraphQL schemas, modular services, and enterprise-grade multi-tenant security isolation.",
    icon: "architecture",
  },
  {
    title: "Direct Engineering Partnership",
    desc: "You collaborate directly with senior architects and developers. Transparent milestones, clear deliverables, and zero enterprise vendor lock-in.",
    icon: "partnership",
  },
] as const;

export const DEVELOPMENT_APPROACH = [
  {
    step: "01",
    phase: "Architecture Blueprinting",
    tagline: "Audit & Specification",
    desc: "We analyze your operational workflows, machine touchpoints, and data boundaries to establish a comprehensive schema, security matrix, and system specification.",
    deliverable: "System Blueprint & Domain Specification",
  },
  {
    step: "02",
    phase: "Domain Modeling & Prototype",
    tagline: "Contracts & Interactive UX",
    desc: "We model relational entities, author typed GraphQL schema contracts, configure authorization policies, and deliver an interactive, responsive prototype.",
    deliverable: "Typed API Contracts & Interactive UX",
  },
  {
    step: "03",
    phase: "Sprint-Driven Engineering",
    tagline: "Incremental Delivery",
    desc: "We engineer the platform in transparent 2-week sprints with automated unit tests, strict type-checking, code reviews, and live milestone demonstrations.",
    deliverable: "Tested Incremental Production Builds",
  },
  {
    step: "04",
    phase: "Deployment & Telemetry",
    tagline: "Rollout & Monitoring",
    desc: "We deploy to your designated environment (on-premise or cloud), set up automated database backup strategies, configure telemetry, and provide complete documentation.",
    deliverable: "Production Handover & Runbooks",
  },
] as const;

export const SOLUTION_DOMAINS = [
  {
    id: "cmms-platform",
    title: "Computerized Maintenance Management (CMMS)",
    category: "Industrial SaaS",
    desc: "Multi-tenant asset registry, QR-code equipment tagging, scheduled preventive maintenance workflows, and spare parts inventory tracking.",
    tags: ["Asset Hierarchy", "Work Orders", "Preventive Maintenance", "BOM"],
  },
  {
    id: "telemetry-monitoring",
    title: "Machine Telemetry & Condition Monitoring",
    category: "IoT & Operations",
    desc: "Real-time machine status dashboards, runtime hour counters, threshold-based alert triggers, and equipment downtime incident analysis.",
    tags: ["Runtime Meters", "Downtime Logging", "Threshold Alerts", "Dashboards"],
  },
  {
    id: "custom-portals",
    title: "Enterprise Web Applications & Customer Portals",
    category: "Full-Stack Digital",
    desc: "High-performance internal operations tools, vendor portals, and enterprise administrative suites built with React, Next.js, and Java Spring Boot.",
    tags: ["Next.js", "Java Spring Boot", "GraphQL", "PostgreSQL"],
  },
  {
    id: "notification-pipelines",
    title: "Automated Notification & Dispatch Engine",
    category: "Automation",
    desc: "Event-driven communication pipelines delivering instant machine breakdown alerts and work order assignments across WhatsApp, SMS, and Email.",
    tags: ["WhatsApp Business API", "Email Dispatch", "Event Architecture", "PDF Engine"],
  },
] as const;

export const ENGAGEMENT_MODELS = [
  {
    name: "Pilot & MVP Development",
    badge: "Rapid Validation",
    bestFor: "Ideal for companies validating a specific digital tool, pilot CMMS rollout, or modernization proof-of-concept.",
    features: [
      "Targeted operational workflow audit",
      "Complete system blueprint & UI design",
      "Core MVP platform engineering",
      "Initial production deployment & pilot testing",
      "Full source code & documentation handover",
    ],
    ctaText: "Discuss Pilot Scope",
  },
  {
    name: "Custom Enterprise Platform",
    badge: "Full-Scale Solution",
    popular: true,
    bestFor: "Ideal for manufacturing enterprises requiring bespoke industrial software, full CMMS deployment, or multi-facility modernization.",
    features: [
      "End-to-end domain-driven architecture",
      "Full Yuvitra CMMS multi-plant setup",
      "Custom legacy ERP / database connectors",
      "Role-based access control & security audit",
      "On-premise or cloud infrastructure setup",
      "Dedicated technical onboarding & training",
    ],
    ctaText: "Request Enterprise Proposal",
  },
  {
    name: "Dedicated Engineering Retainer",
    badge: "Continuous Partnership",
    bestFor: "Ideal for organizations needing continuous feature iteration, platform scaling, DevOps management, and long-term technical support.",
    features: [
      "Reserved senior engineering capacity",
      "Sprint-by-sprint feature development",
      "Proactive performance & database tuning",
      "Guaranteed SLA response times",
      "Direct technical advisory & roadmap planning",
    ],
    ctaText: "Explore Retainer Options",
  },
] as const;
