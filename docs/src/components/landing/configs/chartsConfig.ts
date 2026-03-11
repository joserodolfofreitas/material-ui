import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const chartsHero = {
  title: 'Build better products with',
  gradientText: 'charts that help users make decisions',
  description:
    'Turn data into analytical views that help users spot patterns, compare outcomes, and act faster, with charts that are composable, themeable, and ready for advanced product experiences.',
  status: undefined,
  ctas: [],
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
  title: 'MUI X Charts: React charts that help users make decisions',
  description:
    'React charts that help users compare outcomes, spot patterns, and act faster, with composition, advanced chart types, zoom and pan, and theme-aware customization.',
};
