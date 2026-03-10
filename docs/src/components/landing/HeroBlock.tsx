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
import {
  motionTransition,
  premiumTokens,
  type ProductStatus,
} from 'docs/src/components/landing/marketingTheme';
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
  headlineSuffix?: React.ReactNode;
  description: string;
  proofLine?: React.ReactNode;
  ctas: HeroCta[];
  visual?: React.ReactNode;
  badge?: ProductStatus;
}

export default function HeroBlock({
  overline,
  headline,
  gradientText,
  headlineSuffix,
  description,
  proofLine,
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
          pt: { xs: 10, md: 11.5 },
          pb: { xs: 8, md: 9.5 },
          minHeight: { md: 'calc(100vh - var(--MuiDocs-header-height) - 72px)' },
          display: 'flex',
          alignItems: { xs: 'center', md: 'flex-start' },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: { xs: '22%', md: '16%' },
            right: { xs: '-22%', md: '6%' },
            width: { xs: 280, md: 620 },
            height: { xs: 280, md: 620 },
            background: premiumTokens.hero.visualGlow(theme),
            opacity: theme.palette.mode === 'dark' ? 0.95 : 1,
            filter: 'blur(6px)',
            pointerEvents: 'none',
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
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 5, md: 3 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 3,
            flex: { md: '0 0 42%' },
            maxWidth: { md: '42%' },
            textAlign: { xs: 'center', md: 'left' },
            pr: { md: 1.5 },
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
              sx={(theme) => ({
                display: 'inline-flex',
                alignItems: 'center',
                px: 1,
                py: 0.5,
                borderRadius: premiumTokens.radius.pill,
                border: '1px solid',
                borderColor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[500], 0.18)
                    : alpha(theme.palette.primary[200], 0.65),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[500], 0.05)
                    : alpha(theme.palette.common.white, 0.42),
                backdropFilter: 'blur(12px)',
                fontWeight: 600,
                letterSpacing: 0.25,
                color:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[100], 0.92)
                    : alpha(theme.palette.primary[900], 0.76),
                mb: 2,
              })}
            >
              {overline}
            </Typography>
          )}
          <Typography
            component="h1"
            variant="h1"
            sx={{
              mb: 2,
              maxWidth: premiumTokens.hero.headlineMaxWidth,
              mx: { xs: 'auto', md: 0 },
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              fontSize: { xs: 'clamp(2.75rem, 10vw, 3.75rem)', md: '3.75rem' },
            }}
          >
            {headline}
            {gradientText && (
              <React.Fragment>
                {' '}
                <GradientText
                  sx={{
                    backgroundSize: '200% auto',
                    display: 'inline-block',
                    animation: `${textShimmer} 4s linear infinite`,
                    '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
                  }}
                >
                  {gradientText}
                </GradientText>
              </React.Fragment>
            )}
            {headlineSuffix && (
              <React.Fragment>
                {' '}
                {headlineSuffix}
              </React.Fragment>
            )}
          </Typography>
          <Typography
            sx={{
              color: 'text.secondary',
              mb: 4.5,
              maxWidth: premiumTokens.hero.descriptionMaxWidth,
              mx: { xs: 'auto', md: 0 },
              fontSize: { xs: '1.0625rem', md: '1.1875rem' },
              lineHeight: 1.65,
            }}
          >
            {description}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            useFlexGap
            sx={{
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: { xs: 'stretch', sm: 'center' },
            }}
          >
            {ctas.map((cta, index) => (
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
                  cta.variant === 'contained' || cta.variant === 'outlined' ? (
                    <KeyboardArrowRightRounded />
                  ) : undefined
                }
                sx={[
                  (theme) => ({
                    minHeight: 48,
                    px: 2.25,
                    borderRadius: premiumTokens.radius.pill,
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    transition: motionTransition(
                      ['transform', 'box-shadow', 'background-color', 'border-color', 'color'],
                      'base',
                    ),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                    },
                    ...(index === 0 && {
                      boxShadow:
                        theme.palette.mode === 'dark'
                          ? `0 14px 30px ${alpha(theme.palette.primary[900], 0.5)}`
                          : `0 14px 30px ${alpha(theme.palette.primary[500], 0.22)}`,
                    }),
                    ...(cta.variant === 'outlined' && {
                      borderWidth: 1,
                      borderColor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.primary[300], 0.2)
                          : alpha(theme.palette.primary[200], 0.95),
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.common.white, 0.02)
                          : alpha(theme.palette.common.white, 0.72),
                    }),
                  }),
                ]}
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
          {proofLine && (
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.25}
              useFlexGap
              sx={{
                mt: 3.25,
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: { xs: 'center', md: 'flex-start' },
                color: 'text.secondary',
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 700, color: 'text.primary', whiteSpace: 'nowrap' }}
              >
                Trusted by thousands of teams.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: 420,
                  textWrap: 'balance',
                }}
              >
                {proofLine}
              </Typography>
            </Stack>
          )}
        </Box>

        {visual && (
          <Box
            ref={parallax.ref}
            sx={{
              position: 'relative',
              zIndex: 2,
              flex: { md: '0 0 58%' },
              maxWidth: { xs: '100%', md: '58%' },
              width: '100%',
              ml: { md: 0 },
              transform: parallax.transform,
              willChange: 'transform',
              transition: motionTransition('transform', 'fast'),
              '@media (prefers-reduced-motion: reduce)': {
                transform: 'none',
                transition: 'none',
              },
            }}
          >
            <Box
              aria-hidden
              sx={[
                (theme) => ({
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  top: '-15%',
                  right: '-6%',
                  width: '85%',
                  height: '80%',
                  background: premiumTokens.hero.visualGlow(theme),
                  filter: 'blur(50px)',
                  opacity: 0.8,
                  pointerEvents: 'none',
                  zIndex: 0,
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
