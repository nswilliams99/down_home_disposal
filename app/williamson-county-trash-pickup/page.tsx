import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Williamson County Trash Pickup | Rural & Unincorporated Areas | Down Home Disposal',
  description: 'Weekly trash pickup for unincorporated Williamson County TN. $27/month, 96-gallon cart included. Serving rural areas outside Franklin & Thompson\'s Station city limits.',
  openGraph: {
    title: 'Williamson County TN Trash Pickup | Down Home Disposal',
    description: 'Weekly residential trash service for rural Williamson County. $27/month, cart included, no contracts.',
    url: 'https://www.downhomedisposal.com/williamson-county-trash-pickup',
    siteName: 'Down Home Disposal',
    locale: 'en_US',
    type: 'website',
  },
};

export default function WilliamsonCountyTrashPickupPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-amber-50 dark:bg-amber-950 border-b border-amber-200 dark:border-amber-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-amber-800 dark:text-amber-200">
            <strong>Inside city limits?</strong> Franklin and other incorporated cities have municipal trash contracts. We serve unincorporated Williamson County only.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Williamson County Trash Pickup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Weekly residential service for rural and unincorporated areas
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
              Live in rural Williamson County outside city limits? Down Home Disposal provides weekly curbside trash pickup to homes throughout unincorporated Williamson County—areas that don't have access to municipal garbage service.
            </p>
            <p>
              We serve communities near Franklin, Thompson's Station, and throughout the county's rural areas. If you're not inside city limits and need reliable weekly trash service, we're your local solution.
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
              <h2 className="text-xl font-semibold mb-4">Areas We Serve in Williamson County</h2>
              <ul className="space-y-2">
                <li>Leiper's Fork</li>
                <li>Arno</li>
                <li>College Grove</li>
                <li>Nolensville (unincorporated areas)</li>
                <li>Thompson's Station (outside city limits)</li>
                <li>Rural areas outside Franklin city limits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Why Unincorporated Areas Need Private Trash Service</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Cities like Franklin and Thompson's Station have contracts with municipal waste providers. But if you live outside city limits—in unincorporated Williamson County—those services don't reach you. That's where Down Home Disposal comes in.
            </p>
            <p>
              We specialize in serving rural Middle Tennessee communities that fall outside municipal service boundaries. Same professional service, same reliable weekly pickup, just focused on the areas that need us most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">Do you service inside Franklin or Thompson's Station city limits?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No. We serve unincorporated Williamson County only. Homes inside city limits have municipal trash contracts. Not sure if you're inside city limits? Give us a call and we'll help you figure it out.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">How do I know if I'm in unincorporated Williamson County?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you have a Franklin or Thompson's Station mailing address but don't receive city services (city water, city trash), you're likely in an unincorporated area. Call us at (931) 309-2245 and we'll confirm if your address is in our service area.
              </p>
            </div>

            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-lg font-semibold mb-2">What day is trash pickup in Williamson County?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tuesday for the Franklin and Williamson County area.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold mb-2">How do I start service?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Call (931) 309-2245 or email DHJunkRemovalandDemolition@gmail.com. We'll confirm your address is in our service area, and you can start service as soon as the following week. No contracts required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready for Reliable Trash Pickup?</h2>
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
                "name": "Do you service inside Franklin or Thompson's Station city limits?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We serve unincorporated Williamson County only. Homes inside city limits have municipal trash contracts."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if I'm in unincorporated Williamson County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you have a Franklin or Thompson's Station mailing address but don't receive city services (city water, city trash), you're likely in an unincorporated area. Call (931) 309-2245 to confirm."
                }
              },
              {
                "@type": "Question",
                "name": "What day is trash pickup in Williamson County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tuesday for the Franklin and Williamson County area."
                }
              },
              {
                "@type": "Question",
                "name": "How do I start trash service in Williamson County?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Call (931) 309-2245 or email DHJunkRemovalandDemolition@gmail.com. No contracts required."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
