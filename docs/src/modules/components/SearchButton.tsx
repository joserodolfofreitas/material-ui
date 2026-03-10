import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import { useTranslate } from '@mui/docs/i18n';

const SearchButtonStyled = styled('button')(({ theme }) => [
  {
    minHeight: 38,
    minWidth: 38,
    margin: 0,
    paddingLeft: theme.spacing(1.25),
    paddingRight: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    [theme.breakpoints.only('xs')]: {
      backgroundColor: 'transparent',
      padding: 0,
      justifyContent: 'center',
      '& > *:not(.MuiSvgIcon-root)': {
        display: 'none',
      },
    },
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.78),
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(14),
    color: (theme.vars || theme).palette.text.secondary,
    border: `1px solid ${alpha(theme.palette.primary[100], 0.95)}`,
    borderRadius: '12px',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: '150ms',
    backdropFilter: 'blur(14px)',
    boxShadow: `0 8px 20px ${alpha(theme.palette.primary[900], 0.06)}`,
    '&:hover': {
      background: alpha(theme.palette.common.white, 0.92),
      borderColor: alpha(theme.palette.primary[200], 0.95),
      boxShadow: `0 10px 24px ${alpha(theme.palette.primary[900], 0.08)}`,
    },
    '&:focus-visible': {
      outline: `3px solid ${alpha(theme.palette.primary[500], 0.5)}`,
      outlineOffset: '2px',
    },
  },
  theme.applyDarkStyles({
    backgroundColor: alpha(theme.palette.primaryDark[800], 0.75),
    borderColor: alpha(theme.palette.primary[300], 0.16),
    boxShadow: `0 10px 24px ${alpha(theme.palette.common.black, 0.25)}`,
    '&:hover': {
      background: alpha(theme.palette.primaryDark[800], 0.9),
      borderColor: alpha(theme.palette.primary[300], 0.22),
      boxShadow: `0 12px 30px ${alpha(theme.palette.common.black, 0.35)}`,
    },
  }),
]);

const SearchLabel = styled('span')(({ theme }) => ({
  marginRight: 'auto',
  marginBottom: '1px', // optical alignment
  color: (theme.vars || theme).palette.text.tertiary,
  lineHeight: 1,
}));

const Shortcut = styled('kbd')(({ theme }) => {
  return {
    all: 'unset',
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'bold',
    lineHeight: '19px',
    marginLeft: theme.spacing(0.5),
    border: `1px solid ${alpha(theme.palette.primary[100], 0.95)}`,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    padding: theme.spacing(0, 0.5),
    borderRadius: '8px',
    ...theme.applyDarkStyles({
      borderColor: alpha(theme.palette.primary[300], 0.14),
      backgroundColor: alpha(theme.palette.primaryDark[700], 0.85),
    }),
  };
});

interface SearchButtonProps {
  onClick?: () => void;
  onRef?: React.Ref<HTMLButtonElement>;
  [key: string]: any;
}

const subscribe = () => () => {};
const getSnapshot = () =>
  window.navigator.platform.toUpperCase().includes('MAC') ? '⌘K' : 'Ctrl+K';
const getServerSnapshot = () => null;

function useShortcut() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default function SearchButton({ onClick, onRef, ...props }: SearchButtonProps) {
  const t = useTranslate();
  const shortcut = useShortcut();

  return (
    <SearchButtonStyled
      ref={onRef}
      onClick={onClick}
      disabled={!onClick}
      aria-labelledby="app-search-label"
      {...props}
    >
      <SearchIcon color="primary" sx={{ fontSize: '1.125rem' }} />
      <SearchLabel id="app-search-label">{t('searchButton')}</SearchLabel>
      {shortcut && <Shortcut aria-hidden="true">{shortcut}</Shortcut>}
    </SearchButtonStyled>
  );
}
