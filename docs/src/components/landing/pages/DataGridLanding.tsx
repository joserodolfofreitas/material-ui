import * as React from 'react';
import dynamic from 'next/dynamic';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import PivotTableChartRounded from '@mui/icons-material/PivotTableChartRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
import ViewListRounded from '@mui/icons-material/ViewListRounded';
import StorageRounded from '@mui/icons-material/StorageRounded';
import DashboardRounded from '@mui/icons-material/DashboardRounded';
import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded';
import PeopleRounded from '@mui/icons-material/PeopleRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import Section from 'docs/src/layouts/Section';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import HighlightsBlock from 'docs/src/components/landing/HighlightsBlock';
import UseCasesBlock from 'docs/src/components/landing/UseCasesBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { Link } from '@mui/docs/Link';
import { cardHoverSx, premiumTokens } from 'docs/src/components/landing/marketingTheme';
import {
  dataGridHero,
  dataGridHighlights,
  dataGridUseCases,
  dataGridExamples,
  dataGridWhyStrip,
} from 'docs/src/components/landing/configs/dataGridConfig';

const DataGridFeatureShowcaseBlock = dynamic(
  () => import('docs/src/components/landing/effects/DataGridFeatureShowcaseBlock'),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={(theme) => ({
          minHeight: 760,
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
  <AutoAwesomeRounded key="ai" />,
  <PivotTableChartRounded key="pivot" />,
  <BarChartRounded key="charts" />,
  <AccountTreeRounded key="tree" />,
  <ViewListRounded key="foundation" />,
  <StorageRounded key="server" />,
];

const useCaseIcons = [
  <DashboardRounded key="admin" />,
  <AccountBalanceRounded key="finance" />,
  <PeopleRounded key="crm" />,
];

export default function DataGridLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={dataGridHero.title}
        gradientText={dataGridHero.gradientText}
        description={dataGridHero.description}
        status={dataGridHero.status}
        ctas={dataGridHero.ctas}
      />
      <Divider />
      <DataGridFeatureShowcaseBlock />
      <Divider />
      <HighlightsBlock
        overline="Highlights"
        headline={
          <Typography variant="h2">
            Everything you need in a <GradientText>data grid</GradientText>
          </Typography>
        }
        description="Purpose-built features that turn raw data into interactive, explorable experiences."
        highlights={dataGridHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <TableChartRounded />,
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
                Documentation paths for <GradientText>real product needs</GradientText>
              </Typography>
            }
            description="Use these entry points to jump straight to the workflows teams most often implement with MUI X Data Grid."
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {dataGridExamples.map((example, index) => (
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
            Built for <GradientText>real-world data</GradientText>
          </Typography>
        }
        useCases={dataGridUseCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <TableChartRounded />,
        }))}
      />
      <Divider />
      {/* Why teams choose this strip */}
      <Section cozy>
        <SectionReveal>
          <Box
            sx={[
              (theme) => ({
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                justifyContent: 'center',
                alignItems: 'center',
                py: 3,
                px: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.divider,
                background: (theme.vars || theme).palette.gradients.linearSubtle,
              }),
            ]}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
              Why teams choose this
            </Typography>
            {dataGridWhyStrip.map((point) => (
              <Box key={point} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleOutlineRounded sx={{ color: 'success.main', fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {point}
                </Typography>
              </Box>
            ))}
          </Box>
        </SectionReveal>
      </Section>
      <Divider />
      <FinalCTABlock
        primaryCta={{ label: 'Get started with Data Grid', href: '/x/react-data-grid/' }}
        secondaryCta={{ label: 'View documentation', href: '/x/react-data-grid/quickstart/' }}
      />
    </React.Fragment>
  );
}
