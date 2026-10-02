# The Curiosity Vault — Test Report

## Passed

- Production build: `npm run build` — PASS
- Content integrity: exactly 30 stories, exactly 10 quizzes, unique slugs/IDs, valid story/quiz references, 45 source records, no placeholder/TODO copy — PASS
- Production SPA server: 75 application routes (home, Vault, Saved, Quizzes, all 30 story routes, all 10 quiz routes, all 30 rabbit-hole routes, plus an unknown route) and required assets returned HTTP 200 with SPA fallback — PASS
- Browser-level Chromium harness: actual compiled application bundle rendered and exercised — PASS
- All 30 story routes: title, interactive surface, and the interaction itself tested — PASS
- All 10 quizzes: every quiz rendered; all three questions per quiz were answered; feedback and completion state tested — PASS
- Random Drop: opens a real story route — PASS
- Search: title matching tested — PASS
- Category filter: Science filter tested — PASS
- Saved discoveries: save state persisted through the browser storage interface and appeared in Saved — PASS
- Rabbit holes: chain rendering and navigation tested — PASS
- Mobile navigation menu: open/expanded state tested — PASS
- Responsive layout: 375x812, 390x844, 414x896, 1024x1366, 1280x900, 1440x900, 1920x1080 — PASS
- Horizontal overflow check at all listed viewports — PASS
- Desktop navigation visibility check — PASS
- Browser runtime exceptions: captured during UI harness; final run reported none — PASS
- Production bundle check: no localhost/127.0.0.1/model-specific paths in `dist`; Vercel and Netlify configs present — PASS
- Visual spot checks: mobile homepage and desktop story screenshot reviewed — PASS

## Explicit limitations

I could not test a public Vercel or Netlify deployment because this environment does not have authenticated deployment access or a usable deployment CLI session. The project is prepared for both platforms, but no public HTTPS URL was created here.

I could not perform a normal-origin iPhone Safari or iPad Safari session because the execution environment blocks browser navigation to local/private URLs. The compiled application was instead rendered in Chromium through a browser-level harness at the requested viewport sizes, including iPhone-sized and iPad-sized dimensions.

I could not test native browser `localStorage` on a normal HTTP origin for the same browser-navigation restriction. The actual storage module was exercised in Chromium through a compatible browser storage interface, and the production application uses the native `localStorage` API.

I could not fully verify external source-link reachability from the build container because outbound fetches to the cited sites timed out in this environment. The source records themselves were integrity-checked, and the more uncertain source pages were cross-checked through web search. Stories explicitly label disputed, unverified, theory, and popular-claim material where appropriate.
