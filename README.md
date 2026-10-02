# The Curiosity Vault

A premium, interactive editorial web app containing 30 curiosity-driven stories, 10 quizzes, saved discoveries, local progress, and connected rabbit holes.

## 1. Install

This project uses TypeScript and the browser platform with no runtime framework dependency. Node.js 20+ is recommended (and required by the package engine setting).

```bash
npm install
```

There are no third-party runtime packages required for the app itself.

## 2. Run locally

A small built-in SPA preview server is included:

```bash
npm run build
node scripts/spa-server.mjs
```

Open `http://localhost:4173`. You can also serve `dist/` with any static web server that supports the SPA fallback.

## 3. Build

```bash
npm run build
```

The production-ready static site is written to `dist/`.

## 4. Preview production

```bash
node scripts/spa-server.mjs
```

Open `http://localhost:4173`.

## 5. Deploy to Vercel

Import the repository into Vercel. Use:

- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` rewrites application routes to `index.html` for client-side routing.

## 6. Deploy to Netlify

Import the repository into Netlify. The included `netlify.toml` sets the build command, publish directory, and SPA fallback automatically.

## 7. Add a new story

Add a `Story` object to `src/data/stories.ts`. Give it a unique `slug`, a valid `category`, a `visual` key, an interaction, source records, and existing story slugs for `rabbitHole` / `related`.

The UI is data-driven, so Story #31 does not require markup changes.

## 8. Add a new quiz

Add a `Quiz` object to `src/data/quizzes.ts`, with answer options, the correct answer index, and an explanation for each question.

## 9. Add a rabbit hole

Set a story's `rabbitHole` to an ordered array of existing story slugs. The rabbit-hole page follows those story records dynamically and displays the chain.

## Testing

Run:

```bash
npm test
```

For browser-level UI validation in the development environment, run:

```bash
node scripts/test-browser-harness.mjs
```

The content/server tests validate the complete data graph, 30 story routes, 10 quiz routes, all rabbit-hole routes, SPA fallback, asset delivery, and production build output. The Chromium harness renders the actual application bundle and exercises all 30 story interactions, all 10 quizzes, saving, search/filtering, Random Drop, rabbit holes, the mobile menu, browser-level exception capture, and the required viewport sizes.
