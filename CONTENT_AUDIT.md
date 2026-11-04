# Yuvitra Labs — Comprehensive Website Content & Functionality Audit

**Document Version:** 1.0.0  
**Audit Date:** November 2026  
**Audited Target:** `apps/web` (Next.js 16 App Router, Tailwind CSS v4, TypeScript)  
**Status:** Audit Completed & Remediations Applied  

---

## 1. Executive Summary

A comprehensive content, functionality, and architectural audit was conducted across all public-facing elements of the Yuvitra Labs corporate web platform. 

The audit focused on identifying and remediating:
1. Unverified commercial claims, SLA promises, and premature pilot enrolment claims.
2. Inconsistent and hardcoded contact email configurations.
3. Ambiguity between Phase 1 implemented capabilities and planned Yuvitra CMMS roadmap features.
4. Simulated form submissions lacking active backend connectivity.
5. Responsive layout stability across desktop, tablet, and mobile breakpoints.
6. Public exposure of internal development infrastructure.

All identified issues have been corrected in code, verified with `npm run lint` (0 errors, 0 warnings), tested with production compilation `npm run build`, and visually validated using headless Chromium device emulation.

---

## 2. Unverified Business Claims & Commitments Audit

| # | Location | Original Text / Claim | Audit Finding | Remediation Applied |
|---|----------|------------------------|---------------|---------------------|
| 1 | `page.tsx` (Contact) & `ContactForm.tsx` | `"Turnaround SLA: Within 24 business hours"` | Unverified commercial SLA commitment without dedicated round-the-clock support infrastructure. | Removed SLA promise. Replaced with factual statement: *"Consultations: Direct with software architects"*. |
| 2 | `page.tsx` (Contact sidebar) | `"Early Pilot Program: We are accepting applications from manufacturing facilities and machine shops interested in piloting Yuvitra CMMS with hands-on engineering setup..."` | Premature pilot enrollment claim before production software build readiness. | Removed enrollment claim. Replaced with *"Technical Architecture Inquiries"* informational card. |
| 3 | `constants.ts` & `page.tsx` (Pricing) | `popular: true` / `"Most Requested"` badge on Custom Enterprise Platform | Fabricated popularity metric for a newly founded company prior to commercial operations. | Removed `popular: true` and the `"Most Requested"` badge. Rendered all engagement models with consistent, professional styling. |
| 4 | `constants.ts` (Retainer Model) | `"Guaranteed SLA response times"` | Unverified contractual SLA guarantee. | Replaced with *"Defined response guidelines & technical support"*. |
| 5 | `constants.ts` (MVP Model) | `"Initial production deployment & pilot testing"` | Over-committing early MVP scope to live production factory rollout. | Replaced with *"Staging deployment & milestone validation"*. |
| 6 | `page.tsx` (About Section) | `"battle-tested technology foundations"` | Could be misread as claiming Yuvitra Labs' proprietary codebase is battle-tested in production. | Clarified to *"proven open-source technology foundations"*, accurately crediting Java, PostgreSQL, and Next.js. |

---

## 3. Contact Email & Configuration Audit

### Findings:
1. **Hardcoded Inconsistent Email Address:**
   - In `apps/web/src/app/page.tsx` (line 628), the visible text rendered `{SITE_CONFIG.email}` (`contact@yuvitralabs.com`), but the `href` attribute was hardcoded to `mailto:yuvaarun09964@gmail.com`.
   - This exposed a personal developer Gmail address and caused an email destination mismatch.
2. **Configuration Status:**
   - Previously, the public contact email was hardcoded in `constants.ts` without environment variable overrides.

### Remediations Applied:
- **Centralized & Configurable Email:**
  Updated `apps/web/src/lib/constants.ts` to read from the environment with fallback:
  ```ts
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@yuvitralabs.com",
  ```
- **Eliminated Hardcoded Personal Email:**
  Updated `page.tsx` to bind directly to the configured variable:
  ```tsx
  <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
  ```
- **Created Environment Template:**
  Added [`apps/web/.env.example`](file:///E:/YUVITRA_LABS/apps/web/.env.example) documenting `NEXT_PUBLIC_CONTACT_EMAIL` for deployment configuration.

---

## 4. Product Feature Reality Audit: Yuvitra CMMS

### Issue:
The homepage presented Yuvitra CMMS with badges such as `"Core Engine"`, `"Module 01"`, and `"Operations"`, without indicating whether these modules are currently deployed production software or proposed roadmap specifications. A visitor could mistakenly infer that the full multi-tenant CMMS SaaS is operational today.

### Remediations Applied:
1. **Explicit Roadmap & Specification Eyebrow:**
   Updated section header eyebrow to:
   ```
   Flagship Industrial Platform • Phase 1 Specification
   ```
2. **Prominent Status & Specification Callout Banner:**
   Added an amber architectural callout directly above the module grid:
   > **Current Status: Architecture Blueprint & Specification**  
   > *The modules detailed below represent our verified technical specification and domain blueprint. Core software development is active, with production releases planned in upcoming roadmap phases.*
3. **Transparent Module Badges:**
   - `MOD-01` &rarr; `PLANNED-01: Asset Hierarchy & Digital Twin` (`Planned Core`)
   - `MOD-02` &rarr; `PLANNED-02: Work Order Lifecycle & Dispatch` (`Planned Ops`)
   - `MOD-03` &rarr; `PLANNED-03: Preventive Maintenance Engine` (`Planned Engine`)
   - `MOD-04` &rarr; `PLANNED-04: Spare Parts & Machine BOM` (`Planned Spares`)
4. **Planned Advantage Wording:**
   Updated capability descriptions from present tense (*"Instant technician equipment lookup..."*) to architectural tense (*"Planned technician equipment lookup on mobile devices directly from machine tags on the plant floor"*).
5. **Call-To-Action Refinement:**
   Updated primary CMMS button from `"Schedule CMMS Walkthrough"` to `"Inquire About CMMS Architecture"`.

---

## 5. Internal Development Information Inspection

| Check | Search Parameters | Result | Notes |
|---|---|---|---|
| Local Port References | `localhost:5432`, `5432`, `3000` | **Zero Public Occurrences** | Verified clean. No internal port telemetry exposed. |
| Database Admin Tools | `pgAdmin`, `pgAdmin 4` | **Zero Public Occurrences** | Verified clean. |
| Internal Database Names | `yuvitra_db` | **Zero Public Occurrences** | Verified clean. |
| Container / Infra Notes | `Docker`, `Docker Desktop` | **Zero Public Occurrences** | Verified clean. |
| Public Architecture Attribution | `Next.js • Spring Boot • PostgreSQL` | **Maintained Factually** | Publicly presents the high-level technology stack without disclosing credentials, ports, or internal topology. |

---

## 6. Navigation & CTA Destination Verification

All navigation links and call-to-action buttons across the header, body, and footer were audited to ensure zero broken links or invalid anchors:

| Source | Link Text | Target Destination | Verification Status |
|---|---|---|---|
| Header Nav | `Home` | `#home` | **Valid** (Anchored to Hero section) |
| Header Nav | `Products` | `#products` | **Valid** (Anchored to CMMS section) |
| Header Nav | `Services` | `#services` | **Valid** (Anchored to Services section) |
| Header Nav | `Industries` | `#industries` | **Valid** (Anchored to Industries section) |
| Header Nav | `Our Work` | `#work` | **Valid** (Anchored to Solution Domains section) |
| Header Nav | `Pricing` | `#pricing` | **Valid** (Anchored to Engagement Models section) |
| Header Nav | `About` | `#about` | **Valid** (Anchored to About section) |
| Header Nav | `Contact` | `#contact` | **Valid** (Anchored to Contact Intake section) |
| Header CTA | `Request a Demo` | `#contact` | **Valid** (Smooth scrolls to Intake form) |
| Hero Button 1 | `Explore Our Services` | `#services` | **Valid** |
| Hero Button 2 | `Explore Yuvitra CMMS` | `#products` | **Valid** |
| CMMS Banner CTA | `Inquire About CMMS Architecture` | `#contact` | **Valid** |
| Service Cards | `Request Scoping & Details` | `#contact` | **Valid** |
| Pricing Cards | `Discuss Pilot Scope` | `#contact` | **Valid** |
| Pricing Cards | `Request Enterprise Proposal` | `#contact` | **Valid** |
| Pricing Cards | `Explore Retainer Options` | `#contact` | **Valid** |
| Footer (Cols 1-4) | 20 individual links | `#products`, `#services`, `#industries`, `#work`, `#pricing`, `#about`, `#contact` | **All Valid** |

---

## 7. Contact Form Backend Connectivity Audit

### Audit Finding:
The previous implementation of [`ContactForm.tsx`](file:///E:/YUVITRA_LABS/apps/web/src/components/home/ContactForm.tsx) intercepted `onSubmit` with `e.preventDefault()` and simulated a successful submission by rendering a *"Consultation Request Received"* confirmation card, despite having **no active backend endpoint or database connection**.

This gave prospective clients a deceptive impression that their inquiry was transmitted to a server database, when it was actually discarded in local React component state upon page refresh.

### Remediation Applied:
1. **Eliminated Simulated State:**
   Removed the deceptive success card.
2. **Direct Transmission Mechanism:**
   Configured the form to format user inputs into a structured `mailto:` payload (`Name`, `Work Email`, `Company`, `Area of Interest`, `Project Brief`) and open the user's default email client addressed to `{SITE_CONFIG.email}` upon submission.
3. **One-Click Clipboard Fallback:**
   Added a `"Copy Inquiry Text"` button allowing webmail users (Gmail, Outlook Web) to instantly copy their structured inquiry to the clipboard.
4. **Transparent Architectural Notice:**
   Rendered a permanent notice beneath the form:
   > *"Direct Dispatch Channel: Inquiries are routed directly to contact@yuvitralabs.com via your system mail client. Automated database form submission endpoints are scheduled for deployment in Phase 2."*

---

## 8. Responsive Layout & Alignment Audit

Automated viewport audit performed using Microsoft Edge Headless with Chrome DevTools Protocol (CDP) device metrics emulation:

| Viewport | Dimensions | ScrollWidth | InnerWidth | Horizontal Overflow Count | Status |
|---|---|---|---|---|---|
| **Desktop** | 1280 &times; 960 px | 1280 px | 1280 px | **0 elements** | **Passed** |
| **Tablet** | 768 &times; 1024 px | 768 px | 768 px | **0 elements** | **Passed** |
| **Mobile** | 390 &times; 844 px | 390 px | 390 px | **0 elements** | **Passed** |

### Fixes Applied to Maintain Alignment:
- Added `min-w-0 w-full` to main layout flex containers in `layout.tsx` to prevent flex child expansion.
- Added `overflow-x-hidden` on the main container.
- Wrapped ambient glow blur elements in `absolute inset-0 overflow-hidden` containers to prevent filter blur bounding-box bleeding.
- Used responsive grid columns (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`) to ensure text never exceeds container boundaries.

---

## 9. Accessibility & Asset Loading Audit

| Area | Checkpoint | Verification Result |
|---|---|---|
| **Form Labels** | Explicit `htmlFor` matching input `id` | Verified for all fields (`contact-name`, `contact-email`, `contact-org`, `contact-service`, `contact-message`). |
| **Color Contrast** | WCAG AA / AAA dark theme compliance | Background `#090A0F`, surfaces `#10121A`, text `#F4F4F5` / `#A1A1AA`, amber accent `#F59E0B`. High contrast throughout. |
| **Navigation ARIA** | Navigation role & mobile toggle state | `aria-label="Main Navigation"`, `aria-expanded` toggle on mobile menu button, `aria-label="Toggle Navigation Menu"`. |
| **Logo & Images** | Semantic `<Image>` with explicit dimensions & `alt` | Logo component utilizes Next.js `<Image>` with priority loading above the fold, valid `alt` text, and scalable SVG vectors. |
| **Document Hierarchy** | Logical heading nesting | Single `<h1>` in hero section, `<h2>` for each primary section, `<h3>` for cards/modules, `<h4>` for sub-items. |

---

## 10. Items Requiring Founder Confirmation

The following business items are highlighted for confirmation by the founder before public commercial launch:

1. **Official Commercial Contact Email:**
   Confirm whether `contact@yuvitralabs.com` is set up with MX records and inbox routing on Google Workspace or Microsoft 365, or if an interim alias should be used via `NEXT_PUBLIC_CONTACT_EMAIL`.
2. **Physical Office Address / Legal Entity Registration:**
   The website currently lists `"Coimbatore, Tamil Nadu, India"`. Confirm exact registered business address and CIN/GSTIN if required for footers or legal notices.
3. **Phase 2 Form Submission Architecture:**
   Choose preferred architecture for public contact intake:
   - **Option A:** Direct GraphQL Mutation to Spring Boot backend (`apps/api`) storing inquiries in PostgreSQL `inquiries` table with trigger notifications.
   - **Option B:** Next.js Server Action / Route Handler calling a transactional email service (e.g., Resend, Postmark, AWS SES, or Brevo).
4. **Yuvitra CMMS Pilot Target Timeline:**
   Confirm planned quarter/month for Phase 2 prototype completion and when initial closed-beta testing can be scheduled.
5. **Pricing & Retainer Tiers:**
   Review the scope points in `ENGAGEMENT_MODELS` (`constants.ts`) to ensure deliverables align with commercial advisory capabilities.
