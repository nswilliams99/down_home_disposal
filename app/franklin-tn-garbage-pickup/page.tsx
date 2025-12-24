import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Franklin TN Garbage Pickup | Outside City Limits | Down Home Disposal',
  description: 'Weekly garbage pickup for unincorporated Franklin TN areas. $27/month, 96-gallon cart included. Serving Leiper\'s Fork, Arno, College Grove & rural Williamson County.',
  openGraph: {
    title: 'Franklin TN Area Garbage Pickup | Down Home Disposal',
    description: 'Weekly residential garbage pickup for rural Franklin TN. $27/month, cart included, no contracts.',
    url: 'https://www.downhomedisposal.com/franklin-tn-garbage-pickup',
    siteName: 'Down Home Disposal',
    locale: 'en_US',
    type: 'website',
  },
};

export default function FranklinGarbagePickupPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-50 dark:bg-blue-950 border-b border-blue-200 dark:border-blue-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-blue-800 dark:text-blue-200">
            <strong>Inside Franklin city limits?</strong> Trash service is provided by the{' '}
            <a 
              href="https://www.franklintn.gov/government/departments-k-z/sanitation-and-environmental-services"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              City of Franklin Sanitation Department
            </a>{' '}
            at (615) 794-1516.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Franklin TN Area Garbage Pickup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Weekly residential service for unincorporated Williamson County
          </p>
          <a
            href="tel:9313092245"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            data-testid="link-call-hero"
          >
            Call (931) 309-2245
          </a>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg">
              Down Home Disposal provides weekly residential garbage pickup to homes in the rural Franklin TN area. If you're in Leiper's Fork, Arno, College Grove, or other unincorporated parts of Williamson County, you won't have municipal trash service—and that's where we come in.
            </p>
            <p>
              We've served Middle Tennessee families since day one with simple, reliable service: one price, one cart, one pickup day every week. No contracts to sign, no hidden fees to discover later.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Service Details</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">&#10003;</span>
                  <span><strong>Pickup Day:</strong> Tuesday</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">&#10003;</span>
                  <span><strong>Cost:</strong> $27/month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">&#10003;</span>
                  <span><strong>Cart:</strong> 96-gallon included free</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">&#10003;</span>
                  <span><strong>Contract:</strong> None required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Areas We Serve</h2>
              <ul className="space-y-2">
                <li>Leiper's Fork</li>
                <li>Arno</li>
                <li>College Grove</li>
                <li>Unincorporated Williamson County</li>
                <li>Thompson's Station (outside city limits)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">Do you service inside Franklin city limits?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No. Franklin city limits are served by the City of Franklin's municipal contract. We serve homeowners in unincorporated Williamson County surrounding Franklin.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">What areas near Franklin do you serve?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leiper's Fork, Arno, College Grove, and rural areas throughout unincorporated Williamson County. Not sure if you're in our service area? Call us at (931) 309-2245.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">What day is garbage pickup?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tuesday for the Franklin and Williamson County area.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">How do I start service?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Call (931) 309-2245 or email DHJunkRemovalandDemolition@gmail.com. We'll confirm your address is in our service area and schedule your cart delivery. No contracts—cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Garbage Pickup Service?</h2>
          <p className="text-lg mb-6 opacity-90">
            $27/month - 96-gallon cart included - No contracts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9313092245"
              className="inline-block bg-white text-green-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors"
              data-testid="link-call-cta"
            >
              Call (931) 309-2245
            </a>
            <a
              href="mailto:DHJunkRemovalandDemolition@gmail.com"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-green-600 transition-colors"
              data-testid="link-email-cta"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you service inside Franklin city limits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Franklin city limits are served by the City of Franklin's municipal contract. We serve homeowners in unincorporated Williamson County surrounding Franklin."
                }
              },
              {
                "@type": "Question",
                "name": "What areas near Franklin do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Leiper's Fork, Arno, College Grove, and rural areas throughout unincorporated Williamson County."
                }
              },
              {
                "@type": "Question",
                "name": "What day is garbage pickup in the Franklin area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tuesday for the Franklin and Williamson County area."
                }
              },
              {
                "@type": "Question",
                "name": "How do I start garbage service with Down Home Disposal?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call (931) 309-2245 or email DHJunkRemovalandDemolition@gmail.com. No contracts required—cancel anytime."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
