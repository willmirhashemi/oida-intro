# Oida one-page site — intro animation prototype brief (shared by all builders)

## What Oida is
Oida is a hard-hat camera + evidence platform for construction: worker-perspective footage, sealed (hashed, chained) so alteration is detectable, used for claims/insurance, with a second line licensing footage to AI labs. Name from Greek οἶδα, "I have seen, therefore I know".

## The page
A one-page mission site in the style of aksharadata.com: a single centered serif column, a short essay (~150–250 words), a meaning line about οἶδα, and "Get in touch" + email at the end. No nav, no buttons, no product screenshots.

## The concept to prototype (Will's idea)
1. The δ logo appears LARGE, centered on the bone background.
2. It transforms into the wordmark "oida": the δ's bowl (a closed loop) becomes the "o".
3. The lockup "oida" moves up into the page header (small, top center).
4. The essay fades in below.
Total runtime ≤ ~2.2 s from first paint to readable essay.

## Theme: exactly the logo's
- Background bone #F3EFE6, ink #141412. Monochrome ONLY: no accent colors, no gradients, no shadows, no glow.
- Essay type: Newsreader (Google Fonts, opsz 6..72, weights 400/500, italic allowed), ~19–21px desktop, line-height ~1.6, measure ~60–66ch. Small labels may use Geist Mono (Google Fonts). Fonts only from Google Fonts.
- Calm, editorial, expensive-feeling. Think aksharadata.com restraint, not a tech landing page.

## The logo asset
- `assets/oida-mark-traced.svg` (in /private/tmp/claude-501/-Users-williammirhashemi-Desktop-hardwire-v1/8e67645e-66a9-42fa-b603-8262031ea0ae/scratchpad/site-proto/) is a potrace vector of the official mark: ONE filled path (outer outline + inner counter), viewBox 0 0 3840 2160 with transform translate(0,2160) scale(0.1,-0.1). The mark's bounding box in viewBox units is roughly x 1444–2382, y 361–1762. Source PNG: /Users/williammirhashemi/Desktop/oida-mark-ink-on-bone-3840x2160.png (look at it).
- The mark is a tilted lowercase delta: a top hook (flat-cut terminal at the upper right) sweeping down-left into a large leaning oval bowl. It also reads as a "6".
- The final at-rest δ must look like the official mark (use the traced path for the static first and/or last frame). For morphing you may redraw it as a thick stroked centerline path (matching the official stroke weight, ~108 units at that viewBox scale) — if you do, crossfade to/from the official filled path so the at-rest states are exact.
- "ida" must look like it belongs to the δ: same stroke weight and the same monoline, slightly humanist geometry. Preferred: draw "i", "d", "a" yourself as SVG paths (stroked monoline). Acceptable fallback: a Google Font whose weight and shape match, but say so in your report.

## Hard requirements
- Single self-contained `index.html` in your assigned folder (inline CSS/JS/SVG). External scripts ONLY from cdnjs.cloudflare.com or cdn.jsdelivr.net/npm with an exact pinned version (e.g. gsap@3.12.5 on cdnjs, or gsap@3.13.0 on jsdelivr for MorphSVGPlugin, or flubber@0.4.2). Vanilla JS/CSS/SMIL is fine too.
- The essay text is in the HTML (readable with JS off). Use the PLACEHOLDER essay below verbatim, clearly marked as placeholder in a comment.
- Plays once per visit (sessionStorage, wrapped in try/catch). `?replay` in the URL forces it to play. Also add a tiny unobtrusive "replay" text link at the very bottom for review.
- `prefers-reduced-motion: reduce` → skip straight to the end state.
- Works at 390px phone width (no horizontal scroll, 16px gutters) and at 1440px.
- No eye / lens / shutter / camera / starfield motifs.

## Verify before you report
Use Node + playwright-core already installed at /private/tmp/claude-501/-Users-williammirhashemi-Desktop-hardwire-v1/8e67645e-66a9-42fa-b603-8262031ea0ae/scratchpad/node_modules (run your script with cwd = that scratchpad dir, `chromium.launch({channel:'chrome'})`). Load your page via file:// with ?replay, capture frames at 0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2.4 s and the final state at 1440×900, plus a final at 390×844. Save them in your folder as frames/*.png. LOOK at every frame yourself (Read the PNGs) and iterate until the motion reads cleanly and the end state looks polished. Fix anything ugly (weight jumps, jitter, overlap, misaligned baseline, the lockup landing off-center).

## Report back (short)
- What you built and how the δ→oida transition works, frame by frame
- Library used (with version) or none
- Honest self-critique: what looks great, what looks weak, what you'd change with more time
- Your verdict: is this transition worth it vs. a simpler intro? Score 1–10 for (a) clarity of meaning, (b) craft/polish achieved, (c) build risk for a real site.
- Paths to index.html and frames/

## PLACEHOLDER essay (use verbatim; Will is writing the real one)
Heading: none (the lockup is the header). Body:

Construction runs on memory. When something goes wrong on a job site, what happened gets settled months later from daily logs, phone photos and whoever argues best.

Oida gives every crew a witness. A small camera on the hard hat records the work from the worker's side, and every file is sealed the moment it arrives, so anyone can check that nothing was changed or removed.

We never score a worker or rank a crew. The record exists to protect the people who build, and the companies that stand behind them.

In ancient Greek, oida means “I have seen, therefore I know.”

Get in touch: hello@useoida.com
