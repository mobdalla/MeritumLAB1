import { useEffect, useState } from "react";
import { User } from "lucide-react";

interface Candidate {
  id: number;
  punteggio: number;
  highlighted?: boolean;
}

function getPercentageColor(percentage: number): string {
  if (percentage >= 90) return "bg-blue-500";
  if (percentage >= 80) return "bg-green-500";
  if (percentage >= 70) return "bg-lime-500";
  if (percentage >= 65) return "bg-yellow-400";
  return "bg-red-500";
}

function CandidateItem({ candidate }: { candidate: Candidate }) {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="flex items-center gap-3 flex-1">
        <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center">
          <User size={20} className="text-gray-800" />
        </div>

        <span className="font-bold text-lg text-gray-900">
          {`Candidato ${candidate.id}`}
        </span>
      </div>

      <div
        className={`${getPercentageColor(candidate.punteggio)} text-white font-bold px-6 py-2 rounded-full min-w-[80px] text-center`}
      >
        {candidate.punteggio}%
      </div>
    </div>
  );
}
export function CandidatesList() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/auth/utenti", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          console.log("Errore durante la fetch");
          return;
        }

        const data = await response.json();
        console.log(data);
        setCandidates(data);
      } catch (error) {
        console.error("Errore:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen py-16 px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          Ecco i tuoi migliori candidati
        </h1>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="space-y-2">
            {candidates.map((candidate) => (
              <CandidateItem key={candidate.id} candidate={candidate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
