import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { PlannedHighlight, StubUseCase } from 'docs/src/components/landing/StubLandingBlock';

// ---------------------------------------------------------------------------
// Chatbox (Alpha)
// ---------------------------------------------------------------------------
export const chatboxConfig = {
  hero: {
    title: 'A conversational UI component for',
    gradientText: 'chat and AI assistants',
    description:
      'Build chat interfaces, AI assistant panels, and messaging experiences with streaming support, customizable message rendering, and MUI theming.',
    status: 'alpha' as ProductStatus,
  },
  plannedHighlights: [
    {
      title: 'Streaming message support',
      description: 'Render AI responses token-by-token with built-in streaming state management and typing indicators.',
    },
    {
      title: 'Customizable message rendering',
      description: 'Slots for message bubbles, avatars, timestamps, and actions. Render markdown, code blocks, or custom content.',
    },
    {
      title: 'Conversation history',
      description: 'Virtualized message list for long conversations with scroll-to-bottom, unread indicators, and lazy loading.',
    },
    {
      title: 'Input composition',
      description: 'Rich input area with attachments, mentions, slash commands, and submit-on-enter behavior.',
    },
    {
      title: 'Accessibility',
      description: 'ARIA live regions for new messages, keyboard navigation, and screen reader announcements.',
    },
    {
      title: 'Theming integration',
      description: 'Inherits your MUI theme for colors, typography, spacing, and dark mode support.',
    },
  ] as Omit<PlannedHighlight, 'icon'>[],
  useCases: [
    {
      title: 'AI assistant panels',
      description: 'Embed an AI chat experience in your app with streaming responses, context awareness, and action suggestions.',
    },
    {
      title: 'Customer support',
      description: 'Build live chat widgets with agent routing, canned responses, and conversation history.',
    },
    {
      title: 'Collaborative messaging',
      description: 'Team messaging with threads, reactions, file sharing, and real-time presence indicators.',
    },
  ] as Omit<StubUseCase, 'icon'>[],
  meta: {
    title: 'MUI X Chatbox: React chat and AI assistant component',
    description: 'A React chat component with streaming support, customizable rendering, and MUI theming. Currently in Alpha.',
  },
};

// ---------------------------------------------------------------------------
// Gantt (Coming soon)
// ---------------------------------------------------------------------------
export const ganttConfig = {
  hero: {
    title: 'Project timeline visualization with',
    gradientText: 'dependencies and milestones',
    description:
      "A Gantt chart component for React that visualizes project timelines, task dependencies, milestones, and resource allocation - built on MUI's component system.",
    status: 'coming-soon' as ProductStatus,
  },
  plannedHighlights: [
    {
      title: 'Task dependencies',
      description: 'Define finish-to-start, start-to-start, and other dependency types with visual connector lines.',
    },
    {
      title: 'Timeline and resource views',
      description: 'Switch between timeline, resource, and calendar views to see projects from different angles.',
    },
    {
      title: 'Drag-and-drop scheduling',
      description: 'Move and resize tasks on the timeline with constraint validation and automatic dependency updates.',
    },
    {
      title: 'Milestones and baselines',
      description: 'Mark key dates and compare planned vs. actual progress with baseline overlays.',
    },
    {
      title: 'Critical path analysis',
      description: 'Automatically highlight the critical path to identify bottlenecks and schedule risks.',
    },
    {
      title: 'Zoom and scroll',
      description: 'Zoom from hours to years with smooth scrolling and configurable time scales.',
    },
  ] as Omit<PlannedHighlight, 'icon'>[],
  useCases: [
    {
      title: 'Project management',
      description: 'Visualize project plans with tasks, dependencies, milestones, and team assignments.',
    },
    {
      title: 'Manufacturing planning',
      description: 'Schedule production runs, track equipment availability, and manage supply chain timelines.',
    },
    {
      title: 'Construction scheduling',
      description: 'Plan construction phases with dependency chains, resource allocation, and progress tracking.',
    },
  ] as Omit<StubUseCase, 'icon'>[],
  meta: {
    title: 'MUI X Gantt: React Gantt chart component',
    description: 'A React Gantt chart with task dependencies, milestones, and resource views. Coming soon.',
  },
};

