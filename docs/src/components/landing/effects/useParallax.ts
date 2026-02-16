import * as React from 'react';

/**
 * Returns a CSS translateY value that shifts an element based on scroll position.
 * Creates a subtle parallax depth effect.
 *
 * @param speed - Multiplier for the parallax shift (default 0.15). Positive = slower scroll.
 */
export default function useParallax(speed = 0.15) {
  const [offset, setOffset] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return undefined;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const el = ref.current;
          if (el) {
            const rect = el.getBoundingClientRect();
            const viewH = window.innerHeight;
            // Normalized position: 0 when element center is at viewport center
            const center = rect.top + rect.height / 2;
            const normalized = (center - viewH / 2) / viewH;
            setOffset(normalized * speed * 100);
          }
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { ref, transform: `translateY(${offset}px)` };
}
