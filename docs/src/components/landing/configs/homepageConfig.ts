import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';

export interface HomepageHeroConfig {
  overline?: string;
  headline: string;
  gradientText: string;
  headlineSuffix?: string;
  description: string;
  proofLine?: string;
  ctas: Array<{
    label: string;
    href: string;
    variant: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary';
    badge?: ProductStatus;
  }>;
}

export const heroConfig: HomepageHeroConfig = {
  overline: 'Reliable, battle-tested UI',
  headline: 'The most',
  gradientText: 'comprehensive UI platform',
  headlineSuffix: 'for React applications.',
  description:
    'Build production-ready interfaces faster with customizable components, advanced building blocks, and AI-native workflows.',
  proofLine: 'Built for enterprise.',
  ctas: [
    {
      label: 'Get started',
      href: '/material-ui/getting-started/',
      variant: 'contained',
    },
    {
      label: 'Explore advanced components',
      href: '/x/',
      variant: 'outlined',
      color: 'secondary',
    },
  ],
};

export const metaConfig = {
  title: 'MUI: The most comprehensive UI platform for React applications',
  description:
    'The most comprehensive UI platform for React applications. MUI brings customizable components, advanced building blocks, trusted documentation, and AI-native workflows to product teams.',
  card: '/static/social-previews/home-preview.jpg',
};

export const navConfig = {
  primary: [
    { label: 'Products', href: '/x/' },
    { label: 'Docs', href: '/material-ui/getting-started/' },
    { label: 'Pricing', href: '/pricing/' },
    { label: 'Customers', href: '/customers/' },
    { label: 'Blog', href: '/blog/' },
  ],
  primaryCta: { label: 'Get started', href: '/material-ui/getting-started/' },
  secondaryCta: {
    label: 'Start building',
    href: 'https://chat.mui.com',
    badge: 'alpha' as ProductStatus,
  },
};
