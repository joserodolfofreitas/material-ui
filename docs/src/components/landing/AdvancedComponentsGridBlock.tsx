import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
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
import FloatingParticles from 'docs/src/components/landing/effects/FloatingParticles';
import ComponentPreviewCard from 'docs/src/components/landing/effects/ComponentPreviewCard';
import { Link } from '@mui/docs/Link';

interface AdvancedComponent {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  status?: ProductStatus;
  href: string;
}

const components: AdvancedComponent[] = [
  {
    icon: <TableChartRounded />,
    title: 'Data Grid',
    description:
      'The flagship grid for serious products: high-performance, deeply customizable, and ready for AI-assisted workflows.',
    highlights: [
      'AI-assisted analysis and voice interactions',
      'Pivoting, tree data, and aggregation',
      'Master-detail, editing, and export',
    ],
    href: '/x/data-grid-landing/',
  },
  {
    icon: <BarChartRounded />,
    title: 'Charts',
    description:
      'Composable, dashboard-ready charts that match your system and scale with your app.',
    highlights: [
      'High-performance rendering',
      'Rich chart portfolio',
      'Composable building blocks',
      'Financial charts',
    ],
    href: '/x/charts-landing/',
  },
  {
    icon: <CalendarMonthRounded />,
    title: 'Scheduler',
    description: 'Scheduling for complex products: events, resources, and timelines.',
    highlights: ['Calendar events and resources', 'Recurring events support'],
    status: 'alpha',
    href: '/x/scheduler-landing/',
  },
  {
    icon: <ChatBubbleOutlineRounded />,
    title: 'Chatbox',
    description: 'A conversational UI component for chat interfaces, AI assistants, and messaging.',
    highlights: ['Streaming message support', 'Customizable message rendering'],
    status: 'alpha',
    href: '/x/chatbox-landing/',
  },
  {
    icon: <AccountTreeRounded />,
    title: 'Gantt',
    description:
      'Project timeline visualization with dependencies, milestones, and resource allocation.',
    highlights: ['Task dependencies', 'Timeline and resource views'],
    status: 'coming-soon',
    href: '/x/gantt-landing/',
  },
];

export default function AdvancedComponentsGridBlock() {
  return (
    <Section cozy>
      <Box sx={{ position: 'relative' }}>
        <FloatingParticles />
      </Box>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Advanced components"
          title={
            <Typography variant="h2">
              Flagship building blocks for <GradientText>high-value product workflows</GradientText>
            </Typography>
          }
          description="MUI X gives React teams the advanced surfaces they need for analytics, planning, scheduling, and AI-enhanced product experiences."
        />
      </SectionReveal>
      <SectionReveal delay={100}>
        <Box
          sx={{
            maxWidth: 480,
            mx: 'auto',
            mt: 4,
            mb: 5,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <ComponentPreviewCard />
        </Box>
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {components.map((comp, index) => (
          <Grid key={comp.title} size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 4 }}>
            <SectionReveal delay={index * 60}>
              <Paper
                component={Link}
                noLinkStyle
                href={comp.href}
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
                      '& .adv-icon': {
                        transform: 'scale(1.15)',
                      },
                      '& .arrow-icon': {
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
                    className="adv-icon"
                  >
                    {comp.icon}
                  </Box>
                  {comp.status && <StatusBadge status={comp.status} />}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {comp.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', flex: 1 }}>
                  {comp.description}
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: 2,
                    '& li': { mb: 0.5 },
                  }}
                >
                  {comp.highlights.map((h) => (
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
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    mt: 'auto',
                    pt: 1,
                  }}
                >
                  Learn more{' '}
                  <Box
                    component="span"
                    className="arrow-icon"
                    sx={{ transition: motionTransition('transform', 'fast') }}
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
