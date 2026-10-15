import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Seo } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Network,
  ShieldCheck,
  Target,
  Workflow,
  ArrowRight,
} from "lucide-react";

const BUILD_URL = "https://buildershaus.com/build";

export default function About() {
  return (
    <Layout>
      <Seo
        title="About Us"
        description="Painters.tv is part of the Buildershaus network, powered by Industry Army Marketing — the leading directory connecting homeowners and builders with verified contractors and renovation companies."
        path="/about"
        image="/commercial.png"
        imageAlt="Industry Army Marketing and Buildershaus network"
      />

      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/commercial.png')] bg-cover bg-center opacity-10 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none font-bold">
            About Painters.tv
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            A Better Way to Find Trusted Contractors.
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Painters.tv is the painting arm of the Buildershaus network, built and
            operated by Industry Army Marketing. Our mission is simple: connect
            homeowners and builders with verified, reputable professionals, and give
            quality contractors the high-visibility exposure they deserve.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Industry Army Marketing */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Industry Army Marketing</h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Industry Army Marketing is a results-driven marketing company focused on
              the trades and home-services industries. We help contractors, painters,
              and renovation companies grow with lead generation, local SEO, and
              high-intent directory placement that puts them in front of customers who
              are ready to hire.
            </p>
            <p>
              Painters.tv is one of the brands we build and operate. Rather than selling
              shared, low-quality leads, we limit how many professionals appear in each
              city so the businesses we partner with get real visibility and a fair
              return on their investment.
            </p>
          </div>
        </section>

        {/* Buildershaus */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
              <Network className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">The Buildershaus Network</h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <a
                href="https://buildershaus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline underline-offset-4"
              >
                Buildershaus.com
              </a>{" "}
              is our flagship directory for contractors and renovation companies of
              every kind. While Painters.tv focuses specifically on painting
              professionals, Buildershaus is the broader home that connects homeowners
              and builders with general contractors, remodelers, and specialty trades
              across the country.
            </p>
            <p>
              Listing with Painters.tv means you are part of the wider Buildershaus
              network. As we grow, partner businesses gain exposure across our family of
              directories and marketing channels, not just a single page.
            </p>
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-muted/40 border rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Workflow className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Our Process</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Want the full picture of how we work, what we do, and how we help trades
            businesses grow? We break down our entire process on the Buildershaus build
            page.
          </p>
          <a href={BUILD_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-bold">
              See How We Build <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </section>

        {/* Why verified */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold">Why It Matters</h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              For homeowners and builders, we take the guesswork out of hiring. Every
              painter you find through Painters.tv is part of a curated, limited
              directory, so you are choosing from professionals who have invested in
              their reputation, not an endless list of unknowns.
            </p>
            <p>
              For painting businesses, we offer something most lead platforms do not: a
              fair, exclusive spot in your market with no per-lead fees and no
              commission on the jobs you win.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center border-t pt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-7 h-7 text-primary" />
            <h2 className="text-3xl font-display font-bold">Get Started</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a painter or you are a painter looking to grow, we are here
            to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/estimate">
              <Button size="lg" className="font-bold w-full sm:w-auto">
                Get a Free Estimate
              </Button>
            </Link>
            <Link href="/list-your-business">
              <Button size="lg" variant="outline" className="font-bold w-full sm:w-auto">
                List Your Business
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
