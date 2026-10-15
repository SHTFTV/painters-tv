import { useState } from "react";
import { useListCities, getListCitiesQueryKey } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { CityCard } from "@/components/ui/city-card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Map } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

export default function Cities() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  
  const { data: cities, isLoading } = useListCities({ search: debouncedSearch });

  return (
    <Layout>
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Browse Cities
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find top-rated painters in your area, or claim a listing slot for your business. 
              Each city has a strict cap on the number of contractors we list.
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search by city or state..." 
                className="pl-10 h-12 text-base bg-background shadow-sm border-2 focus-visible:ring-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(9).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-[220px] rounded-xl" />
            ))}
          </div>
        ) : cities && cities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-2xl border border-dashed border-border">
            <Map className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No cities found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
