import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4" data-testid="text-footer-company">
              Down Home Disposal
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Residential Trash Pickup Serving Middle Tennessee
            </p>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span data-testid="text-footer-location">
                Gordonsville, Tennessee 38563
              </span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span data-testid="text-footer-hours">Monday – Friday, 8:00 AM – 5:00 PM</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-home"
              >
                Home
              </Link>
              <Link
                href="/service-areas"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-service-areas"
              >
                Service Areas
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-privacy"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <a
              href="tel:+19313092245"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-2"
              data-testid="link-footer-phone"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              (931) 309-2245
            </a>
            <a
              href="mailto:DHJunkRemovalandDemolition@gmail.com"
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              data-testid="link-footer-email"
            >
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
              DHJunkRemovalandDemolition@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="mb-2" data-testid="text-copyright">
            © {currentYear} Down Home Disposal. All rights reserved.
          </p>
          <p data-testid="text-credit">Website by Trash Joes</p>
        </div>
      </div>
    </footer>
  );
}
