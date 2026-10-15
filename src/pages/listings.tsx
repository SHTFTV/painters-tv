import { useState } from "react";
import { Link, useSearch } from "wouter";
import { useListListings, useListCities } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { ListingCard } from "@/components/ui/listing-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Map, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Listings() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const cityParam = searchParams.get("city") || "";
  
  const [citySlug, setCitySlug] = useState(cityParam);
  
  const { data: listings, isLoading: listingsLoading } = useListListings({ citySlug: citySlug || undefined });
  const { data: cities } = useListCities();

  return (
    <Layout>
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Painter Directory
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our national directory of verified painting professionals. 
                Filter by city to find the best contractors near you.
              </p>
            </div>
            
            <div className="flex items-center gap-4 shrink-0 bg-background p-2 rounded-xl border shadow-sm">
              <Filter className="w-5 h-5 text-muted-foreground ml-2" />
              <Select value={citySlug} onValueChange={setCitySlug}>
                <SelectTrigger className="w-[200px] border-0 shadow-none focus:ring-0">
                  <SelectValue placeholder="All Cities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_cities">All Cities</SelectItem>
                  {cities?.map(city => (
                    <SelectItem key={city.slug} value={city.slug}>{city.name}, {city.state}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {listingsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        ) : listings && listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} showCity={true} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-muted/20 rounded-2xl border border-dashed border-border max-w-3xl mx-auto">
            <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No listings found</h3>
            <p className="text-muted-foreground mb-6">
              {citySlug && citySlug !== "all_cities"
                ? "There are no painters listed in this city yet. It's a wide open market!"
                : "No painters found matching your criteria."}
            </p>
            {citySlug && citySlug !== "all_cities" && (
              <Link href={`/list-your-business?city=${citySlug}`}>
                <Button size="lg">Be the First to List</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
