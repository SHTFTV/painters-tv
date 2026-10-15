import { Link } from "wouter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Globe, Star, Clock, CheckCircle2 } from "lucide-react";
import type { Listing } from "@workspace/api-client-react";

export function ListingCard({ listing, showCity = false }: { listing: Listing, showCity?: boolean }) {
  return (
    <Card className="hover-elevate transition-all border-border overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-4 bg-muted/20 border-b">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground line-clamp-1">{listing.businessName}</h3>
            {listing.tagline && (
              <p className="text-muted-foreground text-sm italic mt-1 line-clamp-1">"{listing.tagline}"</p>
            )}
            
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-sm ml-1">{listing.rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-xs ml-1">({listing.reviewCount})</span>
              </div>
              {listing.verified && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800 gap-1 pl-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </Badge>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold text-lg shadow-sm border border-primary/20">
              #{listing.slotNumber}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 pt-4 flex flex-col">
        <div className="space-y-2 mb-4">
          {showCity && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0 text-primary" />
              <Link href={`/city/${listing.citySlug}`} className="hover:text-primary transition-colors hover:underline">
                {listing.cityName}, {listing.state}
              </Link>
            </div>
          )}
          
          {listing.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 shrink-0 text-primary" />
              <a href={`tel:${listing.phone}`} className="hover:text-primary transition-colors">{listing.phone}</a>
            </div>
          )}
          
          {listing.website && (
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 shrink-0 text-primary" />
              <a href={listing.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors line-clamp-1">{listing.website.replace(/^https?:\/\//, '')}</a>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{listing.yearsInBusiness} years in business</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {listing.licensed && <Badge variant="secondary" className="text-xs">Licensed</Badge>}
            {listing.insured && <Badge variant="secondary" className="text-xs">Insured</Badge>}
            {listing.services.slice(0, 3).map(service => (
              <Badge key={service} variant="outline" className="text-xs border-dashed">{service}</Badge>
            ))}
            {listing.services.length > 3 && (
              <Badge variant="outline" className="text-xs border-dashed">+{listing.services.length - 3}</Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
