import Divider from '@mui/material/Divider';
import Head from 'docs/src/modules/components/Head';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import HeroBlock from 'docs/src/components/landing/HeroBlock';
import LiveComponentShowcase from 'docs/src/components/landing/effects/LiveComponentShowcase';
import TrustLogoCloudBlock from 'docs/src/components/landing/TrustLogoCloudBlock';
import StatsBar from 'docs/src/components/landing/StatsBar';
import PlatformSuiteBlock from 'docs/src/components/landing/PlatformSuiteBlock';
import AIExperienceBlock from 'docs/src/components/landing/AIExperienceBlock';
import AdvancedComponentsGridBlock from 'docs/src/components/landing/AdvancedComponentsGridBlock';
import FinalCTABlock from 'docs/src/components/landing/FinalCTABlock';
import { heroConfig, metaConfig } from 'docs/src/components/landing/configs/homepageConfig';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title={metaConfig.title}
        description={metaConfig.description}
        card={metaConfig.card}
      >
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
      <AppHeader />
      <main id="main-content">
        <HeroBlock
          headline={heroConfig.headline}
          gradientText={heroConfig.gradientText}
          description={heroConfig.description}
          ctas={heroConfig.ctas}
          visual={<LiveComponentShowcase />}
        />
        <TrustLogoCloudBlock />
        <StatsBar />
        <Divider />
        <AdvancedComponentsGridBlock />
        <Divider />
        <AIExperienceBlock />
        <Divider />
        <PlatformSuiteBlock />
        <Divider />
        <FinalCTABlock />
        <Divider />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
