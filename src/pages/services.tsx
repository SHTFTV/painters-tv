import { Link } from "wouter";
import { useListServices } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Seo } from "@/components/seo";
import { PILLAR_SLUGS } from "@/components/content/service-guides";
import { Paintbrush, ArrowRight } from "lucide-react";

export default function Services() {
  const { data: services, isLoading } = useListServices();

  return (
    <Layout>
      <Seo
        title="Painting Services — Interior, Exterior, Epoxy & More"
        description="Explore professional painting services: interior and exterior painting, cabinet refinishing, deck and fence staining, epoxy flooring, pressure washing, and more. Find verified contractors for any project."
        path="/services"
        image="/interior.png"
        imageAlt="Professional painter applying fresh paint to an interior wall"
      />
      <div className="bg-primary/5 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Painting Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive list of painting services. Whether it's a small interior room, 
              a full exterior repaint, or a commercial facility, we have verified contractors ready for the job.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(9).fill(0).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))
          ) : services?.map(service => {
            const href = PILLAR_SLUGS.includes(service.slug)
              ? `/services/${service.slug}`
              : `/listings?service=${service.slug}`;
            return (
            <Link key={service.id} href={href}>
              <Card className="h-full hover-elevate transition-all border-border cursor-pointer group bg-card overflow-hidden flex flex-col">
                {service.imageUrl ? (
                  <div className="h-40 bg-muted relative overflow-hidden">
                    <img 
                      src={service.imageUrl} 
                      alt={`${service.name} performed by a professional painting contractor`} 
                      title={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                ) : (
                  <div className="h-32 bg-primary/10 flex items-center justify-center">
                    <Paintbrush className="w-12 h-12 text-primary opacity-50" />
                  </div>
                )}
                
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold mt-auto">
                    Find Painters <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
