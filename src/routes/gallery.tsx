import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "./index";
import { Camera } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Project Gallery | Atlanta Junk Removal & Hauling" },
      { name: "description", content: "View our recent hauling and property clean-out projects in Atlanta. See the before and after transformations." },
    ],
  }),
});

function GalleryPage() {
  return (
    <main className="min-h-screen bg-sky-50 font-body text-navy selection:bg-brand/20">
      <section className="relative pt-32 pb-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 to-navy text-white overflow-hidden text-center">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
        
        <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
          <div className="size-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 shadow-xl">
            <Camera className="size-8 text-sky-400" />
          </div>
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl tracking-tight mb-6">
            Before & After <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-brand">
              Transformations
            </span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            A picture is worth a thousand words. Browse our gallery to see how we restore peace and order to cluttered spaces across Atlanta.
          </p>
        </div>
      </section>

      <div className="-mt-16 sm:-mt-8">
        <Gallery />
      </div>
    </main>
  );
}
