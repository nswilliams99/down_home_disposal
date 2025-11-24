import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, CheckCircle } from "lucide-react";
import truckImage from "@assets/Down_Home_disposal truck Pic_1764016401259.webp";

export default function ServiceAreas() {
  useEffect(() => {
    const title = "Service Areas & Pickup Schedule | Down Home Disposal";
    const description = "Weekly trash pickup in Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski. See our pickup schedule and service areas.";
    const url = "https://downhomedisposal.com/service-areas";
    
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
    setMetaTag("og:image", `https://downhomedisposal.com${truckImage}`);
  }, []);

  const pickupSchedule = [
    {
      day: "Tuesday",
      areas: ["Franklin (unincorporated areas)", "Thompson's Station"],
    },
    {
      day: "Wednesday",
      areas: ["Spring Hill (unincorporated areas)", "Columbia (unincorporated areas)"],
    },
    {
      day: "Thursday",
      areas: ["Pulaski"],
    },
  ];

  const serviceDetails = [
    "Weekly curbside pickup",
    "96-gallon cart provided",
    "$27/month",
    "No contracts required",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-headline">
            Service Areas & Pickup Days
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subheadline">
            Weekly residential trash pickup throughout Middle Tennessee
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-intro">
            Down Home Disposal provides weekly curbside trash service to homes in the
            unincorporated and rural areas surrounding these Middle Tennessee communities. We do not
            service inside city limits where municipal contracts exist.
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-schedule-headline">
            Pickup Schedule
          </h2>

          <div className="space-y-6 mb-12">
            {pickupSchedule.map((schedule, index) => (
              <Card key={index} data-testid={`card-schedule-${schedule.day.toLowerCase()}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl text-primary">{schedule.day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {schedule.areas.map((area, areaIndex) => (
                      <li
                        key={areaIndex}
                        className="text-lg"
                        data-testid={`text-area-${schedule.day.toLowerCase()}-${areaIndex}`}
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-muted/30" data-testid="card-service-details">
            <CardHeader>
              <CardTitle className="text-2xl">Service Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {serviceDetails.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-lg"
                    data-testid={`text-detail-${index}`}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-headline">
            Don't See Your Town?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-contact-description">
            If you live in a rural area near one of our routes, give us a call. We may be able to
            add you to our schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+19313092245" data-testid="link-contact-phone">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                (931) 309-2245
              </Button>
            </a>
            <a href="mailto:DHJunkRemovalandDemolition@gmail.com" data-testid="link-contact-email">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
