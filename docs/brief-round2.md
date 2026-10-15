# Round 2 — Oida intro animation (read BRIEF.md first; this file overrides it where they differ)

Will reviewed round 1 (a = hook unwinds into i, b = hook retracts / bowl becomes o / "ida" slides out, c = δ draws itself). He likes B a lot. His notes:
- Make the opening logo BIGGER.
- SLOW IT DOWN. Let the page load and the logo be seen before anything moves.
- The transition is rushed; make it cleaner and smoother. He's drawn to "unraveling the hook".
- He wants to see other ways to get from the logo to the name.

## Shared spec for every round-2 variant
- START FROM B's FILE: copy /private/tmp/claude-501/-Users-williammirhashemi-Desktop-hardwire-v1/8e67645e-66a9-42fa-b603-8262031ea0ae/scratchpad/site-proto/b/index.html into your folder and build on it. Keep its tested infrastructure: official mark path, stroked stand-in swap, header landing on the real HTML lockup, once-per-visit + ?replay + ?seek, reduced-motion, click/key to skip, JS-off page, resize handling, 3.5 s failsafe (raise it to fit the new length).
- Read B's code first and its "ida" letter construction. Stroke weight of the δ is ~23.04 units in oida-mark.svg coordinates (the old brief's "108" was wrong).
- Opening δ size: its height ≈ 50% of viewport height on desktop (≈ 40% of viewport width cap on phones so it never crowds the edges).
- Pacing (defaults, all tunable):
  - fade/settle in: 0–0.4 s
  - HOLD on the still official δ: 1.5 s
  - TRANSITION δ → "oida": 1.8–2.2 s, phases OVERLAPPING with long, soft easing (no step-step-step feel; think one continuous gesture). Use ease-in-out curves like cubic-bezier(.65,0,.35,1) or custom; no linear motion, no bounces.
  - brief hold on the big "oida": ~0.5 s
  - glide to header: ~0.9 s
  - essay fade: ~0.7 s
  - Total ≈ 5–5.5 s. Click/key/scroll skips instantly to the end state.
- Add a TUNING PANEL shown only with ?tune in the URL: small fixed box bottom-right, monochrome, with sliders for hold (0–3 s), transition speed multiplier (0.5×–2×), and logo size (30–70 vh), plus a "replay" button. Values reflected in the URL so Will can send back a link with his preferred settings.
- Letter polish (from round-1 critique): cut the tops of i/d stems and the d ascender at the δ's flat-terminal angle so the letters feel born from the logo; avoid any "text cursor" sliver look in reveals; no stray stubs.
- Theme unchanged: bone #F3EFE6, ink #141412, monochrome, Newsreader essay. Placeholder essay unchanged.
- Verify with playwright-core as in BRIEF.md: freeze frames every 0.5 s from 0 to 6 s at 1440×900, plus final at 390×844. Also make ONE contact sheet PNG (frames tiled, labeled) named sheet.png in your folder (Pillow is available to python3 without -I). Look at every frame and iterate until the motion reads as one smooth gesture and nothing looks broken.

## Report (short)
How it moves (frame by frame), self-critique, scores 1–10 for meaning / smoothness / polish / build-risk, and file paths.
