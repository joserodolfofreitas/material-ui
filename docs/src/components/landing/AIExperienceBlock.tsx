import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { motionTransition, premiumTokens } from 'docs/src/components/landing/marketingTheme';
import GradientMesh from 'docs/src/components/landing/effects/GradientMesh';
import { Link } from '@mui/docs/Link';

const capabilities = [
  {
    icon: <TableChartRounded />,
    title: 'AI actions for Data Grid',
    description:
      'Turn filtering, grouping, pivoting, and analysis into natural-language actions on top of the same trusted grid.',
  },
  {
    icon: <InsightsRounded />,
    title: 'Insightful chart workflows',
    description:
      'Connect chart updates to user prompts so trends, comparisons, and anomalies become easier to surface.',
  },
  {
    icon: <RecordVoiceOverRounded />,
    title: 'Voice-ready scheduling',
    description:
      'Bring voice and assistant-driven actions to scheduling, coordination, and time-based planning experiences.',
  },
  {
    icon: <ChatBubbleOutlineRounded />,
    title: 'Conversational product surfaces',
    description:
      'Embed calm, context-aware assistants into the workflows your users already rely on every day.',
  },
];

export default function AIExperienceBlock() {
  return (
    <Section bg="gradient" cozy>
      <Box sx={{ position: 'relative' }}>
        <GradientMesh />
      </Box>
      <Grid container spacing={4} sx={{ alignItems: 'center', position: 'relative', zIndex: 1 }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <SectionReveal>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}></Box>
            <SectionHeadline
              overline="AI-native workflows"
              title={
                <Typography variant="h2">
                  Advanced UI, now enhanced with <GradientText>AI-native workflows</GradientText>
                  <AutoAwesomeRounded sx={{ color: 'primary.main' }} />
                </Typography>
              }
              description="AI is the multiplier, not the identity. MUI's advanced components are evolving to support natural language, voice, and assistant-driven product interactions across grids, charts, scheduling, and chat."
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
              <Button
                component={Link}
                noLinkStyle
                href="/ai"
                variant="contained"
                size="large"
                endIcon={<KeyboardArrowRightRounded />}
              >
                Explore AI workflows
              </Button>
              <Button
                component={Link}
                noLinkStyle
                href="/x/data-grid-landing/"
                variant="outlined"
                color="secondary"
                size="large"
              >
                See Data Grid in action
              </Button>
            </Stack>
          </SectionReveal>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            {capabilities.map((cap, index) => (
              <Grid key={cap.title} size={{ xs: 12, sm: 6 }}>
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
                        borderRadius: premiumTokens.radius.lg,
                        bgcolor:
                          theme.palette.mode === 'dark'
                            ? alpha(theme.palette.common.white, 0.02)
                            : alpha(theme.palette.common.white, 0.8),
                        transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: (theme.vars || theme).palette.primary[200],
                          boxShadow: `0 8px 30px ${alpha(theme.palette.primary[500], 0.14)}`,
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
                          width: 36,
                          height: 36,
                          borderRadius: 1.5,
                          color: (theme.vars || theme).palette.primary[700],
                          bgcolor: alpha(theme.palette.primary[100], 0.6),
                          ...theme.applyDarkStyles({
                            color: (theme.vars || theme).palette.primary[300],
                            bgcolor: alpha(theme.palette.primary[900], 0.32),
                          }),
                        }),
                      ]}
                    >
                      {cap.icon}
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {cap.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {cap.description}
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
