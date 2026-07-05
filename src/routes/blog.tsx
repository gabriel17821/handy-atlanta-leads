import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 text-center min-h-[50vh]">
      <h1 className="font-heading font-extrabold text-4xl text-navy mb-4">Blog</h1>
      <p className="text-slate-500">Check back soon for our latest updates and tips on hauling, cleaning, and junk removal!</p>
    </div>
  );
}
