// models/user.js
import mongoose, { Document, Schema } from "mongoose";
import { IQuiz } from "./Quiz";

export type UserRole = "candidato" | "azienda";

export interface IUser extends Document {
  nome: string;
  cognome?: string; // opzionale per azienda
  email: string;
  password: string;
  phone?: string;
  role: UserRole;
  settore?: string;
  quiz?: mongoose.Types.ObjectId | IQuiz;
  score?: number;
}

const userSchema = new Schema<IUser>({
  nome: { type: String, required: true },
  cognome: { type: String }, // solo candidato
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },

  role: {
    type: String,
    enum: ["candidato", "azienda"],
    required: true,
  },
  settore: {
    type: String,
    required: function () {
      return this.role === "candidato"; // Obbligatorio solo per il ruolo "azienda"
    },
  },
  quiz: {
    type: Schema.Types.ObjectId,
    ref: "Quiz",
  },

  score: { type: Number, default: 0 },
});

export const User = mongoose.model<IUser>("User", userSchema);
