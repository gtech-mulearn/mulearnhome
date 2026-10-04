# MuLearn shadcn/ui Component System

## Brand Colors & Gradients

All components use the following CSS variables (defined in `globals.css`):

```css
:root {
  --mulearn: #0961F5;
  --mulearn-trusty: linear-gradient(135deg, #2e85fe 0%, #af2ee6 100%);
  --mulearn-trusty-blue: #2e85fe;
  --mulearn-duke-purple: #af2ee6;
  --mulearn-greyish: #c4c4c4;
  --mulearn-blackish: #1a1a1a;
  --mulearn-whitish: #fefefe;
}
```

## Fonts

- **Plus Jakarta Sans**: Used for all body and UI text (`font-sans`)
- **Bricolage Grotesque**: Used for headings and display text (`font-display`)
- **Black Ops One**: Used sparingly for special display treatments (`font-blackopsone`)

## Component Usage

### Button

```tsx
<Button variant="mulearn">MuLearn Button</Button>
<Button variant="outline">Outline Button</Button>
<Button variant="purple">Purple Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

### Card

```tsx
<Card className="bg-mulearn-trusty text-mulearn-whitish">...</Card>
```

### Input

```tsx
<Input className="border-mulearn-trusty" />
```

## How to Add New Components

- Use only the defined color variables and gradients.
- Use only `font-sans` or `font-display` for font-family.
- File names in this folder must be **kebab-case** (`logo-loop.tsx`, not `LogoLoop.tsx`) —
  enforced repo-wide by Biome's `useFilenamingConvention` rule.
- New components go directly in `src/components/ui/` (flat, no subfolders) alongside the
  existing shadcn primitives (`button.tsx`, `card.tsx`, `dialog.tsx`, etc).
- Document new variants in this file.

## Contribution Guidelines

- See `CONTRIBUTION.md` for details on adding new MuLearn-branded components.
- All new UI must use the MuLearn color and font system.
