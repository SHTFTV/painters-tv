# Painters.tv

Canonical production source: SHTFTV/painters-tv, main. Vercel project: painters-tv, Colin’s projects.

This repository restores the existing React/Vite painting site and every legacy city route. Run `npm ci`, `npm run build`, then `npm run check`. Vercel builds `dist/public` on pushes to main. No external Replit workspace or API build is required.

The page renderer preserves canonical URLs, the 23-page indexable sitemap, noindex on legacy city guides, search verification tags, email-draft enquiry ownership and original mascot artwork. Enquiries remain email drafts to the existing BuildersHaus contact; a backend is not implied by the migration.

`src/` contains editable components and content. `public/` contains optimized image assets. The original Netlify production remains available as rollback during the hosting cutover.
