import { Link } from "wouter";
import type { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Lightbulb, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import { relatedGuides } from "./service-guides";

export interface TocItem {
  id: string;
  label: string;
}

export function ArticleHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  crumb: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="bg-primary/5 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{crumb}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div
          className={
            image
              ? "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              : ""
          }
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              {eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-5">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          {image && (
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-border aspect-[4/3] lg:aspect-[3/2]">
              <img
                src={image.replace(".png",".webp")}
                alt={imageAlt ?? title}
                title={title}
                className="w-full h-full object-cover"
                width={1024}
                height={683}
                loading="eager"
              />
            </div>
          )}
        </div>
        <p className="guide-credit">Illustrative {crumb.toLowerCase()} imagery from the original Painters.tv library; not a documented client project.</p>
      </div>
    </section>
  );
}

export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <Card className="p-6 md:p-8 bg-secondary/10 border-secondary/30 mb-12">
      <h2 className="text-xl font-display font-bold text-foreground mb-4">
        Key Takeaways
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-foreground/90">
            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="Table of contents" className="lg:sticky lg:top-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
        On this page
      </p>
      <ul className="space-y-2.5 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block pl-4 -ml-px border-l-2 border-transparent text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
        {heading}
      </h2>
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/85 [&_h3]:text-xl [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_strong]:text-foreground [&_strong]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
        {children}
      </div>
    </section>
  );
}

export function Callout({
  variant = "tip",
  title,
  children,
}: {
  variant?: "tip" | "warning";
  title: string;
  children: ReactNode;
}) {
  const isWarning = variant === "warning";
  const Icon = isWarning ? AlertTriangle : Lightbulb;
  return (
    <Card
      className={`p-5 my-6 border-l-4 ${
        isWarning
          ? "border-l-amber-500 bg-amber-500/5"
          : "border-l-primary bg-primary/5"
      }`}
    >
      <div className="flex gap-3">
        <Icon
          className={`w-5 h-5 shrink-0 mt-0.5 ${
            isWarning ? "text-amber-600" : "text-primary"
          }`}
        />
        <div>
          <p className="font-semibold text-foreground mb-1">{title}</p>
          <div className="text-foreground/80 text-base">{children}</div>
        </div>
      </div>
    </Card>
  );
}

export function DataTable({
  caption,
  headers,
  rows,
}: {
  caption?: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm md:text-base">
        {caption && (
          <caption className="text-left text-sm text-muted-foreground p-3 caption-bottom">
            {caption}
          </caption>
        )}
        <thead className="bg-muted">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 font-display font-semibold text-foreground border-b border-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="even:bg-muted/40">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="px-4 py-3 align-top text-foreground/85 border-b border-border last:border-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({
  id,
  items,
}: {
  id: string;
  items: FaqItem[];
}) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-foreground text-base md:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-foreground/80 text-base leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <Card className="p-6 md:p-7 mb-10 border-l-4 border-l-primary bg-primary/5">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-5 h-5 text-primary shrink-0" />
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Quick Answer
        </p>
      </div>
      <div
        data-speakable="true"
        className="text-base md:text-lg leading-relaxed text-foreground/90"
      >
        {children}
      </div>
    </Card>
  );
}

export function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const guides = relatedGuides(currentSlug, 4);
  if (guides.length === 0) return null;
  return (
    <section aria-label="Related guides" className="mb-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-5">
        Related Painting Guides
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {guides.map((g) => (
          <Link key={g.slug} href={`/services/${g.slug}`}>
            <Card className="h-full hover-elevate transition-all border-border cursor-pointer group overflow-hidden flex">
              <div className="w-28 shrink-0 bg-muted overflow-hidden">
                <img
                  src={g.image}
                  alt={`${g.name} guide`}
                  title={g.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 min-w-0">
                <h3 className="font-display font-semibold text-foreground mb-1 flex items-center gap-1">
                  {g.name}
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {g.blurb}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CtaBlock({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <Card className="p-8 md:p-10 bg-primary text-primary-foreground my-12 text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
        {title}
      </h2>
      <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-6 text-lg">
        {body}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="w-full sm:w-auto font-semibold"
        >
          <Link href="/estimate">
            Prepare an enquiry
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full sm:w-auto font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
        >
          <Link href="/cities">Browse Painters by City</Link>
        </Button>
      </div>
    </Card>
  );
}
