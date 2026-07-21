# Plan: Replace TestimonialsSection with Marquee Scrolling Layout

## Context

The user wants to replace the current static 3-column testimonials grid with a two-row infinite marquee — matching the pattern from the uploaded `testimonial-marquee-demo.tsx`. Row 1 scrolls left, row 2 scrolls right (reverse). Cards pause on hover. Left/right fade masks create a polished fade-out effect.

**Scope constraint:** Only `TestimonialsSection` (and a helper `Marquee` component placed just before it) are modified. No other sections change.

---

## Key Adaptations from the Source Component

The uploaded component depends on:
- `Marquee` from `@/components/ui/marquee-01-utils/marquee` — **not installed**
- `Card`/`CardContent` from `@/components/ui/card` — **not installed**
- External profile image URLs from `images.shadcnspace.com` — **not usable**

All three are replaced inline:
- `Marquee` → inline component using a JSX `<style>` tag for `@keyframes` + mouse event handlers for pause-on-hover
- `Card`/`CardContent` → plain `div` elements styled with Tailwind + Hireloom tokens
- Profile images → gradient initials avatars (consistent with existing site design — same pattern used in Nav, Hero, AI Screening sections)

---

## Implementation Plan

### 1. Add inline `Marquee` component (inserted just before `TestimonialsSection`)

Self-contained helper that:
- Renders a `<style>` tag with `@keyframes marquee-scroll` (translate from 0 → -50% so the duplicated children loop seamlessly)
- Duplicates `children` twice inside a `flex w-max` track for the infinite loop effect
- `reverse` prop toggles `animation-direction`
- `pauseOnHover` uses `onMouseEnter`/`onMouseLeave` to toggle `animationPlayState` on the track element

```tsx
function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div className="overflow-hidden w-full">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex gap-4 w-max"
        style={{ animation: `marquee-scroll 30s linear infinite ${reverse ? "reverse" : "normal"}` }}
        onMouseEnter={pauseOnHover ? (e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; } : undefined}
        onMouseLeave={pauseOnHover ? (e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; } : undefined}
      >
        <div className="flex gap-4">{children}</div>
        <div className="flex gap-4" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
```

### 2. Rewrite `TestimonialsSection`

**Data:** Expand from 3 → 6 testimonials with Hireloom-specific quotes. Split: first 3 → row 1, last 3 → row 2.

New testimonials added alongside the existing 3:
- James Liu, Engineering Lead, Finvera — AI interview signal quality
- Sarah Okonkwo, Talent Director, Elevate — candidate experience
- Marcus Webb, Head of HR, Synapse — ROI / cost savings

**`ReviewCard` inline sub-component:** dark `#12121F` bg card, `w-72` fixed width, gradient-initials avatar, star ratings in `#8028E4`, quote text in `#CCCCDD`, author name/title in white/muted.

**Layout:**

```tsx
<section className="py-24 bg-[#0A0A14] overflow-hidden">
  {/* Section header — text unchanged */}
  <motion.div ...>
    <div>Customer Stories</div>
    <h2>Trusted by teams who take hiring seriously.</h2>
  </motion.div>

  <div className="relative mt-10">
    <Marquee pauseOnHover>{row1.map(...)}</Marquee>
    <div className="mt-4" />
    <Marquee reverse pauseOnHover>{row2.map(...)}</Marquee>

    {/* Fade masks anchored to dark bg color */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A14] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A14] to-transparent" />
  </div>
</section>
```

---

## Critical File

**Only file modified:** `src/app/App.tsx`

Insertions/changes:
- New `Marquee` function inserted immediately before `function TestimonialsSection()`
- `function TestimonialsSection()` fully rewritten

No import changes needed — pure CSS animation, no new packages.

---

## Verification

1. Two rows of testimonial cards scroll continuously in opposite directions
2. Hovering any card pauses that row's animation; mouse-leave resumes it
3. Left/right edges fade smoothly to `#0A0A14` (dark section bg)
4. Section header ("Customer Stories" + h2) remains above the marquee rows
5. No layout regressions in surrounding sections (PricingSection above, FAQSection below)
