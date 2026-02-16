import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import WebRounded from '@mui/icons-material/WebRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

const templateCategories = [
  {
    icon: <WebRounded />,
    title: 'Free starter layouts',
    description:
      'Dashboard, sign-in, landing page, checkout, and blog layouts - ready to clone and customize. Zero cost, zero friction.',
    highlights: [
      'Dashboard with sidebar navigation',
      'Authentication flows (sign-in, sign-up)',
      'Marketing landing page',
      'E-commerce checkout',
    ],
    href: '/material-ui/getting-started/templates/',
    ctaLabel: 'Browse free templates',
  },
  {
    icon: <RocketLaunchRounded />,
    title: 'Fully built templates',
    description:
      'Production-grade starters with routing, auth, data fetching, and polished UI - days of setup reduced to a single install.',
    highlights: [
      'Complete app architecture',
      'Pre-configured routing and layouts',
      'Dark mode and responsive design',
      'TypeScript and best practices',
    ],
    href: '/templates/',
    ctaLabel: 'Explore premium templates',
  },
];

export default function TemplatesAndStartersBlock() {
  return (
    <Section bg="comfort" cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Templates and starters"
          title={
            <Typography variant="h2">
              From zero to working app - <GradientText>fast</GradientText>
            </Typography>
          }
          description="Skip boilerplate. Start with proven layouts and production-grade starters that accelerate every project."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {templateCategories.map((cat, index) => (
          <Grid key={cat.title} size={{ xs: 12, md: 6 }}>
            <SectionReveal delay={index * 100}>
              <Paper
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
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
                <Box
                  sx={[
                    (theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 1.5,
                      color: (theme.vars || theme).palette.primary.main,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      ...theme.applyDarkStyles({
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                      }),
                    }),
                  ]}
                >
                  {cat.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {cat.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {cat.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2,
                    '& li': { mb: 0.5 },
                  }}
                >
                  {cat.highlights.map((h) => (
                    <Typography
                      key={h}
                      component="li"
                      variant="body2"
                      sx={{ color: 'text.secondary', fontSize: '0.8125rem' }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>
                <Button
                  component={Link}
                  noLinkStyle
                  href={cat.href}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  endIcon={<KeyboardArrowRightRounded />}
                  sx={{ mt: 'auto', alignSelf: 'flex-start' }}
                >
                  {cat.ctaLabel}
                </Button>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
