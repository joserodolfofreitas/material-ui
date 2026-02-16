import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
import {
  dataGridHero,
  dataGridHighlights,
  dataGridUseCases,
  dataGridIntegrations,
  dataGridWhyStrip,
} from 'docs/src/components/landing/configs/dataGridConfig';

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
      {/* Integrations section */}
      <Section bg="comfort" cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="Integrations"
            title={
              <Typography variant="h2">
                Works seamlessly with <GradientText>MUI X Charts</GradientText>
              </Typography>
            }
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2, justifyContent: 'center' }}>
          {dataGridIntegrations.map((integration, index) => (
            <Grid key={integration.title} size={{ xs: 12, md: 8 }}>
              <SectionReveal delay={index * 80}>
                <Paper
                  variant="outlined"
                  sx={{ p: 4, textAlign: 'center' }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {integration.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {integration.description}
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
        secondaryCta={{ label: 'View documentation', href: '/x/react-data-grid/getting-started/' }}
      />
    </React.Fragment>
  );
}
