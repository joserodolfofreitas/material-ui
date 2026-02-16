import * as React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/material/styles';

const drift1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(40px, 30px) scale(1.05); }
`;

const drift2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-40px, 30px) scale(1.05); }
  50% { transform: translate(30px, -40px) scale(1.1); }
  75% { transform: translate(-20px, -20px) scale(0.95); }
`;

const drift3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1.05); }
  33% { transform: translate(50px, 20px) scale(0.95); }
  66% { transform: translate(-30px, -30px) scale(1.1); }
`;

interface GradientMeshProps {
  sx?: object;
}

export default function GradientMesh({ sx }: GradientMeshProps) {
  return (
    <Box
      aria-hidden
      sx={[
        {
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
          '@media (prefers-reduced-motion: reduce)': {
            '& > div': {
              animation: 'none !important',
            },
          },
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {/* Primary orb */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '-15%',
          left: '10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            theme.palette.mode === 'dark'
              ? 'rgba(25, 118, 210, 0.15)'
              : 'rgba(25, 118, 210, 0.08)'
          } 0%, transparent 70%)`,
          filter: 'blur(60px)',
          animation: `${drift1} 20s ease-in-out infinite`,
        })}
      />
      {/* Secondary orb */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            theme.palette.mode === 'dark'
              ? 'rgba(156, 39, 176, 0.12)'
              : 'rgba(156, 39, 176, 0.06)'
          } 0%, transparent 70%)`,
          filter: 'blur(60px)',
          animation: `${drift2} 25s ease-in-out infinite`,
        })}
      />
      {/* Accent orb */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          bottom: '-10%',
          left: '30%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${
            theme.palette.mode === 'dark'
              ? 'rgba(0, 200, 83, 0.1)'
              : 'rgba(0, 200, 83, 0.05)'
          } 0%, transparent 70%)`,
          filter: 'blur(60px)',
          animation: `${drift3} 18s ease-in-out infinite`,
        })}
      />
    </Box>
  );
}
