import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
import UseCasesBlock from 'docs/src/components/landing/UseCasesBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import {
  chartsHero,
  chartsHighlights,
  chartsUseCases,
} from 'docs/src/components/landing/configs/chartsConfig';

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
      <Divider />
      <HighlightsBlock
        overline="Highlights"
        headline={
          <Typography variant="h2">
            Composable charts for <GradientText>every dashboard</GradientText>
          </Typography>
        }
        description="Independent building blocks you compose freely - not a monolithic chart config."
        highlights={chartsHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <BarChartRounded />,
        }))}
      />
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
        secondaryCta={{ label: 'View documentation', href: '/x/react-charts/getting-started/' }}
      />
    </React.Fragment>
  );
}
