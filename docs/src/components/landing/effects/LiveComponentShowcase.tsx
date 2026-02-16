import * as React from 'react';
import dynamic from 'next/dynamic';
import Box, { BoxProps } from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { red, green, yellow, blue } from '@mui/material/colors';
import { useTheme, alpha, keyframes } from '@mui/material/styles';
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useDemoData } from '@mui/x-data-grid-generator';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import SendRounded from '@mui/icons-material/SendRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';

// ---------------------------------------------------------------------------
// Dynamic imports for showcase components
// ---------------------------------------------------------------------------

function createLoading(sx: BoxProps['sx']) {
  return function Loading() {
    return (
      <Box
        sx={[
          (theme) => ({
            borderRadius: 1,
            bgcolor: 'grey.100',
            ...theme.applyDarkStyles({ bgcolor: 'primaryDark.800' }),
          }),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      />
    );
  };
}

const TaskCard = dynamic(() => import('docs/src/components/showcase/TaskCard'), {
  ssr: false,
  loading: createLoading({ width: '100%', height: 200 }),
});
const ThemeSlider = dynamic(() => import('docs/src/components/showcase/ThemeSlider'), {
  ssr: false,
  loading: createLoading({ width: '100%', height: 60 }),
});
const FolderTreeView = dynamic(() => import('docs/src/components/showcase/FolderTreeView'), {
  ssr: false,
  loading: createLoading({ width: '100%', height: 180 }),
});

// ---------------------------------------------------------------------------
// Keyframes
// ---------------------------------------------------------------------------

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const typingDots = keyframes`
  0%, 60%, 100% { opacity: 0.3; }
  30%           { opacity: 1; }
`;

const pulseRing = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(237, 108, 2, 0.45); }
  70%  { box-shadow: 0 0 0 6px rgba(237, 108, 2, 0); }
  100% { box-shadow: 0 0 0 0 rgba(237, 108, 2, 0); }
`;

const gradientRotate = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ---------------------------------------------------------------------------
// Spotlight cursor glow hook
// ---------------------------------------------------------------------------

function useSpotlight(ref: React.RefObject<HTMLDivElement | null>) {
  const [pos, setPos] = React.useState({ x: 0, y: 0, active: false });

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
    };
    const onLeave = () => setPos((p) => ({ ...p, active: false }));

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);

  return pos;
}

// ---------------------------------------------------------------------------
// Data Grid pivoting demo
// ---------------------------------------------------------------------------

const visibleFields = [
  'commodity',
  'unitPrice',
  'feeRate',
  'quantity',
  'filledQuantity',
  'traderName',
  'status',
  'totalPrice',
];

function PivotingGrid() {
  const { loading, data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10000,
    editable: true,
    visibleFields,
  });
  const apiRef = useGridApiRef();

  const sortedColumns = React.useMemo(
    () =>
      [...data.columns].sort(
        (a, b) => visibleFields.indexOf(a.field) - visibleFields.indexOf(b.field),
      ),
    [data.columns],
  );

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: { model: ['commodity'] },
      aggregation: {
        model: { quantity: 'sum', unitPrice: 'avg', totalPrice: 'max' },
      },
    },
  });

  const groupingColDef = React.useMemo(
    () => ({ headerClassName: 'grouping-column-header' }),
    [],
  );

  const rowGroupingCounterRef = React.useRef(0);
  const isGroupExpandedByDefault = React.useCallback(() => {
    rowGroupingCounterRef.current += 1;
    return rowGroupingCounterRef.current === 3;
  }, []);

  return (
    <Box
      sx={[
        {
          height: '100%',
          '& .MuiDataGrid-root': {
            border: 0,
            color: 'text.secondary',
            fontSize: '0.75rem',
            '--DataGrid-rowBorderColor': (theme) => theme.palette.grey[200],
            '& .MuiCheckbox-root': { p: 0.5, '& > svg': { fontSize: '1rem' } },
            '& .MuiDataGrid-aggregationColumnHeaderLabel': { fontWeight: 'normal' },
            '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within':
              { outline: 'none' },
            '& .MuiDataGrid-columnHeaderTitleContainer': { padding: 0, color: 'text.primary' },
            '& .MuiDataGrid-columnHeaderTitle': { flexGrow: 1, fontSize: '0.75rem' },
            '& button, & button > svg': { fontSize: 14 },
            '& .MuiChip-root.Rejected': { color: red[800], backgroundColor: red[50], borderColor: red[100] },
            '& .MuiChip-root.Filled': { color: green[800], backgroundColor: green[50], borderColor: green[100] },
            '& .MuiChip-root.Open': { color: blue[800], backgroundColor: blue[50], borderColor: blue[100] },
            '& .MuiChip-root.PartiallyFilled': { color: 'text.secondary', backgroundColor: yellow[50], borderColor: yellow[600] },
            '& .grouping-column-header': { pl: 6 },
          },
        },
        (theme) =>
          theme.applyDarkStyles({
            '& .MuiDataGrid-root': {
              '--DataGrid-rowBorderColor': alpha(theme.palette.primaryDark[600], 0.5),
              '& .MuiChip-root.Rejected': { color: red[200], backgroundColor: alpha(red[900], 0.2), borderColor: alpha(red[700], 0.5) },
              '& .MuiChip-root.Filled': { color: green[200], backgroundColor: alpha(green[900], 0.2), borderColor: alpha(green[700], 0.5) },
              '& .MuiChip-root.Open': { color: blue[200], backgroundColor: alpha(blue[900], 0.2), borderColor: alpha(blue[700], 0.5) },
              '& .MuiChip-root.PartiallyFilled': { color: yellow[200], backgroundColor: alpha(yellow[900], 0.2), borderColor: alpha(yellow[700], 0.2) },
            },
          }),
      ]}
    >
      <DataGridPremium
        {...data}
        columns={sortedColumns}
        apiRef={apiRef}
        initialState={initialState}
        disableRowSelectionOnClick
        groupingColDef={groupingColDef}
        rowHeight={32}
        columnHeaderHeight={36}
        hideFooter
        loading={loading}
        isGroupExpandedByDefault={isGroupExpandedByDefault}
      />
    </Box>
  );
}

// ---------------------------------------------------------------------------
// AI Chat Panel (compact)
// ---------------------------------------------------------------------------

function AIChatPanel() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      <Box
        sx={[
          (theme) => ({
            display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 1,
            borderBottom: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.200',
          }),
        ]}
      >
        <SmartToyRounded sx={{ fontSize: 16, color: 'primary.main' }} />
        <Typography sx={{ fontSize: 12, fontWeight: 700 }}>AI Assistant</Typography>
        <Box
          sx={{
            ml: 'auto', borderRadius: 99,
            animation: `${pulseRing} 2s ease-out infinite`,
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }}
        >
          <Chip label="AI" size="small" color="primary" variant="outlined" sx={{ height: 18, fontSize: 9, fontWeight: 700 }} />
        </Box>
      </Box>
      <Box sx={{ flex: 1, p: 1.5, display: 'flex', flexDirection: 'column', gap: 1, overflow: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Box
            sx={[
              (theme) => ({
                bgcolor: theme.palette.mode === 'dark' ? 'primary.800' : 'primary.50',
                borderRadius: '10px 10px 2px 10px', px: 1.5, py: 0.5, maxWidth: '90%',
              }),
            ]}
          >
            <Typography sx={{ fontSize: 11, lineHeight: 1.5 }}>
              Pivot by commodity and aggregate totals
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'flex-start' }}>
          <AutoAwesomeRounded sx={{ fontSize: 12, color: 'warning.main', mt: 0.5, flexShrink: 0 }} />
          <Box
            sx={[
              (theme) => ({
                bgcolor: theme.palette.mode === 'dark' ? alpha(theme.palette.grey[900], 0.5) : 'grey.50',
                borderRadius: '10px 10px 10px 2px', px: 1.5, py: 0.5, maxWidth: '90%',
              }),
            ]}
          >
            <Typography sx={{ fontSize: 11, lineHeight: 1.5 }}>
              {"Grouped by commodity with sum, avg, and max aggregations."}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.75, alignItems: 'center' }}>
          <AutoAwesomeRounded sx={{ fontSize: 12, color: 'warning.main', flexShrink: 0 }} />
          <Box sx={{ display: 'flex', gap: 0.4 }}>
            {[0, 1, 2].map((i) => (
              <Box
                key={i}
                sx={{
                  width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.secondary',
                  animation: `${typingDots} 1.2s ease-in-out infinite`,
                  animationDelay: `${i * 200}ms`,
                  '@media (prefers-reduced-motion: reduce)': { animation: 'none', opacity: 0.5 },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={[
          (theme) => ({
            display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.75,
            borderTop: '1px solid',
            borderColor: theme.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.200',
          }),
        ]}
      >
        <Typography sx={{ flex: 1, fontSize: 10, color: 'text.disabled' }}>
          Ask about any component...
        </Typography>
        <SendRounded sx={{ fontSize: 14, color: 'primary.main' }} />
      </Box>
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

/**
 * A rich layered dashboard showcase for the hero section.
 * Mixes DataGridPremium pivoting, AI chat, TaskCard, ThemeSlider,
 * TreeView, and a BarChart in a two-column composition.
 */
export default function LiveComponentShowcase() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const panelRef = React.useRef<HTMLDivElement>(null);
  const spotlight = useSpotlight(panelRef);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        '@media (prefers-reduced-motion: reduce)': {
          '& *': { animationDuration: '0s !important' },
        },
      }}
    >
      {/* Animated gradient border glow */}
      <Box
        aria-hidden
        sx={[
          (t) => ({
            position: 'absolute',
            inset: -1,
            borderRadius: 3.5,
            background:
              t.palette.mode === 'dark'
                ? 'linear-gradient(135deg, rgba(66,165,245,0.4), rgba(171,71,188,0.3), rgba(66,165,245,0.4))'
                : 'linear-gradient(135deg, rgba(25,118,210,0.18), rgba(156,39,176,0.12), rgba(25,118,210,0.18))',
            backgroundSize: '200% 200%',
            animation: `${gradientRotate} 4s ease infinite`,
            zIndex: 0,
            pointerEvents: 'none',
            '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
          }),
        ]}
      />

      {/* Dashboard panel */}
      <Paper
        ref={panelRef}
        elevation={0}
        sx={[
          (t) => ({
            position: 'relative',
            zIndex: 1,
            borderRadius: 3,
            border: '1px solid',
            borderColor: t.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.200',
            overflow: 'hidden',
            bgcolor:
              t.palette.mode === 'dark'
                ? alpha(t.palette.primaryDark[900], 0.6)
                : alpha(t.palette.common.white, 0.92),
            backdropFilter: 'blur(20px)',
            animation: `${fadeInUp} 0.7s ease-out`,
          }),
        ]}
      >
        {/* Spotlight cursor glow */}
        {spotlight.active && (
          <Box
            aria-hidden
            sx={[
              (t) => ({
                position: 'absolute',
                width: 350, height: 350, borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(
                  t.palette.primary.main,
                  t.palette.mode === 'dark' ? 0.12 : 0.07,
                )} 0%, transparent 70%)`,
                transform: 'translate(-50%, -50%)',
                left: spotlight.x, top: spotlight.y,
                pointerEvents: 'none', zIndex: 0,
                transition: 'left 0.05s, top 0.05s',
              }),
            ]}
          />
        )}

        {/* Panel header */}
        <Box
          sx={[
            (t) => ({
              position: 'relative', zIndex: 1,
              display: 'flex', alignItems: 'center', gap: 0.75,
              px: 2, py: 1,
              borderBottom: '1px solid',
              borderColor: t.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.200',
            }),
          ]}
        >
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f57' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#febc2e' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#28c840' }} />
          <Typography sx={{ ml: 1.5, fontSize: 11, color: 'text.secondary', fontWeight: 600 }}>
            Dashboard
          </Typography>
          <Chip
            icon={<AutoAwesomeRounded sx={{ fontSize: '14px !important' }} />}
            label="AI Enabled"
            size="small"
            color="warning"
            variant="outlined"
            sx={{ ml: 'auto', height: 22, fontSize: 10, fontWeight: 700 }}
          />
        </Box>

        {/* Panel body: two columns */}
        <Box
          sx={{
            position: 'relative', zIndex: 1,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* ---- Left column: Data Grid + bottom strip ---- */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              animation: `${fadeInUp} 0.7s ease-out 0.1s both`,
            }}
          >
            {/* Data Grid with pivoting — main feature */}
            <Box sx={{ height: { xs: 260, md: 320 } }}>
              <PivotingGrid />
            </Box>
            <Divider />
            {/* Bottom strip: 2×2 charts on left | TreeView + Slider on right */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'row',
              }}
            >
              {/* 2×2 chart grid */}
              <Box
                sx={{
                  flex: 1,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: '1fr 1fr',
                  minWidth: 0,
                }}
              >
                {/* Chart 1: Area line chart — Revenue */}
                <Box sx={{ p: 0.5, animation: `${fadeInUp} 0.7s ease-out 0.2s both`, display: 'flex', alignItems: 'center' }}>
                  <LineChart
                    series={[{
                      data: [1200, 1800, 1400, 2200, 2800, 2400, 3100, 3600, 3200, 4000, 4400, 4800],
                      area: true, showMark: false, curve: 'natural', color: '#1976d2',
                    }]}
                    xAxis={[{ data: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], scaleType: 'point' }]}
                    height={120}
                    margin={{ top: 8, bottom: 16, left: 30, right: 8 }}
                    hideLegend
                    sx={{ '& .MuiAreaElement-root': { opacity: 0.15 } }}
                  />
                </Box>
                {/* Chart 2: Bar chart — Quarterly */}
                <Box sx={{ p: 0.5, animation: `${fadeInUp} 0.7s ease-out 0.25s both`, display: 'flex', alignItems: 'center' }}>
                  <BarChart
                    series={[
                      { data: [35, 44, 24, 34], color: '#1976d2' },
                      { data: [51, 6, 49, 30], color: '#42a5f5' },
                    ]}
                    xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                    height={120}
                    margin={{ top: 8, bottom: 16, left: 30, right: 8 }}
                    hideLegend
                  />
                </Box>
                {/* Chart 3: Line chart — Sessions */}
                <Box sx={{ p: 0.5, animation: `${fadeInUp} 0.7s ease-out 0.3s both`, display: 'flex', alignItems: 'center' }}>
                  <LineChart
                    series={[{
                      data: [300, 900, 600, 1200, 1500, 1800, 2400, 2100, 2700, 3000, 2500, 3300],
                      showMark: false, curve: 'natural', color: '#9c27b0',
                    }, {
                      data: [500, 700, 1100, 900, 1400, 1100, 1700, 2000, 1600, 2300, 2600, 2900],
                      showMark: false, curve: 'natural', color: '#e91e63',
                    }]}
                    xAxis={[{ data: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], scaleType: 'point' }]}
                    height={120}
                    margin={{ top: 8, bottom: 16, left: 30, right: 8 }}
                    hideLegend
                  />
                </Box>
                {/* Chart 4: Pie chart — Distribution */}
                <Box sx={{ p: 0.5, animation: `${fadeInUp} 0.7s ease-out 0.35s both`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PieChart
                    series={[{
                      data: [
                        { id: 0, value: 45, label: 'Desktop', color: '#1976d2' },
                        { id: 1, value: 30, label: 'Mobile', color: '#42a5f5' },
                        { id: 2, value: 15, label: 'Tablet', color: '#9c27b0' },
                        { id: 3, value: 10, label: 'Other', color: '#e0e0e0' },
                      ],
                      innerRadius: 24,
                      paddingAngle: 2,
                      cornerRadius: 3,
                    }]}
                    height={120}
                    width={180}
                    margin={{ top: 4, bottom: 4, left: 4, right: 4 }}
                    hideLegend
                  />
                </Box>
              </Box>
              {/* TreeView (75%) + Slider (25%) */}
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: 160,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* TreeView */}
                <Box
                  sx={{
                    flex: 3,
                    px: 0.5, py: 0.5,
                    animation: `${fadeInUp} 0.7s ease-out 0.25s both`,
                    '& .MuiTreeItem-root': { fontSize: '0.7rem' },
                    '& .MuiTreeItem-content': { py: 0, minHeight: 24 },
                    overflow: 'hidden',
                  }}
                >
                  <Typography sx={{ fontSize: 9, fontWeight: 700, color: 'text.secondary', mb: 0.25, textTransform: 'uppercase', letterSpacing: 0.5, px: 0.5 }}>
                    Project files
                  </Typography>
                  <FolderTreeView />
                </Box>
                {/* Slider */}
                <Box
                  sx={{
                    flex: 1,
                    px: 1, py: 0.75,
                    animation: `${fadeInUp} 0.7s ease-out 0.35s both`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '& > div': { maxWidth: 'none' },
                  }}
                >
                  <ThemeSlider />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ---- Right column: AI chat + TaskCard ---- */}
          {isMd && (
            <Box
              sx={{
                width: 240,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                animation: `${fadeInUp} 0.7s ease-out 0.2s both`,
              }}
            >
              {/* AI Chat — extends up to cover the header "AI Enabled" area */}
              <Box
                sx={[
                  (t) => ({
                    flex: 1,
                    minHeight: 0,
                    position: 'relative',
                    zIndex: 3,
                    mt: '-38px',
                    borderRadius: '12px 12px 0 0',
                    boxShadow:
                      t.palette.mode === 'dark'
                        ? `0 -4px 24px ${alpha(t.palette.primary.main, 0.2)}, 0 8px 32px ${alpha(t.palette.primary.main, 0.25)}, 0 2px 12px ${alpha(t.palette.common.black, 0.4)}`
                        : `0 -4px 24px ${alpha(t.palette.primary.main, 0.08)}, 0 8px 32px ${alpha(t.palette.primary.main, 0.12)}, 0 2px 12px ${alpha(t.palette.grey[400], 0.2)}`,
                    bgcolor:
                      t.palette.mode === 'dark'
                        ? t.palette.primaryDark[800]
                        : t.palette.common.white,
                  }),
                ]}
              >
                <AIChatPanel />
              </Box>
              {/* TaskCard */}
              <Box
                sx={{
                  p: 1.5,
                  animation: `${fadeInUp} 0.7s ease-out 0.35s both`,
                  '& .MuiCard-root': {
                    minWidth: 'auto',
                    maxWidth: 'none',
                    minHeight: 'auto',
                    p: 2,
                  },
                }}
              >
                <TaskCard />
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
