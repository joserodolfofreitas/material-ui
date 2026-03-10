import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import type { Highlight } from 'docs/src/components/landing/HighlightsBlock';
import type { UseCase } from 'docs/src/components/landing/UseCasesBlock';

export const schedulerHero = {
  title: 'Scheduling for complex products:',
  gradientText: 'events, resources, timelines',
  description:
    "A calendar and scheduling component for React that handles events, recurring patterns, resource timelines, and drag-and-drop - built on MUI's component system.",
  status: 'alpha' as ProductStatus,
  ctas: [
    { label: 'Try the Alpha', href: '/x/react-scheduler/', variant: 'contained' as const },
    {
      label: 'View documentation',
      href: '/x/react-scheduler/getting-started/',
      variant: 'outlined' as const,
      color: 'secondary' as const,
    },
  ],
};

export const schedulerHighlights: Omit<Highlight, 'icon'>[] = [
  {
    title: 'Calendar event management',
    description:
      'Day, week, and month views with drag-and-drop event creation, resizing, and rescheduling.',
    status: 'alpha' as ProductStatus,
  },
  {
    title: 'Recurring events',
    description:
      'Define repeating patterns (daily, weekly, monthly, custom) with exception handling and series editing.',
    status: 'alpha' as ProductStatus,
  },
  {
    title: 'Resource timeline',
    description:
      'Assign events to resources (rooms, people, equipment) and visualize availability across a timeline.',
    status: 'alpha' as ProductStatus,
  },
  {
    title: 'Drag-and-drop interactions',
    description:
      'Move and resize events with intuitive drag-and-drop. Snap-to-grid and constraint validation built in.',
    status: 'alpha' as ProductStatus,
  },
  {
    title: 'Theming and customization',
    description:
      'Inherits your MUI theme. Customize event rendering, time slots, and header layouts with slots and composition.',
    status: 'alpha' as ProductStatus,
  },
  {
    title: 'AI-powered scheduling',
    description:
      'Natural language event creation and smart conflict resolution. Planned for a future release.',
    status: 'coming-soon' as ProductStatus,
  },
];

export const schedulerUseCases: Omit<UseCase, 'icon'>[] = [
  {
    title: 'Appointment booking',
    description:
      'Build booking flows for healthcare, salons, consulting, and service businesses with availability and conflict detection.',
  },
  {
    title: 'Project planning',
    description:
      'Visualize team schedules, resource allocation, and project timelines with drag-and-drop rescheduling.',
  },
  {
    title: 'Facility management',
    description:
      'Manage room bookings, equipment reservations, and shared resource calendars across an organization.',
  },
];

export const schedulerAlphaInfo = {
  whatsInAlpha: [
    'Day, week, and month calendar views',
    'Event creation, editing, and deletion',
    'Recurring event patterns',
    'Resource timeline view',
    'Drag-and-drop event management',
    'MUI theme integration',
  ],
  whatsNext: [
    'Agenda view',
    'External event drag-and-drop',
    'Virtual scrolling for large datasets',
    'AI-powered scheduling assistance',
    'Accessibility improvements',
  ],
  alphaWarning:
    'The Scheduler is in Alpha. APIs may change between releases. We encourage you to try it and share feedback to help shape the stable release.',
};

export const metaConfig = {
  title: 'MUI X Scheduler: React calendar and scheduling component',
  description:
    'A React scheduling component with calendar views, recurring events, resource timelines, and drag-and-drop. Currently in Alpha.',
};
