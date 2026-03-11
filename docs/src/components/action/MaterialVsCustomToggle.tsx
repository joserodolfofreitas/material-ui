import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button, { buttonClasses } from '@mui/material/Button';
import {
  type ThemeRecipe,
  themeRecipeLabels,
} from 'docs/src/components/home/MaterialDesignComponents';

interface MaterialVsCustomToggleProps {
  recipe: ThemeRecipe;
  setRecipe: React.Dispatch<ThemeRecipe>;
}

export default function MaterialVsCustomToggle({ recipe, setRecipe }: MaterialVsCustomToggleProps) {
  return (
    <Box
      sx={(theme) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        p: 1.5,
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        zIndex: 3,
        background: `linear-gradient(to bottom, ${
          (theme.vars || theme).palette.common.black
        } 70%, transparent)`,
        [`& .${buttonClasses.root}`]: {
          borderRadius: 99,
          padding: '1px 8px',
          fontSize: theme.typography.pxToRem(12),
        },
        '& .MuiButton-outlinedPrimary': {
          backgroundColor: alpha(theme.palette.primary[900], 0.5),
        },
      })}
    >
      <Button
        size="small"
        variant="outlined"
        color={recipe === 'material' ? 'primary' : 'secondary'}
        onClick={() => {
          setRecipe('material');
        }}
      >
        {themeRecipeLabels.material}
      </Button>
      <Button
        size="small"
        variant="outlined"
        color={recipe === 'md3' ? 'primary' : 'secondary'}
        onClick={() => {
          setRecipe('md3');
        }}
      >
        {themeRecipeLabels.md3}
      </Button>
      <Button
        size="small"
        variant="outlined"
        color={recipe === 'brand' ? 'primary' : 'secondary'}
        onClick={() => {
          setRecipe('brand');
        }}
      >
        {themeRecipeLabels.brand}
      </Button>
      <Button
        size="small"
        variant="outlined"
        color={recipe === 'brutalism' ? 'primary' : 'secondary'}
        onClick={() => {
          setRecipe('brutalism');
        }}
      >
        {themeRecipeLabels.brutalism}
      </Button>
    </Box>
  );
}
