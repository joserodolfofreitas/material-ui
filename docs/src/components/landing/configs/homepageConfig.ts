import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';

export interface HomepageHeroConfig {
  headline: string;
  gradientText: string;
  description: string;
  ctas: Array<{
    label: string;
    href: string;
    variant: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'secondary';
    badge?: ProductStatus;
  }>;
}

export const heroConfig: HomepageHeroConfig = {
  headline: 'The React library for',
  gradientText: 'products that scale',
  description:
    'Design in Figma, build with production-ready components, and move faster with AI for developers and end users, all in one platform trusted by thousands of teams.',
  ctas: [
    {
      label: 'Get started',
      href: '/material-ui/getting-started/',
      variant: 'contained',
    },
    {
      label: 'Fast track with AI',
      href: 'https://chat.mui.com',
      variant: 'outlined',
      color: 'primary',
      badge: 'alpha' as ProductStatus,
    },
  ],
};

export const metaConfig = {
  title: 'MUI: The UI platform for products that scale',
  description:
    'Design in Figma, build with production-ready React components, and accelerate with AI. Trusted by thousands of product teams.',
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
  secondaryCta: { label: 'Start building', href: 'https://chat.mui.com', badge: 'alpha' as ProductStatus },
};
