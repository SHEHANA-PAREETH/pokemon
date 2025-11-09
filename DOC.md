# Pokémon Browser – Delivery Notes

## Framework / Tooling
- **Frontend:** React 18 with Vite build tooling (`npm create vite@latest` – React + JavaScript template).
- **Styling:** Plain CSS (single global stylesheet `src/index.css`).
- **Data Source:** Public PokéAPI (`https://pokeapi.co/`).

## Getting Started from GitHub

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git pokemon-browser
   cd pokemon-browser
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   Vite serves the app at `http://localhost:5173` by default.

4. **Create a production build**
   ```bash
   npm run build
   ```
   The optimized output is generated in the `dist/` directory. You can deploy the contents of `dist/` to any static host (for example GitHub Pages, Netlify, Vercel).

5. **Preview the production build locally (optional)**
   ```bash
   npm run preview
   ```

> Replace `https://github.com/<your-username>/<your-repo>.git` with the actual repository URL once the project is pushed to GitHub.

