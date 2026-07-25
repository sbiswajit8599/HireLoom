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
│   │   │   │   ├── CTASection.tsx             # Conversion section with dual CTAs and rounded-b-[40px] edge
│   │   │   │   ├── FAQSection.tsx             # Accordion-style interactive FAQs
│   │   │   │   ├── FeaturesSection.tsx        # 10 platform feature cards with Spotlight FX
│   │   │   │   ├── Footer.tsx                 # Full-width sticky curtain reveal footer with floating top arrow
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
│   │   │       ├── demo.tsx                   # Standalone demo for SignInPage component
│   │   │       ├── logo-cloud-2.tsx           # Logo card grid container with layout dividers
│   │   │       ├── navbar-1.tsx               # Floating glassmorphism navbar & mobile menu overlay
│   │   │       ├── sign-in.tsx                # Right-sided sign-in page with Google & LinkedIn quick login
│   │   │       ├── spotlight.tsx              # Dynamic radial gradient spotlight hover component
│   │   │       ├── starfield-hero.tsx         # Interactive canvas-based starfield particle system
│   │   │       ├── sticky-footer.tsx          # ClipPath sticky reveal footer component primitive
│   │   │       ├── text-morph.tsx             # Animated word-morphing text effect
│   │   │       └── [shadcn UI components]    # Reusable Radix/Tailwind primitives (accordion, button, card, etc.)
│   │   ├── App.tsx                        # Main page container & view state switcher ('landing' | 'signin')
│   │   └── main.tsx                       # React root entry point
│   ├── components/
│   │   └── ui/
│   │       ├── sign-in.tsx                # Dual alias path for sign-in component
│   │       └── sticky-footer.tsx          # Dual alias path for sticky-footer component
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
| **Animation & Motion** | Framer Motion 12.42 | Scroll-driven transforms, view state transitions (`AnimatePresence`) |
| **Canvas & FX Graphics** | HTML5 2D Canvas + Math Projections | `StarfieldCanvas` physics engine and 3D projection plane `BackgroundBoxes` |
| **Icons** | Lucide React | Consistent vector iconography (`Brain`, `Video`, `Shield`, `Eye`, `ArrowUp`, etc.) |

---

## 4. Page Architecture & Navigation Flow

The application features a single-page view router in `App.tsx` supporting seamless transitions between the main landing page and the sign-in workspace.

```
[ App.tsx Container (bg-[#06060F], Plus Jakarta Sans / Inter font baseline) ]
 ├── View: 'landing'
 │    ├── <Nav onSignInClick={openSignIn} />      (Fixed floating glass navbar z-50)
 │    ├── <main className="relative z-10 bg-white rounded-b-[40px] shadow-2xl overflow-hidden">
 │    │    ├── <HeroSection />
 │    │    ├── <TrustedBySection />
 │    │    ├── <ProblemSection />
 │    │    ├── <SolutionSection />
 │    │    ├── <FeaturesSection />
 │    │    ├── <ProductShowcaseSection />
 │    │    ├── <AIScreeningSection />
 │    │    ├── <ComparisonSection />
 │    │    ├── <SecuritySection />
 │    │    ├── <TestimonialsSection />
 │    │    ├── <PricingSection />
 │    │    ├── <FAQSection />
 │    │    └── <CTASection />                      (rounded-b-[40px])
 │    │    </main>
 │    └── <Footer onSignInClick={openSignIn} />   (Full-width clipPath curtain reveal footer with floating ArrowUp)
 └── View: 'signin'
      └── <SignInPage onBackToHome={closeSignIn} /> (Right-side form + Google/LinkedIn quick login + recruiter testimonials)
```

---

## 5. Section Breakdown & Components

### 5.1 Nav (`src/app/components/sections/Nav.tsx` & `ui/navbar-1.tsx`)
- **Visual Design**: Floating glassmorphism pill (`bg-zinc-950/75 border border-white/10 backdrop-blur-md shadow-2xl`) fixed at top.
- **Features**:
  - Brand SVG mark with gradient wave and HireLoom typography.
  - Desktop Navigation links: *Features*, *Solutions*, *AI Screening*, *Pricing*, *Resources*.
  - Action buttons: "Sign In" (triggers `onSignInClick`) and "Book a Demo" (`bg-[#8028E4]`).
  - Mobile responsive hamburger menu with full-screen slide-down backdrop overlay (`AnimatePresence`).

### 5.2 HeroSection (`src/app/components/sections/HeroSection.tsx`)
- **Sub-components**:
  - `TextMorph`: Cycle keywords ("precision.", "speed.", "confidence.", "intelligence.") in purple accent `#8028E4`.
  - `BackgroundBoxes`: Interactive 3D perspective grid background with mouse projection lighting.
  - `ContainerScroll`: Scroll-driven 3D perspective container that rotates and scales down as the page scrolls down.
  - `DashboardMockup`: High-fidelity macOS dashboard preview showcasing candidate scores, hiring pipeline stats, and sidebar navigation.

### 5.3 Features & Product Showcase
- **FeaturesSection**: 10 Spotlight feature cards.
- **ProductShowcaseSection**: Interactive `StarfieldCanvas` physics-driven particle system with tabs (Recruiter Dashboard, AI Interview, Analytics).
- **ComparisonSection**: 8 key feature matrix contrasting Traditional ATS vs. HireLoom OS with category filter pills and dot background pattern.

### 5.4 SignInPage (`src/app/components/ui/sign-in.tsx`)
- **Layout**: Desktop right-side form layout (`md:flex-row-reverse`), with left-side WebGL animated grain gradient panel powered by **React Bits `<Grainient />`** (`ogl`) and 3-step vertical onboarding stepper (*1. Sign up your account*, *2. Set up your profile*, *3. Explore opportunities*).
- **Features**:
  - Centered HireLoom brand mark, headline ("Where Talent Meets Opportunity"), and tagline.
  - HireLoom header & white circular back arrow navigation button.
  - Email/password form with glassmorphic inputs (`GlassInputWrapper`), password visibility toggle (`Eye`/`EyeOff`), and primary `#8028E4` action button.
  - Dual Quick Login buttons: **Continue with Google** & **Continue with LinkedIn** (`#0A66C2`).

### 5.5 Footer (`src/app/components/sections/Footer.tsx`)
- **Layout**: Full-width curtain reveal footer using CSS `clipPath: polygon(0% 0, 100% 0%, 100% 100%, 0 100%)` and `fixed bottom-0` sticky container.
- **Features**:
  - Full-width column grid (`w-full px-6 md:px-12 lg:px-16 xl:px-20`).
  - Floating back-to-top circular action button (`fixed bottom-6 right-6 z-50 bg-[#8028E4] hover:scale-110`).
  - Brand pitch, compliance badge (SOC 2 Type II, GDPR, EEOC), 4 link categories (*Product*, *Solutions*, *Resources*, *Company*), and legal disclosures.

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
- **Headings Font (`jakarta`)**: `'Plus Jakarta Sans', sans-serif`.
- **Body Font (`inter`)**: `'Inter', sans-serif`.

---

## 7. Guidelines for Developers & Future Extensions

1. **Adding New Routes or Views**:
   - Update state handling in `App.tsx` (`currentView: 'landing' | 'signin' | 'newview'`).
   - Wrap view components in `AnimatePresence` with `motion.div` opacity and translate transitions.

2. **UI Card & Hover Effects**:
   - Use `Spotlight` for light-themed interactive cards.
   - For dark-themed cards over `StarfieldCanvas`, ensure the container includes `data-starfield-ignore="true"`.
   - Use `BGPattern` (`src/app/components/ui/bg-pattern.tsx`) for dot or grid pattern overlays.

---
*Last Updated: July 2026 | Knowledge Base for HireLoom Codebase*
