import * as React from 'react';
import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import WidgetsRounded from '@mui/icons-material/WidgetsRounded';
import InvertColorsRounded from '@mui/icons-material/InvertColorsRounded';
import AspectRatioRounded from '@mui/icons-material/AspectRatioRounded';
import TouchAppRounded from '@mui/icons-material/TouchAppRounded';
import CandlestickChartRounded from '@mui/icons-material/CandlestickChartRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import MonitorHeartRounded from '@mui/icons-material/MonitorHeartRounded';
import QueryStatsRounded from '@mui/icons-material/QueryStatsRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import HighlightsBlock from 'docs/src/components/landing/HighlightsBlock';
import LandingComponentNav from 'docs/src/components/landing/LandingComponentNav';
import UseCasesBlock from 'docs/src/components/landing/UseCasesBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { Link } from '@mui/docs/Link';
import { cardHoverSx, premiumTokens } from 'docs/src/components/landing/marketingTheme';
import {
  chartsHero,
  chartsHighlights,
  chartsUseCases,
  chartsExamples,
} from 'docs/src/components/landing/configs/chartsConfig';

const ChartsLiveShowcaseBlock = dynamic(
  () => import('docs/src/components/landing/effects/ChartsLiveShowcaseBlock'),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={(theme) => ({
          minHeight: 620,
          borderRadius: premiumTokens.radius.xl,
          border: '1px solid',
          borderColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary[300], 0.12)
              : alpha(theme.palette.primary[100], 0.8),
          bgcolor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.02)
              : alpha(theme.palette.common.white, 0.72),
        })}
      />
    ),
  },
);

const highlightIcons = [
  <SpeedRounded key="perf" />,
  <WidgetsRounded key="compose" />,
  <InvertColorsRounded key="theme" />,
  <AspectRatioRounded key="responsive" />,
  <TouchAppRounded key="interaction" />,
  <CandlestickChartRounded key="finance" />,
];

const useCaseIcons = [
  <InsightsRounded key="analytics" />,
  <MonitorHeartRounded key="monitoring" />,
  <QueryStatsRounded key="bi" />,
];

export default function ChartsLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={chartsHero.title}
        gradientText={chartsHero.gradientText}
        description={chartsHero.description}
        status={chartsHero.status}
        ctas={chartsHero.ctas}
      />
      <LandingComponentNav activeId="charts" />
      <Divider />
      <ChartsLiveShowcaseBlock />
      <Divider />
      <HighlightsBlock
        overline="Highlights"
        headline={
          <Typography variant="h2">
            Composable charts for <GradientText>decision-making products</GradientText>
          </Typography>
        }
        description="Independent building blocks that help users understand data, compare outcomes, and move from insight to action."
        highlights={chartsHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <BarChartRounded />,
        }))}
      />
      <Divider />
      <Section bg="comfort" cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="Common workflows"
            title={
              <Typography variant="h2">
                Documentation paths for <GradientText>the analysis users need</GradientText>
              </Typography>
            }
            description="Use these entry points to jump straight to the chart patterns teams use to help users read, compare, and explore data."
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {chartsExamples.map((example, index) => (
            <Grid key={example.title} size={{ xs: 12, sm: 6 }}>
              <SectionReveal delay={index * 80}>
                <Paper
                  component={Link}
                  noLinkStyle
                  href={example.href}
                  variant="outlined"
                  sx={[
                    (theme) => ({
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                      textDecoration: 'none',
                      borderRadius: premiumTokens.radius.lg,
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.common.white, 0.02)
                          : alpha(theme.palette.common.white, 0.82),
                      ...cardHoverSx(theme),
                    }),
                  ]}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {example.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {example.description}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      m: 0,
                      pl: 2,
                      '& li': { mb: 0.5 },
                    }}
                  >
                    {example.features.map((feature) => (
                      <Typography
                        key={feature}
                        component="li"
                        variant="body2"
                        sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 'auto',
                      pt: 0.5,
                      color: 'primary.main',
                      fontWeight: 700,
                    }}
                  >
                    Explore this example
                  </Typography>
                </Paper>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Section>
      <Divider />
      <UseCasesBlock
        headline={
          <Typography variant="h2">
            Built for <GradientText>data-driven products</GradientText>
          </Typography>
        }
        useCases={chartsUseCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <BarChartRounded />,
        }))}
      />
      <Divider />
      <FinalCTABlock
        primaryCta={{ label: 'Get started with Charts', href: '/x/react-charts/' }}
        secondaryCta={{ label: 'View documentation', href: '/x/react-charts/quickstart/' }}
      />
    </React.Fragment>
  );
}
