import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import LocalGroceryStoreRounded from '@mui/icons-material/LocalGroceryStoreRounded';
import MicRounded from '@mui/icons-material/MicRounded';
import SchemaRounded from '@mui/icons-material/SchemaRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import ViewKanbanRounded from '@mui/icons-material/ViewKanbanRounded';
import PivotTableChartRounded from '@mui/icons-material/PivotTableChartRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';
import XGridGlobalStyles from 'docs/src/components/home/XGridGlobalStyles';
import { BarChart } from '@mui/x-charts/BarChart';
import {
  DataGridPremium,
  type GridColDef as PremiumGridColDef,
  type GridPivotModel,
} from '@mui/x-data-grid-premium';
import {
  DataGridPro,
  GridToolbarQuickFilter,
  type GridColDef,
  type GridRowParams,
} from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

type ShowcaseId = 'scale' | 'ai' | 'tree' | 'pivot';

const showcaseMeta: Record<
  ShowcaseId,
  {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
  }
> = {
  scale: {
    label: '100K+ rows',
    eyebrow: 'Performance at scale',
    title: 'A high-volume operations grid with 100,000 rows',
    description:
      'Show how virtualization, quick filtering, and pagination hold up when the grid is carrying the weight of a real internal product.',
    chips: ['100,000 rows', 'Virtualized rendering', 'Quick filter'],
  },
  ai: {
    label: 'AI assistance',
    eyebrow: 'AI-native workflow',
    title: 'A grocery basket analyzer with AI Assistance',
    description:
      'Use a dataset people immediately understand, then let the grid respond to a natural-language instruction that groups, summarizes, and visualizes basket value.',
    chips: ['Relatable dataset', 'Prompt-driven analysis', 'Synced chart'],
  },
  tree: {
    label: 'Tree + detail',
    eyebrow: 'Structured complexity',
    title: 'Tree data and master-detail in one workspace',
    description:
      'This mirrors project and operations software, where teams need hierarchy at a glance and deeper detail only when they ask for it.',
    chips: ['Tree data', 'Master-detail', 'Hierarchical workflows'],
  },
  pivot: {
    label: 'Pivot + charts',
    eyebrow: 'Analytical workflows',
    title: 'Pivoting paired with chart-driven analysis',
    description:
      'Turn flat revenue records into an analytical view by pivoting by quarter and segment, then keep the chart in sync with the same business question.',
    chips: ['Pivoting', 'Aggregation', 'Chart workflows'],
  },
};

const shoppingRows = [
  { id: 1, category: 'Produce', city: 'Austin', basket: 'Family restock', items: 18, basketTotal: 92, rating: 4.8 },
  { id: 2, category: 'Produce', city: 'Seattle', basket: 'Weeknight top-up', items: 9, basketTotal: 41, rating: 4.5 },
  { id: 3, category: 'Snacks', city: 'Chicago', basket: 'Movie night', items: 11, basketTotal: 38, rating: 4.2 },
  { id: 4, category: 'Dairy', city: 'Boston', basket: 'Breakfast staples', items: 7, basketTotal: 29, rating: 4.7 },
  { id: 5, category: 'Frozen', city: 'Denver', basket: 'Weekend prep', items: 13, basketTotal: 58, rating: 4.4 },
  { id: 6, category: 'Produce', city: 'San Diego', basket: 'Lunchbox fill-up', items: 15, basketTotal: 67, rating: 4.9 },
  { id: 7, category: 'Snacks', city: 'Portland', basket: 'Game day order', items: 16, basketTotal: 64, rating: 4.3 },
  { id: 8, category: 'Dairy', city: 'Phoenix', basket: 'Weekly basics', items: 10, basketTotal: 35, rating: 4.6 },
] as const;

const shoppingColumns: PremiumGridColDef<(typeof shoppingRows)[number]>[] = [
  { field: 'category', headerName: 'Category', width: 120 },
  { field: 'city', headerName: 'City', width: 120 },
  { field: 'basket', headerName: 'Basket', width: 160 },
  { field: 'items', headerName: 'Items', type: 'number', width: 80 },
  {
    field: 'basketTotal',
    headerName: 'Basket total',
    type: 'number',
    width: 120,
    valueFormatter: (value) => `$${Number(value)}`,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 88,
    valueFormatter: (value) => `${value}/5`,
  },
];

const shoppingChart = [
  { category: 'Produce', value: 200 },
  { category: 'Snacks', value: 102 },
  { category: 'Dairy', value: 64 },
  { category: 'Frozen', value: 58 },
] as const;

const projectRows = [
  {
    id: 1,
    path: ['Platform'],
    owner: 'Maya Chen',
    status: 'On track',
    budget: '$1.2M',
    nextMilestone: 'Architecture sign-off',
    detail:
      'Cross-functional program coordinating design system, analytics, and release readiness across three product teams.',
  },
  {
    id: 2,
    path: ['Platform', 'Design system'],
    owner: 'Iris Chen',
    status: 'In review',
    budget: '$420K',
    nextMilestone: 'Token audit',
    detail:
      'Standardize color, spacing, and component contracts, with adoption support across internal tools.',
  },
  {
    id: 3,
    path: ['Platform', 'Analytics'],
    owner: 'Noah Park',
    status: 'On track',
    budget: '$390K',
    nextMilestone: 'Dashboard rollout',
    detail:
      'Deliver shared revenue and product health reporting with row grouping, export, and audit-safe data flows.',
  },
  {
    id: 4,
    path: ['Fulfillment'],
    owner: 'Sofia Bell',
    status: 'At risk',
    budget: '$980K',
    nextMilestone: 'Carrier retry logic',
    detail:
      'Reduce delivery failures across fulfillment operations, with escalation playbooks and routing observability.',
  },
  {
    id: 5,
    path: ['Fulfillment', 'Routing engine'],
    owner: 'Theo Ivanov',
    status: 'At risk',
    budget: '$510K',
    nextMilestone: 'Beta launch',
    detail:
      'Improve route quality and handoff timing for peak periods while keeping exception handling visible.',
  },
  {
    id: 6,
    path: ['Fulfillment', 'Exceptions'],
    owner: 'Luca Perez',
    status: 'On track',
    budget: '$180K',
    nextMilestone: 'Ops training',
    detail:
      'Give support teams a faster way to resolve failed deliveries, substitutions, and customer follow-ups.',
  },
] as const;

const projectColumns: GridColDef<(typeof projectRows)[number]>[] = [
  { field: 'owner', headerName: 'Owner', width: 130 },
  { field: 'status', headerName: 'Status', width: 120 },
  { field: 'budget', headerName: 'Budget', width: 110 },
  { field: 'nextMilestone', headerName: 'Next milestone', width: 180 },
];

const pivotRows = [
  { id: 1, region: 'North America', segment: 'Enterprise', quarter: 'Q1', revenue: 1.4 },
  { id: 2, region: 'North America', segment: 'Enterprise', quarter: 'Q2', revenue: 1.6 },
  { id: 3, region: 'North America', segment: 'Mid-market', quarter: 'Q1', revenue: 0.9 },
  { id: 4, region: 'North America', segment: 'Mid-market', quarter: 'Q2', revenue: 1.1 },
  { id: 5, region: 'EMEA', segment: 'Enterprise', quarter: 'Q1', revenue: 1.1 },
  { id: 6, region: 'EMEA', segment: 'Enterprise', quarter: 'Q2', revenue: 1.4 },
  { id: 7, region: 'EMEA', segment: 'Mid-market', quarter: 'Q1', revenue: 0.7 },
  { id: 8, region: 'EMEA', segment: 'Mid-market', quarter: 'Q2', revenue: 0.9 },
  { id: 9, region: 'APAC', segment: 'Enterprise', quarter: 'Q1', revenue: 1.0 },
  { id: 10, region: 'APAC', segment: 'Enterprise', quarter: 'Q2', revenue: 1.2 },
  { id: 11, region: 'APAC', segment: 'Mid-market', quarter: 'Q1', revenue: 0.8 },
  { id: 12, region: 'APAC', segment: 'Mid-market', quarter: 'Q2', revenue: 0.95 },
] as const;

const pivotColumns: PremiumGridColDef<(typeof pivotRows)[number]>[] = [
  { field: 'region', headerName: 'Region', width: 140 },
  { field: 'segment', headerName: 'Segment', width: 130 },
  { field: 'quarter', headerName: 'Quarter', width: 100 },
  {
    field: 'revenue',
    headerName: 'Revenue ($M)',
    type: 'number',
    width: 120,
    valueFormatter: (value) => `$${Number(value).toFixed(2)}M`,
  },
];

const pivotModel: GridPivotModel = {
  rows: [{ field: 'region' }],
  columns: [{ field: 'quarter' }],
  values: [{ field: 'revenue', aggFunc: 'sum' }],
};

const pivotChart = [
  { region: 'North America', value: 5.0 },
  { region: 'EMEA', value: 4.1 },
  { region: 'APAC', value: 3.95 },
] as const;

const visibleFields = ['commodity', 'unitPrice', 'quantity', 'filledQuantity', 'status', 'traderName'] as const;

export default function DataGridFeatureShowcaseBlock() {
  const [active, setActive] = React.useState<ShowcaseId>('scale');

  return (
    <Section cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Advanced showcase"
          title={
            <Typography variant="h2">
              Ready-to-use advanced features for <GradientText>serious product teams</GradientText>
            </Typography>
          }
          description="Move through the kinds of workflows teams actually ask for on the Data Grid page: massive datasets, AI assistance, tree data with detail panels, and analytical pivot views."
        />
      </SectionReveal>
      <SectionReveal delay={60}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'center', alignItems: 'center', mt: 2, mb: 3 }}
        >
          {(Object.keys(showcaseMeta) as ShowcaseId[]).map((id) => (
            <Button
              key={id}
              variant={active === id ? 'contained' : 'outlined'}
              color={active === id ? 'primary' : 'secondary'}
              onClick={() => setActive(id)}
              sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700, whiteSpace: 'nowrap' }}
            >
              {showcaseMeta[id].label}
            </Button>
          ))}
        </Stack>
      </SectionReveal>
      <SectionReveal delay={120}>
        <Paper
          variant="outlined"
          sx={(theme) => ({
            overflow: 'hidden',
            borderRadius: premiumTokens.radius.xl,
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[300], 0.16)
                : alpha(theme.palette.primary[100], 0.9),
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primaryDark[900], 0.9)
                : alpha(theme.palette.common.white, 0.88),
            backdropFilter: 'blur(18px)',
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 18px 50px ${alpha(theme.palette.common.black, 0.28)}`
                : `0 18px 50px ${alpha(theme.palette.primary[900], 0.08)}`,
          })}
        >
          <Box sx={{ p: { xs: 2, md: 2.5 }, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={1.5}>
              <Box>
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main' }}>
                  {showcaseMeta[active].eyebrow}
                </Typography>
                <Typography variant="h4" sx={{ mt: 0.5, maxWidth: 760 }}>
                  {showcaseMeta[active].title}
                </Typography>
              </Box>
              <Typography sx={{ color: 'text.secondary', maxWidth: 760 }}>
                {showcaseMeta[active].description}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                {showcaseMeta[active].chips.map((chip) => (
                  <Chip
                    key={chip}
                    size="small"
                    label={chip}
                    sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
          <Box key={active}>
            {active === 'scale' && <ScaleShowcase />}
            {active === 'ai' && <AiShowcase />}
            {active === 'tree' && <TreeDetailShowcase />}
            {active === 'pivot' && <PivotChartsShowcase />}
          </Box>
        </Paper>
      </SectionReveal>
    </Section>
  );
}

function ScaleShowcase() {
  const { loading, data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    maxColumns: 8,
    editable: true,
    visibleFields: [...visibleFields],
  });

  const sortedColumns = React.useMemo(() => {
    return [...data.columns].sort(
      (a, b) => visibleFields.indexOf(a.field as (typeof visibleFields)[number]) - visibleFields.indexOf(b.field as (typeof visibleFields)[number]),
    );
  }, [data.columns]);

  return (
    <Box sx={{ p: { xs: 1.5, md: 2 } }}>
      <XGridGlobalStyles selector="#data-grid-showcase-scale" pro />
      <Grid container spacing={2} sx={{ mb: 2 }}>
        {[
          { label: 'Rows loaded', value: '100,000' },
          { label: 'Visible columns', value: '6' },
          { label: 'Scroll experience', value: 'Virtualized' },
        ].map((item) => (
          <Grid key={item.label} size={{ xs: 12, sm: 4 }}>
            <Paper
              elevation={0}
              sx={(theme) => ({
                p: 1.5,
                borderRadius: premiumTokens.radius.lg,
                border: '1px solid',
                borderColor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[300], 0.1)
                    : alpha(theme.palette.primary[100], 0.75),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.02)
                    : alpha(theme.palette.primary[50], 0.5),
              })}
            >
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary' }}>
                {item.label}
              </Typography>
              <Typography sx={{ mt: 0.5, fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' }}>
                {item.value}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper id="data-grid-showcase-scale" variant="outlined" sx={{ height: 500, borderRadius: premiumTokens.radius.lg }}>
        <DataGridPro
          {...data}
          columns={sortedColumns}
          loading={loading}
          density="compact"
          pagination
          checkboxSelection
          disableRowSelectionOnClick
          pageSizeOptions={[25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 },
            },
          }}
          slots={{ toolbar: GridToolbarQuickFilter }}
          slotProps={{
            toolbar: {
              quickFilterParser: (input: string) => input.split(/\s+/).filter(Boolean),
            },
          }}
        />
      </Paper>
    </Box>
  );
}

function AiShowcase() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 300px' },
        gap: 0,
      }}
    >
      <Box sx={{ p: { xs: 1.5, md: 2 }, borderRight: { md: '1px solid' }, borderColor: 'divider' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ mb: 1.5, justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
            Prompt: Group by category and total basket value.
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main' }}>
            Produce leads with $200
          </Typography>
        </Stack>
        <Box sx={{ height: 380 }}>
          <DataGridPremium
            rows={shoppingRows}
            columns={shoppingColumns}
            hideFooter
            density="compact"
            disableColumnMenu
            disableRowSelectionOnClick
            rowHeight={42}
            columnHeaderHeight={42}
            initialState={{
              rowGrouping: { model: ['category'] },
              aggregation: {
                model: {
                  items: 'sum',
                  basketTotal: 'sum',
                  rating: 'avg',
                },
              },
              columns: {
                columnVisibilityModel: {
                  city: false,
                },
              },
            }}
            groupingColDef={{ headerName: 'Category group', minWidth: 170 }}
            isGroupExpandedByDefault={() => true}
            sx={(theme) => gridSurfaceSx(theme)}
          />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1.5, md: 2 }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Paper elevation={0} sx={(theme) => sideCardSx(theme)}>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <Box sx={(theme) => iconBadgeSx(theme)}>
              <SmartToyRounded sx={{ fontSize: 18 }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>AI Assistance</Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                Natural language for a familiar shopping dataset
              </Typography>
            </Box>
            <Chip
              size="small"
              icon={<MicRounded sx={{ fontSize: '14px !important' }} />}
              label="Voice + text"
              variant="outlined"
              sx={{ ml: 'auto', borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
            />
          </Stack>
          <Divider />
          <Stack spacing={1.25} sx={{ pt: 1.25 }}>
            <Box sx={(theme) => promptBubbleSx(theme)}>
              <Typography sx={{ fontSize: 13, lineHeight: 1.45 }}>
                Group by category and total basket value
              </Typography>
            </Box>
            <Box sx={(theme) => responseBubbleSx(theme)}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 0.75 }}>
                <AutoAwesomeRounded sx={{ fontSize: 15, color: 'primary.main' }} />
                <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.primary' }}>
                  View updated
                </Typography>
              </Stack>
              <Typography sx={{ fontSize: 12.5, lineHeight: 1.6, color: 'text.secondary' }}>
                The grid is grouped by category, totals are summed, and Produce now leads the view.
              </Typography>
            </Box>
          </Stack>
        </Paper>
        <Paper elevation={0} sx={(theme) => sideCardSx(theme)}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary', mb: 0.75 }}>
            Basket value by category
          </Typography>
          <BarChart
            dataset={shoppingChart}
            xAxis={[{ dataKey: 'category', scaleType: 'band' }]}
            series={[{ dataKey: 'value', label: 'Basket total ($)', color: '#5090F7' }]}
            height={180}
            margin={{ top: 10, bottom: 24, left: 24, right: 4 }}
            hideLegend
            borderRadius={8}
          />
        </Paper>
      </Box>
    </Box>
  );
}

function TreeDetailShowcase() {
  const getTreeDataPath = React.useCallback((row: (typeof projectRows)[number]) => row.path, []);
  const getDetailPanelContent = React.useCallback(
    ({ row }: GridRowParams<(typeof projectRows)[number]>) => (
      <Box
        sx={(theme) => ({
          p: 2,
          display: 'grid',
          gap: 1.5,
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.02)
              : alpha(theme.palette.primary[50], 0.35),
        })}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
          Program brief
        </Typography>
        <Typography sx={{ fontSize: 13, color: 'text.secondary', maxWidth: 520 }}>{row.detail}</Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Chip size="small" label={`Owner: ${row.owner}`} sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }} />
          <Chip size="small" label={`Status: ${row.status}`} sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }} />
          <Chip size="small" label={`Next: ${row.nextMilestone}`} sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }} />
        </Stack>
      </Box>
    ),
    [],
  );

  const getDetailPanelHeight = React.useCallback(() => 140, []);

  return (
    <Box sx={{ p: { xs: 1.5, md: 2 } }}>
      <Paper variant="outlined" sx={{ height: 480, borderRadius: premiumTokens.radius.lg }}>
        <DataGridPro
          rows={projectRows}
          columns={projectColumns}
          treeData
          getTreeDataPath={getTreeDataPath}
          getDetailPanelContent={getDetailPanelContent}
          getDetailPanelHeight={getDetailPanelHeight}
          disableRowSelectionOnClick
          density="compact"
          initialState={{
            detailPanel: {
              expandedRowIds: new Set([2]),
            },
          }}
          sx={(theme) => gridSurfaceSx(theme)}
        />
      </Paper>
    </Box>
  );
}

function PivotChartsShowcase() {
  const pivotInitialState = {
    pivoting: {
      model: pivotModel,
      active: true,
    },
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 320px' },
        gap: 0,
      }}
    >
      <Box sx={{ p: { xs: 1.5, md: 2 }, borderRight: { md: '1px solid' }, borderColor: 'divider' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ mb: 1.5, justifyContent: 'space-between', alignItems: { sm: 'center' } }}>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
            Pivot rows by region, columns by quarter, values by revenue.
          </Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main' }}>
            North America leads in H1
          </Typography>
        </Stack>
        <Box sx={{ height: 380 }}>
          <DataGridPremium
            rows={pivotRows}
            columns={pivotColumns}
            initialState={pivotInitialState as any}
            hideFooter
            density="compact"
            disableColumnMenu
            disableRowSelectionOnClick
            rowHeight={42}
            columnHeaderHeight={42}
            sx={(theme) => gridSurfaceSx(theme)}
          />
        </Box>
      </Box>
      <Box sx={{ p: { xs: 1.5, md: 2 }, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Paper elevation={0} sx={(theme) => sideCardSx(theme)}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary' }}>
            Pivot summary
          </Typography>
          <Typography sx={{ mt: 0.5, fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' }}>
            $13.05M
          </Typography>
          <Typography sx={{ mt: 0.75, fontSize: 12, color: 'text.secondary' }}>
            Revenue aggregated across regions, segments, and H1 quarters.
          </Typography>
        </Paper>
        <Paper elevation={0} sx={(theme) => sideCardSx(theme)}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary', mb: 0.75 }}>
            Revenue by region after pivot
          </Typography>
          <BarChart
            dataset={pivotChart}
            xAxis={[{ dataKey: 'region', scaleType: 'band' }]}
            series={[{ dataKey: 'value', label: 'Revenue ($M)', color: '#5090F7' }]}
            height={180}
            margin={{ top: 10, bottom: 24, left: 24, right: 4 }}
            hideLegend
            borderRadius={8}
          />
        </Paper>
      </Box>
    </Box>
  );
}

function gridSurfaceSx(theme: any) {
  return {
    border: 0,
    '& .MuiDataGrid-columnHeaders': {
      bgcolor:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.common.white, 0.02)
          : alpha(theme.palette.primary[50], 0.6),
      borderBottomColor:
        theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary[300], 0.12)
          : alpha(theme.palette.primary[100], 0.85),
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700,
    },
    '& .MuiDataGrid-cell': {
      color: 'text.secondary',
    },
    '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within':
      {
        outline: 'none',
      },
  };
}

function sideCardSx(theme: any) {
  return {
    p: 1.5,
    borderRadius: premiumTokens.radius.lg,
    border: '1px solid',
    borderColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary[300], 0.12)
        : alpha(theme.palette.primary[100], 0.8),
    bgcolor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.03)
        : alpha(theme.palette.primary[50], 0.52),
  };
}

function iconBadgeSx(theme: any) {
  return {
    width: 32,
    height: 32,
    borderRadius: '10px',
    display: 'grid',
    placeItems: 'center',
    bgcolor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary[500], 0.18)
        : alpha(theme.palette.primary[50], 0.9),
    color: 'primary.main',
  };
}

function promptBubbleSx(theme: any) {
  return {
    ml: 'auto',
    maxWidth: 220,
    borderRadius: '12px 12px 4px 12px',
    px: 1.5,
    py: 1.25,
    bgcolor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary[500], 0.18)
        : alpha(theme.palette.primary[50], 1),
  };
}

function responseBubbleSx(theme: any) {
  return {
    maxWidth: 240,
    borderRadius: '12px 12px 12px 4px',
    px: 1.5,
    py: 1.25,
    bgcolor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.03)
        : alpha(theme.palette.grey[50], 0.9),
    border: '1px solid',
    borderColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.primary[300], 0.12)
        : alpha(theme.palette.primary[100], 0.8),
  };
}
