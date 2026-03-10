import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import SchedulerLanding from 'docs/src/components/landing/pages/SchedulerLanding';
import { metaConfig } from 'docs/src/components/landing/configs/schedulerConfig';

export default function SchedulerLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head title={metaConfig.title} description={metaConfig.description} />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <SchedulerLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
