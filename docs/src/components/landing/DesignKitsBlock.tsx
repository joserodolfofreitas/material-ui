import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import BrushRounded from '@mui/icons-material/BrushRounded';
import PaletteRounded from '@mui/icons-material/PaletteRounded';
import SyncAltRounded from '@mui/icons-material/SyncAltRounded';
import FormatPaintRounded from '@mui/icons-material/FormatPaintRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { Link } from '@mui/docs/Link';

const kitsFeatures = [
  {
    icon: <PaletteRounded />,
    title: 'Every component and variant',
    description:
      'All Material UI components with every state, size, and color variant - matching the code 1:1.',
  },
  {
    icon: <SyncAltRounded />,
    title: 'Shared design tokens',
    description:
      'Typography, spacing, color palettes, and elevation tokens that stay in sync between Figma and code.',
  },
  {
    icon: <FormatPaintRounded />,
    title: 'Auto-layout and responsiveness',
    description:
      'Components built with Figma auto-layout for realistic responsive behavior during design.',
  },
  {
    icon: <BrushRounded />,
    title: 'Icons and illustrations',
    description:
      'Material Design icons and custom illustration assets ready to use in your design files.',
  },
];

export default function DesignKitsBlock() {
  return (
    <Section cozy>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <SectionReveal>
            <SectionHeadline
              overline="Design Kits for Figma"
              title={
                <Typography variant="h2">
                  Design and dev speak the <GradientText>same language</GradientText>
                </Typography>
              }
              description="Figma kits that mirror every MUI component, variant, and token. Design intent survives the handoff to code - every time."
            />
            <Button
              component={Link}
              noLinkStyle
              href="/design-kits/"
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowRightRounded />}
              sx={{ mt: 3 }}
            >
              Explore Design Kits
            </Button>
          </SectionReveal>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            {kitsFeatures.map((feature, index) => (
              <Grid key={feature.title} size={{ xs: 12, sm: 6 }}>
                <SectionReveal delay={index * 80}>
                  <Paper
                    variant="outlined"
                    sx={[
                      (theme) => ({
                        p: 2.5,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                      }),
                    ]}
                  >
                    <Box
                      sx={[
                        (theme) => ({
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 36,
                          height: 36,
                          borderRadius: 1,
                          color: (theme.vars || theme).palette.primary.main,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          ...theme.applyDarkStyles({
                            bgcolor: alpha(theme.palette.primary.main, 0.15),
                          }),
                        }),
                      ]}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {feature.description}
                    </Typography>
                  </Paper>
                </SectionReveal>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
