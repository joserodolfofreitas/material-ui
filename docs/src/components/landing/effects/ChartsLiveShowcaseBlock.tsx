import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import AutoGraphRounded from '@mui/icons-material/AutoGraphRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import ZoomInRounded from '@mui/icons-material/ZoomInRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const quarterlyRevenue = [
  { quarter: 'Q1', pipeline: 3.8, closed: 3.1 },
  { quarter: 'Q2', pipeline: 4.4, closed: 3.7 },
  { quarter: 'Q3', pipeline: 5.1, closed: 4.4 },
  { quarter: 'Q4', pipeline: 5.7, closed: 4.9 },
];

const weeklyActivation = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'Week 5',
  'Week 6',
];

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
                  Dashboard views built with <GradientText>real chart patterns</GradientText>
                </Typography>
              }
              description="These examples mirror the kinds of analytical surfaces teams build most often: a business review view for revenue and a time-series view for ongoing product health."
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
                    Executive revenue review
                  </Typography>
                  <Typography sx={{ mt: 0.5, fontSize: 13, color: 'text.secondary' }}>
                    Compare pipeline against closed revenue to see where the quarter is converting efficiently.
                  </Typography>
                  <BarChart
                    dataset={quarterlyRevenue}
                    xAxis={[{ dataKey: 'quarter', scaleType: 'band' }]}
                    series={[
                      { dataKey: 'pipeline', label: 'Pipeline ($M)', color: '#5090F7' },
                      { dataKey: 'closed', label: 'Closed revenue ($M)', color: '#7CC4FA' },
                    ]}
                    height={280}
                    margin={{ top: 24, bottom: 28, left: 36, right: 12 }}
                    borderRadius={8}
                  />
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
    </Section>
  );
}
