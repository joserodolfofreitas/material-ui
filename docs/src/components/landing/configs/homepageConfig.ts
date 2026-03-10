import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';

export interface HomepageHeroConfig {
  overline?: string;
  headline: string;
  gradientText: string;
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
  overline: 'UI platform for React teams',
  headline: 'From design to production UI, in',
  gradientText: 'one platform',
  description:
    'The most complete UI platform for React teams, with production-ready components, advanced building blocks, ready-to-use templates, and AI-native workflows.',
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
  title: 'MUI: The most complete UI platform for React teams',
  description:
    'From design to production UI in one platform. MUI brings production-ready components, advanced building blocks, trusted documentation, and AI-native workflows to React teams.',
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
