import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import GradientText from 'docs/src/components/typography/GradientText';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import { type ProductStatus } from 'docs/src/components/landing/marketingTheme';
import { Link } from '@mui/docs/Link';

interface ComponentHeroCta {
  label: string;
  href: string;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
}

interface ComponentHeroBlockProps {
  title: string;
  gradientText?: string;
  description: string;
  status: ProductStatus;
  ctas: ComponentHeroCta[];
}

export default function ComponentHeroBlock({
  title,
  gradientText,
  description,
  status,
  ctas,
}: ComponentHeroBlockProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 10, md: 14 },
          pb: { xs: 6, md: 10 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200%',
            height: '100%',
            background: `radial-gradient(ellipse 50% 70% at 50% 0%, ${alpha(
              theme.palette.primary[50],
              0.4,
            )} 0%, transparent 70%)`,
            pointerEvents: 'none',
            ...theme.applyDarkStyles({
              background: `radial-gradient(ellipse 50% 70% at 50% 0%, ${alpha(
                theme.palette.primary[900],
                0.25,
              )} 0%, transparent 70%)`,
            }),
          },
        }),
      ]}
    >
      <Container
        sx={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: 720,
        }}
      >
        <Box sx={{ mb: 2, display: 'inline-flex' }}>
          <StatusBadge status={status} size="medium" />
        </Box>
        <Typography variant="h1" sx={{ mb: 2 }}>
          {title}
          {gradientText && (
            <React.Fragment>
              {' '}
              <GradientText>{gradientText}</GradientText>
            </React.Fragment>
          )}
        </Typography>
        <Typography
          sx={{
            color: 'text.secondary',
            mb: 4,
            maxWidth: 560,
            mx: 'auto',
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
          sx={{ justifyContent: 'center' }}
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
              endIcon={
                cta.variant !== 'text' ? <KeyboardArrowRightRounded /> : undefined
              }
            >
              {cta.label}
            </Button>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
