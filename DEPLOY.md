# Deploy (GitHub + Vercel)

Static site, no build step.

- Root directory: `funnel/super-greens` (or copy its contents to the repo root)
- Framework preset: Other · Build command: none · Output directory: `.`
- `index.html` opens the version switcher (V1 Retro 3D · V2 Clean · V3 Legacy).
- Direct pages:
  - `Super Greens Landing Page - Retro.dc.html` (V1)
  - `Super Greens Landing Page - V2 Clean.dc.html` (V2)
  - `Super Greens Landing Page - Working Copy.dc.html` (V3)
  - `Post-Purchase Flow.dc.html` (cart → upsells → thank-you)
- `funnel-config.json` and `HANDOFF.md` hold pricing rules and dev notes.
- Remove `version-switch.js` and its `<script>` tag from the page you ship once a version is chosen.
- Footer links to `../../pages/...` (privacy, terms, returns) point at the wider storefront; repoint them if you deploy this folder alone.
