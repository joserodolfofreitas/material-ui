import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import NotificationsActiveRounded from '@mui/icons-material/NotificationsActiveRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

export interface PlannedHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StubUseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StubLandingBlockProps {
  title: string;
  gradientText?: string;
  description: string;
  status: ProductStatus;
  plannedHighlights: PlannedHighlight[];
  useCases: StubUseCase[];
  integrationPromise?: string;
}

export default function StubLandingBlock({
  title,
  gradientText,
  description,
  status,
  plannedHighlights,
  useCases,
  integrationPromise = "Built with MUI's theming system, accessibility patterns, and component conventions from day one.",
}: StubLandingBlockProps) {
  return (
    <React.Fragment>
      {/* Planned highlights */}
      <Section cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="Planned highlights"
            title={<Typography variant="h2">What we&apos;re building</Typography>}
            description="These features are planned. Status badges indicate what's available today and what's coming next."
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {plannedHighlights.map((highlight, index) => (
            <Grid
              key={highlight.title}
              size={{ xs: 12, sm: 6, md: plannedHighlights.length <= 4 ? 6 : 4 }}
            >
              <SectionReveal delay={index * 60}>
                <Paper
                  variant="outlined"
                  sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={[
                        (theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: 1,
                          color: (theme.vars || theme).palette.primary.main,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          ...theme.applyDarkStyles({
                            bgcolor: alpha(theme.palette.primary.main, 0.15),
                          }),
                        }),
                      ]}
                    >
                      {highlight.icon}
                    </Box>
                    <StatusBadge status={status} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {highlight.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {highlight.description}
                  </Typography>
                </Paper>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Use cases */}
      <Section bg="comfort" cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="Use cases"
            title={
              <Typography variant="h2">
                Built for <GradientText>real-world scenarios</GradientText>
              </Typography>
            }
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {useCases.map((useCase, index) => (
            <Grid key={useCase.title} size={{ xs: 12, md: 4 }}>
              <SectionReveal delay={index * 80}>
                <Paper
                  variant="outlined"
                  sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}
                >
                  <Box
                    sx={[
                      (theme) => ({
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        color: (theme.vars || theme).palette.primary.main,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        ...theme.applyDarkStyles({
                          bgcolor: alpha(theme.palette.primary.main, 0.15),
                        }),
                      }),
                    ]}
                  >
                    {useCase.icon}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {useCase.description}
                  </Typography>
                </Paper>
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Integration promise + CTA */}
      <Section cozy>
        <SectionReveal>
          <Box
            sx={[
              (theme) => ({
                textAlign: 'center',
                py: { xs: 5, md: 8 },
                px: { xs: 3, md: 6 },
                borderRadius: 3,
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.divider,
                background: (theme.vars || theme).palette.gradients.linearSubtle,
              }),
            ]}
          >
            <Typography variant="h5" sx={{ mb: 1 }}>
              MUI integration promise
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4, maxWidth: 520, mx: 'auto' }}>
              {integrationPromise}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              useFlexGap
              sx={{ justifyContent: 'center' }}
            >
              <Button
                component={Link}
                noLinkStyle
                href="https://mui.com/blog/"
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<NotificationsActiveRounded />}
              >
                Follow updates
              </Button>
              <Button
                component={Link}
                noLinkStyle
                href="https://chat.mui.com"
                variant="outlined"
                color="secondary"
                size="large"
                startIcon={<AutoAwesomeRounded />}
              >
                Start building
              </Button>
            </Stack>
          </Box>
        </SectionReveal>
      </Section>
    </React.Fragment>
  );
}
