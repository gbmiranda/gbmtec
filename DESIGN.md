---
name: GBM Tecnologia
description: A showroom of square ruled lattices where the only color in the room is the software Gabriel shipped.
colors:
  gallery-white: "#f5f5f2"
  paper-white: "#ffffff"
  lacquer-black: "#111214"
  slate-gray: "#545a62"
  hammered-silver: "#a4a9b0"
  hairline-gray: "#d3d5d8"
  night-lacquer: "#0e0f11"
  night-paper: "#17181b"
  night-ink: "#f2f2ee"
  night-slate: "#a8adb5"
  night-silver: "#5e636b"
  night-hairline: "#2a2c30"
typography:
  display:
    fontFamily: "Josefin Sans, Century Gothic, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 8.6vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.03
    letterSpacing: "0.03em"
  headline:
    fontFamily: "Josefin Sans, Century Gothic, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.6vw, 2.9rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "0.06em"
  title:
    fontFamily: "Josefin Sans, Century Gothic, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.1em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Josefin Sans, Century Gothic, Avenir Next, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  hairline-gap: "1px"
  cell-gap: "12px"
  frame-pad: "14px"
  section-y: "clamp(60px, 9vw, 120px)"
  topbar: "64px"
components:
  cell:
    backgroundColor: "transparent"
    textColor: "{colors.lacquer-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  cell-hover:
    backgroundColor: "{colors.lacquer-black}"
    textColor: "{colors.gallery-white}"
  cell-solid:
    backgroundColor: "{colors.lacquer-black}"
    textColor: "{colors.gallery-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  cell-solid-hover:
    backgroundColor: "{colors.gallery-white}"
    textColor: "{colors.lacquer-black}"
  window-caption:
    backgroundColor: "{colors.gallery-white}"
    textColor: "{colors.lacquer-black}"
    padding: "16px 18px"
  window-caption-hover:
    backgroundColor: "{colors.lacquer-black}"
    textColor: "{colors.gallery-white}"
  cartouche-cell:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.lacquer-black}"
    rounded: "{rounded.none}"
    padding: "clamp(24px, 3vw, 40px)"
  channel:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.lacquer-black}"
    padding: "clamp(20px, 2.6vw, 32px)"
  channel-principal:
    backgroundColor: "{colors.lacquer-black}"
    textColor: "{colors.gallery-white}"
---

# Design System: GBM Tecnologia

## Overview

**Creative North Star: "The Square Showroom"**

A Hoffmann / Wiener Werkstatte showroom for one engineer's work: gallery-white walls, lacquer-black rules, hammered-silver hairlines, and nothing round. Every region of the page is a ruled square cell, and every control is a cell that fills solid black when it is active. The page is drawn, not decorated: the structure is the ornament.

The only saturated color in the room is the real product screenshots (Gabaritei, UpUai, Petalia, Estilia, Saiph TI, TAI) shown in framed windows. The chrome stays achromatic so the shipped work reads as the proof. Density is calm and gallery-like: large vertical rests, small letterspaced capitals for labels, a quiet grotesk for reading. Dark mode inverts to lacquer black with light rules, same geometry.

The build rejects the dark neon developer portfolio and the white SaaS template of a headline over a row of rounded cards.

**Key Characteristics:**
- Zero radius everywhere; the form language is square, ruled and lattice-built.
- Achromatic chrome (warm gallery white, black, silver); color arrives only through screenshots.
- Josefin Sans light uppercase, letterspaced, for headings and labels; Hanken Grotesk for reading.
- Active state is always a solid black fill with a color flip, never a glow or a lift.
- Depth by rules: 1px black gap lattices and double-ruled cartouches, no shadows.
- Didone monogram drawn once: a 13-unit pen line traces the skeleton (G, M, B), then the ink of the mark fills over it.

## Colors

A restrained achromatic palette: warm gallery off-white, one lacquer black, and two cool grays for silver and secondary text. There is no accent hue.

### Primary
- **Lacquer Black** (#111214): text, every structural rule, the filled state of every cell, focus outlines, selection background. In dark mode the same role (`--tinta`) is taken by Night Ink.

### Neutral
- **Gallery White** (#f5f5f2): page ground, and the text color on filled cells.
- **Paper White** (#ffffff): inset surfaces that sit one step above the wall (service cells, cartouche, channel cells, footer stamp, screenshot mat).
- **Slate Gray** (#545a62): secondary text, labels, dd/notes, idle metadata.
- **Hammered Silver** (#a4a9b0): the outline of double-ruled cartouches, the pierced-square row, scrollbar.
- **Hairline Gray** (#d3d5d8): quiet row dividers inside lists (product rows, timeline, stamp rows).
- **Night Lacquer** (#0e0f11), **Night Paper** (#17181b), **Night Ink** (#f2f2ee), **Night Slate** (#a8adb5), **Night Silver** (#5e636b), **Night Hairline** (#2a2c30): the dark-scheme counterparts, swapped through `prefers-color-scheme: dark` on the same custom property names.

### Named Rules
**The Product-Only Color Rule.** Saturated color appears only inside real product screenshots. Never add an accent hue, gradient or tinted fill to the chrome.

**The Two-Weight Rule.** Black rules (1px) divide structure; gray hairlines divide content inside a structure. Do not mix them in the same job.

## Typography

**Display Font:** Josefin Sans (with Century Gothic, Avenir Next, system-ui)
**Body Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, Roboto)

**Character:** Geometric, thin, letterspaced capitals set against a plain humanist grotesk. The capitals carry the Wiener Werkstatte voice; the grotesk keeps long pt-BR copy readable. Both are self-hosted variable families, latin subset only (`assets/fonts/`, OFL licenses alongside; Josefin 200-700, Hanken 300-700), preloaded from the page head.

### Hierarchy
- **Display** (300, clamp(2.5rem, 8.6vw, 6rem) narrowing to clamp(3.2rem, 5.4vw, 5rem) from 1100px, 1.03, 0.03em, uppercase): the single h1, max 11em wide, balanced.
- **Headline** (300, clamp(1.8rem, 3.6vw, 2.9rem), 1.08, 0.06em, uppercase): section h2.
- **Title** (300 to 400, 1.2rem to clamp(1.5rem, 2.2vw, 1.95rem), 1.12 to 1.2, 0.05 to 0.1em, uppercase): service h3, product names, timeline entries.
- **Numeral** (200, clamp(3.2rem, 6vw, 4.8rem), 0.9, lining figures): method step numbers; the featured figure uses 200 at clamp(2.2rem, 5.4vw, 4.4rem).
- **Body** (400, clamp(1rem, 0.96rem + 0.2vw, 1.125rem), 1.62): Hanken Grotesk; measures capped at 46 to 68ch by context, lead up to 62ch.
- **Label** (500 to 600, 0.74rem to 0.85rem, 0.14 to 0.22em, uppercase, Josefin): buttons, nav, status, definition terms, secondary captions in Slate Gray.

### Named Rules
**The Capitals-Are-Light Rule.** Josefin is uppercase and letterspaced at every size; display sizes stay at weight 200 to 300, small labels rise to 500 to 600 for legibility. Body copy is never uppercase and never Josefin.

## Layout

A centered container of 1320px plus a fluid gutter (`clamp(16px, 4vw, 48px)`), with section rest of `clamp(60px, 9vw, 120px)`. The sticky top bar is 64px of ruled cells. Grids are lattices: a container painted lacquer black with `gap: 1px` and cell backgrounds laid on top, so the gaps read as 1px rules. Observed lattices: project windows (2 columns, 3 from 1000px), services (3 from 1000px), method steps (4 from 900px), tools (2 from 560px, 3 from 980px).

Section headers are two-up (5fr / 7fr at 900px) or "lateral" (4fr / 8fr at 960px, sticky title left, body right) with a black rule that draws left to right once on reveal. Product rows and timeline entries are ruled lists (4-column grid at 960px, 150px date column at 760px). Mobile-first: below 860px the nav collapses into a Menu cell and a vertical list of full-width cells (56px minimum). Print keeps only the career timeline.

## Elevation & Depth

Flat. There are no box-shadows anywhere in the build. Depth comes from rules, paper-versus-wall tonal steps (Paper White over Gallery White, Night Paper over Night Lacquer), and the double-ruled cartouche. The only motion that suggests depth is the 1.05 scale of a screenshot inside its fixed mat on hover.

### Named Rules
**The Flat-Ruled Rule.** Surfaces are flat. Separation is a 1px rule, a tonal step, or an offset outline; never a shadow, blur or glow.

## Shapes

Square only: `border-radius: 0` on every cell, and 1px lacquer borders. Recurring geometry:
- **Double-ruled cartouche:** a 1px black border plus a 1px silver outline offset by 6px (with a 6px outer margin to leave room), used on services, the featured figure and the contact channels.
- **Pierced square:** a hollow 8 to 11px square outline, as list markers, a status glyph (filled square = live, hollow = pre-launch), and a masked row of hollow squares (24 x 22px tile, silver) used as divider only at the two turns of the page.
- **Window mat:** a screenshot sits in a 1px black frame inside a 14px mat in the wall color, 4:3, cropped left.
- **Monogram:** the GBM Didone mark (one filled path, 512 viewBox, Fibonacci weights 34/21/13 on a ring of radius 233; source in `marca/oficial/gbm.svg`), always solid in the ink color. In the hero (1100px and up only; hidden on phones and tablets) the skeleton is traced once (2.4s, staggered 0.4s) and the filled mark fades in at 1.8s.
- **Brand logos:** each product row is headed by that brand's own logo, taken unchanged from its live site (`assets/logo/marcas/`, Gabaritei and UpUai as icon plus name, like their headers) and rendered as a CSS mask filled with the ink color, so it follows light and dark. Heights are set per logo so the areas look alike (24 to 37px). The brand name stays in visually hidden text.

## Components

### Cell (button and link control)
Square, 52px high, 0 26px padding, 1px lacquer border, Josefin label (0.8rem, 500, 0.18em, uppercase). Idle is transparent; hover fills Lacquer Black with Gallery White text (250ms, expo-out). The solid variant starts filled and inverts on hover. Icons are 14px square-capped line SVGs. Focus is a 2px lacquer outline at 3px offset.

### Navigation
Sticky top bar on the wall color with a 1px lacquer bottom rule. The 40px mark sits free on the left, with no rules around it; the links are plain letterspaced text on the right and underline on hover. No sales button in the header. Below 860px a plain "Menu" text button (it reads "Fechar" when open) toggles a stacked list of ruled rows. In-page links scroll to their section and never leave a `#` in the address; the mark scrolls back to the top.

### Project windows
A lattice of square peepholes onto live products: screenshot in a ruled frame on a mat, with a caption cell (name in Josefin 600, descriptor in Slate Gray, arrow icon) under a 1px rule. Hover or focus fills the caption black and nudges the screenshot scale to 1.05 (1.1s).

### Cartouche cells
Services, the featured figure and contact channels sit on Paper White, inside a double-ruled frame. Channel cells are fully clickable and invert to black on hover; the principal channel starts filled black and inverts to paper on hover. Focus uses an inset outline (-8px).

### Product rows
Ruled list rows (Hairline Gray) with a title, text, parts and a status marker: filled square for live, hollow square for "pre". No cards, no icons.

### Footer stamp
A drawing-sheet title block: a 1px bordered Paper White box with a label header cell and dl rows split by Hairline Gray, beside the large monogram.

## Do's and Don'ts

### Do:
- **Do** build every region as a ruled square cell; make lattices with a black container and `gap: 1px`.
- **Do** make every active, hover or current state a solid Lacquer Black fill with Gallery White text.
- **Do** set headings and labels in Josefin Sans uppercase with 0.05 to 0.22em tracking; read in Hanken Grotesk.
- **Do** keep screenshots as the only saturated color, in a ruled frame on a mat.
- **Do** switch theme only by reassigning the custom properties under `prefers-color-scheme: dark`.
- **Do** reserve the pierced-square divider for the major turns of the page, and draw the monogram once.
- **Do** respect `prefers-reduced-motion`: transitions collapse to near-zero and the monogram does not animate.

### Don't:
- **Don't** introduce border-radius, shadows, gradients, glass or glow.
- **Don't** add an accent hue or color the chrome; no neon developer-portfolio dark mode.
- **Don't** use a headline over a row of rounded cards (the white SaaS template).
- **Don't** use filled rounded pill buttons or underlined text-only CTAs in place of a cell.
- **Don't** mix lacquer rules and gray hairlines for the same division job.
- **Don't** add em dashes as punctuation in copy.

## Not canonized

Small tagline lines under service titles and the "Em construção" label use a letterspaced Josefin caps style in Slate Gray; they are local to those blocks and are not a general eyebrow or kicker pattern for new surfaces.
