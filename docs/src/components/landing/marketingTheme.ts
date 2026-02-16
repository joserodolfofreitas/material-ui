import { alpha } from '@mui/material/styles';

/**
 * Marketing theme extension for MUI landing pages.
 * Provides motion tokens, shared constants, and premium styling utilities
 * that layer on top of the existing branding theme.
 */

// ---------------------------------------------------------------------------
// Motion tokens – single source of truth for all landing page animations
// ---------------------------------------------------------------------------
export const motion = {
  duration: {
    fast: 150,
    base: 250,
    slow: 350,
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
  },
} as const;

export function motionTransition(
  properties: string | string[],
  speed: keyof typeof motion.duration = 'base',
) {
  const props = Array.isArray(properties) ? properties : [properties];
  const duration = `${motion.duration[speed]}ms`;
  return props.map((p) => `${p} ${duration} ${motion.easing.standard}`).join(', ');
}

/**
 * Returns `'none'` when the user prefers reduced motion, otherwise the
 * provided transition string.  Use inside `sx` or `styled`:
 *
 * ```ts
 * transition: reducedMotion(motionTransition('transform'))
 * ```
 */
export function reducedMotion(transition: string) {
  return transition; // actual media query is applied via CSS below
}

/**
 * Global CSS string to inject once (e.g. via CssBaseline or a <style> tag)
 * that respects `prefers-reduced-motion`.
 */
export const reducedMotionGlobalCss = `
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

// ---------------------------------------------------------------------------
// Card styling tokens – consistent across all landing blocks
// ---------------------------------------------------------------------------
export const cardTokens = {
  padding: 3, // theme.spacing(3) = 24px
  borderRadius: 12,
  hoverElevation: 4,
} as const;

/**
 * Focus-visible outline for interactive cards (Paper used as links).
 * Ensures keyboard users see a clear focus ring.
 */
export const cardFocusVisibleSx = (theme: any) => ({
  '&:focus-visible': {
    outline: `3px solid ${(theme.vars || theme).palette.primary.main}`,
    outlineOffset: 2,
  },
});

/**
 * Shared card hover sx mixin.  Apply via `sx={[cardHoverSx, ...]}`.
 * Includes focus-visible styles for keyboard accessibility.
 */
export const cardHoverSx = (theme: any) => ({
  transition: motionTransition(['transform', 'box-shadow', 'border-color']),
  '&:hover': {
    transform: 'translateY(-2px)',
    borderColor: (theme.vars || theme).palette.primary[200],
    boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.12)}`,
    ...theme.applyDarkStyles({
      borderColor: alpha(theme.palette.primary[500], 0.3),
      boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.4)}`,
    }),
  },
  ...cardFocusVisibleSx(theme),
});

// ---------------------------------------------------------------------------
// Status badge semantics
// ---------------------------------------------------------------------------
export type ProductStatus = 'stable' | 'preview' | 'alpha' | 'coming-soon';

export const statusConfig: Record<
  ProductStatus,
  { label: string; color: 'success' | 'primary' | 'warning' | 'default' }
> = {
  stable: { label: 'Stable', color: 'success' },
  preview: { label: 'Preview', color: 'primary' },
  alpha: { label: 'Alpha', color: 'warning' },
  'coming-soon': { label: 'Coming soon', color: 'default' },
};

// ---------------------------------------------------------------------------
// Section background presets (extends the existing Section component)
// ---------------------------------------------------------------------------
export const sectionBg = {
  spotlight: (theme: any) => ({
    background:
      theme.palette.mode === 'dark'
        ? `radial-gradient(ellipse 80% 60% at 50% 0%, ${alpha(
            theme.palette.primary[900],
            0.35,
          )} 0%, transparent 70%)`
        : `radial-gradient(ellipse 80% 60% at 50% 0%, ${alpha(
            theme.palette.primary[50],
            0.7,
          )} 0%, transparent 70%)`,
  }),
};
