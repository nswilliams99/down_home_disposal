import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, CheckCircle } from "lucide-react"
import { LocalBusinessSchema } from "@/components/local-business-schema"

export const metadata: Metadata = {
  title: "Service Areas | Franklin TN & Middle Tennessee",
  description: "Weekly residential trash pickup serving Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski TN. View our curbside garbage collection schedule by city and pickup day.",
  openGraph: {
    title: "Service Areas | Franklin TN & Middle Tennessee",
    description: "Weekly residential trash pickup serving Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski TN. View our curbside garbage collection schedule by city and pickup day.",
    url: "https://www.downhomedisposal.com/service-areas",
    images: [
      {
        url: "/truck.webp",
        width: 1200,
        height: 630,
        alt: "Down Home Disposal garbage truck serving Middle Tennessee",
      },
    ],
  },
  alternates: {
    canonical: "https://www.downhomedisposal.com/service-areas",
  },
}

export default function ServiceAreas() {
  const pickupSchedule = [
    {
      day: "Tuesday",
      areas: ["Franklin (unincorporated areas)", "Thompson's Station"],
      description:
        "Serving rural Franklin areas including Leiper's Fork, Arno, College Grove, and surrounding unincorporated Williamson County. Also serving Thompson's Station outside city limits.",
    },
    {
      day: "Wednesday",
      areas: ["Spring Hill (unincorporated areas)", "Columbia (unincorporated areas)"],
      description:
        "Residential trash pickup for Spring Hill rural areas and unincorporated Columbia neighborhoods in Maury County. Perfect for homeowners outside municipal service areas.",
    },
    {
      day: "Thursday",
      areas: ["Pulaski"],
      description:
        "Weekly garbage collection for Pulaski and surrounding Giles County rural areas. Reliable curbside service for homes outside city limits.",
    },
  ]

  const serviceDetails = [
    "Weekly curbside pickup",
    "96-gallon cart provided",
    "$27/month",
    "No contracts required",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <LocalBusinessSchema />
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-headline">
            Residential Trash Pickup Service Areas & Schedule
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subheadline">
            Weekly curbside garbage collection throughout Franklin, Spring Hill, Columbia & Middle Tennessee
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-lg text-muted-foreground text-center mb-12" data-testid="text-intro">
            Down Home Disposal provides <strong>weekly residential curbside trash pickup</strong> to homes in the
            unincorporated and rural areas surrounding these Middle Tennessee cities. Our <strong>garbage collection service</strong> does not
            service inside city limits where municipal contracts exist. Perfect for homeowners in rural Franklin TN, Spring Hill, Columbia, Thompson&apos;s Station, and Pulaski areas.
          </p>

          <h2 className="text-3xl font-bold mb-8 text-center" data-testid="text-schedule-headline">
            Weekly Trash Pickup Schedule by City
          </h2>

          <div className="space-y-6 mb-12">
            {pickupSchedule.map((schedule, index) => (
              <Card key={index} data-testid={`card-schedule-${schedule.day.toLowerCase()}`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl text-primary">{schedule.day} Trash Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {schedule.areas.map((area, areaIndex) => (
                      <li
                        key={areaIndex}
                        className="text-lg font-medium"
                        data-testid={`text-area-${schedule.day.toLowerCase()}-${areaIndex}`}
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground">{schedule.description}</p>
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
            Need Trash Pickup in Your Rural Tennessee Area?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-contact-description">
            If you live in a rural area near Franklin TN, Spring Hill, Columbia, Thompson&apos;s Station, or Pulaski and don&apos;t see your neighborhood listed, give us a call. We&apos;re expanding our Middle Tennessee residential trash collection routes and may be able to add your area to our schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+19313092245" data-testid="link-contact-phone">
              <Button size="lg" className="text-lg px-8">
                <Phone className="mr-2 h-5 w-5" />
                Call (931) 309-2245
              </Button>
            </a>
            <a href="mailto:DHJunkRemovalandDemolition@gmail.com" data-testid="link-contact-email">
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
          <p className="mt-6 text-muted-foreground">
            <Link href="/" className="text-primary hover:underline font-medium">
              Learn more about our affordable $27/month residential trash service
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
