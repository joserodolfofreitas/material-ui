import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const dataGridHero = {
  title: 'The fully featured grid for real products:',
  gradientText: 'fast, customizable, and built to scale',
  description:
    'From simple tables to enterprise-grade data experiences - editing, filtering, sorting, grouping, pivoting, and AI-powered exploration. One component, every use case.',
  status: 'stable' as ProductStatus,
  ctas: [
    { label: 'Get started', href: '/x/react-data-grid/', variant: 'contained' as const },
    { label: 'View documentation', href: '/x/react-data-grid/getting-started/', variant: 'outlined' as const, color: 'secondary' as const },
  ],
};

export const dataGridHighlights: Omit<Highlight, 'icon'>[] = [
  {
    title: 'AI assistance with voice support',
    description:
      'Let end users explore data with natural language and voice commands. AI-powered filtering, sorting, and insights turn the grid into a conversational data tool.',
    tier: 'Premium',
  },
  {
    title: 'Pivoting',
    description:
      'Reshape data on the fly with drag-and-drop pivot tables. Aggregate, group, and summarize without leaving the grid.',
    tier: 'Premium',
  },
  {
    title: 'Charts integration',
    description:
      'Visualize grid data inline with MUI X Charts. Select rows or columns and see trends, distributions, and comparisons instantly.',
    tier: 'Premium',
  },
  {
    title: 'Tree data and row grouping',
    description:
      'Display hierarchical data with expandable tree rows, or group flat data by any column. Master-detail views let users drill into nested records.',
    tier: 'Pro',
  },
  {
    title: 'Fully featured foundation',
    description:
      'Inline editing, multi-column sorting, quick filter, column pinning, row virtualization, CSV/Excel export, and clipboard support - all built in.',
  },
  {
    title: 'Server-side data source',
    description:
      'Lazy-load millions of rows with server-side filtering, sorting, and pagination. Built-in caching keeps the experience fast.',
    tier: 'Pro',
  },
];

export const dataGridUseCases: Omit<UseCase, 'icon'>[] = [
  {
    title: 'Admin dashboards',
    description:
      'Build data-dense admin panels with inline editing, bulk actions, and real-time updates.',
  },
  {
    title: 'Financial applications',
    description:
      'Handle large datasets with virtualized rendering, pivoting, and Excel-like interactions.',
  },
  {
    title: 'CRM and ERP systems',
    description:
      'Master-detail views, row grouping, and server-side data sources for complex business workflows.',
  },
];

export const dataGridIntegrations = [
  {
    title: 'Data Grid \u2194 Charts',
    description:
      'Select data in the grid and visualize it with MUI X Charts. Seamless workflows between tabular and visual data.',
  },
];

export const dataGridWhyStrip = [
  'Battle-tested performance with millions of rows',
  'Deep customization via slots, CSS, and theme overrides',
  'Accessibility-first with keyboard navigation and screen reader support',
];

export const metaConfig = {
  title: 'MUI X Data Grid: The React data grid you need',
  description:
    'A fast, feature-rich React data grid with editing, filtering, sorting, grouping, pivoting, and AI assistance. Built for real products.',
};
