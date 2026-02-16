import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import SpeedRounded from '@mui/icons-material/SpeedRounded';
import TuneRounded from '@mui/icons-material/TuneRounded';
import LayersRounded from '@mui/icons-material/LayersRounded';
import Section from 'docs/src/layouts/Section';
import SectionHeadline from 'docs/src/components/typography/SectionHeadline';
import GradientText from 'docs/src/components/typography/GradientText';
import SectionReveal from 'docs/src/components/landing/SectionReveal';

const levels = [
  {
    icon: <SpeedRounded />,
    title: 'High-level for speed',
    description:
      'Drop in fully styled components with sensible defaults. Ship a polished UI in minutes.',
    snippet: `<DataGrid
  rows={rows}
  columns={columns}
  pageSizeOptions={[10, 25]}
/>`,
  },
  {
    icon: <TuneRounded />,
    title: 'Customization surfaces for control',
    description:
      'Slots, composition, sx prop, and theme overrides give you precise control without forking.',
    snippet: `<DataGrid
  rows={rows}
  columns={columns}
  slots={{
    toolbar: CustomToolbar,
    footer: CustomFooter,
  }}
/>`,
  },
  {
    icon: <LayersRounded />,
    title: 'Headless primitives for full ownership',
    description:
      'Use unstyled hooks and Base UI primitives when you need complete rendering control.',
    snippet: `const { getRootProps, getInputProps }
  = useAutocomplete({
    options,
    getOptionLabel,
  });`,
  },
];

export default function AbstractionLevelsBlock() {
  return (
    <Section bg="comfort" cozy>
      <SectionReveal>
        <SectionHeadline
          alwaysCenter
          overline="Three levels of abstraction"
          title={
            <Typography variant="h2">
              Use as much or as little as you need - 
              <GradientText>always in control</GradientText>
            </Typography>
          }
          description="Start fast with high-level APIs, customize with slots and composition, or go headless for full ownership."
        />
      </SectionReveal>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {levels.map((level, index) => (
          <Grid key={level.title} size={{ xs: 12, md: 4 }}>
            <SectionReveal delay={index * 80}>
              <Paper
                variant="outlined"
                sx={[
                  (theme) => ({
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
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
                  {level.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {level.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {level.description}
                </Typography>
                <Box
                  component="pre"
                  sx={[
                    (theme) => ({
                      mt: 'auto',
                      p: 2,
                      borderRadius: 1,
                      fontSize: '0.8125rem',
                      lineHeight: 1.6,
                      overflow: 'auto',
                      bgcolor: 'grey.50',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      fontFamily: theme.typography.fontFamilyCode,
                      ...theme.applyDarkStyles({
                        bgcolor: 'primaryDark.800',
                        borderColor: 'primaryDark.700',
                      }),
                    }),
                  ]}
                >
                  <code>{level.snippet}</code>
                </Box>
              </Paper>
            </SectionReveal>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
