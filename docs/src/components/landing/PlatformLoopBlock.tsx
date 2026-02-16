import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import BrushRounded from '@mui/icons-material/BrushRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

const steps = [
  {
    icon: <BrushRounded />,
    title: 'Design in Figma',
    description:
      'Start with Design Kits that mirror every component, variant, and token in code. Design intent stays intact.',
    href: '/design-kits/',
    color: 'secondary' as const,
  },
  {
    icon: <CodeRounded />,
    title: 'Build with components',
    description:
      'Ship with Core and Advanced components trusted in production by thousands of teams. Accessible, themeable, composable.',
    href: '/material-ui/getting-started/',
    color: 'primary' as const,
  },
  {
    icon: <RocketLaunchRounded />,
    title: 'Start fast with templates',
    description:
      'Skip boilerplate. Free starter layouts and fully built templates get your team to a working app in hours, not weeks.',
    href: '/templates/',
    color: 'success' as const,
  },
  {
    icon: <AutoAwesomeRounded />,
    title: 'Accelerate with AI',
    description:
      "Get tailored examples, scaffold patterns, and iterate on UI - all grounded in MUI's real component system.",
    href: 'https://chat.mui.com',
    color: 'warning' as const,
  },
];

export default function PlatformLoopBlock() {
  return (
    <Section bg="gradient" cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="The platform loop"
          title={
            <Typography variant="h2">
              From idea to shipped UI - <GradientText>one connected workflow</GradientText>
            </Typography>
          }
          description="Design, build, start fast, and accelerate iteration. Every step shares the same vocabulary."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {steps.map((step, index) => (
          <Grid key={step.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <SectionReveal delay={index * 80}>
              <Paper
                component={Link}
                noLinkStyle
                href={step.href}
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
                      '& .loop-icon': {
                        transform: 'scale(1.15)',
                      },
                      '& .loop-arrow': {
                        transform: 'translateX(4px)',
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
                <Box
                  sx={[
                    (theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: 1,
                      color: (theme.vars || theme).palette[step.color].main,
                      bgcolor: alpha(theme.palette[step.color].main, 0.1),
                      transition: motionTransition(['transform', 'background-color']),
                      ...theme.applyDarkStyles({
                        bgcolor: alpha(theme.palette[step.color].main, 0.15),
                      }),
                    }),
                  ]}
                  className="loop-icon"
                >
                  {step.icon}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      color: 'text.tertiary',
                      fontSize: '0.75rem',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                  {index < steps.length - 1 && (
                    <Box
                      sx={(theme) => ({
                        flex: 1,
                        height: 1,
                        bgcolor: 'divider',
                        display: { xs: 'none', md: 'block' },
                      })}
                    />
                  )}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {step.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', color: 'primary.main', mt: 'auto' }}
                >
                  {'Learn more '}
                  <Box
                    component="span"
                    className="loop-arrow"
                    sx={{ display: 'inline-block', transition: motionTransition(['transform']) }}
                  >
                    {'→'}
                  </Box>
                </Typography>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
