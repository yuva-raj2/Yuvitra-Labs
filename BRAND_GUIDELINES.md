# Yuvitra Labs — Brand Identity & Design System Guidelines

**Document Version:** 1.0.0  
**Status:** Official Brand Identity Specification  
**Author:** Senior Brand Designer & SaaS Design-System Architect  
**Company:** Yuvitra Labs  
**Positioning:** Industrial Software & Digital Engineering Company  
**Flagship Solution:** Yuvitra CMMS (Computerized Maintenance Management System)  

---

## 1. Brand Philosophy & Positioning

Yuvitra Labs engineers high-precision, mission-critical software solutions for industrial operations, plant management, and manufacturing infrastructure. Our design language must communicate:

1. **Engineering Precision:** Clean mathematical alignment, deliberate geometric rhythm, and zero visual clutter.
2. **Industrial Authority:** Deep graphite and obsidian foundations inspired by precision machine chassis, heavy tooling, and telemetry consoles.
3. **Controlled Illumination:** Intentional, non-distracting industrial amber accents that draw the eye directly to telemetry, active statuses, and core calls to action without visual fatigue.
4. **Architectural Clarity:** Strict typography hierarchies and micro-monospace labels that evoke blueprints and industrial control systems.

---

## 2. Custom Logo Architecture (The "YL" Monogram)

### 2.1 Geometric Concept & Anatomical Construction

The Yuvitra Labs monogram unifies the letters **Y** and **L** into a single, cohesive architectural glyph.

```
       [Top-Left Wing]                         [Top-Right Wing]
        \ (Platinum)                             / (Amber)
         \                                      /
          \                                    /
           \                                  /
            \                                /
             +------------------------------+  <-- [Telemetry Nexus Node]
                                            |
                                            |  <-- [Integrated L-Spine]
                                            |
                                            |
                                            +------------+  <-- [Grounded Foot]
```

- **The Primary Structure (Y):** Formed by two 45° angled upper diagonal wings meeting at a central nexus coordinate `(X=50, Y=55)` on a 100-unit grid, flowing into a central vertical descent.
- **The Integrated Foundation (L):** The upper-right diagonal wing flows continuously through the nexus, drops vertically as the central stem, and turns sharply 90° horizontally to form the foot of the **L**.
- **Right Bounding Rail Alignment:** The top-right arm and the bottom foot of the **L** terminate at the exact same vertical guide (`X=77`), creating an engineered rectangular boundary on the right that anchors the entire mark.
- **The Telemetry Nexus Node:** A precision circular node situated at the nexus represents IoT instrumentation, sensor data streams, and the digital twin hub connecting software to physical shop-floor assets.
- **Dual-Tone Material Contrast:**
  - **Left Wing (Platinum Titanium `#F4F4F5`):** Structural chassis, software stability.
  - **Integrated Spine (Industrial Amber `#F59E0B`):** Machine vitality, live telemetry, operational energy.

---

### 2.2 Brand Asset Organization

All production-grade vector assets are placed in [`apps/web/public/brand/`](file:///E:/YUVITRA_LABS/apps/web/public/brand/):

| File Name | Dimensions | Purpose & Recommended Usage |
|---|---|---|
| **[`yl-monogram.svg`](file:///E:/YUVITRA_LABS/apps/web/public/brand/yl-monogram.svg)** | `100 x 100` | Pure geometric mark without typography. Transparent background. Use in app launcher icons, avatars, watermarks, and 3D textures. |
| **[`yl-favicon.svg`](file:///E:/YUVITRA_LABS/apps/web/public/brand/yl-favicon.svg)** | `32 x 32` | Engineered specifically for micro-scale legibility (16px / 32px / 48px). Features a dark squircle container with ambient telemetry backlight. |
| **[`yl-logo-primary.svg`](file:///E:/YUVITRA_LABS/apps/web/public/brand/yl-logo-primary.svg)** | `340 x 80` | Horizontal master lockup (monogram + "YUVITRA LABS" + descriptor). Transparent background, designed for dark headers and navigation bars. |
| **[`yl-logo-dark.svg`](file:///E:/YUVITRA_LABS/apps/web/public/brand/yl-logo-dark.svg)** | `380 x 90` | Self-contained dark card lockup with `#090A0F` obsidian canvas and subtle border. Ideal for social cards, documentation covers, and banners. |
| **[`yl-logo-light.svg`](file:///E:/YUVITRA_LABS/apps/web/public/brand/yl-logo-light.svg)** | `380 x 90` | High-contrast light lockup with `#FFFFFF` canvas, dark graphite Y-wing, and amber L-spine for invoices, whitepapers, and PDF exports. |

---

### 2.3 Clear Space & Sizing Rules

- **Clear Space:** Maintain a minimum exclusion zone equal to half the height of the monogram ($0.5H$) around all sides of the mark.
- **Minimum Digital Sizes:**
  - Favicon: `16 x 16 px` / `32 x 32 px`
  - Standalone Monogram: `24 x 24 px`
  - Horizontal Master Lockup: `160 px` minimum width
- **Usage Violations:**
  - ❌ Do NOT separate the Y and L into side-by-side text.
  - ❌ Do NOT apply drop shadows with blur radii greater than 10px.
  - ❌ Do NOT distort the 45-degree angle or aspect ratio.
  - ❌ Do NOT use neon or saturated rainbow gradients.

---

## 3. Color System & Design Tokens

### 3.1 Primary Accent Palette (Industrial Amber)
Industrial amber evokes machine status indicators, high-visibility workshop safety, and live telemetry data.

| Token Name | Hex Code | HSL | Semantic Role |
|---|---|---|---|
| `--color-amber-400` | `#FBBF24` | `43°, 96%, 56%` | Highlights, hover glow, telemetry active status |
| `--color-amber-500` | `#F59E0B` | `38°, 92%, 50%` | **Primary Brand Accent:** Key buttons, active tabs, monogram spine |
| `--color-amber-600` | `#D97706` | `32°, 95%, 44%` | Button active states, light-mode accent, warning borders |
| `--color-amber-500-10` | `rgba(245, 158, 11, 0.10)` | — | Status pill background, subtle glow wash |
| `--color-amber-500-20` | `rgba(245, 158, 11, 0.20)` | — | Active focus rings, selected card border |

### 3.2 Neutral Background & Surface Palette (Obsidian & Graphite)
Rather than harsh, pitch black (`#000000`), Yuvitra Labs utilizes rich, warm graphite and obsidian tones that convey metallic solidity and reduce eye strain.

| Token Name | Hex Code | Role & Layering |
|---|---|---|
| `--color-bg-canvas` | `#090A0F` | Deep page backdrop (lowest z-index) |
| `--color-surface-card` | `#10121A` | Main cards, panels, and table containers |
| `--color-surface-elevated`| `#161922` | Dialogs, floating modals, dropdown menus |
| `--color-surface-inset` | `#0D0E15` | Input fields, code blocks, table header wells |
| `--color-border-hairline`| `#27272A` | Universal 1px subtle container dividers |
| `--color-border-subtle` | `#1E2028` | Secondary internal partition lines |

### 3.3 Text & Typography Palette

| Token Name | Hex Code | Semantic Role |
|---|---|---|
| `--color-text-primary` | `#F4F4F5` | Headings, primary labels, high-emphasis text |
| `--color-text-secondary`| `#A1A1AA` | Body copy, section descriptions, active icons |
| `--color-text-muted` | `#71717A` | Metadata, timestamps, breadcrumbs, footers |
| `--color-text-accent` | `#F59E0B` | Brand callouts, active metric values |

### 3.4 Functional Status Palette (Industrial Telemetry)

| Status | Hex Code | Badge Background | Usage Context |
|---|---|---|---|
| **Operational / Healthy** | `#10B981` (Emerald) | `rgba(16, 185, 129, 0.12)` | Asset running, work order completed, sync active |
| **Scheduled / In-Progress**| `#38BDF8` (Sky) | `rgba(56, 189, 248, 0.12)` | Preventive maintenance scheduled, assigned |
| **Attention / Pending** | `#F59E0B` (Amber) | `rgba(245, 158, 11, 0.12)` | Pending supervisor approval, stock reorder point |
| **Critical / Breakdown** | `#F43F5E` (Rose) | `rgba(244, 63, 94, 0.12)` | Unplanned machine downtime, emergency work order |

---

## 4. Typography Hierarchy & Font System

### 4.1 Typeface Families
- **Primary Interface Font:** `Geist Sans`, `Inter`, or system fallback `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`.
- **Engineering / Monospace Font:** `Geist Mono`, `ui-monospace`, `SFMono-Regular`, `Consolas`, `monospace`.

### 4.2 Scale & Hierarchy Matrix

| Level | Size | Weight | Line Height | Tracking | Usage |
|---|---|---|---|---|---|
| **Hero Display** | `48px – 56px` | 800 (ExtraBold) | 1.15 | `-0.025em` | Marketing homepage hero statement |
| **Heading 1** | `36px – 40px` | 700 (Bold) | 1.2 | `-0.02em` | Major page title & showcase headers |
| **Heading 2** | `24px – 28px` | 700 (Bold) | 1.3 | `-0.015em` | Feature group header, section title |
| **Heading 3** | `18px – 20px` | 600 (SemiBold) | 1.4 | `-0.01em` | Card titles, modal headers |
| **Body Large** | `16px` | 400 (Regular) | 1.6 | `normal` | Sub-headers, lead paragraphs |
| **Body Regular** | `14px` | 400 (Regular) | 1.5 | `normal` | Standard UI copy, table cells |
| **Body Small** | `13px` | 400 (Regular) | 1.4 | `normal` | Secondary card descriptions |
| **Micro Caption** | `11px – 12px` | 500 (Medium) | 1.3 | `0.01em` | Tooltips, timestamps, field hints |
| **Eyebrow / Badge** | `10px – 11px` | 600 (SemiBold) | 1.0 | `0.20em` | Uppercase category tags, telemetry pills (Mono) |

---

## 5. Spacing, Grid & Layout Metrics

Our layout follows a mathematical **4px / 8px baseline grid**.

```
  +---+ 4px   - Micro separation (icon-to-text gap)
  +-------+ 8px   - Component interior padding (p-2)
  +---------------+ 16px  - Standard card interior gap (p-4)
  +-------------------------------+ 24px  - Section block spacing (p-6)
  +-----------------------------------------------+ 32px  - Card header to body gap (p-8)
```

- **Container Constraints:**
  - Navigation & Footer: `max-w-7xl` (`1280px`)
  - Hero & Major Content: `max-w-5xl` (`1024px`)
  - Form & Focus Modals: `max-w-xl` (`576px`)
- **Page Gutters:**
  - Mobile: `16px` (`px-4`)
  - Tablet: `24px` (`px-6`)
  - Desktop: `32px` (`px-8`)

---

## 6. Shape, Border Radii & Shadow System

### 6.1 Border Radius Tokens

| Class | Value | Target UI Elements |
|---|---|---|
| `rounded-sm` | `4px` | Checkboxes, tags, micro status pills |
| `rounded-md` | `6px` | Buttons, form input fields, tooltips |
| `rounded-lg` | `8px` | Secondary buttons, nested feature blocks |
| `rounded-xl` | `12px` | Main cards, modals, interactive panels |
| `rounded-2xl` | `16px` | Hero showcase cards, standalone lockups |
| `rounded-full` | `9999px` | Avatars, notification indicators, pill tags |

### 6.2 Depth & Elevation Strategy

Yuvitra Labs avoids muddy, excessive drop shadows in favor of **structural 1px hairline borders** paired with localized ambient luminescence:

- **Level 0 (Flat Panel):**
  - Border: `1px solid #27272A`
  - Shadow: None
- **Level 1 (Card Hover / Elevated Panel):**
  - Border: `1px solid #3F3F46`
  - Shadow: `0 4px 20px -2px rgba(0, 0, 0, 0.5)`
- **Level 2 (Active Amber Glow):**
  - Border: `1px solid rgba(245, 158, 11, 0.35)`
  - Shadow: `0 0 25px -4px rgba(245, 158, 11, 0.15)`

---

## 7. Component Styling Specifications

### 7.1 Buttons

```
[ Primary CTA ]         [ Secondary Button ]        [ Outline / Ghost ]
  Solid Amber             Dark Graphite Surface        Transparent
  Dark Text               Titanium White Text          Muted Text
```

1. **Primary Button:**
   - Background: `bg-amber-500` (`#F59E0B`)
   - Text: `text-zinc-950 font-semibold`
   - Hover: `hover:bg-amber-400`
   - Active: `active:bg-amber-600`
   - Focus: `focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-950`
   - Radius: `rounded-md`
2. **Secondary Button:**
   - Background: `bg-zinc-900` (`#10121A`)
   - Border: `border border-zinc-700/80`
   - Text: `text-zinc-100 font-medium`
   - Hover: `hover:bg-zinc-800 hover:border-zinc-600`
   - Radius: `rounded-md`
3. **Ghost / Tertiary Button:**
   - Background: `bg-transparent`
   - Text: `text-zinc-400 hover:text-zinc-100`
   - Hover: `hover:bg-zinc-900/60`
   - Radius: `rounded-md`

### 7.2 Cards & Containers

- **Standard Industrial Card:**
  - Fill: `bg-zinc-900/60` (`#10121A` backdrop with blur)
  - Border: `border border-zinc-800` (`#27272A`)
  - Corner Radius: `rounded-xl`
  - Padding: `p-6` or `p-8`
  - Hover Transition: `transition-all duration-200 hover:border-zinc-700`
- **Telemetry Feature Card:**
  - Accentuated by a 1px top highlight or active amber status pip on the upper-right corner.

### 7.3 Navigation & Header Bar

- **Layout:** Sticky top positioning (`sticky top-0 z-50`).
- **Surface:** `bg-zinc-950/85 backdrop-blur-md`.
- **Bottom Divider:** `border-b border-zinc-800/80`.
- **Branding Lockup:** Monogram icon paired with "YUVITRA LABS" wordmark.
- **Right Rail:** Navigation links in `text-zinc-400 hover:text-zinc-100` followed by an amber CTA button `[ Request Demo ]`.

---

## 8. Summary of Review Deliverables

1. **Custom Vector Logo Assets:** Available in [`apps/web/public/brand/`](file:///E:/YUVITRA_LABS/apps/web/public/brand/):
   - `yl-monogram.svg` (Standalone Geometric Monogram)
   - `yl-favicon.svg` (32x32 Favicon)
   - `yl-logo-primary.svg` (Horizontal Master Lockup)
   - `yl-logo-dark.svg` (Dark Card Presentation)
   - `yl-logo-light.svg` (Light Document Presentation)
2. **Brand Guidelines Specification:** Documented in [`BRAND_GUIDELINES.md`](file:///E:/YUVITRA_LABS/BRAND_GUIDELINES.md).

---
*End of Yuvitra Labs Brand Identity & Design System Guidelines v1.0.0.*
