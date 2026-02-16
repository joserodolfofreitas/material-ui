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

// ---------------------------------------------------------------------------
// Upload (Coming soon)
// ---------------------------------------------------------------------------
export const uploadConfig = {
  hero: {
    title: 'File upload with',
    gradientText: 'drag-and-drop and validation',
    description:
      "A file upload component for React with drag-and-drop zones, progress tracking, file validation, and preview - built on MUI's component system.",
    status: 'coming-soon' as ProductStatus,
  },
  plannedHighlights: [
    {
      title: 'Drag-and-drop zones',
      description: 'Visual drop zones with hover feedback, file type filtering, and size limit enforcement.',
    },
    {
      title: 'Progress and validation',
      description: 'Per-file upload progress, retry on failure, and client-side validation before upload.',
    },
    {
      title: 'File preview',
      description: 'Thumbnail previews for images, file type icons for documents, and metadata display.',
    },
    {
      title: 'Multi-file management',
      description: 'Upload queues with reordering, removal, and batch actions for multi-file workflows.',
    },
  ] as Omit<PlannedHighlight, 'icon'>[],
  useCases: [
    {
      title: 'Document management',
      description: 'Upload, preview, and organize documents with metadata, tagging, and version history.',
    },
    {
      title: 'Media libraries',
      description: 'Bulk image and video upload with thumbnails, cropping, and format conversion.',
    },
    {
      title: 'Form attachments',
      description: 'Add file upload fields to forms with validation, size limits, and required file types.',
    },
  ] as Omit<StubUseCase, 'icon'>[],
  meta: {
    title: 'MUI X Upload: React file upload component',
    description: 'A React file upload component with drag-and-drop, progress tracking, and validation. Coming soon.',
  },
};

// ---------------------------------------------------------------------------
// Rich Text Editor (Coming soon)
// ---------------------------------------------------------------------------
export const richTextEditorConfig = {
  hero: {
    title: 'Rich text editing with',
    gradientText: 'formatting and extensibility',
    description:
      "A rich text editor for React with a formatting toolbar, media embedding, and an extensible plugin system - built on MUI's component system.",
    status: 'coming-soon' as ProductStatus,
  },
  plannedHighlights: [
    {
      title: 'Rich formatting toolbar',
      description: 'Bold, italic, headings, lists, links, code blocks, and more with a customizable toolbar.',
    },
    {
      title: 'Extensible plugin system',
      description: 'Add custom block types, inline decorations, and toolbar actions with a composable plugin architecture.',
    },
    {
      title: 'Media embedding',
      description: 'Embed images, videos, and iframes with drag-to-resize and alignment controls.',
    },
    {
      title: 'Markdown support',
      description: 'Write in markdown and see it rendered in real time. Import and export markdown content.',
    },
    {
      title: 'Collaborative editing',
      description: 'Real-time collaborative editing with cursor presence, conflict resolution, and change tracking.',
      status: 'coming-soon' as ProductStatus,
    },
  ] as Omit<PlannedHighlight, 'icon'>[],
  useCases: [
    {
      title: 'Content management',
      description: 'Build CMS editors with rich formatting, media embedding, and structured content blocks.',
    },
    {
      title: 'Documentation tools',
      description: 'Create documentation editors with markdown support, code blocks, and table of contents.',
    },
    {
      title: 'Email composers',
      description: 'Build email composition interfaces with templates, variables, and rich formatting.',
    },
  ] as Omit<StubUseCase, 'icon'>[],
  meta: {
    title: 'MUI X Rich Text Editor: React rich text editing component',
    description: 'A React rich text editor with formatting, media, and extensible plugins. Coming soon.',
  },
};
