import { QuizCard } from "./QuizCard";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog.tsx";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { AlertTriangle } from "lucide-react";
const quizzes = [
  {
    id: 1,
    title: "Logistica",
    description: "Compila le domande relative al profilo",
  },
  {
    id: 2,
    title: "Ristorazione",
    description: "Compila le domande relative al profilo ",
  },
  {
    id: 3,
    title: "Categorie Protette",
    description: "Compila le domande relative al profilo ",
  },
];
export function QuizPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<{
    id: number;
    title: string;
  } | null>(null);
  
  const navigate = useNavigate();
  const handleStartQuizClick = (quizId: number, quizTitle: string) => {
    setSelectedQuiz({ id: quizId, title: quizTitle });
    setAcceptedTerms(false);
    setIsDialogOpen(true);
  };

  const handleConfirmStart = () => {
    if (selectedQuiz) {
      console.log(
        `Starting quiz: ${selectedQuiz.title} (ID: ${selectedQuiz.id})`,
      );
      navigate(`/Quiz${selectedQuiz.title}`)
      setIsDialogOpen(false);
      setAcceptedTerms(false);
      setSelectedQuiz(null);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setAcceptedTerms(false);
    setSelectedQuiz(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Quiz Disponibili
        </h2>
        <p className="text-gray-600">
          Scegli un quiz e inizia a metterti alla prova!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            description={quiz.description}
            onStart={() => handleStartQuizClick(quiz.id, quiz.title)}
          />
        ))}
      </div>
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-white max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl border border-gray-200 p-6">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <DialogTitle className="text-2xl">Termini e Condizioni</DialogTitle>
            </div>
            <DialogDescription className="text-base leading-relaxed pt-4">
              Prima di iniziare il quiz, ti preghiamo di leggere e accettare i seguenti termini:
            </DialogDescription>
          </DialogHeader>

          <div className="my-6 p-6 bg-amber-50 border-l-4 border-orange-500 rounded-lg">
            <p className="text-gray-800 leading-relaxed text-base">
              Confermo che tutte le informazioni fornite corrispondono al vero. Sono consapevole
              che la coerenza tra queste risposte e il mio profilo reale sarà oggetto di
              valutazione diretta da parte dell'azienda.
            </p>
            <p className="text-gray-800 leading-relaxed text-base mt-4">
              Una discrepanza accertata tra quanto dichiarato e i fatti (in sede di colloquio o
              durante l'impiego) influirà permanentemente sulla mia valutazione di affidabilità nel
              sistema di MeritumLab.
            </p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-relaxed cursor-pointer select-none"
            >
              Accetto e mi assumo la responsabilità della veridicità delle informazioni.
            </label>
          </div>

          <DialogFooter className="flex gap-3 sm:gap-3">
            <Button
              variant="outline"
              onClick={handleDialogClose}
              className="flex-1 sm:flex-initial"
            >
              Annulla
            </Button>
            <Button
              onClick={handleConfirmStart}
              disabled={!acceptedTerms}
              className="flex-1 sm:flex-initial bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
            >
              Conferma e Inizia
            </Button>
          </DialogFooter>
        </DialogContent>
     </Dialog>
    </div>
  );
}
