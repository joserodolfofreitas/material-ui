import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import AutoGraphRounded from '@mui/icons-material/AutoGraphRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import ZoomInRounded from '@mui/icons-material/ZoomInRounded';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';
import { LineChart } from '@mui/x-charts/LineChart';

const candlestickPreview = [
  { label: 'Mon', low: 38, high: 74, open: 48, close: 62 },
  { label: 'Tue', low: 42, high: 78, open: 64, close: 52 },
  { label: 'Wed', low: 46, high: 82, open: 54, close: 72 },
  { label: 'Thu', low: 50, high: 88, open: 76, close: 58 },
  { label: 'Fri', low: 44, high: 80, open: 56, close: 68 },
  { label: 'Mon', low: 48, high: 92, open: 70, close: 84 },
  { label: 'Tue', low: 54, high: 94, open: 86, close: 64 },
  { label: 'Wed', low: 52, high: 90, open: 62, close: 78 },
] as const;

const weeklyActivation = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'Week 5',
  'Week 6',
];

function CandlestickPreview() {
  return (
    <Box sx={{ mt: 2, height: 280, position: 'relative' }}>
      <Box
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          borderRadius: premiumTokens.radius.lg,
          backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent calc(25% - 1px), ${alpha(
            theme.palette.divider,
            0.6,
          )} 25%, transparent calc(25% + 1px), transparent calc(50% - 1px), ${alpha(
            theme.palette.divider,
            0.6,
          )} 50%, transparent calc(50% + 1px), transparent calc(75% - 1px), ${alpha(
            theme.palette.divider,
            0.6,
          )} 75%, transparent calc(75% + 1px), transparent 100%)`,
        })}
      />
      <Stack direction="row" spacing={1} sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
        <Chip
          size="small"
          label="Mock preview"
          variant="outlined"
          sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
        />
        <StatusBadge status="coming-soon" />
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pt: 5,
          pb: 3,
          px: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${candlestickPreview.length}, minmax(0, 1fr))`,
          gap: 1.25,
          alignItems: 'stretch',
        }}
      >
        {candlestickPreview.map((point) => {
          const bullish = point.close >= point.open;
          const bodyTop = Math.min(point.open, point.close);
          const bodyBottom = Math.max(point.open, point.close);
          const bodyHeight = Math.max(bodyBottom - bodyTop, 6);

          return (
            <Box
              key={`${point.label}-${point.high}-${point.low}`}
              sx={{
                position: 'relative',
                minWidth: 0,
              }}
            >
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: `${100 - point.high}%`,
                  height: `${point.high - point.low}%`,
                  width: 2,
                  borderRadius: '999px',
                  bgcolor: bullish ? theme.palette.success.main : theme.palette.error.main,
                  opacity: 0.9,
                })}
              />
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: `${100 - bodyBottom}%`,
                  height: `${bodyHeight}%`,
                  width: { xs: 12, sm: 18 },
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: bullish ? alpha(theme.palette.success.main, 0.7) : alpha(theme.palette.error.main, 0.7),
                  bgcolor: bullish
                    ? alpha(theme.palette.success.main, 0.22)
                    : alpha(theme.palette.error.main, 0.2),
                  boxShadow: bullish
                    ? `0 6px 16px ${alpha(theme.palette.success.main, 0.18)}`
                    : `0 6px 16px ${alpha(theme.palette.error.main, 0.16)}`,
                })}
              />
              <Typography
                sx={{
                  position: 'absolute',
                  bottom: -2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: 11,
                  color: 'text.secondary',
                }}
              >
                {point.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default function ChartsLiveShowcaseBlock() {
  return (
    <Section cozy>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <SectionReveal>
            <SectionHeadline
              overline="Live showcase"
              title={
                <Typography variant="h2">
                  Charts that help users <GradientText>see what matters faster</GradientText>
                </Typography>
              }
              description="These examples show how charts help users compare outcomes, spot change, and make decisions inside analytical products."
            />
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
              <Chip
                size="small"
                icon={<DashboardRounded sx={{ fontSize: '14px !important' }} />}
                label="Dashboard-ready"
                sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
              />
              <Chip
                size="small"
                icon={<AutoGraphRounded sx={{ fontSize: '14px !important' }} />}
                label="Composable series"
                sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
              />
              <Chip
                size="small"
                icon={<ZoomInRounded sx={{ fontSize: '14px !important' }} />}
                label="Zoom and pan capable"
                sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
              />
            </Stack>
          </SectionReveal>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <SectionReveal delay={100}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    p: 2,
                    borderRadius: premiumTokens.radius.xl,
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[300], 0.14)
                        : alpha(theme.palette.primary[100], 0.85),
                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.03)
                        : alpha(theme.palette.common.white, 0.88),
                  })}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
                    Candlestick price action
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 13, color: 'text.secondary', maxWidth: 520 }}>
                    Mock a forthcoming financial-chart workflow with OHLC candles, daily movement, and trading-style
                    inspection in the same charts system.
                  </Typography>
                  <CandlestickPreview />
                </Paper>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Paper
                  variant="outlined"
                  sx={(theme) => ({
                    p: 2,
                    borderRadius: premiumTokens.radius.xl,
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[300], 0.14)
                        : alpha(theme.palette.primary[100], 0.85),
                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.03)
                        : alpha(theme.palette.common.white, 0.88),
                  })}
                >
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'text.secondary' }}>
                    Product activation trend
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 13, color: 'text.secondary' }}>
                    Track activation growth against the healthy baseline teams watch week over week.
                  </Typography>
                  <LineChart
                    xAxis={[{ data: weeklyActivation, scaleType: 'point' }]}
                    series={[
                      { data: [42, 47, 51, 56, 63, 68], label: 'Activated workspaces', color: '#5090F7' },
                      { data: [38, 39, 41, 43, 45, 46], label: 'Target baseline', color: '#A8C9FF' },
                    ]}
                    height={260}
                    margin={{ top: 24, bottom: 28, left: 36, right: 12 }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </SectionReveal>
        </Grid>
      </Grid>
      <SectionReveal delay={160}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.25}
          useFlexGap
          sx={{ mt: 2.5, justifyContent: 'space-between', alignItems: { sm: 'center' } }}
        >
          <Typography sx={{ fontSize: 12, color: 'text.secondary', maxWidth: 520 }}>
            Start with the chart patterns users rely on most, then expand into richer analytical experiences with
            composition, zoom and pan, advanced chart types, and export.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap>
            <Button
              component={Link}
              href="/x/react-charts/"
              variant="contained"
              sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700, whiteSpace: 'nowrap' }}
            >
              Get started
            </Button>
            <Button
              component={Link}
              href="/x/react-charts/quickstart/"
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700, whiteSpace: 'nowrap' }}
            >
              View documentation
            </Button>
          </Stack>
        </Stack>
      </SectionReveal>
    </Section>
  );
}
