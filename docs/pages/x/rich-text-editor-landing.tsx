import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import RichTextEditorLanding from 'docs/src/components/landing/pages/RichTextEditorLanding';
import { richTextEditorConfig } from 'docs/src/components/landing/configs/stubConfigs';

export default function RichTextEditorLandingPage() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title={richTextEditorConfig.meta.title}
        description={richTextEditorConfig.meta.description}
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/mui/mui-x" />
      <main id="main-content">
        <RichTextEditorLanding />
      </main>
      <AppFooter stackOverflowUrl="https://stackoverflow.com/questions/tagged/mui-x" />
    </BrandingCssVarsProvider>
  );
}
