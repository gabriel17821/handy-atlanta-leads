import { createFileRoute } from "@tanstack/react-router";
import { ServiceArea } from "./index";

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
});

function ServiceAreasPage() {
  return (
    <div>
      <div className="bg-sky-50 py-12 text-center border-b border-slate-200">
        <h1 className="font-heading font-extrabold text-4xl text-navy">Service Areas</h1>
      </div>
      <ServiceArea />
    </div>
  );
}
