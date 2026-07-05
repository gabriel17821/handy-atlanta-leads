import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "./index";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div>
      <div className="bg-sky-50 py-12 text-center border-b border-slate-200">
        <h1 className="font-heading font-extrabold text-4xl text-navy">Projects & Gallery</h1>
      </div>
      <Gallery />
    </div>
  );
}
