import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { alpha, keyframes } from '@mui/material/styles';
import ShimmerLine from 'docs/src/components/landing/effects/ShimmerLine';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const barGrow = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;

/**
 * A decorative card that simulates a Data Grid + Chart preview.
 * Used to fill visual space and convey the product's capabilities.
 */
export default function ComponentPreviewCard() {
  return (
    <Paper
      elevation={0}
      sx={[
        (theme) => ({
          overflow: 'hidden',
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.5)
              : theme.palette.background.paper,
          animation: `${fadeIn} 0.6s ease-out`,
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
            '& *': { animation: 'none !important' },
          },
        }),
      ]}
    >
      {/* Mini chart area */}
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1, display: 'block' }}>
          Revenue Overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5, height: 64 }}>
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <Box
              key={i}
              sx={(theme) => ({
                flex: 1,
                height: `${h}%`,
                borderRadius: '2px 2px 0 0',
                bgcolor: alpha(theme.palette.primary.main, 0.15 + (h / 100) * 0.6),
                transformOrigin: 'bottom',
                animation: `${barGrow} 0.8s ease-out forwards`,
                animationDelay: `${i * 60}ms`,
              })}
            />
          ))}
        </Box>
      </Box>

      {/* Mini data grid area */}
      <Box sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1.5, display: 'block' }}>
          Recent Transactions
        </Typography>
        {/* Header row */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 0.6fr 0.5fr',
            gap: 1,
            mb: 1,
          }}
        >
          {['Customer', 'Amount', 'Status', 'Date'].map((col) => (
            <Typography
              key={col}
              variant="caption"
              sx={{ fontWeight: 700, color: 'text.secondary', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: 0.5 }}
            >
              {col}
            </Typography>
          ))}
        </Box>
        {/* Data rows */}
        {[0, 1, 2, 3].map((row) => (
          <Box
            key={row}
            sx={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr 0.6fr 0.5fr',
              gap: 1,
              py: 0.75,
              borderTop: '1px solid',
              borderColor: 'divider',
              opacity: 0,
              animation: `${fadeIn} 0.4s ease-out forwards`,
              animationDelay: `${800 + row * 100}ms`,
            }}
          >
            <ShimmerLine width="80%" height={8} delay={row * 150} />
            <ShimmerLine width="60%" height={8} delay={row * 150 + 50} />
            <Box
              sx={(theme) => ({
                width: 48,
                height: 8,
                borderRadius: 4,
                bgcolor: alpha(
                  row % 2 === 0 ? theme.palette.success.main : theme.palette.warning.main,
                  0.2,
                ),
              })}
            />
            <ShimmerLine width="70%" height={8} delay={row * 150 + 100} />
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
