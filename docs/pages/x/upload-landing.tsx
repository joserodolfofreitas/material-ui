import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import UploadLanding from 'docs/src/components/landing/pages/UploadLanding';
import { uploadConfig } from 'docs/src/components/landing/configs/stubConfigs';

export default function UploadLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title={uploadConfig.meta.title}
        description={uploadConfig.meta.description}
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <UploadLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
