import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, keyframes, useTheme } from '@mui/material/styles';
import AppsRounded from '@mui/icons-material/AppsRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import GraphicEqRounded from '@mui/icons-material/GraphicEqRounded';
import MicRounded from '@mui/icons-material/MicRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import {
  DataGridPremium,
  type GridColDef,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { BarChart } from '@mui/x-charts/BarChart';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 80%, 100% { opacity: 0.32; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-1px); }
`;

const rows = [
  {
    id: 1,
    component: 'Data Grid',
    page: 'Data Grid - Overview',
    section: 'X',
    device: 'Desktop',
    views: 182_000,
    avgTime: 4.8,
    engagement: 94,
  },
  {
    id: 2,
    component: 'Data Grid',
    page: 'Data Grid - Column definitions',
    section: 'X',
    device: 'Desktop',
    views: 136_000,
    avgTime: 5.2,
    engagement: 92,
  },
  {
    id: 3,
    component: 'Data Grid',
    page: 'Data Grid - Filtering',
    section: 'X',
    device: 'Mobile',
    views: 98_000,
    avgTime: 4.1,
    engagement: 90,
  },
  {
    id: 4,
    component: 'Charts',
    page: 'Charts - Overview',
    section: 'X',
    device: 'Desktop',
    views: 124_000,
    avgTime: 3.6,
    engagement: 89,
  },
  {
    id: 5,
    component: 'Charts',
    page: 'Charts - Bar chart',
    section: 'X',
    device: 'Mobile',
    views: 86_000,
    avgTime: 3.9,
    engagement: 87,
  },
  {
    id: 6,
    component: 'Scheduler',
    page: 'Scheduler - Overview',
    section: 'X',
    device: 'Desktop',
    views: 62_000,
    avgTime: 4.4,
    engagement: 91,
  },
  {
    id: 7,
    component: 'Scheduler',
    page: 'Scheduler - Resources',
    section: 'X',
    device: 'Desktop',
    views: 48_000,
    avgTime: 4.0,
    engagement: 88,
  },
  {
    id: 8,
    component: 'Chatbox',
    page: 'Chatbox - Overview',
    section: 'X',
    device: 'Desktop',
    views: 54_000,
    avgTime: 3.8,
    engagement: 86,
  },
  {
    id: 9,
    component: 'Chatbox',
    page: 'Chatbox - Streaming messages',
    section: 'X',
    device: 'Mobile',
    views: 39_000,
    avgTime: 3.5,
    engagement: 84,
  },
] as const;

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'component', headerName: 'Component', width: 150 },
  { field: 'page', headerName: 'Page', flex: 1, minWidth: 160 },
  { field: 'section', headerName: 'Section', width: 90 },
  { field: 'device', headerName: 'Device', width: 110 },
  {
    field: 'views',
    headerName: 'Monthly views',
    type: 'number',
    width: 140,
    valueFormatter: (value) => Number(value).toLocaleString(),
  },
  {
    field: 'avgTime',
    headerName: 'Avg time on page',
    type: 'number',
    width: 150,
    valueFormatter: (value) => `${Number(value).toFixed(1)} min`,
  },
  {
    field: 'engagement',
    headerName: 'Engagement score',
    type: 'number',
    width: 150,
    valueFormatter: (value) => `${value}%`,
  },
];

const chartData = [
  { component: 'Data Grid', value: 416 },
  { component: 'Charts', value: 210 },
  { component: 'Scheduler', value: 110 },
  { component: 'Chatbox', value: 93 },
];

const summaryCards = [
  {
    label: 'Components in the library',
    value: '100+',
    detail: 'Spanning layout, data display, inputs, and more',
  },
  {
    label: 'Monthly downloads',
    value: '20M+',
    detail: 'Trusted across the React ecosystem every month',
  },
];

function PromptDots() {
  return (
    <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
      {[0, 1, 2].map((index) => (
        <Box
          key={index}
          sx={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            opacity: 0.4,
            animation: `${pulse} 1.2s ease-in-out infinite`,
            animationDelay: `${index * 120}ms`,
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
            },
          }}
        />
      ))}
    </Stack>
  );
}

function PivotingGrid() {
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: { model: ['component'] },
      aggregation: {
        model: {
          views: 'sum',
          avgTime: 'avg',
          engagement: 'avg',
        },
      },
      columns: {
        columnVisibilityModel: {
          page: false,
          device: false,
        },
      },
    },
  });

  return (
    <Box
      sx={(theme) => ({
        height: '100%',
        '& .MuiDataGrid-root': {
          border: 0,
          bgcolor: 'transparent',
          fontSize: '0.8125rem',
          '--DataGrid-rowBorderColor':
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary[300], 0.14)
              : alpha(theme.palette.primary[100], 0.95),
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
            color: 'text.primary',
          },
          '& .MuiDataGrid-cell': {
            color: 'text.secondary',
          },
          '& .MuiDataGrid-aggregationColumnHeaderLabel': {
            color: 'text.secondary',
          },
          '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none',
          },
        },
      })}
    >
      <DataGridPremium
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        initialState={initialState}
        hideFooter
        disableColumnMenu
        disableRowSelectionOnClick
        rowHeight={42}
        columnHeaderHeight={42}
        groupingColDef={{
          headerName: 'Component group',
          minWidth: 180,
        }}
        isGroupExpandedByDefault={() => true}
      />
    </Box>
  );
}

function AssistantPanel() {
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        borderRadius: premiumTokens.radius.lg,
        border: '1px solid',
        borderColor:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary[300], 0.16)
            : alpha(theme.palette.primary[100], 0.95),
        bgcolor:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.primaryDark[800], 0.9)
            : alpha(theme.palette.common.white, 0.94),
        boxShadow: premiumTokens.hero.floatingShadow(theme),
        backdropFilter: 'blur(22px)',
      })}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center', px: 2, py: 1.5 }}>
        <Box
          sx={(theme) => ({
            width: 34,
            height: 34,
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
            Operate advanced UI with natural language
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
      <Stack spacing={1.5} sx={{ p: 2 }}>
        <Box
          sx={(theme) => ({
            ml: 'auto',
            maxWidth: 260,
            borderRadius: '12px 12px 4px 12px',
            px: 1.5,
            py: 1.25,
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[500], 0.18)
                : alpha(theme.palette.primary[50], 1),
            color: 'text.primary',
          })}
        >
          <Typography sx={{ fontSize: 13, lineHeight: 1.45 }}>
            Group docs traffic by component and total monthly views
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            maxWidth: 290,
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
            The grid is grouped by component, page views are aggregated, and the chart is synced to the new view.
          </Typography>
        </Box>
        <Paper
          elevation={0}
          sx={(theme) => ({
            p: 1.5,
            borderRadius: '10px',
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[500], 0.08)
                : alpha(theme.palette.primary[50], 0.72),
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[300], 0.12)
                : alpha(theme.palette.primary[100], 0.8),
          })}
        >
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary', mb: 0.5 }}>
            Updated insight
          </Typography>
          <Typography sx={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.03em' }}>
            Data Grid leads with{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              400k+ monthly views
            </Box>
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.5 }}>
            Component-level view now reveals the highest-interest docs at a glance.
          </Typography>
        </Paper>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', color: 'text.secondary' }}>
          <PromptDots />
          <Typography sx={{ fontSize: 12 }}>Ready for the next prompt</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default function LiveComponentShowcase() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 880,
        ml: 'auto',
        animation: `${fadeInUp} 700ms cubic-bezier(0.2, 0, 0, 1)`,
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none',
        },
      }}
    >
      <Box
        aria-hidden
        sx={(t) => ({
          position: 'absolute',
          inset: -16,
          zIndex: 0,
          borderRadius: '18px',
          background:
            t.palette.mode === 'dark'
              ? `linear-gradient(135deg, ${alpha(t.palette.primary[500], 0.18)} 0%, ${alpha(t.palette.info.main, 0.12)} 50%, ${alpha(t.palette.primary[700], 0.16)} 100%)`
              : `linear-gradient(135deg, ${alpha(t.palette.primary[100], 0.85)} 0%, ${alpha(t.palette.info.light, 0.22)} 55%, ${alpha(t.palette.primary[50], 0.95)} 100%)`,
          filter: 'blur(10px)',
        })}
      />
      <Paper
        elevation={0}
        sx={(t) => ({
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          borderRadius: premiumTokens.radius.xl,
          border: '1px solid',
          borderColor:
            t.palette.mode === 'dark'
              ? alpha(t.palette.primary[300], 0.14)
              : alpha(t.palette.primary[100], 0.95),
          bgcolor:
            t.palette.mode === 'dark'
              ? alpha(t.palette.primaryDark[900], 0.9)
              : alpha(t.palette.common.white, 0.86),
          backdropFilter: 'blur(26px)',
          boxShadow: premiumTokens.hero.visualShadow(t),
        })}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
            px: { xs: 2, md: 2.5 },
            py: 1.5,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
            Built for complex product workflows
          </Typography>
          <Stack direction="row" spacing={1} sx={{ ml: 'auto', display: { xs: 'none', sm: 'flex' } }}>
            {['Analyze', 'Plan', 'Build'].map((mode, index) => (
              <Chip
                key={mode}
                size="small"
                label={mode}
                icon={index === 0 ? <GraphicEqRounded sx={{ fontSize: '14px !important' }} /> : undefined}
                color={index === 0 ? 'primary' : 'default'}
                variant={index === 0 ? 'filled' : 'outlined'}
                sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
              />
            ))}
          </Stack>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 300px' },
            gap: 0,
            p: { xs: 1.5, md: 2 },
          }}
        >
          <Box sx={{ minWidth: 0, pr: { md: 2 } }}>
            <Stack spacing={1} sx={{ mb: 1.5 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                sx={{ alignItems: { sm: 'center' }, justifyContent: 'space-between' }}
              >
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'no-wrap' }} useFlexGap>
                  <Chip
                    size="small"
                    icon={<TuneRounded sx={{ fontSize: '14px !important' }} />}
                    label="Highly customizable"
                    variant="outlined"
                    sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                  <Chip
                    size="small"
                    icon={<AppsRounded sx={{ fontSize: '14px !important' }} />}
                    label="Comprehensive"
                    variant="outlined"
                    sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                  <Chip
                    size="small"
                    icon={<AccessibilityNewRounded sx={{ fontSize: '14px !important' }} />}
                    label="Accessible"
                    variant="outlined"
                    sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                   <Chip
                    size="small"
                    icon={<SmartToyRounded sx={{ fontSize: '14px !important' }} />}
                    label="Now with AI-assisted UX"
                    color="primary"
                    sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 1.25,
                mb: 1.5,
              }}
            >
              {summaryCards.map((card) => (
                <Paper
                  key={card.label}
                  elevation={0}
                  sx={(t) => ({
                    minWidth: 0,
                    minHeight: 120,
                    p: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '10px',
                    border: '1px solid',
                    borderColor:
                      t.palette.mode === 'dark'
                        ? alpha(t.palette.primary[300], 0.12)
                        : alpha(t.palette.primary[100], 0.85),
                    bgcolor:
                      t.palette.mode === 'dark'
                        ? alpha(t.palette.common.white, 0.02)
                        : alpha(t.palette.primary[50], 0.55),
                  })}
                >
                  <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary', whiteSpace: 'nowrap' }}>
                    {card.label}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      mt: 0.25,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {card.value}
                  </Typography>
                  <Typography sx={{ fontSize: 12, color: 'primary.main', mt: 0.75 }}>
                    {card.detail}
                  </Typography>
                </Paper>
              ))}
            </Box>
            <Paper
              elevation={0}
              sx={(t) => ({
                overflow: 'hidden',
                borderRadius: premiumTokens.radius.lg,
                border: '1px solid',
                borderColor:
                  t.palette.mode === 'dark'
                    ? alpha(t.palette.primary[300], 0.14)
                    : alpha(t.palette.primary[100], 0.9),
                bgcolor:
                  t.palette.mode === 'dark'
                    ? alpha(t.palette.common.white, 0.02)
                    : alpha(t.palette.common.white, 0.82),
              })}
            >
              <Box sx={{ height: { xs: 320, sm: 360, md: 390 } }}>
                <PivotingGrid />
              </Box>
            </Paper>
            <Paper
              elevation={0}
              sx={(t) => ({
                mt: 1.5,
                p: 1.5,
                minHeight: 176,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: premiumTokens.radius.lg,
                border: '1px solid',
                borderColor:
                  t.palette.mode === 'dark'
                    ? alpha(t.palette.primary[300], 0.12)
                    : alpha(t.palette.primary[100], 0.8),
                bgcolor:
                  t.palette.mode === 'dark'
                    ? alpha(t.palette.common.white, 0.02)
                    : alpha(t.palette.primary[50], 0.52),
              })}
            >
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: 'text.secondary' }}>
            Views threshold
              </Typography>
              <Typography sx={{ mt: 0.25, fontSize: 12, color: 'text.secondary' }}>
            Highlight components above 150k monthly page views.
              </Typography>
              <Slider
                value={150}
                min={0}
                max={400}
                step={25}
                disabled
                aria-label="Insight threshold"
                sx={{
                  mt: 1.5,
                  mb: 0.5,
                  px: 0.25,
                }}
              />
              <Typography sx={{ fontSize: 12, color: 'primary.main', fontWeight: 700 }}>
                Data Grid and Charts stay above the signal line.
              </Typography>
            </Paper>
          </Box>
          <Box
            sx={{
              position: 'relative',
              mt: { xs: 1.5, md: 0 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { md: 'flex-end' },
                height: '100%',
              }}
            >
              <Stack spacing={1.5}>
                <AssistantPanel />
                <Paper
                  elevation={0}
                  sx={(t) => ({
                    p: 1.5,
                    minHeight: 176,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: premiumTokens.radius.lg,
                    border: '1px solid',
                    borderColor:
                      t.palette.mode === 'dark'
                        ? alpha(t.palette.primary[300], 0.12)
                        : alpha(t.palette.primary[100], 0.8),
                    bgcolor:
                      t.palette.mode === 'dark'
                        ? alpha(t.palette.common.white, 0.02)
                        : alpha(t.palette.primary[50], 0.52),
                  })}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary', mb: 0.75 }}>
                    Monthly docs views by component
                  </Typography>
                  <BarChart
                    dataset={chartData}
                    xAxis={[{ dataKey: 'component', scaleType: 'band' }]}
                    series={[
                      {
                        dataKey: 'value',
                        color: theme.palette.primary.main,
                        label: 'Monthly page views (k)',
                      },
                    ]}
                    height={156}
                    margin={{ top: 10, bottom: 26, left: 30, right: 6 }}
                    hideLegend
                    borderRadius={8}
                  />
                </Paper>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
