import * as React from 'react';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import ViewTimelineRounded from '@mui/icons-material/ViewTimelineRounded';
import Chip from '@mui/material/Chip';
import IconImage from 'docs/src/components/icon/IconImage';
import ROUTES from 'docs/src/route';

export interface ProductMenuItem {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: React.ReactElement<unknown>;
  chip?: React.ReactNode;
}

function buildStatusChip(label: string) {
  return (
    <Chip
      size="small"
      label={label}
      variant="outlined"
      sx={{ height: 20, borderRadius: '999px', fontSize: 11, fontWeight: 700 }}
    />
  );
}

export const productMenuItems: ProductMenuItem[] = [
  {
    id: 'product-core',
    name: 'Material UI primitives',
    description: 'Ready-to-use foundational React components, free forever.',
    href: ROUTES.productCore,
    icon: <IconImage name="product-core" />,
  },
  {
    id: 'product-data-grid',
    name: 'Data Grid',
    description: 'High-performance data grid for dense, complex product workflows.',
    href: ROUTES.dataGridLanding,
    icon: <TableChartRounded />,
  },
  {
    id: 'product-charts',
    name: 'Charts',
    description: 'Composable charts for dashboards, analytics, and visual exploration.',
    href: ROUTES.chartsLanding,
    icon: <BarChartRounded />,
  },
  {
    id: 'product-scheduler',
    name: 'Scheduler',
    description: 'Scheduling surfaces for events, resources, and timeline-heavy workflows.',
    href: ROUTES.schedulerLanding,
    icon: <CalendarMonthRounded />,
    chip: buildStatusChip('Alpha'),
  },
  {
    id: 'product-chatbox',
    name: 'Chatbox',
    description: 'Conversational UI for assistants, messaging, and AI-native experiences.',
    href: ROUTES.chatboxLanding,
    icon: <ChatBubbleOutlineRounded />,
    chip: buildStatusChip('Alpha'),
  },
  {
    id: 'product-chat',
    name: 'MUI Chat',
    description: "Generate MUI-first examples, scaffold interfaces, and kickstart flows with AI grounded in MUI's ecosystem.",
    href: 'https://chat.mui.com',
    icon: <AutoAwesomeRounded />,
    chip: buildStatusChip('Alpha'),
  },
  {
    id: 'product-design-kits',
    name: 'Design Kits',
    description: 'Material UI components in your favorite design tool.',
    href: ROUTES.productDesignKits,
    icon: <IconImage name="product-designkits" />,
  },
  {
    id: 'product-templates',
    name: 'Templates',
    description: 'Fully built templates for your application.',
    href: ROUTES.productTemplates,
    icon: <IconImage name="product-templates" />,
  },
];
