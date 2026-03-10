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
import {
  cardHoverSx,
  motionTransition,
  premiumTokens,
} from 'docs/src/components/landing/marketingTheme';
import GradientMesh from 'docs/src/components/landing/effects/GradientMesh';
import { Link } from '@mui/docs/Link';

const capabilities = [
  {
    icon: <TableChartRounded />,
    title: 'Prompt-driven Data Grid',
    description:
      'Turn filtering, grouping, pivoting, and analysis into natural-language actions on top of the same trusted grid.',
  },
  {
    icon: <InsightsRounded />,
    title: 'Charts that stay in sync',
    description:
      'Connect chart updates to prompts so trends, comparisons, and anomalies stay tied to the same workflow.',
  },
  {
    icon: <RecordVoiceOverRounded />,
    title: 'Voice-ready scheduling',
    description:
      'Bring voice and assistant-driven actions to scheduling, coordination, and time-based planning experiences.',
  },
  {
    icon: <ChatBubbleOutlineRounded />,
    title: 'Embedded assistant experiences',
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
            <Box
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                mb: 2,
                px: 1.25,
                py: 0.75,
                borderRadius: premiumTokens.radius.pill,
                border: '1px solid',
                borderColor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[500], 0.16)
                    : alpha(theme.palette.primary[200], 0.6),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[500], 0.06)
                    : alpha(theme.palette.common.white, 0.5),
                backdropFilter: 'blur(12px)',
              })}
            >
              <AutoAwesomeRounded sx={{ fontSize: 16, color: 'primary.main' }} />
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                Built into advanced components
              </Typography>
            </Box>
            <SectionHeadline
              overline="AI-native workflows"
              title={
                <Typography variant="h2">
                  Advanced UI, now enhanced with <GradientText>AI-native workflows</GradientText>
                </Typography>
              }
              description="AI is the multiplier, not the identity. MUI is bringing natural-language, voice, and assistant-driven interactions to advanced components so powerful UI becomes easier to operate and more useful in production."
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3.5 }} useFlexGap>
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
          <Box
            sx={(theme) => ({
              p: { xs: 1, sm: 1.25 },
              borderRadius: premiumTokens.radius.xl,
              border: '1px solid',
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary[300], 0.14)
                  : alpha(theme.palette.primary[100], 0.7),
              bgcolor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.02)
                  : alpha(theme.palette.common.white, 0.42),
              backdropFilter: 'blur(18px)',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? `0 18px 50px ${alpha(theme.palette.common.black, 0.32)}`
                  : `0 18px 50px ${alpha(theme.palette.primary[900], 0.08)}`,
            })}
          >
            <Grid container spacing={2}>
              {capabilities.map((cap, index) => (
                <Grid key={cap.title} size={{ xs: 12, sm: 6 }}>
                  <SectionReveal delay={index * 80}>
                    <Paper
                      variant="outlined"
                      sx={[
                        (theme) => ({
                          p: 2.75,
                          minHeight: 176,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1.25,
                          borderRadius: premiumTokens.radius.lg,
                          borderColor:
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.primary[300], 0.1)
                              : alpha(theme.palette.primary[100], 0.75),
                          bgcolor:
                            theme.palette.mode === 'dark'
                              ? alpha(theme.palette.common.white, 0.03)
                              : alpha(theme.palette.common.white, 0.86),
                          boxShadow: 'none',
                          ...cardHoverSx(theme),
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
                            borderRadius: '10px',
                            color: (theme.vars || theme).palette.primary[700],
                            bgcolor:
                              theme.palette.mode === 'dark'
                                ? alpha(theme.palette.primary[900], 0.34)
                                : alpha(theme.palette.primary[100], 0.55),
                            transition: motionTransition(['transform', 'background-color']),
                            '.MuiPaper-root:hover &': {
                              transform: 'scale(1.05)',
                            },
                            ...theme.applyDarkStyles({
                              color: (theme.vars || theme).palette.primary[300],
                            }),
                          }),
                        ]}
                      >
                        {cap.icon}
                      </Box>
                      <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {cap.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 260 }}>
                        {cap.description}
                      </Typography>
                    </Paper>
                  </SectionReveal>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}
