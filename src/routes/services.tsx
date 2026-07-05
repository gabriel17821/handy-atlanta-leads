import { createFileRoute } from "@tanstack/react-router";
import { Services, FullServiceList } from "./index";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      <div className="bg-sky-50 py-12 text-center border-b border-slate-200">
        <h1 className="font-heading font-extrabold text-4xl text-navy">Our Services</h1>
      </div>
      <Services />
      <FullServiceList />
    </div>
  );
}
