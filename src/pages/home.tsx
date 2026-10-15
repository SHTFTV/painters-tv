import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CityCard } from "@/components/ui/city-card";
import { useGetStats, useListServices, useListFeaturedCities } from "@workspace/api-client-react";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, Search, Star, Shield, TrendingUp, Paintbrush } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Seo } from "@/components/seo";
import { PILLAR_SLUGS } from "@/components/content/service-guides";
import mascot from "@/assets/mascot.webp";

export default function Home() {
  const { data: stats, isLoading: statsLoading } = useGetStats();
  const { data: services, isLoading: servicesLoading } = useListServices();
  const { data: featuredCities, isLoading: citiesLoading } = useListFeaturedCities();

  return (
    <Layout>
      <Seo
        title="Painters.tv — Find Top-Rated, Verified Painters in Your City"
        description="Connect with verified, licensed, and insured painting contractors near you. Browse painters by city, compare quotes, and request free estimates — no middleman fees."
        path="/"
        image="/hero.png"
        imageAlt="Professional painters painting the exterior of a modern home"
      />
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/60 via-background to-background">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy + search */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 py-1 px-3 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 border-secondary/30">
                <Star className="w-3 h-3 mr-2 fill-current" />
                The Trusted Painter Directory
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
                Find Top-Rated Painters in Your City.
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                Connect with verified, licensed, and insured painting contractors.
                No middleman fees. Just direct access to the best professionals near you.
              </p>

              <div className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Enter your city..."
                    className="pl-10 h-14 text-lg rounded-xl shadow-sm border-2 focus-visible:ring-primary"
                  />
                </div>
                <Link href="/cities">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl shadow-sm">
                    <Search className="w-5 h-5 mr-2" />
                    Find Painters
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Licensed &amp; Insured
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500" />
                  Verified Reviews
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  Direct Quotes
                </div>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border aspect-[4/3]">
                <img
                  src="/hero.png"
                  alt="Professional painters in white coveralls painting the exterior of a modern home"
                  title="Verified professional painters at work"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={768}
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-card border border-border rounded-2xl shadow-xl px-4 py-3">
                <img
                  src={mascot}
                  alt="Painters.tv mascot"
                  className="w-12 h-12 object-contain"
                  width={48}
                  height={48}
                />
                <div className="text-left">
                  <p className="text-sm font-bold text-foreground leading-tight">Painters.tv</p>
                  <p className="text-xs text-muted-foreground leading-tight">Verified pros only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            {statsLoading ? (
              Array(4).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col items-center px-4">
                  <Skeleton className="h-10 w-24 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))
            ) : stats ? (
              <>
                <div className="flex flex-col items-center px-4 text-center">
                  <span className="text-3xl font-display font-bold text-foreground mb-1">{stats.totalCities}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Cities Covered</span>
                </div>
                <div className="flex flex-col items-center px-4 text-center">
                  <span className="text-3xl font-display font-bold text-foreground mb-1">{stats.totalListings}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Verified Painters</span>
                </div>
                <div className="flex flex-col items-center px-4 text-center">
                  <span className="text-3xl font-display font-bold text-foreground mb-1">{stats.totalServices}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Service Types</span>
                </div>
                <div className="flex flex-col items-center px-4 text-center">
                  <span className="text-3xl font-display font-bold text-primary mb-1">{stats.availableSlots}</span>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Open Slots</span>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">Featured Markets</h2>
              <p className="text-lg text-muted-foreground">Find top painters in our most active cities.</p>
            </div>
            <Link href="/cities">
              <Button variant="outline" className="hidden sm:flex">View All Cities</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {citiesLoading ? (
              Array(6).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-[220px] rounded-xl" />
              ))
            ) : featuredCities?.slice(0, 6).map(city => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
          
          <div className="mt-8 sm:hidden">
            <Link href="/cities">
              <Button variant="outline" className="w-full">View All Cities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Professional Painting Services</h2>
            <p className="text-lg text-muted-foreground">Whatever your project requires, find contractors specializing in exactly what you need.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesLoading ? (
              Array(8).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-44 rounded-xl" />
              ))
            ) : services?.map(service => {
              const href = PILLAR_SLUGS.includes(service.slug)
                ? `/services/${service.slug}`
                : `/listings?service=${service.slug}`;
              return (
              <Link key={service.id} href={href}>
                <Card className="h-full hover-elevate transition-all border-border cursor-pointer group bg-card overflow-hidden">
                  <div className="relative h-36 bg-muted overflow-hidden">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={`${service.name} service by a professional painting contractor`}
                        title={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10">
                        <Paintbrush className="w-10 h-10 text-primary opacity-50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-semibold text-lg text-white">{service.name}</h3>
                  </div>
                </Card>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section for Painters */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/interior.png')] bg-cover bg-center opacity-20 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-primary-foreground mb-6">Are you a painting professional?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Claim your exclusive slot in your city. Each market has a strict cap on the number of contractors we list, based on population. Once they're gone, they're gone.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/list-your-business">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-bold rounded-xl shadow-lg">
                Claim Your Slot Now
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                View Pricing & Availability
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}