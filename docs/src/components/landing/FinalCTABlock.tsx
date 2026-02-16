import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { alpha, keyframes } from '@mui/material/styles';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import Section from 'docs/src/layouts/Section';
import SectionReveal from 'docs/src/components/landing/SectionReveal';
import GradientText from 'docs/src/components/typography/GradientText';
import { Link } from '@mui/docs/Link';

const glowPulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.05); }
`;

interface FinalCTABlockProps {
  headline?: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
}

export default function FinalCTABlock({
  headline,
  description = 'Join thousands of product teams building with MUI.',
  primaryCta = { label: 'Explore our docs', href: '/material-ui/getting-started/' },
  secondaryCta = { label: 'Explore advanced components', href: '/x/' },
  tertiaryCta = { label: 'Start building', href: 'https://chat.mui.com' },
}: FinalCTABlockProps) {
  return (
    <Section cozy>
      <SectionReveal>
        <Box
          sx={[
            (theme) => ({
              textAlign: 'center',
              py: { xs: 6, md: 10 },
              px: { xs: 3, md: 6 },
              borderRadius: 3,
              position: 'relative',
              overflow: 'hidden',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${alpha(
                  theme.palette.primary[300],
                  0.15,
                )} 0%, transparent 60%)`,
                animation: `${glowPulse} 4s ease-in-out infinite`,
                pointerEvents: 'none',
              },
              '@media (prefers-reduced-motion: reduce)': {
                '&::after': { animation: 'none' },
              },
              background: `linear-gradient(135deg, ${alpha(
                theme.palette.primary[50],
                0.5,
              )} 0%, ${alpha(theme.palette.primary[100], 0.3)} 100%)`,
              border: '1px solid',
              borderColor: (theme.vars || theme).palette.primary[100],
              ...theme.applyDarkStyles({
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.primary[900],
                  0.3,
                )} 0%, ${alpha(theme.palette.primaryDark[800], 0.5)} 100%)`,
                borderColor: alpha(theme.palette.primary[800], 0.3),
              }),
            }),
          ]}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            {headline || (
              <React.Fragment>
                Ready to <GradientText>build something great</GradientText>?
              </React.Fragment>
            )}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 480,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            {description}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            useFlexGap
            sx={{ justifyContent: 'center' }}
          >
            <Button
              component={Link}
              noLinkStyle
              href={primaryCta.href}
              variant="contained"
              size="large"
              endIcon={<KeyboardArrowRightRounded />}
            >
              {primaryCta.label}
            </Button>
            <Button
              component={Link}
              noLinkStyle
              href={secondaryCta.href}
              variant="outlined"
              color="secondary"
              size="large"
            >
              {secondaryCta.label}
            </Button>
            <Button
              component={Link}
              noLinkStyle
              href={tertiaryCta.href}
              variant="outlined"
              color="primary"
              size="large"
              startIcon={<AutoAwesomeRounded />}
            >
              {tertiaryCta.label}
            </Button>
          </Stack>
        </Box>
      </SectionReveal>
    </Section>
  );
}
