import * as React from 'react';
import Divider from '@mui/material/Divider';
import AccountTreeRounded from '@mui/icons-material/AccountTreeRounded';
import LinkRounded from '@mui/icons-material/LinkRounded';
import ViewTimelineRounded from '@mui/icons-material/ViewTimelineRounded';
import DragIndicatorRounded from '@mui/icons-material/DragIndicatorRounded';
import FlagRounded from '@mui/icons-material/FlagRounded';
import TroubleshootRounded from '@mui/icons-material/TroubleshootRounded';
import ZoomInRounded from '@mui/icons-material/ZoomInRounded';
import EngineeringRounded from '@mui/icons-material/EngineeringRounded';
import PrecisionManufacturingRounded from '@mui/icons-material/PrecisionManufacturingRounded';
import ConstructionRounded from '@mui/icons-material/ConstructionRounded';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import LandingComponentNav from 'docs/src/components/landing/LandingComponentNav';
import StubLandingBlock from 'docs/src/components/landing/StubLandingBlock';
import { ganttConfig } from 'docs/src/components/landing/configs/stubConfigs';

const highlightIcons = [
  <LinkRounded key="deps" />,
  <ViewTimelineRounded key="views" />,
  <DragIndicatorRounded key="dnd" />,
  <FlagRounded key="milestones" />,
  <TroubleshootRounded key="critical" />,
  <ZoomInRounded key="zoom" />,
];

const useCaseIcons = [
  <EngineeringRounded key="project" />,
  <PrecisionManufacturingRounded key="mfg" />,
  <ConstructionRounded key="construction" />,
];

export default function GanttLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={ganttConfig.hero.title}
        gradientText={ganttConfig.hero.gradientText}
        description={ganttConfig.hero.description}
        status={ganttConfig.hero.status}
        ctas={[
          { label: 'Follow updates', href: '/blog/', variant: 'outlined' },
          {
            label: 'Start building',
            href: '/material-ui/getting-started/',
            variant: 'outlined',
            color: 'primary',
          },
        ]}
      />
      <LandingComponentNav activeId="gantt" />
      <Divider />
      <StubLandingBlock
        title={ganttConfig.hero.title}
        description={ganttConfig.hero.description}
        status={ganttConfig.hero.status}
        plannedHighlights={ganttConfig.plannedHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <AccountTreeRounded />,
        }))}
        useCases={ganttConfig.useCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <AccountTreeRounded />,
        }))}
      />
    </React.Fragment>
  );
}
