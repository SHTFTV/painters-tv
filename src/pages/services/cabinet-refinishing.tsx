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
  { id: "overview", label: "What Is Cabinet Refinishing" },
  { id: "vs", label: "Refinish vs. Reface vs. Replace" },
  { id: "cost", label: "Cost & ROI" },
  { id: "candidate", label: "Is Your Kitchen a Candidate?" },
  { id: "finishes", label: "Finishes & Products" },
  { id: "colors", label: "Color & Sheen Choices" },
  { id: "specialty", label: "Specialty Finishes" },
  { id: "process", label: "The Professional Spray Process" },
  { id: "prep", label: "Prep & Degreasing" },
  { id: "cure", label: "Drying, Cure & Reassembly" },
  { id: "timeline", label: "Timeline & Living Through It" },
  { id: "hardware", label: "Hardware & Soft-Close Upgrades" },
  { id: "durability", label: "Durability & Longevity" },
  { id: "diy-vs-pro", label: "DIY vs. Hiring a Pro" },
  { id: "hiring", label: "How to Hire a Pro" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "maintenance", label: "Maintenance & Care" },
  { id: "faq", label: "FAQ" },
];

const faqs: FaqItem[] = [
  {
    question: "How much does it cost to refinish kitchen cabinets?",
    answer:
      "Professional cabinet refinishing typically costs $2,000 to $7,000 for an average kitchen, or roughly $50 to $120 per door and drawer front including labor and materials. A small kitchen with 15 to 20 doors may run $1,800 to $3,500, while a large kitchen with an island and 40-plus doors can reach $6,000 to $9,000. That is generally 30 to 50 percent of the cost of refacing and a small fraction of full replacement.",
  },
  {
    question: "Is refinishing cabinets cheaper than replacing them?",
    answer:
      "Yes. Refinishing usually costs 50 to 70 percent less than new custom or semi-custom cabinets. New cabinetry for an average kitchen runs $8,000 to $25,000 or more once you add boxes, installation, countertop disruption, and demolition. Refinishing reuses your existing boxes and doors, so you pay mainly for prep, materials, and skilled spray labor. If your cabinet boxes are structurally sound, refinishing delivers the biggest visual change for the least money.",
  },
  {
    question: "How long does cabinet refinishing take?",
    answer:
      "A professional cabinet refinishing project typically takes 3 to 5 working days on site, though the doors and drawer fronts are often sprayed off site and may add a few days of shop time. The schedule includes one day for removal, masking, and degreasing, one to two days for sanding, priming, and sanding again, and one to two days for finish coats and reassembly. Full cure of the finish continues for two to three weeks after the crew leaves.",
  },
  {
    question: "Can laminate or thermofoil cabinets be refinished?",
    answer:
      "Laminate and thermofoil cabinets can be refinished, but they require specialized bonding primers and extra care because paint does not naturally adhere to their slick, non-porous surfaces. Thermofoil can peel or bubble if the underlying MDF was exposed to heat or moisture, so any delamination must be repaired first. Wood and MDF doors are the easiest and most reliable to refinish. A reputable contractor will test adhesion before quoting laminate or thermofoil work.",
  },
  {
    question: "What kind of paint do professionals use on cabinets?",
    answer:
      "Professionals use hard-curing coatings designed for cabinetry rather than standard wall paint. The most common choices are conversion varnish, catalyzed lacquer, post-catalyzed waterborne enamels, and high-performance acrylic-urethane hybrids. These products cure to a tough, washable, furniture-grade film that resists chipping, grease, and daily abrasion. They are almost always sprayed, not brushed, to achieve the smooth, factory-like finish that homeowners expect from a refinished kitchen.",
  },
  {
    question: "Do refinished cabinets hold up over time?",
    answer:
      "Properly refinished cabinets hold up very well, typically looking great for 8 to 15 years before needing a refresh. Durability depends almost entirely on preparation and the coating used. Thorough degreasing, sanding, a bonding primer, and a catalyzed or urethane topcoat produce a finish that rivals factory cabinetry. Poor prep, by contrast, leads to peeling and chipping within a year. This is why professional, properly cured work outlasts most rushed DIY attempts.",
  },
  {
    question: "Can I still use my kitchen during refinishing?",
    answer:
      "You can usually use your kitchen with some limits during refinishing. Cabinet boxes remain in place while doors and drawers are removed, so countertops and appliances stay accessible, but open shelving and odors from coatings can be disruptive. Expect to keep dishes and food out of the work zone for several days and to avoid placing items back in cabinets until the finish has cured. Many crews mask off the space and ventilate to keep the rest of the home livable.",
  },
  {
    question: "Should cabinets be sprayed or brushed?",
    answer:
      "Cabinets should be sprayed for the smoothest, most durable, factory-like result. Spraying lays down an even film with no brush marks or roller stipple, which is critical on the flat, highly visible surfaces of doors and drawer fronts. Brushing and rolling can work for a budget refresh but almost always shows texture and lap marks under kitchen lighting. Professionals use HVLP or airless sprayers in a controlled, masked environment to control overspray.",
  },
  {
    question: "Will refinishing increase my home value?",
    answer:
      "Yes, refinished cabinets can meaningfully improve home value and marketability because the kitchen is the room buyers scrutinize most. A fresh, modern cabinet finish makes a dated kitchen feel renovated for a small fraction of a remodel, which helps a home photograph better and sell faster. While returns vary by market, a clean, neutral cabinet refinish is widely considered one of the highest-return cosmetic upgrades available to homeowners preparing to sell.",
  },
];

export default function CabinetRefinishing() {
  const path = "/services/cabinet-refinishing";
  return (
    <PillarPage
      slug="cabinet-refinishing"
      seo={{
        title: "Cabinet Refinishing: The Complete 2026 Cost & How-To Guide",
        description:
          "A thorough guide to cabinet refinishing — costs per door, refinish vs. reface vs. replace, finishes and products, the professional spray process, durability, DIY vs. pro, and how to hire a verified cabinet painter.",
        path,
        image: "/cabinet.webp",
        imageAlt:
          "Freshly refinished kitchen cabinets with a smooth, sprayed enamel finish",
      }}
      hero={{
        eyebrow: "Cabinet Refinishing",
        title: "Cabinet Refinishing: The Complete Guide",
        subtitle:
          "Everything you need to know about refinishing kitchen and bathroom cabinets — what it costs, how professionals achieve a factory-smooth sprayed finish, which coatings last, and how to hire a contractor who delivers a durable, beautiful result.",
        crumb: "Cabinet Refinishing",
        image: "/cabinet.webp",
        imageAlt:
          "Freshly refinished kitchen cabinets with a smooth, sprayed enamel finish",
      }}
      quickAnswer={
        <p>
          Cabinet refinishing costs roughly $2,000 to $7,000 for an average
          kitchen, or about $50 to $120 per door and drawer front. It cleans,
          sands, primes, and sprays a durable new finish onto your existing
          cabinet boxes and doors, delivering a near-new look for 50 to 70
          percent less than replacement and lasting 8 to 15 years when done
          professionally.
        </p>
      }
      takeaways={[
        "Cabinet refinishing costs about $2,000–$7,000 per kitchen, or $50–$120 per door, versus $8,000–$25,000+ for replacement.",
        "Refinishing keeps your existing boxes and doors; refacing replaces doors and veneers; replacement swaps everything.",
        "Prep is 90% of the result: thorough degreasing, sanding, and a bonding primer prevent peeling and chipping.",
        "Professionals spray catalyzed or urethane coatings for a smooth, washable, furniture-grade finish, not wall paint.",
        "A properly refinished kitchen lasts 8–15 years and is one of the highest-return cosmetic upgrades before selling.",
      ]}
      toc={toc}
      faqId="faq"
      faqs={faqs}
      cta={{
        title: "Ready to transform your kitchen?",
        body: "Prepare your project scope and confirm credentials and availability directly. Directory listings are being restored.",
      }}
      jsonLd={buildServiceJsonLd({
        name: "Cabinet Refinishing",
        description:
          "Professional kitchen and bathroom cabinet refinishing, including degreasing, sanding, priming, and spraying durable catalyzed or urethane finishes onto existing cabinetry.",
        url: path,
        crumb: "Cabinet Refinishing",
        faqs,
        image: "/cabinet.webp",
        headline:
          "Cabinet Refinishing: The Complete 2026 Cost & How-To Guide",
        howTo: {
          name: "How to Refinish Kitchen Cabinets",
          steps: [
            {
              name: "Remove and label doors and hardware",
              text: "Take down all doors, drawer fronts, and hardware, labeling each piece so it returns to its exact original opening during reassembly.",
            },
            {
              name: "Clean and degrease",
              text: "Wash every surface with a strong degreaser to remove cooking grease, oils, and residue that would otherwise prevent adhesion.",
            },
            {
              name: "Mask and protect",
              text: "Mask countertops, walls, appliances, and floors, and seal off the work area with plastic to contain dust and overspray.",
            },
            {
              name: "Sand and de-gloss",
              text: "Scuff-sand all surfaces to break the existing finish so primer can bond, then vacuum and tack off all dust.",
            },
            {
              name: "Repair and fill",
              text: "Fill dents, gouges, grain, and unwanted hardware holes, then sand the repairs flush and smooth.",
            },
            {
              name: "Prime with a bonding primer",
              text: "Spray a high-adhesion bonding primer suited to the substrate, then sand lightly once it dries to a smooth base.",
            },
            {
              name: "Spray the finish coats",
              text: "Apply two or more thin, even finish coats of a catalyzed or urethane cabinet coating, sanding between coats for a glass-smooth film.",
            },
            {
              name: "Cure and reassemble",
              text: "Allow the coating to cure, then reinstall doors, drawer fronts, and hardware and adjust hinges for proper alignment.",
            },
          ],
        },
      })}
    >
      <Section id="overview" heading="What Is Cabinet Refinishing?">
        <p>
          Cabinet refinishing is the process of stripping or scuff-sanding the
          existing surface of your kitchen or bathroom cabinets and applying a
          fresh, durable new coating — paint, stain, or clear finish — to the
          doors, drawer fronts, and visible box faces you already own. Unlike a
          remodel, refinishing keeps your cabinet boxes and doors in place and
          simply gives them a new skin. It is the single most cost-effective way
          to make a dated kitchen look renovated without the expense, debris, and
          weeks of disruption that come with tearing out cabinetry.
        </p>
        <p>
          The appeal is simple math. The boxes inside most kitchens are
          structurally sound long after the finish on the doors has worn,
          yellowed, or gone out of style. Rather than throwing away functional
          cabinetry, refinishing renews the parts you actually see. The result,
          when done by a skilled crew, is a smooth, factory-like finish that is
          nearly indistinguishable from new cabinets at a fraction of the price.
          For many homeowners, it is the difference between living with a tired
          kitchen and loving the heart of their home again.
        </p>
        <p>
          It helps to think of cabinet refinishing as a specialized branch of{" "}
          <Link href="/services/interior-painting">interior painting</Link>{" "}
          rather than ordinary wall painting. The surfaces are horizontal and
          vertical, highly visible under direct lighting, touched constantly, and
          exposed to grease, water, and daily abuse. That combination demands
          different products, different equipment, and a far more rigorous prep
          routine than rolling a coat of paint on a bedroom wall.
        </p>
        <h3>What a refinishing project typically includes</h3>
        <ul>
          <li>
            <strong>Doors and drawer fronts</strong> — the most visible
            surfaces, usually removed and sprayed separately for a flawless
            finish.
          </li>
          <li>
            <strong>Cabinet box faces and ends</strong> — the visible frame and
            exposed sides that frame each opening.
          </li>
          <li>
            <strong>Trim, valances, and toe kicks</strong> — the smaller details
            that tie the look together.
          </li>
          <li>
            <strong>Hardware updates</strong> — new knobs, pulls, and sometimes
            soft-close hinges installed during reassembly.
          </li>
          <li>
            <strong>Minor repairs</strong> — filling dents, regluing loose
            joints, and patching old hardware holes before finishing.
          </li>
        </ul>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="vs" heading="Refinishing vs. Refacing vs. Replacing">
        <p>
          Homeowners often confuse three very different kitchen projects:
          refinishing, refacing, and replacing. Each renews your cabinets to a
          different degree, at a different price, with a different timeline.
          Choosing the right one starts with an honest look at the condition of
          your existing cabinetry and your budget.
        </p>
        <h3>Refinishing</h3>
        <p>
          Refinishing reuses everything — boxes, doors, and drawer fronts — and
          changes only the finish on top. It is the least expensive and least
          disruptive option, ideal when your cabinets are well-built and you
          simply want a new color or a renewed surface. The layout, door style,
          and storage stay exactly the same; only the look changes.
        </p>
        <h3>Refacing</h3>
        <p>
          Refacing keeps the cabinet boxes but replaces the doors and drawer
          fronts with new ones and covers the visible box faces with a matching
          veneer or laminate. This lets you change the door style, not just the
          color, but costs considerably more than refinishing because you are
          buying new doors and skilled installation. Refacing is a middle path
          for kitchens with sound boxes but worn or dated doors.
        </p>
        <h3>Replacing</h3>
        <p>
          Replacement tears out and discards the old cabinetry and installs
          brand-new boxes and doors. It is the only choice when boxes are water
          damaged, sagging, or poorly laid out, because it lets you change the
          footprint, add storage, and modernize completely. It is also by far the
          most expensive and disruptive, often requiring countertop, plumbing,
          and flooring work.
        </p>
        <DataTable
          caption="How the three cabinet renewal options compare for an average kitchen."
          headers={["Option", "Typical Cost", "Timeline", "Best When"]}
          rows={[
            [
              "Refinishing",
              "$2,000 – $7,000",
              "3 – 5 days",
              "Boxes and doors are sound; you want a new color or finish",
            ],
            [
              "Refacing",
              "$6,000 – $15,000",
              "3 – 5 days",
              "Boxes are sound but you want a new door style",
            ],
            [
              "Replacing",
              "$8,000 – $25,000+",
              "2 – 6 weeks",
              "Boxes are damaged or the layout must change",
            ],
          ]}
        />
        <Callout variant="tip" title="A simple rule of thumb">
          If your cabinet boxes open, close, and sit square without water damage
          or sagging shelves, refinishing almost always gives you the most
          transformation per dollar. Save refacing and replacement for kitchens
          where the boxes themselves are failing or the layout no longer works.
        </Callout>
      </Section>

      <Section id="cost" heading="How Much Does Cabinet Refinishing Cost?">
        <p>
          Cabinet refinishing typically costs <strong>$2,000 to $7,000</strong>{" "}
          for an average kitchen, or roughly <strong>$50 to $120 per door and
          drawer front</strong> including labor and materials. Most professionals
          price by the door-and-drawer count because that number drives the labor
          hours far more than the kitchen's square footage. A compact kitchen
          with 15 to 20 fronts might land near $1,800 to $3,500, while a large
          kitchen with an island and 40 or more fronts can reach $6,000 to
          $9,000.
        </p>
        <p>
          That range is dramatically lower than the cost of new cabinetry, which
          is exactly why refinishing has become so popular. To put it in
          perspective alongside related work, here is how cabinet refinishing
          compares with other common interior projects. For broader pricing
          context across services, see our{" "}
          <Link href="/journal/compare-painting-quotes">pricing overview</Link>.
        </p>
        <DataTable
          caption="Typical cabinet refinishing cost ranges. Actual prices vary by region, coating, condition, and door count."
          headers={["Project", "Typical Cost Range", "Notes"]}
          rows={[
            ["Per door / drawer front", "$50 – $120", "Includes prep and spray"],
            ["Small kitchen (15–20 fronts)", "$1,800 – $3,500", "Boxes plus doors"],
            ["Average kitchen (25–30 fronts)", "$3,000 – $6,000", "Most common project"],
            ["Large kitchen + island (40+ fronts)", "$6,000 – $9,000", "More masking and labor"],
            ["Bathroom vanity", "$400 – $1,200", "Smaller, fewer fronts"],
            ["Glazed or distressed finish", "+15% – 30%", "Added hand technique"],
            ["New hardware install", "$5 – $15 each", "Knobs, pulls, hinges"],
          ]}
        />
        <h3>What drives the price up or down</h3>
        <ul>
          <li>
            <strong>Door and drawer count</strong> — the single biggest factor,
            since each front is prepped, primed, and sprayed individually.
          </li>
          <li>
            <strong>Coating system</strong> — premium catalyzed and urethane
            finishes cost more than basic enamels but last far longer.
          </li>
          <li>
            <strong>Substrate</strong> — laminate and thermofoil need special
            bonding primers and adhesion testing, adding labor.
          </li>
          <li>
            <strong>Color change vs. refresh</strong> — going from dark wood to
            white may require extra primer and coats for full coverage.
          </li>
          <li>
            <strong>Repairs</strong> — filling grain, fixing delamination, and
            patching old hardware holes adds prep time.
          </li>
          <li>
            <strong>Specialty finishes</strong> — glazing, distressing, and
            two-tone schemes require hand work that raises the price.
          </li>
        </ul>
        <h3>Return on investment</h3>
        <p>
          The kitchen is the room buyers judge most harshly, and cabinets
          dominate it visually. A clean, modern refinish makes a dated kitchen
          read as renovated, which helps a home photograph better and sell
          faster. Because the cost is a small fraction of a full remodel, the
          return on a neutral cabinet refinish before selling is among the
          strongest of any cosmetic upgrade. Even if you are staying, the daily
          enjoyment of a kitchen you love is a return that does not show up on a
          spreadsheet.
        </p>
        <Callout variant="warning" title="Beware the suspiciously low bid">
          A quote far below the others usually means thin prep, skipped bonding
          primer, wall paint instead of a cabinet coating, or single-coat
          application. The cost of stripping and redoing a peeling cabinet job
          almost always exceeds what you would have paid to do it right the first
          time.
        </Callout>
      </Section>

      <Section id="candidate" heading="Is Your Kitchen a Good Candidate?">
        <p>
          Not every kitchen is an ideal refinishing candidate, and an honest
          assessment up front saves disappointment later. The single most
          important factor is the material your cabinets are made from, followed
          by the structural condition of the boxes.
        </p>
        <h3>Solid wood and wood veneer</h3>
        <p>
          Solid wood doors and frames are the best candidates for refinishing.
          They sand well, accept primer and topcoats reliably, and can be either
          painted or re-stained. Wood veneer over a plywood or MDF core also
          refinishes beautifully as long as the veneer is intact and not peeling.
          The overwhelming majority of cabinets built before the laminate era are
          wood and refinish with excellent, predictable results.
        </p>
        <h3>MDF and engineered doors</h3>
        <p>
          Medium-density fiberboard doors, common on painted cabinetry, take new
          coatings very well because they are smooth and uniform. The main
          caution is moisture: if MDF has swelled near a sink or dishwasher, the
          damaged area must be sealed or repaired before finishing or the new
          coating will not save it.
        </p>
        <h3>Laminate and thermofoil</h3>
        <p>
          Laminate and thermofoil cabinets can be refinished, but they are the
          trickiest because paint will not stick to their slick, non-porous
          surfaces without a specialized bonding primer. Thermofoil — a thin
          vinyl skin heat-pressed onto MDF — can also peel or bubble, especially
          near ovens and dishwashers. Any lifting or delamination must be
          repaired first, and a reputable contractor will test adhesion on a
          hidden spot before committing.
        </p>
        <Callout variant="warning" title="When refinishing is not the answer">
          If your cabinet boxes are water damaged, swollen, sagging, or the
          layout simply does not work, no finish will fix the underlying problem.
          In those cases the money is better spent on refacing or replacement.
          Refinishing renews the surface — it cannot rebuild a failing box.
        </Callout>
        <h3>Signs you are a strong candidate</h3>
        <ul>
          <li>Boxes are square, solid, and free of water damage.</li>
          <li>Doors and drawers open, close, and align properly.</li>
          <li>The layout and storage already suit how you cook and live.</li>
          <li>You mainly dislike the color, dated stain, or worn finish.</li>
          <li>You want a major visual change on a modest budget.</li>
        </ul>
        <h3>Run a quick five-minute self-assessment</h3>
        <p>
          Before you call a contractor, you can gauge your odds with a short
          hands-on check. Open and close a few doors and the heaviest drawer:
          they should swing freely and sit flush without rubbing. Press a
          fingernail into the box near the sink and dishwasher to feel for soft,
          swollen, or spongy spots that signal water intrusion. Shine a light
          inside to look for black mildew, delaminating veneer, or sagging
          shelves. Finally, run a hand across a door face — heavy gouging, deep
          burns, or peeling laminate means extra repair labor. If the boxes pass
          and only the surfaces look tired, you are an excellent candidate and
          refinishing will deliver the most transformation per dollar. If
          several boxes feel compromised, redirect your budget toward refacing
          or replacement rather than coating over a structural problem.
        </p>
      </Section>

      <Section id="finishes" heading="Finishes and Products That Last">
        <p>
          The coating is what separates a cabinet refinish that still looks great
          in a decade from one that chips within a year. Cabinets are not walls:
          they are touched constantly, splashed with water and grease, and bumped
          by pots, hands, and cleaning. That is why professionals reach for
          hard-curing, furniture-grade coatings rather than ordinary wall paint.
        </p>
        <h3>Conversion varnish</h3>
        <p>
          Conversion varnish is a catalyzed coating prized in cabinet shops for
          its rock-hard, chemical-resistant film. It cures through a chemical
          reaction rather than simple evaporation, producing one of the most
          durable finishes available. It requires careful mixing, strong
          ventilation, and spray application, which makes it a professional-only
          product, but the longevity is outstanding.
        </p>
        <h3>Catalyzed lacquer</h3>
        <p>
          Catalyzed lacquer offers a smooth, fast-drying, durable finish that
          sprays beautifully and builds quickly. It is a long-standing favorite
          for production cabinet finishing. Like conversion varnish, it demands
          proper ventilation and spray equipment and is not a practical DIY
          choice.
        </p>
        <h3>Waterborne and post-catalyzed enamels</h3>
        <p>
          Modern waterborne enamels and post-catalyzed waterborne products have
          transformed cabinet refinishing. They cure to a tough, washable film
          with far lower odor and fewer volatile organic compounds than solvent
          coatings, which matters in an occupied home. According to the U.S.
          Environmental Protection Agency's guidance on{" "}
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            indoor air quality
          </a>
          , reducing exposure to high-VOC finishes improves the air you breathe
          during and after a project, so low-VOC waterborne enamels are an
          excellent choice for kitchens where people cook and gather daily.
        </p>
        <h3>Acrylic-urethane hybrids</h3>
        <p>
          Acrylic-urethane and urethane-modified enamels bridge the gap between
          easy water cleanup and the hardness of solvent finishes. They level
          well, resist blocking (the tendency of two painted surfaces to stick
          when they touch), and harden to a durable, washable surface that holds
          up to kitchen life.
        </p>
        <DataTable
          caption="Common cabinet coating systems compared."
          headers={["Coating", "Durability", "Cleanup", "Best For"]}
          rows={[
            ["Conversion varnish", "Excellent", "Solvent", "Maximum longevity, pro shops"],
            ["Catalyzed lacquer", "Very good", "Solvent", "Smooth, fast production work"],
            ["Post-catalyzed waterborne", "Very good", "Water", "Low odor, occupied homes"],
            ["Acrylic-urethane enamel", "Good–very good", "Water", "Durable, low-VOC refresh"],
            ["Standard wall paint", "Poor", "Water", "Not recommended for cabinets"],
          ]}
        />
        <h3>The primer matters as much as the topcoat</h3>
        <p>
          Homeowners fixate on the topcoat, but the primer is what physically
          bonds the new system to your cabinets, and the right one depends on the
          substrate. Bare or sanded wood usually takes a stain-blocking
          shellac-based or alkyd primer that locks down tannins and knots that
          would otherwise bleed through a white finish. Slick laminate and
          thermofoil demand a dedicated high-adhesion bonding primer engineered
          to grip non-porous surfaces. Previously painted cabinets in sound
          condition often need only a quality scuff-and-bond primer. Skipping the
          primer, or using a generic one, is the single most common reason a
          good-looking topcoat peels within a year — so confirm the exact primer,
          not just the finish, before work begins.
        </p>
        <Callout variant="tip" title="Ask exactly what goes on your cabinets">
          A trustworthy contractor will name the specific primer and topcoat they
          use and explain why. If a bidder says they will use the same paint they
          put on your walls, keep looking — wall paint stays soft, blocks, and
          chips on high-use cabinet surfaces.
        </Callout>
      </Section>

      <Section id="colors" heading="Choosing Color and Sheen">
        <p>
          Color and sheen define how your refinished kitchen feels, and both
          decisions deserve as much care as the coating itself. The good news is
          that cabinet refinishing lets you make a dramatic color change for a
          modest cost, so you can confidently move from dark, dated wood to a
          bright, current palette.
        </p>
        <h3>Popular cabinet colors</h3>
        <p>
          Warm and cool whites remain the most-requested cabinet colors because
          they brighten kitchens, photograph well, and pair with almost any
          countertop. Soft greiges and warm grays read as modern without feeling
          cold. Deep blues and forest greens have surged in popularity for
          islands and lower cabinets, often paired with white or off-white
          uppers in a two-tone scheme. Black and charcoal create a dramatic,
          high-end look in kitchens with good natural light.
        </p>
        <h3>Two-tone and island accents</h3>
        <p>
          A two-tone kitchen — for example, white perimeter cabinets with a
          colored island — adds depth and a designer feel without committing the
          whole room to a bold color. Because refinishing prices by the door, a
          two-tone scheme adds little cost beyond the second color setup, making
          it an easy way to elevate the result.
        </p>
        <h3>Choosing a sheen</h3>
        <p>
          Sheen affects both look and cleanability. On cabinets, the sweet spot
          is usually satin or semi-gloss. Satin offers a soft, refined glow that
          hides minor surface texture while still wiping clean. Semi-gloss is
          more reflective and the easiest to clean, which suits busy family
          kitchens, though it shows surface imperfections more readily, so the
          prep must be flawless. Flat and matte finishes look elegant but are
          harder to keep clean on high-touch doors.
        </p>
        <DataTable
          caption="Recommended cabinet sheens and where each works best."
          headers={["Sheen", "Look", "Best For"]}
          rows={[
            ["Matte", "No shine, modern", "Low-traffic, design-forward kitchens"],
            ["Satin", "Soft, subtle glow", "Most kitchens; balances look and washability"],
            ["Semi-gloss", "Reflective, durable", "High-use family kitchens, easiest cleaning"],
            ["Gloss", "High shine, formal", "Accent pieces, contemporary statement looks"],
          ]}
        />
        <Callout variant="tip" title="Test color on a real door">
          Before committing, have a sample sprayed on a spare door or an
          inconspicuous front and live with it for a few days under your actual
          kitchen lighting. Cabinet colors shift noticeably between daylight and
          warm evening bulbs, and a swatch on a wall never tells the full story.
        </Callout>
      </Section>

      <Section
        id="specialty"
        heading="Specialty Finishes: Glazing, Distressing, and Two-Tone"
      >
        <p>
          A straight painted or stained finish suits most kitchens, but
          specialty techniques let you add depth, character, and a custom look
          that a flat single color cannot. These finishes are hand-applied over
          the base coats, so they add labor — typically{" "}
          <strong>15 to 30 percent</strong> to the project price — but they can
          transform an ordinary refinish into something that reads as bespoke
          cabinetry. Knowing what each technique does helps you decide whether
          the extra cost is worth it.
        </p>
        <h3>Glazing</h3>
        <p>
          Glazing is the most popular specialty technique. After the base color
          cures, a translucent tinted glaze is brushed on and then wiped back,
          leaving pigment in the recessed profiles, corners, and door edges. The
          result emphasizes the architecture of raised-panel and shaker doors
          and lends a warm, aged, furniture-like depth. Glaze is usually a few
          shades darker than the base — for example, a soft brown glaze over an
          off-white perimeter — and is sealed under a clear topcoat so it wipes
          clean like any other finish.
        </p>
        <h3>Distressing and antiquing</h3>
        <p>
          Distressing deliberately simulates years of natural wear by sanding
          through the finish on edges and high-touch points, sometimes adding
          dents, worm holes, or rub-through to bare wood. Paired with a glaze,
          it produces the rustic, reclaimed look common in farmhouse and
          cottage kitchens. Because distressing is intentional and irreversible,
          it should be sampled on a spare door first; it suits character-driven
          homes far more than sleek contemporary ones.
        </p>
        <h3>Two-tone and accent schemes</h3>
        <p>
          Two-tone kitchens pair one color on the perimeter with a contrasting
          color on the island or lower cabinets, and they remain one of the
          strongest design trends in cabinet refinishing. Because refinishing
          prices by the door, a second color adds only a modest setup charge
          rather than doubling the cost. A related option is a contrasting
          interior or open-shelf color that shows when doors are open.
        </p>
        <DataTable
          caption="Specialty cabinet finishes and what to expect."
          headers={["Technique", "Effect", "Added Cost", "Best For"]}
          rows={[
            ["Glazing", "Depth in profiles, aged warmth", "+15% – 25%", "Raised-panel and shaker doors"],
            ["Distressing", "Rustic, worn character", "+20% – 30%", "Farmhouse, cottage kitchens"],
            ["Two-tone", "Contrast and designer depth", "+5% – 15%", "Islands and lower cabinets"],
            ["Metallic / pearl", "Subtle shimmer accent", "+20% – 30%", "Statement islands, vanities"],
          ]}
        />
        <Callout variant="tip" title="Always sample a specialty finish first">
          Glazing and distressing are hand techniques, so the result varies with
          the applicator. Insist on a sample door that shows the exact base
          color, glaze tone, and degree of distressing before the whole kitchen
          is committed. For a sleeker look, a clean two-tone scheme delivers
          custom character with far less risk.
        </Callout>
      </Section>

      <Section id="process" heading="The Professional Spray Process">
        <p>
          A factory-smooth cabinet finish is the product of a disciplined,
          repeatable sequence. Knowing each step helps you judge whether a
          contractor is doing the job right or cutting corners. The steps below
          mirror the process a quality crew follows from start to finish.
        </p>
        <ol>
          <li>
            <strong>Remove and label.</strong> Every door, drawer front, and
            piece of hardware is removed and labeled so each part returns to its
            exact original opening, preserving alignment and fit.
          </li>
          <li>
            <strong>Clean and degrease.</strong> All surfaces are washed with a
            strong degreaser to strip away cooking grease and oils that would
            otherwise ruin adhesion.
          </li>
          <li>
            <strong>Mask and protect.</strong> Countertops, walls, appliances,
            and floors are masked, and the work area is sealed with plastic to
            contain dust and overspray.
          </li>
          <li>
            <strong>Sand and de-gloss.</strong> Surfaces are scuff-sanded to
            break the existing finish so primer can bond, then vacuumed and
            tacked free of dust.
          </li>
          <li>
            <strong>Repair and fill.</strong> Dents, gouges, open grain, and
            unwanted hardware holes are filled and sanded flush.
          </li>
          <li>
            <strong>Prime.</strong> A high-adhesion bonding primer suited to the
            substrate is sprayed on, then sanded lightly to a smooth base.
          </li>
          <li>
            <strong>Spray finish coats.</strong> Two or more thin, even coats of
            a catalyzed or urethane cabinet coating are sprayed, with sanding
            between coats for a glass-smooth film.
          </li>
          <li>
            <strong>Cure and reassemble.</strong> The finish is allowed to cure,
            then doors, drawer fronts, and hardware are reinstalled and hinges
            adjusted for perfect alignment.
          </li>
        </ol>
        <p>
          Most professionals spray the doors and drawer fronts off site or in a
          dedicated, dust-controlled spray area, while the boxes are masked and
          sprayed in place. Spraying — typically with HVLP or fine-finish airless
          equipment — is what produces the seamless, brush-mark-free surface that
          homeowners associate with new cabinetry. Solvent-based coatings require
          respirators and strong ventilation; the U.S. Occupational Safety and
          Health Administration provides guidance on{" "}
          <a
            href="https://www.osha.gov"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            workplace respiratory and chemical safety
          </a>{" "}
          that responsible contractors follow.
        </p>
      </Section>

      <Section id="prep" heading="Prep and Degreasing: 90% of the Result">
        <p>
          If there is one truth in cabinet refinishing, it is that preparation
          determines the outcome. A flawless coating sprayed over poorly prepped
          cabinets will still peel; a modest coating over excellent prep will
          last for years. Kitchen cabinets present a unique prep challenge
          because they are coated in invisible cooking grease that defeats
          adhesion.
        </p>
        <h3>Degreasing comes first</h3>
        <p>
          Before any sanding, every surface must be thoroughly degreased.
          Cooking releases an airborne film of grease that settles on cabinets,
          especially around the stove and range hood. Paint and primer will not
          bond to that film no matter how aggressively you sand. Pros wash with a
          dedicated degreaser, often twice, and let surfaces dry completely
          before moving on.
        </p>
        <h3>Sanding and de-glossing</h3>
        <p>
          Once clean, surfaces are scuff-sanded to dull the existing finish and
          give the primer mechanical grip. The goal is not to strip the cabinets
          bare but to create a uniformly abraded surface. After sanding, every
          trace of dust is vacuumed and wiped with a tack cloth, because dust
          trapped under the finish shows as a gritty texture.
        </p>
        <h3>Filling and repairing</h3>
        <p>
          This is the stage to address dents, gouges, and open wood grain. If you
          are painting over an open-grain wood like oak, grain filler creates the
          smooth, modern surface most homeowners want; skipping it leaves the oak
          texture visible through the paint. Unwanted hardware holes — common
          when switching from knobs to pulls — are filled and sanded flush.
        </p>
        <h3>Masking and containment</h3>
        <p>
          Clean lines and a dust-free home come from careful masking.
          Countertops, backsplashes, appliances, walls, and floors are covered,
          and the work zone is often sealed with plastic sheeting to contain
          sanding dust and spray. Good containment is a hallmark of a
          professional operation.
        </p>
        <Callout variant="warning" title="Grease is the silent killer of finishes">
          The most common cause of peeling cabinet paint is inadequate
          degreasing. A surface can look clean and still carry an invisible
          grease film that prevents bonding. Insist that your contractor degrease
          thoroughly before sanding, not just wipe the doors down.
        </Callout>
      </Section>

      <Section id="cure" heading="Drying, Cure, and Reassembly">
        <p>
          Drying and curing are two different things, and confusing them is a
          common source of disappointment. A coating is dry to the touch within
          hours, but it continues to harden — to cure — for days or weeks
          afterward. Treating freshly refinished cabinets gently during the cure
          window is essential to a finish that lasts.
        </p>
        <h3>Between coats</h3>
        <p>
          Professionals respect the recoat window printed on the product.
          Recoating too soon traps solvents and can cause wrinkling or poor
          adhesion; waiting too long with some products requires re-sanding for
          the next coat to bond. Light sanding between coats knocks down any
          raised grain or dust nibs and ensures each layer fuses to the last.
        </p>
        <h3>Reassembly</h3>
        <p>
          Once the finish has hardened enough to handle, doors and drawer fronts
          are reinstalled in their labeled openings, hardware is mounted, and
          hinges are adjusted so every door hangs straight and closes evenly.
          Felt bumpers are often added to door and drawer edges to keep painted
          surfaces from contacting each other while the finish completes its
          cure.
        </p>
        <h3>The full cure window</h3>
        <p>
          Even after reassembly, most cabinet coatings continue curing for two to
          three weeks. During this period the finish is more vulnerable to
          dents, fingerprints, and blocking. Avoid heavy scrubbing, taping
          anything to the surfaces, or slamming doors until the coating has fully
          hardened. Patience here pays off in a finish that resists daily wear
          for years.
        </p>
        <Callout variant="tip" title="Handle gently for the first month">
          Treat newly refinished cabinets like fresh nail polish for the first
          few weeks: usable, but still hardening. Close doors and drawers
          gently, wipe spills with a soft cloth, and hold off on deep cleaning
          until the finish has fully cured.
        </Callout>
      </Section>

      <Section
        id="timeline"
        heading="Project Timeline and Living Through the Refinish"
      >
        <p>
          Most homeowners underestimate how a cabinet refinish actually unfolds
          day to day. The on-site work is short — typically{" "}
          <strong>3 to 5 working days</strong> — but the doors and drawer fronts
          are often sprayed off site, which can stretch the overall calendar to
          a week or more while coatings build and cure in a controlled shop.
          Knowing the rhythm of the project lets you plan meals, manage the
          mess, and set realistic expectations for when the kitchen returns to
          full use.
        </p>
        <h3>A typical day-by-day schedule</h3>
        <ol>
          <li>
            <strong>Day 1 — removal and masking.</strong> Doors, drawer fronts,
            and hardware come off and are labeled; countertops, walls,
            appliances, and floors are masked and the work zone is sealed.
          </li>
          <li>
            <strong>Day 1–2 — degrease and sand.</strong> Every surface is
            degreased, scuff-sanded, repaired, and tacked clean — the slowest,
            most important stage.
          </li>
          <li>
            <strong>Day 2–3 — prime and sand.</strong> A bonding primer is
            sprayed on boxes and doors, then sanded smooth once dry.
          </li>
          <li>
            <strong>Day 3–4 — finish coats.</strong> Two or more topcoats are
            sprayed with sanding between coats; boxes are done in place and
            doors in the shop or spray area.
          </li>
          <li>
            <strong>Day 4–5 — reassembly.</strong> Cured doors and drawers are
            rehung, hardware is mounted, and hinges are adjusted.
          </li>
        </ol>
        <h3>Living through it</h3>
        <p>
          The cabinet boxes stay in place, so your countertops, sink, and
          appliances remain usable for most of the project, but open shelving
          and coating odors can be disruptive. Expect to empty the cabinets
          being refinished beforehand, set up a temporary coffee-and-microwave
          station outside the work zone, and keep pets and children away from
          masked, freshly sprayed areas. Low-VOC waterborne coatings cut the
          odor dramatically, but ventilation still matters; crews typically run
          fans and seal off the rest of the home.
        </p>
        <h3>What can extend the timeline</h3>
        <ul>
          <li>
            <strong>Extensive repairs</strong> — grain filling, delamination
            fixes, and patching hardware holes add prep days.
          </li>
          <li>
            <strong>Dramatic color changes</strong> — dark-to-white jobs need
            extra primer and coats for full coverage.
          </li>
          <li>
            <strong>Specialty finishes</strong> — glazing and distressing add a
            hand-applied stage and extra dry time.
          </li>
          <li>
            <strong>Humidity and temperature</strong> — damp or cold conditions
            slow cure and stretch recoat windows.
          </li>
        </ul>
        <Callout variant="tip" title="Plan a simple kitchen for a week">
          Even when the on-site work wraps in a few days, treat the finish as
          delicate for the first couple of weeks. Stage easy meals, keep a small
          off-site prep area, and hold off on fully reloading cabinets until your
          contractor confirms the coating has hardened. You can{" "}
          <Link href="/estimate">request an estimate</Link> that spells out the
          exact schedule for your kitchen.
        </Callout>
      </Section>

      <Section
        id="hardware"
        heading="Hardware, Hinges, and Soft-Close Upgrades"
      >
        <p>
          Refinishing is the ideal moment to upgrade the hardware that controls
          how your cabinets look and feel every day. Because the doors and
          drawer fronts are already removed and the old hardware is off, swapping
          knobs, pulls, and hinges adds little labor and can completely change
          the character of a kitchen. New hardware is also one of the most
          affordable upgrades, typically running{" "}
          <strong>$2 to $15 per knob or pull</strong> plus installation.
        </p>
        <h3>Knobs and pulls</h3>
        <p>
          Updating pulls is the fastest way to modernize a dated kitchen. Longer
          bar pulls read as contemporary, while cup pulls and round knobs lean
          traditional. If you are switching from knobs to pulls, the old holes
          must be filled and sanded during prep and new holes drilled with a
          jig for consistent placement — a detail sloppy crews skip, leaving
          visible filled spots or crooked alignment.
        </p>
        <h3>Hinges and soft-close upgrades</h3>
        <p>
          Old exposed or worn hinges can be replaced with concealed
          European-style hinges that hide inside the cabinet and allow precise
          three-way adjustment for perfectly aligned doors. Soft-close hinges
          and drawer slides — which catch the door or drawer in the last few
          inches and ease it shut silently — are among the most appreciated
          upgrades, eliminating slamming and protecting the new finish from
          impact. Retrofit soft-close dampers can also be clipped onto many
          existing hinges for a budget option.
        </p>
        <DataTable
          caption="Common cabinet hardware upgrades and typical costs (parts only)."
          headers={["Upgrade", "Typical Cost Each", "Benefit"]}
          rows={[
            ["Knobs", "$2 – $10", "Quick style refresh"],
            ["Bar / cup pulls", "$3 – $15", "Modern or traditional look"],
            ["Concealed hinges", "$4 – $12", "Adjustable, hidden, aligned doors"],
            ["Soft-close hinges", "$5 – $15", "Silent, slam-free closing"],
            ["Soft-close drawer slides", "$15 – $40 / pair", "Smooth, quiet drawers"],
            ["Clip-on soft-close dampers", "$2 – $6", "Budget retrofit"],
          ]}
        />
        <h3>Coordinating finish and function</h3>
        <p>
          Match the hardware finish to your overall scheme: matte black and
          brushed brass are current favorites, while brushed nickel and
          stainless remain safe, versatile choices. Mixing metals can work when
          done deliberately — for instance, black hinges with brass pulls — but
          consistency reads as more intentional in most kitchens. Order all
          hardware before reassembly day so the crew can install it in one pass
          and adjust every door in a single visit.
        </p>
        <Callout variant="tip" title="Buy one sample pull before committing">
          Hardware feels different in hand than online. Order a single sample of
          your top pull, hold it against a refinished door, and check the screw
          spacing against your existing holes before buying for the whole
          kitchen. Standardizing on one hole spacing saves drilling and filling.
        </Callout>
      </Section>

      <Section id="durability" heading="How Long Do Refinished Cabinets Last?">
        <p>
          Professionally refinished cabinets typically look great for{" "}
          <strong>8 to 15 years</strong> before they need a refresh, and many
          last longer with good care. Durability is almost entirely a function of
          two things: the quality of the prep and the coating used. Cabinets
          prepped thoroughly and finished with a catalyzed or urethane coating
          can rival the durability of factory cabinetry.
        </p>
        <h3>What shortens a finish's life</h3>
        <ul>
          <li>
            <strong>Inadequate degreasing</strong> — the leading cause of early
            peeling.
          </li>
          <li>
            <strong>Skipping a bonding primer</strong> — finish coats lose their
            grip on slick or glossy surfaces.
          </li>
          <li>
            <strong>Wall paint instead of a cabinet coating</strong> — stays
            soft, blocks, and chips.
          </li>
          <li>
            <strong>Rushing the cure</strong> — heavy use before the finish
            hardens leaves marks and chips.
          </li>
          <li>
            <strong>Excess moisture</strong> — standing water near sinks can
            creep into edges over time.
          </li>
        </ul>
        <h3>What extends it</h3>
        <p>
          Gentle daily care, prompt cleanup of spills, good kitchen ventilation,
          and the occasional touch-up of high-wear edges all stretch the life of
          a refinish. Because the boxes do not change, future refreshes are
          faster and cheaper than the first project — often just a scuff-sand and
          a fresh topcoat years down the line.
        </p>
        <h3>Where wear shows up first</h3>
        <p>
          Even an excellent finish does not wear evenly, and knowing the hot
          spots lets you intervene before damage spreads. The first signs of age
          almost always appear at the cabinet faces flanking the dishwasher,
          where steam and heat cycle repeatedly; the door edges around the trash
          pull-out and the most-used drawers, which absorb constant fingertip
          contact; and the rail directly above the range, which collects
          aerosolized grease. The toe-kick and the lower corners near the floor
          take scuffs from shoes and mops. Inspecting these areas every few
          months and addressing a chip or worn edge promptly — with a dab of the
          original topcoat — can add years to the overall finish and postpone a
          full refresh well past the typical decade mark.
        </p>
        <Callout variant="tip" title="Keep leftover finish for touch-ups">
          Ask your contractor to leave a small labeled container of the exact
          topcoat used. A dab on a chipped edge years later keeps your cabinets
          looking refinished far longer and saves a full redo.
        </Callout>
      </Section>

      <Section id="diy-vs-pro" heading="DIY vs. Hiring a Pro">
        <p>
          Cabinet refinishing is one of the most attempted — and most often
          regretted — DIY projects. It looks simple in online videos, but the
          gap between an amateur brush-and-roll job and a sprayed professional
          finish is enormous and immediately visible under kitchen lighting.
        </p>
        <h3>The case for DIY</h3>
        <p>
          A patient, detail-oriented homeowner can refinish cabinets for the cost
          of materials, typically a few hundred dollars in primer, paint, and
          supplies. For a low-use kitchen, a rental, or a budget refresh you can
          live with, a careful brush-and-roll job with a quality cabinet enamel
          can look acceptable. The savings are real if your time is free and your
          expectations are modest.
        </p>
        <h3>The case for hiring a pro</h3>
        <p>
          A professional brings spray equipment, a dust-controlled environment,
          catalyzed coatings you cannot easily buy or safely apply yourself, and
          the experience to degrease, prime, and finish so the result lasts. The
          finish is smoother, the coating is more durable, and the project is
          done in days rather than the weeks a careful DIY job consumes. Spraying
          solvent coatings also involves real respiratory and fire hazards that
          professionals are equipped to manage.
        </p>
        <DataTable
          caption="DIY versus professional cabinet refinishing at a glance."
          headers={["Factor", "DIY", "Professional"]}
          rows={[
            ["Typical cost", "$200 – $600 materials", "$2,000 – $7,000"],
            ["Finish quality", "Brush/roller texture likely", "Sprayed, factory-smooth"],
            ["Durability", "Varies, often lower", "8 – 15 years"],
            ["Time", "1 – 3 weeks of evenings", "3 – 5 days"],
            ["Coatings available", "Off-the-shelf enamels", "Catalyzed / urethane"],
            ["Best for", "Budget refresh, rentals", "Long-lasting, high-use kitchens"],
          ]}
        />
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
      </Section>

      <Section id="hiring" heading="How to Hire a Cabinet Refinishing Pro">
        <p>
          Cabinet refinishing is a specialty within painting, and not every
          general painter does it well. The smooth, durable result you want
          depends on hiring a contractor with the right equipment, products, and
          track record. Use these steps to vet candidates and protect yourself.
        </p>
        <h3>Verify licensing and insurance</h3>
        <p>
          Confirm the contractor is licensed where required and carries liability
          insurance and workers' compensation. A spray operation inside your home
          carries real risk, and proper insurance protects you if something is
          damaged or someone is injured. Reputable pros provide proof without
          hesitation.
        </p>
        <h3>Ask the right questions</h3>
        <ul>
          <li>
            What specific primer and topcoat will you use on my cabinets, and
            why?
          </li>
          <li>Do you spray the doors, and where — on site or in a shop?</li>
          <li>How do you handle degreasing and grain filling?</li>
          <li>How long is the cure, and when can I use the kitchen normally?</li>
          <li>Do you offer a written warranty on adhesion and finish?</li>
          <li>Can I see photos or visit a recent refinishing project?</li>
        </ul>
        <h3>Review portfolios and references</h3>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <h3>Get a detailed written estimate</h3>
        <p>
          A professional estimate spells out the door and drawer count, the
          coating system, the number of coats, repairs included, the color and
          sheen, the timeline, and the warranty. Vague one-line quotes are a red
          flag. A clear scope protects both you and the contractor and makes it
          easy to compare bids fairly.
        </p>
        <h3>Understand the payment schedule and contract terms</h3>
        <p>Prepare a clear scope using our <Link href="/journal/compare-painting-quotes">quote comparison checklist</Link>. Confirm service area, credentials and availability directly with any contractor. Directory listings are being restored.</p>
        <Callout variant="warning" title="Get the warranty in writing">
          The most important promise in cabinet refinishing is that the finish
          will not peel or chip prematurely. Make sure any adhesion and finish
          warranty is written into your contract, including how long it lasts and
          what it covers, before work begins.
        </Callout>
      </Section>

      <Section id="mistakes" heading="Common Mistakes to Avoid">
        <p>
          Most cabinet refinishing failures trace back to a handful of avoidable
          mistakes. Knowing them helps you spot a careless contractor and, if you
          do attempt a DIY job, avoid the pitfalls that ruin a finish.
        </p>
        <ul>
          <li>
            <strong>Skipping degreasing.</strong> Painting over invisible cooking
            grease is the number one cause of peeling. Surfaces must be
            thoroughly degreased before anything else.
          </li>
          <li>
            <strong>No bonding primer.</strong> On glossy, laminate, or
            thermofoil surfaces, finish coats need a high-adhesion primer to grip.
            Skipping it guarantees chipping.
          </li>
          <li>
            <strong>Using wall paint.</strong> Ordinary latex wall paint stays
            soft, blocks, and scuffs on cabinets. A cured cabinet coating is
            essential.
          </li>
          <li>
            <strong>Brushing and rolling everything.</strong> Brush marks and
            roller stipple stand out on flat cabinet faces. Spraying is what
            produces a factory look.
          </li>
          <li>
            <strong>Not filling the grain.</strong> Painting open-grain oak
            without grain filler leaves a textured surface that looks unfinished.
          </li>
          <li>
            <strong>Rushing the cure.</strong> Loading cabinets and slamming
            doors before the finish hardens leaves dents and marks that never
            fully recover.
          </li>
          <li>
            <strong>Poor dust control.</strong> Sanding dust settling on wet
            coats creates a gritty surface. Containment and tack-off matter.
          </li>
          <li>
            <strong>Mislabeling doors.</strong> Failing to label parts during
            removal leads to misaligned doors that never hang quite right on
            reassembly.
          </li>
        </ul>
        <Callout variant="tip" title="Inspect under raking light">
          When the job is done, inspect the cabinets with a flashlight held at a
          low angle across the surface. This raking light reveals drips, dust
          nibs, and texture that flat overhead lighting hides, so you can flag any
          touch-ups before the crew leaves.
        </Callout>
      </Section>

      <Section id="maintenance" heading="Maintenance and Care">
        <p>
          Refinished cabinets are easy to maintain, and a little routine care
          keeps them looking new for years. The same surfaces that take daily
          abuse reward gentle, consistent attention.
        </p>
        <h3>Daily and weekly care</h3>
        <p>
          Wipe spills, splatters, and fingerprints promptly with a soft, damp
          cloth and a mild dish soap solution. Avoid abrasive scrubbers, scouring
          powders, and harsh chemical cleaners, which can dull or scratch the
          finish over time. Dry the surface after cleaning so water does not sit
          on edges and seams.
        </p>
        <h3>Protecting high-wear areas</h3>
        <p>
          The cabinets around the sink, dishwasher, and stove take the most
          abuse from water, steam, and grease. Keep these areas dry, run the
          range hood while cooking to reduce grease buildup, and consider clear
          protective bumpers on edges that rub. Good kitchen ventilation, the
          same factor that protects{" "}
          <Link href="/services/interior-painting">interior paint</Link> and air
          quality, also extends the life of your cabinet finish.
        </p>
        <h3>Touch-ups over time</h3>
        <p>
          Even durable finishes pick up the occasional chip or scuff after years
          of use. A small amount of the original topcoat, applied to a clean,
          lightly sanded spot, blends in easily and prevents minor damage from
          spreading. Addressing chips early keeps the finish intact and delays
          the need for a full refresh.
        </p>
        <p>
          One of the great advantages of refinishing over replacement becomes
          clear years later: because the cabinet boxes never changed, future
          refreshes are dramatically faster and cheaper than the first project.
          When styles shift again or the finish finally shows its age, a
          contractor can scuff-sand the existing coating and spray a fresh
          topcoat in a fraction of the time, since the heavy degreasing,
          repairing, and priming work has already been done. In practice this
          means a kitchen you refinish today can be economically updated to a
          new color a decade from now without ever touching the cabinetry
          itself, making refinishing a genuinely sustainable, long-term approach
          to keeping your kitchen current.
        </p>
        <Callout variant="tip" title="Ventilation is your finish's best friend">
          Running the range hood while you cook does double duty: it improves
          your kitchen's air quality and dramatically reduces the grease film
          that builds up on cabinet surfaces, keeping the finish cleaner and
          extending its life between deep cleanings.
        </Callout>
      </Section>
    </PillarPage>
  );
}
