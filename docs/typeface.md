# Typeface decision (Will, 2026-10-14) — applies to ALL round-2 variants
Will's words: "established, has history (Oida draws back from Greek times), durable, has depth; not dainty journalism, not slick SaaS, not typewriter. Must look polished and thought-through, never like something thrown together / AI-template."

- The page typeface is now PIAZZOLLA (Google Fonts, SIL OFL 1.1; variable axes opsz 8..30 and wght 100..900, with true italics). It replaces Newsreader AND Geist Mono everywhere on the page. One typeface, used carefully.
- Load: https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@0,8..30,100..900;1,8..30,100..900&display=swap (fine for the prototype; production will self-host).
- Essay: weight ~440 (not 400; "durable" without bold), 20–21px desktop / 18px phone, line-height ~1.55–1.6, measure ~60–64ch, font-optical-sizing:auto.
- Craft details (these are the point):
  - font-variant-numeric: oldstyle-nums proportional-nums for body text.
  - Real italics for the meaning line.
  - Add the meaning line in Greek, set in Piazzolla: «In ancient Greek, <span lang="grc">οἶδα</span> means “I have seen, therefore I know.”» (replace the placeholder essay's last line with exactly this).
  - Labels ("Get in touch", the replay link, tune panel labels) in Piazzolla small caps (font-variant-caps: all-small-caps; letter-spacing ~0.06em), not monospace.
  - hanging-punctuation: first last; text-wrap: pretty for paragraphs; no orphaned last-line words.
  - Curly quotes and proper apostrophes in all copy (worker’s, “…”).
- Do NOT change the drawn "oida" wordmark or the δ: they stay drawn paths, not Piazzolla.
