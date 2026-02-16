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
import { motionTransition } from 'docs/src/components/landing/marketingTheme';
import GradientMesh from 'docs/src/components/landing/effects/GradientMesh';
import { Link } from '@mui/docs/Link';

const capabilities = [
  {
    icon: <TableChartRounded />,
    title: 'Ask your Data Grid',
    description:
      'Let users query data in plain language - filter, sort, group, and explore without touching a single control.',
  },
  {
    icon: <InsightsRounded />,
    title: 'Chart insights on demand',
    description:
      'Surface trends, anomalies, and key changes automatically. Users ask "what happened?" and get visual answers.',
  },
  {
    icon: <RecordVoiceOverRounded />,
    title: 'Voice-powered scheduling',
    description:
      'Schedule with voice, resolve conflicts intelligently, and let AI suggest optimal times across calendars.',
  },
  {
    icon: <ChatBubbleOutlineRounded />,
    title: 'Conversational UI',
    description:
      'Embed AI assistants with streaming responses, context-aware suggestions, and seamless data layer integration.',
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              
            </Box>
            <SectionHeadline
              overline="AI-native components"
              title={
                <Typography variant="h2">
                  Give your users{' '}
                  <GradientText>AI superpowers</GradientText>
                  <AutoAwesomeRounded sx={{ color: 'warning.main' }} />
                </Typography>
              }
              description="Every MUI X component is designed to be AI-ready. Add intelligence to grids, charts, schedulers, and chat - so your end users interact with data through natural language, voice, and conversation."
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
                Explore AI features
              </Button>
              <Button
                component={Link}
                noLinkStyle
                href="/x/data-grid-landing/"
                variant="outlined"
                color="secondary"
                size="large"
              >
                See Data Grid AI
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
                        transition: motionTransition(['transform', 'box-shadow', 'border-color']),
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: (theme.vars || theme).palette.warning[200],
                          boxShadow: `0 4px 20px ${alpha(theme.palette.warning[500], 0.1)}`,
                        },
                        ...theme.applyDarkStyles({
                          '&:hover': {
                            borderColor: alpha(theme.palette.warning[500], 0.3),
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
                          borderRadius: 1,
                          color: (theme.vars || theme).palette.warning[700],
                          bgcolor: alpha(theme.palette.warning[100], 0.5),
                          ...theme.applyDarkStyles({
                            color: (theme.vars || theme).palette.warning[300],
                            bgcolor: alpha(theme.palette.warning[900], 0.3),
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
