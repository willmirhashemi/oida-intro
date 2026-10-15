# Brief: video opening (δ → oida → first line), 2026-10-14

Context: Oida's concept video (built by Burak) had its opening marked REWORK in Will's V2 notes: "Reads too much like our website. Keep the line ('Every job site has a story. Most of the time nobody can prove it.'), rethink the visual." The new opening = the approved logo animation (repo root `animation.html`: the δ holds, its hook peels off as a pen and writes "ida", the bowl becomes the "o", the i dot taps in, ending on a big centred "oida"), followed by a transition into the first slide.

## Shared spec (both variants)
- START FROM `~/oida-intro/animation.html` — copy it to your file and extend it. Do not change the logo animation itself (timing, pen, letter shapes) except where your transition begins after it.
- Output a FIXED 16:9 stage, 1920×1080 logical px, scaled to fit the browser window (letterboxed, centred, background of the letterbox = the frame's background), so it can be screen-recorded or captured as frames. All geometry inside is in stage px, not viewport units.
- Video type system (from Will's V2 notes, page 4 spec):
  - Headlines: Archivo variable, weight 900, width axis 108 (font-variation-settings / font-stretch 108%), UPPERCASE, letter-spacing 0, line-height 0.96. Google Fonts URL: https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap
  - Body: Archivo 400, width 100. Labels: JetBrains Mono 500 uppercase 0.14–0.18em (probably not needed; NO section labels like "01 – THE PROBLEM").
- Palette: cream #F3EFE6, ink #1A1916, body gray #4A4640, muted #8F897C, rule #D9D3C7. No accent colour, nothing orange/red. Put every colour in CSS custom properties at the top (one --ink variable drives the δ, the pen and the type) so the ink value can be swapped later (the logo master is #141412).
- Copy of the first slide: line 1 "EVERY JOB SITE HAS A STORY." then line 2 "MOST OF THE TIME NOBODY CAN PROVE IT." Two beats: line 1 lands, holds ~1.2 s, line 2 lands below it (or replaces it — your call, whichever reads more like film). Centre-aligned is welcome (notes: "try centering").
- Pacing: unhurried, film not slideshow (notes say slow transitions a touch). Whole piece ~9–11 s from first frame to both lines settled, then hold on the final frame.
- Controls: plays on load; click / Space replays from the start; `?seek=4.2` freezes at that time (for frame captures); `?loop` loops with a 2 s rest. `?record` = no on-screen hint and a 1 s blank lead-in before the δ fades in. No other UI.
- Respect `prefers-reduced-motion` (show the final frame).
- No eye/lens/iris/camera-shutter motifs.

## Verify before reporting
playwright-core is installed at /private/tmp/claude-501/-Users-williammirhashemi-Desktop-hardwire-v1/8e67645e-66a9-42fa-b603-8262031ea0ae/scratchpad/node_modules (run node with cwd there, `chromium.launch({channel:'chrome'})`). Capture `?seek=` frames every 0.5 s across the whole piece at a 1920×1080 viewport, plus one at 1280×800 (letterboxing) — save to `~/oida-intro/video/frames/<variant>/`, and tile a contact sheet `~/oida-intro/video/frames/<variant>-sheet.png` (python3 + Pillow works without -I). LOOK at the frames and iterate until the transition is smooth, the type is set exactly to spec (check Archivo actually loaded at width 108 — compare to a fallback), and nothing looks broken. No console errors.

## Report (short)
What happens second by second, self-critique, file path. Do not commit to git (the main session will).
