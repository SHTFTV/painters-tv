export interface ServiceGuide {
  slug: string;
  name: string;
  image: string;
  blurb: string;
}

// Single source of truth for the in-depth service guide pages. Used for routing
// decisions (which service slugs have a pillar page), internal "related guides"
// linking, and the image sitemap. Keep slugs in sync with the services DB seed
// (scripts/src/seed-services.ts) and the App.tsx routes.
export const SERVICE_GUIDES: ServiceGuide[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    image: "/interior.webp",
    blurb:
      "Walls, ceilings, trim, and accent work — costs, finishes, and how pros get a flawless result.",
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    image: "/exterior.webp",
    blurb:
      "Protect and transform your home's exterior — prep, products, timing, and curb appeal.",
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    image: "/commercial.webp",
    blurb:
      "Offices, retail, and industrial spaces painted on schedule with minimal disruption.",
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    image: "/cabinet.webp",
    blurb:
      "Refresh a kitchen for a fraction of replacement cost — the pro spray-finish process explained.",
  },
  {
    slug: "deck-fence-staining",
    name: "Deck & Fence Staining",
    image: "/deck.webp",
    blurb:
      "Stain vs. seal, prep, product choice, and timing to protect wood for years.",
  },
  {
    slug: "wallpaper-removal",
    name: "Wallpaper & Drywall",
    image: "/drywall.webp",
    blurb:
      "Wallpaper removal and drywall repair done right so your new paint lays flawless.",
  },
  {
    slug: "epoxy-flooring",
    name: "Epoxy Flooring",
    image: "/epoxy.webp",
    blurb:
      "Durable, beautiful epoxy floor coatings for garages and shops — systems, cost, and longevity.",
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    image: "/pressure-washing.webp",
    blurb:
      "Restore siding, decks, and driveways — when to wash, soft-wash vs. pressure, and what it costs.",
  },
];

export const PILLAR_SLUGS: string[] = SERVICE_GUIDES.map((g) => g.slug);

export function relatedGuides(currentSlug: string, count = 4): ServiceGuide[] {
  const others = SERVICE_GUIDES.filter((g) => g.slug !== currentSlug);
  const start = SERVICE_GUIDES.findIndex((g) => g.slug === currentSlug);
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  return rotated.slice(0, count);
}
