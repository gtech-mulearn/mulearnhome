# Contribution Guidelines

Thank you for considering contributing to MuLearn Home!  
Please follow these guidelines to keep the project organized and maintainable.

---

## ⚙️ Prerequisites

- **Node.js**: Version 20.0.0 or higher
- **Bun**: This project uses Bun as the package manager (version 1.2.17+)
  - Install Bun: `curl -fsSL https://bun.sh/install | bash` (Linux/macOS) or visit [bun.sh](https://bun.sh)
  - ⚠️ Using npm/yarn/pnpm will fail due to the preinstall check

---

## 🛠️ How to Contribute

### 1. Fork and Clone

Fork the repository and create your branch from `dev`:

```bash
git clone https://github.com/YOUR_USERNAME/mulearnhome.git
cd mulearnhome
git checkout dev
git checkout -b feat/your-feature-name
```

### 2. Install Dependencies

**Important:** This project requires Bun. npm/yarn/pnpm will not work.

```bash
bun install
```

### 3. Environment Setup

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

**Required environment variables:**

- See `.env.example` for all required variables
- Fill in actual values for your local development
- Never commit `.env.local` to version control
- See [README Environment Variables section](README.md#-environment-variables-management) for detailed setup

### 4. Make Your Changes

Follow the project structure and guidelines:

#### **Pages/Routes**

- Add folders under `src/app` with `page.tsx` files
- Each folder becomes a route (e.g., `src/app/about/page.tsx` → `/about`)

#### **Components**

- Place reusable UI in `src/components`
- Use shadcn/ui components with MuLearn variants

#### **Static Data**

- All static data must be in `src/data` folder
- Export data from appropriate files (e.g., `home.ts`, `team.ts`)

#### **Services**

- Business logic goes in `src/services`
- Use `cdn.ts` for asset URL management
- API client code in `apiGateway.ts`

#### **API Routes**

- Add server endpoints in `src/app/api`
- Use `serverEnv` from `@/lib/env/env.server` for secrets
- Never expose server secrets to client

#### **Environment Variables**

- **Server-side secrets:** Import from `@/lib/env/env.server`
- **Client-side public vars:** Import from `@/lib/env/env.client`
- **Never** use `process.env` directly (Biome will catch this)

#### **Styles**

- Use Tailwind CSS for all styling
- Global styles in `src/app/globals.css`
- Follow MuLearn color and font system (see below)

### 5. Test Your Changes

```bash
# Run dev server (with Turbopack)
bun run dev

# Type check
bun run typecheck

# Lint and format (uses Biome)
bun run lint
bun run lint:fix
bun run format

# Run all validation checks
bun run validate

# Build for production
bun run build
```

### 6. Commit Your Changes

This project uses **Conventional Commits** with commitlint enforced via Husky.

**Commit Format:**

```
type(scope): subject

body (optional)

footer (optional)
```

**Allowed Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code formatting (no logic change)
- `refactor`: Code restructuring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Maintenance tasks
- `build`: Build system changes
- `ci`: CI configuration
- `revert`: Revert previous commit

**Commit Rules:**

- ✅ Type must be lowercase
- ✅ Subject must be lowercase
- ✅ Subject: 3-72 characters
- ✅ No period at end of subject
- ✅ Header max 100 characters
- ✅ Body lines max 100 characters

**Good Examples:**

```bash
git commit -m "feat: add donation success page with receipt download"
git commit -m "fix: resolve navigation menu overflow on mobile devices"
git commit -m "docs: update environment variable setup instructions"
git commit -m "refactor: migrate to centralized env validation system"
git commit -m "style: format code with biome"
```

**Bad Examples:**

```bash
git commit -m "Add feature"  # ❌ No type
git commit -m "Feat: Add feature"  # ❌ Type not lowercase
git commit -m "feat: Add Feature"  # ❌ Subject not lowercase
git commit -m "feat: add."  # ❌ Period at end
git commit -m "feat: ab"  # ❌ Subject too short
```

### 7. Submit a Pull Request

- Push your branch to your fork
- Create a PR against the **`dev`** branch (not `main`)
- Provide a clear, detailed description of your changes
- Link any related issues using `Fixes #123` or `Closes #456`
- Ensure all CI checks pass before requesting review
- Respond to review feedback promptly

---

## 📁 Project Structure

```
mulearnhome/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── api/          # API routes
│   │   └── [route]/      # Other pages
│   ├── components/       # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── data/             # Static data exports
│   ├── lib/              # Utilities and helpers
│   │   └── env/          # Environment variable validation
│   └── services/         # Business logic and API clients
├── public/               # Static assets
├── .env.example          # Environment variable template
├── .env.local            # Your local env (not committed)
├── biome.json            # Biome linter/formatter config
├── commitlint.config.js  # Commit message linting
└── tsconfig.json         # TypeScript configuration
```

---

## 🌐 CDN Service

- All asset URLs must use `src/services/cdn.ts`
- Do not hardcode asset URLs in components/pages
- Use `cdnUrl("path/to/asset")` helper function

**Example:**

```tsx
import { cdnUrl } from "@/services/cdn";

<img src={cdnUrl("images/logo.png")} alt="Logo" />
```

---

## 🔐 Environment Variables

This project uses a **production-grade environment variable system** with Zod validation.

### Server-Side Secrets (Backend Only)

```tsx
// In API routes, server components, server actions
import { serverEnv } from "@/lib/env/env.server";

const githubToken = serverEnv.GH_TOKEN;
const tinaToken = serverEnv.TINA_TOKEN;
```

### Client-Side Public Variables

```tsx
// In React components, hooks, client code
import { clientEnv } from "@/lib/env/env.client";

const apiUrl = clientEnv.NEXT_PUBLIC_API_BASE_URL;
const cdnUrl = clientEnv.NEXT_PUBLIC_CDN_URL;
```

### Adding New Environment Variables

1. **For client-side variables** (safe to expose):
   - Prefix with `NEXT_PUBLIC_`
   - Add to `.env.local` and `.env.example`
   - Add to schema in `src/lib/env/env.client.ts`
   - Import from `@/lib/env/env.client`

2. **For server-side secrets** (never expose):
   - No `NEXT_PUBLIC_` prefix
   - Add to `.env.local` and `.env.example`
   - Add to schema in `src/lib/env/env.server.ts`
   - Import from `@/lib/env/env.server`

**Important:**

- ❌ Never use `process.env` directly (Biome will prevent this)
- ❌ Never import `serverEnv` in client code
- ✅ Always use the validated env utilities

---

## 🎨 MuLearn UI Branding Rules

All UI must follow the MuLearn brand identity. **Strict enforcement.**

### Color System

Use **only** the CSS variables defined in `src/app/globals.css`:

**Primary Colors:**

- `--mulearn` - #0961F5;
- `--mulearn-trusty` - Gradient (blue to purple)
- `--mulearn-trusty-blue` - #2E85FE
- `--mulearn-duke-purple` - #AF2EE6

**Neutral Colors:**

- `--mulearn-greyish` - #c4c4c4
- `--mulearn-blackish` - #1a1a1a
- `--mulearn-whitish` - #fefefe
- `--mulearn-gray-600` - #666771 (navigation/muted text)

**Usage in Tailwind:**

```tsx
<div className="bg-mulearn text-mulearn-whitish">
<h1 className="text-mulearn-trusty-blue">
<Button variant="mulearn">Click Me</Button>
```

**❌ Never:**

```tsx
<div className="bg-[#2E85FE]">  {/* Hardcoded color */}
<div style={{ color: '#AF2EE6' }}>  {/* Inline style with hex */}
```

### Font System

Use **only** these font families:

- **`font-sans`** - Plus Jakarta Sans (body text, UI)
- **`font-display`** - Poppins (headings, display text)

**Example:**

```tsx
<h1 className="font-display text-4xl">Heading</h1>
<p className="font-sans">Body text</p>
```

### Component Library

- Use **shadcn/ui** for all UI components
- Add MuLearn variants using the color system
- Document new variants in `src/components/ui/mulearn-shadcn-doc.md`

**Example Button Usage:**

```tsx
import { Button } from "@/components/ui/button";

<Button variant="mulearn">MuLearn Gradient</Button>
<Button variant="outline">Outline</Button>
```

---

## 📝 Code Style

### TypeScript

- Use TypeScript for all files
- Enable strict type checking
- Define proper interfaces/types
- Avoid `any` - use `unknown` if needed

### React

- Use functional components with hooks
- Use `"use client"` directive for client components
- Server components by default (no directive needed)
- Proper error boundaries

### Imports

- Use absolute imports with `@/` alias
- Group imports: React → External → Internal
- No unused imports (Biome will catch this)

### File Naming

- Components: PascalCase (`MyComponent.tsx`)
- Utilities: camelCase (`myUtil.ts`)
- Pages: lowercase (`page.tsx`, `layout.tsx`)

---

## 🧪 Testing

When adding features, consider:

- Type safety (TypeScript)
- Linting (Biome)
- Build success (`bun run build`)
- Manual testing in dev mode

---

## 📖 Documentation

When making changes:

- Update `README.md` for major features
- Document components in `mulearn-shadcn-doc.md`
- Add JSDoc comments for complex functions
- Update `.env.example` for new environment variables

---

## 💬 Need Help?

- Open an issue for bugs or questions
- Start a discussion for feature ideas
- Check existing issues before creating new ones
- Be respectful and follow the code of conduct

---

## 📜 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to MuLearn Home! 🚀
