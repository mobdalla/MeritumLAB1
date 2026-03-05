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
            questionNumber={
              sectionNumber === 1
                ? index + 1
                : sectionNumber === 2
                  ? index + 19
                  : sectionNumber === 3
                    ? index + 28
                    : sectionNumber === 4
                      ? index + 50
                      : sectionNumber === 5
                        ? index + 59
                        : sectionNumber === 6
                          ? index + 73
                          : sectionNumber === 7
                            ? index + 78
                            : sectionNumber === 8
                              ? index + 88
                              : index + 96
            }
            register={register}
            error={errors[question.id]?.message as string}
          />
        ))}
      </div>
    </div>
  );
}
