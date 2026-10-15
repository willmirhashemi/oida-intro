# Oida intro: "the thread"

**Oida** (οἶδα, ancient Greek): “I have seen, and therefore I know.” This is the canonical wording; use it exactly everywhere.

## What's in this repo
| Folder / file | What it is | Who it's for |
|---|---|---|
| `site/` | **useoida.com**, ready to deploy (intro + Will's essay, self-hosted font, icons, share image). See `site/README.md` | Dhruv (Vercel) |
| `video/SCRIPT.md` | **Final 90 s concept-video script**: scene by scene, ElevenLabs takes, never-say list, sources | Burak |
| `video/Oida_Pitch_Trailer_1080p.mp4` | **The pitch trailer** (1:19, 1080p, H.264 + AAC), built in After Effects on the ink-flood opening, the restyled hardware films and the Sedgwick, ILO and McKinsey numbers below | Everyone |
| `video/opening-ink-flood.html` | **The video's opening** (δ → oida → ink flood → first line → 37.5× stat). Record with `?record` | Burak |
| `video/opening-unbroken-line.html` | The alternative opening (not chosen) | Reference |
| `animation.html` | The logo animation alone, ends on "oida" | Anyone |
| `index.html` | The site page as reviewed (same as `site/`, with review controls) | Review |
| `brand/` | Vector logo files: δ mark and "oida" wordmark, ink and bone, plus `preview.html` | Anyone |
| `assets/` | Original master logo SVGs as delivered | Archive |
| `docs/` | Design briefs, typeface decision, video-opening brief | Reference |

The intro for Oida's one-page mission site. The δ mark appears large, holds, then its hook peels off and, as one unbroken pen line, writes "ida" beside the bowl, which rights itself into the "o". The finished "oida" glides into the header and the essay fades in.

Chosen by Will on 2026-10-14 from four round-2 studies (hook retracts, hook becomes the i, the line, the thread), at the default settings below.

## Animation only: `animation.html`
The same animation with no page around it. The δ holds, writes "oida", and rests on the big centred word. There is no glide to a header and no essay. Use it for showing the mark on its own, screen recordings, a deck or a loading screen.
- Plays every time it opens. Click, Space or Enter replays it.
- `?loop` replays it automatically 2 s after it finishes.
- `?tune` shows the same tuning panel; `?seek=2.4` freezes a frame.
- Reduced motion shows the finished word without movement.

## Brand files (vector)
| File | What it is |
|---|---|
| `brand/oida-mark-ink.svg` / `-bone.svg` | The δ mark, the official master path (metadata stripped), in ink `#141412` or bone `#F3EFE6` |
| `brand/oida-wordmark-ink.svg` / `-bone.svg` | The "oida" wordmark, fully outlined: filled shapes only, no strokes, no fonts. Exported from the page's header lockup and checked pixel-for-pixel against it |
| `assets/oida-mark.svg` | The original master as delivered (keeps its c2pa provenance metadata) |

The wordmark bowls are true ellipse arcs. The exact stroke offset of the page's ellipses differs from a scaled ellipse by about 0.01 units, which is invisible at any size. These files scale to any size and are ready for print, patches, favicons and a trademark specimen.

## Run it
Open `index.html` in a browser. It is one self-contained file: inline SVG, CSS and JS, no build step, no library. The only external request is the Piazzolla font from Google Fonts.

| URL option | What it does |
|---|---|
| `?replay` | Play the intro even if it already played this visit |
| `?tune` | Show the tuning panel (hold, speed, logo size, one line / pen lifts) and write values into the URL |
| `?seek=2.4` | Freeze the intro at that time in seconds (for screenshots) |
| `?hold=1.5&speed=1&size=50&pen=lift` | Override the defaults directly |

**Defaults (the approved version):** hold 1.5 s, speed 1×, logo size 50 vh, one continuous line. To reset after tuning, open the file without any query string.

## Timeline at defaults (about 5.7 s to readable essay)
| Time | What happens |
|---|---|
| 0–0.4 s | The official δ fades in at 50% of viewport height (capped at 40% of width on phones) |
| 0.4–1.9 s | Hold on the still δ |
| 1.9–3.85 s | The hook's flat terminal leads off as a pen and writes i, d, a in one stroke; the bowl turns upright into the o |
| 3.83–4.05 s | The i's dot taps in |
| 4.05–4.55 s | Hold on the big "oida" |
| 4.55–5.45 s | Glide into the header |
| 5.0–5.7 s | Essay fades in |

## Behaviour
- Plays once per browser tab session (`sessionStorage`), then the page loads straight to the end state.
- Click, key press, scroll or touch skips to the end.
- `prefers-reduced-motion: reduce` skips the intro entirely.
- With JavaScript off, the full page (header wordmark and essay) is in the HTML.
- If the script fails, the page shows itself after a short failsafe timeout.

## Design rules
- **The δ at rest is the official mark,** `assets/oida-mark.svg` (one path, ink `#141412`). Never redraw it.
- **"oida" is drawn, not typed:** monoline paths at the δ's stroke weight (about 23 units in the master's coordinates). Stem tops are cut at a 1:2 slant to echo the δ's flat terminal.
- **Colours:** bone `#F3EFE6`, ink `#141412`, nothing else.
- **Type is Piazzolla** (SIL Open Font License 1.1): essay at weight 440, old-style figures, real italics, small-caps labels, and the Greek οἶδα set in Piazzolla. See `docs/typeface.md`.

## Before shipping on useoida.com
- [ ] Self-host the Piazzolla font files with `OFL.txt` instead of loading them from Google (GDPR).
- [ ] Replace the placeholder essay with Will's essay.
- [ ] Remove or gate the `?tune` panel and the "replay" link.
- [ ] Known rough spots: a brief "oıa" read before the d's ascender rises, and a slight wave where the terminal leads into the i (about 2.2 s).

## Re-shooting frames
`npm install`, then `npm run frames`. This needs Google Chrome installed, since playwright-core launches the system Chrome. Frames land in `docs/frames/`; `tools/sheet.py` (Pillow) tiles them into a contact sheet.

## History
Briefs for both rounds are in `docs/`. The decision trail lives in the Oida vault: `10 Website/Website Direction - One-Page Mission Essay - 2026-10-14.md`, D011 (logo) and D012 (typeface).
