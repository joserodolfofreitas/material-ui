import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const dataGridHero = {
  title: 'A fast, extensible React data grid',
  gradientText: 'for real product workflows',
  description:
    'Go from simple CRUD tables to complex analytical workspaces with sorting, filtering, editing, column pinning, row grouping, aggregation, pivoting, export, and server-side data.',
  status: undefined,
  ctas: [
    { label: 'Get started', href: '/x/react-data-grid/', variant: 'contained' as const },
    {
      label: 'View documentation',
      href: '/x/react-data-grid/quickstart/',
      variant: 'outlined' as const,
      color: 'secondary' as const,
    },
  ],
};

export const dataGridHighlights: Omit<Highlight, 'icon'>[] = [
  {
    title: 'Core table features, ready out of the box',
    description:
      'Start with sorting, filtering, pagination, row selection, and editing in the free Community plan, then scale up without changing components.',
    tier: 'Community',
  },
  {
    title: 'Column pinning, tree data, and master-detail',
    description:
      'Handle denser workflows with pinned columns, hierarchical records, master-detail panels, and richer interaction patterns.',
    tier: 'Pro',
  },
  {
    title: 'Row grouping and aggregation',
    description:
      'Group large datasets by category, summarize values with built-in aggregations, and keep totals visible where decisions happen.',
    tier: 'Premium',
  },
  {
    title: 'Pivoting for analytical workflows',
    description:
      'Reshape datasets on the fly with pivot tables so product teams can move from raw records to analysis without leaving the grid.',
    tier: 'Premium',
  },
  {
    title: 'Server-side data source',
    description:
      'Centralize pagination, sorting, filtering, lazy loading, grouping, and caching with the Data Source layer for large datasets.',
  },
  {
    title: 'Charts integration and export',
    description:
      'Connect tabular exploration to charts and export workflows so analysis can move fluidly between records, visuals, and spreadsheets.',
    tier: 'Premium',
  },
];

export const dataGridUseCases: Omit<UseCase, 'icon'>[] = [
  {
    title: 'Admin and operations software',
    description:
      'Manage high-volume records with inline editing, bulk actions, pinned columns, and fast search.',
  },
  {
    title: 'Financial and analytical workbenches',
    description:
      'Handle large datasets with virtualization, grouping, aggregation, pivoting, and Excel-style workflows.',
  },
  {
    title: 'CRM, ERP, and internal tools',
    description:
      'Use master-detail panels, server-side data, and rich row interactions for complex business workflows.',
  },
];

export const dataGridExamples = [
  {
    title: 'Operations console',
    description:
      'Combine quick filter, inline editing, row selection, and pinned columns to manage live records without losing context.',
    href: '/x/react-data-grid/editing/',
    features: ['Inline editing', 'Quick filter', 'Column pinning'],
  },
  {
    title: 'Financial analysis workspace',
    description:
      'Use row grouping, aggregation, pivoting, and Excel export to turn raw transactions into a decision-ready view.',
    href: '/x/react-data-grid/pivoting/',
    features: ['Row grouping', 'Aggregation', 'Excel export'],
  },
  {
    title: 'Server-side data explorer',
    description:
      'Load and explore large datasets with pagination, lazy loading, caching, and server-driven sorting and filtering.',
    href: '/x/react-data-grid/server-side-data/',
    features: ['Data Source', 'Lazy loading', 'Server-side filtering'],
  },
  {
    title: 'Grid-to-chart workflow',
    description:
      'Select data in the grid and visualize it with MUI X Charts for a tighter loop between tabular and visual analysis.',
    href: '/x/react-charts/data-grid-integration/',
    features: ['Charts integration', 'Interactive analysis', 'Cross-filtered views'],
  },
];

export const dataGridWhyStrip = [
  'Battle-tested performance with millions of rows',
  'Deep customization via slots, CSS, and theme overrides',
  'Accessibility-first with keyboard navigation and screen reader support',
];

export const metaConfig = {
  title: 'MUI X Data Grid: A fast, extensible React data grid',
  description:
    'A fast, extensible React data grid for real product workflows, with editing, filtering, sorting, grouping, pivoting, export, and server-side data.',
};
