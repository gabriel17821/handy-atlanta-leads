Add Aaron's actual logo to the site, replacing the placeholder orange diamond mark.

## Steps

1. Upload the attached logo to Lovable Assets CDN via `lovable-assets create` from `/mnt/user-uploads/image.png`, saving the pointer to `src/assets/logo.png.asset.json` (avoids bloating the repo with the binary).
2. Replace the placeholder logo (orange square + diamond) in two places in `src/routes/index.tsx`:
   - **Nav** — show the logo image at ~40px tall; drop the redundant "Come In Handy ATL" wordmark next to it since the logo already contains the wordmark. Keep a small "Atlanta" tag in brand orange beside it for local context.
   - **Footer** — same treatment at ~48px tall.
3. Keep the rest of the page untouched.
