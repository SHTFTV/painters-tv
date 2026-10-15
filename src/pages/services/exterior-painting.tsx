import {
  PillarPage,
  buildServiceJsonLd,
} from "@/components/content/pillar-page";
import {
  Section,
  Callout,
  DataTable,
  type TocItem,
  type FaqItem,
} from "@/components/content/article-ui";
import { Link } from "wouter";

const toc: TocItem[] = [
  { id: "overview", label: "What Is Exterior Painting" },
  { id: "benefits", label: "Benefits & Curb Appeal" },
  { id: "cost", label: "Cost & Pricing" },
  { id: "quantity", label: "Estimating Paint Quantity" },
  { id: "paint-types", label: "Best Paint & Products" },
  { id: "process", label: "The Professional Process" },
  { id: "prep", label: "Surface Prep & Repair" },
  { id: "weather", label: "Weather & Timing" },
  { id: "climate", label: "Climate & Regional Factors" },
  { id: "colors", label: "Choosing Colors" },
  { id: "siding", label: "Guidance by Siding Type" },
  { id: "lifespan", label: "How Long It Lasts" },
  { id: "diy-vs-pro", label: "DIY vs. Hiring a Pro" },
  { id: "hiring", label: "How to Hire a Painter" },
  { id: "warranties", label: "Warranties Explained" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "maintenance", label: "Maintenance & Aftercare" },
  { id: "faq", label: "FAQ" },
];

const faqs: FaqItem[] = [
  {
    question: "How much does it cost to paint the exterior of a house?",
    answer:
      "Exterior painting typically costs $1.50 to $4.50 per square foot of surface area, with most single-family homes falling between $3,000 and $12,000. A small single-story home may run $2,500 to $5,000, while a large two-story home with extensive trim, multiple stories, or difficult access can reach $8,000 to $15,000 or more. Siding material, home height, surface condition, paint grade, and regional labor rates are the biggest cost drivers.",
  },
  {
    question: "How long does exterior paint last?",
    answer:
      "A professional exterior paint job typically lasts 7 to 10 years, though results vary widely by climate, surface, and product. Wood siding may need repainting every 5 to 7 years, while fiber cement and high-quality acrylic on stucco can last 10 to 15 years. Harsh sun, salt air, freeze-thaw cycles, and moisture all shorten lifespan, while quality prep and premium paint extend it.",
  },
  {
    question: "What is the best temperature to paint a house exterior?",
    answer:
      "Most exterior paints apply best between 50 and 85 degrees Fahrenheit with low humidity and no rain in the forecast for 24 to 48 hours. Painting in direct, intense heat causes paint to dry too fast and leaves lap marks, while temperatures below the product's minimum prevent proper film formation and curing. Always check the manufacturer's stated temperature range, as some modern paints can be applied as low as 35 degrees.",
  },
  {
    question: "How long does exterior painting take?",
    answer:
      "A typical single-family home exterior takes 3 to 6 days for a professional crew, including pressure washing, scraping, priming, caulking, and two finish coats. Larger homes, extensive repairs, or homes needing significant scraping and sanding of failing paint can take a week or more. Weather delays are common and should be built into the schedule, since paint cannot be applied to wet surfaces or in rain.",
  },
  {
    question: "Do I need to pressure wash before painting?",
    answer:
      "Yes. Pressure washing or a thorough hand wash is a critical first step that removes dirt, chalk, mildew, pollen, and loose paint so the new coat can bond. Painting over a dirty or chalky surface is the leading cause of premature peeling. After washing, the surface must dry completely, usually 24 to 48 hours, before any primer or paint is applied to avoid trapping moisture under the film.",
  },
  {
    question: "How many coats of exterior paint are needed?",
    answer:
      "Most exterior projects require two finish coats over properly prepared and primed surfaces for full coverage, color uniformity, and maximum durability. Bare wood, repairs, and dramatic color changes also need a quality primer first. A single coat may be acceptable only when refreshing the exact same color on a sound, recently painted surface with a premium paint, but two coats is the professional standard.",
  },
  {
    question: "What is the best paint for exterior surfaces?",
    answer:
      "One hundred percent acrylic latex paint is the gold standard for most exterior surfaces because it is flexible, breathable, fade-resistant, and adheres well to wood, fiber cement, stucco, and masonry. It expands and contracts with the surface through temperature swings, resisting cracking and peeling. For specific substrates like raw metal or heavily weathered wood, a matched bonding or stain-blocking primer is essential for adhesion.",
  },
  {
    question: "What time of year is best for exterior painting?",
    answer:
      "Late spring through early fall is ideal in most climates because of warm, dry, stable weather. The key requirements are temperatures within the paint's range, low humidity, dry surfaces, and a multi-day window without rain. In hot climates, avoid mid-summer afternoons in direct sun; in cold climates, complete projects before nighttime temperatures drop below the paint's minimum film-forming temperature.",
  },
  {
    question: "Does exterior painting increase home value?",
    answer:
      "Yes. A fresh exterior paint job is one of the highest-impact improvements for curb appeal and is frequently cited as returning a significant portion of its cost at resale. It signals to buyers that the home is well-maintained, can make a listing photograph dramatically better, and helps a home sell faster. It also protects the structure, preventing costly wood rot and moisture damage that scares buyers away.",
  },
];

export default function ExteriorPainting() {
  const path = "/services/exterior-painting";
  return (
    <PillarPage
      slug="exterior-painting"
      seo={{
        title: "Exterior Painting: The Complete 2026 Homeowner's Guide",
        description:
          "A complete guide to exterior house painting — costs per square foot, the best paints for each siding type, the professional prep and application process, climate considerations, color selection, and how to hire a verified painter.",
        path,
        image: "/exterior.webp",
        imageAlt:
          "Professional painting crew on scaffolding painting the exterior of a two-story house on a sunny day",
      }}
      hero={{
        eyebrow: "Exterior Painting",
        title: "Exterior Painting: The Complete Homeowner's Guide",
        subtitle:
          "Protect and transform your home's exterior. Learn what exterior painting costs, which paints suit your siding, how professionals prep and apply for a finish that lasts a decade, and how to hire a verified, insured painter.",
        crumb: "Exterior Painting",
        image: "/exterior.webp",
        imageAlt:
          "Professional painting crew on scaffolding painting the exterior of a two-story house on a sunny day",
      }}
      quickAnswer={
        <p>
          Exterior painting typically costs <strong>$1.50 to $4.50 per square
          foot</strong>, with most single-family homes running{" "}
          <strong>$3,000 to $12,000</strong>. A professional job lasts 7 to 10
          years and protects siding from moisture, UV, and rot. The price
          depends on siding material, home height, surface condition, paint
          grade, and local labor rates, and thorough prep — washing, scraping,
          and priming — is what makes the finish last.
        </p>
      }
      takeaways={[
        "Exterior painting costs roughly $1.50-$4.50 per square foot; most homes run $3,000-$12,000.",
        "A quality exterior job lasts 7-10 years; prep work like washing, scraping, and priming determines longevity.",
        "100% acrylic latex is the best all-around exterior paint for flexibility and fade resistance.",
        "Weather is critical: paint at 50-85 degrees Fahrenheit, low humidity, with dry surfaces and no rain for 24-48 hours.",
        "Exterior paint is protection, not just looks - it prevents wood rot, moisture damage, and costly structural repairs.",
      ]}
      toc={toc}
      faqId="faq"
      faqs={faqs}
      cta={{
        title: "Refresh and protect your home's exterior",
        body: "Prepare your project scope and confirm credentials and availability directly. Directory listings are being restored.",
      }}
      jsonLd={buildServiceJsonLd({
        name: "Exterior Painting",
        description:
          "Professional exterior house painting services for siding, stucco, masonry, trim, and more.",
        url: path,
        crumb: "Exterior Painting",
        faqs,
        image: "/exterior.webp",
        headline: "Exterior Painting: The Complete 2026 Homeowner's Guide",
        howTo: {
          name: "How to Paint a House Exterior",
          steps: [
            {
              name: "Inspect and plan",
              text: "Assess siding condition, locate failing paint, rot, caulk failure, and mildew, then confirm scope, products, and colors before any work begins.",
            },
            {
              name: "Pressure wash",
              text: "Wash the entire exterior to remove dirt, chalk, mildew, pollen, and loose paint, then allow the surface to dry completely for 24 to 48 hours.",
            },
            {
              name: "Scrape and sand",
              text: "Remove all loose and peeling paint by scraping and sanding, feathering the edges so old paint does not telegraph through the new finish.",
            },
            {
              name: "Repair the substrate",
              text: "Replace rotted wood, fill nail holes and cracks, and restore damaged trim so the new coating has a sound surface to bond to.",
            },
            {
              name: "Prime bare areas",
              text: "Spot-prime or fully prime bare wood, repairs, stains, and bare metal with the correct primer for adhesion and stain blocking.",
            },
            {
              name: "Caulk the gaps",
              text: "Seal joints, cracks, and gaps around windows, doors, and trim with a quality exterior caulk to block water intrusion.",
            },
            {
              name: "Mask and protect",
              text: "Cover windows, lights, landscaping, walkways, and roofing, and remove or shield hardware before applying paint.",
            },
            {
              name: "Apply two finish coats",
              text: "Apply two coats of quality exterior paint by brush, roller, or sprayer with back-rolling, keeping a wet edge to avoid lap marks.",
            },
            {
              name: "Finish trim and inspect",
              text: "Coat trim, doors, and accents in a durable enamel, clean the site, and complete a final walkthrough to flag any touch-ups.",
            },
          ],
        },
      })}
    >
      <Section id="overview" heading="What Is Exterior Painting?">
        <p>
          Exterior painting is the preparation and coating of a building's
          outside surfaces — siding, trim, fascia, soffits, doors, shutters,
          railings, and sometimes masonry and stucco. Unlike interior work,
          exterior painting is first and foremost a{" "}
          <strong>protective system</strong>. The coating is your home's primary
          defense against sun, rain, wind, temperature swings, insects, and
          moisture intrusion. Aesthetics matter enormously for curb appeal, but
          the paint film is doing critical structural work every single day,
          shielding the wood and sheathing beneath it from the elements.
        </p>
        <p>
          Because exterior surfaces endure constant environmental stress, the
          margin for error is small. Skipped prep, the wrong product for the
          substrate, or application in poor weather can cause a paint job to fail
          in a year or two rather than lasting a decade. A well-executed exterior
          project is the result of disciplined sequencing: clean, repair, prime,
          caulk, and only then apply finish coats in the right conditions. When
          any of those steps is rushed or skipped, the failure shows up later as
          peeling, blistering, or chalking that forces an expensive redo.
        </p>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <h3>What exterior painting typically includes</h3>
        <ul>
          <li>
            <strong>Siding</strong> — wood, fiber cement, vinyl, aluminum,
            stucco, or masonry, the largest and most important surface.
          </li>
          <li>
            <strong>Trim, fascia, and soffits</strong> — the framing details
            around the roofline, windows, and corners that frame the home.
          </li>
          <li>
            <strong>Doors and shutters</strong> — high-impact accent surfaces
            that define the home's character and color scheme.
          </li>
          <li>
            <strong>Railings, columns, and porches</strong> — high-wear features
            that need durable, often enamel-grade coatings.
          </li>
          <li>
            <strong>Garage doors and outbuildings</strong> — frequently included
            to keep the whole property looking cohesive.
          </li>
        </ul>
        <p>
          Exterior painting overlaps with several related services. Most quality
          jobs begin with <Link href="/services/pressure-washing">pressure
          washing</Link>, and many homeowners pair an exterior repaint with{" "}
          <Link href="/services/deck-fence-staining">deck and fence staining</Link>{" "}
          to refresh the entire property at once. Understanding where each task
          fits helps you budget accurately and avoid paying for overlapping mobil-
          izations.
        </p>
      </Section>

      <Section id="benefits" heading="The Benefits: Protection Meets Curb Appeal">
        <p>
          Exterior painting delivers a rare combination of immediate visual
          payoff and long-term structural protection. It is consistently ranked
          among the best investments for curb appeal and resale value, and it is
          one of the few improvements that pays you back twice: once in how the
          home looks and again in the repairs it prevents. Few other projects
          touch both aesthetics and structural health so directly.
        </p>
        <h3>Structural protection</h3>
        <p>
          The paint film seals out moisture, the single greatest enemy of any
          home. Properly painted and caulked surfaces prevent water from reaching
          wood, where it causes rot, and keep it out of joints and gaps where it
          leads to mold and decay. A maintained coating can prevent thousands of
          dollars in repairs to siding, trim, and underlying sheathing. By the
          time bare wood is visible, deterioration has often already begun, which
          is why repainting on schedule is far cheaper than waiting for failure.
        </p>
        <h3>UV and weather resistance</h3>
        <p>
          Quality exterior paint contains UV-resistant pigments and binders that
          slow fading and chalking. It also remains flexible, expanding and
          contracting with the surface through heat and cold so it resists
          cracking and peeling far better than interior or low-grade paint. This
          elasticity is what allows a premium acrylic to survive a decade of
          thermal cycling that would destroy a cheaper coating in a couple of
          seasons.
        </p>
        <h3>Curb appeal and value</h3>
        <p>
          Nothing transforms a home's first impression like fresh exterior paint.
          A crisp, modern color scheme makes a property look newer, cleaner, and
          better cared for — translating directly into stronger offers and faster
          sales. For sellers, it is often the highest-return project available,
          and it dramatically improves listing photos, which is where most buyers
          form their first opinion. Appraisers and agents alike treat a sound,
          attractive exterior as a signal of overall maintenance.
        </p>
        <h3>Pest and mildew defense</h3>
        <p>
          A sound paint film denies insects the cracks and exposed wood they
          exploit, and mildew-resistant formulations help keep shaded, damp areas
          clean. This is especially valuable in humid and coastal climates, where
          biological growth and wood-boring pests can do real damage to an
          unprotected exterior. The right coating, applied correctly, is a quiet
          but constant line of defense.
        </p>
        <h3>Energy and comfort effects</h3>
        <p>
          The color and quality of an exterior finish have a measurable effect on
          how a home handles heat. Lighter, more reflective colors bounce away a
          meaningful share of solar radiation, keeping wall assemblies cooler and
          easing the load on air conditioning during hot months, while very dark
          colors absorb heat and can run noticeably warmer on sun-facing walls.
          Specialty "cool" exterior pigments are engineered to reflect more
          infrared energy even in darker shades. A sound, well-sealed coating also
          works alongside caulk and weatherstripping to limit air infiltration
          around trim, windows, and joints, reducing the small drafts that quietly
          raise heating and cooling bills. None of this rivals insulation or new
          windows, but it is a real, no-extra-cost benefit of choosing the right
          color and keeping the film intact.
        </p>
        <Callout variant="tip" title="Think of paint as maintenance, not decoration">
          The cheapest exterior paint job is the one that prevents a rot repair.
          Repainting roughly every 7 to 10 years — before bare wood appears — is a
          fraction of the cost of replacing rotted siding, fascia, or trim. Treat
          your repaint cycle as scheduled maintenance, not an optional cosmetic
          upgrade.
        </Callout>
      </Section>

      <Section id="cost" heading="How Much Does Exterior Painting Cost?">
        <p>
          Exterior painting is usually priced by square footage of surface area,
          by the size and number of stories of the home, or as a total project
          bid. Nationally, expect roughly <strong>$1.50 to $4.50 per square
          foot</strong>, with most single-family homes landing between{" "}
          <strong>$3,000 and $12,000</strong>. The wide range reflects how many
          variables affect the final number, from siding texture to how hard the
          surfaces are to reach safely.
        </p>
        <DataTable
          caption="Typical exterior painting cost ranges. Actual prices vary by region, height, condition, and paint grade."
          headers={["Home Size / Item", "Typical Cost Range", "Notes"]}
          rows={[
            ["Small single-story (1,000 sq ft)", "$2,500 - $5,000", "Simple access"],
            ["Average two-story (2,000 sq ft)", "$4,500 - $9,000", "More height and trim"],
            ["Large two-story (3,000+ sq ft)", "$8,000 - $15,000+", "Complex, multi-story"],
            ["Trim only", "$1,000 - $3,000", "Fascia, soffits, windows"],
            ["Front door (each)", "$150 - $500", "Prep plus enamel finish"],
            ["Garage door (each)", "$150 - $400", "Cleaning and two coats"],
            ["Deck or fence (separate)", "$1,000 - $4,000", "Stain or paint"],
          ]}
        />
        <h3>What drives exterior pricing</h3>
        <ul>
          <li>
            <strong>Siding material.</strong> Stucco and rough masonry absorb
            more paint and take longer than smooth siding; wood often needs more
            prep and spot priming.
          </li>
          <li>
            <strong>Height and access.</strong> Two- and three-story homes, steep
            lots, and tight access require ladders, scaffolding, or lifts and far
            more labor hours.
          </li>
          <li>
            <strong>Surface condition.</strong> Extensive scraping, sanding, wood
            repair, and caulking add significant time, sometimes doubling the prep
            budget on a neglected home.
          </li>
          <li>
            <strong>Number of colors and detail.</strong> Multi-color schemes,
            ornate Victorian trim, and shutters increase masking and brushwork.
          </li>
          <li>
            <strong>Paint grade.</strong> Premium 100% acrylic costs more per
            gallon but lasts years longer, lowering the true lifetime cost.
          </li>
          <li>
            <strong>Region.</strong> Labor rates in major metros can be 50 to 100
            percent higher than in smaller markets.
          </li>
        </ul>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <Callout variant="warning" title="The hidden cost of cheap bids">
          A suspiciously low exterior bid usually means skipped pressure washing,
          minimal scraping, no primer on bare wood, or a single thin coat. These
          shortcuts are invisible at first but cause peeling within a year or two,
          forcing a full redo at far greater expense. Always compare what is
          included, not just the price.
        </Callout>
      </Section>

      <Section id="quantity" heading="Estimating Exterior Paint Quantity and Coverage">
        <p>
          Whether you are sanity-checking a contractor's material line or buying
          paint for a DIY weekend, knowing how much paint a house needs prevents
          both costly overbuying and the worse problem of running short mid-coat
          and ending up with a slightly different batch color. The math starts
          with measuring the paintable wall area, not the floor area, and then
          dividing by the product's stated spread rate. Most exterior acrylics
          cover roughly <strong>250 to 400 square feet per gallon</strong> on a
          single coat, with smooth, primed siding landing near the top of that
          range and rough or porous surfaces near the bottom.
        </p>
        <h3>How to calculate paintable area</h3>
        <ol>
          <li>
            <strong>Measure each wall.</strong> Multiply width by height for every
            exterior wall and add the totals together to get gross wall area.
          </li>
          <li>
            <strong>Subtract large openings.</strong> Deduct the area of windows
            and doors only if they total a meaningful share; many estimators skip
            small openings to build in a safety margin.
          </li>
          <li>
            <strong>Add a texture factor.</strong> Multiply by about 1.1 for lap
            siding, 1.2 to 1.5 for stucco, masonry, or deeply grooved board, since
            texture increases the true surface area paint must cover.
          </li>
          <li>
            <strong>Divide by coverage and coats.</strong> Divide adjusted area by
            the spread rate, then multiply by the number of coats — almost always
            two for siding.
          </li>
        </ol>
        <DataTable
          caption="Approximate exterior paint needed for two coats by home size. Texture and waste raise these figures."
          headers={["Home Size", "Approx. Wall Area", "Gallons (2 coats)"]}
          rows={[
            ["Small single-story", "1,200 - 1,600 sq ft", "8 - 12 gallons"],
            ["Average two-story", "2,500 - 3,200 sq ft", "15 - 22 gallons"],
            ["Large two-story", "3,500 - 4,500 sq ft", "22 - 32 gallons"],
            ["Trim and fascia only", "300 - 600 sq ft", "2 - 4 gallons"],
            ["Front and garage doors", "100 - 200 sq ft", "1 - 2 gallons"],
          ]}
        />
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="paint-types" heading="Best Paint and Products for Exteriors">
        <p>
          Exterior paint must do far more than interior paint: resist UV, flex
          with temperature swings, repel water while remaining breathable, and
          resist mildew. Product selection is critical, and the right choice
          depends on both your substrate and your climate. The good news is that
          modern coatings are dramatically better than those of even a decade ago.
        </p>
        <h3>100% acrylic latex</h3>
        <p>
          The all-around best choice for most homes. It is flexible, durable,
          fade- and mildew-resistant, breathable, and adheres to most substrates.
          Its elasticity lets it move with the surface, dramatically reducing
          cracking and peeling. Premium acrylics also hold color longer, which
          matters most for deep and saturated shades that are prone to fading.
        </p>
        <h3>Elastomeric coatings</h3>
        <p>
          Thick, highly flexible coatings designed for stucco and masonry. They
          bridge hairline cracks and provide excellent waterproofing, making them
          popular in hot, dry, and crack-prone regions. Because they build a
          heavy film, they must be applied to sound surfaces and at the correct
          thickness, or they can trap moisture rather than shed it.
        </p>
        <h3>Oil-based and alkyd</h3>
        <p>
          Now limited mostly to specialty applications — certain primers, metal,
          and high-wear surfaces — where a hard, tightly bonded film is needed.
          Higher VOCs and longer dry times have pushed most exterior work to
          waterborne acrylics. You can read more about volatile organic compounds
          and why low-VOC products matter from the{" "}
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq/what-are-volatile-organic-compounds-vocs"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            EPA's overview of VOCs
          </a>
          .
        </p>
        <h3>Primers matter</h3>
        <p>
          Bare wood, weathered surfaces, repairs, stains, and bare metal all
          require the correct primer for adhesion and stain blocking. Skipping
          primer on these surfaces is a guaranteed path to early failure. Tannin-
          rich woods like cedar and redwood need a stain-blocking primer to keep
          bleed-through from discoloring light topcoats.
        </p>
        <DataTable
          caption="Quick guide to exterior coatings by substrate."
          headers={["Substrate", "Recommended Coating", "Repaint Interval"]}
          rows={[
            ["Wood siding", "100% acrylic latex plus primer on bare wood", "5-7 years"],
            ["Fiber cement", "100% acrylic latex", "10-15 years"],
            ["Stucco", "Acrylic or elastomeric, masonry primer", "8-12 years"],
            ["Vinyl", "Vinyl-safe acrylic", "8-10 years"],
            ["Brick / masonry", "Breathable masonry paint or limewash", "10-20 years"],
            ["Metal", "Bonding primer plus acrylic or DTM enamel", "8-12 years"],
          ]}
        />
        <p>
          Whatever product you choose, buy the best grade you can afford. The
          difference between a builder-grade and a top-tier exterior paint is a few
          dollars per gallon but several years of service life. Since labor far
          outweighs material cost, cutting corners on paint to save a little money
          is one of the worst trades a homeowner can make.
        </p>
        <h3>Sheen selection for exteriors</h3>
        <p>
          Sheen is a practical choice outdoors, not just a stylistic one. Higher
          gloss is more durable and easier to wash but also highlights every
          imperfection in the surface, so the sheen should match both the surface
          and how visible it is. As a general rule, use flat or low-sheen on large
          siding fields where you want imperfections hidden, satin or low-luster
          for siding that needs more washability, and semi-gloss on trim, doors,
          shutters, and railings where durability and a crisp accent matter most.
        </p>
        <ul>
          <li>
            <strong>Flat / matte</strong> — hides surface flaws and old patches
            best; ideal for stucco and weathered siding, least washable.
          </li>
          <li>
            <strong>Satin / low-luster</strong> — the most popular all-around
            siding sheen, balancing modest shine with good cleanability.
          </li>
          <li>
            <strong>Semi-gloss</strong> — tough and wipeable, reserved for trim,
            doors, and high-touch details that benefit from contrast and wear
            resistance.
          </li>
        </ul>
      </Section>

      <Section id="process" heading="The Professional Exterior Painting Process">
        <p>
          Quality exterior work follows a strict sequence built around protection
          and adhesion. Each step exists to make the finish last, and a good
          contractor can explain why every stage matters. The steps below mirror
          the structured process reputable crews follow on nearly every home.
        </p>
        <ol>
          <li>
            <strong>Inspection.</strong> The crew assesses siding condition, finds
            failing paint, rot, caulk failure, and mildew, and confirms scope and
            colors before quoting the work.
          </li>
          <li>
            <strong>Pressure washing.</strong> The entire surface is washed to
            remove dirt, chalk, mildew, and loose paint, then allowed to dry fully
            for 24 to 48 hours.
          </li>
          <li>
            <strong>Scraping and sanding.</strong> Loose and peeling paint is
            scraped and feathered, and glossy areas are de-glossed so the new coat
            can grip.
          </li>
          <li>
            <strong>Repairs.</strong> Rotted wood is replaced, holes filled, and
            damaged trim restored before any paint touches the surface.
          </li>
          <li>
            <strong>Priming.</strong> Bare wood, repairs, stains, and bare metal
            receive the appropriate primer for adhesion and stain blocking.
          </li>
          <li>
            <strong>Caulking.</strong> Gaps around windows, doors, trim, and
            joints are sealed to block water intrusion and finish the lines.
          </li>
          <li>
            <strong>Masking and protection.</strong> Windows, lights, landscaping,
            walkways, and roofing are covered to keep overspray and drips off them.
          </li>
          <li>
            <strong>Application.</strong> Two finish coats are applied by brush,
            roller, or sprayer with back-rolling, always maintaining a wet edge.
          </li>
          <li>
            <strong>Trim and accents.</strong> Trim, doors, shutters, and details
            are finished, often in a contrasting durable enamel.
          </li>
          <li>
            <strong>Cleanup and walkthrough.</strong> The site is cleaned and the
            homeowner inspects the finished work under good light for touch-ups.
          </li>
        </ol>
        <p>
          A crew that openly walks you through this sequence — and lets you see the
          surface after washing and scraping but before paint — is a crew that has
          nothing to hide. The most common corner-cutting happens in steps two
          through five, precisely the work that is invisible once the finish coats
          go on.
        </p>
        <h3>Application methods and why they matter</h3>
        <p>
          How the paint goes on is as important as the sequence leading up to it.
          Professionals typically choose among brushing, rolling, and spraying
          based on the surface, and the best crews combine them. Spraying is fast
          and lays down an even film on large or textured areas, but on its own it
          can leave a thin, poorly bonded coat that sits on the surface rather than
          working into it. That is why quality crews <strong>spray and
          back-roll</strong> or back-brush — spraying for speed and uniformity,
          then immediately working the coating into the substrate by hand for
          adhesion. Brushing remains the standard for trim, corners, and detail,
          where control matters more than speed, while rolling suits flat siding
          fields. Maintaining a wet edge throughout prevents the lap marks and
          sheen differences that reveal where one section stopped and the next
          began, and respecting the recoat window between coats ensures the two
          films bond into a single durable system.
        </p>
        <Callout variant="tip" title="Ask to inspect after prep">
          Request a quick walkthrough once washing, scraping, and priming are done
          but before the finish coats start. This is the single best moment to
          confirm the foundation of your paint job is solid, since prep quality is
          impossible to judge after the topcoats hide it.
        </Callout>
      </Section>

      <Section id="prep" heading="Surface Preparation: Wash, Scrape, Repair, Prime">
        <p>
          Exterior prep is even more demanding than interior prep because the
          surface is dirtier, more weathered, and harder to access. It is where
          most of the labor — and most of the durability — lives. A flawless coat
          of premium paint over poor prep will still fail; sound prep under an
          average paint will outlast it. Professionals routinely spend more hours
          preparing a home than actually painting it.
        </p>
        <h3>Washing</h3>
        <p>
          Years of dirt, pollen, chalk, and mildew must come off before painting.
          Pressure washing or hand scrubbing creates a clean surface the new paint
          can grip. The surface must then dry completely, typically 24 to 48
          hours, because painting over trapped moisture is a leading cause of
          blistering and peeling. For a deeper look at this stage, see our guide to{" "}
          <Link href="/services/pressure-washing">pressure washing</Link>.
        </p>
        <h3>Scraping and sanding</h3>
        <p>
          All loose and peeling paint is removed and edges feathered so they do
          not telegraph through the new coat. This is tedious but essential — new
          paint over loose paint simply peels off with it. Feathering the
          transition between bare and painted areas is what keeps old paint edges
          from showing as ridges under the fresh finish.
        </p>
        <h3>Wood and surface repair</h3>
        <p>
          Soft, rotted wood is replaced; nail pops, cracks, and holes are filled.
          Catching and fixing rot during a paint project prevents far costlier
          structural repairs later. A good crew probes suspect areas with a tool
          to find hidden soft spots before they are painted over and forgotten.
        </p>
        <h3>Caulking and priming</h3>
        <p>
          Fresh caulk seals the gaps where water sneaks in, and primer ensures the
          finish bonds to bare and repaired areas. Together they form the
          foundation of a job that lasts a decade. Use a high-quality, paintable
          exterior caulk rated for the joint movement it will see through seasonal
          expansion and contraction.
        </p>
        <Callout variant="warning" title="Pre-1978 homes need lead-safe prep">
          Homes built before 1978 may contain lead-based paint, and disturbing it
          through scraping or sanding can release hazardous dust. Federal rules
          require contractors to be Lead-Safe Certified and to follow specific
          containment practices. Learn more from the{" "}
          <a
            href="https://www.epa.gov/lead"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            EPA's lead program and RRP rule
          </a>{" "}
          and confirm your painter's certification before any prep begins.
        </Callout>
      </Section>

      <Section id="weather" heading="Weather and Timing Considerations">
        <p>
          No factor affects exterior painting more than weather. Paint is a
          chemical product that cures correctly only within a specific range of
          temperature and humidity, and applying it outside that window
          guarantees problems no amount of skill can overcome. Smart scheduling
          around the forecast is part of the job.
        </p>
        <h3>Temperature</h3>
        <p>
          Most paints apply best between 50 and 85 degrees Fahrenheit. Too hot and
          the paint skins over before it can level, causing lap marks and poor
          adhesion; too cold and the film cannot form or cure. Always work within
          the product's stated range and account for overnight lows, since a warm
          afternoon can still drop below the minimum after dark while the film is
          still curing.
        </p>
        <h3>Humidity and moisture</h3>
        <p>
          High humidity slows drying and can trap moisture, while painting a damp
          surface guarantees peeling. Allow surfaces to dry after washing or rain,
          and avoid painting late in the day when dew may settle on fresh paint.
          In humid regions, crews often start after the morning moisture has
          burned off and stop well before evening dew sets in.
        </p>
        <h3>Seasonal and regional timing</h3>
        <ul>
          <li>
            <strong>Hot, sunny climates</strong> — chase the shade around the
            house and avoid painting walls in direct afternoon sun; spring and
            fall are usually best.
          </li>
          <li>
            <strong>Cold climates</strong> — finish before nighttime lows drop
            below the paint's minimum; late spring through early fall is the
            reliable window.
          </li>
          <li>
            <strong>Humid and coastal climates</strong> — favor low-humidity days,
            use mildew-resistant products, and rinse salt residue thoroughly
            before painting.
          </li>
        </ul>
        <p>
          Because weather drives the schedule, build flexibility into your
          timeline and expect that a quality contractor will pause for rain rather
          than push through it. A crew willing to paint damp siding to stay on
          schedule is a crew willing to compromise your finish.
        </p>
      </Section>

      <Section id="climate" heading="Climate and Regional Considerations">
        <p>
          Day-to-day weather decides when you can paint, but your regional climate
          decides what you should paint with and how often you will repeat the
          job. The same premium acrylic that holds a finish for twelve years in a
          mild, temperate region may need recoating in six on a sun-blasted desert
          wall or a salt-sprayed coastal elevation. Matching the coating system,
          color depth, and maintenance rhythm to your climate is one of the most
          overlooked factors in long-term performance, and it explains why a
          national average lifespan tells you so little about your specific home.
        </p>
        <h3>High-UV and hot-dry regions</h3>
        <p>
          Intense, year-round sun is the fastest way to degrade an exterior finish.
          Ultraviolet radiation breaks down binders and pigments, causing fading,
          chalking, and brittleness, with south- and west-facing walls always
          failing first. In the desert Southwest and other high-altitude, high-UV
          areas, choose paints with strong UV-resistant resins, lean toward lighter
          colors that reflect heat and hide fade, and expect to repaint sooner.
          Elastomeric coatings are popular on stucco here because they bridge the
          hairline cracks that thermal expansion opens up.
        </p>
        <h3>Humid, coastal, and freeze-prone climates</h3>
        <ul>
          <li>
            <strong>Humid and Gulf regions.</strong> Persistent moisture and shade
            feed mildew; use mildew-resistant formulations, allow extra dry time
            after washing, and paint within the morning-to-afternoon dry window.
          </li>
          <li>
            <strong>Coastal and salt-air zones.</strong> Salt accelerates chalking
            and corrodes metal fasteners and fixtures; rinse salt residue before
            painting, prime bare metal with a corrosion-inhibiting primer, and rinse
            siding more often between repaints.
          </li>
          <li>
            <strong>Cold and freeze-thaw climates.</strong> Water that gets behind
            the film expands as it freezes and pops paint loose; flawless caulking,
            breathable coatings, and finishing before nighttime lows fall below the
            paint's minimum are essential.
          </li>
          <li>
            <strong>Mixed and temperate regions.</strong> The widest comfortable
            painting window, but spring pollen and summer storms still require
            washing and forecast discipline.
          </li>
        </ul>
        <p>
          Microclimate matters too: a heavily shaded north wall under tree cover
          stays damp and grows mildew long after the rest of the house has dried,
          while a wall above a reflective patio or pool can run far hotter than the
          ambient temperature. Local elevation, prevailing wind, and proximity to
          water all shift the equation. Because conditions vary so much block to
          block, comparing notes with{" "}
          <Link href="/cities">painters in your city</Link> who know the regional
          failure patterns is one of the most practical things a homeowner can do
          before committing to a product and a repaint schedule.
        </p>
      </Section>

      <Section id="colors" heading="Choosing the Right Exterior Colors">
        <p>
          Exterior color is a bigger commitment than interior color: it is seen by
          the whole neighborhood, it must work with fixed elements like the roof
          and stone, and it is far more work to change. A thoughtful, three-part
          palette almost always reads as more polished than a single flat color.
        </p>
        <h3>Work with fixed elements</h3>
        <p>
          Your roof, brick, stone, and even the driveway have undertones you cannot
          easily change. Choose siding and trim colors that harmonize with those
          permanent features. A warm-toned roof, for example, pairs better with
          warm neutrals than with cool grays that fight it.
        </p>
        <h3>Build a layered scheme</h3>
        <p>
          Most attractive exteriors use three colors: a dominant field color for
          the siding, a complementary trim color, and an accent for the front door
          and shutters. This layering creates depth and highlights architectural
          detail rather than flattening it into a single tone.
        </p>
        <h3>Test in real light</h3>
        <p>
          Paint large sample boards and view them on different sides of the house
          at different times of day. Exterior colors shift dramatically between
          bright sun and shade, and a swatch that looks perfect on a north wall
          may look washed out in full southern light.
        </p>
        <Callout variant="tip" title="Mind the rules and the neighbors">
          Many HOAs and historic districts restrict exterior colors. Confirm any
          approval requirements before you buy paint, and consider how your scheme
          fits the street so your home stands out for the right reasons. The same
          color principles carry over to{" "}
          <Link href="/services/interior-painting">interior painting</Link> if you
          are refreshing the whole home.
        </Callout>
      </Section>

      <Section id="siding" heading="Guidance by Siding Type">
        <p>
          The right approach depends heavily on what your home is clad in. Each
          substrate has its own prep, product, and longevity profile, and matching
          the system to the surface is what separates a decade-long finish from a
          short-lived one.
        </p>
        <h3>Wood siding</h3>
        <p>
          Classic and beautiful but maintenance-intensive. Wood needs diligent
          scraping, sanding, priming of bare areas, and caulking. It typically
          needs repainting every 5 to 7 years and rewards premium, flexible
          acrylic paint. Tannin-rich species like cedar and redwood require a
          stain-blocking primer to prevent discoloration bleeding through light
          colors.
        </p>
        <h3>Fiber cement</h3>
        <p>
          A durable, increasingly popular siding that holds paint exceptionally
          well. Pre-primed boards take quality acrylic readily and can hold a
          finish for 10 to 15 years with proper application. Caulk joints and butt
          ends carefully, since those are the first places water tries to enter.
        </p>
        <h3>Stucco and masonry</h3>
        <p>
          Porous surfaces that require breathable, elastomeric, or masonry-specific
          coatings. They consume more paint due to texture and may need a masonry
          primer and crack repair. Done right, stucco coatings are very
          long-lasting and can mask hairline cracking when an elastomeric is used.
        </p>
        <h3>Vinyl and aluminum</h3>
        <p>
          Both can be painted with the right products. Vinyl must be painted in
          colors no darker than the original to avoid heat-related warping, using
          vinyl-safe formulations engineered to flex with the panel. Aluminum
          needs cleaning and a bonding primer to prevent the chalky oxidized layer
          from undermining adhesion.
        </p>
        <h3>Brick</h3>
        <p>
          Brick can be painted for a dramatic transformation, but it is
          essentially permanent and requires breathable masonry paint to avoid
          trapping moisture inside the wall. Limewash and mineral coatings are
          popular breathable alternatives that bond chemically with the masonry
          and weather more naturally over time.
        </p>
        <DataTable
          caption="Siding-specific prep and product notes at a glance."
          headers={["Siding", "Key Prep Step", "Best Product"]}
          rows={[
            ["Wood", "Scrape, sand, prime bare wood", "Acrylic latex plus stain-blocking primer"],
            ["Fiber cement", "Caulk joints and butt ends", "100% acrylic latex"],
            ["Stucco", "Patch cracks, masonry primer", "Acrylic or elastomeric"],
            ["Vinyl", "Clean thoroughly, no dark colors", "Vinyl-safe acrylic"],
            ["Aluminum", "Remove chalk, bonding primer", "Acrylic or DTM enamel"],
            ["Brick", "Clean, repoint, test breathability", "Breathable masonry paint or limewash"],
          ]}
        />
        <h3>Engineered wood and specialty claddings</h3>
        <p>
          Beyond the mainstream substrates, several engineered and specialty
          claddings call for their own approach. Engineered wood siding — composite
          boards made from wood fibers and resins — is usually factory-primed and
          takes quality acrylic well, but its joints and any field-cut edges must be
          sealed and primed carefully, since exposed core material swells when it
          absorbs water. Hardboard and older composite sidings are especially prone
          to moisture damage at the bottom edges and need diligent caulking and a
          finish that sheds water. T1-11 and plywood panel siding require attention
          to the vertical grooves, where coverage is easy to miss and water tends to
          collect. Cement-based and synthetic stucco systems (including EIFS) demand
          breathable, manufacturer-approved coatings so the wall assembly can dry to
          the exterior rather than trapping moisture inside. When in doubt about an
          unusual surface, confirm the substrate with your contractor and check the
          siding maker's painting guidelines, since using the wrong product can void
          both the siding warranty and the paint warranty at once.
        </p>
      </Section>

      <Section id="lifespan" heading="How Long Does Exterior Paint Last?">
        <p>
          A professional exterior paint job typically lasts <strong>7 to 10
          years</strong>, but the real range runs from about 5 years on neglected
          wood in a harsh climate to 15 years or more on fiber cement in a mild
          one. Three factors set the lifespan: the substrate, the quality of prep
          and product, and the environment the home sits in.
        </p>
        <h3>What shortens paint life</h3>
        <ul>
          <li>
            <strong>Intense UV exposure</strong> on south- and west-facing walls
            fades and degrades the film fastest.
          </li>
          <li>
            <strong>Moisture and freeze-thaw cycles</strong> push water behind the
            film and pop it loose as ice expands.
          </li>
          <li>
            <strong>Salt air</strong> in coastal areas accelerates chalking and
            corrosion on metal components.
          </li>
          <li>
            <strong>Poor prep</strong> — painting over dirt, chalk, or loose
            paint — undermines adhesion regardless of climate.
          </li>
        </ul>
        <h3>What extends it</h3>
        <p>
          Thorough washing, complete scraping, spot priming, quality caulk, and
          two coats of premium 100% acrylic are the proven levers. Beyond
          application, simple upkeep — rinsing siding annually, clearing gutters so
          water sheds away from walls, and trimming vegetation that holds moisture
          against the house — measurably extends service life. Catching a small
          failure early and touching it up keeps a localized problem from spreading
          into a full repaint.
        </p>
        <p>
          Watch for early warning signs between repaints: chalky residue on your
          hand when you rub the siding, hairline cracking, fading on sun-exposed
          walls, and any spots where bare substrate is starting to show. Addressing
          these promptly is the difference between a touch-up and a teardown.
        </p>
      </Section>

      <Section id="diy-vs-pro" heading="DIY vs. Hiring a Professional">
        <p>
          Exterior painting is one of the most ambitious DIY projects a homeowner
          can take on, and the calculus is different from interior work because of
          height, scale, and weather. A single-story home with sound, accessible
          siding is within reach for a committed DIYer; a multi-story home with
          significant prep is squarely professional territory.
        </p>
        <h3>The case for DIY</h3>
        <p>
          You can save substantially on labor, which is the bulk of the cost, and
          you control the pace and the standard. For a small, one-story home in
          good condition, a careful homeowner with the right ladders, a sprayer or
          quality brushes and rollers, and a few clear-weather weekends can achieve
          a respectable result.
        </p>
        <h3>The case for hiring a pro</h3>
        <ul>
          <li>
            <strong>Safety.</strong> Most serious exterior-painting injuries
            involve ladders and falls; pros carry the right equipment and
            insurance.
          </li>
          <li>
            <strong>Speed.</strong> A crew finishes in days what takes a homeowner
            weeks, shrinking weather risk and disruption.
          </li>
          <li>
            <strong>Prep expertise.</strong> Pros diagnose rot, chalking, and
            adhesion issues and fix them correctly the first time.
          </li>
          <li>
            <strong>Equipment.</strong> Sprayers, scaffolding, and lifts produce a
            smoother, faster finish than handheld tools alone.
          </li>
          <li>
            <strong>Warranty.</strong> Reputable contractors stand behind the work,
            giving you recourse if anything fails early.
          </li>
        </ul>
        <DataTable
          caption="A quick comparison of DIY and professional exterior painting."
          headers={["Factor", "DIY", "Professional"]}
          rows={[
            ["Upfront cost", "Lower (materials only)", "Higher (labor included)"],
            ["Time to complete", "Several weekends", "3-6 days typical"],
            ["Safety risk", "High on multi-story", "Managed with gear and insurance"],
            ["Finish quality", "Varies with skill", "Consistent, sprayer-grade"],
            ["Best for", "Small one-story, sound siding", "Multi-story, heavy prep, rot"],
          ]}
        />
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="hiring" heading="How to Hire an Exterior Painter">
        <p>
          The contractor you choose matters more than the paint you buy. The same
          home, painted by a meticulous crew versus a careless one, can last twice
          as long. Vetting carefully up front protects you from the most common and
          most expensive paint failures.
        </p>
        <h3>Verify the essentials</h3>
        <ul>
          <li>
            <strong>License and insurance.</strong> Confirm the contractor carries
            liability coverage and workers' compensation; ask for certificates.
          </li>
          <li>
            <strong>Lead-safe certification.</strong> Required for pre-1978 homes
            under federal law; verify it before any scraping or sanding.
          </li>
          <li>
            <strong>References and reviews.</strong> Look for recent, verified
            reviews and ask to see homes painted three or more years ago.
          </li>
          <li>
            <strong>Written, detailed estimate.</strong> The bid should specify
            prep, number of coats, products by name, and surfaces included.
          </li>
        </ul>
        <h3>Compare apples to apples</h3>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <h3>Ask the right questions</h3>
        <p>
          Find out who is actually on the crew, whether subcontractors are used,
          how they handle weather delays, what the warranty covers and for how
          long, and what the payment schedule looks like. Avoid any contractor who
          demands a large cash deposit up front or pressures you to skip a written
          contract. For larger or commercial properties, our{" "}
          <Link href="/services/commercial-painting">commercial painting</Link>{" "}
          guide covers additional considerations like scheduling and compliance.
        </p>
        <Callout variant="warning" title="Never pay in full up front">
          A reasonable deposit is normal, but the bulk of payment should come on
          completion after your final walkthrough. Paying everything in advance
          removes your leverage to get touch-ups and punch-list items finished
          correctly.
        </Callout>
      </Section>

      <Section id="warranties" heading="Warranties: What They Cover and For How Long">
        <p>
          A warranty is one of the clearest signals of how much confidence a
          contractor has in their own prep and product selection, yet it is also
          one of the most misunderstood parts of an exterior painting agreement.
          There are really two separate warranties at work: the{" "}
          <strong>manufacturer's product warranty</strong> on the paint itself,
          and the <strong>contractor's labor warranty</strong> on the workmanship.
          They cover different things, and a strong job needs both to be meaningful.
          Read each carefully before you sign, because the headline number — "25-year
          paint" or "lifetime warranty" — rarely means what homeowners assume.
        </p>
        <h3>Product vs. workmanship warranties</h3>
        <p>
          The paint manufacturer warrants that the product will not fail
          prematurely due to a manufacturing defect, often for 15, 25, or even a
          stated lifetime. In practice these cover the cost of replacement paint
          only — not the labor to repaint — and they are voided if the product was
          applied outside specification, over poor prep, or on an unsuitable
          substrate. The contractor's labor warranty is what actually protects you,
          because most real-world failures come from application and prep, not the
          paint. A typical reputable exterior labor warranty runs{" "}
          <strong>2 to 7 years</strong>, covering peeling, blistering, and
          excessive flaking caused by workmanship.
        </p>
        <DataTable
          caption="Typical exterior painting warranty terms. Always confirm specifics in writing."
          headers={["Warranty Type", "Typical Term", "What It Covers"]}
          rows={[
            ["Manufacturer product", "15 - 25+ years", "Replacement paint for defects only"],
            ["Contractor labor (standard)", "2 - 3 years", "Peeling, blistering from workmanship"],
            ["Contractor labor (premium)", "5 - 7 years", "Broader workmanship, prorated repairs"],
            ["Prorated coverage", "Varies", "Declining payout as years pass"],
          ]}
        />
        <h3>Common exclusions to read for</h3>
        <ul>
          <li>
            <strong>Normal fading and chalking</strong> from UV exposure, which is
            considered expected wear rather than failure.
          </li>
          <li>
            <strong>Substrate problems</strong> like wood rot, settling cracks, or
            moisture intrusion from a roof or gutter leak behind the paint.
          </li>
          <li>
            <strong>Acts of nature</strong> such as hail, floods, and storm damage.
          </li>
          <li>
            <strong>Prorating</strong>, where the payout shrinks each year, so a
            "7-year" warranty may cover only a fraction of repair cost by year five.
          </li>
        </ul>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="mistakes" heading="Common Exterior Painting Mistakes">
        <p>
          Most exterior paint failures trace back to a short list of avoidable
          mistakes. Knowing them helps you recognize when a job — your own or a
          contractor's — is headed for trouble before it is too late to fix.
        </p>
        <h3>Skipping or rushing the wash</h3>
        <p>
          Painting over dirt, chalk, and mildew is the number-one cause of
          premature peeling. The new film simply cannot bond to a contaminated
          surface, and the bond it does form releases within a season or two.
        </p>
        <h3>Painting in the wrong conditions</h3>
        <p>
          Applying paint in direct hot sun, on damp surfaces, or with rain or dew
          in the forecast undermines curing. Conditions that are too cold prevent
          the film from forming at all, leaving a soft, vulnerable coat.
        </p>
        <h3>Ignoring prep and repairs</h3>
        <p>
          Failing to scrape loose paint, replace rotted wood, or spot-prime bare
          areas means the new coat fails wherever the substrate was unsound. Paint
          cannot bridge over rot or hold to powdery old paint.
        </p>
        <h3>Using the wrong product or too few coats</h3>
        <p>
          Cheap paint, the wrong formulation for the substrate, or a single thin
          coat all shorten lifespan dramatically. Two coats of the correct premium
          product is the baseline for a job meant to last a decade.
        </p>
        <h3>Mishandling cleanup and waste</h3>
        <p>
          Leftover paint and rinse water are not ordinary trash. Dispose of paint
          and related materials responsibly through your community's program, as
          described in the EPA's guidance on{" "}
          <a
            href="https://www.epa.gov/hw/household-hazardous-waste-hhw"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            household hazardous waste
          </a>
          , and follow worker-safety practices outlined by{" "}
          <a
            href="https://www.osha.gov"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            OSHA
          </a>{" "}
          when sanding, working at height, or handling solvents.
        </p>
      </Section>

      <Section id="maintenance" heading="Maintenance and Aftercare">
        <p>
          A fresh exterior paint job is an investment, and modest upkeep protects
          it for years longer. The goal of maintenance is simple: keep moisture,
          dirt, and biological growth from working their way under the film and
          catch small problems while they are still small.
        </p>
        <h3>Let new paint cure</h3>
        <p>
          Although exterior paint feels dry within hours, it continues to cure for
          two to four weeks. Avoid pressure washing or leaning equipment against
          fresh paint during this window, and let it harden fully before any
          aggressive cleaning.
        </p>
        <h3>Annual cleaning</h3>
        <p>
          Rinse siding once or twice a year with a garden hose and a soft brush to
          remove dirt, pollen, and the start of mildew. In shaded or humid areas, a
          mild cleaning solution keeps biological growth in check before it stains
          or degrades the film.
        </p>
        <h3>Inspect and touch up</h3>
        <ul>
          <li>
            <strong>Walk the perimeter twice a year</strong> looking for cracks,
            peeling, caulk failure, and bare spots.
          </li>
          <li>
            <strong>Recaulk failed joints</strong> promptly to keep water out of
            the wall assembly.
          </li>
          <li>
            <strong>Touch up small failures</strong> before they spread, keeping a
            labeled can of your colors for the purpose.
          </li>
          <li>
            <strong>Keep water moving away</strong> from walls by clearing gutters
            and directing downspouts.
          </li>
        </ul>
        <h3>Manage the surroundings</h3>
        <p>
          Trim shrubs and trees so they do not hold moisture against the siding or
          scrape the finish in the wind. Keep sprinklers from spraying the walls,
          and ensure grading and downspouts carry water away from the foundation.
          These small habits routinely add years to a paint job's life and reduce
          the odds of an early, expensive repaint.
        </p>
        <p>
          Finally, keep a simple record of what was used and when. Note the brand,
          line, color codes, and sheen for siding, trim, and accents, along with
          the date the work was completed. That single page of information makes
          future touch-ups effortless, helps the next contractor match what is
          already on the house, and serves as useful documentation for buyers if
          you eventually sell. Treating your exterior finish as a maintained system
          rather than a one-time event is the surest way to protect both the look
          of your home and the structure underneath it for the long haul.
        </p>
      </Section>
    </PillarPage>
  );
}
