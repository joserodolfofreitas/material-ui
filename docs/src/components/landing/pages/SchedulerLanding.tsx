import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import EventRepeatRounded from '@mui/icons-material/EventRepeatRounded';
import ViewTimelineRounded from '@mui/icons-material/ViewTimelineRounded';
import DragIndicatorRounded from '@mui/icons-material/DragIndicatorRounded';
import InvertColorsRounded from '@mui/icons-material/InvertColorsRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import EventAvailableRounded from '@mui/icons-material/EventAvailableRounded';
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import MeetingRoomRounded from '@mui/icons-material/MeetingRoomRounded';
import CheckCircleOutlineRounded from '@mui/icons-material/CheckCircleOutlineRounded';
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';
import Section from 'docs/src/layouts/Section';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import HighlightsBlock from 'docs/src/components/landing/HighlightsBlock';
import LandingComponentNav from 'docs/src/components/landing/LandingComponentNav';
import UseCasesBlock from 'docs/src/components/landing/UseCasesBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { Link } from '@mui/docs/Link';
import {
  schedulerHero,
  schedulerHighlights,
  schedulerUseCases,
  schedulerAlphaInfo,
} from 'docs/src/components/landing/configs/schedulerConfig';

const highlightIcons = [
  <CalendarMonthRounded key="cal" />,
  <EventRepeatRounded key="recur" />,
  <ViewTimelineRounded key="timeline" />,
  <DragIndicatorRounded key="dnd" />,
  <InvertColorsRounded key="theme" />,
  <AutoAwesomeRounded key="ai" />,
];

const useCaseIcons = [
  <EventAvailableRounded key="booking" />,
  <GroupsRounded key="project" />,
  <MeetingRoomRounded key="facility" />,
];

export default function SchedulerLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={schedulerHero.title}
        gradientText={schedulerHero.gradientText}
        description={schedulerHero.description}
        status={schedulerHero.status}
        ctas={schedulerHero.ctas}
      />
      <LandingComponentNav activeId="scheduler" />
      <Divider />
      <HighlightsBlock
        overline="Highlights"
        headline={
          <Typography variant="h2">
            Scheduling built to <GradientText>keep work moving</GradientText>
          </Typography>
        }
        description="Calendar views, recurring events, resource timelines, and drag-and-drop that help users coordinate time, people, and resources with less friction."
        highlights={schedulerHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <CalendarMonthRounded />,
        }))}
      />
      <Section cozy>
        <SectionReveal>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.25}
            useFlexGap
            sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
          >
            <Typography sx={{ fontSize: 12, color: 'text.secondary', maxWidth: 520 }}>
              Start with the scheduler foundations already available today, then expand into richer coordination,
              timeline scale, and AI-assisted scheduling as the product evolves.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap>
              <Button
                component={Link}
                href="/x/react-scheduler/"
                variant="contained"
                sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}
              >
                Try the Alpha
              </Button>
              <Button
                component={Link}
                href="/x/react-scheduler/getting-started/"
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 700, whiteSpace: 'nowrap' }}
              >
                View documentation
              </Button>
            </Stack>
          </Stack>
        </SectionReveal>
      </Section>
      <Divider />
      {/* Alpha status strip */}
      <Section cozy>
        <SectionReveal>
          <SectionHeadline
            alwaysCenter
            overline="Alpha status"
            title={
              <Typography variant="h2">
                What&apos;s in Alpha vs. <GradientText>what&apos;s next</GradientText>
              </Typography>
            }
          />
        </SectionReveal>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionReveal>
              <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Available in Alpha
                </Typography>
                {schedulerAlphaInfo.whatsInAlpha.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <CheckCircleOutlineRounded sx={{ color: 'success.main', fontSize: 18 }} />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Paper>
            </SectionReveal>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionReveal delay={100}>
              <Paper variant="outlined" sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Coming next
                </Typography>
                {schedulerAlphaInfo.whatsNext.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <ScheduleRounded sx={{ color: 'warning.main', fontSize: 18 }} />
                    <Typography variant="body2">{item}</Typography>
                  </Box>
                ))}
              </Paper>
            </SectionReveal>
          </Grid>
        </Grid>
        <SectionReveal delay={200}>
          <Alert severity="warning" sx={{ mt: 3 }}>
            {schedulerAlphaInfo.alphaWarning}
          </Alert>
        </SectionReveal>
      </Section>
      <Divider />
      <UseCasesBlock
        headline={
          <Typography variant="h2">
            Built for <GradientText>real scheduling needs</GradientText>
          </Typography>
        }
        useCases={schedulerUseCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <CalendarMonthRounded />,
        }))}
      />
      <Divider />
      <FinalCTABlock
        primaryCta={{ label: 'Try the Scheduler Alpha', href: '/x/react-scheduler/' }}
        secondaryCta={{ label: 'View documentation', href: '/x/react-scheduler/getting-started/' }}
      />
    </React.Fragment>
  );
}
