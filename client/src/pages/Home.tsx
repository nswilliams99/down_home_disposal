import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Calendar, DollarSign, Phone, Mail } from "lucide-react";
import truckImage from "@assets/Down_Home_disposal truck Pic_1764016401259.webp";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  useEffect(() => {
    const title = "Residential Trash Pickup Middle Tennessee | Down Home Disposal Franklin TN";
    const description = "Affordable residential trash pickup service in Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski TN. Weekly curbside garbage collection $27/month with free 96-gallon cart. Serving rural Middle Tennessee.";
    const url = "https://downhomedisposal.com";
    
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    
    setMetaTag("og:title", title);
    setMetaTag("og:description", description);
    setMetaTag("og:url", url);
    setMetaTag("og:type", "website");
    setMetaTag("og:image", `${url}${truckImage}`);
  }, []);

  const features = [
    {
      icon: Trash2,
      title: "96-Gallon Cart Provided",
      description: "We supply a heavy-duty rolling cart at no extra charge",
    },
    {
      icon: Calendar,
      title: "Weekly Pickup",
      description: "Same day every week – reliable service you can count on",
    },
    {
      icon: DollarSign,
      title: "$27/Month",
      description: "Affordable pricing with no contracts or hidden fees",
    },
  ];

  const holidays = [
    "New Year's Day",
    "Independence Day (July 4th)",
    "Thanksgiving Day",
    "Christmas Day",
  ];

  return (
    <div className="flex flex-col">
      <LocalBusinessSchema page="home" />
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${truckImage})`,
        }}
        aria-label="Down Home Disposal truck providing residential trash pickup service in Middle Tennessee"
      >
        <img 
          src={truckImage} 
          alt="Down Home Disposal garbage truck serving Franklin, Thompson's Station, Spring Hill, Columbia and Pulaski Tennessee residential trash pickup routes" 
          className="sr-only"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-hero-headline">
            Residential Trash Pickup Middle Tennessee
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90" data-testid="text-hero-subheadline">
            Reliable weekly curbside garbage collection serving Franklin, Spring Hill, Columbia, Thompson's Station & Pulaski TN
          </p>
          <p className="text-3xl md:text-4xl font-bold mb-8 text-chart-3" data-testid="text-hero-pricing">
            $27/month – Cart Included
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+19313092245" data-testid="link-hero-call">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now (931) 309-2245
              </Button>
            </a>
            <Link href="/service-areas" data-testid="link-hero-service-areas">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/40 hover:text-white"
              >
                View Service Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" data-testid="text-about-headline">
            Your Local Middle Tennessee Trash Service
          </h2>
          <div className="text-lg text-muted-foreground space-y-4">
            <p data-testid="text-about-paragraph-1">
              Down Home Disposal is a locally owned <strong>residential trash collection service</strong> based in
              Gordonsville, Tennessee. We provide dependable <strong>weekly curbside garbage pickup</strong> to families
              throughout Middle Tennessee's rural and unincorporated communities, including Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski.
            </p>
            <p data-testid="text-about-paragraph-2">
              As your neighbors, we take pride in showing up on time, every time. No contracts, no
              hidden fees – just honest, affordable <strong>residential waste management</strong> you can count on. Our service includes a free 96-gallon rolling cart, perfect for weekly household trash collection.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-features-headline">
            Affordable Residential Trash Pickup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="text-center" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-holidays-headline">
            Holiday Schedule
          </h2>
          <p className="text-center text-muted-foreground mb-12" data-testid="text-holidays-subtext">
            We observe the following holidays. If your regular pickup falls on a holiday, service
            will be delayed by one day.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {holidays.map((holiday, index) => (
              <Card key={index} data-testid={`card-holiday-${index}`}>
                <CardHeader className="py-4">
                  <CardTitle className="text-lg text-center">{holiday}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8" data-testid="text-holidays-note">
            Questions about your pickup day? Give us a call!
          </p>
        </div>
      </section>

      <FAQ />

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-cta-headline">
            Ready to Get Started with Residential Trash Pickup?
          </h2>
          <a href="tel:+19313092245" className="inline-block mb-6" data-testid="link-cta-phone">
            <Button
              size="lg"
              variant="secondary"
              className="text-2xl md:text-3xl font-bold px-12 py-8"
            >
              <Phone className="mr-3 h-6 w-6" />
              (931) 309-2245
            </Button>
          </a>
          <div className="space-y-2 text-lg">
            <p>
              <a
                href="mailto:DHJunkRemovalandDemolition@gmail.com"
                className="hover:underline inline-flex items-center gap-2"
                data-testid="link-cta-email"
              >
                <Mail className="h-5 w-5" />
                DHJunkRemovalandDemolition@gmail.com
              </a>
            </p>
            <p data-testid="text-cta-hours">Monday – Friday, 8:00 AM – 5:00 PM</p>
            <p className="text-primary-foreground/90 mt-4" data-testid="text-cta-description">
              Call or email today to start affordable weekly trash service in Franklin, Spring Hill, Columbia, Thompson's Station, or Pulaski TN. No contracts required.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
