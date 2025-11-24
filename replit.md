# Down Home Disposal - Residential Trash Collection Website

## Overview

Down Home Disposal is a 3-page responsive website for a residential trash collection service operating in Middle Tennessee. The application serves as an informational and marketing platform for a local waste management business offering weekly curbside trash pickup at $27/month with a 96-gallon rolling cart included.

The website provides essential business information including service areas (Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski), pickup schedules organized by day of week, pricing details, and contact information. The application emphasizes trust, clarity, and local authenticity through its design and content structure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server. The application follows a component-based architecture with client-side routing handled by Wouter.

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible and customizable UI elements. The design system uses the "new-york" style variant with Tailwind CSS for styling.

**Styling System**: Tailwind CSS with custom configuration supporting:
- CSS custom properties for theming (light/dark mode support via ThemeProvider)
- Extended color palette matching brand requirements (primary blue #2563EB, accent red #DC2626, accent yellow #FBBF24)
- Poppins font family as primary typeface
- Responsive breakpoints with mobile-first approach
- Custom border radius values and shadow utilities

**State Management**: React Query (@tanstack/react-query) for server state management, though currently the application appears to be primarily static with no active API consumption.

**Routing**: Wouter for lightweight client-side routing with three main routes:
- `/` - Home page with hero section, features, and CTAs
- `/service-areas` - Pickup schedule and service area information
- `/privacy` - Terms of service and privacy policy

**Design Rationale**: The choice of a lightweight routing library (Wouter) over React Router reflects the simple, static nature of the site. Using shadcn/ui provides a comprehensive component library while maintaining customizability and code ownership.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js

**Architecture Pattern**: The backend follows a simple server setup with separate development and production entry points:
- `index-dev.ts` - Development server with Vite integration for HMR
- `index-prod.ts` - Production server serving static built files

**Development Server**: In development mode, Vite middleware is integrated into Express to enable Hot Module Replacement (HMR) and on-demand compilation. The server dynamically injects cache-busting parameters into script tags.

**Production Server**: Serves pre-built static assets from the `dist/public` directory with fallback to `index.html` for client-side routing (SPA behavior).

**Storage Layer**: Currently implements an in-memory storage interface (`MemStorage`) with a generic CRUD pattern for users. This appears to be placeholder code as the application doesn't currently require user authentication or data persistence.

**Rationale**: The separation of dev/prod servers allows for optimal developer experience in development while maintaining simple, performant static file serving in production. The in-memory storage suggests the current application is informational-only without backend data requirements.

### Data Storage

**Database Configuration**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless` suggesting Neon database hosting)

**Schema Definition**: Minimal schema defined in `shared/schema.ts`:
- `users` table with id (UUID), username, and password fields
- Zod validation schemas for type safety

**Current State**: While database infrastructure is configured, it appears unused in the current application implementation. The website is primarily static content-driven without user accounts or dynamic data.

**Rationale**: The database setup suggests planned future features (potentially customer accounts, service requests, or admin functionality) but is not actively utilized in the current MVP.

### External Dependencies

**UI and Design**:
- Radix UI - Headless component primitives for accessibility
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library
- class-variance-authority & clsx - Component variant styling
- Google Fonts (Poppins) - Typography

**Forms and Validation**:
- React Hook Form - Form state management
- Zod - Schema validation
- @hookform/resolvers - Integration between React Hook Form and Zod

**Database and ORM**:
- Drizzle ORM - TypeScript ORM for PostgreSQL
- @neondatabase/serverless - Neon PostgreSQL driver
- connect-pg-simple - PostgreSQL session store (currently unused)

**Development Tools**:
- Vite - Build tool and dev server
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer & @replit/vite-plugin-dev-banner - Replit-specific development tooling

**Utilities**:
- date-fns - Date manipulation
- nanoid - Unique ID generation
- embla-carousel-react - Carousel component support (available but not actively used)

**Build and Deployment**:
- esbuild - JavaScript bundler for server code
- PostCSS with Autoprefixer - CSS processing

**Asset Management**: Static assets stored in `attached_assets` directory, including the truck image used in the hero section.

## Recent Changes

### SEO Optimization (November 24, 2025)

Comprehensive SEO improvements implemented to help Down Home Disposal rank for residential trash pickup searches in Middle Tennessee cities:

**Structured Data & Technical SEO**:
- Added LocalBusiness JSON-LD schema with complete service areas, pricing ($27/month), geographic coordinates, opening hours, and service offerings
- Implemented canonical tags on all pages via reusable helper function
- Enhanced hero image alt text with location keywords
- Created `robots.txt` with sitemap reference and crawl directives
- Created `sitemap.xml` with proper page priorities and change frequencies

**Keyword Optimization**:
- Updated page titles with location-specific keywords (e.g., "Residential Trash Pickup Middle Tennessee | Down Home Disposal Franklin TN")
- Enhanced meta descriptions with target keywords and clear CTAs
- Optimized headings (H1, H2) throughout with service and location keywords
- Strategic use of `<strong>` tags for keyword emphasis
- Location-specific content in Service Areas page mentioning neighborhoods (Leiper's Fork, Arno, College Grove) and counties (Williamson, Maury, Giles)

**Content Enhancements**:
- Added comprehensive FAQ component (`FAQ.tsx`) with 8 questions targeting long-tail keywords like "residential trash pickup service areas", "trash cart size", "pickup schedule", etc.
- Expanded Service Areas page with descriptive text for each pickup day/location
- Enhanced CTAs with keyword-rich anchor text instead of generic "click here"
- Added internal linking between pages with descriptive context

**Local SEO**:
- Enhanced NAP (Name, Address, Phone) visibility in footer with complete address including zip code (Gordonsville, Tennessee 38563)
- Complete service area listings in schema: Franklin, Thompson's Station, Spring Hill, Columbia, Pulaski
- Geographic keywords integrated naturally throughout content
- County-level targeting (Williamson County, Maury County, Giles County)

**Target Keywords**: The site is optimized to rank for:
- "residential trash pickup [city] TN" (Franklin, Spring Hill, Columbia, Thompson's Station, Pulaski)
- "trash service Franklin TN", "garbage collection Middle Tennessee"
- "curbside trash pickup rural Tennessee"
- "weekly trash service [city]"
- "$27/month trash pickup Tennessee"

**Components**:
- `LocalBusinessSchema.tsx` - Reusable JSON-LD structured data component
- `FAQ.tsx` - Accordion component with SEO-optimized questions and answers
- All pages include meta tags helper functions for title, description, canonical, and Open Graph tags