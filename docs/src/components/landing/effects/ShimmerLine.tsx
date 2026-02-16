import * as React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/material/styles';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

interface ShimmerLineProps {
  width?: string | number;
  height?: number;
  delay?: number;
}

export default function ShimmerLine({ width = '100%', height = 2, delay = 0 }: ShimmerLineProps) {
  return (
    <Box
      aria-hidden
      sx={(theme) => ({
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius: 1,
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(90deg, transparent 0%, ${
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
          } 50%, transparent 100%)`,
          animation: `${shimmer} 2.5s ease-in-out infinite`,
          animationDelay: `${delay}ms`,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '&::after': { animation: 'none' },
        },
      })}
    />
  );
}
