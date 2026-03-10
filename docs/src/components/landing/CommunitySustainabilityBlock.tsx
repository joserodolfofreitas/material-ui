import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import AnimatedCounter from 'docs/src/components/landing/effects/AnimatedCounter';
import GradientMesh from 'docs/src/components/landing/effects/GradientMesh';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';

const metrics = [
  { end: 4700000, suffix: '+', label: 'Weekly npm downloads' },
  { end: 95000, suffix: '+', label: 'GitHub stars' },
  { end: 2900, suffix: '+', label: 'Open-source contributors' },
  { end: 10, suffix: '+', label: 'Years of active maintenance' },
];

const testimonials = [
  {
    quote:
      'MUI has been a cornerstone of our frontend stack. The component quality and documentation are unmatched.',
    author: 'Engineering Lead',
    company: 'Fortune 500 fintech',
  },
  {
    quote:
      'We evaluated every major React UI library. MUI won on reliability, customization depth, and long-term maintenance commitment.',
    author: 'VP of Engineering',
    company: 'Series B SaaS startup',
  },
];

export default function CommunitySustainabilityBlock() {
  return (
    <Section bg="gradient" cozy>
      <Box sx={{ position: 'relative' }}>
        <GradientMesh />
      </Box>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Community and sustainability"
          title={
            <Typography variant="h2">
              Built to last - <GradientText>maintained for the long term</GradientText>
            </Typography>
          }
          description="MUI is backed by a dedicated full-time team, a vibrant open-source community, and a commitment to stability that serious products depend on."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2, position: 'relative', zIndex: 1 }}>
        {metrics.map((metric, index) => (
          <Grid key={metric.label} size={{ xs: 6, md: 3 }}>
            <SectionReveal delay={index * 80}>
              <Paper
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderColor: (theme.vars || theme).palette.primary[200],
                      boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.1)}`,
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
                <AnimatedCounter end={metric.end} suffix={metric.suffix} label={metric.label} />
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3} sx={{ mt: 3, position: 'relative', zIndex: 1 }}>
        {testimonials.map((testimonial, index) => (
          <Grid key={testimonial.author} size={{ xs: 12, md: 6 }}>
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
                    borderLeft: '3px solid',
                    borderLeftColor: (theme.vars || theme).palette.primary.main,
                    transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.08)}`,
                    },
                    ...theme.applyDarkStyles({
                      '&:hover': {
                        boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.3)}`,
                      },
                    }),
                  }),
                ]}
              >
                <Typography
                  variant="body1"
                  sx={{ fontStyle: 'italic', color: 'text.secondary', lineHeight: 1.7 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.tertiary' }}>
                    {testimonial.company}
                  </Typography>
                </Box>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
