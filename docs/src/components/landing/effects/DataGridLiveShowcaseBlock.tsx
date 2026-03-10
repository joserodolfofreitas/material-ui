import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import LocalGroceryStoreRounded from '@mui/icons-material/LocalGroceryStoreRounded';
import MicRounded from '@mui/icons-material/MicRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import UploadFileRounded from '@mui/icons-material/UploadFileRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';
import { BarChart } from '@mui/x-charts/BarChart';
import {
  DataGridPremium,
  type GridColDef,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';

const rows = [
  {
    id: 1,
    region: 'North America',
    account: 'Aster Retail',
    owner: 'Maya Chen',
    stage: 'Expansion',
    orders: 36,
    revenue: 2450000,
    margin: 31,
  },
  {
    id: 2,
    region: 'North America',
    account: 'Northwind Health',
    owner: 'Luca Perez',
    stage: 'Renewal',
    orders: 28,
    revenue: 1980000,
    margin: 27,
  },
  {
    id: 3,
    region: 'EMEA',
    account: 'Helix Manufacturing',
    owner: 'Sofia Bell',
    stage: 'Expansion',
    orders: 41,
    revenue: 3120000,
    margin: 34,
  },
  {
    id: 4,
    region: 'EMEA',
    account: 'Contour Energy',
    owner: 'Noah Park',
    stage: 'Renewal',
    orders: 22,
    revenue: 1640000,
    margin: 29,
  },
  {
    id: 5,
    region: 'APAC',
    account: 'Juniper Mobility',
    owner: 'Iris Chen',
    stage: 'Expansion',
    orders: 33,
    revenue: 2210000,
    margin: 30,
  },
  {
    id: 6,
    region: 'APAC',
    account: 'Blue Peak Telecom',
    owner: 'Theo Ivanov',
    stage: 'At risk',
    orders: 17,
    revenue: 1180000,
    margin: 22,
  },
] as const;

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'region', headerName: 'Region', width: 140 },
  { field: 'account', headerName: 'Account', width: 190 },
  { field: 'owner', headerName: 'Owner', width: 130 },
  { field: 'stage', headerName: 'Stage', width: 120 },
  { field: 'orders', headerName: 'Orders', type: 'number', width: 96 },
  {
    field: 'revenue',
    headerName: 'Revenue',
    type: 'number',
    width: 128,
    valueFormatter: (value) => `$${(Number(value) / 1000000).toFixed(2)}M`,
  },
  {
    field: 'margin',
    headerName: 'Margin',
    type: 'number',
    width: 96,
    valueFormatter: (value) => `${value}%`,
  },
];

const shoppingRows = [
  {
    id: 1,
    category: 'Produce',
    city: 'Austin',
    basket: 'Family restock',
    items: 18,
    basketTotal: 92,
    deliveryWindow: '6-8 PM',
    satisfaction: 4.8,
  },
  {
    id: 2,
    category: 'Produce',
    city: 'Seattle',
    basket: 'Weeknight top-up',
    items: 9,
    basketTotal: 41,
    deliveryWindow: '5-7 PM',
    satisfaction: 4.5,
  },
  {
    id: 3,
    category: 'Snacks',
    city: 'Chicago',
    basket: 'Movie night',
    items: 11,
    basketTotal: 38,
    deliveryWindow: '7-9 PM',
    satisfaction: 4.2,
  },
  {
    id: 4,
    category: 'Dairy',
    city: 'Boston',
    basket: 'Breakfast staples',
    items: 7,
    basketTotal: 29,
    deliveryWindow: '8-10 AM',
    satisfaction: 4.7,
  },
  {
    id: 5,
    category: 'Frozen',
    city: 'Denver',
    basket: 'Weekend prep',
    items: 13,
    basketTotal: 58,
    deliveryWindow: '10 AM-12 PM',
    satisfaction: 4.4,
  },
  {
    id: 6,
    category: 'Produce',
    city: 'San Diego',
    basket: 'Lunchbox fill-up',
    items: 15,
    basketTotal: 67,
    deliveryWindow: '4-6 PM',
    satisfaction: 4.9,
  },
  {
    id: 7,
    category: 'Snacks',
    city: 'Portland',
    basket: 'Game day order',
    items: 16,
    basketTotal: 64,
    deliveryWindow: '1-3 PM',
    satisfaction: 4.3,
  },
  {
    id: 8,
    category: 'Dairy',
    city: 'Phoenix',
    basket: 'Weekly basics',
    items: 10,
    basketTotal: 35,
    deliveryWindow: '6-8 PM',
    satisfaction: 4.6,
  },
] as const;

const shoppingColumns: GridColDef<(typeof shoppingRows)[number]>[] = [
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
  { field: 'deliveryWindow', headerName: 'Delivery window', width: 128 },
  {
    field: 'satisfaction',
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
];

export default function DataGridLiveShowcaseBlock() {
  const apiRef = useGridApiRef();
  const shoppingApiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: { model: ['region'] },
      aggregation: {
        model: {
          orders: 'sum',
          revenue: 'sum',
          margin: 'avg',
        },
      },
      columns: {
        columnVisibilityModel: {
          owner: false,
        },
      },
    },
  });

  const shoppingInitialState = useKeepGroupedColumnsHidden({
    apiRef: shoppingApiRef,
    initialState: {
      rowGrouping: { model: ['category'] },
      aggregation: {
        model: {
          items: 'sum',
          basketTotal: 'sum',
          satisfaction: 'avg',
        },
      },
      columns: {
        columnVisibilityModel: {
          city: false,
          deliveryWindow: false,
        },
      },
    },
  });

  return (
    <Section cozy>
      <Stack spacing={7}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionReveal>
              <SectionHeadline
                overline="Live showcase"
                title={
                  <Typography variant="h2">
                    A revenue operations workspace powered by <GradientText>Data Grid Premium</GradientText>
                  </Typography>
                }
                description="This example mirrors a common product workflow: grouping accounts by region, aggregating revenue, and keeping high-value records explorable in the same surface."
              />
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                <Chip
                  size="small"
                  icon={<TableChartRounded sx={{ fontSize: '14px !important' }} />}
                  label="Row grouping"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
                <Chip
                  size="small"
                  icon={<InsightsRounded sx={{ fontSize: '14px !important' }} />}
                  label="Aggregation"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
                <Chip
                  size="small"
                  icon={<UploadFileRounded sx={{ fontSize: '14px !important' }} />}
                  label="Excel-ready workflows"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
              </Stack>
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionReveal delay={100}>
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
                      ? alpha(theme.palette.common.white, 0.03)
                      : alpha(theme.palette.common.white, 0.88),
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? `0 18px 50px ${alpha(theme.palette.common.black, 0.28)}`
                      : `0 18px 50px ${alpha(theme.palette.primary[900], 0.08)}`,
                })}
              >
                <Box
                  sx={(theme) => ({
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: 1,
                    p: 1.5,
                    borderBottom: '1px solid',
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[300], 0.12)
                        : alpha(theme.palette.primary[100], 0.8),
                  })}
                >
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
                      Grouped revenue
                    </Typography>
                    <Typography sx={{ mt: 0.5, fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' }}>
                      $12.58M
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: 12, color: 'text.secondary' }}>
                      Summed across North America, EMEA, and APAC.
                    </Typography>
                  </Paper>
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
                      Highest-value region
                    </Typography>
                    <Typography sx={{ mt: 0.5, fontSize: 22, fontWeight: 800, letterSpacing: '-0.04em' }}>
                      EMEA
                    </Typography>
                    <Typography sx={{ mt: 0.75, fontSize: 12, color: 'text.secondary' }}>
                      Leading the grouped view at $4.76M revenue.
                    </Typography>
                  </Paper>
                </Box>
                <Box sx={{ height: 420 }}>
                  <DataGridPremium
                    apiRef={apiRef}
                    rows={rows}
                    columns={columns}
                    initialState={initialState}
                    hideFooter
                    density="compact"
                    disableColumnMenu
                    disableRowSelectionOnClick
                    rowHeight={42}
                    columnHeaderHeight={42}
                    groupingColDef={{
                      headerName: 'Region group',
                      minWidth: 180,
                    }}
                    isGroupExpandedByDefault={() => true}
                    sx={(theme) => ({
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
                    })}
                  />
                </Box>
              </Paper>
            </SectionReveal>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionReveal>
              <SectionHeadline
                overline="AI-assisted showcase"
                title={
                  <Typography variant="h2">
                    A grocery delivery grid with <GradientText>AI Assistance built in</GradientText>
                  </Typography>
                }
                description="The dataset is intentionally relatable: grocery baskets, delivery windows, and everyday order categories. It makes the prompt-to-result story easier to understand in seconds."
              />
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                <Chip
                  size="small"
                  icon={<LocalGroceryStoreRounded sx={{ fontSize: '14px !important' }} />}
                  label="Relatable order data"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
                <Chip
                  size="small"
                  icon={<SmartToyRounded sx={{ fontSize: '14px !important' }} />}
                  label="Prompt-driven analysis"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
                <Chip
                  size="small"
                  icon={<InsightsRounded sx={{ fontSize: '14px !important' }} />}
                  label="Synced summaries"
                  sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                />
              </Stack>
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionReveal delay={100}>
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
                  boxShadow:
                    theme.palette.mode === 'dark'
                      ? `0 18px 50px ${alpha(theme.palette.common.black, 0.28)}`
                      : `0 18px 50px ${alpha(theme.palette.primary[900], 0.08)}`,
                })}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    px: 2,
                    py: 1.5,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
                    Basket analyzer
                  </Typography>
                  <Chip
                    size="small"
                    icon={<AutoAwesomeRounded sx={{ fontSize: '14px !important' }} />}
                    label="AI Assistance"
                    color="primary"
                    sx={{ ml: 'auto', borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                </Stack>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 280px' },
                    gap: 0,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      p: 1.5,
                      borderRight: { md: '1px solid' },
                      borderColor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.primary[300], 0.12)
                          : alpha(theme.palette.primary[100], 0.8),
                    })}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={1}
                      useFlexGap
                      sx={{ mb: 1.5, justifyContent: 'space-between', alignItems: { sm: 'center' } }}
                    >
                      <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                        Prompt: Group by category and total basket value.
                      </Typography>
                      <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main' }}>
                        Produce leads with $200
                      </Typography>
                    </Stack>
                    <Box sx={{ height: 340 }}>
                      <DataGridPremium
                        apiRef={shoppingApiRef}
                        rows={shoppingRows}
                        columns={shoppingColumns}
                        initialState={shoppingInitialState}
                        hideFooter
                        density="compact"
                        disableColumnMenu
                        disableRowSelectionOnClick
                        rowHeight={42}
                        columnHeaderHeight={42}
                        groupingColDef={{
                          headerName: 'Category group',
                          minWidth: 170,
                        }}
                        isGroupExpandedByDefault={() => true}
                        sx={(theme) => ({
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
                        })}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Paper
                      elevation={0}
                      sx={(theme) => ({
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
                            : alpha(theme.palette.common.white, 0.92),
                      })}
                    >
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
                        <Box
                          sx={(theme) => ({
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
                          })}
                        >
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
                        <Box
                          sx={(theme) => ({
                            ml: 'auto',
                            maxWidth: 220,
                            borderRadius: '12px 12px 4px 12px',
                            px: 1.5,
                            py: 1.25,
                            bgcolor:
                              theme.palette.mode === 'dark'
                                ? alpha(theme.palette.primary[500], 0.18)
                                : alpha(theme.palette.primary[50], 1),
                          })}
                        >
                          <Typography sx={{ fontSize: 13, lineHeight: 1.45 }}>
                            Group by category and total basket value
                          </Typography>
                        </Box>
                        <Box
                          sx={(theme) => ({
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
                          })}
                        >
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
                    <Paper
                      elevation={0}
                      sx={(theme) => ({
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
                      })}
                    >
                      <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary', mb: 0.75 }}>
                        Basket value by category
                      </Typography>
                      <BarChart
                        dataset={shoppingChart}
                        xAxis={[{ dataKey: 'category', scaleType: 'band' }]}
                        series={[{ dataKey: 'value', label: 'Basket total ($)', color: '#5090F7' }]}
                        height={170}
                        margin={{ top: 10, bottom: 24, left: 24, right: 4 }}
                        hideLegend
                        borderRadius={8}
                      />
                    </Paper>
                  </Box>
                </Box>
              </Paper>
            </SectionReveal>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}
