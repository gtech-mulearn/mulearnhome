# MuLearn shadcn/ui Component System

## Brand Colors & Gradients

All components use the following CSS variables (defined in `globals.css`):

```css
:root {
  --mulearn-trusty: linear-gradient(135deg, #2E85FE 0%, #AF2EE6 100%);
  --mulearn-trusty-blue: #2E85FE;
  --mulearn-duke-purple: #AF2EE6;
  --mulearn-greyish: #c4c4c4;
  --mulearn-blackish: #1a1a1a;
  --mulearn-whitish: #fefefe;
}
```

## Fonts

- **Plus Jakarta Sans**: Used for all body and UI text (`font-sans`)
- **Circe Rounded**: Used for headings and display text (`font-display`)

## Component Usage

### Button

```tsx
<Button variant="mulearn">MuLearn Gradient Button</Button>
<Button variant="mulearn-outline">Outline Button</Button>
<Button variant="mulearn-purple">Purple Button</Button>
<Button variant="mulearn-ghost">Ghost Button</Button>
```

### Card

```tsx
<Card className="bg-[var(--mulearn-trusty)] text-[var(--mulearn-whitish)]">...</Card>
```

### Input

```tsx
<Input className="border-[var(--mulearn-trusty)]" />
```

## How to Add New Components

- Use only the defined color variables and gradients.
- Use only `font-sans` or `font-display` for font-family.
- Document new variants in this file.

## Contribution Guidelines

- See `CONTRIBUTION.md` for details on adding new MuLearn-branded components.
- All new UI must use the MuLearn color and font system.
