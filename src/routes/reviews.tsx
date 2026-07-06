import { createFileRoute } from "@tanstack/react-router";
import { YelpReview } from "./index";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Client Reviews | Come In Handy Atlanta" },
      { name: "description", content: "See why Atlanta trusts Come In Handy for fast, reliable junk removal and cleaning. Read our 5-star Yelp reviews." },
    ],
  }),
});

function ReviewsPage() {
  return (
    <main className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
      {/* Premium Hero Header */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 border border-amber-500/30 backdrop-blur-md">
            ★★★★★ Top Rated
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tight mb-6">
            Hear From Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
              Happy Clients
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            We let our work speak for itself. Check out real stories from homeowners, realtors, and property managers across Atlanta.
          </p>
        </div>
      </section>

      <div className="py-8">
        <YelpReview />
      </div>
    </main>
  );
}
