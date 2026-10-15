import {Banner} from "@/pages/network-pages";
import type { ReactNode } from "react";
import { Layout } from "@/components/layout/layout";
import { Seo } from "@/components/seo";
import {
  ArticleHero,
  KeyTakeaways,
  TableOfContents,
  FaqSection,
  CtaBlock,
  QuickAnswer,
  RelatedGuides,
  type TocItem,
  type FaqItem,
} from "./article-ui";

interface PillarPageProps {
  slug: string;
  seo: {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    crumb: string;
    image?: string;
    imageAlt?: string;
  };
  quickAnswer: ReactNode;
  takeaways: string[];
  toc: TocItem[];
  faqId: string;
  faqs: FaqItem[];
  cta: { title: string; body: string };
  jsonLd: Record<string, unknown>[];
  children: ReactNode;
}

export function PillarPage({
  slug,
  seo,
  hero,
  quickAnswer,
  takeaways,
  toc,
  faqId,
  faqs,
  cta,
  jsonLd,
  children,
}: PillarPageProps) {
  return (
    <Layout>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image={seo.image}
        imageAlt={seo.imageAlt}
        ogType="article"
        jsonLd={jsonLd}
      />
      <ArticleHero {...hero} /><p className="restore-credit">Painters.tv service guide · Restored September 29, 2026 · Confirm product instructions and project-specific requirements with your contractor.</p>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
          <article className="min-w-0">
            <QuickAnswer>{quickAnswer}</QuickAnswer>
            <KeyTakeaways items={takeaways} />
            {children}
            <FaqSection id={faqId} items={faqs} />
            <RelatedGuides currentSlug={slug} />
            <CtaBlock title="Prepare your project brief" body="Build a clear scope to discuss with a contractor. Directory listings are being restored; this does not confirm local availability." />
          </article>
          <aside className="hidden lg:block order-first lg:order-last">
            <TableOfContents items={toc} />
          </aside>
        </div>
      </div>
      <Banner title="Put the guide to work. Find your city."/>
    </Layout>
  );
}

const ORIGIN = "https://painters.tv";

export interface HowToStep {
  name: string;
  text: string;
}

export function buildServiceJsonLd({
  name,
  description,
  url,
  crumb,
  faqs,
  image,
  headline,
  dateModified = "2026-01-01",
  datePublished = "2025-06-01",
  howTo,
}: {
  name: string;
  description: string;
  url: string;
  crumb: string;
  faqs: FaqItem[];
  image?: string;
  headline?: string;
  dateModified?: string;
  datePublished?: string;
  howTo?: { name: string; steps: HowToStep[] };
}): Record<string, unknown>[] {
  const pageUrl = `${ORIGIN}${url}`;
  const imageUrl = image ? `${ORIGIN}${image}` : `${ORIGIN}/interior.png`;
  const publisher = {
    "@type": "Organization",
    name: "Painters.tv",
    url: ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: `${ORIGIN}/favicon.svg`,
    },
  };

  const docs: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${ORIGIN}/services`,
        },
        { "@type": "ListItem", position: 3, name: crumb, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: headline ?? name,
      description,
      image: imageUrl,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      author: publisher,
      publisher,


      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  if (howTo && howTo.steps.length > 0) {
    docs.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: howTo.name,
      description: `Step-by-step ${name.toLowerCase()} process used by professional contractors.`,
      image: imageUrl,
      step: howTo.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  return docs;
}
