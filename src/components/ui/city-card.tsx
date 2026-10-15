import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Store } from "lucide-react";
import type { City } from "@workspace/api-client-react";

export function CityCard({ city }: { city: City }) {
  const percentFilled = (city.filledSlots / city.totalSlots) * 100;
  
  return (
    <Link href={`/city/${city.slug}`}>
      <Card className="h-full hover-elevate transition-all border-border cursor-pointer flex flex-col group">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{city.name}</h3>
              <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                {city.state}
              </p>
            </div>
            {city.soldOut ? (
              <Badge variant="destructive" className="font-semibold">SOLD OUT</Badge>
            ) : (
              <Badge variant="secondary" className="font-semibold">{city.availableSlots} slots left</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Users className="w-4 h-4" />
                Population
              </span>
              <span className="font-medium">{city.population.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Store className="w-4 h-4" />
                Total Slots
              </span>
              <span className="font-medium">{city.totalSlots}</span>
            </div>
            
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-medium">
                <span>Capacity</span>
                <span>{Math.round(percentFilled)}%</span>
              </div>
              <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${city.soldOut ? 'bg-destructive' : 'bg-primary'}`} 
                  style={{ width: `${percentFilled}%` }} 
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4 border-t bg-muted/30">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm font-medium text-muted-foreground">Listing Price</span>
            <span className="font-bold text-lg">${city.pricePerSlot.toFixed(2)}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
