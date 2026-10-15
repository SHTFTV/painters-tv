import { Link } from "wouter";
import { useListPricingTiers } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, ShieldAlert, Target, Users } from "lucide-react";

export default function Pricing() {
  const { data: tiers, isLoading } = useListPricingTiers();

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/commercial.png')] bg-cover bg-center opacity-10 mix-blend-multiply" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none font-bold">
            For Painting Professionals
          </Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Simple, Transparent Pricing.
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            We limit the number of painters in every city based on population to ensure high ROI. 
            Once a city's slots are filled, it's Sold Out.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Population Based</h3>
            <p className="text-muted-foreground">
              Smaller cities have fewer slots. Larger cities have more. Pricing scales fairly with market opportunity.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">High Visibility</h3>
            <p className="text-muted-foreground">
              Because slots are strictly limited, you aren't competing with 50 other painters on page 4 of the results.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">No Hidden Fees</h3>
            <p className="text-muted-foreground">
              One flat monthly rate. No cost-per-lead. No commission on jobs won. Cancel anytime.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-10">Pricing Tiers by Population</h2>
          
          <div className="bg-card border shadow-sm rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-muted/50 p-4 border-b font-semibold text-sm">
              <div className="col-span-1">City Size</div>
              <div className="col-span-1 text-center">Population</div>
              <div className="col-span-1 text-center">Max Slots</div>
              <div className="col-span-1 text-right">Monthly Cost</div>
            </div>
            
            <div className="divide-y">
              {isLoading ? (
                Array(5).fill(0).map((_, i) => (
                  <div key={i} className="grid grid-cols-4 p-4 items-center">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                    <Skeleton className="h-6 w-12 mx-auto" />
                    <Skeleton className="h-6 w-20 ml-auto" />
                  </div>
                ))
              ) : tiers?.map((tier) => (
                <div key={tier.label} className="grid grid-cols-4 p-4 items-center hover:bg-muted/20 transition-colors">
                  <div className="col-span-1 font-medium">{tier.label}</div>
                  <div className="col-span-1 text-center text-muted-foreground">Up to {(tier.populationBase * 2).toLocaleString()}</div>
                  <div className="col-span-1 text-center">
                    <Badge variant="outline" className="font-bold">{tier.slots}</Badge>
                  </div>
                  <div className="col-span-1 text-right font-bold text-lg">${tier.monthlyCost.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/cities">
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-sm">
                Check Your City's Availability
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
