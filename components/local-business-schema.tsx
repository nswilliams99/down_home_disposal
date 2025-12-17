export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.downhomedisposal.com/#organization",
    name: "Down Home Disposal",
    description: "Reliable weekly residential trash pickup serving rural Middle Tennessee. Affordable curbside garbage collection with 96-gallon cart included.",
    url: "https://www.downhomedisposal.com",
    telephone: "+19313092245",
    email: "DHJunkRemovalandDemolition@gmail.com",
    priceRange: "$27/month",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2027 Kimberly Dr",
      addressLocality: "Mt Juliet",
      addressRegion: "TN",
      postalCode: "37122",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2001,
      longitude: -86.5186,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Franklin",
        addressRegion: "TN",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Thompson's Station",
        addressRegion: "TN",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Spring Hill",
        addressRegion: "TN",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Columbia",
        addressRegion: "TN",
        addressCountry: "US",
      },
      {
        "@type": "City",
        name: "Pulaski",
        addressRegion: "TN",
        addressCountry: "US",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Trash Collection Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Weekly Residential Trash Pickup",
            description: "Weekly curbside trash collection with 96-gallon rolling cart provided",
            serviceType: "Residential Waste Collection",
            provider: {
              "@type": "LocalBusiness",
              name: "Down Home Disposal",
            },
          },
          price: "27.00",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "27.00",
            priceCurrency: "USD",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: "1",
              unitText: "MONTH",
            },
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
