import { LandingNavbar } from "./LandingNavbar";
import { CandidatesList } from "./CandidatesList";

export function CandidatesPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <LandingNavbar />
      <CandidatesList />
    </div>
  );
}
