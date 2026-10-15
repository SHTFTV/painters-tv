import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useListCities, useCreateListing } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Store, Loader2, CheckCircle } from "lucide-react";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  citySlug: z.string().min(1, "Please select a city"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  tagline: z.string().optional(),
  website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  yearsInBusiness: z.coerce.number().min(0).optional(),
});

export default function ListBusiness() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);
  
  const { data: cities, isLoading: citiesLoading } = useListCities();
  const createListingMutation = useCreateListing();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      citySlug: "",
      phone: "",
      email: "",
      tagline: "",
      website: "",
      yearsInBusiness: 1,
    },
  });

  const selectedCitySlug = form.watch("citySlug");
  const selectedCity = cities?.find(c => c.slug === selectedCitySlug);

  function onSubmit(values: z.infer<typeof formSchema>) {
    createListingMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          setSuccess(true);
          window.scrollTo(0, 0);
        },
        onError: (error: any) => {
          if (error.status === 409) {
            toast({
              variant: "destructive",
              title: "City Sold Out",
              description: "Sorry, this city has no more available slots.",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Error",
              description: "Something went wrong. Please try again.",
            });
          }
        }
      }
    );
  }

  if (success) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Application Received!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thanks for applying to claim your slot. Our team has been notified and will
            review your application. To activate your listing, send your first month's
            payment via PayPal.
          </p>

          <div className="bg-muted/40 border rounded-2xl p-8 text-left mb-8">
            <h2 className="text-xl font-display font-bold mb-4">Complete Your Payment</h2>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>
                Open PayPal and send payment to{" "}
                <span className="font-semibold text-foreground">
                  colin@industriyarmymarketing.com
                </span>
                .
              </li>
              <li>
                In the note, include your business name and the city you applied for.
              </li>
              <li>
                Once payment is confirmed, your listing goes live in the directory and
                you start receiving leads.
              </li>
            </ol>
            <a
              href="https://www.paypal.com/myaccount/transfer/homepage/pay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6"
            >
              <Button size="lg" className="font-bold">
                Pay with PayPal
              </Button>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <Link href={`/city/${selectedCitySlug}`}>
              <Button variant="outline" size="lg">View City Directory</Button>
            </Link>
            <Link href="/listings">
              <Button variant="outline" size="lg">View All Listings</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-display font-bold mb-4">Claim Your Slot</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join the most exclusive directory for painting professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader className="border-b bg-muted/20">
                <CardTitle className="text-xl">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    <FormField
                      control={form.control}
                      name="citySlug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base font-semibold">Select Market / City</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <SelectTrigger className="h-12 text-base">
                                <SelectValue placeholder={citiesLoading ? "Loading cities..." : "Select a city"} />
                              </SelectTrigger>
                              <SelectContent>
                                {cities?.map(city => (
                                  <SelectItem 
                                    key={city.slug} 
                                    value={city.slug}
                                    disabled={city.soldOut}
                                  >
                                    {city.name}, {city.state} {city.soldOut ? "(Sold Out)" : `(${city.availableSlots} slots left)`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Painting" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="tagline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tagline (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Quality you can trust" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="contact@acmepainting.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="yearsInBusiness"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Years in Business</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-14 text-lg font-bold"
                      disabled={createListingMutation.isPending || !selectedCitySlug || selectedCity?.soldOut}
                    >
                      {createListingMutation.isPending ? (
                        <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                      ) : (
                        <><Store className="w-5 h-5 mr-2" /> Complete Registration</>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {selectedCity ? (
                <Card className={`border-2 shadow-md ${selectedCity.soldOut ? 'border-destructive' : 'border-primary'}`}>
                  <div className={`p-6 text-white ${selectedCity.soldOut ? 'bg-destructive' : 'bg-primary'}`}>
                    <h3 className="font-display font-bold text-xl mb-1">Market Selection</h3>
                    <p className="opacity-90">{selectedCity.name}, {selectedCity.state}</p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-muted-foreground">Available Slots</span>
                      <span className="font-bold text-lg">{selectedCity.availableSlots} / {selectedCity.totalSlots}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b">
                      <span className="text-muted-foreground">Monthly Cost</span>
                      <span className="font-bold text-2xl">${selectedCity.pricePerSlot.toFixed(2)}</span>
                    </div>

                    {selectedCity.soldOut ? (
                      <div className="bg-destructive/10 text-destructive p-4 rounded-lg font-medium text-center">
                        This city is currently sold out. Please select another market.
                      </div>
                    ) : (
                      <div className="bg-primary/10 text-primary p-4 rounded-lg text-sm text-center">
                        Lock in your slot today. Cancel anytime.
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-dashed bg-muted/20">
                  <CardContent className="p-12 text-center text-muted-foreground">
                    <Store className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select a city to view availability and pricing</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
