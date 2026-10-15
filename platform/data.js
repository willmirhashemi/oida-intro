/* Oida prototype data.
   Two projects:
   - "Harbor Street Residences" is a SAMPLE site (fictional GC, subs and events) used to show the full product.
   - "First job site" holds Earl's crew's one REAL recording (events and narration as produced by the live app).
   No hazards or claims are ever attached to the real recording. */
window.OIDA = window.OIDA || {};
(function () {
  const D = {};
  D.today = '2026-10-15';
  D.org = { name: 'Arden Builders', sample: true, role: 'Superintendent', user: 'Site superintendent' };

  /* ---------- projects ---------- */
  D.projects = [
    { id: 'harbor', name: 'Harbor Street Residences', place: 'Brooklyn, NY', sample: true,
      blurb: '5 storeys, 48 units, cast-in-place podium with wood frame above.', gc: 'Arden Builders',
      jurisdiction: 'New York (one-party consent; Labor Law 240/241 applies)', retention: '7 years, or until claims close',
      levels: ['Site', 'L1', 'L3', 'L4', 'Roof'] },
    { id: 'earl', name: 'First job site', place: 'San Diego area, CA', sample: false,
      blurb: "Earl's crew, CMU block wall. One real 30-minute pilot recording.", gc: "Earl's crew",
      jurisdiction: 'California (all-party consent for audio, Penal Code 632)', retention: 'Not set (pilot)', levels: ['Site'] }
  ];

  /* ---------- camera units (labelled by unit and trade, never by wearer) ---------- */
  D.hats = [
    { id: 'H-03', trade: 'Masonry', crew: 'Keystone Masonry', division: '04 Masonry' },
    { id: 'H-07', trade: 'Electrical', crew: 'Brightline Electric', division: '26 Electrical' },
    { id: 'H-11', trade: 'Framing', crew: 'Northside Framing', division: '06 Wood, Plastics, Composites' },
    { id: 'H-14', trade: 'Concrete', crew: 'Harbor Concrete', division: '03 Concrete' },
    { id: 'H-18', trade: 'Plumbing', crew: 'Ridgeway Mechanical', division: '22 Plumbing' },
    { id: 'H-22', trade: 'GC field', crew: 'Arden Builders', division: '01 General Requirements' }
  ];

  /* ---------- zones: plan coordinates on a 1000 x 620 sheet per level ---------- */
  D.zones = [
    { id: 'site-crane', level: 'Site', name: 'Crane pad', x: 60, y: 60, w: 220, h: 160 },
    { id: 'site-trench', level: 'Site', name: 'Utility trench', x: 320, y: 470, w: 600, h: 70 },
    { id: 'site-laydown', level: 'Site', name: 'Laydown yard', x: 700, y: 60, w: 240, h: 220 },
    { id: 'site-footprint', level: 'Site', name: 'Building footprint', x: 320, y: 120, w: 340, h: 300 },
    { id: 'l1-dock', level: 'L1', name: 'Loading dock', x: 740, y: 380, w: 200, h: 180 },
    { id: 'l1-lobby', level: 'L1', name: 'Lobby', x: 60, y: 380, w: 300, h: 180 },
    { id: 'l1-stair', level: 'L1', name: 'North stair', x: 60, y: 60, w: 140, h: 200 },
    { id: 'l1-core', level: 'L1', name: 'Elevator core', x: 430, y: 220, w: 140, h: 160 },
    { id: 'l1-retail', level: 'L1', name: 'Retail shell', x: 380, y: 400, w: 340, h: 160 },
    { id: 'l3-stair', level: 'L3', name: 'North stair', x: 60, y: 60, w: 140, h: 200 },
    { id: 'l3-edge', level: 'L3', name: 'East slab edge', x: 880, y: 60, w: 60, h: 500 },
    { id: 'l3-core', level: 'L3', name: 'Elevator core', x: 430, y: 220, w: 140, h: 160 },
    { id: 'l3-corridor', level: 'L3', name: 'Corridor (MEP)', x: 220, y: 270, w: 640, h: 80 },
    { id: 'l3-units-n', level: 'L3', name: 'Units 301 to 303', x: 220, y: 60, w: 640, h: 190 },
    { id: 'l3-units-s', level: 'L3', name: 'Units 304 to 306', x: 220, y: 370, w: 640, h: 190 },
    { id: 'l4-stair', level: 'L4', name: 'North stair', x: 60, y: 60, w: 140, h: 200 },
    { id: 'l4-openings', level: 'L4', name: 'Floor openings', x: 600, y: 280, w: 120, h: 70 },
    { id: 'l4-units', level: 'L4', name: 'Units 401 to 406', x: 220, y: 60, w: 640, h: 500 },
    { id: 'roof-deck', level: 'Roof', name: 'Roof deck', x: 60, y: 60, w: 880, h: 500 }
  ];
  D.zoneById = Object.fromEntries(D.zones.map(z => [z.id, z]));

  /* ---------- days ---------- */
  D.days = ['2026-10-05', '2026-10-06', '2026-10-07', '2026-10-08', '2026-10-09', '2026-10-12', '2026-10-13', '2026-10-14'];

  /* ---------- deterministic sample shifts ---------- */
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const hatZones = {
    'H-03': ['l1-stair', 'l3-stair', 'l3-units-n', 'l3-units-s'],
    'H-07': ['l3-corridor', 'l3-units-s', 'l4-units', 'l1-core'],
    'H-11': ['l4-units', 'l4-openings', 'l3-units-n', 'roof-deck'],
    'H-14': ['site-footprint', 'l1-retail', 'l3-edge', 'site-crane'],
    'H-18': ['l3-corridor', 'l3-units-s', 'site-trench', 'l4-units'],
    'H-22': ['l1-dock', 'l3-stair', 'l3-edge', 'site-laydown', 'l1-lobby']
  };
  D.shifts = [];
  const needed = new Set(['2026-10-05|H-03','2026-10-07|H-18','2026-10-08|H-11','2026-10-08|H-18','2026-10-09|H-22','2026-10-12|H-07','2026-10-12|H-11','2026-10-13|H-03','2026-10-13|H-07','2026-10-13|H-11','2026-10-13|H-22','2026-10-14|H-11','2026-10-14|H-14','2026-10-14|H-22']);
  D.days.forEach(day => D.hats.forEach(h => {
    if (rnd() < 0.08 && !needed.has(day + '|' + h.id)) return; // a hat that did not go out that day (never one the record cites)
    const start = 6.9 + rnd() * 0.3, end = 15.1 + rnd() * 0.5;
    const spans = []; let t = start;
    while (t < end) {
      const len = 0.6 + rnd() * 1.8, stop = Math.min(end, t + len);
      spans.push({ start: +t.toFixed(3), end: +stop.toFixed(3), zone: hatZones[h.id][Math.floor(rnd() * hatZones[h.id].length)] });
      t = stop + (rnd() < 0.3 ? 0.15 + rnd() * 0.5 : 0.02); // gaps: breaks, battery swap, camera off
    }
    const id = `S-${day.slice(5).replace('-', '')}-${h.id.slice(2)}`;
    D.shifts.push({ id, day, hat: h.id, project: 'harbor', start, end, spans,
      sealed: day < D.today, chunks: 3, sizeGB: +(((end - start) * 3.9)).toFixed(1) });
  }));

  /* ---------- the narrative: hand-written sample events ---------- */
  // hour values are local decimal hours (10.7 = 10:42)
  D.events = [
    // Tuesday 10/13, north stair L3, the guardrail dispute (echoes the film)
    { id: 'E-1301', day: '2026-10-13', t: 9.05, hat: 'H-22', zone: 'l3-stair', type: 'Fall protection', what: 'Guardrail in place along the open side of the L3 north stair landing', condition: 'present', band: 'high', review: 'confirmed' },
    { id: 'E-1302', day: '2026-10-13', t: 10.58, hat: 'H-03', zone: 'l3-stair', type: 'Work sequence', what: 'Masonry crew stages block on the L3 stair landing; top rail section lifted aside for material handling', condition: 'removed during work', band: 'medium', review: 'confirmed' },
    { id: 'E-1303', day: '2026-10-13', t: 10.70, hat: 'H-07', zone: 'l3-stair', type: 'Fall protection', what: 'Open side of the L3 stair landing without a top rail; mid-rail present', condition: 'partial', band: 'high', review: 'confirmed', hazard: 'HZ-031' },
    { id: 'E-1304', day: '2026-10-13', t: 11.25, hat: 'H-03', zone: 'l3-stair', type: 'Work sequence', what: 'Top rail section reinstalled and clamped at the L3 stair landing', condition: 'present', band: 'high', review: 'confirmed' },
    { id: 'E-1305', day: '2026-10-13', t: 14.17, hat: 'H-22', zone: 'l3-stair', type: 'Inspection', what: 'GC field engineer walks the L3 stair landing; rail checked by hand', condition: 'present', band: 'high', review: 'pending' },
    // Concealed work: unit 304 window flashing before drywall (claim CL-0042)
    { id: 'E-0801', day: '2026-10-08', t: 8.40, hat: 'H-11', zone: 'l3-units-s', type: 'Work sequence', what: 'Self-adhered flashing installed at the unit 304 window rough opening, sill first, then jambs', condition: 'present', band: 'high', review: 'confirmed', concealed: true },
    { id: 'E-0802', day: '2026-10-08', t: 13.10, hat: 'H-18', zone: 'l3-units-s', type: 'Work sequence', what: 'Supply lines and drain stack visible in the unit 304 bathroom wall before insulation', condition: 'present', band: 'high', review: 'confirmed', concealed: true },
    { id: 'E-1201', day: '2026-10-12', t: 10.05, hat: 'H-11', zone: 'l3-units-s', type: 'Cover-up of work', what: 'Drywall hung over the unit 304 window wall and bathroom wall', condition: 'present', band: 'high', review: 'confirmed' },
    // Damage on arrival, loading dock (claim CL-0044)
    { id: 'E-0901', day: '2026-10-09', t: 7.35, hat: 'H-22', zone: 'l1-dock', type: 'Delivery', what: 'Window unit delivery arrives on flatbed; two crates show split corners before unloading', condition: 'damaged on arrival', band: 'high', review: 'confirmed' },
    { id: 'E-0902', day: '2026-10-09', t: 7.55, hat: 'H-22', zone: 'l1-dock', type: 'Damage', what: 'Close view of cracked glazing in crate 7 while still strapped to the trailer', condition: 'present', band: 'high', review: 'confirmed' },
    // Other hazards
    { id: 'E-1302b', day: '2026-10-13', t: 9.40, hat: 'H-11', zone: 'l4-openings', type: 'Fall protection', what: 'Floor opening cover at L4 not secured; plywood shifted off one edge', condition: 'unsecured', band: 'medium', review: 'confirmed', hazard: 'HZ-032' },
    { id: 'E-1401', day: '2026-10-14', t: 8.15, hat: 'H-11', zone: 'l4-openings', type: 'Fall protection', what: 'Same L4 opening cover still shifted; no marking visible', condition: 'unsecured', band: 'medium', review: 'confirmed', hazard: 'HZ-032' },
    { id: 'E-1206', day: '2026-10-12', t: 13.30, hat: 'H-07', zone: 'l1-core', type: 'Ladders', what: 'Extension ladder side rails stop at the landing edge, without 3 ft extension', condition: 'not extended', band: 'medium', review: 'confirmed', hazard: 'HZ-029' },
    { id: 'E-1207', day: '2026-10-12', t: 15.05, hat: 'H-07', zone: 'l1-core', type: 'Ladders', what: 'Ladder reset with rails extended above the landing', condition: 'present', band: 'high', review: 'confirmed' },
    { id: 'E-1402', day: '2026-10-14', t: 11.20, hat: 'H-14', zone: 'site-crane', type: 'Equipment proximity', what: 'Workers cross beneath a suspended rebar bundle near the crane pad', condition: 'present', band: 'medium', review: 'pending', hazard: 'HZ-033' },
    { id: 'E-1403', day: '2026-10-14', t: 9.50, hat: 'H-14', zone: 'l3-edge', type: 'Housekeeping', what: 'Uncapped vertical rebar along the L3 east edge pour strip', condition: 'uncapped', band: 'high', review: 'pending', hazard: 'HZ-034' },
    { id: 'E-0701', day: '2026-10-07', t: 14.40, hat: 'H-18', zone: 'site-trench', type: 'Excavation', what: 'Spoil pile within about 1 ft of the utility trench edge', condition: 'present', band: 'medium', review: 'confirmed', hazard: 'HZ-027' },
    { id: 'E-0702', day: '2026-10-08', t: 7.30, hat: 'H-18', zone: 'site-trench', type: 'Excavation', what: 'Spoil pulled back from the trench edge', condition: 'present', band: 'high', review: 'confirmed' },
    // Weather and routine
    { id: 'E-1001', day: '2026-10-09', t: 12.10, hat: 'H-22', zone: 'roof-deck', type: 'Weather', what: 'Rain begins; roof deck work stops, materials tarped', condition: 'present', band: 'high', review: 'confirmed' },
    { id: 'E-1404', day: '2026-10-14', t: 10.00, hat: 'H-22', zone: 'l3-edge', type: 'Condition snapshot', what: 'L3 east slab edge: perimeter cable in place, toe board continuous', condition: 'present', band: 'high', review: 'confirmed' }
  ];

  /* every cited event sits inside a recorded span at its zone (split the span around it) */
  D.events.forEach(e => {
    const sh = D.shifts.find(s => s.day === e.day && s.hat === e.hat); if (!sh) return;
    if (sh.spans.some(sp => sp.zone === e.zone && sp.start <= e.t && sp.end >= e.t)) return;
    let i = sh.spans.findIndex(sp => sp.start <= e.t && sp.end >= e.t);
    if (i < 0) { // event falls in a gap or outside the shift: extend the nearest span
      i = sh.spans.reduce((b, sp, k) => Math.min(Math.abs(sp.start - e.t), Math.abs(sp.end - e.t)) < Math.min(Math.abs(sh.spans[b].start - e.t), Math.abs(sh.spans[b].end - e.t)) ? k : b, 0);
      const sp = sh.spans[i]; sp.start = Math.min(sp.start, e.t - 0.2); sp.end = Math.max(sp.end, e.t + 0.2);
      sh.start = Math.min(sh.start, sp.start); sh.end = Math.max(sh.end, sp.end);
    }
    const sp = sh.spans[i], a = Math.max(sp.start, e.t - 0.3), b = Math.min(sp.end, e.t + 0.3), parts = [];
    if (a - sp.start > 0.05) parts.push({ start: sp.start, end: +a.toFixed(3), zone: sp.zone });
    parts.push({ start: +a.toFixed(3), end: +b.toFixed(3), zone: e.zone });
    if (sp.end - b > 0.05) parts.push({ start: +b.toFixed(3), end: sp.end, zone: sp.zone });
    sh.spans.splice(i, 1, ...parts);
  });

  /* ---------- hand-authored spans for the hero window (Tue 13 Oct, 10:15 to 11:30) ----------
     Every count shown in the answer is derived from these spans, never typed in. */
  const setSpans = (day, hat, t0, t1, segs) => {
    const sh = D.shifts.find(s => s.day === day && s.hat === hat); if (!sh) return;
    const out = [];
    sh.spans.forEach(sp => {
      if (sp.end <= t0 || sp.start >= t1) { out.push(sp); return; }
      if (sp.start < t0) out.push({ ...sp, end: t0 });
      if (sp.end > t1) out.push({ ...sp, start: t1 });
    });
    sh.spans = out.concat(segs.map(([a, b, zone]) => ({ start: a, end: b, zone }))).sort((x, y) => x.start - y.start);
  };
  setSpans('2026-10-13', 'H-03', 10.25, 11.5, [[10.25, 11.5, 'l3-stair']]);
  setSpans('2026-10-13', 'H-07', 10.25, 11.5, [[10.25, 10.6, 'l3-corridor'], [10.6, 10.85, 'l3-stair'], [10.97, 11.5, 'l3-corridor']]); // 10:51 to 10:58 battery swap, no footage
  setSpans('2026-10-13', 'H-22', 10.25, 11.5, [[10.25, 11.5, 'l1-dock']]);
  D.gapNotes = { '2026-10-13|H-07|10.85': 'Battery swap. Camera off, no footage.' };

  /* ---------- OSHA-grounded hazard record (possible hazards, reviewed by a person) ---------- */
  D.hazards = [
    { id: 'HZ-031', title: 'Top rail missing at stair landing', zone: 'l3-stair', cfr: '29 CFR 1926.1052(c)(12)', subpart: 'X · Stairways and ladders',
      text: 'Unprotected sides and edges of stairway landings shall be provided with guardrail systems.',
      found: '2026-10-13T10:42', fixed: '2026-10-13T11:15', verified: '2026-10-13T14:10', status: 'verified', events: ['E-1303', 'E-1304', 'E-1305'], window: 'same shift' },
    { id: 'HZ-032', title: 'Floor opening cover not secured', zone: 'l4-openings', cfr: '29 CFR 1926.502(i)(3)', subpart: 'M · Fall protection',
      text: 'All covers shall be secured when installed so as to prevent accidental displacement by the wind, equipment, or employees.',
      found: '2026-10-13T09:24', fixed: null, verified: null, status: 'open', events: ['E-1302b', 'E-1401'], window: 'open 2 days; seen again 10/14' },
    { id: 'HZ-033', title: 'Workers under a suspended load', zone: 'site-crane', cfr: '29 CFR 1926.1425(b)', subpart: 'CC · Cranes and derricks',
      text: 'While the operator is not moving a suspended load, no employee must be within the fall zone, except for employees: (1) Engaged in hooking, unhooking or guiding a load; ...',
      found: '2026-10-14T11:12', fixed: null, verified: null, status: 'review', events: ['E-1402'], window: 'awaiting review' },
    { id: 'HZ-034', title: 'Protruding rebar not guarded', zone: 'l3-edge', cfr: '29 CFR 1926.701(b)', subpart: 'Q · Concrete and masonry',
      text: 'All protruding reinforcing steel, onto and into which employees could fall, shall be guarded to eliminate the hazard of impalement.',
      found: '2026-10-14T09:30', fixed: null, verified: null, status: 'review', events: ['E-1403'], window: 'awaiting review' },
    { id: 'HZ-029', title: 'Ladder rails not extended above landing', zone: 'l1-core', cfr: '29 CFR 1926.1053(b)(1)', subpart: 'X · Ladders',
      text: 'When portable ladders are used for access to an upper landing surface, the ladder side rails shall extend at least 3 feet (.9 m) above the upper landing surface ...',
      found: '2026-10-12T13:18', fixed: '2026-10-12T15:03', verified: '2026-10-12T15:05', status: 'verified', events: ['E-1206', 'E-1207'], window: 'same shift' },
    { id: 'HZ-027', title: 'Spoil pile too close to trench edge', zone: 'site-trench', cfr: '29 CFR 1926.651(j)(2)', subpart: 'P · Excavations',
      text: '... by placing and keeping such materials or equipment at least 2 feet (.61 m) from the edge of excavations ...',
      found: '2026-10-07T14:24', fixed: '2026-10-08T07:18', verified: '2026-10-08T07:30', status: 'verified', events: ['E-0701', 'E-0702'], window: 'next morning' }
  ];

  /* ---------- incident (Everlaw-style "fact") ---------- */
  D.incidents = [
    { id: 'INC-0007', title: 'Guardrail dispute, L3 north stair', day: '2026-10-13', t: 10.70, approx: '±2 min', zone: 'l3-stair', type: 'Fall protection',
      summary: 'A top rail section at the L3 north stair landing was lifted aside for material handling at 10:35 and reinstalled at 11:15. Two hats recorded the landing during that window.',
      crews: ['Keystone Masonry', 'Brightline Electric', 'Arden Builders'], conditions: 'Overcast, 58 °F, dry deck', hats: ['H-03', 'H-07', 'H-22'],
      quotes: [{ who: 'The super', text: 'The rail was up when we left.' }, { who: 'The sub', text: 'There was no rail when we got there.' }],
      status: 'In claim file CL-0043' }
  ];

  /* ---------- claim files ---------- */
  D.claims = [
    { id: 'CL-0043', title: 'L3 north stair: guardrail dispute and backcharge', opened: '2026-10-14', status: 'On hold', hold: true, holdAt: '2026-10-14T15:58', holdBy: 'the safety manager',
      kind: 'Sub backcharge and near-miss', adjuster: null, incident: 'INC-0007',
      moments: ['E-1302', 'E-1303', 'E-1304', 'E-1305'], export: 'OIDA-EXP-2026-0117', version: 1,
      pull: { day: '2026-10-13', t0: 10.25, t1: 11.5, zone: 'l3-stair', band: [10.58, 11.25, 'NO TOP RAIL'] }, shifts: ['S-1013-03', 'S-1013-07', 'S-1013-22'] },
    { id: 'CL-0042', title: 'Unit 304: water intrusion at window', opened: '2026-10-15', status: 'Gathering', hold: true, holdAt: '2026-10-15T08:40', holdBy: 'the site superintendent',
      kind: 'Concealed work: was the flashing installed?', adjuster: null, incident: null, moments: ['E-0801', 'E-0802', 'E-1201'], export: null },
    { id: 'CL-0044', title: 'Window units damaged on arrival', opened: '2026-10-09', status: 'Exported', hold: false,
      kind: 'Supplier damage claim', adjuster: null, incident: null, moments: ['E-0901', 'E-0902'], export: 'OIDA-EXP-2026-0104', version: 1,
      pull: { day: '2026-10-09', t0: 7.1, t1: 8.0, zone: 'l1-dock' } }
  ];

  D.exportPackage = {
    id: 'OIDA-EXP-2026-0117', version: 'v1', claim: 'CL-0043', created: '2026-10-14T16:20', by: 'Site superintendent',
    recipient: 'Northbridge Mutual, GL claims desk (sample)', access: 'View only, watermarked, expires 2026-10-28',
    root: '3e9a1f6c0b2d4e78a5c19f0d6b7e2a41c8d93f5e07a6b1c2d4e8f90a1b3c5d7e9',
    files: [
      ['README.pdf', 'How to verify in three steps'],
      ['cover.pdf', 'Incident summary, timeline, exhibits OIDA-000123 to OIDA-000131'],
      ['clips/', '4 clips, faces of bystanders blurred, no audio'],
      ['manifest.json', 'Every file with size, SHA-256, source hash and derivation'],
      ['shift_merkle/', 'Shift roots and inclusion proofs for each clip'],
      ['custody_log.json', 'Capture, offload, verify, hold, views, export'],
      ['events.pdf', 'Reviewer-confirmed findings; AI suggestions labelled'],
      ['verify/verify.py', 'Runs offline; prints PASS or FAIL per check']
    ],
    checks: ['Hashes match the manifest', 'Clips fall inside the sealed shift roots', 'Custody log is continuous', 'Shift chain unbroken for H-03, H-07, H-22']
  };

  /* ---------- access grants: package only, time-boxed, every view logged (fictional counterparties) ---------- */
  D.grants = [
    { claim: 'CL-0043', to: 'Northbridge Mutual · GL claims desk', email: 'adjuster@northbridge.example', until: '2026-10-28', active: true, last: 'Thu 15 Oct 08:02 · viewed exhibit 2' },
    { claim: 'CL-0044', to: 'Pacific Glazing Supply · freight claims', email: 'claims@pacificglazing.example', until: '2026-10-14', active: false, last: 'Mon 12 Oct 14:30 · downloaded the package' }
  ];

  /* ---------- marks from the field (V-2): kind, place, a line; server time is authoritative ---------- */
  D.marks = [
    { id: 'M-6', at: '2026-10-13T10:44', kind: 'Safety', zone: 'l3-stair', text: 'Top rail off at the north stair landing, masonry staging block', by: 'Site superintendent', status: 'pulled', claim: 'CL-0043' },
    { id: 'M-5', at: '2026-10-09T07:25', kind: 'Delivery', zone: 'l1-dock', text: 'Window crates split on the truck, before unloading', by: 'GC field engineer', status: 'pulled', claim: 'CL-0044' },
    { id: 'M-4', at: '2026-10-14T13:05', kind: 'Property damage', zone: 'l3-corridor', text: 'Sprinkler main dented in the L3 corridor', by: 'Site superintendent', status: 'pulled' }
  ];

  /* ---------- custody log (newest first) ---------- */
  D.custody = [
    { at: '2026-10-15T08:02', who: 'Northbridge Mutual adjuster (outside, package only)', what: 'Viewed exhibit 2 in the shared package', target: 'OIDA-EXP-2026-0117' },
    { at: '2026-10-14T16:24', who: 'Site superintendent', what: 'Shared package v1 with Northbridge Mutual, until 2026-10-28', target: 'OIDA-EXP-2026-0117' },
    { at: '2026-10-14T16:20', who: 'Site superintendent', what: 'Created export v1 from claim CL-0043', target: 'OIDA-EXP-2026-0117' },
    { at: '2026-10-14T15:58', who: 'Safety manager', what: 'Placed legal hold on 3 shifts', target: 'S-1013-03, S-1013-07, S-1013-22' },
    { at: '2026-10-14T15:51', who: 'Site superintendent', what: 'Opened claim file', target: 'CL-0043' },
    { at: '2026-10-14T09:12', who: 'Oida reviewer', what: 'Confirmed event E-1303', target: 'S-1013-07' },
    { at: '2026-10-13T17:44', who: 'Dock 2 (offload station)', what: `Verified and sealed ${D.shifts.filter(s => s.day === '2026-10-13').length} shifts; clock offset H-07 +0.4 s`, target: 'Tuesday 10/13' },
    { at: '2026-10-13T17:31', who: 'Dock 2 (offload station)', what: 'Offloaded H-07, 8.2 h, 3 chunks, hashed on arrival', target: 'S-1013-07' }
  ];

  /* ---------- coverage: crew-hours worked, from the GC's timesheets (sample) ----------
     Only the weekly totals are typed. Captured hours are always computed from the sealed spans in index.html.
     last = Mon 5 to Fri 9 Oct, this = Mon 12 to Wed 14 Oct (the sealed days so far). */
  D.coverage = [
    { crew: 'Keystone Masonry', hat: 'H-03', worked: { last: 41, this: 25 } },
    { crew: 'Brightline Electric', hat: 'H-07', worked: { last: 40, this: 24.5 } },
    { crew: 'Northside Framing', hat: 'H-11', worked: { last: 44, this: 26 } },
    { crew: 'Harbor Concrete', hat: 'H-14', worked: { last: 38, this: 25 } },
    { crew: 'Ridgeway Mechanical', hat: 'H-18', worked: { last: 40, this: 26 } },
    { crew: 'Arden Builders', hat: 'H-22', worked: { last: 45, this: 26.5 } }
  ];

  /* ---------- notes pinned to a moment ---------- */
  D.notes = [
    { at: '2026-10-13T11:20', event: 'E-1304', by: 'Site superintendent', text: 'Told Keystone foreman rail sections stay clamped unless a spotter is posted. Will check at 2.' },
    { at: '2026-10-14T08:30', event: 'E-1401', by: 'Safety manager', text: 'Framing says cover is theirs. Asked for cleats and OPENING marking today.' }
  ];

  /* ---------- REAL: Earl's crew, live app recording m17evsghyzgrj6wcv31fwpyv958f2chv ---------- */
  D.earl = {
    id: 'm17evsghyzgrj6wcv31fwpyv958f2chv', name: 'Earl — CMU wall, 30 min', project: 'earl', real: true,
    recordedAt: '2026-09-18 08:00:00 America/Chicago', duration: 1800, sizeBytes: 126179387,
    uploadedBy: 'Dhruv', uploadedAt: '2026-09-25 12:16:47 America/Chicago', model: 'gemini-3.8-flash', analyzedAt: '2026-09-25 12:18:17 America/Chicago',
    sha256hex: 'f66b83248f8ae47e0b39c6650746e342ae5e3a56baf2db50b4271418c71916fb',
    seal: 'Unsealed pilot capture, hashed at ingest',
    events: [
      [278, 'Worker sets a concrete masonry unit onto a mortar bed along the string line and taps it into position'],
      [333, 'Worker checks the plumb of the CMU wall using a spirit level and marks the block'],
      [442, 'Worker sets a bond beam CMU block onto the wall and aligns it to the string line'],
      [766, 'Workers position a wood form board across the wall opening to support the lintel block course'],
      [1078, 'Worker places bond beam CMU blocks across the wooden lintel formwork'],
      [1095, 'Worker verifies alignment and level of the placed bond beam blocks using a spirit level'],
      [1206, 'Worker injects mortar into CMU block joints using a grout bag'],
      [1364, 'Worker measures wall section and core spacing using a tape measure'],
      [1504, 'Worker bends rebar using a manual bar bender mounted on a wood plank'],
      [1625, 'Worker measures rebar bend dimensions using a tape measure'],
      [1722, 'Worker hoists the manual rebar bender onto the scaffolding platform'],
      [1746, 'Site personnel inspect the bent rebar section on the ground']
    ].map(([s, d], i) => ({ id: 'R-' + (i + 1), offset: s, what: d, type: s >= 1504 ? 'Work sequence' : 'Work sequence', trade: s >= 1504 ? '03 Concrete (rebar)' : '04 Masonry', band: null, review: 'pending' })),
    narration: [
      [0, 300, 'The camera is mounted on a mason working atop scaffolding alongside concrete masonry unit (CMU) retaining walls of an excavated pit. Several coworkers move along the scaffold planks, staging blocks and mixing mortar in a tub. The worker uses a trowel to butter mortar onto CMU blocks and lays a block into the course along a pink string line, tapping it down into place.'],
      [300, 600, 'The worker checks wall plumb and alignment using a long spirit level and pencil, verifying vertical lines down the pit wall. He then spreads fresh mortar across block webs and places multiple bond beam blocks along the guide line. He uses a tape measure and level to verify height and joint dimensions across the span of the wall.'],
      [600, 900, 'The worker continues setting bond beam blocks, using a trowel to butter edges and bed joints and tapping each block level. He climbs down through the scaffold into the pit interior, retrieves wooden planks, and climbs back up. Together with a coworker, they measure and secure wood boards across a wall opening to act as bottom formwork for a lintel span.'],
      [900, 1200, 'Working on the scaffold, the mason dry-fits and sets bond beam blocks across the newly placed wooden lintel form board. He checks the horizontal level of the blocks with a spirit level. Next, he prepares mortar on a mortar board and loads it into a grout bag with assistance from a coworker, then injects mortar into the vertical joints between the installed blocks.'],
      [1200, 1500, 'The worker finishes grouting the block joints with the grout bag and smooths excess mortar. He then measures the wall openings, lintel span, and vertical block cores using a tape measure, discussing layout and dimensions with a coworker. After inspecting the work on the scaffold, he climbs down the scaffolding ladder to the site ground level.'],
      [1500, 1800, 'At ground level, the worker assists another crew member in measuring, marking, and bending reinforcing steel rebar.']
    ].map(([a, b, text]) => ({ start: a, end: b, text })),
    ask: [{ q: 'Can you tell me if anything interesting occurs in this video that might need to be looked at twice', a: 'The record does not indicate any unusual events, safety incidents, or anomalies that require special review. It documents routine masonry work, including laying CMU blocks, building lintel formwork, grouting joints, and measuring and bending rebar.', cites: [278, 766, 1206, 1504] }]
  };

  /* ---------- helpers ---------- */
  D.hatById = Object.fromEntries(D.hats.map(h => [h.id, h]));
  D.eventById = Object.fromEntries(D.events.map(e => [e.id, e]));
  D.hazardById = Object.fromEntries(D.hazards.map(h => [h.id, h]));
  D.shiftFor = (day, hat) => D.shifts.find(s => s.day === day && s.hat === hat);
  /* hours of footage per zone per day, from shift spans */
  D.coverageByZone = (day) => {
    const out = {};
    D.shifts.filter(s => !day || s.day === day).forEach(s => s.spans.forEach(sp => { out[sp.zone] = (out[sp.zone] || 0) + (sp.end - sp.start); }));
    return out;
  };
  /* incident pull: every hat on shift that day, clipped to the window, with gaps */
  D.pull = (day, t0, t1, zone) => D.shifts.filter(s => s.day === day).map(s => {
    const segs = [], inWin = s.spans.filter(sp => sp.end > t0 && sp.start < t1).map(sp => ({ start: Math.max(t0, sp.start), end: Math.min(t1, sp.end), zone: sp.zone }));
    let t = Math.max(t0, s.start);
    if (s.start > t0) segs.push({ start: t0, end: Math.min(t1, s.start), kind: 'off' });
    inWin.forEach(sp => { if (sp.start - t > 0.02) segs.push({ start: t, end: sp.start, kind: 'gap', note: D.gapNotes[`${day}|${s.hat}|${+t.toFixed(2)}`] }); segs.push({ ...sp, kind: sp.zone === zone ? 'zone' : 'other' }); t = sp.end; });
    if (t1 - t > 0.02 && s.end > t) segs.push({ start: t, end: Math.min(t1, s.end), kind: 'gap' });
    const zoneH = segs.filter(x => x.kind === 'zone').reduce((a, x) => a + x.end - x.start, 0);
    return { shift: s, hat: s.hat, segs, zoneH, events: D.events.filter(e => e.day === day && e.hat === s.hat && e.t >= t0 && e.t <= t1) };
  });
  OIDA.data = D;
})();
