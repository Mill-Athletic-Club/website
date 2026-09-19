# Mill Athletic Club — Website

Next.js + Sanity + Tailwind, deployed on Vercel.

See `DESIGN.md` for the visual direction and rationale.

## Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Sanity (headless)
- **Hosting**: Vercel
- **Future**: Supabase (accounts/data), Stripe (payments) — added in Phase 3+

## Getting started

1. Install dependencies:
   ```
   npm install
   ```

2. Create a Sanity project (free tier):
   ```
   npx sanity@latest init
   ```
   This gives you a `projectId` and `dataset` name.

3. Create a `.env.local` file in the project root:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Run the dev server:
   ```
   npm run dev
   ```
   Site runs at `http://localhost:3000`.

5. Deploy: connect this repo to Vercel and add the same environment
   variables in the Vercel project settings.

## Project structure

```
app/                  Next.js pages (App Router)
components/           React components (Header, Hero, Footer, ...)
sanity/schemas/       Sanity content schemas
sanity/lib/client.ts  Sanity client configuration
DESIGN.md             Visual direction and design rationale
```

## Roadmap

- [x] **Phase 1 — Landing page**: hero, nav, footer scaffolded. Still needed:
      About section, class types preview, trainer bios, testimonials,
      location/map, and wiring the Hero/Footer content to Sanity
      (`siteSettings` schema is ready).
- [ ] **Phase 2 — Blog**: `blogPost` schema is ready. Needs a blog index page
      (`app/blog/page.tsx`) and post detail page (`app/blog/[slug]/page.tsx`).
- [ ] **Phase 3 — Custom workouts**: introduce Supabase for accounts + data.
- [ ] **Phase 4 — Class scheduling**: extend Supabase schema with classes/bookings.
- [ ] **Phase 5 — Payments**: integrate Stripe, tied to Supabase accounts.

## Notes

- The `stone` / `ink` / `brick` / `steel` color tokens and `display` / `body`
  font tokens are defined in `tailwind.config.ts` — use these rather than
  raw hex values or arbitrary font names so the design stays consistent as
  new pages are added.
