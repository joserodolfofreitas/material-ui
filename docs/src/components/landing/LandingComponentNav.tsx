import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { Link } from '@mui/docs/Link';
import StatusBadge from 'docs/src/components/landing/StatusBadge';
import {
  componentLandingNavItems,
  type ComponentLandingNavId,
} from 'docs/src/components/landing/configs/componentLandingNavConfig';
import {
  cardFocusVisibleSx,
  motionTransition,
  premiumTokens,
} from 'docs/src/components/landing/marketingTheme';

interface LandingComponentNavProps {
  activeId: ComponentLandingNavId;
}

export default function LandingComponentNav({ activeId }: LandingComponentNavProps) {
  return (
    <Box sx={{ pb: { xs: 2.5, md: 3.5 } }}>
      <Container>
        <Box
          sx={(theme) => ({
            p: 0.75,
            overflowX: 'auto',
            overflowY: 'hidden',
            borderRadius: premiumTokens.radius.xl,
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[300], 0.14)
                : alpha(theme.palette.primary[100], 0.9),
            bgcolor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.03)
                : alpha(theme.palette.common.white, 0.76),
            boxShadow: premiumTokens.nav.surfaceShadow(theme),
            backdropFilter: 'blur(16px)',
          })}
        >
          <Box
            sx={{
              display: 'inline-flex',
              minWidth: 'max-content',
              gap: 1,
            }}
          >
            {componentLandingNavItems.map((item) => {
              const selected = item.id === activeId;

              return (
                <Box
                  key={item.id}
                  component={Link}
                  href={item.href}
                  noLinkStyle
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    px: 1.25,
                    py: 1,
                    borderRadius: premiumTokens.radius.lg,
                    border: '1px solid',
                    borderColor: selected
                      ? theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[300], 0.2)
                        : alpha(theme.palette.primary[100], 0.95)
                      : 'transparent',
                    bgcolor: selected
                      ? theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary[500], 0.16)
                        : alpha(theme.palette.common.white, 0.96)
                      : 'transparent',
                    color: selected ? 'text.primary' : 'text.secondary',
                    textDecoration: 'none',
                    transition: motionTransition(['background-color', 'border-color', 'box-shadow', 'transform']),
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      borderColor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.primary[300], 0.14)
                          : alpha(theme.palette.primary[100], 0.9),
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.primary[500], 0.12)
                          : alpha(theme.palette.common.white, 0.92),
                    },
                    ...(selected && {
                      boxShadow:
                        theme.palette.mode === 'dark'
                          ? `0 8px 24px ${alpha(theme.palette.common.black, 0.22)}`
                          : `0 8px 24px ${alpha(theme.palette.primary[900], 0.08)}`,
                    }),
                    ...cardFocusVisibleSx(theme),
                  })}
                >
                  <Box
                    sx={(theme) => ({
                      width: 34,
                      height: 34,
                      display: 'grid',
                      placeItems: 'center',
                      borderRadius: '10px',
                      color: selected ? 'primary.main' : 'text.secondary',
                      bgcolor:
                        theme.palette.mode === 'dark'
                          ? selected
                            ? alpha(theme.palette.primary[500], 0.18)
                            : alpha(theme.palette.common.white, 0.06)
                          : selected
                            ? alpha(theme.palette.primary[50], 0.98)
                            : alpha(theme.palette.grey[50], 0.9),
                      flexShrink: 0,
                    })}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ minWidth: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
                      <Typography sx={{ fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                        {item.label}
                      </Typography>
                      {item.status ? <StatusBadge status={item.status} size="small" /> : null}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
