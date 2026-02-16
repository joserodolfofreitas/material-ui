import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const chartsHero = {
  title: 'Composable, dashboard-ready charts that',
  gradientText: 'match your system and scale',
  description:
    'Bar, line, pie, scatter, heatmap, radar, and more - built as composable building blocks that integrate with your MUI theme and respond to any layout.',
  status: 'stable' as ProductStatus,
  ctas: [
    { label: 'Get started', href: '/x/react-charts/', variant: 'contained' as const },
    { label: 'View documentation', href: '/x/react-charts/getting-started/', variant: 'outlined' as const, color: 'secondary' as const },
  ],
};

export const chartsHighlights: Omit<Highlight, 'icon'>[] = [
  {
    title: 'High performance rendering',
    description:
      'SVG-based rendering optimized for large datasets. Smooth animations and responsive resizing without jank.',
  },
  {
    title: 'Composable building blocks',
    description:
      'Axes, plots, legends, tooltips, and scales are independent components you compose freely - not a monolithic chart config.',
  },
  {
    title: 'Strong theming integration',
    description:
      'Charts inherit your MUI theme colors, typography, and spacing. Dark mode works out of the box.',
  },
  {
    title: 'Layout responsiveness',
    description:
      'Charts resize fluidly with their container. Responsive margins, tick density, and label placement adapt automatically.',
  },
  {
    title: 'Rich interaction model',
    description:
      'Built-in zoom, pan, highlighting, and tooltip interactions. Axis-based and item-based highlighting for dashboard workflows.',
  },
  {
    title: 'Finance charts',
    description:
      'Candlestick and OHLC chart types for financial data visualization. Built for trading dashboards and market analysis.',
    status: 'coming-soon' as ProductStatus,
  },
];

export const chartsUseCases: Omit<UseCase, 'icon'>[] = [
  {
    title: 'Analytics dashboards',
    description:
      'Combine bar, line, and pie charts with the Data Grid for interactive analytics experiences.',
  },
  {
    title: 'Monitoring and observability',
    description:
      'Real-time line charts with zoom and pan for infrastructure monitoring and performance tracking.',
  },
  {
    title: 'Business intelligence',
    description:
      'Composable chart layouts with custom tooltips, legends, and drill-down interactions for BI tools.',
  },
];

export const metaConfig = {
  title: 'MUI X Charts: Composable React charts for dashboards',
  description:
    'High-performance, composable React charts that integrate with your MUI theme. Bar, line, pie, scatter, and more.',
};
