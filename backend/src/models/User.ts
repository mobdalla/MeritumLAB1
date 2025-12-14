// models/user.js
import mongoose, { Document, Schema } from "mongoose";
import { IQuiz } from "./Quiz";
export interface IUser extends Document {
  email: String;
  password: String;
  phone: String;
  quiz?: mongoose.Types.ObjectId | IQuiz;
  score?: number;
}
const userSchema = new Schema<IUser>({
  email: String,
  password: String,
  phone: String,
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },
  score: { type: Number, default: null },
});

export const User = mongoose.model<IUser>("User", userSchema);
