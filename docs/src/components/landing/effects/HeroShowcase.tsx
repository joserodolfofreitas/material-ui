import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alpha, keyframes } from '@mui/material/styles';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

/**
 * A visual showcase for the hero section that simulates a live MUI component
 * preview with a code snippet, animated typing effect, and floating UI elements.
 */
export default function HeroShowcase() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 560,
        mx: 'auto',
        mt: { xs: 4, md: 0 },
        '@media (prefers-reduced-motion: reduce)': {
          '& *': { animation: 'none !important' },
        },
      }}
    >
      {/* Main preview card */}
      <Paper
        elevation={0}
        sx={[
          (theme) => ({
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            animation: `${fadeInUp} 0.8s ease-out`,
            background:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.background.paper, 0.6)
                : alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(20px)',
          }),
        ]}
      >
        {/* Window chrome */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            px: 2,
            py: 1.5,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ff5f57' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#febc2e' }} />
          <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#28c840' }} />
          <Typography
            variant="caption"
            sx={{ ml: 1.5, color: 'text.secondary', fontFamily: 'monospace', fontSize: '0.7rem' }}
          >
            App.tsx
          </Typography>
        </Box>

        {/* Code preview */}
        <Box sx={{ p: 2.5, fontFamily: 'monospace', fontSize: '0.8rem', lineHeight: 1.8 }}>
          <CodeLine delay={0}>
            <Kw>import</Kw> {'{'} DataGrid {'}'} <Kw>from</Kw>{' '}
            <Str>&apos;@mui/x-data-grid&apos;</Str>;
          </CodeLine>
          <CodeLine delay={100}>
            <Kw>import</Kw> {'{'} BarChart {'}'} <Kw>from</Kw>{' '}
            <Str>&apos;@mui/x-charts&apos;</Str>;
          </CodeLine>
          <CodeLine delay={200} />
          <CodeLine delay={300}>
            <Kw>export default function</Kw> <Fn>Dashboard</Fn>() {'{'}
          </CodeLine>
          <CodeLine delay={400} indent={1}>
            <Kw>return</Kw> (
          </CodeLine>
          <CodeLine delay={500} indent={2}>
            &lt;<Fn>Stack</Fn> <Prop>spacing</Prop>={'{'}2{'}'}&gt;
          </CodeLine>
          <CodeLine delay={600} indent={3}>
            &lt;<Fn>BarChart</Fn> <Prop>series</Prop>={'{'}data{'}'} <Prop>height</Prop>
            ={'{'}300{'}'} /&gt;
          </CodeLine>
          <CodeLine delay={700} indent={3}>
            &lt;<Fn>DataGrid</Fn> <Prop>rows</Prop>={'{'}rows{'}'} <Prop>columns</Prop>
            ={'{'}cols{'}'} /&gt;
          </CodeLine>
          <CodeLine delay={800} indent={2}>
            &lt;/<Fn>Stack</Fn>&gt;
          </CodeLine>
          <CodeLine delay={900} indent={1}>
            );
          </CodeLine>
          <CodeLine delay={1000}>{'}'}</CodeLine>
        </Box>
      </Paper>

      {/* Floating badge - npm downloads */}
      <FloatingBadge
        top={{ xs: -12, md: -16 }}
        right={{ xs: -8, md: -40 }}
        delay={600}
      >
        <Chip
          label="4.5M+ weekly downloads"
          size="small"
          color="primary"
          variant="filled"
          sx={{ fontWeight: 700, fontSize: '0.75rem' }}
        />
      </FloatingBadge>

      {/* Floating badge - GitHub stars */}
      <FloatingBadge
        bottom={{ xs: 40, md: 60 }}
        left={{ xs: -8, md: -48 }}
        delay={900}
      >
        <Chip
          label="95k+ GitHub stars"
          size="small"
          variant="outlined"
          sx={{ fontWeight: 700, fontSize: '0.75rem', bgcolor: 'background.paper' }}
        />
      </FloatingBadge>

      {/* Cursor blink */}
      <Box
        sx={(theme) => ({
          position: 'absolute',
          bottom: 56,
          right: 80,
          width: 2,
          height: 16,
          bgcolor: theme.palette.primary.main,
          animation: `${pulse} 1s ease-in-out infinite`,
          borderRadius: 1,
        })}
      />
    </Box>
  );
}

// ---- Helpers ----

function CodeLine({
  children,
  delay = 0,
  indent = 0,
}: {
  children?: React.ReactNode;
  delay?: number;
  indent?: number;
}) {
  return (
    <Box
      sx={{
        pl: indent * 2.5,
        opacity: 0,
        animation: `${fadeInUp} 0.5s ease-out forwards`,
        animationDelay: `${delay}ms`,
        minHeight: children ? 'auto' : '1.2em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Box>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" sx={{ color: 'secondary.main', fontWeight: 600 }}>
      {children}
    </Box>
  );
}

function Fn({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" sx={{ color: 'warning.main' }}>
      {children}
    </Box>
  );
}

function Str({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" sx={{ color: 'success.main' }}>
      {children}
    </Box>
  );
}

function Prop({ children }: { children: React.ReactNode }) {
  return (
    <Box component="span" sx={{ color: 'info.main' }}>
      {children}
    </Box>
  );
}

function FloatingBadge({
  children,
  delay = 0,
  ...pos
}: {
  children: React.ReactNode;
  delay?: number;
  top?: object | number;
  bottom?: object | number;
  left?: object | number;
  right?: object | number;
}) {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 2,
        opacity: 0,
        animation: `${fadeInUp} 0.6s ease-out forwards`,
        animationDelay: `${delay}ms`,
        ...pos,
      }}
    >
      {children}
    </Box>
  );
}
