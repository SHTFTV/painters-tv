import { useParams, Link } from "wouter";
import { useGetCity, getGetCityQueryKey } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { ListingCard } from "@/components/ui/listing-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Store, PaintRoller, ChevronRight } from "lucide-react";

export default function CityDetail() {
  const params = useParams();
  const slug = params.slug || "";
  
  const { data: city, isLoading, error } = useGetCity(slug, {
    query: { enabled: !!slug, queryKey: getGetCityQueryKey(slug) },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Skeleton className="h-12 w-64 mb-4" />
          <Skeleton className="h-6 w-96 mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {Array(3).fill(0).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
            <div>
              <Skeleton className="h-80 rounded-xl sticky top-24" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !city) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find the city you're looking for.</p>
          <Link href="/cities">
            <Button>Browse All Cities</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const percentFilled = (city.filledSlots / city.totalSlots) * 100;

  return (
    <Layout>
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium mb-4">
                <Link href="/cities" className="hover:text-foreground transition-colors">Cities</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{city.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3 flex items-center gap-3">
                {city.name}, {city.state}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Browse verified painting contractors serving {city.name} and the surrounding area.
              </p>
            </div>
            
            <div className="flex shrink-0">
              <Link href={`/estimate?city=${city.slug}`}>
                <Button size="lg" className="w-full md:w-auto">
                  <PaintRoller className="w-5 h-5 mr-2" />
                  Get Free Estimates
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content: Listings */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold mb-6">
              {city.listings.length > 0 
                ? `Top Painters in ${city.name}` 
                : `Be the first to list in ${city.name}`}
            </h2>
            
            {city.listings.length > 0 ? (
              <div className="space-y-6">
                {city.listings.map((listing) => (
                  <ListingCard key={listing.id} listing={listing} />
                ))}
              </div>
            ) : (
              <div className="bg-muted/20 border-2 border-dashed border-border rounded-2xl p-12 text-center">
                <Store className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">No painters listed yet</h3>
                <p className="text-muted-foreground mb-6">
                  {city.name} is a wide open market. Claim the #1 slot today and capture all the leads in your area.
                </p>
                <Link href={`/list-your-business?city=${city.slug}`}>
                  <Button size="lg">Claim the #1 Slot in {city.name}</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Sidebar: Availability Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="border-border shadow-sm">
                <div className="bg-primary p-6 rounded-t-lg text-primary-foreground">
                  <h3 className="font-display font-bold text-xl mb-1">Contractor Availability</h3>
                  <p className="text-primary-foreground/80 text-sm">Strict limits based on population.</p>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Population
                      </div>
                      <div className="font-semibold text-lg">{city.population.toLocaleString()}</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-semibold">Slots Filled</span>
                        <div className="text-right">
                          <span className="text-2xl font-bold">{city.filledSlots}</span>
                          <span className="text-muted-foreground"> / {city.totalSlots}</span>
                        </div>
                      </div>
                      <div className="h-3 bg-secondary/20 rounded-full overflow-hidden mb-2">
                        <div 
                          className={`h-full rounded-full ${city.soldOut ? 'bg-destructive' : 'bg-primary'}`} 
                          style={{ width: `${percentFilled}%` }} 
                        />
                      </div>
                      <p className="text-sm text-muted-foreground text-right">
                        {city.availableSlots} {city.availableSlots === 1 ? 'slot' : 'slots'} remaining
                      </p>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg flex justify-between items-center">
                      <span className="font-medium">Price per slot</span>
                      <span className="font-bold text-xl">${city.pricePerSlot.toFixed(2)}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                    </div>
                    
                    <div className="pt-2">
                      {city.soldOut ? (
                        <Button variant="destructive" size="lg" className="w-full font-bold" disabled>
                          SOLD OUT
                        </Button>
                      ) : (
                        <Link href={`/list-your-business?city=${city.slug}`}>
                          <Button size="lg" className="w-full font-bold h-12">
                            Claim a Slot
                          </Button>
                        </Link>
                      )}
                      
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        Cancel anytime. No long-term contracts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
