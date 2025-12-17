import type { UseFormRegister } from "react-hook-form";

interface Question {
  id: string;
  text: string;
  type:
    | "text"
    | "textarea"
    | "select"
    | "radio"
    | "email"
    | "tel"
    | "date"
    | "number";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface QuestionItemProps {
  question: Question;
  questionNumber: number;
  register: UseFormRegister<any>;
  error?: string;
}

export function QuizItem({
  question,
  questionNumber,
  register,
  error,
}: QuestionItemProps) {
  const baseClasses =
    "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all";
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <label className="block mb-3">
        <span className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
            {questionNumber}
          </span>
          <span className="flex-1">
            <span className="text-gray-900 block">
              {question.text}
              {question.required && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </span>
          </span>
        </span>
      </label>

      <div className="ml-11">
        {question.type === "textarea" ? (
          <textarea
            {...register(question.id, {
              required: question.required
                ? "Questo campo è obbligatorio"
                : false,
            })}
            placeholder={question.placeholder || "Inserisci la tua risposta..."}
            rows={4}
            className={`${baseClasses} ${errorClasses} resize-none`}
          />
        ) : question.type === "select" ? (
          <select
            {...register(question.id, {
              required: question.required
                ? "Questo campo è obbligatorio"
                : false,
            })}
            className={`${baseClasses} ${errorClasses}`}
          >
            <option value="">Seleziona un'opzione...</option>
            {question.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : question.type === "radio" ? (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-indigo-50 cursor-pointer transition-colors"
              >
                <input
                  type="radio"
                  {...register(question.id, {
                    required: question.required
                      ? "Questo campo è obbligatorio"
                      : false,
                  })}
                  value={option}
                  className="w-4 h-4 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        ) : (
          <input
            type={question.type}
            {...register(question.id, {
              required: question.required
                ? "Questo campo è obbligatorio"
                : false,
            })}
            placeholder={question.placeholder || "Inserisci la tua risposta..."}
            className={`${baseClasses} ${errorClasses}`}
          />
        )}

        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
}
