# useoida.com: the one-page site (ready to deploy)

Static files only. No framework and no build step. Everything the page needs is in this folder.

```
site/
├── index.html            the page: δ → "oida" intro animation, then the essay
├── fonts/                Piazzolla, self-hosted (SIL OFL 1.1, license in fonts/OFL.txt)
├── favicon.svg           δ mark; switches to bone in dark browser tabs
├── favicon-32.png        fallback favicon
├── apple-touch-icon.png  iOS home-screen icon
├── og-image.png          1200×630 link preview (the "oida" wordmark on bone)
└── vercel.json           long cache for the font files
```

## Deploy on Vercel (Dhruv)
Choose one of these:

**A. Its own Vercel project.** This is the fastest.
1. In Vercel, click **Add New → Project** and import `willmirhashemi/oida-intro`.
2. Set **Root Directory** to `site`. Set **Framework Preset** to **Other**. Leave the build and output commands empty.
3. Deploy, then check the preview URL.
4. Move the `useoida.com` domain from the current `oida-site` project to this one (Project → Settings → Domains).

**B. Inside the existing `oida-site` Next.js project.**
1. Copy `index.html`, `fonts/` and the icon and image files into `public/`.
2. Make `/` serve `public/index.html`. One way is a rewrite in `next.config.ts`: `{ source: '/', destination: '/index.html' }`. Another is replacing `app/page.tsx` with a redirect.

## How it behaves
- **The intro plays once per browser tab.** Later loads go straight to the essay.
- **`?replay` forces it to play.** `?tune` shows a timing panel, which is only for review.
- **Visitors can skip it.** A click, key press, scroll or touch skips the intro.
- **Reduced motion skips the animation.** With JavaScript off, the full page still shows.
- **Fonts come only from this site.** There are no requests to Google, so no visitor IPs go to a third party (GDPR).

## Before it goes live
- [x] **Essay:** Will’s essay is in (2026-10-15).
- [ ] **Confirm the contact email.** `hello@useoida.com` has to exist before launch.
- [ ] **Test the share card.** Paste the live URL into a link preview (iMessage, Slack or LinkedIn) and check that `og-image.png` shows.
