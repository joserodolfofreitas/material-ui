import * as React from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
import LandingComponentNav from 'docs/src/components/landing/LandingComponentNav';
import UseCasesBlock from 'docs/src/components/landing/UseCasesBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { Link } from '@mui/docs/Link';
import { cardHoverSx, premiumTokens } from 'docs/src/components/landing/marketingTheme';
import {
  dataGridHero,
  dataGridHighlights,
  dataGridUseCases,
  dataGridExamples,
  dataGridScaleShowcaseColumns,
  dataGridWhyStrip,
} from 'docs/src/components/landing/configs/dataGridConfig';

const dataGridScaleLoadingTemplateColumns = dataGridScaleShowcaseColumns
  .map((column) => `${column.width}px`)
  .join(' ');
const dataGridScaleLoadingTotalWidth = dataGridScaleShowcaseColumns.reduce(
  (total, column) => total + column.width,
  0,
);

const DataGridFeatureShowcaseBlock = dynamic(
  () => import('docs/src/components/landing/effects/DataGridFeatureShowcaseBlock'),
  {
    ssr: false,
    loading: () => (
      <Section cozy sx={{ pt: { xs: 3, sm: 5, md: 6 } }}>
        <SectionReveal>
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
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={1}
                  useFlexGap
                  sx={{ justifyContent: 'space-between', alignItems: { md: 'center' } }}
                >
                  <Typography sx={{ fontSize: 12, color: 'text.secondary', maxWidth: 560 }}>
                    Explore the advanced Data Grid workflows teams ask for most: scale, AI-assisted analysis,
                    hierarchical records, and pivot-driven reporting.
                  </Typography>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    useFlexGap
                    sx={{ flexShrink: 0 }}
                  >
                    {['100K+ rows', 'AI assistance', 'Tree + detail', 'Pivot + charts'].map((label, index) => (
                      <Button
                        key={label}
                        variant={index === 0 ? 'contained' : 'outlined'}
                        color={index === 0 ? 'primary' : 'secondary'}
                        disabled
                        sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700, whiteSpace: 'nowrap' }}
                      >
                        {label}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
                <Box>
                  <Typography sx={{ fontSize: 12, fontWeight: 700, color: 'primary.main' }}>
                    Performance at scale
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, maxWidth: 760 }}>
                    A live market monitor with 100,000 rows
                  </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', maxWidth: 760 }}>
                  Stress the grid the way enterprise teams do: 100,000 records, dense columns, inline
                  sparklines, and live updates flowing through the same surface.
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                  {['100,000 rows', 'Live updates', 'Sparkline columns'].map((label) => (
                    <Chip
                      key={label}
                      size="small"
                      label={label}
                      sx={{ borderRadius: premiumTokens.radius.pill, fontWeight: 700 }}
                    />
                  ))}
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ p: { xs: 1.5, md: 2 } }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2, mb: 2 }}>
                {[
                  { label: 'Rows loaded', value: '100,000' },
                  { label: 'Live feeds', value: '36 streams' },
                  { label: 'Complex columns', value: 'Sparkline + status' },
                ].map((item) => (
                  <Paper
                    key={item.label}
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
                ))}
              </Box>
              <Box
                sx={(theme) => ({
                  overflow: 'hidden',
                  height: 520,
                  borderRadius: premiumTokens.radius.lg,
                  border: '1px solid',
                  borderColor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primary[300], 0.1)
                      : alpha(theme.palette.primary[100], 0.75),
                  bgcolor:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.02)
                      : alpha(theme.palette.common.white, 0.86),
                })}
              >
                <Box sx={{ height: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                  <Box sx={{ minWidth: dataGridScaleLoadingTotalWidth, width: 'fit-content' }}>
                    <Box sx={{ px: 1.5, py: 1.25, borderBottom: '1px solid', borderColor: 'divider' }}>
                      <Box
                        sx={(theme) => ({
                          width: 200,
                          height: 32,
                          px: 1.25,
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: 1,
                          border: '1px solid',
                          borderColor: 'divider',
                          color: 'text.secondary',
                          bgcolor:
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.common.white, 0.02)
                              : alpha(theme.palette.grey[50], 0.7),
                        })}
                      >
                        <Typography sx={{ fontSize: 13 }}>Search contracts</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ px: 1.5, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                      <Box sx={{ display: 'grid', gridTemplateColumns: dataGridScaleLoadingTemplateColumns, gap: 1 }}>
                        {dataGridScaleShowcaseColumns.map((column) =>
                          column.field === '__check__' ? (
                            <Box key={column.field} />
                          ) : (
                            <Typography
                              key={column.field}
                              sx={{ fontSize: 12, fontWeight: 700, color: 'text.primary' }}
                            >
                              {column.headerName}
                            </Typography>
                          ),
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ p: 1.5, display: 'grid', gap: 1 }}>
                      {Array.from({ length: 9 }).map((_, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'grid',
                            gridTemplateColumns: dataGridScaleLoadingTemplateColumns,
                            gap: 1,
                            alignItems: 'center',
                          }}
                        >
                          {dataGridScaleShowcaseColumns.map((column) => {
                            if (column.field === '__check__') {
                              return <Skeleton key={column.field} variant="rounded" width={18} height={18} />;
                            }
                            if (column.field === 'trendSeed' || column.field === 'filled' || column.field === 'status') {
                              return <Skeleton key={column.field} variant="rounded" height={24} />;
                            }
                            return <Skeleton key={column.field} variant="text" width="70%" />;
                          })}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </SectionReveal>
      </Section>
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
      <LandingComponentNav activeId="data-grid" />
      <Divider />
      <DataGridFeatureShowcaseBlock />
      <Divider />
      <HighlightsBlock
        overline="Highlights"
        headline={
          <Typography variant="h2">
            Everything users need to <GradientText>work through data</GradientText>
          </Typography>
        }
        description="Purpose-built capabilities that help users search, edit, analyze, and act on complex data without friction."
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
                Documentation paths for <GradientText>work users need to do</GradientText>
              </Typography>
            }
            description="Use these entry points to jump straight to the patterns teams use to help users manage, analyze, and act on data."
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
