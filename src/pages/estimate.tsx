import { useState } from "react";
import { useSearch, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useListCities, useListServices, useCreateLead } from "@workspace/api-client-react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PaintRoller, Loader2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  citySlug: z.string().optional(),
  serviceSlug: z.string().optional(),
  message: z.string().optional(),
});

export default function Estimate() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialCity = searchParams.get("city") || "";
  
  const { toast } = useToast();
  const [success, setSuccess] = useState(false);
  
  const { data: cities, isLoading: citiesLoading } = useListCities();
  const { data: services, isLoading: servicesLoading } = useListServices();
  const createLeadMutation = useCreateLead();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      citySlug: initialCity,
      serviceSlug: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createLeadMutation.mutate(
      { data: values },
      {
        onSuccess: () => {
          setSuccess(true);
          window.scrollTo(0, 0);
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to submit estimate request. Please try again.",
          });
        }
      }
    );
  }

  if (success) {
    return (
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Request Sent!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for reaching out. A verified painting professional from your area will contact you shortly to provide a free estimate.
          </p>
          <Button size="lg" onClick={() => window.location.href = "/"}>Return Home</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/interior.png')] bg-cover bg-center opacity-20 mix-blend-multiply" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get a Free Estimate</h1>
          <p className="text-lg opacity-90">
            Tell us about your project, and we'll connect you with top-rated painters in your city.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 -mt-10 relative z-20">
        <Card className="border-border shadow-xl">
          <CardContent className="p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="citySlug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City (Optional)</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder={citiesLoading ? "Loading..." : "Select city"} />
                            </SelectTrigger>
                            <SelectContent>
                              {cities?.map(city => (
                                <SelectItem key={city.slug} value={city.slug}>
                                  {city.name}, {city.state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="serviceSlug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed (Optional)</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder={servicesLoading ? "Loading..." : "Select service"} />
                            </SelectTrigger>
                            <SelectContent>
                              {services?.map(service => (
                                <SelectItem key={service.slug} value={service.slug}>
                                  {service.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about what you need painted (e.g., 3 bedrooms, exterior trim, etc.)" 
                          className="min-h-[120px] resize-y"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold mt-4"
                  disabled={createLeadMutation.isPending}
                >
                  {createLeadMutation.isPending ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...</>
                  ) : (
                    <><PaintRoller className="w-5 h-5 mr-2" /> Request Free Estimate</>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
