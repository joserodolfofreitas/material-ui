import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import WidgetsRounded from '@mui/icons-material/WidgetsRounded';
import DashboardCustomizeRounded from '@mui/icons-material/DashboardCustomizeRounded';
import BrushRounded from '@mui/icons-material/BrushRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { motionTransition, type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

interface SuiteCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  status?: ProductStatus;
}

const suiteCards: SuiteCard[] = [
  {
    icon: <WidgetsRounded />,
    title: 'Core components',
    description:
      'Material UI, Base UI, and Joy UI - production-ready components with deep theming, accessibility, and composability built in.',
    href: '/core/',
  },
  {
    icon: <DashboardCustomizeRounded />,
    title: 'Advanced components',
    description:
      'Data Grid, Charts, Date Pickers, Tree View, and more - complex UI solved so your team can focus on product logic.',
    href: '/x/',
  },
  {
    icon: <BrushRounded />,
    title: 'Design Kits',
    description:
      'Figma kits with every component, variant, state, and token - so design and code share the same vocabulary.',
    href: '/design-kits/',
  },
  {
    icon: <AutoAwesomeRounded />,
    title: 'Tailored examples with AI',
    description:
      "AI that generates examples, scaffolds patterns, and iterates on UI - grounded in MUI's real component system.",
    href: 'https://chat.mui.com',
    status: 'alpha' as ProductStatus,
  },
];

export default function PlatformSuiteBlock() {
  return (
    <Section cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="The MUI platform"
          title={
            <Typography variant="h2">
              Everything you need to <GradientText>design, build, and ship</GradientText>
            </Typography>
          }
          description="One platform that connects Figma, components, templates, and AI into a single workflow."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {suiteCards.map((card, index) => (
          <Grid
            key={card.title}
            size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 4 }}
          >
            <SectionReveal delay={index * 60}>
              <Paper
                component={Link}
                noLinkStyle
                href={card.href}
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    textDecoration: 'none',
                    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: (theme.vars || theme).palette.primary[200],
                      boxShadow: `0 8px 30px ${alpha(theme.palette.primary[500], 0.15)}`,
                      '& .suite-icon': {
                        transform: 'scale(1.15)',
                      },
                    },
                    '&:focus-visible': {
                      outline: `3px solid ${(theme.vars || theme).palette.primary.main}`,
                      outlineOffset: 2,
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
                        transition: motionTransition(['transform', 'background-color']),
                        ...theme.applyDarkStyles({
                          bgcolor: alpha(theme.palette.primary.main, 0.15),
                        }),
                      }),
                    ]}
                    className="suite-icon"
                  >
                    {card.icon}
                  </Box>
                  {card.status && <StatusBadge status={card.status} />}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
