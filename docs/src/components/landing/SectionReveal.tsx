import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';
import { motionTransition } from 'docs/src/components/landing/marketingTheme';

interface SectionRevealProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SectionReveal({ children, delay = 0, sx, ...other }: SectionRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '40px' });

  return (
    <Box
      ref={ref}
      {...other}
      sx={[
        {
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          transition: motionTransition(['opacity', 'transform'], 'slow'),
          transitionDelay: `${delay}ms`,
          '@media (prefers-reduced-motion: reduce)': {
            opacity: 1,
            transform: 'none',
            transition: 'none',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
