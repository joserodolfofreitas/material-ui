import * as React from 'react';
import {
  styled,
  Theme,
  ThemeOptions,
  alpha,
  extendTheme,
  CssVarsProvider,
} from '@mui/material/styles';
import { capitalize } from '@mui/material/utils';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import MailRounded from '@mui/icons-material/MailRounded';
import VerifiedUserRounded from '@mui/icons-material/VerifiedUserRounded';
import HelpCenterRounded from '@mui/icons-material/HelpCenterRounded';
import ROUTES from 'docs/src/route';
import { Link } from '@mui/docs/Link';
import { getDesignTokens, getThemedComponents } from '@mui/docs/branding';

export type ThemeRecipe = 'material' | 'md3' | 'brand' | 'brutalism';

export const themeRecipeLabels: Record<ThemeRecipe, string> = {
  material: 'Material Design',
  md3: 'Material Design 3',
  brand: 'Your brand',
  brutalism: 'Brutalism',
};

const Grid = styled('div')(({ theme }) => [
  {
    borderRadius: (theme.vars || theme).shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[50], 0.4),
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoRows: 240,
    [theme.breakpoints.up('sm')]: {
      gridAutoRows: 260,
      paddingTop: 1,
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.up('md')]: {
      gridAutoRows: 280,
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    '& > div': {
      padding: theme.spacing(2),
      alignSelf: 'stretch',
      border: '1px solid',
      borderColor: (theme.vars || theme).palette.grey[200],
      [theme.breakpoints.only('xs')]: {
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:not(:first-of-type)': {
          marginTop: -1,
        },
      },
      [theme.breakpoints.only('sm')]: {
        marginTop: -1,
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
          borderStyle: 'dashed',
        },
        '&:nth-of-type(even)': {
          marginLeft: -1,
        },
        '&:nth-last-of-type(2)': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:nth-of-type(2)': {
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
      },
      [theme.breakpoints.up('md')]: {
        marginTop: -1,
        '&:not(:nth-of-type(3n + 1))': {
          marginLeft: -1,
        },
        '&:first-of-type': {
          borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:last-of-type': {
          borderBottomRightRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:nth-last-of-type(3)': {
          borderBottomLeftRadius: (theme.vars || theme).shape.borderRadius,
        },
        '&:nth-of-type(3)': {
          borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
        },
      },
    },
  },
  theme.applyDarkStyles({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '& > div': {
      borderColor: alpha(theme.palette.primaryDark[600], 0.3),
    },
  }),
]);

function Demo({
  name,
  children,
  control,
  ...props
}: {
  name: string;
  theme: Theme | undefined;
  children: React.ReactElement<unknown>;
  control?: { prop: string; values: Array<string>; defaultValue?: string };
}) {
  const [propValue, setPropValue] = React.useState(
    control ? control.defaultValue || control.values[0] : '',
  );
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {control ? (
        <Box sx={{ minHeight: 40, ml: -1, mt: -1 }}>
          <Tabs
            value={propValue}
            onChange={(event, value) => setPropValue(value)}
            sx={{
              minHeight: 'initial',
              '& .MuiTabs-indicator': {
                bgcolor: 'transparent',
                '&::before': {
                  height: '100%',
                  content: '""',
                  display: 'block',
                  width: (theme) => `calc(100% - ${theme.spacing(2)})`,
                  bgcolor: 'primary.main',
                  position: 'absolute',
                  top: 0,
                  left: (theme) => theme.spacing(1),
                },
              },
              '& .MuiTab-root': {
                px: 1,
                pt: 0.5,
                minWidth: 'initial',
                minHeight: 'initial',
                fontWeight: 'medium',
              },
            }}
          >
            {control.values.map((value) => (
              <Tab key={value} value={value} label={capitalize(value)} />
            ))}
          </Tabs>
        </Box>
      ) : null}
      <Box
        className="mui-default-theme"
        sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <CssVarsProvider theme={props.theme}>
          {React.cloneElement(children, {
            ...(control && {
              [control.prop]: propValue,
            }),
          })}
        </CssVarsProvider>
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 'semiBold' }}>
        {name}
      </Typography>
    </Box>
  );
}

const StyledChip = styled(Chip)(({ theme }) => [
  {
    fontWeight: 700,
    '&.MuiChip-outlined': {
      color: (theme.vars || theme).palette.text.secondary,
    },
    '&.MuiChip-filled': {
      borderColor: (theme.vars || theme).palette.primary[300],
      backgroundColor: alpha(theme.palette.primary[100], 0.5),
      color: (theme.vars || theme).palette.primary[600],
    },
  },
  theme.applyDarkStyles({
    '&.MuiChip-filled': {
      borderColor: (theme.vars || theme).palette.primary[500],
      backgroundColor: (theme.vars || theme).palette.primary[800],
      color: (theme.vars || theme).palette.primary[100],
    },
  }),
]);

const themedComponents = getThemedComponents();
export function buildBrandTheme(): ThemeOptions {
  return {
    shape: {
      borderRadius: 20,
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: () => ({
            borderRadius: 999,
            fontWeight: 700,
            textTransform: 'none',
            letterSpacing: 0,
            transition: 'transform 120ms ease-out, box-shadow 120ms ease-out',
            '&:hover': {
              transform: 'translateY(-1px)',
            },
          }),
          contained: ({ theme }) => ({
            color: '#fff',
            border: '1px solid transparent',
            backgroundImage: `linear-gradient(135deg, ${
              (theme.vars || theme).palette.primary[500]
            } 0%, ${(theme.vars || theme).palette.secondary.main} 100%)`,
            boxShadow: `0 16px 32px ${alpha(theme.palette.primary[500], 0.28)}`,
            '&:hover': {
              boxShadow: `0 18px 36px ${alpha(theme.palette.primary[500], 0.32)}`,
            },
          }),
          outlined: ({ theme }) => ({
            borderColor: alpha(theme.palette.primary[400], 0.35),
            backgroundColor: alpha(theme.palette.common.white, 0.72),
            backdropFilter: 'blur(12px)',
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.primary[200],
              borderColor: alpha(theme.palette.primary[300], 0.35),
              backgroundColor: alpha(theme.palette.primary[900], 0.22),
            }),
          }),
          text: ({ theme }) => ({
            color: (theme.vars || theme).palette.primary[700],
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.primary[200],
            }),
          }),
        },
      },
      MuiAlert: {
        defaultProps: {
          icon: <CheckCircleRounded />,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 20,
            border: '1px solid',
            borderColor: alpha(theme.palette.primary[200], 0.5),
            boxShadow: `0 12px 28px ${alpha(theme.palette.primary[500], 0.12)}`,
            ...theme.applyDarkStyles({
              borderColor: alpha(theme.palette.primary[500], 0.2),
              boxShadow: `0 12px 28px ${alpha(theme.palette.common.black, 0.28)}`,
            }),
          }),
          standardInfo: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.primary[50], 0.85),
            color: (theme.vars || theme).palette.primary[700],
            ...theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.primary[900], 0.35),
              color: (theme.vars || theme).palette.primary[100],
            }),
          }),
          filled: ({ theme }) => ({
            backgroundImage: `linear-gradient(135deg, ${
              (theme.vars || theme).palette.primary[500]
            } 0%, ${(theme.vars || theme).palette.secondary.main} 100%)`,
            color: '#fff',
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& .MuiInputLabel-root.Mui-focused': {
              color: (theme.vars || theme).palette.primary[700],
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: 18,
              backgroundColor: alpha(theme.palette.common.white, 0.78),
              backdropFilter: 'blur(14px)',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: alpha(theme.palette.primary[200], 0.9),
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: alpha(theme.palette.primary[400], 0.8),
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderWidth: 2,
                borderColor: (theme.vars || theme).palette.primary[500],
              },
              ...theme.applyDarkStyles({
                backgroundColor: alpha(theme.palette.primary[900], 0.18),
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: alpha(theme.palette.primary[500], 0.24),
                },
              }),
            },
            '& .MuiFilledInput-root': {
              borderRadius: 18,
              backgroundColor: alpha(theme.palette.primary[50], 0.7),
              '&:before, &:after': {
                borderBottom: 'none',
              },
              ...theme.applyDarkStyles({
                backgroundColor: alpha(theme.palette.primary[900], 0.25),
              }),
            },
          }),
        },
      },
      MuiTooltip: themedComponents.components?.MuiTooltip,
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            borderRadius: 24,
            border: '1px solid',
            borderColor: alpha(theme.palette.primary[200], 0.7),
            backgroundColor: alpha(theme.palette.common.white, 0.82),
            backdropFilter: 'blur(16px)',
            boxShadow: `0 18px 40px ${alpha(theme.palette.primary[900], 0.12)}`,
            ...theme.applyDarkStyles({
              borderColor: alpha(theme.palette.primary[500], 0.24),
              backgroundColor: alpha(theme.palette.primary[900], 0.24),
              boxShadow: `0 18px 40px ${alpha(theme.palette.common.black, 0.36)}`,
            }),
          }),
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.primary[50], 0.9),
            ...theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.primary[900], 0.32),
            }),
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: alpha(theme.palette.primary[100], 0.9),
            ...theme.applyDarkStyles({
              borderColor: alpha(theme.palette.primary[500], 0.18),
            }),
          }),
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: ({ theme }) => ({
            borderRadius: 20,
            border: '1px solid',
            borderColor: alpha(theme.palette.primary[200], 0.7),
            boxShadow: `0 18px 40px ${alpha(theme.palette.primary[900], 0.14)}`,
            ...theme.applyDarkStyles({
              borderColor: alpha(theme.palette.primary[500], 0.2),
              boxShadow: `0 18px 40px ${alpha(theme.palette.common.black, 0.36)}`,
            }),
          }),
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            margin: theme.spacing(0.5),
            borderRadius: 14,
          }),
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: ({ theme }) => ({
            minHeight: 44,
            borderRadius: 999,
            backgroundColor: alpha(theme.palette.primary[50], 0.9),
            ...theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.primary[900], 0.3),
            }),
          }),
        },
      },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            minHeight: 36,
            borderRadius: 999,
            textTransform: 'none',
            '&.Mui-selected': {
              backgroundImage: `linear-gradient(135deg, ${
                (theme.vars || theme).palette.primary[400]
              } 0%, ${(theme.vars || theme).palette.secondary.main} 100%)`,
              color: '#fff',
            },
          }),
        },
      },
    },
  };
}

export function buildBrutalismTheme(): ThemeOptions {
  return {
    shape: {
      borderRadius: 0,
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 0,
            fontWeight: 800,
            fontSize: '0.875rem',
            lineHeight: 24 / 16,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            border: '2px solid',
            borderColor: (theme.vars || theme).palette.common.black,
            boxShadow: `4px 4px 0 ${(theme.vars || theme).palette.common.black}`,
            transition: 'transform 120ms ease-out, box-shadow 120ms ease-out',
            '&:hover': {
              transform: 'translate(2px, 2px)',
              boxShadow: `2px 2px 0 ${(theme.vars || theme).palette.common.black}`,
            },
            '&:active': {
              transform: 'translate(4px, 4px)',
              boxShadow: 'none',
            },
          }),
          sizeSmall: ({ theme }) => ({
            padding: theme.spacing(0.5, 1),
          }),
          sizeMedium: ({ theme }) => ({
            padding: theme.spacing(0.8, 2),
          }),
          sizeLarge: ({ theme }) => ({
            padding: theme.spacing(1, 2),
            fontSize: '1rem',
          }),
          text: ({ theme }) => ({
            color: (theme.vars || theme).palette.common.black,
            borderColor: 'transparent',
            boxShadow: 'none',
            textDecoration: 'underline',
            textUnderlineOffset: '0.18em',
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.common.white,
            }),
          }),
          contained: ({ theme }) => ({
            color: (theme.vars || theme).palette.common.black,
            backgroundColor: (theme.vars || theme).palette.primary[600],
            borderColor: (theme.vars || theme).palette.common.black,
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.common.black,
              backgroundColor: (theme.vars || theme).palette.primary[500],
              borderColor: (theme.vars || theme).palette.common.black,
            }),
          }),
          outlined: ({ theme }) => ({
            color: (theme.vars || theme).palette.common.black,
            backgroundColor: (theme.vars || theme).palette.common.white,
            borderColor: (theme.vars || theme).palette.common.black,
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.common.white,
              backgroundColor: (theme.vars || theme).palette.grey[900],
              borderColor: (theme.vars || theme).palette.common.white,
              boxShadow: `4px 4px 0 ${(theme.vars || theme).palette.common.white}`,
            }),
          }),
          iconSizeSmall: {
            '& > *:nth-of-type(1)': {
              fontSize: '0.875rem',
            },
          },
          iconSizeMedium: {
            '& > *:nth-of-type(1)': {
              fontSize: '0.875rem',
            },
          },
          iconSizeLarge: {
            '& > *:nth-of-type(1)': {
              fontSize: '1rem',
            },
          },
        },
      },
      MuiAlert: {
        defaultProps: {
          icon: <CheckCircleRounded />,
        },
        styleOverrides: {
          root: ({ theme }) => [
            {
              padding: theme.spacing(1.5),
              border: '2px solid',
              borderRadius: 0,
              borderColor: (theme.vars || theme).palette.common.black,
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.common.black,
              },
            },
            theme.applyDarkStyles({
              borderColor: (theme.vars || theme).palette.common.white,
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.common.white,
              },
            }),
          ],
          filled: ({ theme }) => ({
            color: (theme.vars || theme).palette.common.black,
            backgroundColor: (theme.vars || theme).palette.primary[600],
            '& .MuiAlert-icon': {
              color: (theme.vars || theme).palette.common.black,
            },
            ...theme.applyDarkStyles({
              color: (theme.vars || theme).palette.common.black,
              backgroundColor: (theme.vars || theme).palette.primary[500],
            }),
          }),
          outlined: ({ theme }) => [
            {
              color: (theme.vars || theme).palette.common.black,
              backgroundColor: '#fff',
              borderColor: (theme.vars || theme).palette.common.black,
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.common.black,
              },
            },
            theme.applyDarkStyles({
              color: (theme.vars || theme).palette.common.white,
              backgroundColor: (theme.vars || theme).palette.grey[900],
              borderColor: (theme.vars || theme).palette.common.white,
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.common.white,
              },
            }),
          ],
          message: {
            padding: 0,
            fontWeight: 500,
          },
          standardInfo: ({ theme }) => [
            {
              backgroundColor: (theme.vars || theme).palette.primary[50],
              color: (theme.vars || theme).palette.primary[600],
              border: '1px solid',
              borderColor: alpha(theme.palette.primaryDark[100], 0.5),
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.primary[500],
              },
            },
            theme.applyDarkStyles({
              backgroundColor: alpha(theme.palette.primaryDark[700], 0.5),
              color: (theme.vars || theme).palette.primaryDark[50],
              borderColor: alpha(theme.palette.primaryDark[500], 0.2),
              '& .MuiAlert-icon': {
                color: (theme.vars || theme).palette.primaryDark[50],
              },
            }),
          ],
          icon: {
            paddingTop: 1,
            paddingBottom: 0,
            '& > svg': {
              fontSize: '1.125rem',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => [
            {
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: (theme.vars || theme).palette.common.black,
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                background: 'transparent',
                borderColor: (theme.vars || theme).palette.common.black,
              },
              '& .MuiOutlinedInput-root': {
                backgroundColor: (theme.vars || theme).palette.common.white,
                borderRadius: 0,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: 2,
                  borderColor: (theme.vars || theme).palette.common.black,
                },
              },
              '& .MuiInputBase-root': {
                fontWeight: 700,
                '&::before': {
                  borderBottomWidth: 2,
                  borderColor: (theme.vars || theme).palette.common.black,
                },
              },
              '& .MuiFilledInput-root': {
                backgroundColor: '#fff',
                border: '2px solid',
                borderRadius: 0,
                borderColor: (theme.vars || theme).palette.common.black,
                '&::before': {
                  borderBottomWidth: 0,
                },
                '&::after': {
                  borderBottomWidth: 0,
                },
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.primary[50],
                },
              },
              '& .MuiInputLabel-filled.Mui-focused': {
                color: (theme.vars || theme).palette.common.black,
              },
              '& .MuiInput-root.Mui-focused': {
                '&::after': {
                  borderColor: (theme.vars || theme).palette.common.black,
                  borderBottomWidth: 2,
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: (theme.vars || theme).palette.common.black,
              },
            },
            theme.applyDarkStyles({
              '& .MuiInputBase-root': {
                '&::before': {
                  borderColor: (theme.vars || theme).palette.common.white,
                },
              },
              '& .MuiInputLabel-outlined.Mui-focused': {
                color: (theme.vars || theme).palette.common.white,
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: (theme.vars || theme).palette.common.white,
              },
              '& .MuiOutlinedInput-input': {
                borderRadius: 'inherit',
                backgroundColor: (theme.vars || theme).palette.grey[900],
              },
              '& .MuiFilledInput-root': {
                borderColor: (theme.vars || theme).palette.common.white,
                backgroundColor: (theme.vars || theme).palette.grey[900],
                '&::after': {
                  borderColor: (theme.vars || theme).palette.common.white,
                },
                '&:hover': {
                  backgroundColor: (theme.vars || theme).palette.grey[800],
                  borderColor: (theme.vars || theme).palette.common.white,
                },
              },
              '& .MuiInputLabel-filled.Mui-focused': {
                color: (theme.vars || theme).palette.common.white,
              },
              '& .MuiInput-root.Mui-focused': {
                '&::after': {
                  borderColor: (theme.vars || theme).palette.common.white,
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: (theme.vars || theme).palette.common.white,
              },
            }),
          ],
        },
      },
      MuiTooltip: themedComponents.components?.MuiTooltip,
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 0,
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? (theme.vars || theme).palette.common.white
                : (theme.vars || theme).palette.common.black,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `6px 6px 0 ${(theme.vars || theme).palette.common.white}`
                : `6px 6px 0 ${(theme.vars || theme).palette.common.black}`,
            backgroundImage: 'none',
          }),
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 8,
            backgroundColor: (theme.vars || theme).palette.primary[600],
            borderColor: (theme.vars || theme).palette.common.black,
            ...theme.applyDarkStyles({
              backgroundColor: (theme.vars || theme).palette.primary[500],
              borderColor: (theme.vars || theme).palette.common.white,
            }),
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 8,
            borderColor:
              theme.palette.mode === 'dark'
                ? (theme.vars || theme).palette.common.white
                : (theme.vars || theme).palette.common.black,
          }),
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: ({ theme }) => ({
            borderRadius: 0,
            border: '2px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? (theme.vars || theme).palette.common.white
                : (theme.vars || theme).palette.common.black,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `6px 6px 0 ${(theme.vars || theme).palette.common.white}`
                : `6px 6px 0 ${(theme.vars || theme).palette.common.black}`,
            ...theme.applyDarkStyles({
              backgroundColor: (theme.vars || theme).palette.grey[900],
            }),
          }),
        },
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            padding: 0,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => [
            {
              margin: theme.spacing(1),
              padding: '4px 8px',
              borderRadius: 0,
              '& .MuiListItemIcon-root': {
                minWidth: '24px',
              },
              '& svg': {
                fontSize: '1rem',
                color: (theme.vars || theme).palette.common.black,
              },
            },
            theme.applyDarkStyles({
              '& svg': {
                color: (theme.vars || theme).palette.common.white,
              },
            }),
          ],
        },
      },
    },
  };
}

const { palette: lightPalette, typography, ...designTokens } = getDesignTokens('light');
const { palette: darkPalette } = getDesignTokens('dark');
const md3LightPrimary = {
  50: '#F6EDFF',
  100: '#EADDFF',
  200: '#D0BCFF',
  300: '#B69DF8',
  400: '#9A82DB',
  main: '#6750A4',
  500: '#6750A4',
  600: '#5B4497',
  700: '#4F378B',
  800: '#3A2C63',
  900: '#21005D',
};

const md3DarkPrimary = {
  50: '#21005D',
  100: '#381E72',
  200: '#4F378B',
  300: '#6750A4',
  400: '#7F67BE',
  main: '#D0BCFF',
  500: '#D0BCFF',
  600: '#EADDFF',
  700: '#F6EDFF',
  800: '#FFFBFE',
  900: '#FFFFFF',
};

const md3LightSecondary = {
  50: '#F8F4FF',
  100: '#E8DEF8',
  200: '#CCC2DC',
  300: '#B0A7C0',
  400: '#948BA4',
  main: '#625B71',
  500: '#625B71',
  600: '#59516A',
  700: '#4A4458',
  800: '#332D41',
  900: '#1D192B',
};

const md3DarkSecondary = {
  50: '#1D192B',
  100: '#332D41',
  200: '#4A4458',
  300: '#625B71',
  400: '#7A7289',
  main: '#CCC2DC',
  500: '#CCC2DC',
  600: '#E8DEF8',
  700: '#F6EDFF',
  800: '#FFFBFE',
  900: '#FFFFFF',
};

function buildMd3Theme(): ThemeOptions {
  return {
    shape: {
      borderRadius: 20,
    },
    typography: {
      ...typography,
      button: {
        textTransform: 'none',
        fontWeight: 500,
        letterSpacing: 0,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 999,
            minHeight: 40,
            paddingInline: theme.spacing(2),
            fontWeight: 600,
            textTransform: 'none',
          }),
          sizeLarge: ({ theme }) => ({
            minHeight: 48,
            paddingInline: theme.spacing(3),
          }),
          contained: ({ theme }) => ({
            color: theme.palette.mode === 'dark' ? '#381E72' : '#fff',
            backgroundColor: (theme.vars || theme).palette.primary.main,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: (theme.vars || theme).palette.primary[600],
              boxShadow: 'none',
            },
          }),
          outlined: ({ theme }) => ({
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[500], 0.5)
                : alpha(theme.palette.primary[700], 0.35),
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[500], 0.08)
                : alpha(theme.palette.primary[50], 0.6),
          }),
          text: ({ theme }) => ({
            color: (theme.vars || theme).palette.primary.main,
            '&:hover': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary[500], 0.12)
                  : alpha(theme.palette.primary[100], 0.6),
            },
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            borderRadius: 24,
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: alpha(theme.palette.common.white, 0.05),
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 28,
            boxShadow: 'none',
            border: '1px solid',
            borderColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.12)
                : alpha(theme.palette.primary[200], 0.8),
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            fontWeight: 500,
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: alpha(theme.palette.common.white, 0.08),
            }),
          }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: 20,
          },
          standardInfo: ({ theme }) => ({
            color:
              theme.palette.mode === 'dark'
                ? (theme.vars || theme).palette.primary[700]
                : (theme.vars || theme).palette.primary[800],
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.primary[500], 0.16)
                : alpha(theme.palette.primary[100], 0.7),
          }),
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 52,
            height: 32,
            padding: 7,
          },
          switchBase: {
            padding: 0,
            margin: 2,
            '&.Mui-checked': {
              transform: 'translateX(20px)',
            },
          },
          thumb: {
            width: 20,
            height: 20,
            boxShadow: 'none',
          },
          track: ({ theme }) => ({
            borderRadius: 999,
            opacity: 1,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.24)
                : alpha(theme.palette.primary[300], 0.7),
          }),
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: ({ theme }) => ({
            minHeight: 44,
            borderRadius: 999,
            padding: 4,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.06)
                : alpha(theme.palette.primary[50], 0.85),
          }),
          indicator: {
            display: 'none',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: ({ theme }) => ({
            minHeight: 36,
            borderRadius: 999,
            textTransform: 'none',
            '&.Mui-selected': {
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary[500], 0.2)
                  : alpha(theme.palette.primary[100], 0.9),
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.04)
                : alpha(theme.palette.primary[50], 0.55),
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.16)
                  : alpha(theme.palette.primary[300], 0.6),
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.primary[500], 0.6)
                  : alpha(theme.palette.primary[500], 0.7),
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderColor: (theme.vars || theme).palette.primary.main,
            },
          }),
          input: {
            paddingBlock: 14,
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 16,
            backgroundColor:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.06)
                : alpha(theme.palette.primary[50], 0.8),
            '&:before, &:after': {
              borderBottom: 'none',
            },
          }),
        },
      },
    },
  };
}

export const defaultTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'data-mui-color-scheme',
});
export const brandTheme = extendTheme({
  cssVarPrefix: 'muidocs',
  colorSchemeSelector: 'data-mui-color-scheme',
  colorSchemes: {
    light: {
      palette: {
        ...lightPalette,
        primary: {
          ...lightPalette.primary,
          main: '#FFD600',
          50: '#FFF9C4',
          100: '#FFF176',
          200: '#FFEE58',
          300: '#FFEB3B',
          400: '#FDD835',
          500: '#FBC02D',
          600: '#FFD600',
          700: '#F9A825',
          800: '#F57F17',
          900: '#E65100',
        },
        secondary: {
          ...lightPalette.secondary,
          main: '#FF3366',
        },
      },
    },
    dark: {
      palette: {
        ...darkPalette,
        primary: {
          ...darkPalette.primary,
          main: '#FFD600',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFD600',
          600: '#FBC02D',
          700: '#F9A825',
        },
        secondary: {
          ...darkPalette.secondary,
          main: '#FF5C8A',
        },
      },
    },
  },
  ...designTokens,
  ...buildBrandTheme(),
});
export const brutalismTheme = extendTheme({
  cssVarPrefix: 'muidocs',
  colorSchemeSelector: 'data-mui-color-scheme',
  colorSchemes: {
    light: {
      palette: {
        ...lightPalette,
        primary: {
          ...lightPalette.primary,
          main: '#FFD600',
          50: '#FFF9C4',
          100: '#FFF176',
          200: '#FFEE58',
          300: '#FFEB3B',
          400: '#FDD835',
          500: '#FBC02D',
          600: '#FFD600',
          700: '#F9A825',
          800: '#F57F17',
          900: '#E65100',
        },
        secondary: {
          ...lightPalette.secondary,
          main: '#FF3366',
        },
      },
    },
    dark: {
      palette: {
        ...darkPalette,
        primary: {
          ...darkPalette.primary,
          main: '#FFD600',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFD600',
          600: '#FBC02D',
          700: '#F9A825',
        },
        secondary: {
          ...darkPalette.secondary,
          main: '#FF5C8A',
        },
      },
    },
  },
  ...designTokens,
  ...buildBrutalismTheme(),
});
export const md3Theme = extendTheme({
  cssVarPrefix: 'muidocs',
  colorSchemeSelector: 'data-mui-color-scheme',
  colorSchemes: {
    light: {
      palette: {
        ...lightPalette,
        primary: md3LightPrimary,
        secondary: md3LightSecondary,
      },
    },
    dark: {
      palette: {
        ...darkPalette,
        primary: md3DarkPrimary,
        secondary: md3DarkSecondary,
      },
    },
  },
  ...designTokens,
  ...buildMd3Theme(),
});

export function getThemeFromRecipe(recipe: ThemeRecipe) {
  switch (recipe) {
    case 'brand':
      return brandTheme;
    case 'brutalism':
      return brutalismTheme;
    case 'md3':
      return md3Theme;
    case 'material':
    default:
      return defaultTheme;
  }
}

export default function MaterialDesignComponents() {
  const [anchor, setAnchor] = React.useState<HTMLElement | null>(null);
  const [recipe, setRecipe] = React.useState<ThemeRecipe>('material');
  const theme = getThemeFromRecipe(recipe);
  return (
    <div>
      <Box
        sx={{
          mt: { xs: 2, md: 2 },
          mb: 4,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <StyledChip
          size="small"
          label={themeRecipeLabels.material}
          variant={recipe === 'material' ? 'filled' : 'outlined'}
          color={recipe === 'material' ? 'primary' : 'secondary'}
          onClick={() => setRecipe('material')}
          sx={{ mr: 1 }}
        />
        <StyledChip
          size="small"
          label={themeRecipeLabels.md3}
          variant={recipe === 'md3' ? 'filled' : 'outlined'}
          color={recipe === 'md3' ? 'primary' : 'secondary'}
          onClick={() => setRecipe('md3')}
          sx={{ mr: 1 }}
        />
        <StyledChip
          size="small"
          label={themeRecipeLabels.brand}
          variant={recipe === 'brand' ? 'filled' : 'outlined'}
          color={recipe === 'brand' ? 'primary' : 'secondary'}
          onClick={() => setRecipe('brand')}
          sx={{ mr: 1 }}
        />
        <StyledChip
          size="small"
          label={themeRecipeLabels.brutalism}
          variant={recipe === 'brutalism' ? 'filled' : 'outlined'}
          color={recipe === 'brutalism' ? 'primary' : 'secondary'}
          onClick={() => setRecipe('brutalism')}
        />
      </Box>
      <Grid>
        <div>
          <Demo
            theme={theme}
            name="Button"
            control={{ prop: 'size', values: ['small', 'medium', 'large'], defaultValue: 'medium' }}
          >
            <Button variant="contained" startIcon={<ShoppingCartRounded />}>
              Add to Cart
            </Button>
          </Demo>
        </div>
        <div>
          <Demo
            theme={theme}
            name="Alert"
            control={{ prop: 'variant', values: ['standard', 'filled', 'outlined'] }}
          >
            <Alert color="info">Check out this alert!</Alert>
          </Demo>
        </div>
        <div>
          <Demo
            theme={theme}
            name="Text Field"
            control={{ prop: 'variant', values: ['outlined', 'standard', 'filled'] }}
          >
            <TextField id="material-design-textfield" label="Username" defaultValue="Ultraviolet" />
          </Demo>
        </div>
        <div>
          <Demo theme={theme} name="Menu">
            <React.Fragment>
              <Button onClick={(event) => setAnchor(event.target as HTMLElement)}>
                Click to open
              </Button>
              <Menu
                open={Boolean(anchor)}
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                PaperProps={{ variant: 'outlined', elevation: 0 }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <MailRounded />
                  </ListItemIcon>
                  Contact
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <VerifiedUserRounded />
                  </ListItemIcon>
                  Security
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <HelpCenterRounded />
                  </ListItemIcon>
                  About us
                </MenuItem>
              </Menu>
            </React.Fragment>
          </Demo>
        </div>
        <div>
          <Demo theme={theme} name="Table">
            <TableContainer
              component={Paper}
              variant="outlined"
              sx={{
                '& .MuiTableBody-root > .MuiTableRow-root:last-of-type > .MuiTableCell-root': {
                  borderBottomWidth: 0,
                },
              }}
            >
              <Table aria-label="demo table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert</TableCell>
                    <TableCell>Calories</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Frozen yoghurt</TableCell>
                    <TableCell>109</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cupcake</TableCell>
                    <TableCell>305</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Demo>
        </div>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 0.5 }}>
            Want to see more?
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mb: 0.5, maxWidth: 250, mx: 'auto' }}
          >
            Check out the docs for details of the complete library.
          </Typography>
          <Button
            component={Link}
            noLinkStyle
            href={ROUTES.documentation}
            endIcon={<KeyboardArrowRightRounded />}
          >
            Learn more
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
