import { styled, alpha } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LogoWithCopyMenu from 'docs/src/components/action/LogoWithCopyMenu';
import HeaderNavBar from 'docs/src/components/header/HeaderNavBar';
import HeaderNavDropdown from 'docs/src/components/header/HeaderNavDropdown';
import ThemeModeToggle from 'docs/src/components/header/ThemeModeToggle';
import { DeferredAppSearch } from 'docs/src/modules/components/AppFrame';
import { useTranslate } from '@mui/docs/i18n';

const Header = styled('header')(({ theme }) => [
  {
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('top'),
    zIndex: theme.zIndex.appBar,
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    borderBottom: 'none',
  } as const,
  theme.applyDarkStyles({
    backgroundColor: 'transparent',
  }),
]);

const HEIGHT = 60;

interface AppHeaderProps {
  gitHubRepository?: string;
}

export default function AppHeader(props: AppHeaderProps) {
  const { gitHubRepository = 'https://github.com/mui' } = props;
  const t = useTranslate();

  return (
    <Header>
      <GlobalStyles
        styles={{
          ':root': {
            '--MuiDocs-header-height': `${HEIGHT}px`,
          },
        }}
      />
      <Container
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          minHeight: HEIGHT,
          mt: 1,
          px: { xs: 1, sm: 1.5 },
          borderRadius: '12px',
          border: '1px solid',
          borderColor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primary[300], 0.16)
              : alpha(theme.palette.primary[100], 0.95),
          bgcolor:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.primaryDark[900], 0.72)
              : alpha(theme.palette.common.white, 0.74),
          boxShadow:
            theme.palette.mode === 'dark'
              ? `0 10px 30px ${alpha(theme.palette.common.black, 0.28)}`
              : `0 10px 30px ${alpha(theme.palette.primary[900], 0.08)}`,
          backdropFilter: 'blur(20px)',
        })}
      >
        <LogoWithCopyMenu />
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <DeferredAppSearch />
          <Tooltip title={t('appFrame.github')} enterDelay={300}>
            <IconButton
              component="a"
              color="primary"
              size="small"
              href={gitHubRepository}
              target="_blank"
              rel="noopener"
              data-ga-event-category="header"
              data-ga-event-action="github"
              sx={(theme) => ({
                border: '1px solid',
                borderColor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.primary[300], 0.14)
                    : alpha(theme.palette.primary[100], 0.95),
                bgcolor:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.02)
                    : alpha(theme.palette.common.white, 0.72),
              })}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <ThemeModeToggle />
        </Stack>
        <Box sx={{ display: { md: 'none' }, ml: 1 }}>
          <HeaderNavDropdown />
        </Box>
      </Container>
    </Header>
  );
}
