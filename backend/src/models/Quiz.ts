
import mongoose, { Document, Schema } from "mongoose";

export interface IQuiz extends Document {
    title: string;
    description?: string;
    settore?: mongoose.Types.ObjectId | IQuiz;

}

const QuizSchema = new Schema<IQuiz>({
    title: { type: String, required: true },
    description: { type: String }, 
    settore: {
        type: Schema.Types.ObjectId,
        ref: "Settore",
//        required: true
     }
});

export const Quiz = mongoose.model<IQuiz>("Quiz", QuizSchema);
