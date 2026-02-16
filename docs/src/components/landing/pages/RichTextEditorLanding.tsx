import * as React from 'react';
import Divider from '@mui/material/Divider';
import EditNoteRounded from '@mui/icons-material/EditNoteRounded';
import FormatBoldRounded from '@mui/icons-material/FormatBoldRounded';
import ExtensionRounded from '@mui/icons-material/ExtensionRounded';
import PermMediaRounded from '@mui/icons-material/PermMediaRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';
import GroupsRounded from '@mui/icons-material/GroupsRounded';
import ArticleRounded from '@mui/icons-material/ArticleRounded';
import DescriptionRounded from '@mui/icons-material/DescriptionRounded';
import EmailRounded from '@mui/icons-material/EmailRounded';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import StubLandingBlock from 'docs/src/components/landing/StubLandingBlock';
import { richTextEditorConfig } from 'docs/src/components/landing/configs/stubConfigs';

const highlightIcons = [
  <FormatBoldRounded key="format" />,
  <ExtensionRounded key="plugin" />,
  <PermMediaRounded key="media" />,
  <CodeRounded key="markdown" />,
  <GroupsRounded key="collab" />,
];

const useCaseIcons = [
  <ArticleRounded key="cms" />,
  <DescriptionRounded key="docs" />,
  <EmailRounded key="email" />,
];

export default function RichTextEditorLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={richTextEditorConfig.hero.title}
        gradientText={richTextEditorConfig.hero.gradientText}
        description={richTextEditorConfig.hero.description}
        status={richTextEditorConfig.hero.status}
        ctas={[
          { label: 'Follow updates', href: '/blog/', variant: 'outlined' },
          { label: 'Start building', href: '/material-ui/getting-started/', variant: 'outlined', color: 'primary' },
        ]}
      />
      <Divider />
      <StubLandingBlock
        title={richTextEditorConfig.hero.title}
        description={richTextEditorConfig.hero.description}
        status={richTextEditorConfig.hero.status}
        plannedHighlights={richTextEditorConfig.plannedHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <EditNoteRounded />,
        }))}
        useCases={richTextEditorConfig.useCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <EditNoteRounded />,
        }))}
      />
    </React.Fragment>
  );
}
