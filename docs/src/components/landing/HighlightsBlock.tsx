import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { motionTransition, type ProductStatus } from 'docs/src/components/landing/marketingTheme';

export interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
  status?: ProductStatus;
  tier?: 'Community' | 'Pro' | 'Premium';
}

interface HighlightsBlockProps {
  overline?: string;
  headline: string | React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  description?: string;
  highlights: Highlight[];
}

export default function HighlightsBlock({
  overline = 'Highlights',
  headline,
  description,
  highlights,
}: HighlightsBlockProps) {
  return (
    <Section cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline={overline}
          title={
            typeof headline === 'string' ? (
              <Typography variant="h2">{headline}</Typography>
            ) : (
              (headline as React.ReactElement<React.HTMLAttributes<HTMLElement>>)
            )
          }
          description={description}
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {highlights.map((highlight, index) => (
          <Grid
            key={highlight.title}
            size={{ xs: 12, sm: 6, md: highlights.length <= 6 ? 4 : 3 }}
          >
            <SectionReveal delay={index * 60}>
              <Paper
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: (theme.vars || theme).palette.primary[200],
                      boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.12)}`,
                    },
                    ...theme.applyDarkStyles({
                      '&:hover': {
                        borderColor: alpha(theme.palette.primary[500], 0.3),
                        boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.4)}`,
                      },
                    }),
                  }),
                ]}
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
                  {highlight.status && <StatusBadge status={highlight.status} />}
                  {highlight.tier && (
                    <Typography
                      variant="caption"
                      sx={[
                        (theme) => ({
                          px: 1,
                          py: 0.25,
                          borderRadius: 0.5,
                          bgcolor: alpha(theme.palette.primary.main, 0.08),
                          color: (theme.vars || theme).palette.primary.main,
                          ...theme.applyDarkStyles({
                            bgcolor: alpha(theme.palette.primary.main, 0.15),
                            color: (theme.vars || theme).palette.primary[300],
                          }),
                        }),
                      ]}
                    >
                      {highlight.tier}
                    </Typography>
                  )}
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
  );
}
