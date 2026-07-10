import { createFileRoute } from "@tanstack/react-router";
import { Services, FullServiceList } from "./index";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services | Atlanta Junk Removal & Hauling" },
      { name: "description", content: "Professional junk removal, property clean-outs, and cleaning services in Atlanta. Same-day service available." },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
      {/* Premium Hero Header */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 bg-navy text-white overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] opacity-60" />
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-[80px] opacity-40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-md">
            What We Do
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            Comprehensive <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-300">
              Hauling & Cleaning
            </span>
          </h1>
          <p className="text-slate-300 max-w-2xl text-lg leading-relaxed mb-8">
            From a single mattress haul-away to full-scale estate clean-outs. We handle the heavy lifting and proper disposal so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
             <a
              href="tel:+14703349282"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-2xl font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30"
            >
              Call for a Free Quote
            </a>
            <a
              href="#full-list"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              View Full List
            </a>
          </div>
        </div>
      </section>

      {/* The Imported Services Section */}
      <div className="-mt-12 relative z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
          <Services />
        </div>
      </div>

      <div id="full-list" className="mt-12">
        <FullServiceList />
      </div>
    </main>
  );
}
