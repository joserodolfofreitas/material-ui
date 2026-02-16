import * as React from 'react';
import Divider from '@mui/material/Divider';
import CloudUploadRounded from '@mui/icons-material/CloudUploadRounded';
import FileUploadRounded from '@mui/icons-material/FileUploadRounded';
import CheckCircleRounded from '@mui/icons-material/CheckCircleRounded';
import ImageRounded from '@mui/icons-material/ImageRounded';
import QueueRounded from '@mui/icons-material/QueueRounded';
import FolderRounded from '@mui/icons-material/FolderRounded';
import PhotoLibraryRounded from '@mui/icons-material/PhotoLibraryRounded';
import AttachFileRounded from '@mui/icons-material/AttachFileRounded';
import ComponentHeroBlock from 'docs/src/components/landing/ComponentHeroBlock';
import StubLandingBlock from 'docs/src/components/landing/StubLandingBlock';
import { uploadConfig } from 'docs/src/components/landing/configs/stubConfigs';

const highlightIcons = [
  <FileUploadRounded key="dnd" />,
  <CheckCircleRounded key="progress" />,
  <ImageRounded key="preview" />,
  <QueueRounded key="multi" />,
];

const useCaseIcons = [
  <FolderRounded key="docs" />,
  <PhotoLibraryRounded key="media" />,
  <AttachFileRounded key="form" />,
];

export default function UploadLanding() {
  return (
    <React.Fragment>
      <ComponentHeroBlock
        title={uploadConfig.hero.title}
        gradientText={uploadConfig.hero.gradientText}
        description={uploadConfig.hero.description}
        status={uploadConfig.hero.status}
        ctas={[
          { label: 'Follow updates', href: '/blog/', variant: 'outlined' },
          { label: 'Start building', href: '/material-ui/getting-started/', variant: 'outlined', color: 'primary' },
        ]}
      />
      <Divider />
      <StubLandingBlock
        title={uploadConfig.hero.title}
        description={uploadConfig.hero.description}
        status={uploadConfig.hero.status}
        plannedHighlights={uploadConfig.plannedHighlights.map((h, i) => ({
          ...h,
          icon: highlightIcons[i] || <CloudUploadRounded />,
        }))}
        useCases={uploadConfig.useCases.map((uc, i) => ({
          ...uc,
          icon: useCaseIcons[i] || <CloudUploadRounded />,
        }))}
      />
    </React.Fragment>
  );
}
