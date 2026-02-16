import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';

export const aiHero = {
  title: 'AI that understands your',
  gradientText: 'UI system',
  description:
    "Build interfaces where end users interact with AI through your components - ask questions to a data grid, get trend insights from charts, schedule with voice, and resolve conflicts intelligently.",
  status: 'alpha' as ProductStatus,
  ctas: [
    { label: 'Start building', href: '/material-ui/getting-started/', variant: 'contained' as const },
    { label: 'Browse templates', href: '/templates/', variant: 'outlined' as const, color: 'secondary' as const },
    { label: 'Explore docs', href: '/material-ui/getting-started/', variant: 'outlined' as const, color: 'primary' as const },
  ],
};

export const aiCapabilities = [
  {
    title: 'Ask your Data Grid',
    description:
      'Ask your Data Grid a question in plain language and get filtered, sorted, grouped results. AI-powered exploration built into the component.',
  },
  {
    title: 'Trend insights on charts',
    description:
      'Surface key insights, anomalies, and trends from your chart data automatically. Let users ask "what changed?" and get visual answers.',
  },
  {
    title: 'Voice-powered scheduling',
    description:
      "Schedule meetings with voice commands, resolve conflicts intelligently, and let AI suggest optimal times across participants' calendars.",
  },
  {
    title: 'Conversational UI with Chatbox',
    description:
      'Embed AI assistants directly in your app with streaming responses, context-aware suggestions, and seamless integration with your data layer.',
  },
];

export const aiGrounding = {
  title: 'AI built into every component',
  description:
    "Every MUI X component is designed to be AI-ready. The same APIs you use for manual interaction work seamlessly with AI - so you can add intelligence to existing UIs without rewriting anything.",
  points: [
    'Data Grid: natural language queries, smart filtering, AI-assisted data entry',
    'Charts: automated trend detection, anomaly highlighting, narrative summaries',
    'Scheduler: voice scheduling, conflict resolution, smart availability',
    'Chatbox: streaming AI responses, tool use, context-aware suggestions',
    'Tree View: intelligent search, auto-categorization, smart navigation',
  ],
};

export const metaConfig = {
  title: 'MUI AI: Build faster with AI that understands your UI system',
  description:
    'Build AI-powered interfaces where end users interact with your data through intelligent MUI components - grids that answer questions, charts that surface insights, and schedulers that resolve conflicts.',
};
