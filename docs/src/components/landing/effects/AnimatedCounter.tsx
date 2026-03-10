import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  React.useEffect(() => {
    if (!inView) return undefined;
    if (prefersReducedMotion) {
      setCount(end);
      return undefined;
    }

    const startTime = performance.now();
    let raf: number;

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * end));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration, prefersReducedMotion]);

  return (
    <Box ref={ref} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          background: (theme) =>
            `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          lineHeight: 1.1,
        }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mt: 0.5,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
