# Oida Platform: clickable prototype (ready to deploy)

These are static files: no framework and no build step. This is the founder-approved design for the platform at useoida.com/dashboard. It is a **prototype**: the data is a fictional sample site plus Earl's one real (unsealed) recording, footage is stock, and uploads are simulated.

```
platform/
├── index.html   the whole app: Ask (Lynx) · Record · Claims
├── data.js      sample site data and Earl's real recording metadata
├── brand.js     oida wordmark and δ mark (vector)
├── img/         stock construction footage stills (labelled as stock in the UI)
├── favicon.svg, favicon-32.png, apple-touch-icon.png
└── vercel.json  image caching and noindex
```

## Deploy on Vercel (Dhruv)
**Option A: its own Vercel project.** This is the fastest. Use it for a shareable preview URL such as `platform-oida.vercel.app`.
1. In Vercel, click **Add New → Project** and import `willmirhashemi/oida-intro`.
2. Set **Root Directory** to `platform` and **Framework Preset** to **Other**. Leave the build and output commands empty.
3. Deploy. The page is marked `noindex`, so search engines won't list it.

**Option B: inside the existing Next.js app.** Copy the folder into `public/platform/` and open `/platform/index.html`.

## What is real and what is mocked
| Piece | Status |
|---|---|
| File fingerprints on Record › Upload | **Real** SHA-256 in the browser (hash-wasm), checked against macOS `shasum` |
| The upload itself | Simulated. Nothing leaves the computer. Production needs S3 multipart with resume |
| Lynx answers | Scripted for the sample data. The real engine is the Python reference in `oida-platform-tech/search` |
| Seal, export, verify | Simulated in the UI. The real code is in `oida-platform-tech/sealing` (offline `verify.py`) |

## Approved home (build this exactly)
"Lynx is here." Below it is one search bar (+ · "What do you want to know?" · send). Below that is one heartbeat line showing the last seal. Nothing else on the page. The design handoff, with exact CSS and the build order, is at https://claude.ai/artifact/A1x9efp9MHkudGyhawHDov
