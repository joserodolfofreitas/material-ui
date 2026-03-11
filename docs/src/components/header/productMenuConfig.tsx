import * as React from 'react';
import AutoAwesomeRounded from '@mui/icons-material/AutoAwesomeRounded';
import BarChartRounded from '@mui/icons-material/BarChartRounded';
import CalendarMonthRounded from '@mui/icons-material/CalendarMonthRounded';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import TableChartRounded from '@mui/icons-material/TableChartRounded';
import Box from '@mui/material/Box';
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

function withStandardIconWidth(icon: React.ReactElement<unknown>) {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
  );
}

export const productMenuItems: ProductMenuItem[] = [
  {
    id: 'product-material-ui',
    name: 'Material UI primitives',
    description: 'Ready-to-use foundational React components, free forever.',
    href: ROUTES.productMaterial,
    icon: <IconImage name="product-core" />,
  },
  {
    id: 'product-data-grid',
    name: 'Data Grid',
    description: 'High-performance data grid for dense, complex product workflows.',
    href: ROUTES.dataGridLanding,
    icon: withStandardIconWidth(<TableChartRounded />),
  },
  {
    id: 'product-charts',
    name: 'Charts',
    description: 'Composable charts for dashboards, analytics, and visual exploration.',
    href: ROUTES.chartsLanding,
    icon: withStandardIconWidth(<BarChartRounded />),
  },
  {
    id: 'product-scheduler',
    name: 'Scheduler',
    description: 'Scheduling surfaces for events, resources, and timeline-heavy workflows.',
    href: ROUTES.schedulerLanding,
    icon: withStandardIconWidth(<CalendarMonthRounded />),
    chip: buildStatusChip('Alpha'),
  },
  {
    id: 'product-chatbox',
    name: 'Chatbox',
    description: 'Conversational UI for assistants, messaging, and AI-native experiences.',
    href: ROUTES.chatboxLanding,
    icon: withStandardIconWidth(<ChatBubbleOutlineRounded />),
    chip: buildStatusChip('Alpha'),
  },
  {
    id: 'product-chat',
    name: 'MUI Chat',
    description: "Generate MUI-first examples, scaffold interfaces, and kickstart flows with AI grounded in MUI's ecosystem.",
    href: 'https://chat.mui.com',
    icon: withStandardIconWidth(<AutoAwesomeRounded />),
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
