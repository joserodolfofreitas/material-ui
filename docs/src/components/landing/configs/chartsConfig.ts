import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const chartsHero = {
  title: 'React charts for the',
  gradientText: 'dashboards teams actually build',
  description:
    'Build dashboards and analytical surfaces with bar, line, pie, scatter, sparkline, gauge, heatmap, radar, funnel, and sankey charts, then layer in composition, zoom, pan, export, and advanced customization as your product grows.',
  status: undefined,
  ctas: [
    { label: 'Get started', href: '/x/react-charts/', variant: 'contained' as const },
    {
      label: 'View documentation',
      href: '/x/react-charts/quickstart/',
      variant: 'outlined' as const,
      color: 'secondary' as const,
    },
  ],
};

export const chartsHighlights: Omit<Highlight, 'icon'>[] = [
  {
    title: 'Essential chart types',
    description:
      'Ship the foundations teams ask for most with bar, line, pie, scatter, sparkline, and gauge charts in the free Community plan.',
    tier: 'Community',
  },
  {
    title: 'Composition API',
    description:
      'Compose axes, plots, tooltips, legends, and custom surfaces with building blocks instead of a monolithic chart config.',
    tier: 'Community',
  },
  {
    title: 'Theming and styling control',
    description:
      'Match your product system with theme-aware colors, typography, spacing, highlights, labels, and legends.',
    tier: 'Community',
  },
  {
    title: 'Advanced chart types',
    description:
      'Extend dashboards with heatmap, radar, funnel, and sankey charts when standard chart types are not enough.',
    tier: 'Pro',
  },
  {
    title: 'Zoom and pan',
    description:
      'Let users explore dense datasets with zooming, panning, and focused analysis for line, bar, scatter, and heatmap charts.',
    tier: 'Pro',
  },
  {
    title: 'Export and sharing',
    description:
      'Add toolbar-driven export so charts can move from interactive dashboards into reports, presentations, and printed workflows.',
    tier: 'Pro',
  },
];

export const chartsUseCases: Omit<UseCase, 'icon'>[] = [
  {
    title: 'Analytics dashboards',
    description:
      'Combine bar, line, pie, and gauge charts with the Data Grid for interactive analytics experiences.',
  },
  {
    title: 'Monitoring and observability',
    description:
      'Use line and scatter charts with zoom and pan for infrastructure monitoring and performance tracking.',
  },
  {
    title: 'Business intelligence and reporting',
    description:
      'Build composed chart layouts with custom tooltips, legends, labels, and export workflows for reporting products.',
  },
];

export const chartsExamples = [
  {
    title: 'Executive KPI dashboard',
    description:
      'Mix bar, line, pie, gauge, and sparkline charts to surface performance at a glance across responsive dashboard layouts.',
    href: '/x/react-charts/bars/',
    features: ['Bar, line, and pie', 'Gauge and sparkline', 'Responsive layout'],
  },
  {
    title: 'Monitoring timeline',
    description:
      'Track infrastructure, product health, or operations metrics with dense time-series views that support zoom and pan.',
    href: '/x/react-charts/zoom-and-pan/',
    features: ['Time-series lines', 'Zoom and pan', 'Focused inspection'],
  },
  {
    title: 'Composed analytics surface',
    description:
      'Combine plots, axes, legends, labels, and custom pieces to build dashboards that fit your product instead of a canned layout.',
    href: '/x/react-charts/composition/',
    features: ['Composition API', 'Custom legends', 'Reusable chart surfaces'],
  },
  {
    title: 'Advanced visual analysis',
    description:
      'Go beyond standard dashboards with heatmap, radar, funnel, and sankey charts for richer analytical views.',
    href: '/x/react-charts/heatmap/',
    features: ['Heatmap and radar', 'Funnel and sankey', 'Advanced exploration'],
  },
];

export const metaConfig = {
  title: 'MUI X Charts: React charts for real dashboards',
  description:
    'React charts for real dashboards, with essential and advanced chart types, composition, zoom and pan, export, and theme-aware customization.',
};
