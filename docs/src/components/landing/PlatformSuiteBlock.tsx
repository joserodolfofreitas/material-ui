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
import ViewQuiltRounded from '@mui/icons-material/ViewQuiltRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import {
  motionTransition,
  premiumTokens,
  type ProductStatus,
} from 'docs/src/components/landing/marketingTheme';
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
      'Production-ready building blocks with accessibility, theming, and reliability baked in.',
    href: '/core/',
  },
  {
    icon: <DashboardCustomizeRounded />,
    title: 'Advanced components',
    description:
      'Data Grid, Charts, Scheduler, and more for the high-value workflows serious product teams need.',
    href: '/x/',
  },
  {
    icon: <ViewQuiltRounded />,
    title: 'Templates',
    description:
      'Ready-to-use application shells and polished UI patterns that help teams ship faster without starting from zero.',
    href: '/store/#populars',
  },
  {
    icon: <BrushRounded />,
    title: 'Design Kits',
    description:
      'Design assets and tokens that keep product design and implementation aligned across the same system.',
    href: '/design-kits/',
  },
  {
    icon: <AutoAwesomeRounded />,
    title: 'MUI Chat',
    description:
      "Generate MUI-first examples, scaffold real interfaces, and iterate faster with AI grounded in MUI's ecosystem.",
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
              One connected system for{' '}
              <GradientText>designing, building, and shipping</GradientText>
            </Typography>
          }
          description="MUI brings the essentials of modern product delivery into one platform: foundational UI, advanced workflows, templates, design assets, and AI acceleration."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {suiteCards.map((card, index) => (
          <Grid key={card.title} size={{ xs: 12, md: index < 2 ? 6 : 4 }}>
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
                    borderRadius: premiumTokens.radius.lg,
                    bgcolor:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.02)
                        : alpha(theme.palette.common.white, 0.82),
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
