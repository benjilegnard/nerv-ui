# TODO list

Plan for the component library, built from the analysis of the reference frames.
Numbers like [003](docs/REFERENCE.md#003) link to the frame descriptions in
[docs/REFERENCE.md](docs/REFERENCE.md).

Categories follow the README: foundations → effects → atoms → components →
patterns (data visualisation) → layouts → scenes. Each item should get a
Storybook story (or MDX page) and use the `--nerv-*` tokens only.

## 0. Decisions & infrastructure

- [ ] Choose the component technology
  - [ ] CSS-first: every atom and effect should work as a plain class
        (`.nerv-label`, `.nerv-hazard`) before it becomes an element
  - [ ] Web components: compare Lit and vanilla custom elements
        (bundle size, SSR, Remotion compatibility)
  - [ ] React wrappers, generated or hand-written, for the Remotion app and the
        stream overlay
- [ ] Naming: `nerv-*` tag prefix and `.nerv-*` class prefix, BEM-like parts
- [ ] Theming: semantic tokens overridable per container (`data-nerv-theme="alert" | "magi" | "terminal" | "light"`)
- [ ] Library build (Vite library mode) with package `exports` for `nerv.css`,
      `tokens.css`, `fonts.embedded.css`, `fonts.google.css` and the components
- [ ] Optional font subsets: a lighter build without Noto Serif JP and without
      the `.woff` fallbacks
- [ ] `prefers-reduced-motion`: every animation and flicker can be turned off
- [ ] Accessibility: decorative elements `aria-hidden`, real text for readouts,
      contrast checks on the semantic pairs
- [ ] Visual regression tests (Storybook test runner and screenshots)
- [ ] Publish to npm, deploy Storybook to GitHub Pages
- [ ] Fill the README "Colors" and "Elements" sections (link to Storybook)

## 1. Foundations

- [x] Colour tokens sampled from the frames
- [x] Typography tokens, embedded and Google Fonts loading, Storybook toolbar switch
- [x] Spacing, strokes, radii, glow, hazard and scanline patterns
- [ ] Motion tokens: durations, steps() easings for "digital" movement, blink rate
- [ ] Z-index and layering tokens for overlays
- [ ] Iconography page: triangle warning [004](docs/REFERENCE.md#004), NERV leaf
      emblem (draw our own; do not copy the logo), Y-emblem
      [020](docs/REFERENCE.md#020), unit icons [070](docs/REFERENCE.md#070)
- [ ] Themes page: alert red, MAGI mint, terminal phosphor, blue CRT
      [092](docs/REFERENCE.md#092), light mode [050](docs/REFERENCE.md#050)

## 2. Effects

Pure CSS where possible (filters, gradients, `@property` animations), applied as
classes or wrappers.

- [ ] Glow: text and box glow utility on top of `--nerv-glow-*`
- [ ] Scanlines overlay and CRT vignette/curvature
- [ ] Flicker / blink (status lamps, warnings) with `steps()`
- [ ] Noise / static, signal-loss transition [014](docs/REFERENCE.md#014)
- [ ] Halftone / dot texture [010](docs/REFERENCE.md#010)
- [ ] Glitch / blocky displacement [062](docs/REFERENCE.md#062)
- [ ] Pixelated bitmap (`image-rendering: pixelated` with a posterise filter)
      [001](docs/REFERENCE.md#001)
- [ ] Monochrome tint of footage (orange, red, green) [001](docs/REFERENCE.md#001),
      [041](docs/REFERENCE.md#041)
- [ ] Double exposure / overlay blend [056](docs/REFERENCE.md#056)
- [ ] Perspective tilt (3D-rotated panel) [003](docs/REFERENCE.md#003),
      [016](docs/REFERENCE.md#016), [028](docs/REFERENCE.md#028)
- [ ] Rainbow gradient fill [029](docs/REFERENCE.md#029),
      [034](docs/REFERENCE.md#034), [088](docs/REFERENCE.md#088)
- [ ] Typing / text reveal for terminals

## 3. Atoms

- [ ] **Label box**: outlined, condensed caps, optional rounded corners and fill
      [001](docs/REFERENCE.md#001), [017](docs/REFERENCE.md#017),
      [023](docs/REFERENCE.md#023), [078](docs/REFERENCE.md#078)
- [ ] **Bilingual label**: kanji line plus Latin line, stacked or inline
      [003](docs/REFERENCE.md#003), [006](docs/REFERENCE.md#006),
      [011](docs/REFERENCE.md#011)
- [ ] **Stamp / seal**: double stroke, Mincho kanji, optionally rotated
      [005](docs/REFERENCE.md#005), [022](docs/REFERENCE.md#022)
- [ ] **Hazard band**: chevron or diagonal stripes, configurable colours and
      direction [002](docs/REFERENCE.md#002), [040](docs/REFERENCE.md#040),
      [082](docs/REFERENCE.md#082)
- [ ] **Rule**: single, double, ticked [058](docs/REFERENCE.md#058)
- [ ] **Status lamp**: off, on, blinking [003](docs/REFERENCE.md#003)
- [ ] **Seven-segment display**: DSEG with ghost segments, colon blink, italic
      variant [003](docs/REFERENCE.md#003), [044](docs/REFERENCE.md#044),
      [050](docs/REFERENCE.md#050)
- [ ] **Big numeral** readout [008](docs/REFERENCE.md#008),
      [025](docs/REFERENCE.md#025), [083](docs/REFERENCE.md#083)
- [ ] **Crosshair / marker**: `+`, `×`, target diamond
      [041](docs/REFERENCE.md#041), [049](docs/REFERENCE.md#049)
- [ ] **Corner brackets** frame [086](docs/REFERENCE.md#086)
- [ ] **Ruler / tick scale**, horizontal and vertical
      [030](docs/REFERENCE.md#030), [048](docs/REFERENCE.md#048),
      [079](docs/REFERENCE.md#079)
- [ ] **Tag / arrow tag** (pointer label) [072](docs/REFERENCE.md#072)
- [ ] **Hex plate** (elongated hexagon) [044](docs/REFERENCE.md#044)
- [ ] **Binary / filler text** block [021](docs/REFERENCE.md#021),
      [037](docs/REFERENCE.md#037)

## 4. Components

- [ ] **Alert screen**: full-screen word between hazard bands, blink
      [002](docs/REFERENCE.md#002), [006](docs/REFERENCE.md#006),
      [042](docs/REFERENCE.md#042)
- [ ] **Title block**: skewed/rotated title with rules, caution text
      [021](docs/REFERENCE.md#021), [023](docs/REFERENCE.md#023),
      [040](docs/REFERENCE.md#040)
- [ ] **Battery timer**: countdown (live), mode lamps (STOP/SLOW/NORMAL/RACING),
      internal/external indicator [003](docs/REFERENCE.md#003),
      [009](docs/REFERENCE.md#009)
- [ ] **Clock panel**, dark and light variants [044](docs/REFERENCE.md#044),
      [050](docs/REFERENCE.md#050)
- [ ] **Bar meter**: segmented, threshold line, vertical/horizontal
      [039](docs/REFERENCE.md#039), [052](docs/REFERENCE.md#052),
      [083](docs/REFERENCE.md#083)
- [ ] **Pill bars** comparison [080](docs/REFERENCE.md#080)
- [ ] **3D bar gauge** [031](docs/REFERENCE.md#031), [069](docs/REFERENCE.md#069)
- [ ] **Status list**: rows with state per item, hazard status box
      [017](docs/REFERENCE.md#017), [025](docs/REFERENCE.md#025)
- [ ] **Status matrix**: grid of two-state cells [053](docs/REFERENCE.md#053),
      [061](docs/REFERENCE.md#061)
- [ ] **Terminal**: monospace dump with columns, colour variants (green, red),
      typing animation [012](docs/REFERENCE.md#012),
      [032](docs/REFERENCE.md#032), [077](docs/REFERENCE.md#077)
- [ ] **Data table** in a box [060](docs/REFERENCE.md#060)
- [ ] **Folder tabs** [067](docs/REFERENCE.md#067)
- [ ] **Reticle / targeting** [054](docs/REFERENCE.md#054)
- [ ] **Viewfinder / camera HUD** [048](docs/REFERENCE.md#048),
      [076](docs/REFERENCE.md#076)
- [ ] **Profile card** (LCD style) [087](docs/REFERENCE.md#087)
- [ ] **Name plate** over footage [089](docs/REFERENCE.md#089)
- [ ] **MAGI card**: one of the three units with its state
      [018](docs/REFERENCE.md#018), [058](docs/REFERENCE.md#058)

## 5. Patterns (data visualisation)

SVG or canvas, data-driven, animatable.

- [ ] **Hex grid**: flat and perspective, per-cell state, heatmap
      [004](docs/REFERENCE.md#004), [015](docs/REFERENCE.md#015),
      [057](docs/REFERENCE.md#057), [059](docs/REFERENCE.md#059),
      [072](docs/REFERENCE.md#072), [073](docs/REFERENCE.md#073)
- [ ] **Crosshair grid** background (`+` / `×` lattice)
      [001](docs/REFERENCE.md#001), [043](docs/REFERENCE.md#043),
      [090](docs/REFERENCE.md#090)
- [ ] **Waveform**: many-line bundle, vertical lanes, sine bundles
      [030](docs/REFERENCE.md#030), [038](docs/REFERENCE.md#038),
      [085](docs/REFERENCE.md#085)
- [ ] **Line / step chart** with threshold [024](docs/REFERENCE.md#024),
      [064](docs/REFERENCE.md#064)
- [ ] **Symmetric axis chart** [008](docs/REFERENCE.md#008),
      [079](docs/REFERENCE.md#079)
- [ ] **Scribble plot** [066](docs/REFERENCE.md#066), [081](docs/REFERENCE.md#081)
- [ ] **Monitor traces** (medical) [092](docs/REFERENCE.md#092)
- [ ] **Contour map**: flat, perspective, overlay [026](docs/REFERENCE.md#026),
      [027](docs/REFERENCE.md#027), [028](docs/REFERENCE.md#028),
      [063](docs/REFERENCE.md#063)
- [ ] **Line-art map** with unit icons and trajectories
      [055](docs/REFERENCE.md#055), [070](docs/REFERENCE.md#070),
      [071](docs/REFERENCE.md#071)
- [ ] **Node graph / schematic**: numbered diamonds, routing lines
      [007](docs/REFERENCE.md#007), [016](docs/REFERENCE.md#016),
      [018](docs/REFERENCE.md#018), [077](docs/REFERENCE.md#077)
- [ ] **Radial / concentric layout** [020](docs/REFERENCE.md#020),
      [051](docs/REFERENCE.md#051)
- [ ] **Glyph matrix**: repeated characters, colour bands
      [019](docs/REFERENCE.md#019), [037](docs/REFERENCE.md#037),
      [065](docs/REFERENCE.md#065)
- [ ] **Wireframe body / mesh** [033](docs/REFERENCE.md#033),
      [034](docs/REFERENCE.md#034)
- [ ] **Triangle tessellation** [091](docs/REFERENCE.md#091)
- [ ] **Pentagon outline** with nested labels [074](docs/REFERENCE.md#074)
- [ ] **Rainbow filaments** [075](docs/REFERENCE.md#075)

## 6. Layouts

- [ ] **Full-bleed** single message [002](docs/REFERENCE.md#002),
      [006](docs/REFERENCE.md#006)
- [ ] **Central band** with corner tags [011](docs/REFERENCE.md#011)
- [ ] **HUD overlay on footage**: slot for video/image plus label layer
      [041](docs/REFERENCE.md#041), [043](docs/REFERENCE.md#043),
      [086](docs/REFERENCE.md#086), [089](docs/REFERENCE.md#089)
- [ ] **MAGI three-panel** [018](docs/REFERENCE.md#018),
      [019](docs/REFERENCE.md#019), [058](docs/REFERENCE.md#058)
- [ ] **Diagonal split** [036](docs/REFERENCE.md#036),
      [082](docs/REFERENCE.md#082)
- [ ] **Video grid** with captions [013](docs/REFERENCE.md#013)
- [ ] **Big screen** with framed sub-panel [068](docs/REFERENCE.md#068)
- [ ] **Light-mode panel** [049](docs/REFERENCE.md#049),
      [050](docs/REFERENCE.md#050), [053](docs/REFERENCE.md#053)

## 7. Scenes / examples

Full-screen recreations that combine the pieces above, one Storybook page each
(`Scenes/…`). They double as integration tests and as Remotion compositions.

- [ ] **Emergency**: 非常事態 / EMERGENCY title, then ALERT
      [002](docs/REFERENCE.md#002), [006](docs/REFERENCE.md#006)
- [ ] **Internal battery**: live countdown, lamps, perspective tilt
      [003](docs/REFERENCE.md#003)
- [ ] **Pattern blue**: Angel detection on a hex wall
      [004](docs/REFERENCE.md#004), [022](docs/REFERENCE.md#022)
- [ ] **A.T. Field**: skewed title block [021](docs/REFERENCE.md#021)
- [ ] **MAGI vote**: three units, 提訴 / 決議, approval states
      [018](docs/REFERENCE.md#018), [058](docs/REFERENCE.md#058)
- [ ] **Boot sequence**: terminal dump, CO-CPU checks, then status matrix
      [012](docs/REFERENCE.md#012), [061](docs/REFERENCE.md#061)
- [ ] **Synchronisation test**: waveforms, bar meters, pilot profile card
      [030](docs/REFERENCE.md#030), [052](docs/REFERENCE.md#052),
      [087](docs/REFERENCE.md#087)
- [ ] **Tactical map**: contour map, unit tags, trajectories
      [055](docs/REFERENCE.md#055), [070](docs/REFERENCE.md#070),
      [071](docs/REFERENCE.md#071)
- [ ] **Pilot vanished**: medical monitor, blue CRT [078](docs/REFERENCE.md#078),
      [092](docs/REFERENCE.md#092)
- [ ] **Camera HUD** over footage [048](docs/REFERENCE.md#048),
      [076](docs/REFERENCE.md#076)

## 8. Downstream apps (README goals)

- [ ] Remotion app: scenes as compositions, deterministic animation (frame-driven, no timers)
- [ ] Stream overlay app: scene switcher, live clock and timer, alert trigger
- [ ] Demo site on GitHub Pages
