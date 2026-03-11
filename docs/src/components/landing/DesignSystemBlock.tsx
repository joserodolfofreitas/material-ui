import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import LayersRounded from '@mui/icons-material/LayersRounded';
import AppsRounded from '@mui/icons-material/AppsRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { alpha } from '@mui/material/styles';
import { motionTransition, premiumTokens } from 'docs/src/components/landing/marketingTheme';

interface DesignSystemHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: DesignSystemHighlight[] = [
  {
    icon: <PaletteRounded />,
    title: 'Tokens and theming, first',
    description:
      'Map your brand tokens – color, typography, spacing, radius, density – once, then apply them consistently across every component and surface.',
  },
  {
    icon: <LayersRounded />,
    title: 'Layered system architecture',
    description:
      'Build your own system on top of MUI primitives: foundations → patterns → product components, without forking or fighting the library.',
  },
  {
    icon: <AppsRounded />,
    title: 'Multi-brand and icons ready',
    description:
      'Support multiple brands and themes from a single stack, and lean on a large icon library that stays in sync with your design tokens.',
  },
];

export default function DesignSystemBlock() {
  return (
    <Section cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Design systems"
          title={
            <Typography variant="h2">
              Build your design system on <GradientText>MUI</GradientText>
            </Typography>
          }
          description="Use MUI as the foundation for your design system – from tokens and theming to advanced surfaces – so every product team ships consistent, branded UI without rebuilding the basics."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {highlights.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <SectionReveal delay={index * 80}>
              <Paper
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    borderRadius: premiumTokens.radius.lg,
                    borderColor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[300], 0.18)
                        : alpha(theme.palette.primary[100], 0.85),
                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.03)
                        : alpha(theme.palette.common.white, 0.9),
                    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: (theme.vars || theme).palette.primary[300],
                      boxShadow: `0 10px 30px ${alpha(theme.palette.primary[500], 0.18)}`,
                    },
                    '&:focus-visible': {
                      outline: `3px solid ${(theme.vars || theme).palette.primary.main}`,
                      outlineOffset: 2,
                    },
                    ...theme.applyDarkStyles({
                      bgcolor: alpha(theme.palette.common.white, 0.04),
                      '&:hover': {
                        borderColor: alpha(theme.palette.primary[300], 0.4),
                        boxShadow: `0 10px 32px ${alpha(theme.palette.common.black, 0.5)}`,
                      },
                    }),
                  }),
                ]}
              >
                <Box
                  sx={(theme) => ({
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    color: (theme.vars || theme).palette.primary.main,
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    mb: 1,
                    ...theme.applyDarkStyles({
                      bgcolor: alpha(theme.palette.primary.main, 0.22),
                    }),
                  })}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.description}
                </Typography>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

