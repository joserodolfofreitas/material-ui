import * as React from 'react';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import ViewTimelineRounded from '@mui/icons-material/ViewTimelineRounded';
import type { ProductStatus } from 'docs/src/components/landing/marketingTheme';
import ROUTES from 'docs/src/route';

export type ComponentLandingNavId =
  | 'ai'
  | 'data-grid'
  | 'charts'
  | 'scheduler'
  | 'chatbox'
  | 'gantt';

export interface ComponentLandingNavItem {
  id: ComponentLandingNavId;
  label: string;
  href: string;
  icon: React.ReactNode;
  status?: ProductStatus;
}

export const componentLandingNavItems: ComponentLandingNavItem[] = [
  {
    id: 'ai',
    label: 'AI',
    href: ROUTES.aiLanding,
    icon: <SmartToyRounded />,
  },
  {
    id: 'data-grid',
    label: 'Data Grid',
    href: ROUTES.dataGridLanding,
    icon: <TableChartRounded />,
  },
  {
    id: 'charts',
    label: 'Charts',
    href: ROUTES.chartsLanding,
    icon: <BarChartRounded />,
  },
  {
    id: 'scheduler',
    label: 'Scheduler',
    href: ROUTES.schedulerLanding,
    icon: <CalendarMonthRounded />,
    status: 'alpha',
  },
  {
    id: 'chatbox',
    label: 'Chatbox',
    href: ROUTES.chatboxLanding,
    icon: <ChatBubbleOutlineRounded />,
    status: 'alpha',
  },
  {
    id: 'gantt',
    label: 'Gantt',
    href: ROUTES.ganttLanding,
    icon: <ViewTimelineRounded />,
    status: 'coming-soon',
  },
];
