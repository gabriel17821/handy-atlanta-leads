# Come In Handy Atlanta — Single Page Site

Build a high-converting one-page site using the selected "Industrial Modern" direction (orange `#F97316` + navy `#0F172A`, Bricolage Grotesque + Inter), expanded with full content and personalization for owner Aaron Johnson.

## Sections (top to bottom)

1. **Sticky nav** — logo, services anchor, reviews anchor, prominent call button `+1 330-412-6268`
2. **Hero** — "We clear the junk, you keep the peace." Same-day Atlanta badge, dual CTAs (Call Aaron / Get Free Quote), owner-operated proof chip, hero truck image with floating Melissa S. review card
3. **Trust strip** — same-day availability · licensed & insured · owner-operated · 5★ Yelp · Atlanta metro
4. **Services grid** — 3 category cards (Junk Removal, Clean-Outs, Pro Cleaning) on navy background, each listing full sub-services
5. **Full service list** — compact 2-col chip grid covering every service the user listed (appliance, Christmas tree, construction debris, furniture, mattress, tire, yard, landscaping, recycling, in-state moving, trash, etc.)
6. **How it works** — 3 steps (Text/Call → Free quote → Same-day haul)
7. **Featured Yelp review** — Melissa S. full quote + Aaron's owner reply, styled as authentic Yelp card
8. **Owner spotlight** — Aaron's portrait, name, personal note from the owner, signature
9. **Service area** — Atlanta + metro neighborhoods (Buckhead, Decatur, Sandy Springs, Marietta, Smyrna, etc.)
10. **Quote form + CTA** — name, phone, service type, details; secondary big call link
11. **Footer** — phone, hours (Mon–Sat 8–7), service area, owner credit

## Technical Details

- Single route `src/routes/index.tsx` (replace placeholder), all sections as components in `src/components/sections/`
- Design tokens added to `src/styles.css` under `@theme inline`: `--color-brand` (orange), `--color-navy`, plus existing shadcn tokens preserved
- Fonts: Bricolage Grotesque + Inter loaded via `<link>` in `src/routes/__root.tsx` head (not `@import`)
- Update root `head()` SEO: title "Come In Handy Atlanta — Same-Day Junk Removal, Hauling & Cleaning", meta description, OG tags, phone in JSON-LD LocalBusiness
- Two generated images: hero truck shot, Aaron's portrait (saved to `src/assets/`)
- Sticky mobile call bar at bottom on small screens
- Quote form is presentational (no backend) — submit shows toast confirmation and reveals the phone number; no Cloud needed
- All phone CTAs use `tel:+13304126268`
- Personalization touches: Aaron's name in hero subhead, signature in owner section, Melissa's review verbatim with Aaron's reply verbatim, "Owner Operator" badge throughout
