import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, ChevronLeft, CheckCircle2, Send } from "lucide-react";
import { QuizSection } from "./QuizSection";
import { ProgressBar } from "../components/ProgressBar";
import {
  section1Questions,
  section2Questions,
  Domande,
} from "../components/data/Questions.tsx";

type FormData = Record<string, string>;

export default function JobForm() {
  const [currentSection, setCurrentSection] = useState<1 | 2 | 3>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const allValues = watch();

  // Calcola il progresso totale
  const totalQuestions = 100;
  const answeredQuestions = Object.values(allValues).filter(
    (v) => v && v.trim() !== "",
  ).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  const onSubmit = async (data: FormData) => {
    console.log("Dati ricevuti dal form:", data);

    // Trasforma i dati nel formato richiesto
    const payload = Object.entries(data)
      .map(([key, value]) => {
        // Estrai l'ID numerico dalla chiave (rimuovi la "q" se presente)
        const id = key.startsWith("q") ? Number(key.substring(1)) : Number(key);

        return {
          valoreText: value ?? "",
          domanda: { id: id },
        };
      })
      .filter((item) => item.valoreText !== "" && item.valoreText !== null) // Rimuovi vuoti
      .sort((a, b) => a.domanda.id - b.domanda.id); // Ordina per ID

    console.log("Payload formattato:", payload);
    console.log("JSON da inviare:", JSON.stringify(payload, null, 2));

    try {
      const url =
        "http://localhost:8081/api/form-submit/create?form_id=1&settore_id=LOGISTICA&user_id=1";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Errore invio risposte: ${text}`);
      }

      console.log("Risposte inviate con successo!");
      reset(); // ← qui cancella tutti i campi
      setCurrentSection(1); // opzionale: torna alla prima sezione
      setIsSubmitted(true);
    } catch (err) {
      console.error("Errore fetch:", err);
      alert("Errore durante l'invio. Riprova.");
    }
  };

  const goToNextSection = (numero: number) => {
    if (numero === 1) {
      setCurrentSection(2);
    } else if (numero === 2) {
      setCurrentSection(3);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPreviousSection = () => {
    if (currentSection === 2) {
      setCurrentSection(1);
    } else if (currentSection === 3) {
      setCurrentSection(2);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-12 text-center">
        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h2 className="text-green-900 mb-4">
          Candidatura Inviata con Successo!
        </h2>
        <p className="text-gray-600 mb-8">
          Grazie per aver completato il questionario. Riceverai una risposta
          entro 7 giorni lavorativi.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setCurrentSection(1);
          }}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Compila un Altro Questionario
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <ProgressBar
        current={answeredQuestions}
        total={totalQuestions}
        percentage={progressPercentage}
      />

      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-gray-900">Sezione {currentSection} di 3</h2>
            <p className="text-gray-500">
              {currentSection === 1
                ? "Informazioni Personali e Preferenze lavorative"
                : currentSection === 2
                  ? "Esperienze generali nel settore"
                  : "Competenze specifiche"}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrentSection(1)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentSection === 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sez. 1
            </button>
            <button
              type="button"
              onClick={() => setCurrentSection(2)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentSection === 2
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sez. 2
            </button>
            <button
              type="button"
              onClick={() => setCurrentSection(3)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentSection === 3
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Sez. 3
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {currentSection === 1 ? (
            <QuizSection
              questions={section1Questions}
              register={register}
              errors={errors}
              sectionNumber={1}
            />
          ) : currentSection === 2 ? (
            <QuizSection
              questions={Domande}
              register={register}
              errors={errors}
              sectionNumber={2}
            />
          ) : (
            <QuizSection
              questions={section2Questions}
              register={register}
              errors={errors}
              sectionNumber={3}
            />
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={goToPreviousSection}
              disabled={currentSection === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                currentSection === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Precedente
            </button>

            <div className="text-center">
              <p className="text-gray-500">
                {answeredQuestions} di {totalQuestions} domande completate
              </p>
            </div>

            {currentSection === 1 || currentSection === 2 ? (
              <button
                type="button"
                onClick={() => goToNextSection(currentSection)}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Successivo
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Invia Candidatura
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
