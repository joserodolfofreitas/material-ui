import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import ChatboxLanding from 'docs/src/components/landing/pages/ChatboxLanding';
import { chatboxConfig } from 'docs/src/components/landing/configs/stubConfigs';

export default function ChatboxLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head title={chatboxConfig.meta.title} description={chatboxConfig.meta.description} />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <ChatboxLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
