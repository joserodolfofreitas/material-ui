import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import InsightsRounded from '@mui/icons-material/InsightsRounded';
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import Section from 'docs/src/layouts/Section';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import LandingComponentNav from 'docs/src/components/landing/LandingComponentNav';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';
import {
  aiHero,
  aiCapabilities,
  aiGrounding,
} from 'docs/src/components/landing/configs/aiPageConfig';

const capabilityIcons = [
  <TableChartRounded key="grid" />,
  <InsightsRounded key="charts" />,
  <RecordVoiceOverRounded key="voice" />,
  <ChatBubbleOutlineRounded key="chat" />,
];

export default function AILanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={aiHero.title}
        gradientText={aiHero.gradientText}
        description={aiHero.description}
        status={aiHero.status}
        ctas={aiHero.ctas}
      />
      <LandingComponentNav activeId="ai" />
      <Divider />
      {/* Capabilities */}
      <Section cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="AI-native components"
            title={
              <Typography variant="h2">
                Intelligence built into <GradientText>the UI people already use</GradientText>
              </Typography>
            }
            description="Each MUI X component is designed to make work easier. Add natural language, voice, and conversational intelligence to the UI your users already rely on."
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {aiCapabilities.map((cap, index) => (
            <Grid key={cap.title} size={{ xs: 12, sm: 6 }}>
              <SectionReveal delay={index * 80}>
                <Paper
                  variant="outlined"
                  sx={[
                    (theme) => ({
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
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
                        width: 40,
                        height: 40,
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
                    {capabilityIcons[index]}
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
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
      </Section>
      <Divider />
      {/* Grounding section */}
      <Section bg="comfort" cozy>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionReveal>
              <SectionHeadline
                overline="How it works"
                title={
                  <Typography variant="h2">
                    AI built into the <GradientText>way users get work done</GradientText>
                  </Typography>
                }
                description={aiGrounding.description}
              />
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <SectionReveal delay={100}>
              <Paper variant="outlined" sx={{ p: 4 }}>
                {aiGrounding.points.map((point) => (
                  <Box
                    key={point}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 2,
                      '&:last-child': { mb: 0 },
                    }}
                  >
                    <CheckCircleOutlineRounded
                      sx={{ color: 'success.main', fontSize: 20, flexShrink: 0 }}
                    />
                    <Typography variant="body1">{point}</Typography>
                  </Box>
                ))}
              </Paper>
            </SectionReveal>
          </Grid>
        </Grid>
      </Section>
      <Divider />
      <FinalCTABlock
        headline={
          <Typography variant="h2">
            Ready to <GradientText>build faster with AI</GradientText>?
          </Typography>
        }
        description="Add AI superpowers to your product with components your team already knows."
        primaryCta={{ label: 'Get started', href: '/material-ui/getting-started/' }}
        secondaryCta={{ label: 'Explore AI components', href: '/x/' }}
      />
    </React.Fragment>
  );
}
