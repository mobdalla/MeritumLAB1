import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronRight, ChevronLeft, CheckCircle2, Send } from "lucide-react";
import { QuizSection } from "./QuizSection";
import { ProgressBar } from "../components/ProgressBar";
import {
  FirstCluster,
  SecondoCluster,
  TerzoCluster,
  NonoCluster,
} from "../components/data/Questions.tsx";
import {
  QuartoCluster,
  QuintoCluster,
  SestoCluster,
  SettimoCluster,
} from "../components/data/QuestionsR.tsx";
type FormData = Record<string, string>;

export default function JobForm() {
  const [currentSection, setCurrentSection] = useState<
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  >(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const allValues = watch();

  // Calcola il progresso totale
  const totalQuestions = 100;
  const answeredQuestions = Object.values(allValues).filter(
    (v) => v && v.trim() !== "",
  ).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Calcola il numero iniziale per ogni sezione
  const getStartQuestionNumber = (section: number): number => {
    const sections = [
      FirstCluster,
      SecondoCluster,
      TerzoCluster,
      QuartoCluster,
      QuintoCluster,
      SestoCluster,
      SettimoCluster,
      NonoCluster,
    ];

    let count = 1;
    for (let i = 0; i < section - 1; i++) {
      count += sections[i].length;
    }
    return count;
  };
  const onSubmit = async (data: FormData) => {
    const userId = localStorage.getItem("userId");
    const AziendaId = localStorage.getItem("aziendaId");

    //   console.log("Dati ricevuti dal form:", data);

    const risposte = Object.entries(data)
      .map(([key, value]) => {
        const id = key.startsWith("q") ? Number(key.substring(1)) : Number(key);

        return {
          valoreText: value ?? "",
          domanda: { id: id },
        };
      })
      .filter((item) => item.valoreText !== "")
      .sort((a, b) => a.domanda.id - b.domanda.id);

    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");

    let UserUrl = "";
    let requestBody: any = {};

    if (role === "candidato") {
      UserUrl = "http://localhost:8081/api/form-submit/create";

      requestBody = {
        formId: 2,
        email: email,
        userId: userId,
        settoreId: "RESTORANTE",
        risposte: risposte,
      };
    } else {
      UserUrl = "http://localhost:8081/api/form-submit/createA";

      requestBody = {
        formId: 2,
        email: email,
        aziendaId: AziendaId,
        settoreId: "RESTORANTE",
        risposte: risposte,
      };
    }

    console.log("JSON finale da inviare:");
    //  console.log(JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(UserUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const result = await response.text();
      //     console.log("Risposta server:", result);

      setIsSubmitted(true); // ✅ Mostra schermata successo
    } catch (error) {
      console.error("Errore:", error);
    }
  };
  const goToNextSection = () => {
    if (currentSection < 9) {
      setCurrentSection((prev) => (prev + 1) as typeof currentSection);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousSection = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => (prev - 1) as typeof currentSection);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getSectionTitle = (section: number): string => {
    const titles = [
      "Domande personali e territoriali",
      "Domande sull’istruzione e competenze basilari",
      "Esperienze Generali",
      "Domande su esperienze lavorative e Soft Skills",
      "Operatività nel settore",
      "Trasporti e documentazione ",
      "Software e strumenti utili ",
      "Sicurezza",
      "Obiettivi futuri ",
    ];
    return titles[section - 1] || "";
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
            <h2 className="text-gray-900">Sezione {currentSection} di 9</h2>
            <p className="text-gray-500">{getSectionTitle(currentSection)}</p>
          </div>
          <div className="flex gap-2 flex-wrap max-w-xxl">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setCurrentSection(num as typeof currentSection)}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  currentSection === num
                    ? "bg-indigo-599 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Sez. {num}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {currentSection === 1 && (
            <QuizSection
              questions={FirstCluster}
              register={register}
              errors={errors}
              sectionNumber={1}
              startQuestionNumber={getStartQuestionNumber(1)}
            />
          )}
          {currentSection === 2 && (
            <QuizSection
              questions={SecondoCluster}
              register={register}
              errors={errors}
              sectionNumber={2}
              startQuestionNumber={getStartQuestionNumber(2)}
            />
          )}
          {currentSection === 3 && (
            <QuizSection
              questions={TerzoCluster}
              register={register}
              errors={errors}
              sectionNumber={3}
              startQuestionNumber={getStartQuestionNumber(3)}
            />
          )}
          {currentSection === 4 && (
            <QuizSection
              questions={QuartoCluster}
              register={register}
              errors={errors}
              sectionNumber={4}
              startQuestionNumber={getStartQuestionNumber(4)}
            />
          )}
          {currentSection === 5 && (
            <QuizSection
              questions={QuintoCluster}
              register={register}
              errors={errors}
              sectionNumber={5}
              startQuestionNumber={getStartQuestionNumber(5)}
            />
          )}
          {currentSection === 6 && (
            <QuizSection
              questions={SestoCluster}
              register={register}
              errors={errors}
              sectionNumber={6}
              startQuestionNumber={getStartQuestionNumber(6)}
            />
          )}
          {currentSection === 7 && (
            <QuizSection
              questions={SettimoCluster}
              register={register}
              errors={errors}
              sectionNumber={7}
              startQuestionNumber={getStartQuestionNumber(7)}
            />
          )}
          {currentSection === 8 && (
            <QuizSection
              questions={NonoCluster}
              register={register}
              errors={errors}
              sectionNumber={8}
              startQuestionNumber={getStartQuestionNumber(8)}
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

            {currentSection < 9 ? (
              <button
                type="button"
                onClick={goToNextSection}
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
