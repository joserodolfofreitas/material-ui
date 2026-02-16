import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha, keyframes } from '@mui/material/styles';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import GradientMesh from 'docs/src/components/landing/effects/GradientMesh';
import { type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import useParallax from 'docs/src/components/landing/effects/useParallax';
import { Link } from '@mui/docs/Link';

const textShimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

interface HeroCta {
  label: string;
  href: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  startIcon?: React.ReactNode;
  badge?: ProductStatus;
}

interface HeroBlockProps {
  overline?: string;
  headline: React.ReactNode;
  gradientText?: string;
  description: string;
  ctas: HeroCta[];
  visual?: React.ReactNode;
  badge?: ProductStatus;
}

export default function HeroBlock({
  overline,
  headline,
  gradientText,
  description,
  ctas,
  visual,
  badge,
}: HeroBlockProps) {
  const parallax = useParallax(0.08);
  return (
    <Box
      sx={[
        (theme) => ({
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          minHeight: { md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200%',
            height: '100%',
            background: `radial-gradient(ellipse 50% 80% at 50% 0%, ${alpha(
              theme.palette.primary[50],
              0.5,
            )} 0%, transparent 70%)`,
            pointerEvents: 'none',
            ...theme.applyDarkStyles({
              background: `radial-gradient(ellipse 50% 80% at 50% 0%, ${alpha(
                theme.palette.primary[900],
                0.3,
              )} 0%, transparent 70%)`,
            }),
          },
        }),
      ]}
    >
      <GradientMesh />
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Left: hero text (z-index above the demo) */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            flex: { md: '0 0 42%' },
            maxWidth: { md: '42%' },
            textAlign: { xs: 'center', md: 'left' },
            pr: { md: 2 },
          }}
        >
          {badge && (
            <Box sx={{ mb: 2, display: 'inline-flex' }}>
              <StatusBadge status={badge} size="medium" />
            </Box>
          )}
          {overline && (
            <Typography
              variant="body2"
              sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}
            >
              {overline}
            </Typography>
          )}
          <Typography variant="h1" sx={{ mb: 2 }}>
            {headline}
            {gradientText && (
              <React.Fragment>
                {' '}
                <GradientText
                  sx={{
                    backgroundSize: '200% auto',
                    animation: `${textShimmer} 4s linear infinite`,
                    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
                  }}
                >
                  {gradientText}
                </GradientText>
              </React.Fragment>
            )}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 500,
              mx: { xs: 'auto', md: 0 },
              fontSize: { xs: '1rem', md: '1.125rem' },
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            useFlexGap
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                component={Link}
                noLinkStyle
                href={cta.href}
                variant={cta.variant || 'contained'}
                color={cta.color || 'primary'}
                size="large"
                startIcon={cta.startIcon}
                endIcon={
                  cta.variant !== 'text' ? <KeyboardArrowRightRounded /> : undefined
                }
              >
                {cta.label}
                {cta.badge && (
                  <Box component="span" sx={{ ml: 1 }}>
                    <StatusBadge status={cta.badge} />
                  </Box>
                )}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Right: visual demo — bleeds left into the text column and right past the container */}
        {visual && (
          <Box
            ref={parallax.ref}
            sx={{
              position: 'relative',
              zIndex: 2,
              flex: { md: '0 0 75%' },
              maxWidth: { xs: '100%', md: '75%' },
              ml: { md: '-12%' },
              mr: { md: -4 },
              transform: parallax.transform,
              willChange: 'transform',
              transition: 'transform 0.1s linear',
              '@media (prefers-reduced-motion: reduce)': {
                transform: 'none',
                transition: 'none',
              },
            }}
          >
            {/* Glow on the left edge: keeps text readable over the demo */}
            <Box
              aria-hidden
              sx={[
                (theme) => ({
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '-50vh',
                  left: '-50vw',
                  width: '68vw',
                  height: 'calc(100% + 50vh)',
                  background: `linear-gradient(to right, ${
                    theme.palette.mode === 'dark'
                      ? theme.palette.primaryDark[900]
                      : theme.palette.common.white
                  } 0%, ${
                    theme.palette.mode === 'dark'
                      ? theme.palette.primaryDark[900]
                      : theme.palette.common.white
                  } 85%, ${
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.primaryDark[900], 0)
                      : alpha(theme.palette.common.white, 0)
                  } 100%)`,
                  pointerEvents: 'none',
                  zIndex: 4,
                }),
              ]}
            />
            {visual}
          </Box>
        )}
      </Container>
    </Box>
  );
}
