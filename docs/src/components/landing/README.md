# Landing Blocks System

A modular, content-driven system for building MUI marketing and product landing pages.

## Architecture

```
docs/src/components/landing/
├── marketingTheme.ts          # Motion tokens, card styles, status config, section presets
├── StatusBadge.tsx            # Consistent status badges (Stable, Preview, Alpha, Coming soon)
├── SectionReveal.tsx          # Scroll-triggered fade+translate reveal (respects prefers-reduced-motion)
├── HeroBlock.tsx              # Homepage hero with headline, gradient text, CTAs, optional visual
├── ComponentHeroBlock.tsx     # Product page hero with status badge, centered layout
├── TrustLogoCloudBlock.tsx    # Company logo grid with trust caption
├── PlatformLoopBlock.tsx      # "Design → Build → Start fast → Accelerate" 4-step loop
├── PlatformSuiteBlock.tsx     # Full platform overview (Core, Advanced, Design Kits, Templates, AI)
├── FeatureGridBlock.tsx       # 6-card grid of platform-level value props
├── AIExperienceBlock.tsx      # AI section with AI-native component capabilities
├── AdvancedComponentsGridBlock.tsx # All MUI X components with status badges and highlights
├── DesignKitsBlock.tsx        # Figma Design Kits section
├── CommunitySustainabilityBlock.tsx # Metrics + testimonials
├── HighlightsBlock.tsx        # Reusable highlights grid for product pages
├── UseCasesBlock.tsx          # Reusable use cases grid for product pages
├── StubLandingBlock.tsx       # Template for coming-soon/alpha product pages
├── StatsBar.tsx               # Animated stats counters (npm downloads, stars, etc.)
├── FinalCTABlock.tsx          # Closing CTA with gradient background and glow pulse
├── effects/                   # Visual effects and micro-interactions
│   ├── GradientMesh.tsx       # Animated gradient orbs background
│   ├── AnimatedCounter.tsx    # Scroll-triggered number counter with easing
│   ├── ShimmerLine.tsx        # Skeleton shimmer loading effect
│   ├── FloatingParticles.tsx  # Floating particle dots animation
│   ├── HeroShowcase.tsx       # Animated code preview with floating badges (unused)
│   ├── LiveComponentShowcase.tsx # Live MUI component dashboard (TaskCard, Table, DatePicker, etc.)
│   └── ComponentPreviewCard.tsx # Simulated Data Grid + Chart preview
├── configs/                   # TypeScript content configs (single source of truth)
│   ├── homepageConfig.ts
│   ├── dataGridConfig.ts
│   ├── chartsConfig.ts
│   ├── schedulerConfig.ts
│   ├── stubConfigs.ts         # Chatbox, Gantt, Upload, Rich Text Editor
│   └── aiPageConfig.ts
└── pages/                     # Page-level compositions
    ├── DataGridLanding.tsx
    ├── ChartsLanding.tsx
    ├── SchedulerLanding.tsx
    ├── ChatboxLanding.tsx
    ├── GanttLanding.tsx
    ├── UploadLanding.tsx
    ├── RichTextEditorLanding.tsx
    └── AILanding.tsx
```

## Adding a new product landing page

1. **Create a content config** in `configs/yourProductConfig.ts`:
   - Define hero content (title, gradientText, description, status, CTAs)
   - Define highlights array (title, description, optional status/tier)
   - Define use cases array (title, description)
   - Define meta config (title, description for SEO)

2. **Create a page composition** in `pages/YourProductLanding.tsx`:
   - Import `ComponentHeroBlock`, `HighlightsBlock`, `UseCasesBlock`, `FinalCTABlock`
   - Map your config highlights to include icons
   - Compose blocks with `<Divider />` between them

3. **Create a Next.js page** in `docs/pages/x/your-product-landing.tsx`:
   - Wrap in `BrandingCssVarsProvider`, `AppHeader`, `AppFooter`
   - Pass meta config to `<Head />`

For coming-soon or alpha products, use `StubLandingBlock` instead of `HighlightsBlock` + `UseCasesBlock`.

## Status badges

Use `StatusBadge` with one of these statuses:

| Status        | Label         | Color     | Meaning                          |
|---------------|---------------|-----------|----------------------------------|
| `stable`      | Stable        | success   | Production-ready, semver         |
| `preview`     | Preview       | info      | API may change, usable in prod   |
| `alpha`       | Alpha         | warning   | Early access, expect changes     |
| `coming-soon` | Coming soon   | default   | Announced, not yet available     |

## Content configs

All page content lives in TypeScript config files under `configs/`. This means:
- **Content is type-safe** — TypeScript catches typos and missing fields
- **Content is centralized** — one file per product, easy to find and update
- **Content is separated from layout** — change copy without touching components

## Motion tokens

Defined in `marketingTheme.ts`:
- **Durations**: `fast` (150ms), `base` (250ms), `slow` (350ms)
- **Easing**: `cubic-bezier(0.2, 0, 0, 1)` — Material standard
- **Helper**: `motionTransition(['prop1', 'prop2'], 'base')` generates CSS transition strings
- **Reduced motion**: `SectionReveal` and all hover effects respect `prefers-reduced-motion`

## Card hover pattern

Use `motionTransition` for consistent card hover effects:
```tsx
sx={[
  (theme) => ({
    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
    '&:hover': {
      transform: 'translateY(-2px)',
      borderColor: (theme.vars || theme).palette.primary[200],
      boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.12)}`,
    },
  }),
]}
```

## Visual effects

Effects live in `effects/` and are designed to be:
- **Accessible** — all animations respect `prefers-reduced-motion`
- **Performant** — CSS animations only, no JS animation loops in render
- **Decorative** — all use `aria-hidden` or are purely visual

| Effect                | Used in                          | Description                                    |
|-----------------------|----------------------------------|------------------------------------------------|
| `GradientMesh`        | HeroBlock, AIExperienceBlock, CommunitySustainabilityBlock | Drifting gradient orbs background |
| `AnimatedCounter`     | StatsBar, CommunitySustainabilityBlock | Scroll-triggered count-up with ease-out cubic  |
| `ShimmerLine`         | ComponentPreviewCard             | Skeleton shimmer for simulated data rows       |
| `FloatingParticles`   | AdvancedComponentsGridBlock      | Floating dots that drift upward                |
| `LiveComponentShowcase` | Homepage hero                  | Live MUI components in a dashboard composition |
| `HeroShowcase`        | (available, not used on homepage) | Animated code editor with floating stat badges |
| `ComponentPreviewCard`| AdvancedComponentsGridBlock      | Simulated chart + data grid preview            |

## Routes

| Page                    | Route                              |
|-------------------------|------------------------------------|
| Homepage                | `/`                                |
| AI                      | `/ai`                              |
| Data Grid landing       | `/x/data-grid-landing`             |
| Charts landing          | `/x/charts-landing`                |
| Scheduler landing       | `/x/scheduler-landing`             |
| Chatbox landing         | `/x/chatbox-landing`               |
| Gantt landing           | `/x/gantt-landing`                 |
| Upload landing          | `/x/upload-landing`                |
| Rich Text Editor landing| `/x/rich-text-editor-landing`      |
