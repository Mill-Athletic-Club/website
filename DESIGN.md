# Design direction

## Concept (updated to match "The MAC" logo)

The site now follows the real brand mark: a dark, neon-outlined badge with a
teal-to-blue gradient, built around a kettlebell and the "MAC" monogram. The
web design should read as the digital extension of that logo, not a separate
aesthetic — dark surfaces, the same teal-to-blue gradient as the signature
accent, bold interlocking type for headlines.

The earlier "industrial mill" concept (brick red, slab serif, light
background) is retired now that we have a real logo to build around.

## Palette

| Token     | Hex                              | Use                                       |
|-----------|-----------------------------------|--------------------------------------------|
| bg        | `#050608`                        | Primary background (matches logo backdrop) |
| surface   | `#101318`                        | Card/section surfaces, slightly lifted     |
| text      | `#F3F5F6`                        | Primary text on dark backgrounds           |
| muted     | `#8A9099`                        | Secondary text, captions                   |
| teal      | `#2FE8C8`                        | Gradient start - highlights, glows         |
| blue      | `#2B5FE0`                        | Gradient end - primary CTAs, links         |
| gradient  | `linear-gradient(#2FE8C8, #2B5FE0)` | Buttons, headline accents, dividers    |

## Type

- **Display**: a bold, heavy sans (e.g. Archivo Black or Arial Black) for
  headlines and the "MAC" wordmark treatment - matches the logo's blocky
  interlocking letterforms.
- **Body**: Inter - clean and legible against the dark background.

## Layout principles

- Dark backgrounds throughout (`bg` token), not just the hero - consistency
  with the logo matters more than variety here.
- The teal-to-blue gradient is the signature element: use it for the primary
  CTA button, key headline words, and thin divider lines - not scattered
  everywhere. One or two gradient moments per section, not gradient-on-everything.
- Logo mark can anchor the hero or nav; give it room to glow (subtle
  box-shadow/blur in the brand teal is appropriate here, unlike a flat
  corporate site, since it matches the logo's own neon treatment).
- Avoid rounded "SaaS card" kits for class/trainer listings - keep edges
  fairly sharp/minimal to match the badge logo's geometric precision.

## What to avoid as the site grows

- Don't reintroduce light backgrounds for main content sections - breaks
  continuity with the dark logo identity.
- Don't overuse the glow effect - reserve it for the logo and 1-2 key
  accent moments so it stays special.
- Keep motion minimal and deliberate, consistent with prior guidance.
