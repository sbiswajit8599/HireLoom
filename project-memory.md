# HireLoom — Project Memory & Central Knowledge Base

> **System Overview**: HireLoom (`app.hireloom.io`) is an AI-powered hiring operating system designed to automate candidate screening, conduct asynchronous video interviews, and deliver explainable scorecards with objective evaluation signals.

---

## 1. Executive Summary & Core Vision

HireLoom solves structural inefficiencies in modern talent acquisition (ATS keyword filtering bias, long time-to-hire, unstandardized screening) by introducing an end-to-end AI-assisted hiring workflow:
- **Semantic Candidate Matching**: Beyond simple keyword scanning, evaluating candidate depth, skills, and context fit.
- **Asynchronous AI Video Interviews**: Standardized, role-specific pre-screening questions for every applicant.
- **Explainable Scorecards**: AI scoring that provides evidence, reasoning, and auditability for recruiters and hiring managers.
- **Enterprise Security & Compliance**: SOC 2 Type II, GDPR data residency/erasure, and EEOC compliance with full audit logging.

---

## 2. Directory Structure & Architecture

```
HireLoom/
├── guidelines/
│   └── Guidelines.md              # System design and prompt guidelines template
├── plans/
│   └── i-ve-manually-edited-the-graceful-sundae.md  # Architectural plan for marquee testimonials
├── public/                       # Static public assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx  # Image wrapper with SVG placeholder error handling
│   │   │   ├── sections/
│   │   │   │   ├── AIScreeningSection.tsx     # AI Scorecard breakdown & evidence demo
│   │   │   │   ├── ComparisonSection.tsx      # Modernized interactive feature comparison matrix with BGPattern
│   │   │   │   ├── CTASection.tsx             # Conversion section with dual CTAs
│   │   │   │   ├── FAQSection.tsx             # Accordion-style interactive FAQs
│   │   │   │   ├── FeaturesSection.tsx        # 10 platform feature cards with Spotlight FX
│   │   │   │   ├── Footer.tsx                 # Brand footer with navigation & compliance badges
│   │   │   │   ├── HeroSection.tsx            # Main hero with 3D background boxes & scroll mockup
│   │   │   │   ├── Nav.tsx                    # Header wrapper for floating Navbar1
│   │   │   │   ├── PricingSection.tsx         # Plan comparison & Monthly/Annual toggle
│   │   │   │   ├── ProblemSection.tsx         # Industry pain points & statistics
│   │   │   │   ├── ProductShowcaseSection.tsx # Interactive tabbed product showcase & Starfield canvas
│   │   │   │   ├── SecuritySection.tsx        # 5 security pillars (SOC 2, GDPR, Encryption)
│   │   │   │   ├── SolutionSection.tsx        # 6-step end-to-end workflow diagram
│   │   │   │   ├── TestimonialsSection.tsx    # Dual-row marquee testimonials scrolling list
│   │   │   │   ├── TrustedBySection.tsx       # Logo cloud of client companies with plus dividers
│   │   │   │   └── shared.ts                  # Shared Framer Motion variants & typography styles
│   │   │   └── ui/
│   │   │       ├── background-boxes.tsx       # 3D perspective grid background with mouse projection
│   │   │       ├── bg-pattern.tsx             # Reusable SVG/CSS background pattern generator (dots, grid, stripes)
│   │   │       ├── logo-cloud-2.tsx           # Logo card grid container with layout dividers
│   │   │       ├── navbar-1.tsx               # Floating glassmorphism navbar & mobile menu overlay
│   │   │       ├── spotlight.tsx              # Dynamic radial gradient spotlight hover component
│   │   │       ├── starfield-hero.tsx         # Interactive canvas-based starfield particle system
│   │   │       ├── text-morph.tsx             # Animated word-morphing text effect
│   │   │       └── [shadcn UI components]    # Reusable Radix/Tailwind primitives (accordion, button, card, etc.)
│   │   ├── App.tsx                        # Main landing page component assembly
+   │   └── main.tsx                       # React root entry point
│   └── lib/
│       └── utils.ts                       # Classnames merger helper (`cn` using clsx & tailwind-merge)
├── index.html                             # Main HTML page template
├── package.json                           # Dependencies & project scripts
├── postcss.config.mjs                     # PostCSS config
├── vite.config.ts                         # Vite build configuration with Tailwind v4 plugin
└── project-memory.md                      # Central Knowledge Base (this document)
```

---

## 3. Technology Stack & Key Dependencies

| Layer / Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework & Runtime** | React 18.3 + TypeScript + Vite 6.3 | Fast build tool & modern component framework |
| **Styling Engine** | Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first styling with inline design system tokens |
| **UI Component Library** | Radix UI + Custom shadcn/ui | Accessible unstyled primitives (Accordion, Dialog, Select, etc.) |
| **Animation & Motion** | Framer Motion 12.42 | Scroll-driven transforms, layout transitions, fadeUp presets |
| **Canvas & FX Graphics** | HTML5 2D Canvas + Math Projections | `StarfieldCanvas` physics engine and 3D projection plane `BackgroundBoxes` |
| **Icons** | Lucide React | Consistent vector iconography (`Brain`, `Video`, `Shield`, `Star`, etc.) |

---

## 4. Page Architecture & Navigation Flow

The application is structured as a smooth-scrolling single-page marketing and product experience assembled in `App.tsx`.

```
[ App.tsx Container (Plus Jakarta Sans / Inter font baseline) ]
 ├── <Nav />                            (Fixed floating header z-50)
 └── <main>
      ├── <HeroSection />              (#hero - 3D grid, TextMorph, scroll-transform dashboard)
      ├── <TrustedBySection />         (#trusted-by - Responsive logo cloud grid)
      ├── <ProblemSection />           (3 pain point metric cards)
      ├── <SolutionSection />          (6-step workflow process line)
      ├── <FeaturesSection />          (#features - 10 Spotlight feature cards)
      ├── <ProductShowcaseSection />    (#product - Starfield canvas + tabbed dashboard)
      ├── <AIScreeningSection />       (#ai-screening - Explainable AI scorecard demo)
      ├── <ComparisonSection />        (Interactive matrix with BGPattern dot overlay & category filtering)
      ├── <SecuritySection />          (5 Enterprise security pillars)
      ├── <TestimonialsSection />      (Dual-row pause-on-hover marquee)
      ├── <PricingSection />           (#pricing - Startup / Growth / Enterprise plans)
      ├── <FAQSection />               (Interactive 8-question accordion)
      ├── <CTASection />               (Final conversion block)
      └── </main>
 └── <Footer />                         (Brand links & legal disclosures)
```

---

## 5. Section Breakdown & Components

### 5.1 Nav (`src/app/components/sections/Nav.tsx` & `ui/navbar-1.tsx`)
- **Visual Design**: Floating glassmorphism pill (`bg-zinc-950/75 border border-white/10 backdrop-blur-md shadow-2xl`) fixed at top.
- **Features**:
  - Brand SVG mark with gradient wave and HireLoom typography.
  - Desktop Navigation links: *Features*, *Solutions*, *AI Screening*, *Pricing*, *Resources*.
  - Action buttons: "Sign In" and "Book a Demo" (`bg-[#8028E4]`).
  - Mobile responsive hamburger menu with full-screen slide-down backdrop overlay (`AnimatePresence`).

### 5.2 HeroSection (`src/app/components/sections/HeroSection.tsx`)
- **Sub-components**:
  - `TextMorph`: Cycle keywords ("precision.", "speed.", "confidence.", "intelligence.") in purple accent `#8028E4`.
  - `BackgroundBoxes`: Interactive 3D perspective grid background with mouse projection lighting.
  - `ContainerScroll`: Scroll-driven 3D perspective container that rotates and scales down as the page scrolls down.
  - `DashboardMockup`: High-fidelity macOS dashboard preview showcasing candidate scores (e.g., Sarah Chen 94/100, Marcus Rivera 87/100), hiring pipeline stats, and sidebar navigation.
- **Trust Elements**: "No credit card required", "GDPR compliant", "SOC 2 Type II".

### 5.3 TrustedBySection (`src/app/components/sections/TrustedBySection.tsx`)
- **Grid Layout**: 2-column on mobile, 5-column on desktop containing SVGL SVG company wordmarks (Firecrawl, Tembo, Travelperk, Intello, Turso, Clerk, Docus, Sanity, Interfere, Orshot).
- **Decorations**: `PlusIcon` decorators positioned at grid line intersections.

### 5.4 ProblemSection (`src/app/components/sections/ProblemSection.tsx`)
- **Key Metrics**:
  - `72%`: Qualified candidates rejected by keyword ATS filters (`#EF4444`).
  - `23 days`: Average time-to-hire for technical roles (`#F59E0B`).
  - `$4,700`: Average cost per bad hire due to unstructured evaluation (`#8028E4`).

### 5.5 SolutionSection (`src/app/components/sections/SolutionSection.tsx`)
- **6-Step Process**:
  1. *Post Job* -> 2. *AI Match* -> 3. *AI Interview* -> 4. *Scorecard* -> 5. *Human Review* -> 6. *Hire*.
- **Visuals**: Dark section (`bg-[#0A0A14]`) with horizontal gradient connecting line and step number badges.

### 5.6 FeaturesSection (`src/app/components/sections/FeaturesSection.tsx`)
- **Feature Cards (10)**: AI Candidate Matching, Resume Intelligence, Video Pre-screening, Explainable Scorecards, ATS Pipeline, Hiring Analytics, Team Collaboration, Calendar Integration, Workflow Automation, Security & Compliance.
- **Interactive Effect**: Wrapped in `Spotlight` component for cursor radial glow effect.

### 5.7 ProductShowcaseSection (`src/app/components/sections/ProductShowcaseSection.tsx`)
- **Background**: `StarfieldCanvas` particle system rendering 280 physics-driven stars repulsing from cursor.
- **Interactive Tabs**:
  - `Recruiter Dashboard`: Active hiring pipeline table with urgency badges, applicant counts, and stage tags.
  - `AI Interview`: Live candidate video pre-screening preview (Sarah Chen) with active question ticker, countdown timer, real-time signal progress bars (Communication 88, Technical 92, Systems 79), and question step indicator.
  - `Analytics`: 7-day bar chart displaying AI Screening Quality Scores and metrics (+24% screened this week).
- **Constraint Utility**: Dashboard uses `data-starfield-ignore="true"` to prevent canvas mouse repulsion while interacting inside the UI cards.

### 5.8 AIScreeningSection (`src/app/components/sections/AIScreeningSection.tsx`)
- **Focus**: Decision transparency and explainable scorecards.
- **Demo Scorecard**: Overall rating (91/100) for candidate Sarah Chen with evidence quotes for Systems Design, Communication, Technical Depth, and Problem Solving, concluding with an automated AI Recommendation block.

### 5.9 ComparisonSection (`src/app/components/sections/ComparisonSection.tsx`)
- **Interactive Matrix Table**: 8 key feature rows contrasting Traditional ATS against HireLoom OS.
- **Features & Enhancements**:
  - **Category Filter Tabs**: Interactive pill switcher (`All Capabilities`, `AI & Velocity`, `Accuracy & Evidence`, `Trust & Compliance`) with Framer Motion spring layout transitions.
  - **HireLoom OS Hero Spotlight Column**: Elevated column (`col-span-4`) featuring custom `AI Native` pill tags, soft purple container fills (`bg-[#F4F0FF]/40`), and individual feature impact badges (e.g. `Semantic Engine`, `24/7 Automated`, `100% Audit-Ready`, `10x Velocity`, `EEOC Compliant`).
  - **Accent Dot Background Overlay**: Powered by `<BGPattern variant="dots" mask="fade-center" fill="rgba(128, 40, 228, 0.8)" size={24} />` for smooth center-faded dot texture.
  - **Responsive Mobile Layout (<768px)**: Touch-friendly view toggle (`Traditional ATS` vs `HireLoom AI`) to eliminate mobile grid squishing.
  - **Bottom Summary Impact Banner**: Dark glassmorphic banner showcasing key ROI metrics (`80% Time Saved`, `< 24h Shortlist Speed` with `whitespace-nowrap`, `100% Audit Proof`) and a direct **Book a Demo** conversion CTA.

### 5.10 SecuritySection (`src/app/components/sections/SecuritySection.tsx`)
- **Pillars**: SOC 2 Type II, GDPR Compliance, Data Encryption (AES-256 / TLS 1.3), Audit Logging, Role-Based Access (RBAC).

### 5.11 TestimonialsSection (`src/app/components/sections/TestimonialsSection.tsx`)
- **Animation Pattern**: Dual-row infinite scrolling `Marquee` component.
  - Row 1: Scrolls Left (Nadia Osei, Tom Ashford, Priya Anand).
  - Row 2: Scrolls Right / Reverse (James Liu, Sarah Okonkwo, Marcus Webb).
  - Feature: Pauses on card hover (`onMouseEnter`/`onMouseLeave` toggle of `animationPlayState`).
  - Aesthetics: Fixed card width (`w-72`), dark `#12121F` background, star ratings, gradient-initial avatars, and edge gradient masks (`#0A0A14`).

### 5.12 PricingSection (`src/app/components/sections/PricingSection.tsx`)
- **Billing Cycle Toggle**: Monthly vs. Annual (saves 15%).
- **Plans**:
  - *Startup* ($299/mo annual): Up to 5 open roles, 50 async video interviews/mo.
  - *Growth* ($799/mo annual - Most Popular): Up to 25 open roles, unlimited video interviews, explainable scorecards, ATS pipeline.
  - *Enterprise* (Custom): Unlimited roles, custom AI models, SCIM provisioning, dedicated CSM, 99.9% SLA.

### 5.13 FAQSection (`src/app/components/sections/FAQSection.tsx`)
- **Interactive Accordion**: 8 common questions regarding AI matching algorithms, candidate transparency, bias mitigation, EEOC/GDPR compliance, ATS integrations (Greenhouse, Lever, Workday), and data retention.

### 5.14 CTASection (`src/app/components/sections/CTASection.tsx`) & Footer (`src/app/components/sections/Footer.tsx`)
- **CTA**: Solid purple background (`bg-[#8028E4]`) with radial glow overlays.
- **Footer**: Brand mark, brief statement, SOC 2/GDPR compliance badges, 4 link categories (*Product*, *Solutions*, *Resources*, *Company*), and legal copyright text.

---

## 6. Shared Design System & Visual Utilities

### 6.1 Color Palette Tokens

```tsx
// Core Brand Colors
Primary Purple:       #8028E4
Accent Purple:        #A855F7
Dark Purple Accent:   #3F0086 / #4A2080
Soft Purple Light:    #F4F0FF / #F0E6FF / #EDE0FF

// Background Systems
Primary Light:        #FFFFFF
Section Light Alt:    #F9F9FB / #FAFAFA / #FAFAFC
Primary Dark:         #0A0A14 / #06060F
Card Dark Alt:        #12121F / #1A1030

// Typography Colors
Text Dark Primary:    #0A0A14
Text Dark Secondary:  #4A4A60 / #6B6B80
Text Dark Muted:      #9999AA
Text Light Primary:   #FFFFFF
Text Light Secondary: #CCCCDD / #9999AA
```

### 6.2 Typography Tokens (`src/app/components/sections/shared.ts`)
- **Headings Font (`jakarta`)**: `'Plus Jakarta Sans', sans-serif` — used for main section headers, stats, candidate names, and pricing numbers.
- **Body Font (`inter`)**: `'Inter', sans-serif` — used for paragraphs, feature descriptors, table rows, and button labels.

### 6.3 Animation & Motion Variants
- **`fadeUp(delay)` Preset**:
  ```ts
  export const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  });
  ```
- **Marquee Keyframes**: `@keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`

---

## 7. Guidelines for Developers & Future Extensions

1. **Adding a New Landing Page Section**:
   - Create a new component inside `src/app/components/sections/NewSection.tsx`.
   - Import `fadeUp`, `jakarta`, and `inter` from `./shared`.
   - Mount `NewSection` inside `App.tsx` within the `<main>` tag.
   - If the section requires navigation anchoring, add a matching `id` attribute (e.g. `id="new-section"`) and update `links` in `navbar-1.tsx`.

2. **UI Card & Hover Effects**:
   - Use `Spotlight` for light-themed interactive cards.
   - For dark-themed cards over `StarfieldCanvas`, ensure the container includes `data-starfield-ignore="true"` so particle repulsion operates smoothly on the background without interfering with cursor interactions on text/inputs.
   - Use `BGPattern` (`src/app/components/ui/bg-pattern.tsx`) for background grid, dot, or stripe pattern overlays.

3. **Fallback Assets**:
   - For any external images or Figma imports, wrap elements with `ImageWithFallback` (`src/app/components/figma/ImageWithFallback.tsx`) to handle broken images gracefully with an SVG fallback.

---
*Last Updated: July 2026 | Knowledge Base for HireLoom Codebase*
