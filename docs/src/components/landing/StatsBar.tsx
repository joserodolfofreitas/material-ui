import * as React from 'react';
import Grid from '@mui/material/Grid';
import Section from 'docs/src/layouts/Section';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import AnimatedCounter from 'docs/src/components/landing/effects/AnimatedCounter';

const stats = [
  { end: 4500000, suffix: '+', label: 'Weekly npm downloads', display: '4.5M' },
  { end: 95000, suffix: '+', label: 'GitHub stars' },
  { end: 2800, suffix: '+', label: 'Open-source contributors' },
];

export default function StatsBar() {
  return (
    <Section>
      <SectionReveal>
        <Grid container spacing={4} sx={{ py: { xs: 2, md: 4 } }}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 6, md: 4 }}>
              <SectionReveal delay={index * 100}>
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </SectionReveal>
            </Grid>
          ))}
        </Grid>
      </SectionReveal>
    </Section>
  );
}
