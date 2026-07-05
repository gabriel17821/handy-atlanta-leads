import { createFileRoute } from "@tanstack/react-router";
import { YelpReview } from "./index";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div>
      <div className="bg-sky-50 py-12 text-center border-b border-slate-200">
        <h1 className="font-heading font-extrabold text-4xl text-navy">Client Reviews</h1>
      </div>
      <YelpReview />
    </div>
  );
}
