import { createFileRoute } from "@tanstack/react-router";
import { ServiceArea } from "./index";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
  head: () => ({
    meta: [
      { title: "Service Areas | Atlanta Junk Removal & Hauling" },
      { name: "description", content: "We provide same-day junk removal and property clean-outs throughout the greater Atlanta area including Buckhead, Midtown, and Marietta." },
    ],
  }),
});

function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
      <section className="relative pt-32 pb-24 px-4 sm:px-6 bg-slate-900 text-white overflow-hidden">
        {/* Atlanta Skyline / Map background abstract */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/20 text-brand-light text-xs font-bold uppercase tracking-widest mb-6 border border-brand/30 backdrop-blur-md">
              <MapPin className="size-3" /> Locally Owned
            </div>
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tight mb-6">
              Serving The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-sky-300">
                Greater Atlanta Area
              </span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Based in Atlanta, we dispatch same-day hauling and cleaning services across the metro region. Not sure if you're in our zone? Give us a call.
            </p>
            <a
              href="tel:+13304126268"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-brand/30"
            >
              Call Aaron Now
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
             {/* Decorative Map / Location Pin Graphic */}
             <div className="relative w-72 h-72">
               <div className="absolute inset-0 bg-brand/20 rounded-full animate-ping opacity-30" />
               <div className="absolute inset-8 bg-sky-400/20 rounded-full animate-pulse" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white p-6 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 border border-slate-200">
                   <MapPin className="size-20 text-brand" />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      <div className="-mt-10 relative z-20">
        <ServiceArea />
      </div>
    </main>
  );
}
