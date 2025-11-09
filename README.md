# Pokémon Browser

Small React application that consumes the public [PokéAPI](https://pokeapi.co/) to display a paginated list of Pokémon and show per-Pokémon details.

## Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (JavaScript)
- Fetch API for network requests
- CSS modules via the default Vite tooling

## Features

- Paginated Pokémon list 
- “View Details” button to load a Pokémon's name, id, weight, and sprite
- Inline detail panel with loading and error states

## Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# run production build
npm run build

# preview production build locally
npm run preview
```

The build output is written to the `dist/` directory. Deploy the files in `dist/` to any static host (GitHub Pages, Netlify, Vercel, etc.).

## Environment Notes

The project targets modern browsers and does not require additional environment variables. Ensure outbound HTTP requests to `https://pokeapi.co/` are permitted from the deployment environment.
