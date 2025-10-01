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

6. **Submit a pull request** with a clear description of your changes.

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

## 🎨 Brand Guide

- Please refer to the [MuLearn Brand Guide](https://mulearn.org/r/brandguide) for colors, logos, and branding assets.
- Ensure all UI and assets follow the official brand guidelines.

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
