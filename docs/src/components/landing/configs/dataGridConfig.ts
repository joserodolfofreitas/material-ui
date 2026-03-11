import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const dataGridHero = {
  title: 'Build better products with a',
  gradientText: 'data grid that helps users get work done',
  description:
    'Give users one place to search, edit, analyze, and act on complex data with the performance, customization, and advanced workflows modern products need.',
  status: undefined,
  ctas: [],
};

export const dataGridScaleShowcaseColumns = [
  { field: '__check__', headerName: '', width: 48 },
  { field: 'venue', headerName: 'Venue', width: 110 },
  { field: 'contract', headerName: 'Contract', width: 150 },
  { field: 'desk', headerName: 'Desk', width: 90 },
  { field: 'trader', headerName: 'Trader', width: 120 },
  { field: 'bid', headerName: 'Bid', width: 90 },
  { field: 'ask', headerName: 'Ask', width: 90 },
  { field: 'spread', headerName: 'Spread', width: 90 },
  { field: 'trendSeed', headerName: '30-min trend', width: 160 },
  { field: 'filled', headerName: 'Filled', width: 120 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'updatedAt', headerName: 'Updated', width: 90 },
] as const;

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
    title: 'Admin, operations, CRM, ERP, and internal tools',
    description:
      'Manage high-volume records with inline editing, bulk actions, pinned columns, hierarchy, and fast search across business-critical workflows.',
  },
  {
    title: 'Financial and analytical workbenches',
    description:
      'Handle large datasets with virtualization, grouping, aggregation, pivoting, and Excel-style workflows.',
  },
  {
    title: 'Healthcare, manufacturing, and other data-heavy applications',
    description:
      'Handle complex records, structured hierarchies, and operational detail at scale in software where dense data is the product experience.',
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
    'A fast, extensible React data grid for products that help users search, edit, analyze, and act on complex data.',
};
