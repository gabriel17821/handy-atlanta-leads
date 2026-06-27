import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  Truck,
  Sparkles,
  Trash2,
  Sofa,
  TreePine,
  Refrigerator,
  Hammer,
  Recycle,
  Bed,
  Leaf,
  CircleDot,
  Boxes,
  Home,
  Calendar,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import aaronPortrait from "../assets/aaron.jpg";
import logoImg from "../assets/logo.png";
import garageCleanout from "../assets/garage-cleanout.png";
import yardDebris from "../assets/yard-debris.png";
import furnitureDisposal from "../assets/furniture-disposal.png";
import melissaJob from "../assets/melissa-job.png";
import atlantaHouse from "../assets/atlanta-house.png";
import mattressRemoval from "../assets/mattress-removal.png";
import estateCleanout from "../assets/estate-cleanout.png";
import applianceRemoval from "../assets/appliance-removal.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Come In Handy Atlanta — Same-Day Junk Removal, Hauling & Cleaning" },
      {
        name: "description",
        content:
          "Atlanta's owner-operated junk removal, hauling, and cleaning service. Same-day pickup for furniture, appliances, yard debris & property clean-outs. Call Aaron: 330-412-6268.",
      },
      { property: "og:title", content: "Come In Handy Atlanta — Same-Day Junk Removal & Hauling" },
      {
        property: "og:description",
        content:
          "Owner-operated junk removal and cleaning in Atlanta. Fast, affordable, personal. Call Aaron at 330-412-6268.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "+1 330-412-6268";
const PHONE_HREF = "tel:+13304126268";

const allServices = [
  { icon: Sofa, label: "Furniture disposal" },
  { icon: Refrigerator, label: "Appliance disposal" },
  { icon: Bed, label: "Mattress disposal" },
  { icon: Hammer, label: "Construction debris" },
  { icon: Leaf, label: "Yard debris removal" },
  { icon: TreePine, label: "Christmas tree disposal" },
  { icon: CircleDot, label: "Tire disposal" },
  { icon: Trash2, label: "Same-day trash removal" },
  { icon: Recycle, label: "Recycling pickup" },
  { icon: Boxes, label: "Property clean-out" },
  { icon: Home, label: "Move-in / move-out cleaning" },
  { icon: Sparkles, label: "Regular home cleaning" },
  { icon: Truck, label: "In-state moving" },
  { icon: Leaf, label: "Landscaping waste" },
];

const areas = [
  "Buckhead",
  "Midtown",
  "Decatur",
  "Sandy Springs",
  "Marietta",
  "Smyrna",
  "Brookhaven",
  "East Point",
  "Dunwoody",
  "Roswell",
  "Tucker",
  "College Park",
];

function Index() {
  return (
    <div className="min-h-screen bg-slate-50 font-body text-navy selection:bg-brand/20">
      <Nav />
      <Hero />
      <TrustStrip />
      <Services />
      <Gallery />
      <FullServiceList />
      <HowItWorks />
      <YelpReview />
      <OwnerSpotlight />
      <ServiceArea />
      <QuoteSection />
      <Footer />
      <MobileCallBar />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoImg}
            alt="Come In Handy — Hauling & Cleaning"
            width={72}
            height={48}
            className="h-12 sm:h-16 w-auto object-contain"
          />
          <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
            Atlanta
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-navy transition-colors">Services</a>
          <a href="#gallery" className="hover:text-navy transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-navy transition-colors">Reviews</a>
          <a href="#quote" className="hover:text-navy transition-colors">Get Quote</a>
        </div>
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand transition-colors"
        >
          <Phone className="size-4" />
          330-412-6268
        </a>
      </div>
    </nav>
  );
}

function LightField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
      />
    </div>  );
}

function Hero() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <header id="top" className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Available Today in Atlanta
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-tighter mb-8">
            WE CLEAR
            <br />
            <span className="text-brand italic uppercase">THE JUNK</span>,
            <br />
            YOU KEEP
            <br />
            THE PEACE.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-md mb-10 leading-relaxed">
            Professional hauling, junk removal, and move-out cleaning across
            metro Atlanta. Fast, affordable, and personal service from owner-operator{" "}
            <span className="text-navy font-semibold">Aaron Johnson</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-brand text-white px-8 py-4.5 rounded-2xl font-bold text-base sm:text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30 w-full sm:w-auto"
            >
              <Phone className="size-5" />
              Call Aaron Now: 330-412-6268
            </a>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <img
              src={aaronPortrait}
              alt="Aaron Johnson, owner of Come In Handy Atlanta"
              width={48}
              height={48}
              loading="lazy"
              className="size-12 rounded-full object-cover border-4 border-white shadow-md"
            />
            <div>
              <p className="text-sm font-bold">Owner Operated</p>
              <p className="text-xs text-slate-500">Talk to Aaron directly — no call centers.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Quote Form Card */}
          <div id="hero-quote-form" className="bg-white ring-1 ring-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-slate-100 text-left">
            {/* Decorative background glow */}
            <div className="absolute -top-24 -right-24 size-48 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
            
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 relative z-10"
            >
              <div className="mb-2">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-navy">Get a Free Same-Day Quote</h3>
                <p className="text-xs text-slate-500">Aaron will call you back personally in minutes.</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="size-14 rounded-full bg-brand/10 grid place-items-center mx-auto mb-4 animate-bounce">
                    <Check className="size-6 text-brand" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-navy mb-2">Request Received!</h4>
                  <p className="text-xs text-slate-500 mb-5">
                    Aaron will reach out to you within the hour.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 mb-2 font-medium">Need immediate service?</p>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center justify-center gap-2 bg-brand text-white w-full py-3 rounded-xl font-bold text-sm hover:scale-[1.01] transition-transform"
                    >
                      <Phone className="size-4" />
                      Call/Text Aaron Now
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <LightField label="Name" name="name" placeholder="Your name" required />
                    <LightField label="Phone" name="phone" type="tel" placeholder="(404) 000-0000" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <LightField label="Address or ZIP" name="zip" placeholder="Atlanta, GA" />
                    <div className="grid gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-navy ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all"
                      >
                        <option>Junk removal</option>
                        <option>Property clean-out</option>
                        <option>Furniture / appliance disposal</option>
                        <option>Move-in / out cleaning</option>
                        <option>Yard debris / landscaping waste</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-505">
                      Tell Aaron about the job
                    </label>
                    <textarea
                      name="details"
                      rows={2}
                      placeholder="What needs to go? Roughly how much?"
                      className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-navy placeholder:text-slate-400 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-brand focus:bg-white transition-all min-h-[70px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand text-white py-3.5 rounded-xl font-bold text-base hover:scale-[1.01] transition-transform shadow-lg shadow-brand/20"
                  >
                    Request Free Quote
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Testimonial Quote Bubble */}
          <div className="bg-brand/5 ring-1 ring-brand/10 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col gap-2 border border-brand/5 text-left">
            <div className="flex gap-0.5 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-brand text-brand" />
              ))}
            </div>
            <p className="text-xs sm:text-sm italic text-slate-750 leading-relaxed font-medium">
              “I had a huge project and wasn't sure how I was going to get it done… Aaron came in handy and did just that.”
            </p>
            <div className="flex items-center justify-between text-[11px] border-t border-brand/10 pt-2 mt-1">
              <span className="font-bold text-navy">— Melissa S.</span>
              <span className="text-[10px] uppercase tracking-wider text-brand font-semibold">Yelp</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function TrustStrip() {
  const items = [
    { icon: Clock, label: "Same-Day Availability" },
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: Star, label: "5-Star Yelp Rated" },
    { icon: MapPin, label: "Atlanta Metro" },
    { icon: Truck, label: "Owner-Operated" },
  ];
  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2 text-slate-600">
            <Icon className="size-4 text-brand" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      icon: Truck,
      title: "Junk Removal & Hauling",
      desc: "Furniture, appliances, mattresses, debris. We handle the heavy lifting and proper disposal.",
      items: [
        "Same-day trash & junk pickup",
        "Furniture & appliance removal",
        "Construction debris",
        "Tire & mattress disposal",
      ],
    },
    {
      icon: Boxes,
      title: "Property Clean-Outs",
      desc: "Complete evacuation for landlords, realtors, estates, and tenants moving on.",
      items: [
        "Move-in / move-out clean-outs",
        "Foreclosure & estate cleanouts",
        "Yard & landscaping waste",
        "Christmas tree disposal",
      ],
    },
    {
      icon: Sparkles,
      title: "Pro Cleaning",
      desc: "Deep cleaning that leaves the space spotless and ready for the next chapter.",
      items: [
        "Move-in / move-out cleaning",
        "Regular home cleaning",
        "Post-construction cleanup",
        "Recycling sorting & pickup",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
              What we do
            </p>
            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              HANDY SERVICES
            </h2>
            <p className="text-slate-400 mt-4 max-w-md">
              Everything from a single mattress haul-away to full-scale property cleanouts —
              under one phone number.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-slate-800 border border-slate-800 rounded-3xl overflow-hidden">
          {cards.map(({ icon: Icon, title, desc, items }) => (
            <div
              key={title}
              className="bg-navy p-8 lg:p-10 hover:bg-slate-900 transition-colors group"
            >
              <div className="size-12 bg-brand/15 rounded-xl mb-6 flex items-center justify-center group-hover:bg-brand transition-colors">
                <Icon className="size-6 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
              <ul className="space-y-2 text-sm font-medium text-slate-200">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <Check className="size-4 text-brand mt-0.5 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#quote"
            id="services-cta-quote"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30"
          >
            <ArrowRight className="size-4" />
            Get a Same-Day Quote
          </a>
          <a
            href={PHONE_HREF}
            id="services-cta-call"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" />
            Or Call Aaron: 330-412-6268
          </a>
        </div>
      </div>
    </section>
  );
}

function FullServiceList() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
            If it needs to go, we'll take it
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Everything we haul & handle
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {allServices.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-brand hover:shadow-md transition-all"
            >
              <Icon className="size-5 text-brand shrink-0" />
              <span className="text-sm font-semibold text-navy">{label}</span>
            </div>
          ))}
        </div>
        
        {/* FullServiceList CTA */}
        <div className="mt-12 text-center">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-brand/20"
          >
            <Phone className="size-4" />
            Still not sure? Call Aaron: 330-412-6268
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Call or text Aaron",
      desc: "One quick call to 330-412-6268. Send a photo of what needs to go — get a no-pressure ballpark on the spot.",
    },
    {
      n: "02",
      title: "Lock in a same-day window",
      desc: "We come out today or whenever fits your schedule. Upfront, flat-rate pricing. No surprises.",
    },
    {
      n: "03",
      title: "We haul, you breathe",
      desc: "We do all the lifting, loading, and disposal. You point — we take it from there.",
    },
  ];
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Three steps. Zero hassle.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="relative">
              <div className="font-heading text-7xl font-extrabold text-brand/15 leading-none">
                {n}
              </div>
              <h3 className="font-heading font-bold text-2xl mt-3 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* HowItWorks CTA — natural next step after the 3 steps */}
        <div className="mt-16 bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Available Today
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-3">
            Ready? Start with Step&nbsp;1.
          </h3>
          <p className="text-slate-500 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
            One call is all it takes. Aaron picks up personally and gives you a ballpark on the spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              id="how-it-works-cta-call"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30"
            >
              <Phone className="size-5" />
              Call Aaron Now: 330-412-6268
            </a>
            <a
              href="#quote"
              id="how-it-works-cta-quote"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 text-navy px-8 py-4 rounded-2xl font-bold text-base hover:border-brand hover:text-brand transition-colors"
            >
              <ArrowRight className="size-4" />
              Request a Quote Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    {
      title: "Garage Clean-out",
      desc: "Full removal of old storage boxes, furniture, and junk. Swept clean afterward.",
      category: "Junk Removal",
      image: garageCleanout,
      location: "Buckhead, GA",
    },
    {
      title: "Backyard Debris Cleanup",
      desc: "Clearing piled-up branches, brush, leaves, and organic yard waste.",
      category: "Hauling",
      image: yardDebris,
      location: "Decatur, GA",
    },
    {
      title: "Furniture & Estate Disposal",
      desc: "Clearing out heavy old couches, chairs, and electronic junk from residential spaces.",
      category: "Clean-outs",
      image: furnitureDisposal,
      location: "Sandy Springs, GA",
    },
    {
      title: "Mattress & Bulk Item Removal",
      desc: "Same-day pickup of mattresses, box springs, and oversized bulk items. No hassle.",
      category: "Junk Removal",
      image: mattressRemoval,
      location: "Smyrna, GA",
    },
    {
      title: "Full Estate Clean-out",
      desc: "Complete interior clear-out for estates, foreclosures, and move-out situations.",
      category: "Clean-outs",
      image: estateCleanout,
      location: "Marietta, GA",
    },
    {
      title: "Appliance Disposal",
      desc: "Refrigerators, washers, dryers — we haul every appliance safely and responsibly.",
      category: "Hauling",
      image: applianceRemoval,
      location: "Roswell, GA",
    },
  ];

  // Duplicate the array so the loop is truly seamless — animate exactly -50% of track width
  const loopItems = [...items, ...items];

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <style>{`
        @keyframes gallery-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gallery-track {
          display: flex;
          width: max-content;
          animation: gallery-scroll 48s linear infinite;
          will-change: transform;
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
              Our Work
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Before & After Gallery
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl leading-relaxed">
              Real jobs across metro Atlanta — hover any card to pause.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs text-slate-400 font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            Live scrolling · hover to pause
          </div>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative w-full">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent" />

        <div className="gallery-track" style={{ gap: "1.5rem", padding: "0.5rem 1.5rem 1.5rem" }}>
          {loopItems.map(({ title, desc, category, image, location }, idx) => (
            <div
              key={idx}
              style={{ width: "360px", flexShrink: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200/70 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={image}
                  alt={`${title} — Before and After`}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                  loading="lazy"
                />
                {/* Dark gradient bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Category badge — top left */}
                <span className="absolute top-3 left-3 bg-navy/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  {category}
                </span>
                {/* Location pin — top right */}
                <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-navy text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                  <MapPin className="size-3 text-brand" />
                  {location}
                </span>
                {/* Before / After labels — bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between pointer-events-none">
                  <span className="bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    Before
                  </span>
                  <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-base text-navy mb-1">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery CTA */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-10">
        <div>
          <p className="font-heading font-extrabold text-xl sm:text-2xl text-navy">Liked what you see?</p>
          <p className="text-slate-500 text-sm mt-1">Book a same-day pickup — Aaron handles every job personally.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={PHONE_HREF}
            id="gallery-cta-call"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3.5 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-brand/25"
          >
            <Phone className="size-4" />
            Call Aaron Now
          </a>
          <a
            href="#quote"
            id="gallery-cta-quote"
            className="inline-flex items-center gap-2 border border-slate-200 text-navy px-6 py-3.5 rounded-2xl font-bold hover:border-brand hover:text-brand transition-colors"
          >
            <ArrowRight className="size-4" />
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function YelpReview() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — review content */}
          <div>
            <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
              Straight from Yelp
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mb-4">
              What Melissa said about her project
            </h2>
            <a
              href="https://m.yelp.com/biz/come-in-handy-atlanta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:scale-[1.02] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Verify on Yelp.com
              <ArrowUpRight className="size-3.5" />
            </a>

            {/* Review card */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-6">
              <div className="p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-gradient-to-br from-brand to-red-500 text-white grid place-items-center font-bold text-lg shrink-0">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <p className="font-bold text-navy">Melissa S.</p>
                      <span className="text-xs text-slate-400">17 days ago</span>
                    </div>
                    <div className="flex gap-0.5 text-brand mt-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-brand" />
                      ))}
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[15px]">
                      “Come in Handy did just that. I had a huge project and I wasn’t sure
                      how I was going to get it done. I called a few companies but either
                      they couldn’t fit me in or the quotes were ridiculous. Aaron picked
                      up himself, walked me through everything, and his crew handled the
                      whole job same day. Highly recommend.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Owner reply */}
              <div className="bg-slate-50 border-t border-slate-200 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <img
                    src={aaronPortrait}
                    alt="Aaron Johnson"
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-12 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-navy">Aaron J.</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                        Business Owner
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[15px] mt-3 italic">
                      “That truly means a lot, and we greatly appreciate you choosing us,
                      as well as your awesome review. Thank you so much!”
                    </p>
                    <p className="mt-3 text-sm font-semibold text-slate-500">
                      — Aaron Johnson, Come In Handy (Owner Operator)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA call button */}
            <a
              href={PHONE_HREF}
              id="yelp-section-cta"
              className="inline-flex items-center gap-3 bg-brand text-white px-7 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30"
            >
              <Phone className="size-5" />
              Call Aaron Now: 330-412-6268
            </a>
          </div>

          {/* RIGHT — house image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={atlantaHouse}
                alt="Atlanta home served by Come In Handy"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-brand/10 grid place-items-center shrink-0">
                    <Home className="size-6 text-brand" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">Serving metro Atlanta homes</p>
                    <p className="text-xs text-slate-500 mt-0.5">Same-day junk removal & cleaning — owner on every job</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brand text-brand" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-1">5.0 on Yelp</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function OwnerSpotlight() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <img
            src={aaronPortrait}
            alt="Aaron Johnson, owner-operator of Come In Handy Atlanta"
            width={512}
            height={512}
            loading="lazy"
            className="w-full max-w-sm mx-auto aspect-square object-cover rounded-3xl shadow-xl"
          />
        </div>
        <div className="lg:col-span-3">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
            Meet the owner
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight mb-6">
            Hi, I'm Aaron.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I started Come In Handy because Atlanta deserved a junk removal and
            cleaning company you could actually count on. When you call, you get
            <span className="text-navy font-semibold"> me</span> — not a call
            center, not a quote bot. I show up, I do the work right, and I treat
            your home like it's my own.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Whether it's one couch or a full property clean-out, you'll get a
            straight price and same-day service whenever I can swing it.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-2xl font-bold hover:bg-brand transition-colors"
            >
              <Phone className="size-4" />
              Call Aaron: 330-412-6268
            </a>
            <span className="font-heading italic text-2xl text-slate-400">— Aaron J.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="size-4 inline mr-1 -mt-0.5" />
            Service area
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
            Serving all of metro Atlanta
          </h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">
            Not sure if we cover your area? Just call — if it's in the metro, we'll be there.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {areas.map((a) => (
            <span
              key={a}
              className="bg-white border border-slate-200 text-navy text-sm font-semibold px-4 py-2 rounded-full"
            >
              {a}
            </span>
          ))}
        </div>

        {/* ServiceArea CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-5">
            Your city not listed? Give us a call — if it's reachable, we're there.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PHONE_HREF}
              id="service-area-cta-call"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white px-7 py-3.5 rounded-2xl font-bold hover:bg-brand transition-colors shadow-md"
            >
              <Phone className="size-4" />
              Call Aaron: 330-412-6268
            </a>
            <a
              href="#quote"
              id="service-area-cta-quote"
              className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white text-navy px-7 py-3.5 rounded-2xl font-bold hover:border-brand hover:text-brand transition-colors shadow-sm"
            >
              <ArrowRight className="size-4" />
              Request a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="quote" className="py-20 sm:py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <p className="text-brand text-xs font-bold uppercase tracking-widest mb-3">
            Get a free quote
          </p>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
            Ready to reclaim your space?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
            Send your details and Aaron will call you back personally — usually
            within the hour. Or just call now for same-day priority service.
          </p>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-brand text-white px-6 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30 mb-10"
          >
            <Phone className="size-5" />
            330-412-6268
          </a>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-center gap-3">
              <Clock className="size-5 text-brand shrink-0" />
              <span>Mon“Sat: 8:00 AM “ 7:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="size-5 text-brand shrink-0" />
              <span>Same-day appointments available</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-5 text-brand shrink-0" />
              <span>Licensed, insured, owner-operated</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="bg-slate-900/60 ring-1 ring-slate-800 rounded-3xl p-7 sm:p-9"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="size-16 rounded-full bg-brand/20 grid place-items-center mx-auto mb-6">
                <Check className="size-8 text-brand" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Thanks! Aaron will reach out shortly.</h3>
              <p className="text-slate-400 mb-6">
                For faster service, call directly:
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-2xl font-bold"
              >
                <Phone className="size-4" />
                330-412-6268
              </a>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Phone" name="phone" type="tel" placeholder="(404) 000-0000" required />
              </div>
              <Field label="Address or ZIP" name="zip" placeholder="Atlanta, GA" />
              <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Service needed
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl bg-slate-800/80 px-4 py-3 text-sm text-white ring-1 ring-slate-700 focus:outline-none focus:ring-brand"
                >
                  <option>Junk removal</option>
                  <option>Property clean-out</option>
                  <option>Furniture or appliance disposal</option>
                  <option>Move-in / move-out cleaning</option>
                  <option>Yard debris / landscaping waste</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tell Aaron about the job
                </label>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="What needs to go? Roughly how much?"
                  className="w-full rounded-xl bg-slate-800/80 px-4 py-3 text-sm text-white ring-1 ring-slate-700 focus:outline-none focus:ring-brand min-h-[110px]"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-brand text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.01] transition-transform shadow-lg shadow-brand/30"
              >
                Request my free quote
                <ArrowRight className="size-5" />
              </button>
              <p className="text-xs text-slate-500 text-center">
                No spam. Aaron calls you back personally.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl bg-slate-800/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-slate-700 focus:outline-none focus:ring-brand"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-100 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid md:grid-cols-3 gap-10 items-start">
        <div>
          <img
            src={logoImg}
            alt="Come In Handy — Hauling & Cleaning"
            width={96}
            height={64}
            loading="lazy"
            className="h-20 sm:h-24 w-auto mb-4 object-contain"
          />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-3">
            Atlanta, GA
          </p>
          <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
            Owner-operated junk removal, hauling, and cleaning across the
            Atlanta metro area. Run personally by Aaron Johnson.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Contact</p>
          <a
            href={PHONE_HREF}
            className="block font-heading text-2xl font-bold tracking-tight hover:text-brand transition-colors mb-2"
          >
            330-412-6268
          </a>
          <p className="text-sm text-slate-600">Mon“Sat: 8:00 AM “ 7:00 PM</p>
          <p className="text-sm text-slate-600">Atlanta, GA & metro area</p>
        </div>
        <div className="flex md:justify-end gap-3">
          <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-slate-200 text-center">
            <span className="block text-2xl font-bold text-navy">5.0</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Yelp Rating</span>
          </div>
          <div className="bg-white px-5 py-4 rounded-xl shadow-sm border border-slate-200 text-center">
            <span className="block text-2xl font-bold text-navy">Same-Day</span>
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Service</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 justify-between">
        <span>Â© {new Date().getFullYear()} Come In Handy Atlanta. Owner Operated by Aaron Johnson.</span>
        <span>Licensed & Insured</span>
      </div>
    </footer>
  );
}

function MobileCallBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 sm:hidden pointer-events-none">
      <a
        href={PHONE_HREF}
        className="pointer-events-auto flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-brand text-white font-bold text-base shadow-2xl shadow-brand/40 ring-4 ring-white"
      >
        <Phone className="size-5" />
        Call Aaron: 330-412-6268
      </a>
    </div>
  );
}

