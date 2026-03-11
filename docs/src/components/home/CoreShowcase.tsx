import * as React from 'react';
import { CssVarsProvider } from '@mui/material/styles';
import { HighlightedCode } from '@mui/docs/HighlightedCode';
import MaterialDesignDemo, { componentCode } from 'docs/src/components/home/MaterialDesignDemo';
import ShowcaseContainer, { ShowcaseCodeWrapper } from 'docs/src/components/home/ShowcaseContainer';
import PointerContainer, { Data } from 'docs/src/components/home/ElementPointer';
import MoreInfoBox from 'docs/src/components/action/MoreInfoBox';
import MaterialVsCustomToggle from 'docs/src/components/action/MaterialVsCustomToggle';
import FlashCode from 'docs/src/components/animation/FlashCode';
import ROUTES from 'docs/src/route';
import {
  type ThemeRecipe,
  getThemeFromRecipe,
} from 'docs/src/components/home/MaterialDesignComponents';

const lineMapping: Record<string, number | number[]> = {
  card: [0, 20],
  cardmedia: [1, 5],
  stack: [6, 19],
  stack2: [7, 16],
  typography: 8,
  stack3: [9, 16],
  chip: [10, 14],
  rating: 15,
  switch: 18,
};

export default function CoreShowcase() {
  const [element, setElement] = React.useState<Data>({ id: null, name: null, target: null });
  const [recipe, setRecipe] = React.useState<ThemeRecipe>('brand');
  const theme = React.useMemo(() => getThemeFromRecipe(recipe), [recipe]);
  const highlightedLines = element.id ? lineMapping[element.id] : null;
  let startLine;
  let endLine;
  if (highlightedLines !== null) {
    startLine = Array.isArray(highlightedLines) ? highlightedLines[0] : highlightedLines;
    endLine = Array.isArray(highlightedLines) ? highlightedLines[1] : startLine;
  }

  return (
    <ShowcaseContainer
      preview={
        <CssVarsProvider theme={theme}>
          <PointerContainer
            onElementChange={setElement}
            sx={{ minWidth: 300, width: '100%', maxWidth: '100%' }}
          >
            <MaterialDesignDemo />
          </PointerContainer>
        </CssVarsProvider>
      }
      code={
        <React.Fragment>
          <MaterialVsCustomToggle recipe={recipe} setRecipe={setRecipe} />
          <ShowcaseCodeWrapper maxHeight={320} hasDesignToggle>
            {startLine !== undefined && (
              <FlashCode startLine={startLine} endLine={endLine} sx={{ m: 1, mt: 7 }} />
            )}
            <HighlightedCode copyButtonHidden code={componentCode} language="jsx" plainStyle />
          </ShowcaseCodeWrapper>
          <MoreInfoBox
            primaryBtnLabel="Start with Material UI"
            primaryBtnHref={ROUTES.materialDocs}
            secondaryBtnLabel="View all components"
            secondaryBtnHref={ROUTES.materialAllComponents}
          />
        </React.Fragment>
      }
    />
  );
}
