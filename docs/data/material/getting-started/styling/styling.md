# Styling presets

<p class="description">This page describes the desired end-state styling architecture: primitives first, style presets second, convenience packages on top.</p>

The goal is to let teams choose how much built-in styling they want.

In the desired end-state:

- **primitive packages do not ship Material styling by default**
- **Material is an opt-in preset**
- **MD3 is an opt-in preset**
- **your own brand is an opt-in preset**
- **external CSS systems such as Tailwind work without first undoing a heavy default visual layer**

The live demos on this page preview a few possible presets:

- **Material Design**
- **Material Design 3**
- **Your brand**
- **Brutalism**

{{"component": "modules/components/ThemeRecipePlayground.js"}}

## Desired architecture

The intended layering model is:

1. **Primitives**

   Ship behavior, accessibility, state management, slot structure, and layout semantics.
   They should not impose a strong visual identity by default.

2. **Style presets**

   Presets provide the visual language:
   - Material Design
   - Material Design 3
   - your own brand
   - experimental presets, like brutalism

3. **Convenience packages**

   Batteries-included packages can still exist for teams that want the default experience immediately.
   For example, a Material package can simply wire the primitives to the Material preset for you.

## What is a preset?

A preset is the visual implementation layer you attach to low-style primitives.

It is more than a palette, because it also defines how tokens map onto slots, variants, and states.
But it is less than the full primitive implementation, because the primitive layer should still own behavior, accessibility, and structure.

Conceptually, a preset would look like this:

```ts
const materialPreset = {
  tokens: {
    color: { primary: '#1976d2' },
    radius: { sm: 8, md: 12, lg: 20 },
    shadow: { sm: '0px 1px 2px rgba(0,0,0,0.12)' },
  },
  components: {
    Button: {
      variants: {
        contained: {
          root: {
            borderRadius: '999px',
          },
        },
        outlined: {
          root: {
            borderWidth: '1px',
          },
        },
      },
    },
    TextField: {
      slots: {
        root: { borderRadius: 16 },
        input: { paddingBlock: 12 },
        label: { fontWeight: 500 },
      },
      states: {
        focused: {
          root: { outlineColor: 'var(--preset-color-primary)' },
        },
      },
    },
  },
};
```

The exact API is open to discussion, but the important part is the responsibility split:

- primitives own behavior and structure
- presets own visual language
- convenience packages wire a preset in for users who want the default experience

## What "one line" means

Teams who want Material styling should not have to manually recreate it.
The ideal developer experience is that primitives stay low-style, while applying a preset is effectively a one-line choice:

```tsx
<StylePresetProvider preset={materialPreset}>{children}</StylePresetProvider>
```

or:

```tsx
const theme = createTheme({
  preset: materialPreset,
});
```

The exact API can vary, but the principle should hold:

- primitives are not visually locked to Material
- Material is easy to opt into
- switching to MD3 or your own brand does not require undoing Material first

## Why this model

This architecture solves the main pain points with override-heavy styling:

- teams building a custom brand do not need to fight Material defaults
- MD3 becomes another preset instead of a deep mutation of Material Design 2
- Tailwind and other external CSS systems become more feasible
- the docs can explain styling as composition, not as an override strategy

## Current state vs target state

### Target state

Primitives ship minimal styling, and visual identity is layered in with presets.

### Current state

`@mui/material` still ships a built-in styling layer today.
That means the current package is not fully headless yet.

This page documents the architecture we want to move toward, while the demos illustrate the kinds of preset-level outcomes that architecture should support.

## Common presets

### Material Design

Use the Material preset when you want the default Material look and the fastest path to production.

In the desired architecture, this would be opt-in rather than baked into the primitive layer:

```tsx
import { StylePresetProvider } from '@mui/primitives/styles';
import { materialPreset } from '@mui/material/styles';

export default function App() {
  return <StylePresetProvider preset={materialPreset}>...</StylePresetProvider>;
}
```

### Material Design 3

Use an MD3 preset when you want tonal surfaces, larger shapes, and updated component treatments, but still want the same component APIs and primitive behavior underneath.

MD3 should be modeled as a preset first.
In practice, some components may still need preset-owned implementations if the desired structure or behavior diverges too far from the Material version.

```tsx
import { StylePresetProvider } from '@mui/primitives/styles';
import { md3Preset } from '@mui/material-md3/styles';

export default function App() {
  return <StylePresetProvider preset={md3Preset}>...</StylePresetProvider>;
}
```

### Your own brand

Use a brand preset when you want MUI's interaction model and accessibility, but you want the look and feel to come entirely from your own tokens and component presets.

```tsx
import { StylePresetProvider } from '@mui/primitives/styles';
import { createBrandPreset } from './brandPreset';

const brandPreset = createBrandPreset({
  color: '#0057FF',
  radius: 20,
});

export default function App() {
  return <StylePresetProvider preset={brandPreset}>...</StylePresetProvider>;
}
```

### Brutalism

Use a brutalist preset when you want to demonstrate that the same component APIs can support a much harsher visual language with square corners, hard borders, and offset shadows.

This is included here mainly to prove that the primitive layer should not be visually coupled to Material.

## External CSS and Tailwind

If you want to keep MUI's behavior but do most of the visual work in Tailwind or another CSS framework, the primitive-first model is the best fit.

In the current implementation, the best bridge is still [CSS layers](/material-ui/customization/css-layers/), because `@mui/material` ships styles today and utility classes need a predictable cascade order.

```tsx
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

export default function App() {
  return (
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      {/* app */}
    </StyledEngineProvider>
  );
}
```

In the target architecture, teams should also be able to style slots directly with `className`, `slotProps`, and external CSS without first overriding a strong default theme.

## Important nuance

Not every component will fit preset-only styling equally well.

- Many components can likely be preset-driven.
- Some richer inputs and composites may need preset-owned implementations.

`TextField`, `Select`, and `Autocomplete` are the kinds of components where structure, focus treatment, labels, and state layers may push beyond simple token swaps.

That does not change the desired consumer model:

- primitives stay low-style
- presets remain opt-in
- convenience packages wire presets in for you

## How to evaluate proposals

When comparing implementation options, use these questions:

- Does the primitive layer ship unnecessary Material styling?
- Can Material be enabled with a one-line preset choice?
- Can MD3 be introduced without first undoing Material?
- Can a product team build its own brand without an override war?
- Can Tailwind or another CSS system style the component without relying on brittle specificity tricks?

## Related guides

- [Installation](/material-ui/getting-started/installation/)
- [Usage](/material-ui/getting-started/usage/)
- [Theming](/material-ui/customization/theming/)
- [How to customize](/material-ui/customization/how-to-customize/)
- [CSS layers](/material-ui/customization/css-layers/)
