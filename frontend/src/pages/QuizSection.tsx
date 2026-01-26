import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuizItem } from "./Quiz";

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

interface QuestionSectionProps {
  questions: Question[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
  sectionNumber: number;
}

export function QuizSection({
  questions,
  register,
  errors,
  sectionNumber,
}: QuestionSectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {questions.map((question, index) => (
          <QuizItem
            key={question.id}
            question={question}
            questionNumber={sectionNumber === 1 ? index + 1 : index + 18}
            register={register}
            error={errors[question.id]?.message as string}
          />
        ))}
      </div>
    </div>
  );
}
