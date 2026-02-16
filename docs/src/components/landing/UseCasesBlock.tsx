import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';

export interface UseCase {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UseCasesBlockProps {
  overline?: string;
  headline: React.ReactNode;
  useCases: UseCase[];
}

export default function UseCasesBlock({
  overline = 'Use cases',
  headline,
  useCases,
}: UseCasesBlockProps) {
  return (
    <Section bg="comfort" cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline={overline}
          title={
            typeof headline === 'string' ? (
              <Typography variant="h2">{headline}</Typography>
            ) : (
              (headline as React.ReactElement<React.HTMLAttributes<HTMLElement>>)
            )
          }
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {useCases.map((useCase, index) => (
          <Grid key={useCase.title} size={{ xs: 12, md: 4 }}>
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
                      borderColor: (theme.vars || theme).palette.primary[200],
                      boxShadow: `0 4px 20px ${alpha(theme.palette.primary[500], 0.12)}`,
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
                      color: (theme.vars || theme).palette.primary.main,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      ...theme.applyDarkStyles({
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                      }),
                    }),
                  ]}
                >
                  {useCase.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {useCase.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {useCase.description}
                </Typography>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
