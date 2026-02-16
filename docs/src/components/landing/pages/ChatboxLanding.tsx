import * as React from 'react';
import Divider from '@mui/material/Divider';
import ChatBubbleOutlineRounded from '@mui/icons-material/ChatBubbleOutlineRounded';
import StreamRounded from '@mui/icons-material/StreamRounded';
import ViewListRounded from '@mui/icons-material/ViewListRounded';
import HistoryRounded from '@mui/icons-material/HistoryRounded';
import EditRounded from '@mui/icons-material/EditRounded';
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded';
import InvertColorsRounded from '@mui/icons-material/InvertColorsRounded';
import SmartToyRounded from '@mui/icons-material/SmartToyRounded';
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded';
import ForumRounded from '@mui/icons-material/ForumRounded';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import StubLandingBlock from 'docs/src/components/landing/StubLandingBlock';
import { chatboxConfig } from 'docs/src/components/landing/configs/stubConfigs';

const highlightIcons = [
  <StreamRounded key="stream" />,
  <ViewListRounded key="render" />,
  <HistoryRounded key="history" />,
  <EditRounded key="input" />,
  <AccessibilityNewRounded key="a11y" />,
  <InvertColorsRounded key="theme" />,
];

const useCaseIcons = [
  <SmartToyRounded key="ai" />,
  <SupportAgentRounded key="support" />,
  <ForumRounded key="collab" />,
];

export default function ChatboxLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={chatboxConfig.hero.title}
        gradientText={chatboxConfig.hero.gradientText}
        description={chatboxConfig.hero.description}
        status={chatboxConfig.hero.status}
        ctas={[
          { label: 'Try the Alpha', href: '/x/react-chatbox/', variant: 'contained' },
          { label: 'View documentation', href: '/x/react-chatbox/getting-started/', variant: 'outlined', color: 'secondary' },
        ]}
      />
      <Divider />
      <StubLandingBlock
        title={chatboxConfig.hero.title}
        description={chatboxConfig.hero.description}
        status={chatboxConfig.hero.status}
        plannedHighlights={chatboxConfig.plannedHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <ChatBubbleOutlineRounded />,
        }))}
        useCases={chatboxConfig.useCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <ChatBubbleOutlineRounded />,
        }))}
      />
    </React.Fragment>
  );
}
