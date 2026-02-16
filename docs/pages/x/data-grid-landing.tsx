import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import DataGridLanding from 'docs/src/components/landing/pages/DataGridLanding';
import { metaConfig } from 'docs/src/components/landing/configs/dataGridConfig';

export default function DataGridLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title={metaConfig.title}
        description={metaConfig.description}
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <DataGridLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x-data-grid" />
    </BrandingCssVarsProvider>
  );
}
