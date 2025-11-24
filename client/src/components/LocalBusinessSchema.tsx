import { useEffect } from "react";

interface LocalBusinessSchemaProps {
  page?: "home" | "service-areas" | "privacy";
}

export function LocalBusinessSchema({ page = "home" }: LocalBusinessSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://downhomedisposal.com/#organization",
      name: "Down Home Disposal",
      description: "Reliable weekly residential trash pickup serving rural Middle Tennessee. Affordable curbside garbage collection with 96-gallon cart included.",
      url: "https://downhomedisposal.com",
      telephone: "+19313092245",
      email: "DHJunkRemovalandDemolition@gmail.com",
      priceRange: "$27/month",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gordonsville",
        addressRegion: "TN",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1784,
        longitude: -86.0144,
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
    };

    const scriptId = "local-business-schema";
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      const tag = document.getElementById(scriptId);
      if (tag) {
        tag.remove();
      }
    };
  }, [page]);

  useEffect(() => {
    const canonicalUrl = `https://downhomedisposal.com${
      page === "service-areas" ? "/service-areas" : page === "privacy" ? "/privacy" : ""
    }`;
    
    let linkTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkTag) {
      linkTag = document.createElement("link");
      linkTag.rel = "canonical";
      document.head.appendChild(linkTag);
    }
    linkTag.href = canonicalUrl;
  }, [page]);

  return null;
}
