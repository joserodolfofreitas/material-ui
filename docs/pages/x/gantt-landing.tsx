import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import GanttLanding from 'docs/src/components/landing/pages/GanttLanding';
import { ganttConfig } from 'docs/src/components/landing/configs/stubConfigs';

export default function GanttLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head title={ganttConfig.meta.title} description={ganttConfig.meta.description} />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <GanttLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
