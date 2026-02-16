import * as React from 'react';
import Box from '@mui/material/Box';
import { keyframes } from '@mui/material/styles';

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
  25% { transform: translate(60px, -80px) rotate(90deg); opacity: 0.6; }
  50% { transform: translate(-40px, -120px) rotate(180deg); opacity: 0.4; }
  75% { transform: translate(20px, -60px) rotate(270deg); opacity: 0.5; }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
  33% { transform: translate(-50px, -100px) rotate(120deg); opacity: 0.5; }
  66% { transform: translate(40px, -70px) rotate(240deg); opacity: 0.3; }
`;

const float3 = keyframes`
  0%, 100% { transform: translate(0, 0); opacity: 0.4; }
  50% { transform: translate(30px, -90px); opacity: 0.7; }
`;

const particles = [
  { size: 6, left: '10%', bottom: '20%', animation: float1, duration: 12 },
  { size: 4, left: '25%', bottom: '10%', animation: float2, duration: 15 },
  { size: 8, left: '45%', bottom: '30%', animation: float3, duration: 10 },
  { size: 5, left: '65%', bottom: '15%', animation: float1, duration: 14 },
  { size: 3, left: '80%', bottom: '25%', animation: float2, duration: 11 },
  { size: 7, left: '90%', bottom: '5%', animation: float3, duration: 13 },
];

export default function FloatingParticles() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        '@media (prefers-reduced-motion: reduce)': {
          display: 'none',
        },
      }}
    >
      {particles.map((p, i) => (
        <Box
          key={i}
          sx={(theme) => ({
            position: 'absolute',
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            bgcolor:
              theme.palette.mode === 'dark'
                ? 'rgba(144, 202, 249, 0.4)'
                : 'rgba(25, 118, 210, 0.25)',
            animation: `${p.animation} ${p.duration}s ease-in-out infinite`,
          })}
        />
      ))}
    </Box>
  );
}
