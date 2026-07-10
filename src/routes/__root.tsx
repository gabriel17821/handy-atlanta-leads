import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Come In Handy Atlanta — Same-Day Junk Removal, Hauling & Cleaning" },
      {
        name: "description",
        content:
          "Atlanta's owner-operated junk removal, hauling, and cleaning service. Same-day pickup for furniture, appliances, yard debris & full property clean-outs. Call Aaron: 470-334-9282.",
      },
      { name: "author", content: "Come In Handy Atlanta" },
      { property: "og:title", content: "Come In Handy Atlanta — Same-Day Junk Removal & Hauling" },
      {
        property: "og:description",
        content:
          "Owner-operated junk removal, hauling, and move-out cleaning in Atlanta. Fast, affordable, and personal. Call Aaron at 470-334-9282.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Nav() {
  const PHONE_HREF = "tel:+14703349282";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-28 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Come In Handy — Hauling & Cleaning"
            width={120}
            height={80}
            className="h-16 sm:h-24 w-auto object-contain"
          />
          <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
            Atlanta
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-navy transition-colors [&.active]:text-brand">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group py-4">
            <Link to="/services" className="flex items-center gap-1 hover:text-navy transition-colors [&.active]:text-brand cursor-pointer">
              Services <ChevronDown className="size-3" />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all[...]
              <div className="py-2 flex flex-col">
                <Link to="/services" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">All Services</Link>
                <Link to="/services" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Junk Removal</Link>
                <Link to="/services" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Property Clean-Outs</Link>
                <Link to="/services" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Pro Cleaning</Link>
              </div>
            </div>
          </div>

          <Link to="/reviews" className="hover:text-navy transition-colors [&.active]:text-brand">
            Reviews
          </Link>
          
          <Link to="/gallery" className="hover:text-navy transition-colors [&.active]:text-brand">
            Projects/Gallery
          </Link>

          {/* Service Areas Dropdown */}
          <div className="relative group py-4">
            <Link to="/service-areas" className="flex items-center gap-1 hover:text-navy transition-colors [&.active]:text-brand cursor-pointer">
              Service Areas <ChevronDown className="size-3" />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all[...]
              <div className="py-2 flex flex-col">
                <Link to="/service-areas" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">All Areas</Link>
                <Link to="/service-areas" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Buckhead</Link>
                <Link to="/service-areas" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Midtown</Link>
                <Link to="/service-areas" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Decatur</Link>
                <Link to="/service-areas" className="px-4 py-2 hover:bg-slate-50 hover:text-brand text-sm transition-colors">Sandy Springs</Link>
              </div>
            </div>
          </div>

          <Link to="/blog" className="hover:text-navy transition-colors [&.active]:text-brand">
            Blog
          </Link>
          
          <Link to="/contact" className="hover:text-navy transition-colors [&.active]:text-brand">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand transition-colors"
        >
          <Phone className="size-4" />
          470-334-9282
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-brand transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 flex flex-col gap-4 font-medium text-slate-600">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand transition-colors">Home</Link>
            
            <div className="flex flex-col gap-2">
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-navy">Services</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Junk Removal</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Property Clean-Outs</Link>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Pro Cleaning</Link>
            </div>

            <Link to="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand transition-colors">Reviews</Link>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand transition-colors">Projects/Gallery</Link>
            
            <div className="flex flex-col gap-2">
              <Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="py-2 font-bold text-navy">Service Areas</Link>
              <Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Buckhead</Link>
              <Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Midtown</Link>
              <Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Decatur</Link>
              <Link to="/service-areas" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm hover:text-brand transition-colors">Sandy Springs</Link>
            </div>

            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand transition-colors">Blog</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-brand transition-colors">Contact</Link>
            
            <a
              href={PHONE_HREF}
              className="mt-4 flex items-center justify-center gap-2 bg-brand text-white px-5 py-3 rounded-xl font-bold hover:bg-navy transition-colors"
            >
              <Phone className="size-4" />
              Call 470-334-9282
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy py-12 text-center text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p>© {currentYear} Come In Handy Atlanta. All rights reserved.</p>
        <p className="mt-2 text-sm">Locally owned and operated by Aaron Johnson.</p>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <div className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <div className="pt-28">
          <Outlet />
        </div>
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
