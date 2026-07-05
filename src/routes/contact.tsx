import { createFileRoute } from "@tanstack/react-router";
import { QuoteSection } from "./index";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <div className="bg-sky-50 py-12 text-center border-b border-slate-200">
        <h1 className="font-heading font-extrabold text-4xl text-navy">Contact Us</h1>
      </div>
      <QuoteSection />
    </div>
  );
}
