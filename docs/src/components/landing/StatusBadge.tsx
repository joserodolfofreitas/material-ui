import * as React from 'react';
import Chip from '@mui/material/Chip';
import { type ProductStatus, statusConfig } from 'docs/src/components/landing/marketingTheme';

interface StatusBadgeProps {
  status: ProductStatus;
  size?: 'small' | 'medium';
}

export default function StatusBadge({ status, size = 'small' }: StatusBadgeProps) {
  const { label, color } = statusConfig[status];
  return (
    <Chip
      label={label}
      color={color}
      size={size}
      variant="outlined"
      sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 0.5 }}
    />
  );
}
