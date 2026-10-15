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
  { id: "overview", label: "What Is Deck & Fence Staining" },
  { id: "stain-vs-seal-vs-paint", label: "Stain vs. Seal vs. Paint" },
  { id: "why-it-matters", label: "Why Staining Matters" },
  { id: "cost", label: "Cost & Pricing" },
  { id: "coverage", label: "Estimating Stain Quantity & Coverage" },
  { id: "stain-types", label: "Stain Types & Opacity" },
  { id: "wood-types", label: "Choosing by Wood Type" },
  { id: "composite-materials", label: "Composite & Other Materials" },
  { id: "process", label: "The Professional Process" },
  { id: "prep", label: "Surface Preparation" },
  { id: "moisture-timing", label: "Moisture, Weather & Timing" },
  { id: "new-vs-weathered", label: "New vs. Weathered Wood" },
  { id: "restore-vs-replace", label: "Restore vs. Replace an Old Deck" },
  { id: "longevity", label: "How Long It Lasts" },
  { id: "diy-vs-pro", label: "DIY vs. Hiring a Pro" },
  { id: "hiring", label: "How to Hire a Pro" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "maintenance", label: "Maintenance & Aftercare" },
  { id: "faq", label: "FAQ" },
];

const faqs: FaqItem[] = [
  {
    question: "How much does it cost to stain a deck or fence?",
    answer:
      "Professional deck staining typically costs $2 to $5 per square foot including cleaning, prep, and two coats of stain, so an average 300-square-foot deck runs roughly $600 to $1,500. Fence staining is usually priced $1 to $3.50 per linear foot or $2 to $4 per square foot of surface. Heavy stripping, brightening, railing detail, and premium penetrating oil stains push prices toward the top of the range, while a simple maintenance recoat on sound wood costs less.",
  },
  {
    question: "Should I stain or seal my deck?",
    answer:
      "Use a stain when you want color and UV protection, and a clear sealer when you only need water repellency and are willing to recoat more often. Most homeowners are best served by a semi-transparent penetrating stain because it adds pigment that blocks ultraviolet light, the main cause of graying and wood breakdown. Clear sealers protect against moisture but offer almost no UV defense, so unprotected wood still turns gray within a year or two.",
  },
  {
    question: "How long does deck and fence stain last?",
    answer:
      "Stain longevity depends on opacity and exposure. Clear sealers last about 1 to 2 years, semi-transparent stains 2 to 4 years, and semi-solid or solid stains 4 to 7 years on vertical surfaces like fences and railings. Horizontal walking surfaces wear faster because of foot traffic, standing water, and direct sun, so deck floors usually need a maintenance coat every 2 to 3 years regardless of the product's rated lifespan.",
  },
  {
    question: "How long should new wood dry before staining?",
    answer:
      "New pressure-treated lumber should dry until its moisture content drops to roughly 12 to 15 percent, which often takes several weeks to a few months depending on climate. A quick field test is to sprinkle water on the surface: if it beads up, the wood is still too wet or too mill-glazed to absorb stain; if it soaks in within about 10 minutes, the wood is ready. Kiln-dried cedar and redwood can usually be stained much sooner.",
  },
  {
    question: "Do I need to strip old stain before applying new stain?",
    answer:
      "You must strip when switching from a film-forming product such as a solid stain or paint to a penetrating stain, or when the existing finish is peeling, flaking, or worn unevenly. Penetrating stains cannot soak into wood through an intact film. If the existing finish is the same penetrating type and is simply faded but well bonded, a thorough cleaning and light sanding may be enough before recoating without full stripping.",
  },
  {
    question: "What is the best temperature and weather for staining?",
    answer:
      "Stain when the temperature is between 50 and 90 degrees Fahrenheit, the wood is dry, and no rain is forecast for 24 to 48 hours. Avoid staining in direct hot sun because the surface dries too fast and the stain cannot penetrate, leaving lap marks and a blotchy finish. The ideal window is a mild, overcast, low-humidity day, working in the shade and following the sun around the structure.",
  },
  {
    question: "How many coats of stain does a deck need?",
    answer:
      "Most penetrating deck stains are designed for one to two coats. Apply the second coat only while the first is still wet or tacky, working wet-on-wet, because wood can only absorb so much stain. Applying extra coats to fully cured stain leaves a sticky, shiny film that never properly dries and eventually peels. Solid stains are typically applied in two thin coats for full, even color and hide.",
  },
  {
    question: "Can you stain a deck and fence that has gone gray?",
    answer:
      "Yes. Gray wood is usually just surface oxidation and UV damage, not rot. A wood cleaner followed by a wood brightener, which is typically an oxalic acid solution, restores much of the original color and reopens the wood pores so new stain can penetrate. After cleaning and brightening, let the wood dry fully, then apply stain. Boards that are soft, spongy, or crumbling indicate rot and should be replaced before staining.",
  },
  {
    question: "Is it better to spray, roll, or brush stain?",
    answer:
      "Professionals often spray stain for speed and even distribution, then immediately back-brush or back-roll to work the product into the wood grain and eliminate puddling. Spraying alone tends to sit on the surface and dry unevenly. For most homeowners, a stain pad or brush gives the best penetration and control on decks, while a sprayer with back-brushing is efficient for long fences. The key is always to work the stain into the wood, not just lay it on top.",
  },
];

export default function DeckFenceStaining() {
  const path = "/services/deck-fence-staining";
  return (
    <PillarPage
      slug="deck-fence-staining"
      seo={{
        title: "Deck & Fence Staining: The Complete 2026 Guide",
        description:
          "A complete guide to deck and fence staining — costs per square foot, stain vs. seal vs. paint, choosing stain opacity and wood type, the professional prep and application process, longevity, and how to hire a pro.",
        path,
        image: "/deck.webp",
        imageAlt:
          "Freshly stained wood deck with rich semi-transparent finish and matching fence",
      }}
      hero={{
        eyebrow: "Deck & Fence Staining",
        title: "Deck & Fence Staining: The Complete Guide",
        subtitle:
          "Everything you need to protect and beautify wood outdoors — what staining costs, how to choose the right stain opacity, how professionals clean, brighten, and apply finish, and how to hire a contractor who makes it last.",
        crumb: "Deck & Fence Staining",
        image: "/deck.webp",
        imageAlt:
          "Freshly stained wood deck with rich semi-transparent finish and matching fence",
      }}
      quickAnswer={
        <p>
          Professional deck and fence staining costs roughly $2 to $5 per square
          foot, so a typical 300-square-foot deck runs $600 to $1,500 including
          cleaning, prep, and two coats. A semi-transparent penetrating stain is
          the best all-around choice because its pigment blocks UV rays — the
          main cause of graying — while letting wood grain show. Expect 2 to 4
          years between recoats on decks and longer on fences.
        </p>
      }
      takeaways={[
        "Deck and fence staining costs about $2-$5 per square foot; a 300 sq ft deck typically runs $600-$1,500 with full prep.",
        "Semi-transparent penetrating stains are the best balance of UV protection, natural grain, and reasonable recoat intervals.",
        "Prep is 80% of the result: clean, brighten, and let wood reach 12-15% moisture before any stain touches it.",
        "Stain in mild, dry, overcast weather between 50-90F with no rain for 24-48 hours, and always work out of direct sun.",
        "Expect to recoat clear sealers every 1-2 years, semi-transparent every 2-4 years, and solid stains every 4-7 years.",
      ]}
      toc={toc}
      faqId="faq"
      faqs={faqs}
      cta={{
        title: "Ready to protect your deck and fence?",
        body: "Prepare your project scope and confirm credentials and availability directly. Directory listings are being restored.",
      }}
      jsonLd={buildServiceJsonLd({
        name: "Deck & Fence Staining",
        description:
          "Professional deck and fence staining services including cleaning, brightening, surface prep, and the application of penetrating and film-forming wood stains.",
        url: path,
        crumb: "Deck & Fence Staining",
        faqs,
        image: "/deck.webp",
        headline: "Deck & Fence Staining: The Complete 2026 Guide",
        howTo: {
          name: "How to Stain a Deck or Fence",
          steps: [
            {
              name: "Inspect and repair",
              text: "Walk the structure to find loose boards, popped fasteners, splinters, and any rotted wood. Reset screws, replace failed boards, and sand rough or splintered areas before any finishing begins.",
            },
            {
              name: "Clean the wood",
              text: "Apply a dedicated wood cleaner or percarbonate deck wash to remove dirt, mildew, algae, and graying. Agitate with a stiff brush and rinse, using low-pressure washing to avoid furring the wood fibers.",
            },
            {
              name: "Strip old finish",
              text: "If a film-forming stain or paint is peeling or you are switching to a penetrating product, apply a wood stripper, let it dwell, scrub, and rinse until the surface is bare and able to absorb new stain.",
            },
            {
              name: "Brighten and neutralize",
              text: "Apply a wood brightener, typically an oxalic acid solution, to neutralize cleaners and strippers, restore natural tone, and reopen the wood pores so stain can penetrate evenly.",
            },
            {
              name: "Let the wood dry",
              text: "Allow the wood to dry until moisture content reaches roughly 12 to 15 percent, usually 24 to 72 hours of dry weather, confirming with a moisture meter or a water-bead test before staining.",
            },
            {
              name: "Mask and protect",
              text: "Cover siding, plants, hardware, and adjacent surfaces with plastic and drop cloths, and tape off areas where stain should not reach to keep clean, professional lines.",
            },
            {
              name: "Apply the stain",
              text: "Apply stain with a brush, pad, or sprayer, then immediately back-brush to work it into the grain. Maintain a wet edge, follow the shade, and coat full board lengths to avoid lap marks.",
            },
            {
              name: "Apply a second coat",
              text: "Where the product allows, apply a second coat wet-on-wet while the first is still tacky so the wood absorbs the maximum stain without leaving a sticky surface film.",
            },
            {
              name: "Cure and inspect",
              text: "Keep traffic, furniture, and water off the surface for the manufacturer's cure time, then inspect under good light for thin spots and touch up before returning the deck to use.",
            },
          ],
        },
      })}
    >
      <Section id="overview" heading="What Is Deck and Fence Staining?">
        <p>
          Deck and fence staining is the process of cleaning, preparing, and
          applying a pigmented wood finish to exterior wooden structures so they
          resist moisture, ultraviolet light, mildew, and everyday wear. Unlike
          a quick cosmetic refresh, a proper staining job is a protective system:
          the cleaning and brightening steps restore the wood, and the stain
          itself penetrates the fibers to slow the natural breakdown that turns
          unprotected lumber gray, brittle, and splintered.
        </p>
        <p>
          Wood is an organic material in a constant battle with the elements.
          The sun's UV rays break down lignin, the compound that binds wood
          fibers together, while rain, snow, and humidity drive repeated swelling
          and shrinking that opens cracks and checks. Left untreated, even
          premium cedar or pressure-treated pine will weather, cup, and decay.
          Staining is the single most cost-effective way to extend the life of a
          deck or fence, often doubling or tripling the years between costly
          board replacement.
        </p>
        <p>
          This guide explains everything a homeowner needs to make confident
          decisions: how staining differs from sealing and painting, what it
          costs, how to choose the right stain opacity and product for your wood
          species, the exact sequence a quality contractor follows, and how to
          vet and hire a professional who delivers a finish that actually lasts.
          If you are weighing the broader project of protecting your home's
          exterior, our guide to{" "}
          <Link href="/services/exterior-painting">exterior painting</Link> covers
          the siding side of the equation.
        </p>
        <h3>What a staining project typically includes</h3>
        <ul>
          <li>
            <strong>Inspection and minor repair</strong> — resetting fasteners,
            replacing failed boards, and sanding splinters and rough spots.
          </li>
          <li>
            <strong>Cleaning</strong> — removing dirt, mildew, algae, and gray
            oxidation with a dedicated wood cleaner.
          </li>
          <li>
            <strong>Stripping</strong> — removing old film-forming finishes when
            they are peeling or incompatible with the new stain.
          </li>
          <li>
            <strong>Brightening</strong> — neutralizing cleaners and reopening the
            wood pores so stain can penetrate.
          </li>
          <li>
            <strong>Stain application</strong> — one or two coats of the chosen
            stain, worked into the grain and finished cleanly.
          </li>
        </ul>
      </Section>

      <Section id="stain-vs-seal-vs-paint" heading="Stain vs. Seal vs. Paint: Which Is Right?">
        <p>
          The first decision is what kind of finish to apply, and the three main
          options behave very differently. The short answer: a clear sealer
          repels water but offers almost no UV protection, a stain adds pigment
          that blocks UV while showing wood grain, and paint forms an opaque film
          that hides the wood entirely. For most decks and fences, a penetrating
          stain is the right middle ground.
        </p>
        <h3>Clear sealers and water repellents</h3>
        <p>
          A clear sealer soaks into the wood and beads water off the surface,
          which protects against moisture intrusion, swelling, and the cracking
          that follows. What a clear sealer does not do is block ultraviolet
          light. Because pigment is what stops UV damage, clear-sealed wood still
          grays within a year or two. Clear sealers make sense when you genuinely
          want the natural, untreated look and are committed to recoating
          frequently, or as a maintenance topcoat over a tinted base.
        </p>
        <h3>Stains</h3>
        <p>
          Stains combine water repellency with pigment, giving you both moisture
          and UV protection in one product. The amount of pigment determines the
          opacity, ranging from barely tinted toners to fully opaque solid
          stains. Penetrating stains soak into the wood rather than forming a
          surface film, which is a major advantage outdoors: they wear away
          gradually and evenly rather than peeling, which makes future
          maintenance far simpler.
        </p>
        <h3>Paint</h3>
        <p>
          Paint offers the most color choice and the longest-lasting UV
          protection because it lays down a thick, opaque film. The downside
          outdoors is significant: that film traps moisture, and on horizontal
          surfaces like deck boards it cracks and peels as water gets underneath,
          leading to constant scraping and repainting. Paint can be a reasonable
          choice for fences and railings, but it is rarely recommended for a deck
          walking surface. The same film-forming behavior that makes paint
          durable on{" "}
          <Link href="/services/exterior-painting">house siding</Link> works
          against it on a deck floor.
        </p>
        <DataTable
          caption="Comparing the three main exterior wood finishes for decks and fences."
          headers={["Finish", "UV Protection", "Shows Grain", "Failure Mode", "Best For"]}
          rows={[
            ["Clear sealer", "Very low", "Fully", "Fades, grays", "Natural look, frequent recoats"],
            ["Toner / semi-transparent stain", "Moderate to high", "Yes", "Wears, fades", "Decks, most fences"],
            ["Semi-solid / solid stain", "High", "Texture only", "Can flake on traffic areas", "Weathered wood, fences, railings"],
            ["Paint", "Very high", "No", "Cracks, peels", "Fences, railings (not deck floors)"],
          ]}
        />
        <Callout variant="tip" title="The pigment rule">
          More pigment means more UV protection and a longer recoat interval, but
          less visible wood grain. Choose the highest opacity you are
          comfortable with aesthetically — it is the simplest way to buy yourself
          more years between maintenance coats.
        </Callout>
      </Section>

      <Section id="why-it-matters" heading="Why Deck and Fence Staining Matters">
        <p>
          Staining is not just about looks. It is preventive maintenance that
          protects one of the larger investments in your yard. A new deck can
          cost tens of thousands of dollars to build, and a perimeter fence runs
          into the thousands. A staining cycle that costs a few hundred dollars
          every couple of years is inexpensive insurance against the far greater
          cost of replacing rotted, cracked, or cupped boards.
        </p>
        <h3>Protection from moisture and rot</h3>
        <p>
          Water is wood's primary enemy. When untreated wood absorbs rain and
          then dries, it swells and shrinks repeatedly, opening checks and cracks
          that hold even more water. Standing moisture invites fungal decay and
          rot, which weakens structural members and creates safety hazards on
          stairs and railings. A good stain dramatically reduces water uptake,
          keeping boards dimensionally stable and dry.
        </p>
        <h3>Protection from UV damage</h3>
        <p>
          Sunlight degrades wood from the surface down. UV rays destroy lignin,
          allowing the gray, fuzzy surface fibers you see on weathered decks to
          form and wash away. Pigmented stain absorbs and reflects UV before it
          can reach the wood, which is precisely why even a lightly tinted stain
          vastly outperforms a clear product.
        </p>
        <h3>Mildew, algae, and appearance</h3>
        <p>
          Shaded, damp areas grow mildew and algae that stain the wood and make
          surfaces slippery. Quality stains include mildewcides and, combined
          with periodic cleaning, keep decks looking fresh and safe underfoot. A
          well-stained deck and fence also lift the whole property's appearance
          and resale appeal, much like a fresh{" "}
          <Link href="/services/interior-painting">interior paint job</Link> does
          inside the home.
        </p>
        <h3>Splinter prevention and everyday safety</h3>
        <p>
          A protective stain keeps the surface fibers bound together, which
          directly reduces the splinters and raised grain that make a bare deck
          unpleasant and unsafe underfoot — a real concern for households with
          children, bare feet, or pets. Stains that contain mildewcides also
          curb the slick, slippery film that grows on damp, shaded boards and
          contributes to slip-and-fall accidents on stairs. By keeping moisture
          out, stain limits the freeze-thaw cycling that pops fasteners and lifts
          board ends into trip hazards. In short, the same finish that protects
          your investment also keeps the structure comfortable and safe to use,
          season after season, with far less of the annual sanding and splinter
          patrol that untreated wood demands.
        </p>
        <Callout variant="warning" title="Gray is a warning sign">
          That silvery-gray patina many homeowners tolerate is the visible result
          of UV breakdown. While gray wood is not automatically rotten, it means
          the surface is unprotected and absorbing water freely. Acting at the
          first signs of graying is far cheaper than waiting for splits, cupping,
          and soft spots.
        </Callout>
      </Section>

      <Section id="cost" heading="How Much Does Deck and Fence Staining Cost?">
        <p>
          Professional deck staining typically costs <strong>$2 to $5 per square
          foot</strong> including cleaning, prep, and two coats, putting an
          average 300-square-foot deck at roughly <strong>$600 to $1,500</strong>.
          Fence staining is usually quoted <strong>$1 to $3.50 per linear
          foot</strong> or <strong>$2 to $4 per square foot</strong> of surface
          area. The wide ranges reflect how much condition, access, and product
          choice influence the labor involved.
        </p>
        <DataTable
          caption="Typical professional deck and fence staining cost ranges. Actual prices vary by region, wood condition, and product grade."
          headers={["Project", "Typical Cost Range", "Notes"]}
          rows={[
            ["Small deck (150 sq ft)", "$350 – $900", "Clean, prep, two coats"],
            ["Average deck (300 sq ft)", "$600 – $1,500", "Includes railings"],
            ["Large deck (500+ sq ft)", "$1,200 – $3,000", "Multi-level adds cost"],
            ["Deck stripping (add-on)", "$1 – $2.50 / sq ft", "When removing old film finish"],
            ["Wood fence (per linear foot)", "$1 – $3.50", "Single side, ground-level"],
            ["100 ft of 6 ft fence (both sides)", "$700 – $2,400", "Surface area pricing"],
            ["Railings & spindles (detail)", "+15% – 30%", "Labor-intensive cut-in work"],
          ]}
        />
        <h3>What drives the price up or down</h3>
        <ul>
          <li>
            <strong>Surface condition</strong> — heavy mildew, old peeling
            finish, and stripping all add hours of prep.
          </li>
          <li>
            <strong>Stain opacity and quality</strong> — premium penetrating oils
            cost more per gallon than budget products but last longer.
          </li>
          <li>
            <strong>Detail and complexity</strong> — railings, balusters,
            lattice, pergolas, and stairs are slow, brush-intensive work.
          </li>
          <li>
            <strong>Access and height</strong> — elevated or multi-level decks
            and tall fences require more setup and safety equipment.
          </li>
          <li>
            <strong>Repairs</strong> — replacing boards or resetting fasteners is
            usually billed separately from staining.
          </li>
          <li>
            <strong>Regional labor rates</strong> — costs in major metros can run
            considerably higher than in smaller markets.
          </li>
        </ul>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="coverage" heading="Estimating Stain Quantity and Coverage">
        <p>
          Buying the right amount of stain is one of the most common stumbling
          blocks, because wood coverage varies far more than paint coverage. A
          gallon of interior wall paint reliably covers about 350 to 400 square
          feet, but a gallon of deck stain can stretch anywhere from roughly 150
          to 500 square feet depending on the product, the opacity, and how
          thirsty the wood is. Smooth, previously sealed boards drink very little;
          rough-sawn fence pickets and dry, weathered decking can soak up two to
          three times as much.
        </p>
        <h3>Measuring the real surface area</h3>
        <p>
          Start by calculating the actual area to be coated, not just the deck's
          footprint. For a deck floor, multiply length by width. Then add the
          surfaces most people forget: railings, balusters, stair treads and
          risers, fascia boards, and the visible edges. A practical shortcut is
          to add roughly 20 to 30 percent to a deck floor's square footage to
          account for railings and detail. For a fence, measure the run in linear
          feet and multiply by the height, then double it if you are staining
          both sides. Rough-sawn or board-on-board fences expose far more surface
          area than their flat dimensions suggest, so round generously.
        </p>
        <h3>Working out gallons</h3>
        <ul>
          <li>
            <strong>Find the coverage rate.</strong> Read the manufacturer's
            stated coverage on the can, which is usually given as a range per
            gallon for the specific opacity.
          </li>
          <li>
            <strong>Use the low end for thirsty wood.</strong> For new
            pressure-treated lumber, rough-sawn pickets, or dry gray decks,
            assume the lower coverage figure.
          </li>
          <li>
            <strong>Divide and round up.</strong> Divide your total square
            footage by the coverage rate, then buy a little extra so the whole
            job comes from one batch.
          </li>
          <li>
            <strong>Account for a second coat.</strong> A wet-on-wet second coat
            adds far less than a full gallon's worth because the wood is already
            saturated, but budget roughly 20 to 40 percent more for it.
          </li>
        </ul>
        <DataTable
          caption="Approximate stain needed by project size. Use the higher gallon figure for rough, dry, or previously unstained wood."
          headers={["Project", "Approx. Surface Area", "Estimated Stain (1 coat)"]}
          rows={[
            ["Small deck (150 sq ft)", "180 – 200 sq ft with rails", "1 gallon"],
            ["Average deck (300 sq ft)", "360 – 400 sq ft with rails", "1 – 2 gallons"],
            ["Large deck (500 sq ft)", "600 – 650 sq ft with rails", "2 – 3 gallons"],
            ["100 ft fence, 6 ft, one side", "600 sq ft", "2 – 4 gallons"],
            ["100 ft fence, 6 ft, both sides", "1,200 sq ft", "4 – 8 gallons"],
          ]}
        />
        <Callout variant="tip" title="Box your stain">
          When a job needs more than one container, pour all the gallons into a
          single large bucket and mix them, a practice called boxing. Pigment can
          vary subtly between cans, and boxing guarantees a consistent color
          across the entire deck or fence with no visible seam where one can ran
          out and the next began.
        </Callout>
      </Section>

      <Section id="stain-types" heading="Stain Types and Opacity Levels">
        <p>
          Stains are categorized two ways: by opacity (how much pigment they
          contain and therefore how much wood grain shows through) and by base
          chemistry (oil-based versus water-based). Both choices affect
          appearance, durability, and how the finish wears over time.
        </p>
        <h3>Opacity levels, from clear to solid</h3>
        <ul>
          <li>
            <strong>Clear / clear toner</strong> — minimal or no pigment, maximum
            grain, least UV protection, shortest lifespan.
          </li>
          <li>
            <strong>Semi-transparent</strong> — light pigment that shows grain
            while adding meaningful UV defense; the most popular deck choice.
          </li>
          <li>
            <strong>Semi-solid</strong> — heavier pigment that obscures most grain
            but keeps wood texture; great for older or uneven wood.
          </li>
          <li>
            <strong>Solid (opaque)</strong> — paint-like color that hides grain
            entirely while showing texture; longest UV protection but can flake
            on high-traffic deck floors.
          </li>
        </ul>
        <DataTable
          caption="Stain opacity at a glance, with typical recoat intervals on protected wood."
          headers={["Opacity", "Grain Visible", "UV Protection", "Typical Recoat"]}
          rows={[
            ["Clear sealer", "Full", "Minimal", "1 – 2 years"],
            ["Semi-transparent", "High", "Good", "2 – 4 years"],
            ["Semi-solid", "Partial", "Very good", "3 – 5 years"],
            ["Solid", "None (texture only)", "Excellent", "4 – 7 years"],
          ]}
        />
        <h3>Oil-based vs. water-based stains</h3>
        <p>
          <strong>Oil-based (alkyd) stains</strong> penetrate deeply, are easy to
          apply and reapply, and tend to enrich wood grain beautifully. They are
          slower to dry, higher in volatile organic compounds, and in some
          regions restricted by VOC regulations. <strong>Water-based (acrylic)
          stains</strong> dry faster, clean up with water, resist mildew and
          fading well, and are increasingly the standard as formulations improve.
          Once you commit to one chemistry it is best to stay with it, because
          switching often requires stripping back to bare wood.
        </p>
        <Callout variant="tip" title="Always test on a hidden board">
          Stain color shifts dramatically depending on the wood species, age, and
          how much the surface absorbs. Apply your chosen stain to an
          inconspicuous board or offcut, let it dry fully, and judge the real
          color before committing to the whole structure.
        </Callout>
      </Section>

      <Section id="wood-types" heading="Choosing Stain by Wood Type">
        <p>
          The right stain and prep depend heavily on what your deck or fence is
          built from. Different species absorb stain differently, contain
          different oils and tannins, and weather at different rates.
        </p>
        <h3>Pressure-treated pine</h3>
        <p>
          Pressure-treated lumber is the most common and affordable decking and
          fencing material in North America. It is chemically treated to resist
          rot and insects, but it arrives wet from treatment and must dry before
          it will accept stain. New pressure-treated wood can also have a
          mill-glazed surface that repels stain; light sanding or a cleaning step
          opens it up. Once dry, it takes semi-transparent and semi-solid stains
          well. The wood preservatives used in treated lumber are regulated, and
          the EPA maintains an{" "}
          <a
            href="https://www.epa.gov/ingredients-used-pesticide-products/overview-wood-preservative-chemicals"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            overview of wood preservative chemicals
          </a>{" "}
          worth reviewing if you handle freshly treated boards.
        </p>
        <h3>Cedar</h3>
        <p>
          Western red cedar is prized for its natural rot resistance, dimensional
          stability, and rich color. It is more porous than treated pine and
          accepts stain readily, but it also weathers to gray quickly if left
          unprotected. A semi-transparent stain preserves cedar's warm tones
          beautifully. Because cedar is soft, use gentle cleaning and low-pressure
          washing to avoid damaging the fibers.
        </p>
        <h3>Redwood</h3>
        <p>
          Redwood, like cedar, is naturally durable and rich in tannins that give
          it its color. Those tannins can bleed and need careful cleaning and
          brightening before staining. Semi-transparent oil stains tend to
          showcase redwood's grain best. As a premium material, redwood is worth
          protecting promptly to keep its signature hue.
        </p>
        <h3>Tropical hardwoods (ipe, cumaru, tigerwood)</h3>
        <p>
          Dense exotic hardwoods are extremely durable but notoriously difficult
          to stain because they are so tight-grained and oily that conventional
          stains struggle to penetrate. They require specialized penetrating oils
          formulated for hardwoods and more frequent maintenance coats. Many
          owners let these woods gray naturally, but pigmented hardwood oils keep
          their dramatic color alive.
        </p>
        <DataTable
          caption="Stain recommendations and prep notes by common wood type."
          headers={["Wood Type", "Absorbency", "Recommended Stain", "Key Prep Note"]}
          rows={[
            ["Pressure-treated pine", "Low when new", "Semi-transparent / semi-solid", "Must dry; remove mill glaze"],
            ["Cedar", "High", "Semi-transparent", "Gentle, low-pressure cleaning"],
            ["Redwood", "Moderate", "Semi-transparent oil", "Manage tannin bleed"],
            ["Tropical hardwood", "Very low", "Specialty hardwood oil", "Expect frequent recoats"],
          ]}
        />
      </Section>

      <Section id="composite-materials" heading="Composite and Other Materials: Can You Stain Them?">
        <p>
          Not every deck and fence is solid wood, and the material dictates
          whether staining is even possible. As composite, PVC, metal, and
          vinyl products have grown to a large share of new outdoor
          construction, homeowners increasingly ask whether the staining advice
          for wood applies to them. In most cases it does not, and applying a
          wood stain to the wrong substrate wastes money and creates a finish
          that peels almost immediately.
        </p>
        <h3>Composite decking and capped boards</h3>
        <p>
          Composite boards are made from a blend of wood fibers and recycled
          plastic, and most modern products are capped with a hard polymer shell
          for stain and fade resistance. That shell is exactly what penetrating
          wood stain cannot soak into, so a traditional stain will not bond.
          Manufacturers design composite to be low-maintenance and generally
          void warranties if it is coated. Faded, older, uncapped first-generation
          composite is the one exception: specialty acrylic resurfacing coatings
          formulated for composite exist, but they form a film that requires
          periodic recoating, so weigh that ongoing commitment carefully.
        </p>
        <h3>PVC, vinyl, and aluminum</h3>
        <p>
          Cellular PVC and vinyl decking and fencing are fully synthetic and are
          not designed to be stained at all; they are meant to keep their factory
          color for decades. Aluminum and steel railings are likewise finished at
          the factory and call for a paint system, not a stain, if you ever want
          to change the color. For any of these, cleaning is the only routine
          maintenance — there is no staining cycle.
        </p>
        <h3>How to tell what you have</h3>
        <ul>
          <li>
            <strong>Look at the cut ends and underside.</strong> Wood shows a
            consistent grain throughout, while composite reveals a speckled,
            uniform core.
          </li>
          <li>
            <strong>Check the weight and sound.</strong> Composite is noticeably
            heavier and sounds duller and more solid than hollow PVC.
          </li>
          <li>
            <strong>Probe for grain absorption.</strong> A drop of water soaks
            into bare wood but beads and sits on composite, PVC, and metal.
          </li>
          <li>
            <strong>Find the brand stamp.</strong> Most composite and PVC boards
            carry a manufacturer mark you can look up to confirm material and
            coating rules.
          </li>
        </ul>
        <DataTable
          caption="Whether common deck and fence materials can take a wood stain."
          headers={["Material", "Stainable?", "Recommended Care"]}
          rows={[
            ["Solid wood", "Yes", "Clean, brighten, penetrating stain"],
            ["Uncapped composite", "Specialty coating only", "Composite-rated acrylic resurfacer"],
            ["Capped composite", "No", "Periodic washing only"],
            ["PVC / vinyl", "No", "Washing; no coating needed"],
            ["Aluminum / steel", "No (paint, not stain)", "Factory finish; touch-up paint"],
          ]}
        />
        <Callout variant="warning" title="Check the warranty before coating">
          Coating a capped composite or PVC product almost always voids the
          manufacturer's warranty and rarely bonds well. If you are unhappy with
          a synthetic surface's color, confirm the maker's official position
          before applying anything — the right answer is usually thorough cleaning,
          not stain.
        </Callout>
      </Section>

      <Section id="process" heading="The Professional Staining Process">
        <p>
          A quality contractor follows a disciplined, repeatable sequence.
          Knowing these steps helps you evaluate whether a crew is doing the work
          properly or skipping the prep that determines how long the finish
          lasts. These steps mirror the how-to schema published with this guide.
        </p>
        <ol>
          <li>
            <strong>Inspect and repair.</strong> The crew walks the structure to
            find loose boards, popped fasteners, splinters, and rot, then resets
            screws, replaces failed boards, and sands rough areas.
          </li>
          <li>
            <strong>Clean the wood.</strong> A dedicated wood cleaner or
            percarbonate deck wash removes dirt, mildew, algae, and graying,
            agitated with a brush and rinsed with low-pressure washing.
          </li>
          <li>
            <strong>Strip old finish.</strong> When a film-forming stain or paint
            is peeling, or when switching to a penetrating product, a stripper is
            applied, allowed to dwell, scrubbed, and rinsed to bare wood.
          </li>
          <li>
            <strong>Brighten and neutralize.</strong> A wood brightener, usually
            an oxalic acid solution, neutralizes the cleaners, restores tone, and
            reopens the wood pores for even penetration.
          </li>
          <li>
            <strong>Let the wood dry.</strong> The wood is allowed to dry to
            roughly 12 to 15 percent moisture, confirmed with a moisture meter or
            a water-bead test before any stain is applied.
          </li>
          <li>
            <strong>Mask and protect.</strong> Siding, plants, hardware, and
            adjacent surfaces are covered, and clean lines are taped off.
          </li>
          <li>
            <strong>Apply the stain.</strong> Stain is applied by brush, pad, or
            sprayer and immediately back-brushed into the grain, maintaining a wet
            edge and coating full board lengths to avoid lap marks.
          </li>
          <li>
            <strong>Apply a second coat.</strong> Where the product allows, a
            second coat goes on wet-on-wet while the first is still tacky so the
            wood absorbs maximum stain without a sticky film.
          </li>
          <li>
            <strong>Cure and inspect.</strong> Traffic, furniture, and water are
            kept off for the cure time, then the work is inspected under good
            light and any thin spots are touched up.
          </li>
        </ol>
        <Callout variant="tip" title="Back-brushing is the pro secret">
          The difference between a deck that looks great for years and one that
          peels in months often comes down to back-brushing. Whatever the
          application method, working the stain into the grain — rather than
          letting it sit on the surface — is what makes it bond and last.
        </Callout>
      </Section>

      <Section id="prep" heading="Surface Preparation: The Foundation of a Lasting Finish">
        <p>
          Professionals will tell you that staining is 20 percent application and
          80 percent preparation. Stain bonds to clean, open, dry wood. Skip or
          rush the prep and even the best product will fail early. There are four
          core prep stages, and each matters.
        </p>
        <h3>Cleaning</h3>
        <p>
          Every staining job starts with cleaning. A dedicated deck cleaner,
          often a sodium percarbonate product, lifts ground-in dirt, mildew,
          algae, and the loose gray surface fibers caused by UV exposure. The
          cleaner is applied, allowed to dwell, agitated with a stiff brush, and
          rinsed. The goal is sound, clean wood, not a power-blasted surface.
        </p>
        <h3>Stripping</h3>
        <p>
          When an old solid stain or paint is peeling, or you are moving from a
          film finish to a penetrating one, the existing coating must come off.
          Strippers soften the old finish so it can be scrubbed and rinsed away.
          This is the most labor-intensive prep step and a major driver of cost,
          but penetrating stain simply cannot work over an intact film.
        </p>
        <h3>Brightening</h3>
        <p>
          After cleaning or stripping, the wood is usually left slightly
          alkaline and dull. A wood brightener, typically an oxalic acid
          solution, neutralizes the chemistry, restores the wood's natural color,
          and reopens the surface pores so stain penetrates evenly. Brightening
          is the step most often skipped by amateurs and the one that most
          improves the final appearance.
        </p>
        <h3>Sanding and spot repair</h3>
        <p>
          Splintered boards, raised grain, and rough railings are sanded smooth
          for safety and a cleaner finish. On new pressure-treated wood, light
          sanding also removes mill glaze. Any popped nails are reset or replaced
          with screws, and damaged boards are swapped out before staining so the
          finished surface is uniform.
        </p>
        <Callout variant="warning" title="Pressure washing can ruin wood">
          Overzealous pressure washing is one of the most common ways homeowners
          damage their own decks. Too much pressure or a too-narrow tip gouges
          and furs the wood, raising fibers that then absorb stain unevenly. Keep
          pressure low, use a wide fan tip, hold the wand back, and always move
          with the grain. Chemical cleaners do most of the real work.
        </Callout>
      </Section>

      <Section id="moisture-timing" heading="Moisture, Weather, and Timing">
        <p>
          Stain must penetrate into the wood, and it can only do that when the
          wood is dry enough to accept it and the weather cooperates. Getting the
          timing right is just as important as the product you choose.
        </p>
        <h3>Wood moisture content</h3>
        <p>
          Wood should be at roughly 12 to 15 percent moisture content before
          staining. Saturated wood has no room to absorb stain, so the finish
          sits on top and fails. After cleaning or rain, most decks need 24 to 72
          hours of dry weather to reach the right level. A pro confirms with a
          moisture meter, but a simple water-bead test works too: sprinkle water
          on the surface, and if it soaks in within about 10 minutes, the wood is
          ready; if it beads, wait longer.
        </p>
        <h3>Temperature and humidity</h3>
        <p>
          Aim for temperatures between 50 and 90 degrees Fahrenheit with moderate
          humidity. Too cold and the stain will not cure properly; too hot and it
          flashes off before it can penetrate. A mild, overcast day is ideal.
        </p>
        <h3>Rain and the application window</h3>
        <p>
          Check the forecast carefully. You want no rain for at least 24 to 48
          hours after staining so the finish can set. Staining a deck the day
          before a storm wastes the entire effort. Spring and fall, with their
          mild temperatures and lower sun intensity, are the most reliable
          seasons in most climates.
        </p>
        <Callout variant="warning" title="Never stain in direct sun">
          Staining a hot, sun-baked surface is a classic mistake. The heat causes
          the stain to dry on contact, preventing penetration and leaving lap
          marks, streaks, and a blotchy finish. Always work in the shade and
          chase the shadow around the structure as the sun moves.
        </Callout>
      </Section>

      <Section id="new-vs-weathered" heading="New Wood vs. Weathered Wood">
        <p>
          The condition of your wood changes the prep strategy significantly. New
          construction and old, gray decks require very different approaches.
        </p>
        <h3>Staining new wood</h3>
        <p>
          The most common mistake with new decks is staining too soon. Freshly
          installed pressure-treated lumber is loaded with moisture from the
          treatment process and may have a mill glaze that repels stain. It needs
          to dry — often several weeks to a few months depending on climate —
          until it passes the water-bead test. Kiln-dried cedar and redwood can
          usually be stained much sooner. Even on new wood, a quick cleaning and
          light sanding to remove mill glaze improves absorption dramatically.
        </p>
        <h3>Staining weathered and gray wood</h3>
        <p>
          Gray, weathered wood is usually salvageable. The gray is surface
          oxidation, not rot, and a thorough clean-and-brighten cycle restores
          much of the original color and reopens the pores. The real question is
          structural soundness: probe suspicious boards with a screwdriver, and
          if the wood is soft, spongy, or crumbles, it has rot and must be
          replaced before staining. Once cleaned, brightened, and dried,
          weathered wood often takes stain beautifully and looks nearly new.
        </p>
        <h3>Re-staining previously stained wood</h3>
        <p>
          If the existing finish is a penetrating stain that has simply faded but
          is still well bonded, you may be able to clean, brighten, and recoat
          without stripping. If the previous finish is a film-former that is
          peeling, or you are switching product types, full stripping is
          required. Matching the existing chemistry and opacity makes maintenance
          recoats far simpler.
        </p>
      </Section>

      <Section id="restore-vs-replace" heading="Restore vs. Replace an Old Deck">
        <p>
          Before investing in cleaning, brightening, and staining, it is worth
          deciding whether the structure is sound enough to be worth saving.
          Staining a deck that is structurally failing simply puts a handsome
          finish on a hazard. The good news is that most decks fail cosmetically
          long before they fail structurally, so a tired, gray deck is far more
          often a restoration candidate than a replacement. Surface graying,
          faded color, and a few cupped or splintered boards are all repairable.
          Rot in the framing, footings, or ledger is a different matter entirely.
        </p>
        <h3>Inspect the structure first</h3>
        <p>
          Focus your inspection on the parts that hold the deck up and keep it
          attached to the house, not just the boards you walk on. The ledger
          board, where the deck connects to the home, is the single most common
          point of catastrophic failure and deserves the closest look. Probe for
          softness, check fasteners for rust, and look for any separation or water
          staining behind it.
        </p>
        <ul>
          <li>
            <strong>Ledger and flashing</strong> — confirm it is bolted (not just
            nailed) and that flashing keeps water out of the wall.
          </li>
          <li>
            <strong>Posts and footings</strong> — probe where posts meet soil or
            concrete for soft, punky, or crumbling wood.
          </li>
          <li>
            <strong>Joists and beams</strong> — sight along them for sag and check
            the tops for trapped-moisture rot.
          </li>
          <li>
            <strong>Railings</strong> — push firmly; any wobble is a fall hazard
            that must be fixed before use, regardless of finish.
          </li>
          <li>
            <strong>Fasteners and connectors</strong> — heavy rust or missing
            joist hangers signal deferred maintenance.
          </li>
        </ul>
        <h3>The repair-versus-replace math</h3>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <Callout variant="warning" title="Stain hides, it does not fix">
          A fresh coat can mask soft boards and rusted connectors, giving a false
          sense of safety. Always resolve structural and fastener issues first.
          Staining should be the final step over wood you have already confirmed
          is sound.
        </Callout>
      </Section>

      <Section id="longevity" heading="How Long Does Deck and Fence Stain Last?">
        <p>
          Stain longevity depends on opacity, exposure, and surface orientation.
          As a rule, the more pigment a stain contains, the longer it protects,
          and vertical surfaces like fences and railings always outlast
          horizontal walking surfaces that endure foot traffic, standing water,
          and direct overhead sun.
        </p>
        <DataTable
          caption="Realistic stain lifespan by product type and surface. Horizontal deck floors wear fastest."
          headers={["Product", "Fence / Railing", "Deck Floor", "Recoat Trigger"]}
          rows={[
            ["Clear sealer", "1 – 2 years", "1 year", "Water stops beading"],
            ["Semi-transparent", "3 – 4 years", "2 – 3 years", "Color fades, traffic wear"],
            ["Semi-solid", "4 – 5 years", "3 – 4 years", "Thinning in walkways"],
            ["Solid stain", "5 – 7 years", "3 – 5 years", "Flaking or worn patches"],
          ]}
        />
        <p>
          The single best way to extend any stain's life is regular cleaning. A
          gentle wash once or twice a year removes the mildew, dirt, and grit
          that abrade and break down the finish. A light maintenance coat applied
          before the stain fully wears through is far easier and cheaper than
          waiting for a complete strip-and-redo. Decks in full sun or near
          sprinklers and pools will always need more frequent attention than
          shaded, protected structures.
        </p>
        <h3>What shortens stain life the most</h3>
        <p>
          Two structures coated with the same product on the same day can wear at
          very different rates, and the variables are largely about exposure and
          use rather than the can you bought. South- and west-facing surfaces take
          the harshest afternoon sun and fade first. Standing water from poor
          drainage, ice and snow left sitting through winter, and constant
          sprinkler overspray all break a finish down faster than rain alone.
          Heavy foot traffic, dragged furniture, pet claws, and grit ground into
          the surface abrade the stain mechanically. Even the color matters:
          darker pigments absorb more heat and can degrade slightly faster in full
          sun, while the extra pigment in a darker semi-transparent also buys more
          UV protection. Recognizing which of these apply to your deck helps you
          set a realistic recoat interval instead of trusting the can's best-case
          rating.
        </p>
      </Section>

      <Section id="diy-vs-pro" heading="DIY vs. Hiring a Professional">
        <p>
          Deck and fence staining is one of the more approachable outdoor DIY
          projects, but the prep work is harder and more important than most
          homeowners expect. Deciding whether to do it yourself comes down to the
          size of the job, the condition of the wood, and how much you value the
          result lasting.
        </p>
        <h3>When DIY makes sense</h3>
        <ul>
          <li>
            The deck or fence is small, at ground level, and in good condition.
          </li>
          <li>
            You are doing a maintenance recoat of the same compatible stain, not
            a strip-and-restain.
          </li>
          <li>
            You have a full dry-weather window and the patience to clean,
            brighten, dry, and apply properly.
          </li>
          <li>
            You own or can rent the right tools and are comfortable with the
            chemicals involved.
          </li>
        </ul>
        <h3>When to hire a pro</h3>
        <ul>
          <li>
            The job requires stripping a failed film finish, which is
            labor-intensive and easy to do poorly.
          </li>
          <li>
            The structure is large, multi-level, elevated, or has extensive
            railings, balusters, and lattice.
          </li>
          <li>
            The wood is in rough shape and needs repairs, sanding, and careful
            color restoration.
          </li>
          <li>
            You want a warranty and a finish that reliably lasts its full rated
            lifespan.
          </li>
        </ul>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <h3>Budgeting the true cost of DIY</h3>
        <p>
          DIY staining is rarely free even when you supply your own labor. Before
          assuming the project will save the full price of hiring out, total up
          the consumables and equipment a proper job requires, then weigh that
          against the value of a weekend or two of work and the risk of a
          do-over.
        </p>
        <ul>
          <li>
            <strong>Cleaner and brightener</strong> — roughly $20 to $50 in
            chemicals for an average deck.
          </li>
          <li>
            <strong>Stripper</strong> — add $30 to $80 if an old film finish must
            come off.
          </li>
          <li>
            <strong>Stain</strong> — typically $35 to $70 per gallon, with most
            decks needing one to three gallons.
          </li>
          <li>
            <strong>Application tools</strong> — pads, brushes, rollers, and a
            stain tray run $30 to $80.
          </li>
          <li>
            <strong>Pressure washer rental</strong> — about $50 to $100 per day if
            you do not own one.
          </li>
        </ul>
        <p>
          On most mid-size decks the materials alone land in the $150 to $300
          range, so the genuine saving over a professional is the labor, not the
          whole quote. If your wood needs stripping or extensive repair, the gap
          narrows further and the odds of a costly mistake rise.
        </p>
      </Section>

      <Section id="hiring" heading="How to Hire a Deck and Fence Staining Pro">
        <p>
          The quality of a staining job is invisible at first — fresh stain looks
          good even when the prep was rushed. The difference shows up a year
          later when a poorly prepped deck starts peeling. That makes hiring the
          right contractor essential. Use these criteria to separate professionals
          from chancers.
        </p>
        <h3>Verify licensing and insurance</h3>
        <p>
          Confirm the contractor carries liability insurance and, where required,
          a valid license. Staining involves chemicals, ladders, and sometimes
          elevated work; you do not want to be liable for an injury or property
          damage. Ask for proof, not just a verbal assurance.
        </p>
        <h3>Ask about the full prep process</h3>
        <p>
          A reputable pro will describe cleaning, stripping where needed,
          brightening, drying time, and back-brushing without being prompted. If a
          contractor proposes to wash and stain the same day, or never mentions
          moisture content, that is a red flag. The prep conversation tells you
          almost everything about the quality you will receive.
        </p>
        <h3>Get a detailed written estimate</h3>
        <p>
          Insist on a written scope listing the exact products, number of coats,
          prep steps, repairs included or excluded, square footage, and total
          price. A vague one-line quote invites disputes later. Compare bids on
          scope, not just price, and treat an unusually low bid with suspicion.
        </p>
        <h3>Check reviews and recent work</h3>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <Callout variant="tip" title="Ask about the warranty">
          Quality staining contractors stand behind their work. Ask what happens
          if the finish fails prematurely and get the warranty terms in writing.
          A pro confident in their prep will offer a meaningful guarantee.
        </Callout>
      </Section>

      <Section id="mistakes" heading="Common Deck and Fence Staining Mistakes">
        <p>
          Most stain failures trace back to a handful of avoidable errors.
          Whether you DIY or hire out, knowing these mistakes helps you spot
          trouble before it costs you.
        </p>
        <h3>Staining wet or brand-new wood</h3>
        <p>
          Applying stain before the wood is dry enough to absorb it is the number
          one cause of early failure. The stain sits on the surface, never bonds,
          and peels. Always confirm moisture with a meter or water-bead test.
        </p>
        <h3>Staining in direct sun or before rain</h3>
        <p>
          Hot surfaces flash off the stain before it can penetrate, and rain
          within a day or two washes uncured stain away. Both leave a blotchy,
          short-lived finish. Time the job for mild, dry weather and work in the
          shade.
        </p>
        <h3>Skipping the brightener</h3>
        <p>
          Cleaning without neutralizing and brightening leaves the wood dull and
          its pores partially closed, hurting both color and penetration. The
          brightening step is cheap and makes a large visible difference.
        </p>
        <h3>Over-applying stain</h3>
        <p>
          Wood can only absorb so much. Applying too many coats, or coating over
          already-cured stain, leaves a sticky surface film that never dries and
          eventually peels. Apply additional coats only wet-on-wet, and wipe any
          excess that has not soaked in.
        </p>
        <h3>Damaging wood with the pressure washer</h3>
        <p>
          As covered above, too much pressure furs and gouges the wood, ruining
          the surface for staining. Let chemical cleaners do the work and keep the
          pressure low. If your project also involves washing siding before{" "}
          <Link href="/services/exterior-painting">exterior painting</Link>, the
          same gentle-pressure principles apply.
        </p>
      </Section>

      <Section id="maintenance" heading="Maintenance and Aftercare">
        <p>
          A stained deck and fence are not maintenance-free, but a little routine
          care dramatically extends the years between full restaining. Treat
          maintenance as part of the system, not an afterthought.
        </p>
        <h3>Regular cleaning</h3>
        <p>
          Sweep debris promptly so it does not trap moisture, and wash the deck
          and fence gently once or twice a year to remove dirt, pollen, mildew,
          and grit. Clean surfaces wear far more slowly than dirty ones. Address
          mildew in shaded areas early before it spreads and discolors the wood.
        </p>
        <h3>Watch for early wear</h3>
        <p>
          Inspect high-traffic zones — stair treads, doorways, and main
          walkways — each year. These wear first. Spot-recoating worn areas
          before they reach bare wood keeps the whole deck protected and delays a
          full restain.
        </p>
        <h3>Recoat on schedule</h3>
        <p>
          The simplest longevity test is the water-bead test: if water no longer
          beads on the surface, the repellency is gone and it is time to recoat.
          Recoating a faded-but-bonded penetrating stain is quick — clean,
          brighten, dry, and apply a fresh coat. Waiting until the finish has
          fully failed forces a far more expensive strip-and-restain.
        </p>
        <h3>Manage moisture sources</h3>
        <p>
          Aim sprinklers away from wood, keep planters and mats from trapping
          moisture against boards, and ensure good drainage. Because washwater and
          runoff from cleaning and stripping can carry chemicals, follow local
          rules and the EPA's guidance on{" "}
          <a
            href="https://www.epa.gov/npdes"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            stormwater and washwater runoff
          </a>{" "}
          when rinsing into yards or storm drains. For homeowners dealing with
          damp, shaded structures prone to mold, the CDC's{" "}
          <a
            href="https://www.cdc.gov/mold"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            guidance on mold
          </a>{" "}
          is a useful reference for safe cleanup.
        </p>
        <h3>A simple seasonal routine</h3>
        <p>
          Spreading a few small tasks across the year keeps a deck and fence in
          shape and stretches the interval between full restaining. None of these
          steps is time-consuming on its own, and together they prevent the
          gradual neglect that forces an expensive strip-and-redo.
        </p>
        <ol>
          <li>
            <strong>Spring</strong> — give the structure a gentle wash, clear
            debris from gaps between boards, and inspect for winter damage,
            popped fasteners, and any new soft spots.
          </li>
          <li>
            <strong>Summer</strong> — run the water-bead test in high-traffic
            areas, spot-recoat thin patches, and keep furniture pads and planters
            from trapping moisture against the wood.
          </li>
          <li>
            <strong>Fall</strong> — sweep leaves promptly so tannins and damp
            debris do not stain or feed mildew, and tackle any full maintenance
            recoat while temperatures are still in the staining range.
          </li>
          <li>
            <strong>Winter</strong> — shovel snow with a plastic-edged tool along
            the grain, avoid metal blades and rock salt, and keep ice from
            standing on the surface.
          </li>
        </ol>
        <Callout variant="tip" title="Keep a record">
          Note the exact product, color, and date each time you stain. Matching
          the same penetrating stain at the next recoat avoids stripping and keeps
          maintenance fast, cheap, and consistent year after year.
        </Callout>
      </Section>
    </PillarPage>
  );
}
