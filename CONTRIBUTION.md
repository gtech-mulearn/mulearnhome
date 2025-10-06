# Contribution Guidelines

Thank you for considering contributing to MuLearn Home!  
Please follow these guidelines to keep the project organized and maintainable.

---

## 🛠️ How to Contribute

1. **Fork the repository** and create your branch from `main`.

2. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd mulearnhome
   ```

3. **Install dependencies** if you haven't already:

   ```bash
   npm install
   ```

4. **Make your changes** in the appropriate folder:
   - **Pages/Routes:**  
     Add a new folder under `src/app` and a `page.tsx` file for each new route.
   - **Components:**  
     Place reusable UI elements (Navbar, Footer, etc.) in `src/components`.
   - **Static Data:**  
     Add or update all static datasets (navigation, team, values, etc.) only in `src/data/data.ts`.
   - **Services:**  
     Add API logic or asset management in `src/services`.  
     For asset URLs, use and update `src/services/cdn.ts`.
   - **Styles:**  
     Use Tailwind CSS in your components or add global styles in `src/app/globals.css`.

5. **Test your changes** locally:

   ```bash
   npm run dev
   ```

6. **Submit a pull request** into the **main** branch with a clear description of your changes.

---

## 📁 Folder Usage Reference

- **src/app/**: Page routes (each folder with `page.tsx` is a route)
- **src/components/**: Common UI components (Navbar, Footer, etc.)
- **src/data/data.ts**: All static data (navigation, team, values, etc.)
- **src/services/cdn.ts**: Centralized CDN asset URL logic

---

## 🌐 CDN Service

- Store all asset URLs and related logic in `src/services/cdn.ts`.
- Do not hardcode asset URLs in components/pages.

---

## 🎨 MuLearn UI Branding Rules

All UI components and pages must use the MuLearn color and font system:

- **Colors:**
  - Use only the root CSS variables defined in `src/app/globals.css`:
    - `--mulearn-trusty` (gradient)
    - `--mulearn-trusty-blue`
    - `--mulearn-duke-purple`
    - `--mulearn-greyish`
    - `--mulearn-blackish`
    - `--mulearn-whitish`
    - `--mulearn-gray-600` (for navigation and muted text)
  - Do not use hardcoded color values (e.g., #2E85FE, #AF2EE6, #666771) in components. Always use the root CSS variables for colors.
- **Fonts:**
  - Only use `Plus Jakarta Sans` (`font-sans`) and `Circe Rounded` (`font-display`)
  - No other font families are allowed
- **Components:**
  - Use shadcn/ui for all new UI components
  - Add MuLearn variants for buttons, cards, inputs, etc. using the color system
  - Document new variants in `src/components/ui/mulearn-shadcn-doc.md`

## 📝 Documentation

- All new components and variants must be documented in `mulearn-shadcn-doc.md`
- Update `README.md` with any major UI or branding changes

---

## 📝 Code Style

- Use TypeScript for all files.
- Use Tailwind CSS for styling.
- Follow existing patterns for imports and folder structure.

---

## 💬 Need Help?

Open an issue or start a discussion if you have questions!

---

Thank you for contributing to MuLearn Home!
