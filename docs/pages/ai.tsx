import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import AILanding from 'docs/src/components/landing/pages/AILanding';
import { metaConfig } from 'docs/src/components/landing/configs/aiPageConfig';

export default function AIPage() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title={metaConfig.title}
        description={metaConfig.description}
      />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <AILanding />
      </main>
      <AppFooter />
    </BrandingCssVarsProvider>
  );
}
