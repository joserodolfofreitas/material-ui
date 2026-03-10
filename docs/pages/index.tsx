import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import GlobalStyles from '@mui/material/GlobalStyles';
import { alpha } from '@mui/material/styles';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import HeroBlock from 'docs/src/components/landing/HeroBlock';
import TrustLogoCloudBlock from 'docs/src/components/landing/TrustLogoCloudBlock';
import StatsBar from 'docs/src/components/landing/StatsBar';
import PlatformSuiteBlock from 'docs/src/components/landing/PlatformSuiteBlock';
import AIExperienceBlock from 'docs/src/components/landing/AIExperienceBlock';
import AdvancedComponentsGridBlock from 'docs/src/components/landing/AdvancedComponentsGridBlock';
import FeatureGridBlock from 'docs/src/components/landing/FeatureGridBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { premiumTokens } from 'docs/src/components/landing/marketingTheme';
import { heroConfig, metaConfig } from 'docs/src/components/landing/configs/homepageConfig';

const LiveComponentShowcase = dynamic(
  () => import('docs/src/components/landing/effects/LiveComponentShowcase'),
  {
    ssr: false,
    loading: () => (
      <Box
        sx={(theme) => ({
          width: '100%',
          minHeight: { xs: 520, md: 680 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: theme.palette.mode === 'dark' ? 'primaryDark.900' : 'background.paper',
        })}
      />
    ),
  },
);

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <GlobalStyles
        styles={(theme) => ({
          html: {
            backgroundColor: theme.palette.background.default,
          },
          body: {
            backgroundColor: theme.palette.background.default,
          },
        })}
      />
      <Head title={metaConfig.title} description={metaConfig.description} card={metaConfig.card}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MUI',
              url: 'https://mui.com/',
              logo: 'https://mui.com/static/logo.png',
              sameAs: [
                'https://x.com/MUI_hq',
                'https://github.com/mui/',
                'https://opencollective.com/mui-org',
              ],
            }),
          }}
        />
      </Head>
      <AppHeaderBanner />
      <Box
        sx={(theme) => ({
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: { xs: 760, md: 920 },
            background: premiumTokens.hero.stageBackground(theme),
            pointerEvents: 'none',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            height: { xs: 760, md: 920 },
            background: `
              linear-gradient(180deg, ${theme.palette.mode === 'dark' ? alpha(theme.palette.common.white, 0) : alpha(theme.palette.common.white, 0.28)} 0%, transparent 26%),
              radial-gradient(circle at 24% 24%, ${alpha(theme.palette.primary[200], theme.palette.mode === 'dark' ? 0 : 0.35)} 0%, transparent 26%),
              radial-gradient(circle at 78% 30%, ${alpha(theme.palette.info.main, theme.palette.mode === 'dark' ? 0.06 : 0.16)} 0%, transparent 24%)
            `,
            pointerEvents: 'none',
            zIndex: 0,
          },
        })}
      >
        <AppHeader />
        <main id="main-content" style={{ position: 'relative', zIndex: 1 }}>
          <HeroBlock
            overline={heroConfig.overline}
            headline={heroConfig.headline}
            gradientText={heroConfig.gradientText}
            description={heroConfig.description}
            proofLine={heroConfig.proofLine}
            ctas={heroConfig.ctas}
            visual={<LiveComponentShowcase />}
          />
          <TrustLogoCloudBlock />
          <StatsBar />
          <Divider />
          <PlatformSuiteBlock />
          <Divider />
          <FeatureGridBlock />
          <Divider />
          <AdvancedComponentsGridBlock />
          <Divider />
          <AIExperienceBlock />
          <Divider />
          <FinalCTABlock />
          <Divider />
        </main>
      </Box>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
