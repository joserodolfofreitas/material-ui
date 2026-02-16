import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { InfoCard } from '@mui/docs/InfoCard';
import VerifiedRounded from '@mui/icons-material/VerifiedRounded';
import InvertColorsRounded from '@mui/icons-material/InvertColorsRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import ArticleRounded from '@mui/icons-material/ArticleRounded';
import UpdateRounded from '@mui/icons-material/UpdateRounded';

const features = [
  {
    icon: <VerifiedRounded fontSize="small" color="primary" />,
    title: 'Reliability at scale',
    description:
      'Battle-tested in production by thousands of teams. Rigorous testing, semantic versioning, and stable upgrade paths you can count on.',
  },
  {
    icon: <InvertColorsRounded fontSize="small" color="primary" />,
    title: 'Deep theming and customization',
    description:
      'Global design tokens, component-level overrides, slots, and composition APIs - full control without forking.',
  },
  {
    icon: <AccessibilityNewRounded fontSize="small" color="primary" />,
    title: 'Accessibility-first',
    description:
      'WAI-ARIA patterns, keyboard navigation, focus management, and screen reader support built into every component.',
  },
  {
    icon: <CodeRounded fontSize="small" color="primary" />,
    title: 'TypeScript and composability',
    description:
      'First-class TypeScript support with strict types, generics, and composable APIs that scale with your codebase.',
  },
  {
    icon: <ArticleRounded fontSize="small" color="primary" />,
    title: 'Documentation and DX',
    description:
      'Over 2,000 contributors maintain docs with examples, API references, and guides. Get tailored examples for your use case with MUI Chat.',
  },
  {
    icon: <UpdateRounded fontSize="small" color="primary" />,
    title: 'Sustainability',
    description:
      'Maintained long-term by a dedicated team. Stable release cadence, clear deprecation policies, and a commitment to backward compatibility.',
  },
];

export default function FeatureGridBlock() {
  return (
    <Section>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Built for modern teams"
          title={
            <Typography variant="h2">
              The foundation <GradientText>serious products</GradientText> deserve
            </Typography>
          }
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <Grid key={feature.title} size={{ xs: 12, sm: 6, lg: 4 }}>
            <SectionReveal delay={index * 60}>
              <InfoCard
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
