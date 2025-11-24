import { useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import truckImage from "@assets/Down_Home_disposal truck Pic_1764016401259.webp";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";

export default function Privacy() {
  useEffect(() => {
    const title = "Privacy Policy & Terms of Service | Down Home Disposal Trash Service";
    const description = "Privacy policy, terms of service, and SMS terms for Down Home Disposal residential trash pickup service in Middle Tennessee.";
    const url = "https://downhomedisposal.com/privacy";
    
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

  return (
    <div className="flex flex-col min-h-screen">
      <LocalBusinessSchema page="privacy" />
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-page-headline">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-page-subheadline">
            Down Home Disposal residential trash service commitment to privacy and service
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-section-privacy">
              1. Privacy Policy
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Collection and Use of Personal Data</h3>
            <p className="text-muted-foreground mb-4">
              This Privacy Policy describes our policies and procedures regarding the collection,
              use, and disclosure of your information when you use our services. It also explains
              your privacy rights and how the law protects you.
            </p>
            <p className="text-muted-foreground mb-4">
              We use your personal data to provide and improve our service. By using our service,
              you agree to the collection and use of information in accordance with this Privacy
              Policy.
            </p>
            <p className="text-muted-foreground mb-6">
              Down Home Disposal maintains strict privacy policies, ensuring that the personal
              information of our customers is not sold, shared, rented, released, or traded to third
              parties.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Tracking Technologies and Cookies</h3>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. Examples include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Essential Cookies: Provide core functionality such as navigation</li>
              <li>Functionality Cookies: Store preferences for a personalized experience</li>
              <li>Cookies Policy Acceptance Cookies: Track if users accepted cookie use</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Retention and Deletion of Personal Data</h3>
            <p className="text-muted-foreground mb-6">
              We will retain your personal data only for as long as necessary for the purposes
              outlined in this policy, including complying with legal obligations or resolving
              disputes.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Security of Personal Data</h3>
            <p className="text-muted-foreground mb-6">
              We implement industry-standard measures to protect your personal data, but no method
              of transmission or storage is entirely secure.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h3>
            <p className="text-muted-foreground mb-6">
              We do not knowingly collect data from anyone under 13 years old. If you believe we
              have collected data from a minor, contact us to remove it.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground mb-8">
              We may update this policy periodically. Please check back for the latest version.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12" data-testid="text-section-terms">
              2. Terms and Conditions
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Agreement</h3>
            <p className="text-muted-foreground mb-6">
              By accessing or using our services, you agree to these terms. If you disagree, you may
              not use the services.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Services Provided</h3>
            <p className="text-muted-foreground mb-4">
              Down Home Disposal offers residential waste collection services, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Weekly curbside trash pickup</li>
              <li>96-gallon rolling cart provided</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cancellation</h3>
            <p className="text-muted-foreground mb-6">
              You may cancel services at any time with proper notice. Contact us by phone or email
              to cancel your service.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Liability</h3>
            <p className="text-muted-foreground mb-6">
              Down Home Disposal is not liable for service delays caused by circumstances beyond our
              control (weather, road conditions, vehicle breakdown, holidays) or damage caused by
              improper use of our services or equipment.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Modifications to Services</h3>
            <p className="text-muted-foreground mb-8">
              We reserve the right to modify services or terms. Notice will be provided for
              significant changes.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12" data-testid="text-section-sms">
              3. SMS Terms and Conditions
            </h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Program Description</h3>
            <p className="text-muted-foreground mb-6">
              By opting into our SMS messaging service, you will receive updates about trash pickup
              schedules, service reminders, billing notices, holiday schedule changes, and
              occasional promotional offers.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cancellation of SMS Service</h3>
            <p className="text-muted-foreground mb-6">
              You may cancel SMS services at any time by texting 'STOP' to the number provided. Upon
              sending 'STOP,' you will receive confirmation and no further SMS messages will be
              sent.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Assistance with SMS Services</h3>
            <p className="text-muted-foreground mb-2">Reply 'HELP' for assistance or contact us at:</p>
            <ul className="list-none mb-6 text-muted-foreground space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:DHJunkRemovalandDemolition@gmail.com"
                  className="text-primary hover:underline"
                  data-testid="link-sms-email"
                >
                  DHJunkRemovalandDemolition@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+19313092245"
                  className="text-primary hover:underline"
                  data-testid="link-sms-phone"
                >
                  (931) 309-2245
                </a>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Message and Data Rates</h3>
            <p className="text-muted-foreground mb-6">
              Standard message and data rates may apply. Message frequency varies. Contact your
              wireless carrier for details about your plan.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Privacy</h3>
            <p className="text-muted-foreground mb-6">
              For privacy-related inquiries, refer to our Privacy Policy above.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Opt-In Disclosure</h3>
            <p className="text-muted-foreground mb-6">
              By providing your phone number and signing up for texts, you consent to receive
              service-related text messages (e.g., pickup reminders, billing updates, holiday
              schedules) from Down Home Disposal at the number provided. Consent is not a condition
              of service. Message and data rates may apply. Message frequency varies. Unsubscribe at
              any time by replying STOP. Reply HELP for help.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Modifications</h3>
            <p className="text-muted-foreground mb-12">
              We may update or modify our SMS program and terms at any time. Users will be notified
              of significant changes, and continued use constitutes acceptance of the updated terms.
            </p>
          </article>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-contact-headline">
            Questions About This Policy?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">Contact us:</p>
          <div className="space-y-3">
            <p>
              <a
                href="tel:+19313092245"
                className="text-primary hover:underline inline-flex items-center gap-2 text-lg"
                data-testid="link-contact-phone"
              >
                <Phone className="h-5 w-5" />
                (931) 309-2245
              </a>
            </p>
            <p>
              <a
                href="mailto:DHJunkRemovalandDemolition@gmail.com"
                className="text-primary hover:underline inline-flex items-center gap-2 text-lg break-all"
                data-testid="link-contact-email"
              >
                <Mail className="h-5 w-5" />
                DHJunkRemovalandDemolition@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground" data-testid="text-contact-location">
              Gordonsville, TN
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
